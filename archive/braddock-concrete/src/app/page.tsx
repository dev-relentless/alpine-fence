import Link from 'next/link';
import Image from 'next/image';
import { BRAND } from '@/data/brand';
import { serviceCategories } from '@/data/services';

const smsHref = `sms:${BRAND.phoneRaw}?&body=${encodeURIComponent(BRAND.smsBody)}`;

export default function HomePage() {
  return (
    <>
      {/* ─────────── HERO ─────────── */}
      <section className="relative overflow-hidden bg-forge-depth text-cement-50">
        <div className="absolute inset-x-0 top-0 h-2 bg-joints" aria-hidden />
        <div className="relative container-slab py-24 md:py-32 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="tag text-signal-400 mb-6">Concrete · Excavation — Wasatch Front, UT</div>
            <h1 className="h-display text-5xl sm:text-6xl md:text-7xl leading-[0.98] max-w-5xl">
              We move the dirt.
              <br />
              <span className="text-steel">We set the concrete.</span>
            </h1>
            <p className="mt-8 text-iron-300 text-lg leading-relaxed max-w-2xl">
              Flatwork, foundations, and dirt work from one crew under one contract — no
              finger-pointing between the excavator and the concrete guy. Compacted base,
              air-entrained mixes for Utah winters, and a bid in writing before a bucket moves.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <Link href="/bid" className="btn-primary w-full sm:w-auto text-center">
                Get a bid
              </Link>
              <a href={smsHref} className="btn-ghost border-cement-50/30 text-cement-50 hover:border-cement-50 w-full sm:w-auto text-center">
                Text the crew
              </a>
              <a href={`tel:${BRAND.phoneRaw}`} className="text-sm tracking-wide text-iron-300 hover:text-cement-50 sm:ml-2">
                {BRAND.phone}
              </a>
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-5">
            <Image
              src="/braddock/logo.png"
              alt="Braddock Concrete — forged badge"
              width={1000}
              height={867}
              priority
              className="w-full max-w-[26rem] ml-auto rounded-sm shadow-slab"
            />
          </div>
        </div>
        <div className="relative border-t border-iron-800">
          <div className="container-slab py-5 flex flex-wrap gap-x-10 gap-y-2 text-[11px] uppercase tracking-[0.25em] text-iron-400">
            <span>Licensed &amp; insured</span>
            <span>Bids in writing</span>
            <span>Dig &amp; pour, one schedule</span>
            <span>A Spravek company</span>
          </div>
        </div>
      </section>

      {/* ─────────── THE WORK ─────────── */}
      <section className="container-slab py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="tag text-signal-600 mb-3">The work</div>
            <h2 className="h-display text-4xl md:text-5xl text-iron-950">
              Three trades. One crew.
            </h2>
          </div>
          <Link href="/services" className="btn-dark self-start md:self-auto">See the work</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-iron-200 border border-iron-200">
          {serviceCategories.map((c, i) => (
            <Link
              key={c.slug}
              href={`/services#${c.slug}`}
              className="group bg-cement-50 p-8 hover:bg-iron-950 hover:text-cement-50 transition-colors"
            >
              <div className="text-[11px] tracking-[0.3em] text-signal-600 mb-5">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="h-display text-2xl mb-3">{c.title}</h3>
              <p className="text-sm leading-relaxed text-iron-500 group-hover:text-iron-300 mb-6">{c.blurb}</p>
              <ul className="space-y-1.5 text-sm text-iron-600 group-hover:text-iron-200">
                {c.items.slice(0, 4).map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-signal-500" />{item}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      {/* ─────────── WHY BRADDOCK ─────────── */}
      <section className="bg-forge-depth text-cement-50">
        <div className="container-slab py-20 md:py-28">
          <div className="tag text-signal-400 mb-3">Why Braddock</div>
          <h2 className="h-display text-4xl md:text-5xl mb-12 max-w-3xl">
            Concrete is only as good <span className="text-signal-500">as the ground under it.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                k: 'One contract, both trades',
                v: 'We dig the hole and we pour the mud. When excavation and concrete run on one schedule, nothing sits open, nothing gets blamed on the other sub, and the price doesn\u2019t grow in the gap.',
              },
              {
                k: 'Prep you can stand on',
                v: 'Flatwork fails from below. We excavate to grade, place structural base in compacted lifts, and proof it before a form gets set — because a pretty finish over soft ground is still a bad job.',
              },
              {
                k: 'Built for Utah winters',
                v: 'Air-entrained mixes rated for freeze-thaw, joints laid out and saw-cut on time, and proper cure — so your slab looks the same after ten Januaries as it did on day one.',
              },
            ].map((c) => (
              <div key={c.k} className="border-t-4 border-signal-500 pt-6">
                <h3 className="h-display text-xl mb-3 text-signal-400">{c.k}</h3>
                <p className="text-iron-300 text-sm leading-relaxed">{c.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── PROCESS ─────────── */}
      <section className="container-slab py-20 md:py-28">
        <div className="tag text-signal-600 mb-3">How it works</div>
        <h2 className="h-display text-4xl md:text-5xl text-iron-950 mb-12">
          Walk it. Bid it. Dig it. Pour it.
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-iron-200 border border-iron-200">
          {[
            { n: '01', k: 'Walk the site', v: 'We look at access, grades, drainage, and what\u2019s under the surface — then talk through options at the tailgate, not from an office.' },
            { n: '02', k: 'Bid in writing', v: 'Scope, spec, mix, and price on paper. What\u2019s included, what\u2019s not, and what could change it — before you sign.' },
            { n: '03', k: 'Dig & prep', v: 'Excavate to grade, trench utilities, place and compact base in lifts. The part nobody sees is the part that decides how long it lasts.' },
            { n: '04', k: 'Form, pour & finish', v: 'Forms set square, steel placed per plan, concrete poured, finished, jointed, and cured right. Then we clean up like we were never there.' },
          ].map((s) => (
            <div key={s.n} className="bg-cement-50 p-8">
              <div className="font-display text-4xl text-signal-500 mb-4">{s.n}</div>
              <div className="h-display text-lg mb-2">{s.k}</div>
              <p className="text-iron-500 text-sm leading-relaxed">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────── SPEC STRIP ─────────── */}
      <section className="bg-cement-100 border-y border-iron-200">
        <div className="container-slab py-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-3 text-[12px] uppercase tracking-[0.22em] text-iron-600 text-center">
          <span>4,000+ PSI mixes</span>
          <span className="text-signal-600">·</span>
          <span>Air-entrained for freeze-thaw</span>
          <span className="text-signal-600">·</span>
          <span>Compacted structural base</span>
          <span className="text-signal-600">·</span>
          <span>Rebar per plan</span>
          <span className="text-signal-600">·</span>
          <span>Saw-cut &amp; sealed joints</span>
        </div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className="bg-signal-500 text-iron-950">
        <div className="container-slab py-16 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="h-display text-4xl md:text-5xl leading-none text-cement-50">Got a project on the ground?</h2>
            <p className="mt-3 font-semibold text-iron-950">Call or text {BRAND.phone} — we&rsquo;ll walk the site and put a bid in writing.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/bid" className="btn-dark w-full sm:w-auto text-center">Get a bid</Link>
            <a href={smsHref} className="btn-ghost border-iron-950/40 text-iron-950 hover:border-iron-950 w-full sm:w-auto text-center">Text the crew</a>
          </div>
        </div>
      </section>
    </>
  );
}
