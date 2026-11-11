import type { Metadata } from 'next';
import Image from 'next/image';
import AllocationForm from '@/components/AllocationForm';
import { ALLOCATION_STEPS, BRAND } from '@/data/brand';

export const metadata: Metadata = {
  title: 'Request Allocation',
  description:
    'Request an allocation from Spravek Reserve: the AMG SL 63 S E Performance, the S 580 (self-drive or chauffeured), or the F-350 Platinum Plus Dually. Confirmed personally within one business day.',
  alternates: { canonical: '/allocation' },
  robots: { index: true, follow: true },
};

export default function AllocationPage({ searchParams }: { searchParams: { vehicle?: string; service?: string } }) {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <Image src="/reserve/sl63/03-cockpit-top-down.jpg" alt="" fill sizes="100vw" className="object-cover opacity-25" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-950/60 via-obsidian-950/80 to-obsidian-950" />
        <div className="container-reserve relative pb-12 pt-40">
          <span className="eyebrow">The allocation</span>
          <h1 className="h-display mt-6 max-w-3xl text-5xl md:text-7xl">Request an allocation.</h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-obsidian-200 md:text-lg">
            There is no instant booking here. Tell us what you have in mind and a person will confirm availability,
            quote the allocation, and reserve the dates.
          </p>
        </div>
      </section>

      <section className="container-reserve grid gap-14 pb-24 md:grid-cols-[1.5fr_1fr] md:gap-20 md:pb-32">
        <div className="card p-6 md:p-10">
          <AllocationForm vehicle={searchParams.vehicle} service={searchParams.service} />
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
          </div>

          <div className="border-t border-obsidian-800 pt-8 text-xs leading-relaxed text-obsidian-500">
            <p>
              Self-drive allocations require drivers 25 or older with a valid license, personal auto insurance, and a refundable
              security deposit. Chauffeured service is available on the S 580 only. Full terms are provided with the agreement.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
