import { BRAND } from '@/data/brand';
import { spxServices } from '@/data/services';

/**
 * JSON-LD structured data for SEO + GEO. Renders Organization +
 * LocalBusiness + WebSite + Service nodes. Server-only.
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
      url: BRAND.url,
      telephone: BRAND.phoneRaw,
      description: BRAND.description,
      foundingDate: BRAND.founded,
      parentOrganization: {
        '@type': 'Organization',
        name: BRAND.parent.name,
        url: BRAND.parent.url,
      },
      areaServed: BRAND.address.serviceArea.map((county) => ({
        '@type': 'AdministrativeArea',
        name: `${county}, Utah`,
      })),
      knowsAbout: [
        'design-build construction',
        'custom home building',
        'whole-home renovation',
        'home additions',
        'second story additions',
        'basement finishing',
        'basement walkouts',
        'structural remodeling',
        'concrete construction',
        'garage construction',
      ],
    },
    {
      '@type': 'GeneralContractor',
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
      sameAs: [BRAND.parent.url].filter(Boolean),
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
    ...spxServices.map((s) => ({
      '@type': 'Service',
      '@id': `${BRAND.url}/services#${s.slug}`,
      name: s.title,
      description: s.detail,
      serviceType: s.title,
      provider: { '@id': orgId },
      areaServed: {
        '@type': 'State',
        name: 'Utah',
      },
      url: `${BRAND.url}/services#${s.slug}`,
    })),
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
