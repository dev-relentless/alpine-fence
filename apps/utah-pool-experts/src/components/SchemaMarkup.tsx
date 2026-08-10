import { BRAND } from '@/data/brand';
import { serviceCategories } from '@/data/services';

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
      areaServed: BRAND.address.serviceArea.map((county) => ({
        '@type': 'AdministrativeArea',
        name: `${county}, Utah`,
      })),
      knowsAbout: [
        'swimming pool cleaning',
        'weekly pool maintenance',
        'pool water chemistry',
        'chemical balancing',
        'pool equipment repair',
        'pool pump repair',
        'pool heater repair',
        'pool filter service',
        'salt water pool systems',
        'spa and hot tub service',
        'pool openings and closings',
        'pool winterization',
        'green pool recovery',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': localId,
      name: BRAND.name,
      url: BRAND.url,
      telephone: BRAND.phoneRaw,
      priceRange: BRAND.priceRange,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BRAND.address.street,
        addressLocality: BRAND.address.locality,
        addressRegion: BRAND.address.state,
        postalCode: BRAND.address.zip,
        addressCountry: BRAND.address.country,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:30',
          closes: '17:30',
        },
      ],
      areaServed: BRAND.address.cities.map((city) => ({
        '@type': 'City',
        name: city,
      })),
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
    ...serviceCategories.map((c) => ({
      '@type': 'Service',
      '@id': `${BRAND.url}/services#${c.slug}`,
      name: c.title,
      description: c.detail,
      serviceType: c.title,
      provider: { '@id': orgId },
      areaServed: {
        '@type': 'State',
        name: 'Utah',
      },
      url: `${BRAND.url}/services#${c.slug}`,
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
