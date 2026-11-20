import type { Metadata } from 'next';
import { BRAND } from '@/data/brand';
import { Faq } from '@/components/Faq';
import { FaqJsonLd } from '@/components/JsonLd';

const title = 'FAQ: Booking, Prices & Couples Massage in Draper, UT';
const description = `Answers about booking, pricing, hours, couples sessions, and treatments at ${BRAND.name} in ${BRAND.address.locality}, ${BRAND.address.state}.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/faq' },
  openGraph: {
    type: 'website',
    siteName: BRAND.name,
    title,
    description,
    url: '/faq',
    images: [{ url: '/photos/studio-sign.jpg', width: 1440, height: 1080, alt: `${BRAND.name} studio` }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/photos/studio-sign.jpg'],
  },
};

export default function FaqPage() {
  return (
    <>
      <FaqJsonLd />
      <Faq />
    </>
  );
}
