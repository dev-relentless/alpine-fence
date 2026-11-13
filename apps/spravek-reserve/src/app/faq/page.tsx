import type { Metadata } from 'next';
import Link from 'next/link';
import Faq from '@/components/Faq';
import { BRAND, FAQ } from '@/data/brand';

export const metadata: Metadata = {
  title: 'FAQ — Luxury Car Rental Questions',
  description:
    'Answers about renting from Spravek Reserve: driver requirements, insurance, deposits, mileage, delivery to Park City and SLC airport, chauffeur service, towing with the F-350, and cancellations.',
  alternates: { canonical: '/faq' },
};

export default function FaqPage() {
  return (
    <>
      <section className="container-reserve pb-12 pt-40 md:pb-16">
        <span className="eyebrow">FAQ</span>
        <h1 className="h-display mt-6 max-w-3xl text-5xl md:text-7xl">Questions, answered plainly.</h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-obsidian-200 md:text-lg">
          If it is not covered here, call or email — a person answers between 8 am and 8 pm, seven days a week.
        </p>
      </section>
      <section className="container-reserve grid gap-14 pb-24 md:grid-cols-[2fr_1fr] md:gap-20 md:pb-32">
        <Faq items={FAQ} withSchema />
        <aside className="space-y-8 self-start md:sticky md:top-28">
          <div className="card p-8">
            <h2 className="eyebrow">Still have a question?</h2>
            <a href={`tel:${BRAND.phoneRaw}`} className="mt-4 block font-display text-3xl text-bone-50 hover:text-champagne-300">{BRAND.phone}</a>
            <a href={`mailto:${BRAND.email}`} className="mt-2 block text-sm text-obsidian-300 hover:text-champagne-300">{BRAND.email}</a>
            <p className="mt-4 text-xs text-obsidian-500">{BRAND.hours.display}</p>
          </div>
          <div className="space-y-3 text-sm">
            <Link href="/rates" className="block text-obsidian-200 hover:text-champagne-300">Rates & requirements →</Link>
            <Link href="/locations" className="block text-obsidian-200 hover:text-champagne-300">Delivery locations →</Link>
            <Link href="/terms" className="block text-obsidian-200 hover:text-champagne-300">Rental terms & cancellation →</Link>
            <Link href="/allocation" className="btn-gold mt-4 w-full">Request Allocation</Link>
          </div>
        </aside>
      </section>
    </>
  );
}
