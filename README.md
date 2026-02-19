# Alpine Fence & Deck — Compozen® Powered Website

Next.js 14 website for Alpine Fence & Deck, Utah's exclusive Compozen® certified fence and deck installer.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom design tokens
- **SEO:** Dynamic metadata, structured data (Schema.org), XML sitemap
- **Security:** CSP headers, HSTS, rate-limited API routes

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                          # Root layout with header/footer
│   ├── page.tsx                            # Homepage
│   ├── not-found.tsx                       # 404 page
│   ├── sitemap.ts                          # Dynamic XML sitemap
│   ├── robots.ts                           # robots.txt
│   ├── globals.css                         # Global styles + Tailwind
│   ├── [slug]/page.tsx                     # Dynamic city landing pages (94 cities)
│   ├── services/
│   │   ├── page.tsx                        # Services index
│   │   └── [serviceSlug]/page.tsx          # Individual service pages
│   ├── design-studio/page.tsx              # Compozen® 3D Design Studio
│   ├── hoa-compliance/page.tsx             # HOA Compliance Center
│   ├── gallery/page.tsx                    # Project gallery
│   ├── calculator/page.tsx                 # Refinish vs. Replace calculator
│   ├── service-areas/page.tsx              # All 94 service areas
│   ├── quote/page.tsx                      # Quote request form
│   ├── about/page.tsx                      # About page
│   └── api/quote/route.ts                  # Quote submission API (rate-limited)
├── components/
│   ├── Header.tsx                          # Navigation with mobile menu
│   ├── Footer.tsx                          # Footer with CTA banner
│   ├── QuoteForm.tsx                       # Multi-variant quote form
│   └── SchemaMarkup.tsx                    # Structured data (JSON-LD)
└── data/
    ├── cities.ts                           # 94-city database with tiers
    └── services.ts                         # Service definitions
```

## Key Features

### City Landing Pages
Dynamic pages for 94 municipalities across Weber, Davis, Salt Lake, Utah, and surrounding counties. Each page includes:
- City-specific hero with name and county
- Local service listings
- Neighborhood grid (where applicable)
- Compozen® spotlight
- Embedded quote form

### Compozen® Integration
- Design Studio with curated design collection
- Refinish vs. Replace cost calculator
- Upgrade path messaging throughout refinishing pages
- Compozen® badges and certification branding

### HOA Compliance Center
- Address lookup for HOA requirements
- Pre-approved design database
- Common requirement reference
- FAQ section

### SEO & Performance
- Per-page metadata with `generateMetadata`
- LocalBusiness, Service, Product, and Review schema
- Tiered priority in XML sitemap
- Security headers (CSP, HSTS, X-Frame-Options)
- Mobile-first responsive design

### Conversion Architecture
- 4 form variants: full, compact, sidebar, emergency
- API route with rate limiting
- Trust signals and social proof throughout
- Emergency repair CTA with callback guarantee

## City Tiers

| Tier | Population | Cities | Characteristics |
|------|-----------|--------|-----------------|
| Tier 1 | 50,000+ | 9 | Full neighborhood pages, primary SEO targets |
| Tier 2 | 20,000-50,000 | 22 | Neighborhood pages, secondary SEO targets |
| Tier 3 | 5,000-20,000 | 11 | Standard template |
| Micro | Under 5,000 | 52+ | Modular template deployment |

## Environment Variables (Production)

```env
# CMS
STRAPI_URL=https://cms.alpinefenceanddeck.com
STRAPI_TOKEN=your_token

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Email/SMS
SENDGRID_API_KEY=your_key
TWILIO_ACCOUNT_SID=your_sid
TWILIO_AUTH_TOKEN=your_token

# Database
DATABASE_URL=postgresql://...
```

## Deployment

Optimized for Vercel deployment with edge functions and automatic failover.

```bash
# Deploy to Vercel
vercel --prod
```

## Contact

- **Phone:** (801) 555-DECK
- **Address:** 1234 Mountain View Dr, Salt Lake City, UT 84101
- **Email:** info@alpinefenceanddeck.com

---

*Exclusive Compozen® Certified Installer | Transforming Utah's Outdoor Living Since 2009*