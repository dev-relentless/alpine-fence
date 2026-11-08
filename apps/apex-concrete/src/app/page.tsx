import Link from 'next/link';
import { BRAND, smsHref, telHref } from '@/data/brand';
import { services } from '@/data/services';
import { faqs } from '@/data/faq';
import ServiceDiagram from '@/components/ServiceDiagram';
import SlabSection, { slabStandard } from '@/components/SlabSection';
import Ticker from '@/components/Ticker';
import FaqList, { faqSchema } from '@/components/FaqList';
import JsonLd from '@/components/JsonLd';
import ApexMark from '@/components/ApexMark';

const process = [
  { n: '01', k: 'Walk the site', v: 'We look at access, grade, drainage, and what’s under the surface — and talk through options at the tailgate, not from an office.' },
  { n: '02', k: 'Estimate in writing', v: 'Line-item scope, spec, mix, finish, and price on paper. What’s included, what isn’t, and the only things that could change it.' },
  { n: '03', k: 'Prep & base', v: 'Excavate to grade, place and compact base in lifts, set forms to string, place steel on chairs. The part nobody sees is the part that lasts.' },
  { n: '04', k: 'Pour, finish & cure', v: 'Concrete poured, finished for its use, joints saw-cut on time, and cured right. Then we clean up like we were never there.' },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      {/* ─────────── HERO ─────────── */}
      <section className="relative overflow-hidden bg-basalt-950 text-slab-50 cut-peak pb-12">
        <div className="absolute inset-0 bg-grid-dark bg-grid" aria-hidden />
        <div className="absolute inset-x-0 top-0 h-2 bg-joints" aria-hidden />
        <div className="absolute -right-32 -top-24 opacity-[0.07] pointer-events-none" aria-hidden>
          <ApexMark tone="light" className="h-[640px] w-[640px]" />
        </div>

        <div className="relative container-apex pt-20 pb-24 md:pt-28 md:pb-32 grid lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          <div className="lg:col-span-8 animate-rise">
            <div className="tag text-flag-400 mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-flag-500" aria-hidden />
              Concrete contractor · Wasatch Front, Utah
            </div>
            <h1 className="h-display text-[17vw] sm:text-7xl md:text-8xl lg:text-[7.5rem] max-w-5xl">
              Poured to the
              <br />
              <span className="text-flag-500">summit</span> standard.
            </h1>
            <p className="mt-8 text-basalt-300 text-lg md:text-xl leading-relaxed max-w-2xl">
              Driveways, foundations, decorative finishes, commercial flatwork, walls, and repair —
              one Wasatch Front crew with one spec sheet. Compacted base, air-entrained mixes for
              Utah winters, joints cut on time, and an estimate in writing before a form goes down.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <Link href="/estimate" className="btn-primary w-full sm:w-auto">Get a free estimate</Link>
              <a href={smsHref} className="btn-ghost-light w-full sm:w-auto">Text a photo of the job</a>
              <a href={telHref} className="text-sm font-semibold tracking-wide text-basalt-300 hover:text-slab-50 sm:ml-2 tabular-nums">
                {BRAND.phone}
              </a>
            </div>
          </div>

          {/* spec ticket */}
          <aside className="lg:col-span-4 animate-rise [animation-delay:150ms]">
            <div className="relative bg-slab-50 text-basalt-950 shadow-slab">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-chevrons" aria-hidden />
              <div className="px-6 pt-7 pb-6">
                <div className="flex items-center justify-between mb-5">
                  <span className="tag">Standard spec · every pour</span>
                  <ApexMark className="h-6 w-6" />
                </div>
                <dl className="divide-y divide-basalt-200">
                  {Object.entries({
                    Mix: BRAND.spec.psi,
                    Air: BRAND.spec.air,
                    Base: BRAND.spec.base,
                    Steel: BRAND.spec.steel,
                    Joints: BRAND.spec.joints,
                    Cure: BRAND.spec.cure,
                  }).map(([k, v]) => (
                    <div key={k} className="flex items-baseline justify-between gap-4 py-2.5 text-sm">
                      <dt className="text-basalt-500 uppercase tracking-[0.12em] text-[11px] font-semibold">{k}</dt>
                      <dd className="font-semibold text-right tabular-nums">{v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-5 text-[11px] uppercase tracking-[0.18em] text-basalt-500">Licensed · insured · estimates in writing</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ─────────── CITY TICKER ─────────── */}
      <div className="border-y border-basalt-200 bg-slab-50">
        <Ticker
          items={BRAND.address.cities}
          className="py-4 text-[12px] uppercase tracking-[0.22em] text-basalt-600 font-semibold"
        />
      </div>

      {/* ─────────── SERVICES ─────────── */}
      <section className="container-apex py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="tag text-flag-600 mb-3">What we pour</div>
            <h2 className="h-display text-5xl md:text-6xl text-basalt-950">
              Seven trades. <span className="text-basalt-400">One spec sheet.</span>
            </h2>
          </div>
          <Link href="/services" className="btn-dark self-start md:self-auto">All services</Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-basalt-200 border border-basalt-200">
          {services.map((s, i) => {
            const featured = i === 0;
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className={`group relative bg-slab-50 p-7 flex flex-col hover:bg-basalt-950 hover:text-slab-50 transition-colors ${featured ? 'md:col-span-2' : ''}`}
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] tracking-[0.3em] text-flag-600 font-semibold">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-basalt-400 group-hover:text-flag-400 transition-colors" aria-hidden>→</span>
                </div>
                <div className={featured ? 'grid sm:grid-cols-2 gap-6 items-start' : ''}>
                  <ServiceDiagram slug={s.slug} caption={false} className={`${featured ? '' : 'mb-6'} group-hover:opacity-90 transition-opacity`} />
                  <div>
                    <h3 className="h-display text-2xl md:text-[28px] mb-3">{s.title}</h3>
                    <p className="text-sm leading-relaxed text-basalt-500 group-hover:text-basalt-300">{s.blurb}</p>
                    {featured && (
                      <ul className="mt-5 grid gap-y-1.5 text-sm text-basalt-600 group-hover:text-basalt-200">
                        {s.items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-flag-500" />{item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
          {/* 8th cell — the CTA tile */}
          <div className="bg-flag-500 text-slab-50 p-7 flex flex-col justify-between min-h-[220px] md:col-span-2 lg:col-span-1">
            <div className="tag text-slab-50/80">Not sure which?</div>
            <div>
              <h3 className="h-display text-3xl mb-4">Text us a photo. We’ll tell you what it needs.</h3>
              <a href={smsHref} className="btn bg-basalt-950 text-slab-50 hover:bg-basalt-800">Text {BRAND.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── THE APEX STANDARD ─────────── */}
      <section className="relative bg-basalt-950 text-slab-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark bg-grid" aria-hidden />
        <div className="relative container-apex py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="tag text-flag-400 mb-3">The Apex standard</div>
              <h2 className="h-display text-5xl md:text-6xl mb-6">
                A slab is six decisions. <span className="text-basalt-400">We don’t skip any.</span>
              </h2>
              <p className="text-basalt-300 leading-relaxed mb-8">
                Most concrete fails from underneath or from the weather — soft base, steel lying on the
                dirt, a mix that can’t take a Utah January. Every Apex pour is built to the section on the
                right, and the spec is written into your estimate so you can hold us to it.
              </p>
              <SlabSection className="bg-slab-50 p-4 border border-basalt-700 shadow-slab" />
              <div className="mt-3 text-[10px] uppercase tracking-[0.2em] text-basalt-500 flex justify-between">
                <span>Fig. 00 — Apex slab-on-grade</span><span>n.t.s.</span>
              </div>
            </div>
            <ol className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-basalt-800 border border-basalt-800">
              {slabStandard.map((s) => (
                <li key={s.n} className="bg-basalt-950 p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-8 w-8 rounded-full bg-flag-500 text-slab-50 font-mono text-sm font-bold flex items-center justify-center">{s.n}</span>
                    <h3 className="h-display text-xl">{s.k}</h3>
                  </div>
                  <p className="text-basalt-300 text-sm leading-relaxed">{s.v}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ─────────── PROCESS ─────────── */}
      <section className="container-apex py-20 md:py-28">
        <div className="tag text-flag-600 mb-3">How it works</div>
        <h2 className="h-display text-5xl md:text-6xl text-basalt-950 mb-12">
          Walk it. Write it. Prep it. Pour it.
        </h2>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-basalt-200 border border-basalt-200">
          {process.map((s) => (
            <li key={s.n} className="bg-slab-50 p-8 relative">
              <div className="num mb-6">{s.n}</div>
              <div className="h-display text-2xl mb-2">{s.k}</div>
              <p className="text-basalt-500 text-sm leading-relaxed">{s.v}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ─────────── WHY APEX ─────────── */}
      <section className="bg-slab-100 border-y border-basalt-200">
        <div className="container-apex py-20 md:py-28 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="tag text-flag-600 mb-3">Why Apex</div>
            <h2 className="h-display text-5xl md:text-6xl text-basalt-950">
              Built for the <span className="text-flag-500">Wasatch</span>.
            </h2>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-8">
            {[
              { k: 'Freeze-thaw first', v: 'Bench lots, canyon winds, and 40° daily swings. Our standard mix is air-entrained and our joints are tight — because the weather here is the spec.' },
              { k: 'One crew, start to finish', v: 'We dig, prep, form, pour, and finish with our own people. No gap between the excavator and the concrete guy, and no one to point at.' },
              { k: 'The estimate is the price', v: 'Line-item scope on paper before work starts. Change orders only when the ground surprises us both — and we’ll show you.' },
            ].map((c) => (
              <div key={c.k} className="border-t-4 border-flag-500 pt-6">
                <h3 className="h-display text-2xl mb-3 text-basalt-950">{c.k}</h3>
                <p className="text-basalt-600 text-sm leading-relaxed">{c.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── SERVICE AREA ─────────── */}
      <section className="container-apex py-20 md:py-28 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <div className="tag text-flag-600 mb-3">Where we pour</div>
          <h2 className="h-display text-5xl md:text-6xl text-basalt-950 mb-6">Ogden to Provo, <br />and up to Park City.</h2>
          <p className="text-basalt-600 leading-relaxed mb-8">
            Six counties along the Wasatch Front. If you can see the mountains from your driveway, we probably pour there.
          </p>
          <Link href="/service-area" className="btn-ghost">See the full service area</Link>
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-basalt-200 border border-basalt-200">
          {BRAND.address.serviceArea.map((county) => (
            <div key={county} className="bg-slab-50 p-6">
              <div className="h-display text-xl text-basalt-950">{county}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.18em] text-basalt-500">Utah</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────── FAQ ─────────── */}
      <section className="bg-slab-100 border-y border-basalt-200">
        <div className="container-apex py-20 md:py-28 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="tag text-flag-600 mb-3">Questions</div>
            <h2 className="h-display text-5xl md:text-6xl text-basalt-950">Straight answers.</h2>
            <p className="mt-6 text-basalt-600 leading-relaxed">Didn’t find yours? <a href={telHref} className="underline decoration-flag-500 underline-offset-4 hover:text-basalt-950">Call</a> or <a href={smsHref} className="underline decoration-flag-500 underline-offset-4 hover:text-basalt-950">text</a> — we answer our own phone.</p>
          </div>
          <div className="lg:col-span-8">
            <FaqList items={faqs} />
          </div>
        </div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className="relative bg-flag-500 text-slab-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark bg-grid opacity-60" aria-hidden />
        <div className="relative container-apex py-16 md:py-24 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="h-display text-5xl md:text-6xl">Got a project on the ground?</h2>
            <p className="mt-4 text-slab-50/90 text-lg">Call or text {BRAND.phone} — we’ll walk the site and put the estimate in writing.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/estimate" className="btn-dark w-full sm:w-auto">Get a free estimate</Link>
            <a href={smsHref} className="btn border border-slab-50/50 text-slab-50 hover:border-slab-50 w-full sm:w-auto">Text the crew</a>
          </div>
        </div>
      </section>
    </>
  );
}
