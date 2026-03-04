import { COMPANY, type CityData } from '@/data/cities';

interface SchemaMarkupProps {
  city?: CityData;
  service?: string;
  pageType: 'home' | 'city' | 'service' | 'gallery' | 'about';
}

export function generateLocalBusinessSchema(city?: CityData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://alpinefenceanddeck.com/#business',
    name: COMPANY.name,
    image: 'https://alpinefenceanddeck.com/images/logo.png',
    telephone: '+1-801-471-3148',
    email: COMPANY.email,
    description: 'Utah\'s premier composite fence and deck contractor. Expert refinishing, repair, and exclusive Compozen® composite fence and deck installations across 94 cities.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4692 N 300 W Building 2, Ste 220B',
      addressLocality: 'Provo',
      addressRegion: 'UT',
      postalCode: '84604',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.2338,
      longitude: -111.6585,
    },
    url: 'https://alpinefenceanddeck.com',
    priceRange: '$$-$$$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    areaServed: city
      ? { '@type': 'City', name: city.name, containedInPlace: { '@type': 'State', name: 'Utah' } }
      : { '@type': 'State', name: 'Utah' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Composite Fence & Deck Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Deck & Fence Refinishing',
            description: 'Professional refinishing services for wood decks and fences in Utah.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Fence & Deck Repair',
            description: 'Expert fence and deck repair services. Upgrade path to composite available.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Compozen® Composite Fence Installation',
            description: 'Exclusive Compozen® composite fence installation. Zero-maintenance composite fencing with 25-year warranty.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Compozen® Composite Deck Installation',
            description: 'Revolutionary Compozen® composite deck design and installation. Premium composite decking in Utah.',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(COMPANY.googleRating),
      bestRating: '5',
      reviewCount: '18',
    },
    sameAs: [
      'https://www.google.com/maps/place/Alpine+Fence+and+Deck',
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Alpine Fence & Deck',
    url: 'https://alpinefenceanddeck.com',
    description: 'Utah\'s premier composite fence and deck contractor. Compozen® certified installer. Composite fencing, composite decking, refinishing & repair.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://alpinefenceanddeck.com/service-areas?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateServiceSchema(serviceName: string, description: string, priceRange: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY.name,
      telephone: '+1-801-471-3148',
    },
    areaServed: {
      '@type': 'State',
      name: 'Utah',
    },
    priceRange,
  };
}

export function generateProductSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Compozen® Composite Fencing & Decking',
    description: 'Revolutionary composite materials for zero-maintenance fences and decks. Exclusive composite technology available only through certified installers in Utah.',
    brand: {
      '@type': 'Brand',
      name: 'Compozen®',
    },
    category: 'Composite Fencing & Decking Materials',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '8000',
      highPrice: '75000',
      offerCount: '4',
    },
  };
}

export default function SchemaMarkup({ city, service, pageType }: SchemaMarkupProps) {
  const schemas: object[] = [generateLocalBusinessSchema(city)];

  if (pageType === 'home') {
    schemas.push(generateWebSiteSchema());
    schemas.push(generateProductSchema());
  }

  if (pageType === 'service') {
    schemas.push(generateProductSchema());
    if (service) {
      schemas.push(generateServiceSchema(
        service,
        `Professional ${service.toLowerCase()} by Alpine Fence & Deck. Utah's trusted composite fence and deck contractor.`,
        '$$-$$$$'
      ));
    }
  }

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
