# Utah Pool Experts

Marketing site for Utah Pool Experts — swimming pool & spa cleaning, maintenance,
and equipment repair in Orem, Utah. Serving the Wasatch Front since 1996.

- **Stack**: Next.js 14 (App Router) · TypeScript · Tailwind CSS
- **Dev**: `npm run dev:pool` from the monorepo root (port 3006)
- **Build**: `npm run build:pool`
- **Phone**: (801) 615-0215
- **Domain**: utahpoolexperts.com

Brand assets live in `public/pool/` (see the README there for expected filenames).
The quote API route (`src/app/api/quote/route.ts`) currently logs submissions —
wire it to an inbox/CRM before launch.
