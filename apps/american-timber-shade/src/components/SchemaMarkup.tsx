import { BRAND } from '@/data/brand';
import { pergolaStyles, pergolaFaqs } from '@/data/pergolas';
import { spaces } from '@/data/spaces';

/**
 * JSON-LD structured data for SEO + GEO. Organization + LocalBusiness +
 * WebSite + Service nodes + FAQPage. Server-only.
 */
export default function SchemaMarkup() {
  const orgId = `${BRAND.url}#organization`;
  const localId = `${BRAND.url}#localbusiness`;
  const siteId = `${BRAND.url}#website`;

  const graph = [
    {
      '@type': 'Organization',
      '@id': orgId,
      name: BRAND.name,
      alternateName: BRAND.shortName,
      slogan: BRAND.tagline,
      url: BRAND.url,
      telephone: BRAND.phoneRaw,
      description: BRAND.description,
      foundingDate: BRAND.founded,
      parentOrganization: {
        '@type': 'Organization',
        name: BRAND.parent.name,
        url: BRAND.parent.url,
      },
      areaServed: BRAND.address.states.map((state) => ({
        '@type': 'State',
        name: state,
      })),
      knowsAbout: [
        'timber pergolas',
        'cedar pergolas',
        'heavy timber construction',
        'mortise and tenon joinery',
        'pavilions',
        'outdoor kitchens',
        'outdoor fireplaces',
        'fire pits',
        'privacy screens',
        'landscape lighting',
        'outdoor living design-build',
        'snow-load engineering',
      ],
    },
    {
      '@type': 'HomeAndConstructionBusiness',
      '@id': localId,
      name: BRAND.name,
      url: BRAND.url,
      telephone: BRAND.phoneRaw,
      priceRange: BRAND.priceRange,
      address: {
        '@type': 'PostalAddress',
        addressLocality: BRAND.address.locality,
        addressRegion: BRAND.address.state,
        addressCountry: BRAND.address.country,
      },
      areaServed: BRAND.address.cities.map((city) => ({
        '@type': 'City',
        name: city,
      })),
      sameAs: [BRAND.parent.url],
      parentOrganization: { '@id': orgId },
    },
    {
      '@type': 'WebSite',
      '@id': siteId,
      url: BRAND.url,
      name: BRAND.name,
      description: BRAND.shortDescription,
      publisher: { '@id': orgId },
      inLanguage: 'en-US',
    },
    ...pergolaStyles.map((p) => ({
      '@type': 'Service',
      '@id': `${BRAND.url}/pergolas#${p.slug}`,
      name: p.title,
      description: p.detail,
      serviceType: 'Pergola construction',
      provider: { '@id': orgId },
      url: `${BRAND.url}/pergolas#${p.slug}`,
    })),
    ...spaces.map((s) => ({
      '@type': 'Service',
      '@id': `${BRAND.url}/outdoor-living#${s.slug}`,
      name: s.title,
      description: s.detail,
      serviceType: s.title,
      provider: { '@id': orgId },
      url: `${BRAND.url}/outdoor-living#${s.slug}`,
    })),
    {
      '@type': 'FAQPage',
      '@id': `${BRAND.url}/pergolas#faq`,
      mainEntity: pergolaFaqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': graph,
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
