# Idaho Pergola Experts

Pergola, louvered roof & pavilion brand for Idaho — the Idaho arm of
[American Timber Shade](https://americantimbershade.com). Standalone Next 14 app,
deployed independently to Vercel at `idahopergolaexperts.com`.

Generated from the parameterized template (`apps/arizona-pergola-experts`) by
`scripts/new-pergola-state.mjs`. **Do not hand-edit `src/data/brand.ts`,
`src/data/network.ts`, `package.json`, or this README** — change the state
config in the script and re-run `node scripts/new-pergola-state.mjs idaho`.
Everything else (pages, components) is shared template code; edit it in the
template and re-run `--all` to propagate.

## Site family

Every state site links to the national brand (header bar, footer, JSON-LD
`parentOrganization`) and lists its sibling states on `/locations`; the
national site lists every state on its own `/locations`. The list lives in
the generated `src/data/network.ts`.

## Develop

```bash
# from the repo root
npm install
npm run dev:idaho      # http://localhost:3009
```

## Deploy (Vercel)

- **Root Directory:** `apps/idaho-pergola-experts`
- **Framework Preset:** Next.js
- **Domain:** `idahopergolaexperts.com`

## Before launch

- Drop the production logo in `public/pergola/` and set `idaho.logo` in the script (the shared inline SVG mark is used until then).
- Wire `src/app/api/quote/route.ts` to the inbox / CRM.
- `/lp/pergola` is the ad landing page — paste the GHL form URL into `src/data/landing.ts`.
