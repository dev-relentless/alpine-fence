import { COMPANY, type CityData } from '@/data/cities';

interface SchemaMarkupProps {
  city?: CityData;
  service?: string;
  /** Optional richer data for service pages — emits a proper Service schema. */
  serviceData?: {
    name: string;
    description: string;
    slug: string;
    division?: 'fence-deck' | 'yard-landscape';
    priceRange?: string;
  };
  pageType: 'home' | 'city' | 'service' | 'gallery' | 'about' | 'contact' | 'service-areas';
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
    logo: 'https://alpinefenceanddeck.com/images/alpine-fence-deck-logo.png',
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
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness', 'GeneralContractor'],
    '@id': 'https://alpinefenceanddeck.com/#business',
    name: COMPANY.name,
    alternateName: ['Alpine Fence and Deck', 'Alpine Fencing Utah'],
    image: [
      'https://alpinefenceanddeck.com/images/alpine-fence-deck-logo.png',
      'https://alpinefenceanddeck.com/images/og-image.jpg',
      'https://alpinefenceanddeck.com/images/hero/hero-bg.jpg',
    ],
    logo: 'https://alpinefenceanddeck.com/images/alpine-fence-deck-logo.png',
    telephone: '+1-801-471-3148',
    email: COMPANY.email,
    slogan: 'Quietly raising the standard.',
    description: 'Utah\'s premier fence and deck builder. Wood, vinyl, Sim/Tek, composite, ornamental iron, aluminum, chain link, ranch rail, decking, railings, and custom installations — plus staining, refinishing, repair, and full yard & landscape services (sod, retaining walls, paver patios, sprinklers, landscape design) across 94 cities on the Wasatch Front. Compoxen® certified composite installer.',
    foundingDate: '2009',
    numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 5, maxValue: 20 },
    paymentAccepted: 'Cash, Credit Card, Check, Financing Available',
    currenciesAccepted: 'USD',
    award: ['Compoxen® Certified Installer', '1,700+ Projects Completed'],
    serviceType: [
      'Wood fence installation',
      'Vinyl fence installation',
      'Sim/Tek fence installation',
      'Composite fence installation',
      'Ornamental iron fence installation',
      'Aluminum fence installation',
      'Ranch rail fence installation',
      'Custom gate fabrication',
      'Composite deck installation',
      'Wood deck installation',
      'Iron railing installation',
      'Vinyl railing installation',
      'Fence and deck staining',
      'Fence and deck refinishing',
      'Fence and deck repair',
      'Sod and lawn installation',
      'Retaining wall construction',
      'Paver patio installation',
      'Sprinkler and irrigation installation',
      'Landscape design and grading',
    ],
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
    // Multi-location: surface every Alpine office to Google so each can rank
    // for its local geo. The primary `address` above stays for legacy
    // schema readers; `location` is the preferred multi-place signal.
    location: COMPANY.locations.map((loc) => ({
      '@type': 'Place',
      name: `Alpine Fence & Deck — ${loc.label}`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: loc.street,
        addressLocality: loc.city,
        addressRegion: loc.region,
        postalCode: loc.postalCode,
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: loc.latitude,
        longitude: loc.longitude,
      },
    })),
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
          ...['Salt Lake City', 'Provo', 'Orem', 'Sandy', 'South Jordan', 'West Jordan', 'Lehi', 'American Fork', 'Pleasant Grove', 'Draper', 'Riverton', 'Herriman', 'Bluffdale', 'Cottonwood Heights', 'Holladay', 'Murray', 'Midvale', 'Sugar House', 'Layton', 'Bountiful', 'Centerville', 'Farmington', 'Kaysville', 'Syracuse', 'Clearfield', 'Roy', 'Ogden', 'South Ogden', 'North Ogden', 'Pleasant View', 'Eden', 'Huntsville', 'Park City', 'Heber City', 'Midway', 'Spanish Fork', 'Springville', 'Mapleton', 'Payson', 'Saratoga Springs', 'Eagle Mountain', 'Tooele', 'Stansbury Park', 'Logan', 'North Logan'].map((c) => ({ '@type': 'City', name: c, containedInPlace: { '@type': 'State', name: 'Utah' } })),
        ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Fence & Deck Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Wood Fence Installation',
            description: 'Professional wood fence installation in Utah — privacy, picket, ranch rail, and custom designs in cedar and pine.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Vinyl & Sim/Tek Fence Installation',
            description: 'Vinyl and Sim/Tek fence installation across Utah. Clean lines, lifetime color, engineered for privacy.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Iron & Aluminum Fence Installation',
            description: 'Ornamental iron and aluminum fence installation. Estate-grade elegance, rust-free aluminum for pools and patios.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Composite Fence & Deck Installation',
            description: 'Premium composite fence and deck installation, including Compoxen® certified installs with 25-year material warranty.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Decking & Railings',
            description: 'Custom decks, iron railings, and vinyl railings designed and built for Utah homes.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Fence & Deck Staining',
            description: 'Professional fence and deck staining — prep, premium oil/water-based stains, and weather-resistant sealing.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Deck & Fence Refinishing',
            description: 'Expert refinishing for wood decks and fences. Sanding, staining, and sealing built to last in Utah\'s climate.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Fence & Deck Repair',
            description: 'Fast, reliable fence and deck repair — board replacement, post resetting, gate alignment, and storm damage restoration.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sod & Lawn Installation',
            description: 'Site grading, soil prep, and premium Utah-climate sod installation. Same crews as fence and deck builds.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Retaining Walls & Hardscapes',
            description: 'Engineered block, boulder, and timber retaining walls built for Utah soil, frost, and freeze-thaw cycles.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Paver Patios & Walkways',
            description: 'Custom paver patios, walkways, and driveways on engineered base — designed to integrate with your fence and deck.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sprinkler & Irrigation Install & Repair',
            description: 'New sprinkler installs, smart-controller upgrades, drip irrigation, and repairs across the Wasatch Front.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Landscape Design & Grading',
            description: 'Full-property landscape design and site grading. Plan once, build right — fence, deck, sod, walls, and irrigation as one cohesive yard.',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(COMPANY.googleRating),
      bestRating: '5',
      worstRating: '1',
      reviewCount: '24',
    },
    knowsAbout: [
      'Wood fence installation',
      'Vinyl fence installation',
      'Sim/Tek fence',
      'Composite fencing',
      'Ornamental iron fencing',
      'Aluminum fencing',
      'Ranch rail fencing',
      'Custom gates',
      'Composite decking',
      'Wood decking',
      'Iron railings',
      'Vinyl railings',
      'Fence and deck staining',
      'Fence and deck refinishing',
      'Fence and deck repair',
      'HOA-compliant fencing',
      'Compoxen composite materials',
      'Pool-safe aluminum fencing',
      'Wasatch Front climate engineering',
      'Permit handling and HOA approval',
    ],
    sameAs: [
      'https://www.google.com/maps/place/Alpine+Fence+and+Deck',
      'https://www.facebook.com/alpinefenceanddeck',
      'https://www.instagram.com/alpinefenceanddeck',
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
    description: 'Utah\'s premier fence and deck builder. Wood, vinyl, composite, iron, aluminum, decking, railings, staining, refinishing, and repair across 94 Wasatch Front cities.',
    publisher: { '@id': 'https://alpinefenceanddeck.com/#organization' },
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

export function generateServiceSchema(
  serviceName: string,
  description: string,
  priceRange: string,
  options?: {
    slug?: string;
    division?: 'fence-deck' | 'yard-landscape';
  }
) {
  const serviceType =
    options?.division === 'yard-landscape'
      ? 'Landscape Service'
      : 'Fence and Deck Installation Service';

  const url = options?.slug
    ? options.division === 'yard-landscape'
      ? `https://alpinefenceanddeck.com/landscaping/${options.slug}`
      : `https://alpinefenceanddeck.com/services/${options.slug}`
    : undefined;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType,
    name: serviceName,
    description,
    ...(url ? { url } : {}),
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://alpinefenceanddeck.com/#business',
      name: COMPANY.name,
      telephone: '+1-801-471-3148',
      url: 'https://alpinefenceanddeck.com',
    },
    areaServed: [
      { '@type': 'State', name: 'Utah' },
      {
        '@type': 'GeoCircle',
        geoMidpoint: { '@type': 'GeoCoordinates', latitude: 40.2338, longitude: -111.6585 },
        geoRadius: '120 mi',
      },
    ],
    audience: { '@type': 'Audience', audienceType: 'Homeowners and Property Managers' },
    priceRange,
  };
}

