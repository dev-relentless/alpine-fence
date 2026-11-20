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
| `src/data/brand.ts` | Name, legal line, contact, hours, service area, how-it-works steps, trust points, driver requirements, cancellation schedule, delivery zones, FAQ, occasions |
| `src/data/fleet.ts` | The three vehicles: specs, details table, inclusions, **rate card** (daily/weekly/deposit/mileage/min age/chauffeur), gallery |
| `src/app/page.tsx` | Home — hero + availability bar, trust bar, fleet grid with rates, how it works, occasions, chauffeur, F-350, locations, FAQ, CTA |
| `src/app/fleet` | Fleet index with comparison table |
| `src/app/fleet/[slug]` | Vehicle pages: rate box, details + performance tables, inclusions, requirements, gallery, FAQ, Product + Breadcrumb schema |
| `src/app/rates` | Rate card, chauffeur rates, inclusions, delivery fees, driver requirements, other fees, cancellation summary |
| `src/app/locations` | Delivery zones + fees, destinations, SLC airport, office & hours |
| `src/app/faq` | FAQ with FAQPage schema |
| `src/app/chauffeur` | S 580 chauffeur service with rates |
| `src/app/allocation` | Inquiry form — pickup/return dates, delivery window, zone, live estimate (`?vehicle=s-580&service=chauffeured&start=&end=` pre-fills) |
| `src/app/terms` | Rental terms + full cancellation & refund schedule (`#cancellation`) |
| `src/app/api/allocation` | Form endpoint — currently logs server-side; wire to inbox/CRM before launch |
| `src/components/VMark.tsx` | The beveled Spravek V (silver / gold / flat) |
| `docs/pocketos-integration-plan.md` | Plan for running the business on Pocket RentalOS while keeping this site as the brand front end (leads → live availability/quotes → sync) |
| `public/reserve/<car>/` | Web-optimized photos (EXIF stripped, 2400px). Originals live in `/brand/spravek-reserve/vehicles` |

## Before launch

- [x] Phone in `brand.ts` is the Reserve line, (801) 663-7935. Confirm `allocations@spravekreserve.com` is a live inbox.
- [ ] Confirm F-350 tow rating against the door-jamb label (see `verifyNote` in `fleet.ts`).
- [ ] Confirm model years and paint names for all three vehicles.
- [ ] Wire `api/allocation` to a real inbox (Resend/Postmark) or CRM.
- [ ] Chauffeur service: confirm commercial livery insurance and SLC airport ground-transportation permit.
- [ ] **Rate card is placeholder.** Confirm every figure in `fleet.ts` → `rates` (daily, weekly, deposit, mileage, extra-mile, min age, chauffeur hourly/minimum/airport flat) and the delivery fees in `brand.ts` → `ZONES`, plus `FEES` in `src/app/rates/page.tsx`. The FAQ answers in `brand.ts` quote the same numbers — keep them in sync.
- [ ] Confirm cancellation schedule (`brand.ts` → `CANCELLATION`) and driver requirements (`REQUIREMENTS`) with the signed agreement / insurer.
- [ ] Confirm hours (`brand.ts` → `hours`) and the Lehi locality shown in the footer and Locations page.
