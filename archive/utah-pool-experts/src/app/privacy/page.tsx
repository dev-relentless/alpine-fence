import type { Metadata } from 'next';
import { BRAND } from '@/data/brand';

export const metadata: Metadata = {
  title: 'Privacy',
  description: `Privacy policy for ${BRAND.name}.`,
};

export default function PrivacyPage() {
  return (
    <section className="container-deck py-20 md:py-28 max-w-3xl">
      <div className="tag mb-4">Privacy</div>
      <h1 className="h-display text-4xl md:text-5xl text-pool-950 mb-8">Privacy policy.</h1>
      <p className="text-pool-600 leading-relaxed">
        {BRAND.name} collects information you submit through estimate request forms — name, contact details, and pool notes — solely to respond to your request and deliver our services. We do not sell or share this information with third parties for marketing purposes.
      </p>
      <p className="text-pool-600 leading-relaxed mt-6">
        Questions: call <a href={`tel:${BRAND.phoneRaw}`} className="underline">{BRAND.phone}</a>.
      </p>
    </section>
  );
}
