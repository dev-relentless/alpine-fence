import type { Metadata } from 'next';
import Link from 'next/link';
import FleetCard from '@/components/FleetCard';
import TrustBar from '@/components/TrustBar';
import { FLEET, RATE_NOTE, usd } from '@/data/fleet';

export const metadata: Metadata = {
  title: 'Rental Fleet — AMG SL 63, S 580 & F-350 Platinum Plus',
  description:
    'Luxury vehicles for rent in Salt Lake City and Park City: Mercedes-AMG SL 63 S E Performance roadster, Mercedes-Benz S 580 (self-drive or chauffeured), and Ford F-350 Platinum Plus Dually. Daily and weekly rates, mileage and deposits listed.',
  alternates: { canonical: '/fleet' },
};

export default function FleetPage() {
  return (
    <>
      <section className="container-reserve pb-12 pt-40 md:pb-16">
        <span className="eyebrow">Rental fleet</span>
        <h1 className="h-display mt-6 max-w-3xl text-5xl md:text-7xl">Luxury rentals, with the numbers up front.</h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-obsidian-200 md:text-lg">
          Three vehicles, each owned and maintained by us. Daily and weekly rates, included mileage, deposits and
          driver requirements are published on every car — the quote you receive matches what you see here.
        </p>
      </section>

      <section className="container-reserve pb-24 md:pb-32">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FLEET.map((v, i) => <FleetCard key={v.slug} v={v} index={i} priority />)}
        </div>
        <p className="mt-8 text-xs text-obsidian-500">{RATE_NOTE}</p>

        {/* Comparison */}
        <div className="mt-20 overflow-x-auto">
          <h2 className="eyebrow">Compare</h2>
          <table className="mt-6 w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-obsidian-700 text-[11px] uppercase tracking-tag text-obsidian-400">
                <th className="py-3 pr-6 font-medium">Vehicle</th>
                <th className="py-3 pr-6 font-medium">Daily</th>
                <th className="py-3 pr-6 font-medium">Weekly</th>
                <th className="py-3 pr-6 font-medium">Miles / day</th>
                <th className="py-3 pr-6 font-medium">Deposit</th>
                <th className="py-3 pr-6 font-medium">Min. age</th>
                <th className="py-3 pr-6 font-medium">Seats</th>
                <th className="py-3 font-medium">Chauffeur</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-obsidian-800">
              {FLEET.map((v) => (
                <tr key={v.slug} className="text-obsidian-100">
                  <td className="py-4 pr-6"><Link href={`/fleet/${v.slug}`} className="hover:text-champagne-300">{v.year} {v.make} {v.model}</Link></td>
                  <td className="py-4 pr-6 font-display text-lg text-bone-50">{usd(v.rates.daily)}</td>
                  <td className="py-4 pr-6">{usd(v.rates.weekly)}</td>
                  <td className="py-4 pr-6">{v.rates.milesPerDay}</td>
                  <td className="py-4 pr-6">{usd(v.rates.deposit)}</td>
                  <td className="py-4 pr-6">{v.rates.minAge}+</td>
                  <td className="py-4 pr-6">{v.seats}</td>
                  <td className="py-4">{v.chauffeur ? `From ${usd(v.rates.chauffeurHourly!)} / hr` : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-20 border-y border-obsidian-800">
          <TrustBar />
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link href="/allocation" className="btn-gold">Request Allocation</Link>
          <Link href="/rates" className="btn-outline">Rates & Requirements</Link>
        </div>
      </section>
    </>
  );
}
