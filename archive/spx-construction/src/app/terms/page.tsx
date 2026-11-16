import type { Metadata } from 'next';
import { BRAND } from '@/data/brand';

export const metadata: Metadata = {
  title: 'Terms',
  description: `Terms of use for ${BRAND.name}.`,
};

export default function TermsPage() {
  return (
    <section className="container-site py-24 md:py-32 max-w-3xl">
      <div className="eyebrow mb-5">Terms</div>
      <h1 className="h-display text-4xl md:text-5xl text-carbon-950 mb-8">Terms of use.</h1>
      <p className="text-carbon-600 leading-relaxed">
        Use of this site is provided as-is. Project agreements are governed by the contract executed between {BRAND.name} and the client for the specific project. Content and project descriptions on this site are the property of {BRAND.name}.
      </p>
    </section>
  );
}
