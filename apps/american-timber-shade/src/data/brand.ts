export const BRAND = {
  name: 'American Timber Shade',
  shortName: 'Timber Shade',
  tagline: 'Premium Outdoor Spaces',
  description:
    'American Timber Shade designs and builds premium outdoor spaces across the Mountain West — flagship timber pergolas, pavilions, outdoor kitchens, fire features, and lighting — engineered for high-altitude sun, wind, and snow and finished to be lived under for decades.',
  shortDescription:
    'Timber pergolas and complete outdoor-living spaces — pavilions, kitchens, fire, lighting — designed and built across the Mountain West. Premium Outdoor Spaces.',
  domain: 'americantimbershade.com',
  url: 'https://americantimbershade.com',
  phone: '(385) 444-9201',
  phoneRaw: '+13854449201',
  smsBody: "Hi American Timber Shade — I'd like to talk about a pergola / outdoor space.",
  address: {
    region: 'Mountain West',
    locality: 'Lehi',
    state: 'UT',
    country: 'US',
    headquarters: 'Wasatch Front, Utah',
    states: ['Utah', 'Idaho', 'Colorado', 'Wyoming', 'Nevada', 'Arizona', 'Washington'],
    cities: [
      'Salt Lake City', 'Park City', 'Lehi', 'Draper', 'St. George',
      'Boise', 'Coeur d\u2019Alene', 'Denver', 'Boulder', 'Fort Collins',
      'Jackson', 'Reno', 'Las Vegas', 'Scottsdale', 'Flagstaff',
    ],
  },
  /**
   * ATS is the national brand; the "<State> Pergola Experts" sites (see
   * src/data/network.ts) are its state arms. Spravek is the holding company.
   */
  parent: {
    name: 'Spravek',
    note: 'The national brand behind the Pergola Experts state sites. A Spravek company — two decades of construction on the Wasatch Front.',
    url: 'https://spravek.com',
  },
  spravekUrl: 'https://spravek.com',
  founded: '2026',
  priceRange: '$$$',
} as const;
