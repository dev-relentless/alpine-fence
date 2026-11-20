import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BRAND } from '@/data/brand';
import { getVehicle, imgSrc, usd } from '@/data/fleet';

export const metadata: Metadata = {
  title: 'Chauffeur Service — Mercedes-Benz S 580',
  description:
    'Chauffeured Mercedes-Benz S 580 in Utah: SLC airport meet & greet, Park City and Deer Valley transfers, hourly and full-day service for weddings, closings, and client dinners.',
  alternates: { canonical: '/chauffeur' },
};

const SERVICES = [
  { title: 'Airport Arrival', body: 'Meet & greet at SLC baggage claim, luggage handled, and a quiet ride to the Wasatch Front or straight up Parley\u2019s to Park City.' },
  { title: 'Park City & Deer Valley', body: 'Ski-season transfers between SLC, Park City, Deer Valley, and Heber. Ski racks are not the point; arriving rested is.' },
  { title: 'By the Hour', body: 'A driver and the S 580 at your disposal. Client dinners, a night out, a closing across town, a day of showings.' },
  { title: 'Weddings', body: 'For the couple, or for the parents. Timed to the ceremony, photographed at the entrance, waiting at the exit.' },
] as const;

export default function ChauffeurPage() {
  const v = getVehicle('s-580')!;
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="relative aspect-[4/3] md:aspect-[21/9]">
          <Image src={imgSrc(v, '02-front-wasatch.jpg')} alt={v.gallery[1].alt} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/60 to-obsidian-950/40" />
        </div>
        <div className="container-reserve relative -mt-28 pb-16 md:-mt-40">
          <span className="eyebrow">Chauffeured · The Arrival</span>
          <h1 className="h-display mt-6 max-w-4xl text-5xl md:text-7xl">
            The back seat is yours. <em className="italic text-gold-gradient">The road is ours.</em>
          </h1>
        </div>
      </section>

      <section className="container-reserve grid gap-14 pb-24 md:grid-cols-[1.2fr_1fr] md:gap-20">
        <div>
          <p className="text-lg leading-relaxed text-obsidian-100 md:text-xl">
            The S 580 is the one vehicle in the Reserve we will drive for you. A professional chauffeur, a flagship
            Mercedes with rear-seat massage, tables, screens and 64 colors of ambient light, and a schedule built around yours.
          </p>
          <div className="mt-12 grid gap-px bg-obsidian-800 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-obsidian-950 p-8">
                <h2 className="font-display text-2xl text-bone-50">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-obsidian-300">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/allocation?vehicle=s-580&service=chauffeured" className="btn-gold">Request a Driver</Link>
            <Link href="/fleet/s-580" className="btn-outline">The S 580 in detail</Link>
          </div>
        </div>

        <aside className="space-y-8">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image src={imgSrc(v, '06-rear-cabin.jpg')} alt={v.gallery[5].alt} fill sizes="(min-width:768px) 40vw, 100vw" className="object-cover" />
          </div>
          <div className="card p-8">
            <h2 className="eyebrow">Chauffeur rates</h2>
            <dl className="mt-5 divide-y divide-obsidian-800 text-sm">
              {[
                ['Hourly', `${usd(v.rates.chauffeurHourly!)} / hr · ${v.rates.chauffeurMinHours}-hr minimum`],
                ['SLC airport transfer', `${usd(v.rates.airportTransfer!)} flat`],
                ['Full day (10 hrs)', usd(v.rates.chauffeurHourly! * 10)],
                ['Includes', 'Driver, fuel, flight tracking, meet & greet, water & chargers'],
              ].map(([k, val]) => (
                <div key={k} className="grid grid-cols-[130px_1fr] gap-4 py-3"><dt className="text-obsidian-400">{k}</dt><dd className="text-obsidian-100">{val}</dd></div>
              ))}
            </dl>
            <p className="mt-4 text-xs text-obsidian-500">Gratuity at your discretion. Waiting time billed at the hourly rate after 15 minutes; airport pickups are flight-tracked and never charged for delays.</p>
          </div>
          <div className="card p-8">
            <h2 className="eyebrow">Good to know</h2>
            <ul className="mt-5 space-y-3 text-sm text-obsidian-200">
              {[
                'Up to 4 passengers in chauffeured service',
                'Luggage for four in the trunk; ski bags on request',
                'Water, chargers, and a quiet driver by default',
                'No license, insurance or deposit required — this is a ground-transportation service',
                'Fully refundable up to 48 hours before service',
                'Serving SLC, the Wasatch Front, Park City, Deer Valley & Heber',
              ].map((t) => <li key={t} className="flex items-start gap-3"><span className="mt-2 h-px w-4 shrink-0 bg-champagne-500" />{t}</li>)}
            </ul>
            <a href={`tel:${BRAND.phoneRaw}`} className="btn-ghost mt-6">{BRAND.phone}</a>
          </div>
        </aside>
      </section>
    </>
  );
}
