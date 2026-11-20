export const BRAND = {
  name: 'Vitalea Wellness Center',
  shortName: 'Vitalea',
  tagline: 'Tu Vitalidad es mi Inspiración',
  description:
    'Vitalea Wellness Center is a private massage and wellness studio in Draper, Utah, founded by Karol Natalia. One guest (or one couple) at a time: therapeutic massage, hydrofacials, lymphatic drainage, reflexology, and paraffin treatments in a quiet, unhurried setting.',
  shortDescription:
    'A private massage & wellness studio in Draper, UT — massage, hydrofacials, lymphatic drainage, and reflexology by Karol Natalia.',
  domain: 'vitaleaspa.com',
  url: 'https://vitaleaspa.com',
  phone: '(385) 592-7957',
  phoneRaw: '+13855927957',
  email: 'vitaleallc@gmail.com',
  smsBody: "Hi Vitalea — I'd like to book a session.",
  founder: 'Karol Natalia',
  address: {
    street: '392 E 12300 S, Suite E1',
    locality: 'Draper',
    state: 'UT',
    zip: '84020',
    country: 'US',
  },
  hours: {
    display: 'Mon–Sat · 9am – 7pm · Sunday by appointment',
    schema: [
      { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '19:00' },
    ],
  },
  priceRange: '$$',
  areaServed: ['Draper', 'Sandy', 'South Jordan', 'Riverton', 'Lehi', 'Salt Lake City'],
} as const;
