import type { Metadata } from 'next';
import { BRAND } from '@/data/brand';

export const metadata: Metadata = {
  title: 'Terms',
  description: `Terms of use for ${BRAND.name}.`,
  alternates: { canonical: `${BRAND.url}/terms` },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <section className="container-apex pt-16 pb-20 md:pt-24 md:pb-28 max-w-3xl">
      <div className="tag mb-4">Terms</div>
      <h1 className="h-display text-5xl md:text-7xl text-basalt-950 mb-8">Terms of use.</h1>
      <div className="space-y-6 text-basalt-600 leading-relaxed">
        <p>
          This site is provided as-is for general information. Specifications shown (mix strength,
          base depth, reinforcement, joint spacing) describe our standard practice; engineered work
          follows the stamped drawings, and the written estimate and contract for your project govern.
        </p>
        <p>
          Projects are governed by the written estimate and contract executed between {BRAND.name} and
          the customer, including scope, specifications, pricing, schedule, warranty, and change-order
          terms. Content on this site, including drawings and text, is the property of {BRAND.name}.
        </p>
      </div>
    </section>
  );
}
