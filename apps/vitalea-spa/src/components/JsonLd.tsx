import { BRAND } from '@/data/brand';
import { SERVICES, fromPrice } from '@/data/services';
import { REVIEWS, RATING } from '@/data/reviews';
import { FAQS } from '@/data/faq';

export function FaqJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        '@id': `${BRAND.url}/faq#faq`,
        url: `${BRAND.url}/faq`,
        inLanguage: 'en',
        about: { '@id': `${BRAND.url}#organization` },
        mainEntity: FAQS.map((f) => ({
          '@type': 'Question',
          name: f.q.en,
          acceptedAnswer: { '@type': 'Answer', text: f.a.en },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: BRAND.shortName, item: BRAND.url },
          { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${BRAND.url}/faq` },
        ],
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    '@id': `${BRAND.url}#organization`,
    name: BRAND.name,
    description: BRAND.shortDescription,
    slogan: BRAND.tagline,
    url: BRAND.url,
    logo: `${BRAND.url}/logo.png`,
    image: [
      `${BRAND.url}/photos/studio-sign.jpg`,
      `${BRAND.url}/photos/couples-room.jpg`,
      `${BRAND.url}/photos/karol.jpg`,
    ],
    telephone: BRAND.phoneRaw,
    email: BRAND.email,
    priceRange: BRAND.priceRange,
    founder: { '@type': 'Person', name: BRAND.founder },
    address: {
      '@type': 'PostalAddress',
      streetAddress: BRAND.address.street,
      addressLocality: BRAND.address.locality,
      addressRegion: BRAND.address.state,
      postalCode: BRAND.address.zip,
      addressCountry: BRAND.address.country,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${BRAND.name}, ${BRAND.address.street}, ${BRAND.address.locality}, ${BRAND.address.state} ${BRAND.address.zip}`,
    )}`,
    openingHoursSpecification: BRAND.hours.schema.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: BRAND.areaServed.map((name) => ({ '@type': 'City', name })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: RATING.value,
      bestRating: '5',
      ratingCount: RATING.count,
    },
    review: REVIEWS.map((r) => ({
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: r.quote,
      author: { '@type': 'Person', name: r.name },
    })),
    makesOffer: SERVICES.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.name, description: s.blurb },
      price: fromPrice(s),
      priceCurrency: 'USD',
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
