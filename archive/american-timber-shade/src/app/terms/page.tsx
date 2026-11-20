import type { Metadata } from 'next';
import { BRAND } from '@/data/brand';

export const metadata: Metadata = {
  title: 'Terms',
  description: `Terms of use for ${BRAND.name}.`,
};

export default function TermsPage() {
  return (
    <section className="container-prose py-20 md:py-28">
      <div className="tag mb-4">Terms</div>
      <h1 className="h-display text-4xl md:text-5xl text-ink-950 mb-8">Terms of use.</h1>
      <p className="text-ink-600 leading-relaxed">
        Content on this site is provided for general information about {BRAND.name} and its services. Project scope, pricing, and schedule are defined only by a written proposal signed by both parties. Photographs represent completed work and may include site-specific conditions that do not apply to every project.
      </p>
    </section>
  );
}
