# Nevada Pergola Experts

Pergola, louvered roof & pavilion brand for Nevada. Standalone Next 14 app, deployed independently to Vercel at `nevadapergolaexperts.com`.

Generated from the parameterized template (`apps/arizona-pergola-experts`) by
`scripts/new-pergola-state.mjs`. **Do not hand-edit `src/data/brand.ts`,
`package.json`, or this README** — change the state config in the script and
re-run `node scripts/new-pergola-state.mjs nevada`. Everything else (pages,
components) is shared template code; edit it in the template and re-run
`--all` to propagate.

## Develop

```bash
# from the repo root
npm install
npm run dev:nevada      # http://localhost:3010
```

## Deploy (Vercel)

- **Root Directory:** `apps/nevada-pergola-experts`
- **Framework Preset:** Next.js
- **Domain:** `nevadapergolaexperts.com`

## Before launch

- Phone in `scripts/new-pergola-state.mjs` → `nevada.phone` is a **placeholder**.
- Drop the production logo at `public/pergola/logo.svg` and point `src/components/Logo.tsx` at it (an inline SVG mark is used until then).
- Wire `src/app/api/quote/route.ts` to the inbox / CRM.
- `/lp/pergola` is the ad landing page — paste the GHL form URL into `src/data/landing.ts`.
