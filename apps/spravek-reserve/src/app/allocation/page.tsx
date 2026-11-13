import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AllocationForm from '@/components/AllocationForm';
import { ALLOCATION_STEPS, BRAND, CANCELLATION } from '@/data/brand';

export const metadata: Metadata = {
  title: 'Request Allocation — Check Availability',
  description:
    'Check availability and request a quote for the AMG SL 63 S E Performance, Mercedes-Benz S 580 (self-drive or chauffeured), or F-350 Platinum Plus Dually in Utah. Confirmed in writing within one business day.',
  alternates: { canonical: '/allocation' },
  robots: { index: true, follow: true },
};

type Search = { vehicle?: string; service?: string; start?: string; end?: string };

export default function AllocationPage({ searchParams }: { searchParams: Search }) {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <Image src="/reserve/sl63/03-cockpit-top-down.jpg" alt="" fill sizes="100vw" className="object-cover opacity-25" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-950/60 via-obsidian-950/80 to-obsidian-950" />
        <div className="container-reserve relative pb-12 pt-40">
          <span className="eyebrow">Check availability</span>
          <h1 className="h-display mt-6 max-w-3xl text-5xl md:text-7xl">Request an allocation.</h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-obsidian-200 md:text-lg">
            Choose the vehicle, your dates and delivery location. We confirm availability and send a written quote within
            one business day — nothing is charged until you approve it.
          </p>
        </div>
      </section>

      <section className="container-reserve grid gap-14 pb-24 md:grid-cols-[1.5fr_1fr] md:gap-20 md:pb-32">
        <div className="card p-6 md:p-10">
          <AllocationForm vehicle={searchParams.vehicle} service={searchParams.service} start={searchParams.start} end={searchParams.end} />
        </div>

        <aside className="space-y-10 md:pt-4">
          <div>
            <h2 className="eyebrow-muted">What happens next</h2>
            <ol className="mt-6 space-y-6">
              {ALLOCATION_STEPS.map((s) => (
                <li key={s.n} className="flex gap-5">
                  <span className="font-display text-2xl text-champagne-500">{s.n}</span>
                  <div>
                    <div className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-bone-50">{s.title}</div>
                    <p className="mt-2 text-sm leading-relaxed text-obsidian-300">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="border-t border-obsidian-800 pt-8">
            <h2 className="eyebrow-muted">Prefer to talk?</h2>
            <a href={`tel:${BRAND.phoneRaw}`} className="mt-3 block font-display text-3xl text-bone-50 hover:text-champagne-300">{BRAND.phone}</a>
            <a href={`mailto:${BRAND.email}`} className="mt-2 block text-sm text-obsidian-300 hover:text-champagne-300">{BRAND.email}</a>
            <p className="mt-3 text-xs text-obsidian-500">{BRAND.hours.display}</p>
          </div>

          <div className="border-t border-obsidian-800 pt-8">
            <h2 className="eyebrow-muted">Cancellation</h2>
            <p className="mt-3 text-sm text-obsidian-300">{CANCELLATION.summary}</p>
            <Link href="/terms#cancellation" className="btn-ghost mt-3">Full policy</Link>
          </div>

          <div className="border-t border-obsidian-800 pt-8 text-xs leading-relaxed text-obsidian-500">
            <p>
              Self-drive rentals require drivers 25+ (30+ for the SL 63) with a valid license, full-coverage personal auto
              insurance and a refundable security deposit. Chauffeured service is available on the S 580 only.{' '}
              <Link href="/rates" className="text-obsidian-300 hover:text-champagne-300">Rates &amp; requirements</Link>.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
