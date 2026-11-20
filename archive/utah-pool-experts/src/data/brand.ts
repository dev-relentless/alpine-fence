export const BRAND = {
  name: 'Utah Pool Experts',
  shortName: 'Pool Experts',
  tagline: 'Clear water, every week.',
  description:
    'Utah Pool Experts is a one-stop service provider for swimming pool and spa cleaning, maintenance, and repair. Since 1996 we\'ve kept Utah pools swim-ready — weekly service routes, chemical balancing, equipment repair, and seasonal openings and closings, all handled by uniformed, factory-trained technicians.',
  shortDescription:
    'Swimming pool & spa cleaning, maintenance, and equipment repair along the Wasatch Front. Weekly routes, chemical service, openings & closings — since 1996.',
  domain: 'utahpoolexperts.com',
  url: 'https://utahpoolexperts.com',
  phone: '(801) 615-0215',
  phoneRaw: '+18016150215',
  smsBody: "Hi Utah Pool Experts — I'd like an estimate on pool service.",
  address: {
    street: '308 West 800 North',
    locality: 'Orem',
    state: 'UT',
    zip: '84057',
    country: 'US',
    region: 'Utah — Wasatch Front',
    serviceArea: [
      'Utah County',
      'Salt Lake County',
      'Wasatch County',
    ],
    cities: [
      'Orem', 'Provo', 'Lehi', 'American Fork', 'Pleasant Grove',
      'Lindon', 'Springville', 'Spanish Fork', 'Saratoga Springs', 'Eagle Mountain',
      'Highland', 'Alpine', 'Draper', 'Sandy', 'Salt Lake City',
    ],
  },
  hours: {
    weekdays: 'Mon–Fri: 8:30am – 5:30pm',
    weekend: 'Sat–Sun: Closed',
  },
  founded: '1996',
  priceRange: '$$',
} as const;
