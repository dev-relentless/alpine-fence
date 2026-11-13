# PocketOS × Spravek Reserve — Integration Plan

_Status: proposal · Written 2026-11-11 · Owner: Relentless Equipment LLC_

## 0. TL;DR

Keep **spravekreserve.com** (this Next.js app on Vercel) as the brand/marketing front end.
Run the business on **Pocket RentalOS** as the system of record — inventory, pricing calendar,
availability, leads, Stripe checkout, deposits, ID/insurance verification, agreements,
check-in/out, porters, reporting.

Connect the two in three phases:

| Phase | What ships | Effort | Dependency on PocketOS |
| --- | --- | --- | --- |
| **1 — Leads** | `api/allocation` forwards every request into Pocket as a lead | ~½ day | Pocket showroom live on a domain |
| **2 — Live data** | Real availability + quotes on vehicle pages and the form; "Book now" → Pocket checkout | 2–3 days | Pocket showroom public MCP for our garage |
| **3 — Ops & sync** | Rates pulled from Pocket at build time; calendar feed; team alerts; agent surfaces (`llms.txt`, `/mcp`) | 2–3 days | Same |

Recommended plan: **GT1+ ($19.99/wk, unlimited vehicles)** — the Starter plan caps at 2 cars and we have 3.

---

## 1. What PocketOS actually is (as of Nov 2026)

Source: pocketos.ai/product/rental-os, pocketos.ai/llms.txt, and inspection of utahautogallery.com (a Pocket-hosted showroom).

**Operator platform ("Pocket RentalOS")**

- Fleet, rentals, leads, folios, pricing calendar (date-specific rates, weekend/holiday multipliers, peak season).
- **Stripe Connect** payouts; per-car **security deposit** with optional automatic hold at check-out; add-ons; rental tax on every quote.
- Renter trust: **Stripe Identity** (ID), **Axle** (insurance verification), **Bonzah** (CDW/SLI protection), AI-drafted **rental agreement** with e-signature.
- Ops: today's schedule, fleet calendar with **iCal feed**, check-out/check-in with miles/fuel/photos, auto overage charges, **porter** dispatch and payouts, tasks/checklists, team alerts (Twilio SMS, Discord, Telegram).
- Reporting: monthly performance per car, utilization, P&L with QuickBooks export; consignment owner reporting.
- Channels: **Turo calendar sync** (inbound only, via forwarded emails), **Pocket Drives** marketplace app (iOS/Android).
- **Operator MCP** at `https://pocketos.ai/mcp` (OAuth, phone sign-in) — run Pocket from Claude/ChatGPT: schedule, availability, quote, create lead, send checkout link, move/cancel bookings.

**White-label showroom website (what UAG runs)**

- Pocket builds and hosts a Next.js rental site on your custom domain with SSL. Instant booking, Stripe checkout, agreement attached, TurboRank SEO (rank tracking, GBP posts, blog).
- Every showroom exposes **public, no-auth machine endpoints** (verified on utahautogallery.com):
  - `GET /.well-known/api-catalog` and `/.well-known/mcp/server-card.json`
  - `POST /mcp` (Streamable HTTP, MCP 2025-06-18) with tools:
    `showroom_search_vehicles`, `showroom_vehicle_detail`, `showroom_availability(asset_id, start_date, days_in_future)`,
    `showroom_get_quote(asset_id | slug, date_start, date_end)` → price breakdown + `checkout_url`, never charges,
    `showroom_create_inquiry(asset_id, first_name, last_name, email, phone_mobile, date_start, date_end, special_purpose)`
  - `POST /api/rental-lead` — same as the website inquiry form
  - `GET /rental/{slug}/index.md` — markdown vehicle page with **daily rate, `asset_id`, 14-day open/blocked dates, earliest start**
  - `GET /llms.txt`, `/auth.md`, and `Accept: text/markdown` on any page
- Images are served from `content.pocketos.ai` (imgproxy-style URLs).

**What PocketOS does _not_ document (confirm with them — see §7)**

- A general-purpose operator REST API or API keys.
- Outbound **webhooks** (booking created/changed/cancelled).
- CORS policy or rate limits on the showroom MCP / lead endpoint.
- Whether the showroom MCP is available if we only use Pocket for checkout (i.e. not as our primary site).

---

## 2. Architecture decision

### Options considered

| Option | Description | Verdict |
| --- | --- | --- |
| **A. Pocket-hosted site only** | Point spravekreserve.com at the Pocket showroom; drop this app | ✗ Loses the brand, design, copy, SEO structure we just built; template look |
| **B. Marketing site + Pocket as back office (recommended)** | This app stays the public face; Pocket is the system of record; integrate via lead endpoint, showroom MCP, and checkout links | ✓ Best of both; incremental; low lock-in |
| **C. Two independent sites** | Pocket showroom on `book.` subdomain, no integration, manual re-keying | ✗ Double data entry, stale rates, no live availability |

