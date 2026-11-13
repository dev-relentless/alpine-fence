import type { Metadata } from 'next';
import Link from 'next/link';
import TrustBar from '@/components/TrustBar';
import { BRAND, CANCELLATION, REQUIREMENTS, ZONES } from '@/data/brand';
import { FLEET, RATE_NOTE, usd } from '@/data/fleet';

export const metadata: Metadata = {
  title: 'Rates & Requirements',
  description:
    'Daily and weekly rates, security deposits, mileage allowances, delivery fees and driver requirements for Spravek Reserve luxury car rentals in Salt Lake City and Park City, Utah.',
  alternates: { canonical: '/rates' },
};

const INCLUDED = [
  'Delivery and collection within Zone A (Wasatch Front)',
  'Full tank of fuel or full charge at handoff',
  'Hand detail and video condition report before every rental',
  'In-person walkthrough at delivery',
  '24/7 roadside assistance',
  'One additional named driver (spouse or partner)',
  'Commercial insurance on the vehicle',
];

const FEES = [
  ['Additional named driver (beyond one)', '$50 per rental'],
  ['Fuel / charge not replaced', 'Pump price + $50 service'],
  ['Late return', 'Hourly rate after 30-minute grace; full day after 4 hours'],
  ['Excess cleaning (smoking, pets, sand)', 'From $250'],
  ['Tolls, citations & parking', 'Actual cost + $25 administration'],
  ['Young-driver surcharge', 'Not offered — minimum ages are firm'],
];

