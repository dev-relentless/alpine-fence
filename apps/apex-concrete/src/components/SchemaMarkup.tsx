import { BRAND } from '@/data/brand';
import { services } from '@/data/services';
import JsonLd from './JsonLd';

export const ORG_ID = `${BRAND.url}#organization`;
export const LOCAL_ID = `${BRAND.url}#localbusiness`;
export const SITE_ID = `${BRAND.url}#website`;

/**
 * Sitewide JSON-LD: Organization + LocalBusiness + WebSite + one Service
 * node per service line. Page-specific nodes (FAQPage, BreadcrumbList)
 * are added by the pages themselves via <JsonLd />.
 */
export default function SchemaMarkup() {
  const graph = [
    {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: BRAND.name,
      alternateName: BRAND.shortName,
      url: BRAND.url,
      logo: `${BRAND.url}/icon.svg`,
      telephone: BRAND.phoneRaw,
      email: BRAND.email,
      description: BRAND.description,
      foundingDate: BRAND.founded,
      areaServed: BRAND.address.serviceArea.map((county) => ({
        '@type': 'AdministrativeArea',
        name: `${county}, Utah`,
      })),
      knowsAbout: [
        'concrete contractor',
        'concrete driveways',
        'concrete patios',
        'garage and shop slabs',
        'footings and foundations',
        'excavation and grading',
        'stamped and decorative concrete',
        'exposed aggregate',
        'commercial concrete',
        'concrete repair and leveling',
        'concrete removal',
        'retaining walls',
      ],
    },
    {
      '@type': ['LocalBusiness', 'GeneralContractor'],
      '@id': LOCAL_ID,
      name: BRAND.name,
      image: `${BRAND.url}/opengraph-image`,
      url: BRAND.url,
      telephone: BRAND.phoneRaw,
      email: BRAND.email,
      priceRange: BRAND.priceRange,
      address: {
        '@type': 'PostalAddress',
        addressLocality: BRAND.address.locality,
        addressRegion: BRAND.address.state,
        addressCountry: BRAND.address.country,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: BRAND.address.geo.lat,
        longitude: BRAND.address.geo.lng,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '07:00',
          closes: '18:00',
        },
      ],
      areaServed: BRAND.address.cities.map((city) => ({ '@type': 'City', name: `${city}, UT` })),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Concrete services',
        itemListElement: services.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@id': `${BRAND.url}/services/${s.slug}#service` },
        })),
      },
      parentOrganization: { '@id': ORG_ID },
    },
    {
      '@type': 'WebSite',
      '@id': SITE_ID,
      url: BRAND.url,
      name: BRAND.name,
      description: BRAND.shortDescription,
      publisher: { '@id': ORG_ID },
      inLanguage: 'en-US',
    },
    ...services.map((s) => ({
      '@type': 'Service',
      '@id': `${BRAND.url}/services/${s.slug}#service`,
      name: s.title,
      description: s.blurb,
      serviceType: s.title,
      provider: { '@id': LOCAL_ID },
      areaServed: { '@type': 'State', name: 'Utah' },
      url: `${BRAND.url}/services/${s.slug}`,
    })),
  ];

  return <JsonLd data={{ '@context': 'https://schema.org', '@graph': graph }} />;
}