### Target topology (Option B)

```
                       ┌──────────────────────────────────────────┐
  spravekreserve.com   │  Next.js 14 (this repo, Vercel)          │
  (brand, SEO, copy)   │  • /fleet, /rates, /locations, /faq …    │
                       │  • /allocation form                      │
                       │  • Route handlers (server-side only):    │
                       │      /api/allocation  ──► lead forward   │
                       │      /api/availability ─► showroom MCP   │
                       │      /api/quote        ─► showroom MCP   │
                       └──────────┬───────────────────┬───────────┘
                                  │ POST /mcp, /api/rental-lead     │ "Book now" link
                                  ▼                                 ▼
                       ┌──────────────────────────────────────────┐
  book.spravekreserve  │  Pocket showroom (Pocket-hosted)         │
  .com                 │  • /rental/{slug} checkout (Stripe)      │
                       │  • Agreement e-sign, Stripe Identity,    │
                       │    Axle insurance, deposit hold          │
                       └──────────────────────────────────────────┘
                                  ▲
                                  │ operators
                       ┌──────────┴───────────────────────────────┐
                       │  Pocket RentalOS (web + app + /mcp)      │
                       │  calendar · folios · porters · P&L       │
                       └──────────────────────────────────────────┘
```

Key rules:

1. **Pocket owns the truth** for availability, pricing calendar, deposits, renter verification, and the folio.
2. **This repo owns the brand**: copy, photography, page structure, SEO, chauffeur content (Pocket has no chauffeur product — see §6).
3. All Pocket calls happen **server-side** in Next route handlers (never from the browser) so we control caching, errors, and can swap the transport later.
4. `src/data/fleet.ts` remains the typed source for content; **rates in it become a generated snapshot** of Pocket pricing (Phase 3), not hand-edited numbers.

---

## 3. Phase 1 — Leads into Pocket (½ day)

**Goal:** every "Request Allocation" lands in Pocket's lead pipeline with the right vehicle and dates. Nothing on the public site changes.

Steps:

