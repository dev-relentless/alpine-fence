import type { Metadata } from 'next';
import Link from 'next/link';
import FleetCard from '@/components/FleetCard';
import { FLEET } from '@/data/fleet';

export const metadata: Metadata = {
  title: 'The Fleet — AMG SL 63, S 580 & F-350 Platinum Plus',
  description:
    'Three luxury vehicles available by allocation in Utah: Mercedes-AMG SL 63 S E Performance roadster, Mercedes-Benz S 580 (self-drive or chauffeured), and Ford F-350 Platinum Plus Dually.',
  alternates: { canonical: '/fleet' },
};

export default function FleetPage() {
  return (
    <>
      <section className="container-reserve pb-16 pt-40 md:pb-20">
        <span className="eyebrow">The fleet</span>
        <h1 className="h-display mt-6 max-w-3xl text-5xl md:text-7xl">Three cars. Each with a job.</h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-obsidian-200 md:text-lg">
          The Reserve is deliberately small. Each vehicle is the best version of its kind, kept detailed and
          ready, and released to one client at a time.
        </p>
      </section>

      <section className="container-reserve pb-24 md:pb-32">
        <div className="grid gap-6 lg:grid-cols-3">
          {FLEET.map((v, i) => <FleetCard key={v.slug} v={v} index={i} />)}
        </div>

        <div className="mt-20 grid gap-px bg-obsidian-800 md:grid-cols-3">
          {[
            ['Delivered', 'Every allocation is delivered and collected. Home, hotel, venue, marina, or the SLC curb.'],
            ['Detailed', 'Each car is hand-detailed between allocations, fueled or charged, and inspected on video.'],
            ['Insured', 'Commercial coverage on every vehicle. Renter requirements are outlined in the agreement before anything is signed.'],
          ].map(([t, b]) => (
            <div key={t} className="bg-obsidian-950 p-8">
              <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.22em] text-champagne-500">{t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-obsidian-300">{b}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link href="/allocation" className="btn-gold">Request Allocation</Link>
        </div>
      </section>
    </>
  );
}
