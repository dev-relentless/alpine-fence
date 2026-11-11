import type { Metadata } from 'next';
import { BRAND } from '@/data/brand';

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'How Spravek Reserve handles the information you share when requesting an allocation.',
  alternates: { canonical: '/privacy' },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="container-reserve max-w-3xl pb-24 pt-40 md:pb-32">
      <span className="eyebrow">Privacy</span>
      <h1 className="h-display mt-6 text-5xl md:text-6xl">Discretion is part of the service.</h1>
      <div className="mt-12 space-y-8 text-sm leading-relaxed text-obsidian-200">
        <p>
          When you request an allocation we collect what you give us: your name, contact details, dates, location,
          and notes about the occasion. We use it to confirm availability, prepare the agreement, and deliver the
          vehicle. We do not sell it, and we do not share it beyond the people and services needed to fulfil your
          allocation (for example, payment processing and identity verification).
        </p>
        <p>
          Signed agreements, license copies, and deposit records are retained as required for insurance and legal
          purposes, then deleted. Photos of your event are never published without your permission.
        </p>
        <p>
          This site uses no advertising trackers. Standard server logs and privacy-respecting analytics may record
          anonymous usage.
        </p>
        <p>
          To review, correct, or delete your information, email{' '}
          <a href={`mailto:${BRAND.email}`} className="text-champagne-400 hover:underline">{BRAND.email}</a>.
        </p>
        <p className="text-xs text-obsidian-500">{BRAND.legalLine}.</p>
      </div>
    </section>
  );
}
