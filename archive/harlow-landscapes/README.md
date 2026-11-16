# Harlow Landscapes

Premium landscape design-build brand. Standalone Next 14 app, deployed independently to Vercel at `harlowlandscapes.com`.

## Develop

```bash
cd apps/harlow-landscapes
npm install
npm run dev          # http://localhost:3001
```

## Build

```bash
npm run build
npm start
```

## Deploy (Vercel)

Create a **separate** Vercel project from this repo with:

- **Root Directory:** `apps/harlow-landscapes`
- **Framework Preset:** Next.js
- **Build Command:** `next build` (default)
- **Install Command:** `npm install` (default)
- **Domain:** `harlowlandscapes.com`

The existing Alpine Fence & Deck Vercel project remains untouched until you run the monorepo migration script (see `/scripts/migrate-to-monorepo.sh` at the repo root, when present).

## Brand assets

Drop production logo + favicon files in `public/harlow/`. See `public/harlow/README.md` for filenames the site looks for.

## Inquiry form

The inquiry endpoint at `src/app/api/inquiry/route.ts` currently logs submissions server-side. Wire it to the studio's inbox / CRM (Resend, Postmark, HubSpot, etc.) before launch.
