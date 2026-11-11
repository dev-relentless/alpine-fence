import { BRAND } from '@/data/brand';
import { FLEET, heroSrc } from '@/data/fleet';

export default function SchemaMarkup() {
  const business = {
    '@context': 'https://schema.org',
    '@type': ['AutoRental', 'LocalBusiness'],
    '@id': `${BRAND.url}/#business`,
    name: BRAND.name,
    legalName: BRAND.legalEntity,
    alternateName: 'Spravek Reserve Luxury Vehicle Rentals',
    description: BRAND.description,
    url: BRAND.url,
    telephone: BRAND.phoneRaw,
    email: BRAND.email,
    image: `${BRAND.url}/reserve/og.jpg`,
    logo: `${BRAND.url}/reserve/v-mark.svg`,
    priceRange: BRAND.priceRange,
    foundingDate: BRAND.founded,
    parentOrganization: { '@type': 'Organization', name: BRAND.parent.name, url: BRAND.parent.url },
    address: {
      '@type': 'PostalAddress',
      addressLocality: BRAND.address.locality,
      addressRegion: BRAND.address.state,
      addressCountry: BRAND.address.country,
    },
    areaServed: BRAND.address.serviceArea.map((name) => ({ '@type': 'AdministrativeArea', name })),
    makesOffer: FLEET.map((v) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Car',
        name: `${v.make} ${v.model}`,
        brand: { '@type': 'Brand', name: v.make },
        model: v.model,
        vehicleModelDate: v.year,
        color: v.color,
        image: `${BRAND.url}${heroSrc(v)}`,
        url: `${BRAND.url}/fleet/${v.slug}`,
      },
      availability: 'https://schema.org/LimitedAvailability',
    })),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }} />
  );
}
