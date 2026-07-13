# Relentless Equipment

Equipment, attachment & trailer rental brand. Standalone Next 14 app, deployed independently to Vercel at `relentlessequipment.com`.

## Develop

```bash
cd apps/relentless-equipment
npm install
npm run dev          # http://localhost:3003
```

## Build

```bash
npm run build
npm start
```

## Deploy (Vercel)

Create a **separate** Vercel project from this repo with:

- **Root Directory:** `apps/relentless-equipment`
- **Framework Preset:** Next.js
- **Build Command:** `next build` (default)
- **Install Command:** `npm install` (default)
- **Domain:** `relentlessequipment.com`

## Brand assets

Drop production logo + favicon files in `public/relentless/`. See `public/relentless/README.md` for filenames the site looks for.

## Availability form

The endpoint at `src/app/api/reserve/route.ts` currently logs submissions server-side. Wire it to the yard inbox / rental software before launch.
