import type { Metadata } from 'next';
import { BRAND } from '@/data/brand';

export const metadata: Metadata = {
  title: 'Privacy',
  description: `Privacy policy for ${BRAND.name}.`,
};

export default function PrivacyPage() {
  return (
    <section className="container-site py-24 md:py-32 max-w-3xl">
      <div className="eyebrow mb-5">Privacy</div>
      <h1 className="h-display text-4xl md:text-5xl text-carbon-950 mb-8">Privacy policy.</h1>
      <p className="text-carbon-600 leading-relaxed">
        {BRAND.name} collects information you submit through our forms — name, contact details, and project notes — solely to respond to your request and deliver our services. We do not sell or share this information with third parties for marketing purposes.
      </p>
      <p className="text-carbon-600 leading-relaxed mt-6">
        Questions: call <a href={`tel:${BRAND.phoneRaw}`} className="underline decoration-brass-400 underline-offset-4">{BRAND.phone}</a>.
      </p>
    </section>
  );
}
