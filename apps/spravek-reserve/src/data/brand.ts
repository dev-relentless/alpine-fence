export const BRAND = {
  name: 'Spravek Reserve',
  shortName: 'Reserve',
  wordmark: 'SPRAVEK',
  sub: 'RESERVE',
  tagline: 'Luxury Vehicle Rentals · Utah',
  headline: 'Luxury car rentals in Utah, delivered to you.',
  description:
    'Spravek Reserve is a small, owned fleet of luxury vehicles for rent in Utah — the Mercedes-AMG SL 63 S E Performance, the Mercedes-Benz S 580 (self-drive or chauffeured), and the Ford F-350 Platinum Plus Dually — delivered along the Wasatch Front, to Park City, and to Salt Lake City International Airport.',
  shortDescription:
    'Luxury car rentals in Utah, delivered to your door. Mercedes-AMG SL 63 S E Performance · Mercedes-Benz S 580, self-drive or chauffeured · Ford F-350 Platinum Plus Dually. Salt Lake City, Park City & SLC airport.',
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
  hours: {
    display: 'Deliveries 7 days a week, 7 am – 9 pm · Phone & email 8 am – 8 pm',
    schema: ['Mo-Su 07:00-21:00'],
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
    body: 'Choose the vehicle, your pickup and return dates, and where you would like it delivered. Requests are reviewed by a person, not an algorithm.',
  },
  {
    n: '02',
    title: 'Confirm',
    body: 'We reply within one business day with availability and a written quote. A signed rental agreement and the security deposit hold your dates.',
  },
  {
    n: '03',
    title: 'Delivery',
    body: 'We deliver the vehicle to your home, hotel, venue, or the SLC curb — detailed, fueled or charged, with a full walkthrough and a condition report.',
  },
] as const;

export const TRUST_POINTS = [
  { title: 'Owned fleet', body: 'Every vehicle is owned and maintained by us. No peer-to-peer listings, no brokered cars.' },
  { title: 'Commercially insured', body: 'Rental and chauffeur operations are covered under commercial policies held by Relentless Equipment LLC.' },
  { title: 'Delivery included', body: 'Delivery and collection are included across the Wasatch Front, with Park City and SLC airport options.' },
  { title: 'Confirmed by a person', body: 'Every request is answered within one business day with a written quote. No surprise fees at handoff.' },
] as const;

export const REQUIREMENTS = [
  { title: 'Driver age', body: 'Drivers must be 25 or older for the S 580 and F-350, and 30 or older for the AMG SL 63. Every driver must be named on the rental agreement.' },
  { title: 'Valid license', body: 'A current, unexpired driver\u2019s license held for at least three years. International renters need a passport and an International Driving Permit alongside their home license.' },
  { title: 'Personal auto insurance', body: 'Full-coverage personal auto insurance that extends to rental vehicles. We verify coverage before delivery; the renter\u2019s policy is primary where applicable.' },
  { title: 'Security deposit', body: 'A refundable security hold on a major credit card in the primary driver\u2019s name, released within 5\u20137 business days of return after inspection.' },
  { title: 'Driving record', body: 'No major violations (DUI, reckless driving, suspension) within the last five years. A quick record check is run before the first rental.' },
  { title: 'Towing', body: 'F-350 renters who are towing must show the trailer\u2019s registration and weight so we can confirm it is within the truck\u2019s rated capacity.' },
] as const;

export const CANCELLATION = {
  summary: 'Plans change. Cancel with notice and your deposit comes back in full; reschedule once at no charge.',
  selfDrive: [
    { window: '14+ days before pickup', outcome: 'Full refund of the deposit and any prepaid rental.' },
    { window: '7\u201313 days before pickup', outcome: 'Deposit refunded; 50% of the first day\u2019s rate is retained.' },
    { window: 'Under 7 days / no-show', outcome: 'First day\u2019s rate is retained; remaining prepaid days refunded.' },
  ],
  chauffeur: [
    { window: '48+ hours before service', outcome: 'Full refund.' },
    { window: 'Under 48 hours', outcome: 'Minimum-hours charge applies.' },
    { window: 'Flight delays', outcome: 'Airport pickups are tracked to your flight at no additional cost.' },
  ],
  notes: [
    'One reschedule within 12 months is free with at least 7 days\u2019 notice.',
    'If we cancel for mechanical or weather reasons (canyon closures, heavy snow for the SL 63), you receive a full refund or a comparable vehicle at your choice.',
    'Early returns are not refunded; late returns are billed in hourly increments after a 30-minute grace period.',
  ],
} as const;

export const ZONES = [
  {
    name: 'Zone A · Included',
    fee: 'Included',
    body: 'Delivery and collection included with every rental.',
    cities: ['Lehi', 'Draper', 'Sandy', 'Salt Lake City', 'Holladay', 'Cottonwood Heights', 'Alpine', 'Highland', 'American Fork', 'Bluffdale', 'Herriman', 'Murray', 'Millcreek'],
  },
  {
    name: 'Zone B · Park City & Utah Valley',
    fee: 'From $95 each way',
    body: 'Ski-season deliveries to Park City and Deer Valley resorts, private residences and Heber Valley.',
    cities: ['Park City', 'Deer Valley', 'Heber City', 'Midway', 'Provo', 'Orem', 'Bountiful', 'Farmington', 'Kaysville'],
  },
  {
    name: 'SLC International Airport',
    fee: 'Included with chauffeur · $75 self-drive',
    body: 'Curbside handoff at the terminal for self-drive rentals; baggage-claim meet & greet with chauffeured service.',
    cities: ['Salt Lake City International (SLC)', 'Private FBOs — Atlantic, Signature, Million Air'],
  },
] as const;