export function generateProductSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Compoxen® Composite Fencing & Decking',
    description: 'Revolutionary composite materials for zero-maintenance fences and decks. Exclusive composite technology available only through certified installers in Utah.',
    brand: {
      '@type': 'Brand',
      name: 'Compoxen®',
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

export default function SchemaMarkup({ city, service, serviceData, pageType, breadcrumbs }: SchemaMarkupProps) {
  const schemas: object[] = [generateLocalBusinessSchema(city)];

  if (breadcrumbs) {
    schemas.push(generateBreadcrumbSchema(breadcrumbs));
  }

  if (pageType === 'home') {
    schemas.push(generateOrganizationSchema());
    schemas.push(generateWebSiteSchema());
    schemas.push(generateFAQSchema([
      {
        question: 'What areas does Alpine Fence & Deck serve?',
        answer: 'We serve 94 cities across Utah\'s Wasatch Front, including Salt Lake City, Provo, Orem, Sandy, South Jordan, Layton, Draper, Park City, and more.',
      },
      {
        question: 'What types of fences do you install?',
        answer: 'We install every major fencing material: wood, vinyl, Sim/Tek, composite, ornamental iron, aluminum, chain link, ranch rail, custom gates, and decking and railing systems.',
      },
      {
        question: 'How much does a fence cost in Utah?',
        answer: 'Fence installations typically range from $3,000 for basic wood privacy to $45,000+ for premium composite and ornamental iron projects, depending on property size, material, and design. We provide free on-site estimates for accurate pricing.',
      },
      {
        question: 'Do you offer free estimates?',
        answer: 'Yes — we provide free, no-obligation estimates with same-day response. Call (801) 471-3148 or fill out our online quote form.',
      },
      {
        question: 'Do you also stain, refinish, and repair fences and decks?',
        answer: 'Absolutely. In addition to new installations, we offer professional fence and deck staining, refinishing, and repair across all 94 cities we serve.',
      },
      {
        question: 'Do you handle yard and landscape work too — sod, walls, pavers, sprinklers?',
        answer: 'Yes. Our Yard & Landscape division installs sod, retaining walls, paver patios and walkways, sprinkler systems, and full landscape design and grading — run by the same crew leads who have built 1,700+ Alpine fences and decks. One company, one warranty, one walkthrough.',
      },
      {
        question: 'Can I bundle a fence or deck with sod, a patio, or a sprinkler system?',
        answer: 'Yes. We project-manage the entire yard as one job — fence, deck, sod, walls, pavers, and irrigation sequenced together so trades do not step on each other and you do not coordinate three contractors.',
      },
    ]));
    schemas.push(...generateReviewSchema([
      { name: 'McCall Jensen', text: 'We just bought a home and honestly had no idea what to do with the yard. Alpine Fence and Deck made it easy. We told them we wanted something clean and low-maintenance, and they helped us pick a simple layout with rock, a few shrubs, and a clean look. Great price.', rating: 5 },
      { name: 'Keith Refsdal', text: 'They did a great job on 2 gates and some short composite fencings! Reasonable price.', rating: 5 },
      { name: 'Ben Meldrum', text: 'This company does absolutely fantastic fencing and decking. I would recommend them above all of the contractors. Great price.', rating: 5 },
      { name: 'Katy Brown', text: 'Alpine Fence and Deck did an excellent job with composite fence installation. Beautiful work. Chandler was friendly, honest, and easy to work with—someone you feel comfortable trusting right away. Highly recommend.', rating: 5 },
      { name: 'George Mastakas', text: 'Swooped in and installed + painted/stained my cedar fence with two gates in less than a week! Cannot be more pleased with the work Chandler and his team did. Price was very fair, overall experience was great, end result was what I expected.', rating: 5 },
      { name: 'Kathy M', text: 'I watched Alpine do my neighbor\u2019s fence and I think they did a very good job. We then hired them to work on our fence for repairs, rebuild a gate, then power wash and paint the entire fence. They also stained a small bridge in our yard.', rating: 5 },
      { name: 'Cynthia Dunford', text: 'I initially called Alpine Fence and Deck for an estimate to repair a section of a wooden panel of my fence that had blown out in a windstorm. Josh came out and gave me a very affordable estimate for repairing it.', rating: 5 },
      { name: 'P&C Wilkinson', text: 'Chandler and his team did a great job. They came when they said they would and finished quickly without sacrificing quality of work. I will use them next time my deck needs to be refinished. Very happy with them!', rating: 5 },
      { name: 'Morgan Busch', text: 'Chandler was great to work with. He communicated regularly to schedule the power wash and staining, working around the rainy days we had in May. Chandler and Jordan worked with us to get the right stain and color and were committed to get it right.', rating: 5 },
    ]));
  }

  if (pageType === 'about') {
    schemas.push(generateOrganizationSchema());
  }

  if (pageType === 'contact') {
    schemas.push(generateOrganizationSchema());
  }

  if (pageType === 'service') {
    if (serviceData) {
      schemas.push(
        generateServiceSchema(
          serviceData.name,
          serviceData.description,
          serviceData.priceRange ?? '$$-$$$$',
          { slug: serviceData.slug, division: serviceData.division }
        )
      );
    } else if (service) {
      schemas.push(
        generateServiceSchema(
          service,
          `Professional ${service.toLowerCase()} by Alpine Fence & Deck — Utah's premier fence and deck builder.`,
          '$$-$$$$'
        )
      );
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
