export const BRAND = {
  name: 'Spravek Reserve',
  shortName: 'Reserve',
  wordmark: 'SPRAVEK',
  sub: 'RESERVE',
  tagline: 'Luxury Vehicle Rentals · Utah',
  headline: 'Some things are best kept in reserve.',
  description:
    'Spravek Reserve is a small, curated fleet of luxury vehicles in Utah — the AMG SL 63 S E Performance, the Mercedes-Benz S 580 (self-drive or chauffeured), and the F-350 Platinum Plus Dually — released by allocation, delivered to you, along the Wasatch Front and up to Park City.',
  shortDescription:
    'A curated fleet of luxury vehicles in Utah, released by allocation. AMG SL 63 S E Performance · S 580, self-drive or chauffeured · F-350 Platinum Plus Dually.',
  domain: 'spravekreserve.com',
  url: 'https://spravekreserve.com',
  email: 'allocations@spravekreserve.com',
  phone: '(801) 471-3148',
  phoneRaw: '+18014713148',
  smsBody: "Hi Spravek Reserve — I'd like to request an allocation.",
  legalLine: 'Spravek Reserve, a DBA of Relentless Equipment LLC',
  legalEntity: 'Relentless Equipment LLC',
  address: {
    region: 'Utah — Wasatch Front',
    locality: 'Lehi',
    state: 'UT',
    country: 'US',
    serviceArea: ['Salt Lake County', 'Utah County', 'Summit County', 'Wasatch County', 'Davis County'],
    cities: [
      'Salt Lake City', 'Park City', 'Deer Valley', 'Lehi', 'Draper', 'Sandy', 'Holladay',
      'Alpine', 'Highland', 'Provo', 'Heber City', 'Midway', 'Cottonwood Heights',
    ],
    airport: 'Salt Lake City International (SLC)',
  },
  parent: {
    name: 'Relentless Equipment',
    url: 'https://relentlessequipment.com',
  },
  spravekUrl: 'https://spravek.com',
  founded: '2026',
  priceRange: '$$$$',
  social: {
    instagram: 'https://instagram.com/spravekreserve',
  },
} as const;

export const ALLOCATION_STEPS = [
  {
    n: '01',
    title: 'Request',
    body: 'Tell us the vehicle, the dates, and the occasion. There is no "book now" button here; every allocation is confirmed by a person.',
  },
  {
    n: '02',
    title: 'Confirm',
    body: 'We reply within one business day with availability, a quote, and your allocation number. A signed agreement and deposit hold it.',
  },
  {
    n: '03',
    title: 'Arrive',
    body: 'We deliver the vehicle to your door, hotel, or the SLC curb — detailed, fueled or charged, with the key in hand and a card bearing your allocation number.',
  },
] as const;

export const OCCASIONS = [
  { title: 'Weddings', body: 'The Roadster for the exit. The Arrival for the parents. Photos that look like a magazine shoot.', vehicle: 'sl-63' },
  { title: 'Airport & Park City', body: 'Chauffeured from the SLC curb to Deer Valley in the S 580. Ski season, done properly.', vehicle: 's-580' },
  { title: 'Closings & Client Dinners', body: 'Be picked up like you are the reason for the meeting.', vehicle: 's-580' },
  { title: 'Canyon Drives', body: 'Top down through Big Cottonwood, Alpine Loop, or the Mirror Lake Highway. 805 horsepower helps.', vehicle: 'sl-63' },
  { title: 'Boats, Horses & Toy Haulers', body: 'Jordanelle, Bear Lake, or the trailhead. The Statement tows what your truck wishes it could.', vehicle: 'f-350' },
  { title: 'Anniversaries & Birthdays', body: 'A key in a sealed box is a better gift than another dinner.', vehicle: 'sl-63' },
] as const;
