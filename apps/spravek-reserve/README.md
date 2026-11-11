# Spravek Reserve

Luxury vehicle rentals by allocation — Utah. Standalone Next 14 app, deployed independently to Vercel.
**Spravek Reserve is a DBA of Relentless Equipment LLC**; the legal line appears in the footer, terms, and schema.

## Develop

```bash
# from repo root
npm install
npm run dev:reserve        # http://localhost:3014
```

## Build

```bash
npm run build:reserve
```

## Deploy (Vercel)

Separate Vercel project from this repo (or `VERCEL_TOKEN=… node scripts/vercel-projects.mjs reserve`):

- **Root Directory:** `apps/spravek-reserve`
- **Framework Preset:** Next.js
- **Domain:** `spravekreserve.com` (placeholder — update `src/data/brand.ts` if the domain changes)

## Structure

| Path | Purpose |
| --- | --- |
| `src/data/brand.ts` | Name, tagline, legal line, contact, service area, allocation steps, occasions |
| `src/data/fleet.ts` | The three vehicles: role names, specs, service options, gallery filenames + alt text |
| `src/app/page.tsx` | Home — hero, manifesto, fleet, "The Allocation", occasions, chauffeur, CTA |
| `src/app/fleet/[slug]` | Vehicle pages with spec sheet, lightbox gallery, Product schema |
| `src/app/chauffeur` | S 580 chauffeur service |
| `src/app/allocation` | Request Allocation form (`?vehicle=s-580&service=chauffeured` pre-fills) |
| `src/app/api/allocation` | Form endpoint — currently logs server-side; wire to inbox/CRM before launch |
| `src/components/VMark.tsx` | The beveled Spravek V (silver / gold / flat) |
| `public/reserve/<car>/` | Web-optimized photos (EXIF stripped, 2400px). Originals live in `/brand/spravek-reserve/vehicles` |

## Before launch

- [ ] Phone/email in `brand.ts` currently reuse Relentless Equipment's number — set the Reserve line.
- [ ] Confirm F-350 tow rating against the door-jamb label (see `verifyNote` in `fleet.ts`).
- [ ] Confirm model years and paint names for all three vehicles.
- [ ] Wire `api/allocation` to a real inbox (Resend/Postmark) or CRM.
- [ ] Chauffeur service: confirm commercial livery insurance and SLC airport ground-transportation permit.
- [ ] Rate card: pages say "By allocation"; add pricing when ready.
