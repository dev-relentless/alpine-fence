import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BRAND, ZONES } from '@/data/brand';
import { getVehicle, imgSrc } from '@/data/fleet';

export const metadata: Metadata = {
  title: 'Delivery Locations — Salt Lake City, Park City & SLC Airport',
  description:
    'Spravek Reserve delivers luxury rental cars across the Wasatch Front, to Park City and Deer Valley, Heber Valley, Utah Valley and Salt Lake City International Airport. Delivery zones and fees listed.',
  alternates: { canonical: '/locations' },
};

const DESTINATIONS = [
  { title: 'Park City & Deer Valley', body: 'Resort and private-residence delivery through ski season. Chauffeured S 580 transfers from SLC are flight-tracked; self-drive deliveries are timed to your arrival.' },
  { title: 'Salt Lake City', body: 'Downtown hotels, the Avenues, Sugar House, the University and Research Park. Included delivery for every rental.' },
  { title: 'Cottonwood canyons', body: 'Alta, Snowbird, Brighton and Solitude trailheads and lodges, plus Big and Little Cottonwood scenic drives.' },
  { title: 'Heber Valley & Jordanelle', body: 'Midway, Heber City, Jordanelle and Deer Creek marinas — including trailer-ready F-350 delivery to the ramp.' },
  { title: 'Utah Valley', body: 'Provo, Orem, American Fork and Alpine. Wedding venues at Sundance, Thanksgiving Point and Wadley Farms.' },
  { title: 'Davis County', body: 'Bountiful, Farmington and Kaysville for airport-adjacent pickups and Antelope Island drives.' },
];

export default function LocationsPage() {
  const s580 = getVehicle('s-580')!;
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="relative aspect-[4/3] md:aspect-[21/9]">
          <Image src={imgSrc(s580, '02-front-wasatch.jpg')} alt={s580.gallery[1].alt} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/60 to-obsidian-950/40" />
        </div>
        <div className="container-reserve relative -mt-28 pb-16 md:-mt-40">
          <span className="eyebrow">Delivery locations</span>
          <h1 className="h-display mt-6 max-w-4xl text-5xl md:text-7xl">We bring the car to you.</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-obsidian-200 md:text-lg">
            Every rental is delivered and collected. Based in {BRAND.address.locality}, we cover the Wasatch Front, Park City
            and Deer Valley, the Heber and Utah valleys, and {BRAND.address.airport}.
          </p>
        </div>
      </section>

      <section className="container-reserve pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {ZONES.map((z) => (
            <div key={z.name} className="card p-8">
              <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-champagne-500">{z.name}</h2>
              <div className="mt-3 font-display text-2xl text-bone-50">{z.fee}</div>
              <p className="mt-3 text-sm leading-relaxed text-obsidian-300">{z.body}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {z.cities.map((c) => <li key={c} className="border border-obsidian-700 px-3 py-1 text-xs text-obsidian-200">{c}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-obsidian-500">
          Outside these zones — Ogden, Logan, St. George, Moab — delivery is quoted by distance. Multi-day rentals to Southern Utah are welcome.
        </p>
      </section>

      <section className="border-y border-obsidian-800 bg-obsidian-900/40">
        <div className="container-reserve py-20 md:py-28">
          <span className="eyebrow">Where our clients go</span>
          <h2 className="h-display mt-6 max-w-3xl text-3xl md:text-5xl">Resorts, venues, marinas and the airport.</h2>
          <div className="mt-12 grid gap-px bg-obsidian-800 sm:grid-cols-2 lg:grid-cols-3">
            {DESTINATIONS.map((d) => (
              <div key={d.title} className="bg-obsidian-950 p-8">
                <h3 className="font-display text-2xl text-bone-50">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-obsidian-300">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-reserve grid gap-12 py-20 md:grid-cols-2 md:py-28">
        <div>
          <span className="eyebrow">SLC International Airport</span>
          <h2 className="h-display mt-6 text-3xl md:text-4xl">Curbside handoff or baggage-claim meet &amp; greet.</h2>
          <p className="mt-6 text-sm leading-relaxed text-obsidian-200">
            Self-drive rentals are handed over at the terminal curb or your FBO with a walkthrough and your flight tracked for
            delays. Chauffeured S 580 service meets you at baggage claim with a name board, handles luggage, and drives directly
            to the Wasatch Front or Park City.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/allocation" className="btn-gold">Request Allocation</Link>
            <Link href="/chauffeur" className="btn-outline">Airport Chauffeur</Link>
          </div>
        </div>
        <div className="card p-8 text-sm">
          <h2 className="eyebrow">Office & hours</h2>
          <p className="mt-4 text-obsidian-200">{BRAND.name}<br />{BRAND.address.locality}, {BRAND.address.state} · {BRAND.address.region}</p>
          <p className="mt-4 text-obsidian-300">{BRAND.hours.display}</p>
          <p className="mt-4 text-obsidian-300">Deliveries are by appointment; there is no public counter. Vehicles are stored in a secured, climate-controlled facility between rentals.</p>
          <a href={`tel:${BRAND.phoneRaw}`} className="btn-ghost mt-5">{BRAND.phone}</a>
        </div>
      </section>
    </>
  );
}
