# Apex Concrete

Independent, full-service concrete contractor brand for Utah's Wasatch Front — flatwork, foundations,
excavation, decorative, commercial, repair & removal, and retaining walls. Standalone Next 14 app,
deployed independently to Vercel. **Not** part of the Spravek / Alpine Fence & Deck family branding.

## Develop

```bash
# from the repo root
npm run dev:apex         # http://localhost:3013
npm run build:apex
```

## Structure

| Path | What |
| --- | --- |
| `src/data/brand.ts` | NAP, service area, spec facts — the single source for copy, schema, `llms.txt` |
| `src/data/services.ts` | The seven service lines (copy, items, spec ticket, FAQs, keywords) |
| `src/data/faq.ts` | Sitewide FAQ (rendered + `FAQPage` JSON-LD on the homepage) |
| `src/app/services/[slug]` | One statically generated page per service with breadcrumb + FAQ schema |
| `src/app/service-area` | Counties & cities page |
| `src/app/estimate` + `src/app/api/estimate` | Estimate form and API route |
| `src/app/opengraph-image.tsx`, `apple-icon.tsx`, `pwa-icon/` | Generated images — no binary brand assets to maintain |
| `src/app/llms.txt/route.ts` | `llms.txt` generated from the data layer |
| `src/components/ServiceDiagram.tsx`, `SlabSection.tsx` | Drafting-style SVG section drawings used as the site's visual system |

## Before launch

- **Phone / email / domain are placeholders.** `BRAND.phone` uses the reserved `555-01xx` range and
  `BRAND.url` is `apexconcreteutah.com`. Replace in `src/data/brand.ts` before the site indexes —
  fake NAP data is a spam signal.
- **Estimate form delivery.** `src/app/api/estimate/route.ts` logs server-side by default. Set
  `ESTIMATE_WEBHOOK_URL` in Vercel (Zapier / Make / Slack / Resend endpoint) and it will POST each
  submission as JSON.
- **Photography.** Drop project photos in `public/apex/projects/` and swap diagrams for photos where
  you have them.

## Deploy (Vercel)

Create a **separate** Vercel project from this repo with:

- **Root Directory:** `apps/apex-concrete`
- **Framework Preset:** Next.js
- **Domain:** confirm with the client (placeholder `apexconcreteutah.com`)

Or run `VERCEL_TOKEN=... node scripts/vercel-projects.mjs apex` from the repo root.
