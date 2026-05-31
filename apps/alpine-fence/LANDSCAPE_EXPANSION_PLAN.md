# Alpine Fence & Deck — Yard & Landscape Expansion Plan

**Status:** Phase 1 in progress
**Owner:** Alpine Fence & Deck
**Created:** 2026-05-13

---

## Strategic Intent

Add landscape services to Alpine Fence & Deck **as a tracked, carve-ready service line** — built today as part of one unified brand, but architected so a future "Yardworks" division can be cleanly spun out and sold.

> **Build momentum first. Formalize the division later.**

---

## Brand Decisions (locked for Phase 1)

| Decision | Choice | Reason |
|---|---|---|
| Brand strategy | Sub-brand / service line under Alpine Fence & Deck | Avoids "Alpine Landscaping" conflict; protects 20-yr brand equity |
| Customer-facing name | Alpine Fence & Deck (unchanged) | Zero trademark/SEO risk |
| Nav label | **Yard & Landscape** | Neutral, searchable, rebrand-friendly |
| New tagline | **"Built to Define Your Property — Fence, Deck, and Everything Between."** | Evolves existing hero line; signals expansion not pivot |
| Future division name (reserved) | **Alpine Yardworks** | Hold domains/handles; do not deploy yet |
| Phone / domain / GBP | All unchanged | Keep all SEO equity |

---

## Tagline Evolution

- **Existing:** "Built to Define Your Property."
- **New:** "Built to Define Your Property — Fence, Deck, and Everything Between."

The italicized fragment in the current hero (`Your Property.`) stays. Only the supporting line expands.

---

## Service Scope — Phase 1 Launch

Five Tier-1 services that share crews, trucks, and customers with the existing fence/deck operation:

1. **Sod & Lawn Installation** — same dig/grade equipment as fence-post crews
2. **Retaining Walls & Hardscapes** — same structural skill, same permits
3. **Paver Patios & Walkways** — natural pairing with deck quotes
4. **Sprinkler / Irrigation Install & Repair** — trenching adjacent to fence work
5. **Landscape Design & Grading** — premium upsell, owns the yard from day one

**Explicitly excluded** (different business model, wrong customer fit):
- Weekly mowing / maintenance contracts
- Tree removal / arborist work
- Snow removal

---

## Sale-Readiness Architecture

The codebase treats landscape as a separable unit from day one.

### Code-level carve-out hooks

| Hook | Implementation |
|---|---|
| Division tag on services | `division: 'fence-deck' \| 'yard-landscape'` field in `src/data/services.ts` |
| URL namespace | All landscape routes live under `/landscaping/*` (never mixed into `/services/*`) |
| Image namespace | All landscape assets live under `public/images/landscaping/*` |
| Quote attribution | `division` field captured on every quote submission (form + API) |
| Sitemap section | Landscape entries grouped — splittable into `sitemap-landscape.xml` later |
| Schema | Landscape `Service` entries tagged separately in JSON-LD |

### Operational carve-out (outside the codebase — for the owner to action)

- [ ] QuickBooks: tag every landscape invoice with a `Yard & Landscape` class
- [ ] Google Analytics: create a filtered view for `/landscaping/*`
- [ ] CRM / lead spreadsheet: lead-source column tagged by division
- [ ] Reserve domains: `alpineyardworks.com`, `wasatchyardworks.com` (~$50 total)
- [ ] USPTO TESS search for "Alpine Yardworks" before public reveal
- [ ] Reserve social handles `@alpineyardworks` on IG/FB/TikTok (dormant ok)
- [ ] Set up `yard@alpinefenceanddeck.com` mailbox for landscape inquiries
- [ ] Add "Landscaper" + "Landscape designer" as secondary categories on existing Google Business Profile

---

## Phased Rollout

