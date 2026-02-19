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
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1234 Mountain View Dr',
      addressLocality: 'Salt Lake City',
      addressRegion: 'UT',
      postalCode: '84101',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.7608,
      longitude: -111.891,
    },
    url: 'https://alpinefenceanddeck.com',
    priceRange: '$$-$$$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '15:00',
      },
    ],
    areaServed: city
      ? { '@type': 'City', name: city.name, containedInPlace: { '@type': 'State', name: 'Utah' } }
      : { '@type': 'State', name: 'Utah' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Fence & Deck Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Deck & Fence Refinishing',
            description: 'Professional refinishing services for wood decks and fences.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Fence & Deck Repair',
            description: 'Expert repair services for damaged fences and decks.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Compozen® Composite Fence Installation',
            description: 'Exclusive Compozen® composite fence installation.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Compozen® Composite Deck Installation',
            description: 'Revolutionary Compozen® composite deck design and installation.',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '347',
      bestRating: '5',
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
      telephone: COMPANY.phone,
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
    description: 'Revolutionary composite materials for zero-maintenance fences and decks. Exclusive to certified installers.',
    brand: {
      '@type': 'Brand',
      name: 'Compozen®',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '8000',
      highPrice: '75000',
      offerCount: '4',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '89',
      bestRating: '5',
    },
  };
}

export default function SchemaMarkup({ city, pageType }: SchemaMarkupProps) {
  const schemas = [generateLocalBusinessSchema(city)];

  if (pageType === 'home' || pageType === 'service') {
    schemas.push(generateProductSchema() as unknown as ReturnType<typeof generateLocalBusinessSchema>);
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
