import Link from 'next/link';
import { BRAND } from '@/data/brand';
import { structureCategories } from '@/data/structures';

const smsHref = `sms:${BRAND.phoneRaw}?&body=${encodeURIComponent(BRAND.smsBody)}`;

export default function HomePage() {
  return (
    <>
      {/* ─────────── HERO ─────────── */}
      <section className="relative overflow-hidden bg-timber-depth text-linen-50">
        <div className="absolute inset-0 bg-slats" aria-hidden />
        <div className="absolute inset-x-0 top-0 h-2 bg-rafters" aria-hidden />
        <div className="relative container-patio py-24 md:py-36">
          <div className="tag text-sky-400 mb-6">Pergolas · Louvered Roofs · Pavilions — Wasatch Front, UT</div>
          <h1 className="h-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] leading-[1.02] max-w-5xl">
            The best room in the house
            <br />
            <span className="text-sky-400">isn&rsquo;t in the house.</span>
          </h1>
          <p className="mt-8 text-timber-300 text-lg leading-relaxed max-w-2xl">
            Timber pergolas, motorized louvered roofs, and solid-roof pavilions — designed around
            how the sun actually crosses your yard, and built like structures: real footings,
            engineered spans, and finishes made for Utah sun, wind, and snow.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <Link href="/quote" className="btn-primary w-full sm:w-auto text-center">
              Get a quote
            </Link>
            <a href={smsHref} className="btn-ghost border-linen-50/30 text-linen-50 hover:border-linen-50 w-full sm:w-auto text-center">
              Text the crew
            </a>
            <a href={`tel:${BRAND.phoneRaw}`} className="text-sm tracking-wide text-timber-300 hover:text-linen-50 sm:ml-2">
              {BRAND.phone}
            </a>
          </div>
        </div>
        <div className="relative border-t border-timber-800">
          <div className="container-patio py-5 flex flex-wrap gap-x-10 gap-y-2 text-[11px] uppercase tracking-[0.25em] text-timber-400">
            <span>Licensed &amp; insured</span>
            <span>Snow-load engineered</span>
            <span>Design-build, one crew</span>
            <span>A Spravek company</span>
          </div>
        </div>
      </section>

      {/* ─────────── THE STRUCTURES ─────────── */}
      <section className="container-patio py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="tag text-sky-600 mb-3">The structures</div>
            <h2 className="h-display text-4xl md:text-5xl text-timber-950">
              Three ways to build shade.
            </h2>
          </div>
          <Link href="/pergolas" className="btn-dark self-start md:self-auto">See the structures</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-timber-200 border border-timber-200">
          {structureCategories.map((c, i) => (
            <Link
              key={c.slug}
              href={`/pergolas#${c.slug}`}
              className="group bg-linen-50 p-8 hover:bg-timber-950 hover:text-linen-50 transition-colors"
            >
              <div className="text-[11px] tracking-[0.3em] text-sky-600 mb-5">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="h-display text-2xl mb-3">{c.title}</h3>
              <p className="text-sm leading-relaxed text-timber-500 group-hover:text-timber-300 mb-6">{c.blurb}</p>
              <ul className="space-y-1.5 text-sm text-timber-600 group-hover:text-timber-200">
                {c.items.slice(0, 4).map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-sky-500" />{item}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      {/* ─────────── WHY PERGOLA EXPERTS ─────────── */}
      <section className="bg-timber-950 text-linen-50">
        <div className="container-patio py-20 md:py-28">
          <div className="tag text-sky-400 mb-3">Why the Experts</div>
          <h2 className="h-display text-4xl md:text-5xl mb-12 max-w-3xl">
            A pergola is a structure — <span className="text-sky-400">not furniture.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                k: 'Built like a building',
                v: 'Posts set in concrete footings below frost line, spans engineered for Utah snow, and connections thru-bolted. Big-box kits screwed to a patio blow over; ours get inherited with the house.',
              },
              {
                k: 'Designed around the sun',
                v: 'We map how light actually crosses your yard through the seasons, then set rafter direction and spacing to shade the hours you use — not just a square that looks right on paper.',
              },
              {
                k: 'One crew, start to finish',
                v: 'Design, footings, timber, roofing, lighting, and finish handled by the same crew — backed by a construction family with twenty years on the Wasatch Front.',
              },
            ].map((c) => (
              <div key={c.k} className="border-t-4 border-sky-500 pt-6">
                <h3 className="h-display text-xl mb-3 text-sky-400">{c.k}</h3>
                <p className="text-timber-300 text-sm leading-relaxed">{c.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── PROCESS ─────────── */}
      <section className="container-patio py-20 md:py-28">
        <div className="tag text-sky-600 mb-3">How it works</div>
        <h2 className="h-display text-4xl md:text-5xl text-timber-950 mb-12">
          Walk the yard. Draw it. Build it.
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-timber-200 border border-timber-200">
          {[
            { n: '01', k: 'Walk the yard', v: 'We look at sun angles, sight lines, grades, and how you actually use the space — then talk through timber, louvered, or solid roof.' },
            { n: '02', k: 'Design & quote', v: 'Drawings, materials, and price in writing. What\u2019s included, what\u2019s not, and options priced separately so you choose.' },
            { n: '03', k: 'Footings & frame', v: 'Concrete footings below frost line, posts set plumb, beams and rafters cut and fit on site. Permits handled where required.' },
            { n: '04', k: 'Finish & light it', v: 'Stain or powder-coat finish, lighting and fans wired, hardware checked, site cleaned. Then dinner outside.' },
          ].map((s) => (
            <div key={s.n} className="bg-linen-50 p-8">
              <div className="font-display font-bold text-4xl text-sky-500 mb-4">{s.n}</div>
              <div className="h-display text-lg mb-2">{s.k}</div>
              <p className="text-timber-500 text-sm leading-relaxed">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────── SPEC STRIP ─────────── */}
      <section className="bg-linen-100 border-y border-timber-200">
        <div className="container-patio py-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-3 text-[12px] uppercase tracking-[0.22em] text-timber-600 text-center">
          <span>Snow-load engineered</span>
          <span className="text-sky-600">·</span>
          <span>Concrete-set footings</span>
          <span className="text-sky-600">·</span>
          <span>Rough-sawn timber</span>
          <span className="text-sky-600">·</span>
          <span>Powder-coat aluminum</span>
          <span className="text-sky-600">·</span>
          <span>Motorized options</span>
        </div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className="bg-sky-500 text-timber-950">
        <div className="container-patio py-16 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="h-display text-4xl md:text-5xl leading-none text-linen-50">Ready to live outside?</h2>
            <p className="mt-3 font-semibold text-timber-950">Call or text {BRAND.phone} — we&rsquo;ll walk the yard and put a quote in writing.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/quote" className="btn-dark w-full sm:w-auto text-center">Get a quote</Link>
            <a href={smsHref} className="btn-ghost border-timber-950/40 text-timber-950 hover:border-timber-950 w-full sm:w-auto text-center">Text the crew</a>
          </div>
        </div>
      </section>
    </>
  );
}
