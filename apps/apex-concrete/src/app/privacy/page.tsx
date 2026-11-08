import type { Metadata } from 'next';
import { BRAND } from '@/data/brand';

export const metadata: Metadata = {
  title: 'Privacy',
  description: `Privacy policy for ${BRAND.name}.`,
  alternates: { canonical: `${BRAND.url}/privacy` },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="container-apex pt-16 pb-20 md:pt-24 md:pb-28 max-w-3xl">
      <div className="tag mb-4">Privacy</div>
      <h1 className="h-display text-5xl md:text-7xl text-basalt-950 mb-8">Privacy policy.</h1>
      <div className="space-y-6 text-basalt-600 leading-relaxed">
        <p>
          {BRAND.name} collects the information you submit through the estimate and contact forms — name,
          contact details, project address, and notes — solely to respond to your request and perform our
          services. We do not sell or share this information with third parties for marketing purposes.
        </p>
        <p>
          This site does not use advertising cookies. Standard server logs (IP address, browser, pages
          visited) may be retained for security and performance.
        </p>
        <p>
          To request a copy or deletion of your information, call{' '}
          <a href={`tel:${BRAND.phoneRaw}`} className="underline decoration-flag-500 underline-offset-4">{BRAND.phone}</a> or email{' '}
          <a href={`mailto:${BRAND.email}`} className="underline decoration-flag-500 underline-offset-4">{BRAND.email}</a>.
        </p>
      </div>
    </section>
  );
}
