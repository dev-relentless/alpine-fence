export const BRAND = {
  name: 'Apex Concrete',
  shortName: 'Apex',
  tagline: 'Summit-grade concrete for the Wasatch Front.',
  description:
    "Apex Concrete is a full-service concrete contractor on Utah's Wasatch Front — driveways, patios and slabs, footings and foundations, excavation and grading, decorative finishes, commercial flatwork, retaining walls, and repair. Engineered for freeze-thaw, poured on compacted base, and bid in writing.",
  shortDescription:
    'Full-service concrete contractor on the Wasatch Front — flatwork, foundations, excavation, decorative, commercial, walls & repair. Built for Utah winters. Estimates in writing.',
  // Placeholder domain — confirm the production domain before launch.
  domain: 'apexconcreteutah.com',
  url: 'https://apexconcreteutah.com',
  // Placeholder NAP (555-01xx is the reserved fictional range). Replace before indexing.
  phone: '(801) 555-0147',
  phoneRaw: '+18015550147',
  email: 'estimates@apexconcreteutah.com',
  smsBody: "Hi Apex Concrete — I'd like an estimate on a concrete project.",
  hours: 'Mon–Fri 7am–6pm · Sat by appointment',
  address: {
    region: 'Utah — Wasatch Front',
    locality: 'Salt Lake City',
    state: 'UT',
    country: 'US',
    geo: { lat: 40.7608, lng: -111.891 },
    serviceArea: [
      'Salt Lake County',
      'Utah County',
      'Davis County',
      'Weber County',
      'Summit County',
      'Tooele County',
    ],
    cities: [
      'Salt Lake City', 'Sandy', 'Draper', 'South Jordan', 'West Jordan',
      'Herriman', 'Riverton', 'Murray', 'Cottonwood Heights', 'Holladay',
      'Lehi', 'American Fork', 'Saratoga Springs', 'Eagle Mountain', 'Orem', 'Provo',
      'Bountiful', 'Farmington', 'Layton', 'Kaysville', 'Ogden', 'Park City', 'Tooele',
    ],
  },
  /** Spec facts shown across the site — keep honest and consistent. */
  spec: {
    psi: '4,000+ PSI',
    air: '5–7% air-entrained',
    base: '4–6" compacted road base',
    steel: '#4 rebar @ 18" o.c.',
    joints: 'Saw-cut within 24 hrs',
    cure: '7-day wet cure or curing compound',
  },
  founded: '2026',
  priceRange: '$$',
} as const;

export const smsHref = `sms:${BRAND.phoneRaw}?&body=${encodeURIComponent(BRAND.smsBody)}`;
export const telHref = `tel:${BRAND.phoneRaw}`;
