# Braddock Concrete

Concrete & excavation contractor brand. Standalone Next 14 app, deployed independently to Vercel at `braddockconcrete.com`.

## Develop

```bash
cd apps/braddock-concrete
npm install
npm run dev          # http://localhost:3004
```

## Build

```bash
npm run build
npm start
```

## Deploy (Vercel)

Create a **separate** Vercel project from this repo with:

- **Root Directory:** `apps/braddock-concrete`
- **Framework Preset:** Next.js
- **Build Command:** `next build` (default)
- **Install Command:** `npm install` (default)
- **Domain:** `braddockconcrete.com`

## Brand assets

Drop production logo + favicon files in `public/braddock/`. See `public/braddock/README.md` for filenames the site looks for.

## Bid form

The endpoint at `src/app/api/bid/route.ts` currently logs submissions server-side. Wire it to the office inbox / CRM before launch.