### Phase 1 — Foundation (this PR)
- New `/landscaping` pillar page + dynamic `/landscaping/[serviceSlug]` route
- 5 landscape services in data layer with `division` tag
- "Yard & Landscape" nav item (top-level, not buried under Services)
- Homepage: new section *below* trust bar, *above* fence-types grid
- Tagline update on homepage hero
- Footer column for landscape
- Quote form `division` tracking
- Image folder scaffolding + photo-spec READMEs
- Site metadata: title → "Utah Fence, Deck & Landscape Builder"
- `llms.txt` updated
- Schema markup: landscape services in `hasOfferCatalog`
- **Do not touch existing fence/deck pages** (additive only — protects 20-yr SEO)
- **Do not touch city metadata** (Phase 2 work)

### Phase 2 — Polish (after 5–10 real jobs completed)
- Real photos in landscape gallery (replace placeholders)
- City metadata updates for tier-1 cities only
- Bundle-pricing CTA component ("Add sod + sprinklers to your fence quote, save 10%")
- "20 Years · Utah Owned" anniversary badge
- Landscape testimonials section

### Phase 3 — Scale (after 30 days of conversion data)
- Roll metadata changes to all 94 cities
- Promote landscape to homepage hero rotation
- Per-city landscape service mentions

### Phase 4 — Carve-out (Year 2+, optional)
- Activate `Alpine Yardworks` sub-brand
- Move to subdomain (`yard.alpinefenceanddeck.com`), then standalone domain
- Separate Google Business Profile
- Separate P&L for buyer due diligence

---

## File Changes — Phase 1

| File | Change |
|---|---|
| `src/data/services.ts` | Add `division` field; append 5 landscape service entries |
| `src/app/landscaping/page.tsx` | NEW — pillar landing page |
| `src/app/landscaping/[serviceSlug]/page.tsx` | NEW — dynamic service page (mirrors existing service template) |
| `src/components/Header.tsx` | Add "Yard & Landscape" top-level nav item |
| `src/components/Footer.tsx` | Add landscape column |
| `src/app/page.tsx` | Update tagline; add "Beyond the Fence" homepage section |
| `src/app/layout.tsx` | Update site title metadata |
| `src/components/QuoteForm.tsx` | Add hidden `division` field, populated from referrer service |
| `src/app/api/quote/route.ts` | Log `division` on every submission |
| `src/components/SchemaMarkup.tsx` | Add landscape services to LocalBusiness `hasOfferCatalog` |
| `src/app/sitemap.ts` | Auto-pick up new routes via services data |
| `public/images/landscaping/**` | NEW folder structure with `README.md` photo specs |
| `public/llms.txt` + `llms-full.txt` | Update brand description |

---

## Risk Register

| Risk | Mitigation |
|---|---|
| "Alpine Landscaping" trademark conflict | Never use the word "Landscaping" alone next to "Alpine" in a logo or company name. "Alpine Fence & Deck — Yard & Landscape Services" is fine; "Alpine Landscaping" is not. |
| SEO cannibalization of existing pages | Additive-only changes. Don't touch existing fence/deck pages or copy. |
| Brand confusion / dilution | Single visual identity. Landscape rides Alpine F&D credibility, not its own. |
| Crew capacity / quality risk | Soft launch — only sell landscape to existing fence/deck customers in Phase 1. Don't run paid ads for landscape until Phase 2. |
| Future carve-out painful | Division tagging on data + URLs + analytics + invoices from day 1. |

---

## Success Metrics (Phase 1, first 90 days)

- Landscape pages indexed by Google
- ≥10 landscape quote requests captured (with `division` tag)
- ≥5 landscape jobs completed (provides real photos for Phase 2)
- Zero ranking drops on existing fence/deck keywords
- One landscape testimonial collected

---

## Open Items (post-Phase-1)

- Photographer engaged for landscape gallery shoots
- Decide: when to commission "Yardworks" logo concepts
- Decide: separate landscape crew lead vs. shared crews
- Decide: Phase 2 trigger — calendar-based or job-count-based
