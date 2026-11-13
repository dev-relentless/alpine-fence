import Image from 'next/image';
import Link from 'next/link';
import VMark from '@/components/VMark';
import FleetCard from '@/components/FleetCard';
import AvailabilityBar from '@/components/AvailabilityBar';
import TrustBar from '@/components/TrustBar';
import Faq from '@/components/Faq';
import { ALLOCATION_STEPS, BRAND, FAQ, OCCASIONS, ZONES } from '@/data/brand';
import { FLEET, RATE_NOTE, getVehicle, imgSrc, usd } from '@/data/fleet';

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

export default function HomePage() {
  const s580 = getVehicle('s-580')!;
  const f350 = getVehicle('f-350')!;
  const lowest = Math.min(...FLEET.map((v) => v.rates.daily));

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/reserve/sl63/01-hero-front-three-quarter.jpg"
          alt="Matte grey Mercedes-AMG SL 63 S E Performance in a dark showroom"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_50%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950 via-obsidian-950/75 to-obsidian-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-obsidian-950/60" />

        <div className="container-reserve relative flex min-h-[92svh] flex-col justify-end pb-10 pt-40 md:pb-14">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4">
              <VMark id="hero" className="h-8 w-auto" />
              <span className="eyebrow">{BRAND.tagline}</span>
            </div>
            <h1 className="h-display mt-8 text-5xl md:text-7xl">
              Luxury car rentals in Utah, <em className="text-gold-gradient not-italic">delivered to you.</em>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-obsidian-200 md:text-lg">
              Mercedes-AMG SL 63, Mercedes-Benz S 580 — self-drive or chauffeured — and the F-350 Platinum Plus Dually.
              Owned, commercially insured, and delivered along the Wasatch Front, Park City and SLC airport.
              Rates from {usd(lowest)} per day.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/fleet" className="btn-gold">View Rentals</Link>
              <Link href="/allocation" className="btn-outline">Request Allocation</Link>
            </div>
          </div>

          <AvailabilityBar className="mt-14" />
        </div>
      </section>

      {/* TRUST */}
      <section className="border-y border-obsidian-800">
        <div className="container-reserve py-0">
          <TrustBar />
        </div>
      </section>

      {/* FLEET */}
      <section id="fleet" className="container-reserve py-24 md:py-32">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow">Rental fleet</span>
            <h2 className="h-display mt-6 text-4xl md:text-6xl">Three vehicles, each the best of its kind.</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-obsidian-300">
            A deliberately small fleet, kept detailed and ready, released to one client at a time. Daily and weekly
            rates, mileage and deposits are published on every vehicle.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FLEET.map((v, i) => <FleetCard key={v.slug} v={v} index={i} />)}
        </div>
        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-obsidian-500">{RATE_NOTE}</p>
          <Link href="/rates" className="btn-ghost shrink-0">Full rate card & requirements <Arrow /></Link>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="allocation" className="relative isolate overflow-hidden border-y border-obsidian-800">
        <Image src={imgSrc(s580, '06-rear-cabin.jpg')} alt="" fill sizes="100vw" className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-obsidian-950/70" />
        <div className="container-reserve relative py-24 md:py-32">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow">How it works</span>
              <h2 className="h-display mt-6 text-4xl md:text-6xl">Request. Confirm. Delivered.</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-obsidian-300">
              We call a confirmed booking an allocation. There is no instant checkout — a person reviews every request
              and confirms it in writing within one business day.
            </p>
          </div>
          <div className="mt-16 grid gap-px bg-obsidian-800 md:grid-cols-3">
            {ALLOCATION_STEPS.map((s) => (
              <div key={s.n} className="bg-obsidian-950/80 p-8 backdrop-blur md:p-10">
                <div className="font-display text-5xl font-light text-champagne-500">{s.n}</div>
                <h3 className="mt-6 font-sans text-sm font-semibold uppercase tracking-[0.22em] text-bone-50">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-obsidian-200">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl text-sm text-obsidian-300">
              Drivers 25+ (30+ for the SL 63), valid license, personal auto insurance, and a refundable deposit.{' '}
              <Link href="/rates#requirements" className="text-champagne-400 hover:text-champagne-300">See all requirements.</Link>
            </p>
            <Link href="/allocation" className="btn-gold">Request Allocation</Link>
          </div>
        </div>
      </section>

      {/* OCCASIONS */}
      <section className="container-reserve py-24 md:py-32">
        <span className="eyebrow">Popular rentals</span>
        <h2 className="h-display mt-6 max-w-3xl text-4xl md:text-6xl">Weddings. Ski week. Executive travel. Lake days.</h2>
        <div className="mt-14 grid gap-px bg-obsidian-800 sm:grid-cols-2 lg:grid-cols-3">
          {OCCASIONS.map((o) => {
            const v = getVehicle(o.vehicle)!;
            return (
              <Link key={o.title} href={`/fleet/${v.slug}`} className="group bg-obsidian-950 p-8 transition-colors hover:bg-obsidian-900">
                <div className="eyebrow-muted group-hover:text-champagne-500">{v.make} {v.model}</div>
                <h3 className="mt-4 font-display text-3xl text-bone-50">{o.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-obsidian-300">{o.body}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CHAUFFEUR */}
      <section className="border-y border-obsidian-800 bg-obsidian-900/40">
        <div className="container-reserve grid items-center gap-12 py-24 md:grid-cols-2 md:py-32">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src={imgSrc(s580, '04-rear-seats.jpg')} alt={s580.gallery[3].alt} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <span className="eyebrow">Chauffeur service · S 580</span>
            <h2 className="h-display mt-6 text-4xl md:text-5xl">
              Professional chauffeur, <em className="italic">flagship Mercedes.</em>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-obsidian-200">
              SLC airport meet &amp; greet, Park City and Deer Valley transfers, hourly and full-day service for weddings,
              closings and client dinners. From {usd(s580.rates.chauffeurHourly!)} per hour with a {s580.rates.chauffeurMinHours}-hour minimum,
              or {usd(s580.rates.airportTransfer!)} flat for an airport transfer.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-obsidian-200">
              {['Baggage-claim meet & greet at SLC, flight-tracked', 'Hourly, point-to-point, or full-day service', 'Ski-season Park City & Deer Valley transfers', 'Rear-seat massage, tables, screens & 64-color ambient light'].map((t) => (
                <li key={t} className="flex items-start gap-3"><span className="mt-2 h-px w-4 shrink-0 bg-champagne-500" />{t}</li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/chauffeur" className="btn-outline">Chauffeur Service</Link>
              <Link href="/allocation?vehicle=s-580&service=chauffeured" className="btn-gold">Request a Driver</Link>
            </div>
          </div>
        </div>
      </section>

      {/* F-350 FEATURE */}
      <section className="relative isolate overflow-hidden">
        <div className="relative aspect-[16/10] md:aspect-[21/9]">
          <Image src={imgSrc(f350, '01-hero-towing-sl.jpg')} alt={f350.gallery[0].alt} fill sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/70 to-transparent" />
        </div>
        <div className="container-reserve relative -mt-24 pb-24 md:-mt-32 md:pb-32">
          <div className="max-w-2xl">
            <span className="eyebrow">{f350.year} {f350.make} {f350.model}</span>
            <h2 className="h-display mt-6 text-4xl md:text-6xl">A luxury heavy-duty rental, built to tow.</h2>
            <p className="mt-6 text-base leading-relaxed text-obsidian-200">
              Very few rental fleets offer a Platinum Plus dually. Gooseneck and fifth-wheel ready with an integrated
              brake controller, massaging leather seats and a panoramic roof — delivered to the marina, the ranch, or
              the trailhead from {usd(f350.rates.daily)} per day.
            </p>
            <Link href={`/fleet/${f350.slug}`} className="btn-ghost mt-8">View the F-350 <Arrow /></Link>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="border-t border-obsidian-800">
        <div className="container-reserve py-24 md:py-32">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow">Delivery locations</span>
              <h2 className="h-display mt-6 text-4xl md:text-5xl">Salt Lake City to Park City, and the airport.</h2>
            </div>
            <Link href="/locations" className="btn-ghost">All delivery zones & fees <Arrow /></Link>
          </div>
          <div className="mt-12 grid gap-px bg-obsidian-800 md:grid-cols-3">
            {ZONES.map((z) => (
              <div key={z.name} className="bg-obsidian-950 p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-champagne-500">{z.name}</h3>
                  <span className="shrink-0 text-xs text-obsidian-400">{z.fee}</span>
                </div>
                <p className="mt-4 text-sm text-obsidian-200">{z.cities.join(' · ')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-obsidian-800 bg-obsidian-900/40">
        <div className="container-reserve grid gap-12 py-24 md:grid-cols-[1fr_2fr] md:gap-20 md:py-32">
          <div>
            <span className="eyebrow">Questions</span>
            <h2 className="h-display mt-6 text-4xl md:text-5xl">Before you reserve.</h2>
            <p className="mt-6 text-sm leading-relaxed text-obsidian-300">
              Requirements, insurance, deposits, mileage and cancellations — answered plainly. More on the FAQ page.
            </p>
            <Link href="/faq" className="btn-ghost mt-8">All questions <Arrow /></Link>
          </div>
          <Faq items={FAQ.slice(0, 6)} />
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-obsidian-800">
        <div className="container-reserve flex flex-col items-center py-24 text-center md:py-32">
          <VMark id="cta" className="h-16 w-auto" />
          <h2 className="h-display mt-10 max-w-3xl text-4xl md:text-6xl">
            Ready when you are. <em className="italic text-gold-gradient">Confirmed within a business day.</em>
          </h2>
          <p className="mt-6 max-w-lg text-base text-obsidian-300">
            Tell us the vehicle, dates and delivery location. We reply with availability and a written quote.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/allocation" className="btn-gold">Request Allocation</Link>
            <a href={`tel:${BRAND.phoneRaw}`} className="btn-outline">{BRAND.phone}</a>
          </div>
          <p className="mt-6 text-xs text-obsidian-500">{BRAND.hours.display}</p>
        </div>
      </section>
    </>
  );
}