1. **Pocket setup**
   - Sign up for GT1+ as `Spravek Reserve` (legal name Relentless Equipment LLC); connect Stripe (Connect) to the Relentless Equipment / Reserve account.
   - Add the three vehicles. Use slugs that match ours: `sl-63`, `s-580`, `f-350`. Upload the photos from `public/reserve/<car>/`.
   - Enter rate card: daily, weekly, deposit, mileage allowance + overage, min age; add weekend/peak multipliers (ski season Dec–Mar, wedding season May–Oct). Set rental tax rate.
   - Turn on the showroom on `book.spravekreserve.com` (CNAME per Pocket's instructions; Pocket handles SSL).
   - Record each vehicle's `asset_id` (visible in `/rental/{slug}/index.md` on the showroom).
2. **Repo: config**
   - `apps/spravek-reserve/.env` (and Vercel env):
     ```
     POCKET_SHOWROOM_URL=https://book.spravekreserve.com
     POCKET_ASSET_SL63=…
     POCKET_ASSET_S580=…
     POCKET_ASSET_F350=…
     ```
   - `src/data/fleet.ts`: add `pocket: { assetId: string; slug: string }` per vehicle (read from env in a tiny `src/lib/pocket.ts`).
3. **Repo: `src/app/api/allocation/route.ts`**
   - After validation, build the Pocket payload (`asset_id`, `first_name`/`last_name` from `name`, `email`, `phone_mobile`, `date_start`, `date_end`, `special_purpose` = occasion + service + zone + notes).
   - `POST ${POCKET_SHOWROOM_URL}/api/rental-lead` (fallback: MCP `showroom_create_inquiry`). 5 s timeout, one retry.
   - Keep the current `console.log` and (per README) still wire an email notification (Resend/Postmark) so a Pocket outage never loses a lead.
   - Return our `R-xxxxx` reference as today; store Pocket's lead id in the log line.
4. **Chauffeur requests**: Pocket has no chauffeur product. Submit them as leads against the S 580 with `special_purpose: "CHAUFFEURED — …"` so they are visible on the same calendar; quote by hand.

Acceptance: a test submission appears as a lead in Pocket within seconds, with the right car and dates; email backup received.

---

## 4. Phase 2 — Live availability, quotes, and checkout (2–3 days)

**Goal:** the site stops saying "we'll get back to you" about facts Pocket already knows.

### 4.1 Pocket client (`src/lib/pocket.ts`)

- Minimal **MCP Streamable-HTTP client**: `initialize` → `tools/call`. Parse `text/event-stream` and JSON responses. Server-only (`import 'server-only'`).
- Functions: `getAvailability(assetId, start, days)`, `getQuote(assetId, start, end)`, `createInquiry(payload)`, `getVehicleDetail(slug)`.
- Cache with `unstable_cache` / `fetch` revalidate: availability 5 min, quotes 0 (per request), vehicle detail 1 h.
- Fallback when MCP is unreachable: parse `/rental/{slug}/index.md` (14-day open/blocked snapshot).

### 4.2 Route handlers

- `GET /api/availability?vehicle=sl-63&start=YYYY-MM-DD&days=60` → `{ open: string[], blocked: string[], earliestStart }`.
- `POST /api/quote { vehicle, start, end }` → `{ total, lineItems, deposit, checkoutUrl? }`.
- Both validate inputs, add rate-limit headers, and never expose `asset_id` mapping to the client beyond what the showroom already publishes.

### 4.3 UI changes

- **Vehicle page** (`fleet/[slug]`): add a 60-day **availability calendar** under the RateBox (server component; blocked dates greyed). "Next available: Nov 16".
- **RateBox**: keep published "from" rate; add "Pick dates for an exact quote" → inline date pickers → calls `/api/quote` → shows Pocket's breakdown (days, multipliers, tax, deposit). If `checkoutUrl` is returned, show **"Book now"** (gold) linking to Pocket checkout, with "Request Allocation" as the secondary path.
- **AllocationForm**: replace the local estimate (`weekly/daily` math) with the Pocket quote when dates are set; disable blocked dates in the date inputs.
- **AvailabilityBar** (home): on submit, if a single vehicle is chosen, land on `/fleet/{slug}?start&end` with the quote open; otherwise `/allocation`.
- **Fleet index**: optional "Available this weekend" badge from cached availability.

### 4.4 Checkout handoff

- Deep-link format (verify with Pocket): `https://book.spravekreserve.com/rental/{slug}?start=YYYY-MM-DD&end=YYYY-MM-DD`, or use the `checkout_url` returned by `showroom_get_quote`.
- Pocket handles: card + deposit hold, agreement e-sign, Stripe Identity, Axle insurance, checkout terms.
- **SEO guard:** the Pocket showroom duplicates vehicle content. Ask Pocket to set `noindex` on `book.` or canonical to the main site; keep `book.` out of our sitemap.
- Match brand: upload the V mark / gold palette to the showroom theme; use the same vehicle names and photos so the handoff feels continuous.

Acceptance: a real blocked date in Pocket shows as unavailable on `/fleet/s-580` within 5 min; a quote for 3 days matches Pocket's own showroom to the cent; "Book now" completes a test checkout in Stripe test mode.

---

## 5. Phase 3 — Sync, operations, agent surfaces (2–3 days)

### 5.1 Rates as a generated snapshot

- `scripts/pocket-sync.mjs`: calls `showroom_vehicle_detail` for each slug and writes `src/data/rates.generated.json` (daily, weekly, deposit, mileage, min age). `fleet.ts` reads from it; hand-written content stays in `fleet.ts`.
- Run in `prebuild` (Vercel) so every deploy carries current rates; add a Vercel **Deploy Hook** and run it from a daily cron (Vercel Cron or GitHub Actions) so price changes in Pocket reach the site without a code change.
- Keep `RATE_NOTE` disclaimer; FAQ answers that quote numbers should interpolate from the same data (today they are hard-coded strings in `brand.ts` — refactor when this lands).

### 5.2 Operations wiring (no code)

- Subscribe the Reserve's shared calendar to Pocket's **iCal feed**; subscribe to a Discord/Telegram channel for check-out/check-in/booking alerts; Twilio SMS for the porter.
- Define porters (delivery/collection jobs with per-job rates) and default checklists (detail, fuel/charge, video condition report — these are promised on the site).
- Turn on **automatic deposit hold at check-out**, **Stripe Identity required**, **Axle insurance required** for instant bookings; set checkout terms = `/terms` text; upload the signed-off rental agreement as the default.
- Owner reporting is irrelevant (no consignment) — leave off.

### 5.3 Agent / AI surfaces on spravekreserve.com

UAG exposes `llms.txt`, `/.well-known/api-catalog`, and an MCP server card so ChatGPT/Claude can answer "is the SL 63 free next weekend" and submit a lead. We already ship `public/llms.txt`. Add:

- `/.well-known/api-catalog` and `/.well-known/mcp/server-card.json` on **our** domain pointing at **our** `/api/availability`, `/api/quote`, `/api/allocation` (or proxying the Pocket showroom's `/mcp`).
- Per-vehicle `/fleet/{slug}/index.md` with the live 14-day snapshot (mirrors Pocket's format so browsing assistants can answer availability without tool calls).
- Markdown content negotiation (`Accept: text/markdown`) is optional.

### 5.4 Operator MCP for the team

Connect `https://pocketos.ai/mcp` to Claude/ChatGPT for staff: "What's on the schedule Saturday?", "Quote the S 580 Dec 20–27 and send a checkout link to …". No code; document in the README.

---

## 6. Gaps PocketOS does not cover (keep in this repo / handle manually)

| Need | PocketOS | Plan |
| --- | --- | --- |
| Chauffeured S 580 (hourly, airport flat) | No chauffeur/ground-transport product | Keep `/chauffeur`, quote by hand; log as Pocket lead; invoice via Stripe payment link from Pocket folio or Stripe directly |
| Delivery zones with fees (Zone A/B/airport) | Add-ons priced per rental | Model Zone B and airport delivery as Pocket **add-ons**; keep `ZONES` copy here |
| Cancellation schedule | Checkout terms text + manual refunds | Paste `/terms#cancellation` as Pocket checkout terms; refunds processed in Stripe/folio by hand |
| Towing capacity check (F-350) | Nothing | Keep as a requirement on the site; verify at check-out checklist |
| 30+ age for SL 63 vs 25+ others | Per-garage renter rules (confirm per-car support) | Ask Pocket; otherwise enforce via agreement + manual review of instant bookings on SL 63, or disable instant booking on SL 63 and keep it request-only |

---

## 7. Questions for PocketOS before Phase 2

1. Is the **showroom MCP / `api/rental-lead`** available on a `book.` subdomain when the primary site is elsewhere? Any CORS/rate limits? Is a server-side origin allow-list possible?
2. Do you offer **webhooks** (booking created/updated/cancelled, check-in/out) or an **operator REST API with API keys**? If not, is the operator MCP (`pocketos.ai/mcp`) usable with a service account for build-time sync?
3. Can the showroom be set **`noindex`** or canonical to spravekreserve.com to avoid duplicate content?
4. Checkout **deep-link parameters** for prefilled dates/add-ons.
5. Per-vehicle **minimum age** and per-vehicle "request only" (no instant booking) toggles.
6. Add-on taxability and whether delivery add-ons can be location-conditional.
7. Theme controls on the showroom (fonts, colors, logo, footer legal line "Spravek Reserve, a DBA of Relentless Equipment LLC").

---

## 8. Risks & mitigations

- **Vendor lock-in / outage** — All Pocket calls sit behind `src/lib/pocket.ts` and three route handlers; the site degrades to today's behaviour (published rates, inquiry form, email backup) if Pocket is down.
- **Price drift** between `fleet.ts` and Pocket — Phase 3 makes Pocket the source and the repo a generated snapshot; until then, change rates in both places (README checklist).
- **Brand break at checkout** — theme the showroom, match slugs/photos/names, keep the handoff to one click, and bring users back with a thank-you link to spravekreserve.com.
- **Undocumented endpoints** — the showroom MCP is public and self-described (server card) but not formally versioned; pin to `protocolVersion 2025-06-18`, add contract tests that run against `book.spravekreserve.com` nightly.
- **Compliance** — card data never touches this app (Stripe-hosted checkout in Pocket). Lead PII is forwarded server-to-server over HTTPS; update `/privacy` to name PocketOS and Stripe as processors.

---

## 9. Checklist

**Phase 1**
- [ ] GT1+ account, Stripe Connect, 3 vehicles with matching slugs, rate card, tax rate
- [ ] `book.spravekreserve.com` live; record `asset_id`s
- [ ] Env vars in Vercel; `src/lib/pocket.ts`; lead forward in `api/allocation`
- [ ] Email backup (Resend/Postmark) wired
- [ ] `/privacy` updated (PocketOS + Stripe as processors)

**Phase 2**
- [ ] MCP client + `/api/availability`, `/api/quote`
- [ ] Availability calendar + live quote on vehicle pages; "Book now" → checkout
- [ ] AllocationForm uses Pocket quotes; blocked dates disabled
- [ ] Showroom themed; `noindex`/canonical confirmed; Stripe test checkout passes

**Phase 3**
- [ ] `scripts/pocket-sync.mjs` → `rates.generated.json`; daily deploy hook
- [ ] iCal, alerts, porters, checklists, auto deposit hold, ID + insurance required
- [ ] `/.well-known/api-catalog`, MCP server card, `/fleet/{slug}/index.md`
- [ ] Nightly contract test against the showroom MCP
- [ ] Team onboarded to `pocketos.ai/mcp` in Claude/ChatGPT