export default function RatesPage() {
  const s580 = FLEET.find((v) => v.chauffeur)!;
  return (
    <>
      <section className="container-reserve pb-12 pt-40 md:pb-16">
        <span className="eyebrow">Rates & requirements</span>
        <h1 className="h-display mt-6 max-w-3xl text-5xl md:text-7xl">Published rates. No surprises at handoff.</h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-obsidian-200 md:text-lg">
          Every quote we send is built from the numbers on this page. {RATE_NOTE}
        </p>
      </section>

      {/* RATE TABLE */}
      <section className="container-reserve pb-20">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-obsidian-700 text-[11px] uppercase tracking-tag text-obsidian-400">
                <th className="py-3 pr-6 font-medium">Vehicle</th>
                <th className="py-3 pr-6 font-medium">Daily</th>
                <th className="py-3 pr-6 font-medium">Weekly (7 days)</th>
                <th className="py-3 pr-6 font-medium">Included miles</th>
                <th className="py-3 pr-6 font-medium">Extra mile</th>
                <th className="py-3 pr-6 font-medium">Deposit</th>
                <th className="py-3 font-medium">Min. age</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-obsidian-800">
              {FLEET.map((v) => (
                <tr key={v.slug} className="text-obsidian-100">
                  <td className="py-5 pr-6">
                    <Link href={`/fleet/${v.slug}`} className="font-display text-lg text-bone-50 hover:text-champagne-300">{v.year} {v.make} {v.model}</Link>
                    <div className="eyebrow-muted mt-1">{v.category}</div>
                  </td>
                  <td className="py-5 pr-6 font-display text-2xl text-bone-50">{usd(v.rates.daily)}</td>
                  <td className="py-5 pr-6">{usd(v.rates.weekly)} <span className="text-obsidian-500">({usd(Math.round(v.rates.weekly / 7))}/day)</span></td>
                  <td className="py-5 pr-6">{v.rates.milesPerDay} / day</td>
                  <td className="py-5 pr-6">{usd(v.rates.extraMile)}</td>
                  <td className="py-5 pr-6">{usd(v.rates.deposit)}</td>
                  <td className="py-5">{v.rates.minAge}+</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="card p-8">
            <h2 className="eyebrow">Chauffeured S 580</h2>
            <dl className="mt-5 divide-y divide-obsidian-800 text-sm">
              {[
                ['Hourly', `${usd(s580.rates.chauffeurHourly!)} / hr · ${s580.rates.chauffeurMinHours}-hour minimum`],
                ['SLC airport transfer', `${usd(s580.rates.airportTransfer!)} flat · Wasatch Front or Park City`],
                ['Full day (10 hours)', usd(s580.rates.chauffeurHourly! * 10)],
                ['Includes', 'Professional chauffeur, fuel, flight tracking, meet & greet, water & chargers'],
                ['Not required', 'Driver\u2019s license, personal insurance or deposit — this is a ground-transportation service'],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[150px_1fr] gap-4 py-3"><dt className="text-obsidian-400">{k}</dt><dd className="text-obsidian-100">{v}</dd></div>
              ))}
            </dl>
          </div>
          <div className="card p-8">
            <h2 className="eyebrow">Included with every rental</h2>
            <ul className="mt-5 space-y-2.5 text-sm text-obsidian-200">
              {INCLUDED.map((b) => <li key={b} className="flex items-start gap-3"><span className="mt-2 h-px w-4 shrink-0 bg-champagne-500" />{b}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* DELIVERY */}
      <section className="border-t border-obsidian-800 bg-obsidian-900/40">
        <div className="container-reserve py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="h-display text-3xl md:text-4xl">Delivery fees</h2>
            <Link href="/locations" className="btn-ghost">All locations</Link>
          </div>
          <div className="mt-10 grid gap-px bg-obsidian-800 md:grid-cols-3">
            {ZONES.map((z) => (
              <div key={z.name} className="bg-obsidian-950 p-8">
                <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-champagne-500">{z.name}</h3>
                <div className="mt-3 font-display text-2xl text-bone-50">{z.fee}</div>
                <p className="mt-3 text-sm leading-relaxed text-obsidian-300">{z.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section id="requirements" className="container-reserve scroll-mt-28 py-20 md:py-28">
        <span className="eyebrow">Driver requirements</span>
        <h2 className="h-display mt-6 max-w-3xl text-3xl md:text-5xl">What we need from every driver.</h2>
        <div className="mt-12 grid gap-px bg-obsidian-800 sm:grid-cols-2 lg:grid-cols-3">
          {REQUIREMENTS.map((r) => (
            <div key={r.title} className="bg-obsidian-950 p-8">
              <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-champagne-500">{r.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-obsidian-300">{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEES + CANCELLATION */}
      <section className="border-t border-obsidian-800">
        <div className="container-reserve grid gap-14 py-20 md:grid-cols-2 md:gap-20">
          <div>
            <h2 className="eyebrow">Other fees</h2>
            <dl className="mt-5 divide-y divide-obsidian-800 text-sm">
              {FEES.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[1fr_1fr] gap-4 py-3"><dt className="text-obsidian-300">{k}</dt><dd className="text-obsidian-100">{v}</dd></div>
              ))}
            </dl>
            <p className="mt-4 text-xs text-obsidian-500">Utah sales tax and applicable rental taxes are added to every quote.</p>
          </div>
          <div>
            <h2 className="eyebrow">Cancellation</h2>
            <p className="mt-5 text-sm text-obsidian-200">{CANCELLATION.summary}</p>
            <dl className="mt-5 divide-y divide-obsidian-800 text-sm">
              {CANCELLATION.selfDrive.map((c) => (
                <div key={c.window} className="grid grid-cols-[1fr_1.4fr] gap-4 py-3"><dt className="text-obsidian-300">{c.window}</dt><dd className="text-obsidian-100">{c.outcome}</dd></div>
              ))}
            </dl>
            <Link href="/terms#cancellation" className="btn-ghost mt-5">Full policy, including chauffeur</Link>
          </div>
        </div>
      </section>

      <section className="border-t border-obsidian-800">
        <div className="container-reserve py-0"><TrustBar /></div>
      </section>

      <section className="container-reserve flex flex-col items-center py-20 text-center">
        <h2 className="h-display text-3xl md:text-4xl">Ready for a quote?</h2>
        <p className="mt-4 max-w-md text-sm text-obsidian-300">Tell us the vehicle and dates. We confirm availability and send a written quote within one business day.</p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link href="/allocation" className="btn-gold">Request Allocation</Link>
          <a href={`tel:${BRAND.phoneRaw}`} className="btn-outline">{BRAND.phone}</a>
        </div>
      </section>
    </>
  );
}
