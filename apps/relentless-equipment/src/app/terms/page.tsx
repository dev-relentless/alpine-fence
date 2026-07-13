import type { Metadata } from 'next';
import { BRAND } from '@/data/brand';

export const metadata: Metadata = {
  title: 'Terms',
  description: `Terms of use for ${BRAND.name}.`,
};

export default function TermsPage() {
  return (
    <section className="container-yard py-20 md:py-28 max-w-3xl">
      <div className="tag mb-4">Terms</div>
      <h1 className="h-display text-4xl md:text-5xl text-carbon-950 mb-8">Terms of use.</h1>
      <p className="text-carbon-600 leading-relaxed">
        Use of this site is provided as-is. Rentals are governed by the rental agreement executed between {BRAND.name} and the customer at the time of rental, including rates, deposits, damage policies, and equipment ratings. Content on this site is the property of {BRAND.name}.
      </p>
    </section>
  );
}