export const FAQ = [
  { q: 'How do I reserve a vehicle?', a: 'Submit a request with the vehicle, your pickup and return dates, and delivery location. We confirm availability and send a written quote within one business day. A signed rental agreement and the security deposit lock in your dates.' },
  { q: 'What are the driver requirements?', a: 'Drivers must be 25+ (30+ for the AMG SL 63) with a valid license held for three or more years, full-coverage personal auto insurance that extends to rentals, a clean record, and a major credit card for the deposit. All drivers must be named on the agreement.' },
  { q: 'Is insurance included?', a: 'Our vehicles are commercially insured. Renters are required to carry their own full-coverage personal auto insurance, which is primary in the event of damage. We verify coverage before delivery and can discuss supplemental damage-waiver options when quoting.' },
  { q: 'How much is the security deposit, and when is it returned?', a: 'Deposits range from $2,500 (S 580, F-350) to $5,000 (AMG SL 63), held on a credit card rather than charged. The hold is released within 5–7 business days after return and inspection.' },
  { q: 'How many miles are included?', a: 'The SL 63 includes 100 miles per day; the S 580 and F-350 include 150 miles per day. Additional miles are billed at the per-mile rate listed on each vehicle. Weekly rentals pool the allowance across the full week.' },
  { q: 'Do you deliver? What does it cost?', a: 'Yes — every rental is delivered and collected. Delivery is included across the Wasatch Front (Lehi to Salt Lake City). Park City, Deer Valley, Heber and Utah Valley deliveries are quoted from $95 each way; SLC airport curbside handoff is $75 for self-drive and included with chauffeured service.' },
  { q: 'Can I rent for a wedding or photo shoot?', a: 'Absolutely — weddings and shoots are a large part of what we do. Tell us the venue and timeline and we will coordinate delivery around the ceremony or call time. The SL 63 and S 580 are also available with a driver for a wedding exit or parents\u2019 arrival.' },
  { q: 'Is the S 580 available with a chauffeur?', a: 'Yes. The S 580 is offered chauffeured by the hour (3-hour minimum), as a flat-rate SLC airport transfer, or for a full day. Chauffeured service is a ground-transportation service and does not require a driver\u2019s license, insurance or deposit from you.' },
  { q: 'Can I tow with the F-350?', a: 'Yes. The F-350 Platinum Plus Dually is configured for gooseneck, fifth-wheel and conventional towing with an integrated brake controller. We will confirm your trailer\u2019s weight is within the truck\u2019s rated capacity, and we deliver to marinas, ranches and trailheads.' },
  { q: 'What is your cancellation policy?', a: 'Cancel 14 or more days before pickup for a full refund. Between 7 and 13 days the deposit is refunded and half of the first day is retained. Inside 7 days the first day\u2019s rate is retained. Chauffeured service is fully refundable up to 48 hours before. One free reschedule is included within 12 months.' },
  { q: 'Are the vehicles allowed on canyon roads and in winter?', a: 'Yes. All three vehicles are all-wheel drive or 4×4. The SL 63 is fitted with all-season performance tires and we may limit it during heavy snow; the S 580 and F-350 run winter-rated tires from November through April. Off-pavement use beyond maintained roads is not permitted.' },
  { q: 'Do you offer long-term or corporate rentals?', a: 'Yes. Weekly rates are listed on each vehicle, and monthly or corporate arrangements for executive travel and relocations are quoted individually. Repeat clients are placed on the Reserve List and offered new vehicles before they are listed.' },
] as const;

export const OCCASIONS = [
  { title: 'Weddings', body: 'The SL 63 for the exit, the S 580 for the parents. Timed to the ceremony and photographed at the entrance.', vehicle: 'sl-63' },
  { title: 'Airport & Park City', body: 'Chauffeured from the SLC curb to Deer Valley in the S 580, or self-drive for the week. Ski season, done properly.', vehicle: 's-580' },
  { title: 'Executive & Client Travel', body: 'Closings, client dinners, board visits. Hourly or full-day chauffeured service with a quiet, professional driver.', vehicle: 's-580' },
  { title: 'Canyon Drives', body: 'Top down through Big Cottonwood, the Alpine Loop, or the Mirror Lake Highway. 805 horsepower helps.', vehicle: 'sl-63' },
  { title: 'Boats, Horses & Toy Haulers', body: 'Jordanelle, Bear Lake, or the trailhead. A dually built for gooseneck and fifth-wheel trailers, delivered to the marina.', vehicle: 'f-350' },
  { title: 'Anniversaries & Birthdays', body: 'A weekend in the roadster, delivered to the driveway with the key in a sealed box.', vehicle: 'sl-63' },
] as const;
