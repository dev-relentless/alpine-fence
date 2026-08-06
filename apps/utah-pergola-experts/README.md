# Utah Pergola Experts

Pergola, louvered roof & pavilion brand. Standalone Next 14 app, deployed independently to Vercel at `utahpergolaexperts.com`.

## Develop

```bash
cd apps/utah-pergola-experts
npm install
npm run dev          # http://localhost:3005
```

## Build

```bash
npm run build
npm start
```

## Deploy (Vercel)

Create a **separate** Vercel project from this repo with:

- **Root Directory:** `apps/utah-pergola-experts`
- **Framework Preset:** Next.js
- **Build Command:** `next build` (default)
- **Install Command:** `npm install` (default)
- **Domain:** `utahpergolaexperts.com`

## Brand assets

Drop production logo + favicon files in `public/pergola/`. See `public/pergola/README.md` for filenames the site looks for.

## Quote form

The endpoint at `src/app/api/quote/route.ts` currently logs submissions server-side. Wire it to the office inbox / CRM before launch.
