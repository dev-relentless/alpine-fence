import { BRAND } from '@/data/brand';
import { structureCategories } from '@/data/structures';
import { NETWORK_PARENT } from '@/data/network';

/**
 * JSON-LD structured data for SEO + GEO. Renders Organization +
 * LocalBusiness + WebSite + Service nodes. Server-only.
 *
 * The parent is referenced by the same `@id` the ATS site publishes for
 * itself, so Google can stitch the state sites and the national brand into
 * one entity graph (ATS lists each state org under `subOrganization`).
 */
export default function SchemaMarkup() {
  const orgId = `${BRAND.url}#organization`;
  const localId = `${BRAND.url}#localbusiness`;
  const siteId = `${BRAND.url}#website`;
  const parentOrgId = `${NETWORK_PARENT.url}#organization`;

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
      ...(BRAND.logo ? { logo: `${BRAND.url}${BRAND.logo.src}` } : {}),
      parentOrganization: {
        '@type': 'Organization',
        '@id': parentOrgId,
        name: NETWORK_PARENT.name,
        url: NETWORK_PARENT.url,
      },
      areaServed: BRAND.address.serviceArea.map((county) => ({
        '@type': 'AdministrativeArea',
        name: `${county}, ${BRAND.state}`,
      })),
      knowsAbout: [
        'pergola construction',
        'cedar pergolas',
        'attached pergolas',
        'freestanding pergolas',
        'louvered pergolas',
        'motorized pergola roofs',
        'pavilions',
        'gazebos',
        'patio covers',
        'shade structures',
        'outdoor living design',
        ...(BRAND.climate.snow ? ['snow-load engineering'] : ['wind-rated anchoring', 'UV-stable finishes']),
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
        addressLocality: BRAND.address.locality,
        addressRegion: BRAND.address.state,
        addressCountry: BRAND.address.country,
      },
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
    ...structureCategories.map((c) => ({
      '@type': 'Service',
      '@id': `${BRAND.url}/pergolas#${c.slug}`,
      name: c.title,
      description: c.detail,
      serviceType: c.title,
      provider: { '@id': orgId },
      areaServed: {
        '@type': 'State',
        name: BRAND.state,
      },
      url: `${BRAND.url}/pergolas#${c.slug}`,
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
