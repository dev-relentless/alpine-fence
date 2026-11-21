import { BRAND } from '@/data/brand';
import { pageMetadata } from '@/data/seo';
import { GiftCards } from '@/components/Offers';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata = pageMetadata(
  'Spa & Massage Gift Cards in Draper, UT',
  `Give a ${BRAND.name} gift card — good toward massage, hydrofacials, lymphatic drainage, and couples sessions at the private studio in ${BRAND.address.locality}, ${BRAND.address.state}.`,
  '/gift-cards',
);

export default function GiftCardsPage() {
  return (
    <>
      <BreadcrumbJsonLd name="Gift Cards" path="/gift-cards" />
      <GiftCards />
    </>
  );
}
