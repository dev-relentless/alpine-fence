import type { Metadata } from 'next';
import { BRAND } from '@/data/brand';

export const metadata: Metadata = {
  title: 'Terms',
  description: `Terms of use for ${BRAND.name}.`,
};

export default function TermsPage() {
  return (
    <section className="container-deck py-20 md:py-28 max-w-3xl">
      <div className="tag mb-4">Terms</div>
      <h1 className="h-display text-4xl md:text-5xl text-pool-950 mb-8">Terms of use.</h1>
      <p className="text-pool-600 leading-relaxed">
        Use of this site is provided as-is. Services are governed by the written estimate and service agreement executed between {BRAND.name} and the customer, including scope, schedule, pricing, and cancellation terms. Content on this site is the property of {BRAND.name}.
      </p>
    </section>
  );
}
