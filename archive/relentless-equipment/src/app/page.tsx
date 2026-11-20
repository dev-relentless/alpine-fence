import Link from 'next/link';
import { BRAND } from '@/data/brand';
import { fleetCategories } from '@/data/fleet';

const smsHref = `sms:${BRAND.phoneRaw}?&body=${encodeURIComponent(BRAND.smsBody)}`;

export default function HomePage() {
  return (
    <>
      {/* ─────────── HERO ─────────── */}
      <section className="relative overflow-hidden bg-carbon-fade text-dust-50">
        <div className="absolute inset-x-0 top-0 h-2 bg-hazard" aria-hidden />
        <div className="relative container-yard py-24 md:py-36">
          <div className="tag text-volt-400 mb-6">Equipment · Attachments · Trailers — Wasatch Front, UT</div>
          <h1 className="h-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.6rem] leading-[0.95] max-w-5xl">
            The gear works
            <br />
            <span className="text-volt-500">as hard as you do.</span>
          </h1>
          <p className="mt-8 text-carbon-300 text-lg leading-relaxed max-w-2xl">
            Contractor-maintained machines, attachments, and trailers — rented by the day, week,
            or month. Fueled, greased, inspected, and ready when you show up. No counter games,
            no mystery fees.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <Link href="/reserve" className="btn-primary w-full sm:w-auto text-center">
              Check availability
            </Link>
            <a href={smsHref} className="btn-ghost border-dust-50/30 text-dust-50 hover:border-dust-50 w-full sm:w-auto text-center">
              Text the yard
            </a>
            <a href={`tel:${BRAND.phoneRaw}`} className="text-sm tracking-wide text-carbon-300 hover:text-dust-50 sm:ml-2">
              {BRAND.phone}
            </a>
          </div>
        </div>
        <div className="relative border-t border-carbon-800">
          <div className="container-yard py-5 flex flex-wrap gap-x-10 gap-y-2 text-[11px] uppercase tracking-[0.25em] text-carbon-400">
            <span>Day · Week · Month rates</span>
            <span>Delivery available</span>
            <span>Serviced on hours, not complaints</span>
            <span>A Spravek company</span>
          </div>
        </div>
      </section>

      {/* ─────────── FLEET CATEGORIES ─────────── */}
      <section className="container-yard py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="tag text-volt-600 mb-3">The yard</div>
            <h2 className="h-display text-4xl md:text-5xl text-carbon-950">
              Three ways to rent.
            </h2>
          </div>
          <Link href="/fleet" className="btn-dark self-start md:self-auto">See the fleet</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-carbon-200 border border-carbon-200">
          {fleetCategories.map((c, i) => (
            <Link
              key={c.slug}
              href={`/fleet#${c.slug}`}
              className="group bg-dust-50 p-8 hover:bg-carbon-950 hover:text-dust-50 transition-colors"
            >
              <div className="text-[11px] tracking-[0.3em] text-volt-600 mb-5">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="h-display text-2xl mb-3">{c.title}</h3>
              <p className="text-sm leading-relaxed text-carbon-500 group-hover:text-carbon-300 mb-6">{c.blurb}</p>
              <ul className="space-y-1.5 text-sm text-carbon-600 group-hover:text-carbon-200">
                {c.items.slice(0, 4).map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-volt-500" />{item}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      {/* ─────────── WHY RELENTLESS ─────────── */}
      <section className="bg-carbon-950 text-dust-50">
        <div className="container-yard py-20 md:py-28">
          <div className="tag text-volt-400 mb-3">Why rent here</div>
          <h2 className="h-display text-4xl md:text-5xl mb-12 max-w-3xl">
            Rental gear from people <span className="text-volt-500">who actually run it.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                k: 'Contractor-maintained',
                v: 'Our fleet works real jobsites with our own construction family. Machines are serviced on hours, inspected between rentals, and retired before they get tired.',
              },
              {
                k: 'Straight rates',
                v: 'Day, week, and month pricing quoted up front — fuel, wear items, and damage policies in plain language before you sign anything.',
              },
              {
                k: 'Advice included',
                v: 'Tell us the job and we\u2019ll size the machine, match the attachment, and check your tow setup. Twenty years of Wasatch Front construction behind the counter.',
              },
            ].map((c) => (
              <div key={c.k} className="border-t-4 border-volt-500 pt-6">
                <h3 className="h-display text-xl mb-3 text-volt-400">{c.k}</h3>
                <p className="text-carbon-300 text-sm leading-relaxed">{c.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── HOW IT WORKS ─────────── */}
      <section className="container-yard py-20 md:py-28">
        <div className="tag text-volt-600 mb-3">How it works</div>
        <h2 className="h-display text-4xl md:text-5xl text-carbon-950 mb-12">
          Reserve. Pick up or get it delivered. Run it.
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-carbon-200 border border-carbon-200">
          {[
            { n: '01', k: 'Tell us the job', v: 'Call, text, or send the availability form. We confirm the right machine and attachment for the work.' },
            { n: '02', k: 'Lock the dates', v: 'Day, week, or month. Rate, deposit, and policies confirmed in writing before pickup.' },
            { n: '03', k: 'Pick up or delivery', v: 'Hook up at the yard with a rated tow setup, or we deliver to the jobsite across the Wasatch Front.' },
            { n: '04', k: 'Run it & return it', v: 'Gear shows up fueled and greased. Bring it back the same way — or ask about our refuel option.' },
          ].map((s) => (
            <div key={s.n} className="bg-dust-50 p-8">
              <div className="font-display font-bold text-4xl text-volt-500 mb-4">{s.n}</div>
              <div className="h-display text-lg mb-2">{s.k}</div>
              <p className="text-carbon-500 text-sm leading-relaxed">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className="bg-volt-500 text-carbon-950">
        <div className="container-yard py-16 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="h-display text-4xl md:text-5xl leading-none">Need it this week?</h2>
            <p className="mt-3 font-semibold">Call or text {BRAND.phone} — we&rsquo;ll tell you straight what&rsquo;s available.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/reserve" className="btn-dark w-full sm:w-auto text-center">Check availability</Link>
            <a href={smsHref} className="btn-ghost border-carbon-950/40 text-carbon-950 hover:border-carbon-950 w-full sm:w-auto text-center">Text the yard</a>
          </div>
        </div>
      </section>
    </>
  );
}
