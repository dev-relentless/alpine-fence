import { BRAND } from '@/data/brand';
import { pageMetadata } from '@/data/seo';
import { Membership } from '@/components/Offers';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata = pageMetadata(
  'Massage Membership in Draper, UT',
  `The ${BRAND.shortName} membership: a 1-hour VIP Massage every month, member pricing on extras, and rollover, at the private studio in ${BRAND.address.locality}, ${BRAND.address.state}.`,
  '/membership',
);

export default function MembershipPage() {
  return (
    <>
      <BreadcrumbJsonLd name="Membership" path="/membership" />
      <Membership />
    </>
  );
}
