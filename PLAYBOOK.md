# Site Playbook — the system and rules for every new client site

Everything learned building the archived sites (Pergola Experts × 7, American
Timber Shade, Relentless Equipment, pool/concrete/landscape placeholders) is
distilled here. **Read this before starting any new site.** The archived apps in
[`archive/`](./archive) are the reference implementations.

---

## 1. Repo structure (the factory)

- One repo, many independent sites: `apps/<client-site>` npm workspaces, each a
  **Next.js 14 + Tailwind + TypeScript** app and its **own Vercel project**.
- Every app gets its **own dev port** (`3000 + N`, next free: **3003**) in its
  `package.json` dev script.
- New app checklist (in order):
  1. Scaffold `apps/<name>` (copy the structure of an archived app, e.g.
     `archive/american-timber-shade` — strip its content, keep the bones).
  2. Add `dev:<key>` / `build:<key>` scripts to the root `package.json`.
  3. Add a row to the README app table (path, domain, port).
  4. Add an entry to `scripts/vercel-projects.mjs` `APPS`.
  5. `npm install` from the root to link the workspace.

## 2. Data-driven content (the single most important rule)

- **All business facts live in `src/data/brand.ts`** — name, tagline,
  descriptions, domain, phone (display + E.164 raw), SMS body, address, hours,
  service list, prices, `founded`, `priceRange`. Pages *read* from it; nothing
  is hard-coded in JSX.
  - Why: the pergola family stamped 7 state sites from one template only
    because every geo/climate phrase read from `brand.ts`.
- Services/pricing belong in a typed `src/data/services.ts` (or similar) so a
  price change is one line, and the same data drives pages, JSON-LD, and
  `llms.txt`.
- **No fake NAP data in production.** Placeholder phones (`555-01xx`) across
  indexed sites is a spam signal and burns trust. Block indexing (`noindex`)
  until real name/address/phone are in.

## 3. Content & IP rules (non-negotiable)

- **Only ship content the client owns or has licensed.** Photos, copy, and
  logos come from the client or properly licensed sources — never scraped from
  other sites, including the client's *old* site unless they confirm they own
  it outright.
- Facts are fair game: service lists, prices, hours, addresses, licensing
  numbers. Collect the facts, then **write original copy** around them.
- Until client photos arrive, use clearly-marked placeholders
  (`/public/placeholders/…`) and track the swap in the launch checklist.
- Every page must carry **genuinely specific content** (local detail, real
  process, real FAQ answers). Thin templated pages read as doorway spam —
  the state-site family survived because each site had real state-specific
  climate/county/city content.

## 4. SEO system (what worked)

- Per-page `metadata` with **canonical URLs** on every route.
- **JSON-LD** on every site: `LocalBusiness`/`Organization` with `@id =
  https://<domain>#organization`, NAP, `priceRange`, `areaServed`; `Service` or
  `ItemList` where it fits; `FAQPage` for FAQ sections.
- Generated **`llms.txt`** route describing the business for AI crawlers.
- `sitemap.ts` + `robots.ts` generated from the route list.
- Multi-site families: interlink *within Google's spam policies* — a thin
  header attribution bar, a real `/locations` directory with `ItemList`
  JSON-LD, names-only footer links, `parentOrganization`/`subOrganization`
  JSON-LD. **No** keyword-rich sitewide footer blasts, no funnelling, nothing
  hidden.

## 5. Pricing rules

- Before publishing prices, **benchmark 3–5 local competitors** for the same
  services in the client's market.
- Position slightly **above the median, below the premium outlier** — compete
  on perceived quality, not cheapness. Round to clean price points ($95, not
  $93). Keep a dated note of the research next to the pricing data so the next
  revision has a baseline.
- `priceRange` in JSON-LD must match reality ('$$' / '$$$').

## 6. Conversion rules

- Phone number clickable (`tel:` with E.164) in header + footer + hero; SMS
  deep link with a pre-filled body (`sms:` + `smsBody`).
- One primary CTA per page ("Book", "Get a quote") repeated, never competing
  CTAs.
- Quote/booking flow reachable in one tap from every page.

## 7. Vercel deployment system

- One Vercel project per app, **Root Directory** = the app folder. Projects are
  **not** auto-created — run `scripts/vercel-projects.mjs` (creates/links
  project, sets domain, triggers first deploy) or create manually.
- Every app ships a `vercel.json` with an `ignoreCommand` comparing against
  `VERCEL_GIT_PREVIOUS_SHA` (last **successful** deploy, falling back to
  `HEAD^`) so unrelated commits don't rebuild it. "Ignored Build Step returned
  exit code 0" in logs = nothing changed, **not** a failure.
- When a site is retired: `git mv apps/<app> archive/<app>`, remove its root
  scripts + `APPS` entry, update READMEs, and **pause/delete the Vercel
  project** so it stops redeploying.
- DNS: A `76.76.21.21` or CNAME `cname.vercel-dns.com`.

## 8. Launch checklist (every site, every time)

- [ ] Real NAP (no placeholder phones/addresses); `noindex` removed only after
- [ ] Client-owned photos swapped in for all placeholders
- [ ] Pricing benchmarked and dated
- [ ] Canonicals, JSON-LD, sitemap, robots, llms.txt verified
- [ ] `npm run build` clean, Lighthouse pass on mobile
- [ ] Vercel project created, domain attached, DNS pointed
- [ ] Old/duplicate sites for the same business taken down or redirected
