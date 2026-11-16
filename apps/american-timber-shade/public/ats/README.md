# American Timber Shade — Photo Guide

Every photo slot on the site renders a quiet cedar placeholder until the
file exists at the path shown on the placeholder itself. Drop the file in,
rebuild (or restart `npm run dev`), and it appears — no code changes.

All paths below are relative to `apps/american-timber-shade/public/`.

## 1. The gallery (drop everything here first)

**Folder:** `ats/gallery/`

Any `.jpg`, `.jpeg`, `.png`, `.webp`, or `.avif` in this folder is picked up
automatically at build time and shown on `/gallery` (and the first six on
the homepage). Files are sorted by name, so prefix with numbers to control
order:

```
ats/gallery/01-heavy-timber-pergola-park-city.jpg
ats/gallery/02-cedar-pergola-outdoor-kitchen.jpg
ats/gallery/03-pavilion-fire-pit-dusk.jpg
```

Titles are generated from the filename (`02-cedar-pergola-outdoor-kitchen.jpg`
→ "Cedar Pergola Outdoor Kitchen"). To set a proper title, location, or a
filter tag, add an entry in `src/data/gallery.ts`:

```ts
'02-cedar-pergola-outdoor-kitchen.jpg': {
  title: 'Cedar Pergola & Kitchen',
  location: 'Draper, UT',
  tag: 'pergolas', // enables the filter tabs
},
```

Tags: `pergolas` · `pavilions` · `outdoor-kitchens` · `fire-features` ·
`privacy-screens` · `lighting` · `spa-surrounds` · `design-build`

Delivery: JPG, sRGB, long edge 2400px, quality 85–90. Mixed orientation is
fine — the grid crops to 4:5 with every 7th image shown wide at 16:10.

## 2. Named slots

These are the hero and editorial placements. Choose your strongest images.

| Path | Where | Aspect | Target px | Subject |
| --- | --- | --- | --- | --- |
| `ats/hero.jpg` | Homepage hero | 16:9+ | 2400 × 1350 | Flagship pergola at dusk, warm light, headline sits bottom-left — keep that quadrant calm |
| `ats/flagship.jpg` | Homepage flagship | 16:11 | 2000 × 1375 | Cedar pergola over a dining table, wide, daylight |
| `ats/band.jpg` | Homepage dark band | 16:9 | 2400 × 1350 | Pergola lit at night; darkened ~50% — shoot brighter than final |
| `ats/closer.jpg` | Homepage closer | 16:9 | 2400 × 1350 | Pavilion or pergola at blue hour, centered composition |
| `ats/pergolas/hero.jpg` | /pergolas hero | 16:9+ | 2400 × 1350 | Rafters against sky, looking up |
| `ats/pergolas/attached.jpg` | Style I | 16:11 (4:5 on home) | 2000 × 1375 | Attached pergola off the house |
| `ats/pergolas/freestanding.jpg` | Style II | 16:11 (4:5 on home) | 2000 × 1375 | Freestanding over fire pit or dining |
| `ats/pergolas/heavy-timber.jpg` | Style III | 16:11 (4:5 on home) | 2000 × 1375 | Heavy timber, pegged joinery visible |
| `ats/pergolas/detail-joinery.jpg` | Detail | 4:5 | 1600 × 2000 | Close-up of a mortise-and-tenon joint |
| `ats/pergolas/detail-lighting.jpg` | Detail | 4:5 | 1600 × 2000 | Recessed downlight in a rafter |
| `ats/pergolas/detail-shade.jpg` | Detail | 4:5 | 1600 × 2000 | Shade canopy under rafters |
| `ats/pergolas/detail-screen.jpg` | Detail | 4:5 | 1600 × 2000 | Slatted privacy screen |
| `ats/spaces/pavilions.jpg` | Outdoor living | 4:3 | 2000 × 1500 | Timber pavilion with solid roof |
| `ats/spaces/outdoor-kitchens.jpg` | Outdoor living | 4:3 | 2000 × 1500 | Built-in grill / stone counters |
| `ats/spaces/fire-features.jpg` | Outdoor living | 4:3 | 2000 × 1500 | Fire pit or fireplace, evening |
| `ats/spaces/privacy-screens.jpg` | Outdoor living | 4:3 | 2000 × 1500 | Horizontal slat screen |
| `ats/spaces/lighting.jpg` | Outdoor living | 4:3 | 2000 × 1500 | Structure glowing at night |
| `ats/spaces/spa-surrounds.jpg` | Outdoor living | 4:3 | 2000 × 1500 | Hot tub set into deck under cover |
| `ats/spaces/design-build.jpg` | Outdoor living | 4:3 | 2000 × 1500 | Whole yard: pergola + kitchen + fire together |
| `ats/about/crew.jpg` | /about | 16:11 | 2000 × 1375 | Crew raising a beam |
| `ats/about/detail.jpg` | /about | 16:11 | 2000 × 1375 | Hands on timber / joinery |

Slot paths are set in `src/data/pergolas.ts`, `src/data/spaces.ts`, and the
page files — rename there if your files are named differently.

## 3. Brand assets

Logos live in `ats/brand/` (transparent, trimmed, web-ready). Originals as
delivered are in the repo root at `brand/american-timber-shade/logos/`.

| Path | Used where |
| --- | --- |
| `ats/brand/logo-horizontal.png` | Header (dark on light). Derived from the reversed lockup. |
| `ats/brand/logo-horizontal-reversed.png` | Footer and the generated Open Graph card. |
| `ats/brand/logo-primary.png` | Stacked lockup, not placed yet — available for print/social. |
| `ats/brand/emblem.png` | Homepage statement, /about, favicon (`src/app/icon.png`) and `apple-icon.png`. |
| `ats/og.jpg` | Optional 1200 × 630 photo card. Until it exists the site generates one (`src/app/opengraph-image.tsx`). To use the photo, add `images: ['/ats/og.jpg']` to `openGraph` in `src/app/layout.tsx`. |

Rendering is centralised in `src/components/Logo.tsx` and `src/components/Emblem.tsx`.

## Register

Warm, honest, premium. Golden hour or blue hour over harsh noon. Timber
grain and joinery legible. No people looking at camera, no branded gear,
no hoses or ladders, no neighbor's house in focus.
