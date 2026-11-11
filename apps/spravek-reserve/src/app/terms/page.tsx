import type { Metadata } from 'next';
import { BRAND } from '@/data/brand';

export const metadata: Metadata = {
  title: 'Rental Terms',
  description: 'Summary of allocation, driver, insurance, deposit, and chauffeur terms for Spravek Reserve.',
  alternates: { canonical: '/terms' },
  robots: { index: false, follow: true },
};

const SECTIONS: [string, string][] = [
  ['Allocations', 'An allocation is confirmed only when dates are agreed in writing, the rental or chauffeur agreement is signed, and the deposit is received. Allocation numbers are issued at that time. Until then, dates are not held.'],
  ['Drivers', 'Self-drive allocations require each driver to be 25 years or older, hold a valid, unexpired driver\u2019s license, and carry personal auto insurance that extends to rental vehicles. Additional drivers must be named on the agreement. Only named drivers may operate the vehicle.'],
  ['Insurance & Deposit', 'A refundable security deposit is held on a major credit card for the term of the allocation. Renters are responsible for damage, loss, fines, tolls, and fuel or charge replacement as outlined in the agreement. Commercial coverage is maintained by Relentless Equipment LLC; the renter\u2019s own coverage is primary where applicable.'],
  ['Use', 'Vehicles may not be used for racing, track days, off-road use beyond maintained roads, towing beyond posted ratings or without our approval, ride-share or commercial hire, or by anyone not named on the agreement. Smoking is prohibited. Mileage allowances are stated on the agreement.'],
  ['Chauffeur Service', 'Chauffeured service is offered on the S 580 only and is provided as a ground-transportation service rather than a rental. Hourly minimums, waiting time, and airport fees apply as quoted. Passengers may not consume anything that would damage the cabin, and the chauffeur may end service for unsafe conduct.'],
  ['Delivery & Return', 'Delivery and collection are included within the stated service area; farther locations are quoted. Vehicles are returned at the agreed time and place in the condition received. Late returns are billed in hourly increments.'],
  ['Cancellation', 'Cancellation terms depend on notice given and are stated on each agreement. Deposits are refunded in full for cancellations within the stated window.'],
];

export default function TermsPage() {
  return (
    <section className="container-reserve max-w-3xl pb-24 pt-40 md:pb-32">
      <span className="eyebrow">Terms</span>
      <h1 className="h-display mt-6 text-5xl md:text-6xl">Rental terms, in brief.</h1>
      <p className="mt-6 text-sm leading-relaxed text-obsidian-300">
        This is a plain-language summary. The signed rental or chauffeur agreement governs each allocation and
        takes precedence over this page. {BRAND.legalLine}.
      </p>
      <div className="mt-14 space-y-10">
        {SECTIONS.map(([t, b]) => (
          <div key={t}>
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-champagne-500">{t}</h2>
            <p className="mt-3 text-sm leading-relaxed text-obsidian-200">{b}</p>
          </div>
        ))}
      </div>
      <p className="mt-14 text-xs text-obsidian-500">Questions: <a href={`mailto:${BRAND.email}`} className="text-obsidian-300 hover:text-champagne-300">{BRAND.email}</a></p>
    </section>
  );
}
