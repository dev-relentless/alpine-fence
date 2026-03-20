import { COMPANY, type CityData } from '@/data/cities';

interface SchemaMarkupProps {
  city?: CityData;
  service?: string;
  pageType: 'home' | 'city' | 'service' | 'gallery' | 'about';
  breadcrumbs?: { name: string; url: string }[];
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://alpinefenceanddeck.com/#organization',
    name: COMPANY.name,
    legalName: 'Alpine Fence and Deck LLC',
    url: 'https://alpinefenceanddeck.com',
    logo: 'https://alpinefenceanddeck.com/images/Alpine%20Fence%20and%20Deck_Final%20File%20(3).png',
    foundingDate: '2009',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-801-471-3148',
      contactType: 'customer service',
      areaServed: 'US-UT',
      availableLanguage: 'English',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4692 N 300 W Building 2, Ste 220B',
      addressLocality: 'Provo',
      addressRegion: 'UT',
      postalCode: '84604',
      addressCountry: 'US',
    },
    sameAs: [
      'https://www.google.com/maps/place/Alpine+Fence+and+Deck',
    ],
  };
}

export function generateLocalBusinessSchema(city?: CityData) {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': 'https://alpinefenceanddeck.com/#business',
    name: COMPANY.name,
    image: 'https://alpinefenceanddeck.com/images/Alpine%20Fence%20and%20Deck_Final%20File%20(3).png',
    telephone: '+1-801-471-3148',
    email: COMPANY.email,
    description: 'Utah\'s premier composite fence and deck contractor. Expert refinishing, repair, and exclusive Compozen® composite fence and deck installations across 94 cities.',
    foundingDate: '2009',
    numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 5, maxValue: 20 },
    paymentAccepted: 'Cash, Credit Card, Check, Financing Available',
    currenciesAccepted: 'USD',
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
      : [
          { '@type': 'State', name: 'Utah' },
          { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 40.2338, longitude: -111.6585 }, geoRadius: '120 mi' },
        ],
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
    knowsAbout: [
      'Composite fencing',
      'Composite decking',
      'Fence installation',
      'Deck building',
      'Fence refinishing',
      'Deck refinishing',
      'Fence repair',
      'HOA compliance fencing',
      'Compozen composite materials',
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://alpinefenceanddeck.com/#website',
    name: 'Alpine Fence & Deck',
    url: 'https://alpinefenceanddeck.com',
    description: 'Utah\'s premier composite fence and deck contractor. Compozen® certified installer. Composite fencing, composite decking, refinishing & repair.',
    publisher: { '@id': 'https://alpinefenceanddeck.com/#organization' },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://alpinefenceanddeck.com/service-areas?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'en-US',
  };
}

export function generateBreadcrumbSchema(breadcrumbs: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateReviewSchema(reviews: { name: string; text: string; rating: number }[]) {
  return reviews.map((review) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: String(review.rating),
      bestRating: '5',
    },
    author: {
      '@type': 'Person',
      name: review.name,
    },
    reviewBody: review.text,
    itemReviewed: {
      '@type': 'LocalBusiness',
      name: COMPANY.name,
    },
  }));
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

export default function SchemaMarkup({ city, service, pageType, breadcrumbs }: SchemaMarkupProps) {
  const schemas: object[] = [generateLocalBusinessSchema(city)];

  if (breadcrumbs) {
    schemas.push(generateBreadcrumbSchema(breadcrumbs));
  }

  if (pageType === 'home') {
    schemas.push(generateOrganizationSchema());
    schemas.push(generateWebSiteSchema());
    schemas.push(generateProductSchema());
    schemas.push(generateFAQSchema([
      {
        question: 'What areas does Alpine Fence & Deck serve?',
        answer: 'We serve 94 cities across Utah\'s Wasatch Front, including Salt Lake City, Provo, Orem, Sandy, South Jordan, Layton, Draper, Park City, and more.',
      },
      {
        question: 'What is Compozen® composite fencing?',
        answer: 'Compozen® is a revolutionary composite material that delivers stunning aesthetics with zero maintenance. It won\'t rot, warp, or splinter, and comes with a 25-year material warranty.',
      },
      {
        question: 'How much does a composite fence cost in Utah?',
        answer: 'Composite fence installations typically range from $8,000 to $45,000 depending on the property size, design, and materials. We offer free on-site estimates for accurate pricing.',
      },
      {
        question: 'Do you offer free estimates?',
        answer: 'Yes! We provide free, no-obligation estimates with same-day response. Call (801) 471-3148 or fill out our online quote form.',
      },
      {
        question: 'How long does a composite fence installation take?',
        answer: 'Most composite fence installations are completed within 1-2 weeks depending on the project scope. Refinishing projects are typically completed in 1-3 days.',
      },
    ]));
    schemas.push(...generateReviewSchema([
      { name: 'Cynthia Dunford', text: 'Very professional! First, they repaired my fence and then I had them stain the entire fence. The owner, Chandler, kept me informed every step of the way. The end product was excellent!', rating: 5 },
      { name: 'Scott Poppen', text: 'They repaired, stained, and sealed a 28-year-old fence, making it look like new. They also replaced an old worn-out gate. The crew were very professional and personable.', rating: 5 },
      { name: 'Morgan Busch', text: 'Great communication all around! They power washed the fence and the staining looks gorgeous! Love the way it turned out. Would highly recommend Alpine Fence and Deck!', rating: 5 },
    ]));
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
