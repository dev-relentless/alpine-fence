import { BRAND } from '@/data/brand';
import { pageMetadata } from '@/data/seo';
import { Packages } from '@/components/Offers';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata = pageMetadata(
  'Massage Packages & Add-Ons in Draper, UT',
  `VIP Massage 3-packs and 5-packs, plus hot stone, paraffin, and aromatherapy add-ons at ${BRAND.name} in ${BRAND.address.locality}, ${BRAND.address.state}.`,
  '/packages',
);

export default function PackagesPage() {
  return (
    <>
      <BreadcrumbJsonLd name="Packages & Add-Ons" path="/packages" />
      <Packages />
    </>
  );
}
