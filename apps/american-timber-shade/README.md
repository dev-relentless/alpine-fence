# American Timber Shade

**Premium Outdoor Spaces.** Flagship timber pergolas plus complete outdoor-living design-build (pavilions, kitchens, fire, privacy, lighting, spa surrounds) across the Mountain West. Standalone Next 14 app, deployed independently to Vercel at `americantimbershade.com`.

## Develop

```bash
# from the repo root
npm install
npm run dev:ats          # http://localhost:3007
```

## Build

```bash
npm run build:ats
```

## Photos

The site is photo-forward and ships with every slot rendering a placeholder
that names the file it expects. **See [`public/ats/README.md`](public/ats/README.md)**
for the shot list, sizes, and the auto-discovered gallery folder
(`public/ats/gallery/` — drop files in, they appear on `/gallery`).

## Brand & copy

- `src/data/brand.ts` — name, tagline, phone (**placeholder — replace before launch**), domain, service area.
- `src/data/pergolas.ts` — flagship styles, materials, options, FAQ.
- `src/data/spaces.ts` — outdoor-living offerings.
- `src/data/gallery.ts` — optional captions/tags for gallery photos.

## Deploy (Vercel)

Create a **separate** Vercel project from this repo with:

- **Root Directory:** `apps/american-timber-shade`
- **Framework Preset:** Next.js
- **Domain:** `americantimbershade.com`

## Quote form

`src/app/api/quote/route.ts` currently logs submissions server-side. Wire it to the office inbox / CRM before launch.
