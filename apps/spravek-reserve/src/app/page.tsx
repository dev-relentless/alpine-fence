import Image from 'next/image';
import Link from 'next/link';
import VMark from '@/components/VMark';
import FleetCard from '@/components/FleetCard';
import { ALLOCATION_STEPS, BRAND, OCCASIONS } from '@/data/brand';
import { FLEET, getVehicle, imgSrc } from '@/data/fleet';

export default function HomePage() {
  const s580 = getVehicle('s-580')!;
  const f350 = getVehicle('f-350')!;

  return (
    <>
      {/* HERO */}
      <section className="relative isolate min-h-[100svh] overflow-hidden">
        <Image
          src="/reserve/sl63/01-hero-front-three-quarter.jpg"
          alt="Matte grey Mercedes-AMG SL 63 S E Performance in a dark showroom"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_50%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950 via-obsidian-950/70 to-obsidian-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-obsidian-950/60" />

        <div className="container-reserve relative flex min-h-[100svh] flex-col justify-end pb-20 pt-40 md:pb-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4">
              <VMark id="hero" className="h-8 w-auto" />
              <span className="eyebrow">{BRAND.tagline}</span>
            </div>
            <h1 className="h-display mt-8 text-5xl md:text-7xl lg:text-8xl">
              Some things are best <em className="text-gold-gradient not-italic">kept in reserve.</em>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-obsidian-200 md:text-lg">
              Three vehicles. One Utah. Released by allocation, delivered to your door, and handed over like
              it matters — because it does.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/allocation" className="btn-gold">Request Allocation</Link>
              <Link href="/fleet" className="btn-outline">View the Fleet</Link>
            </div>
          </div>

          <div className="mt-16 grid gap-px border border-obsidian-800 bg-obsidian-800 md:grid-cols-3">
            {FLEET.map((v) => (
              <Link key={v.slug} href={`/fleet/${v.slug}`} className="group flex items-center justify-between gap-4 bg-obsidian-950/80 px-6 py-5 backdrop-blur transition-colors hover:bg-obsidian-900">
                <div>
                  <div className="eyebrow-muted group-hover:text-champagne-500">{v.numeral} · {v.role}</div>
                  <div className="mt-1 font-display text-xl text-bone-50">{v.make} {v.model}</div>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0 text-champagne-500 transition-transform group-hover:translate-x-1"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="border-y border-obsidian-800 bg-obsidian-900/40">
        <div className="container-reserve grid gap-12 py-24 md:grid-cols-[1fr_1.2fr] md:gap-20 md:py-32">
          <div>
            <span className="eyebrow">The idea</span>
            <h2 className="h-display mt-6 text-4xl md:text-5xl">
              Nobody <em className="italic">rents</em> from Spravek Reserve.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-obsidian-200 md:text-lg">
            <p>
              They request an allocation. There are only a handful of cars, and they go to people with a reason:
              a wedding, a closing, a weekend in Park City, a boat that finally needs the truck it deserves.
            </p>
            <p>
              Every allocation is numbered. Every key is delivered by hand. Every car arrives detailed, fueled,
              and quiet. When the calendar says <em className="font-display text-xl italic text-champagne-300">allocated</em>, that is not a problem. That is the point.
            </p>
            <Link href="/about" className="btn-ghost">About the Reserve
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FLEET */}
      <section id="fleet" className="container-reserve py-24 md:py-32">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow">The fleet</span>
            <h2 className="h-display mt-6 text-4xl md:text-6xl">Three cars. Three entrances.</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-obsidian-300">
            We name them by what they do, not by their spec sheet. You are booking a moment; the model is the means.
          </p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {FLEET.map((v, i) => <FleetCard key={v.slug} v={v} index={i} />)}
        </div>
      </section>

      {/* ALLOCATION */}
      <section id="allocation" className="relative isolate overflow-hidden border-y border-obsidian-800">
        <Image
          src={imgSrc(s580, '06-rear-cabin.jpg')}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-obsidian-950/70" />
        <div className="container-reserve relative py-24 md:py-32">
          <div className="max-w-2xl">
            <span className="eyebrow">The allocation</span>
            <h2 className="h-display mt-6 text-4xl md:text-6xl">How it works.</h2>
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
              Repeat clients are placed on the Reserve List and offered new vehicles before they are listed publicly.
            </p>
            <Link href="/allocation" className="btn-gold">Request Allocation</Link>
          </div>
        </div>
      </section>

      {/* OCCASIONS */}
      <section className="container-reserve py-24 md:py-32">
        <span className="eyebrow">Choose your entrance</span>
        <h2 className="h-display mt-6 max-w-3xl text-4xl md:text-6xl">Wedding. Closing. Anniversary. Ski week.</h2>
        <div className="mt-14 grid gap-px bg-obsidian-800 sm:grid-cols-2 lg:grid-cols-3">
          {OCCASIONS.map((o) => {
            const v = getVehicle(o.vehicle)!;
            return (
              <Link key={o.title} href={`/fleet/${v.slug}`} className="group bg-obsidian-950 p-8 transition-colors hover:bg-obsidian-900">
                <div className="eyebrow-muted group-hover:text-champagne-500">{v.role}</div>
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
            <span className="eyebrow">Chauffeured · S 580</span>
            <h2 className="h-display mt-6 text-4xl md:text-5xl">
              Be picked up like you are <em className="italic">the reason</em> for the meeting.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-obsidian-200">
              The S 580 is the only car in the Reserve offered with a driver. SLC curb to Deer Valley, a night of client
              dinners, a wedding day on the clock — the back seat is yours, the road is ours.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-obsidian-200">
              {['Airport meet & greet at SLC', 'Hourly, point-to-point, or full-day', 'Ski-season Park City transfers', 'Rear-seat massage, tables & screens'].map((t) => (
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

      {/* THE STATEMENT */}
      <section className="relative isolate overflow-hidden">
        <div className="relative aspect-[16/10] md:aspect-[21/9]">
          <Image src={imgSrc(f350, '01-hero-towing-sl.jpg')} alt={f350.gallery[0].alt} fill sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/70 to-transparent" />
        </div>
        <div className="container-reserve relative -mt-24 pb-24 md:-mt-32 md:pb-32">
          <div className="max-w-2xl">
            <span className="eyebrow">{f350.numeral} · {f350.role}</span>
            <h2 className="h-display mt-6 text-4xl md:text-6xl">The truck that brings the other cars.</h2>
            <p className="mt-6 text-base leading-relaxed text-obsidian-200">
              An F-350 Platinum Plus Dually, massaging seats and all. Rated to tow more than most people will ever own.
              Boats, horses, toy haulers, the occasional AMG. Luxury, with a gooseneck.
            </p>
            <Link href={`/fleet/${f350.slug}`} className="btn-ghost mt-8">The Statement
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-obsidian-800">
        <div className="container-reserve flex flex-col items-center py-24 text-center md:py-32">
          <VMark id="cta" className="h-16 w-auto" />
          <h2 className="h-display mt-10 max-w-3xl text-4xl md:text-6xl">
            Arrive like you planned it <em className="italic text-gold-gradient">a year ago.</em>
          </h2>
          <p className="mt-6 max-w-lg text-base text-obsidian-300">
            Allocations are confirmed personally, within one business day. Tell us the occasion.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/allocation" className="btn-gold">Request Allocation</Link>
            <a href={`tel:${BRAND.phoneRaw}`} className="btn-outline">{BRAND.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
