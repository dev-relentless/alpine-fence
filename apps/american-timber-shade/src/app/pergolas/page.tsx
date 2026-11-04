import type { Metadata } from 'next';
import Link from 'next/link';
import Photo from '@/components/Photo';
import { BRAND } from '@/data/brand';
import { pergolaStyles, pergolaMaterials, pergolaOptions, pergolaFaqs } from '@/data/pergolas';

export const metadata: Metadata = {
  title: 'Timber Pergolas',
  description:
    'Custom timber pergolas — attached, freestanding, and heavy-timber with mortise-and-tenon joinery. Western red cedar and Douglas fir, engineered for mountain snow, built across the Mountain West.',
  alternates: { canonical: `${BRAND.url}/pergolas` },
};

const numerals = ['I', 'II', 'III'];

export default function PergolasPage() {
  return (
    <>
      {/* ─────────── HEADER ─────────── */}
      <section className="relative">
        <div className="relative h-[64vh] min-h-[480px] max-h-[720px] overlay-cinematic">
          <Photo
            src="/ats/pergolas/hero.jpg"
            alt="Timber pergola rafters against the evening sky"
            label="Pergolas — rafters, looking up"
            priority
            sizes="100vw"
            className="absolute inset-0"
          />
          <div className="relative z-10 h-full flex flex-col justify-end">
            <div className="container-site pb-14 md:pb-20">
              <div className="tag-brass mb-5">The Flagship</div>
              <h1 className="h-display text-bone-50 text-5xl md:text-6xl lg:text-7xl leading-[1.0] max-w-3xl">
                Timber pergolas.
              </h1>
              <p className="mt-7 text-bone-100/85 text-lg md:text-xl leading-relaxed max-w-2xl">
                Oversized cedar and fir, real footings, bolted connections, and a rafter rhythm set
                to the sun — the structure the rest of the yard is organized around.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── STYLES ─────────── */}
      <section className="border-b border-bone-200">
        <div className="container-site divide-y divide-bone-200">
          {pergolaStyles.map((p, i) => (
            <article
              key={p.slug}
              id={p.slug}
              className="grid lg:grid-cols-12 gap-10 lg:gap-16 py-20 md:py-24 scroll-mt-28 items-start"
            >
              <div className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Photo
                  src={p.photo}
                  alt={p.title}
                  label={`Plate ${numerals[i]} — ${p.title}`}
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="plate aspect-[16/11]"
                />
              </div>
              <div className={`lg:col-span-5 space-y-6 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  <div className="font-display text-2xl text-brass-500 mb-2">{numerals[i]}.</div>
                  <h2 className="h-display text-3xl md:text-4xl text-ink-950 leading-tight">{p.title}</h2>
                </div>
                <p className="text-xl text-ink-800 font-display leading-snug">{p.blurb}</p>
                <p className="text-ink-600 leading-relaxed">{p.detail}</p>
                <dl className="grid grid-cols-2 gap-x-6 gap-y-4 pt-2 border-t border-bone-200">
                  {p.specs.map((s) => (
                    <div key={s.k} className="pt-4">
                      <dt className="tag mb-1">{s.k}</dt>
                      <dd className="text-ink-900 text-[15px]">{s.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ─────────── MATERIALS ─────────── */}
      <section className="bg-cedar-depth text-bone-50">
        <div className="container-site py-24 md:py-32 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-5">
            <div className="tag-brass">Materials</div>
            <h2 className="h-display text-4xl md:text-5xl leading-[1.05]">Timber chosen for altitude.</h2>
            <p className="text-bone-100/70 leading-relaxed">
              High-UV sun, freeze-thaw winters, and dry air are hard on wood. We spec species, cut,
              and finish for the exposure — not the catalog.
            </p>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-10">
            {pergolaMaterials.map((m) => (
              <div key={m.k} className="border-t border-bone-50/20 pt-5">
                <h3 className="h-display text-xl mb-2">{m.k}</h3>
                <p className="text-bone-100/70 text-[15px] leading-relaxed">{m.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── OPTIONS + DETAIL PHOTOS ─────────── */}
      <section className="container-site py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="tag">Options</div>
            <h2 className="h-display text-4xl md:text-5xl text-ink-950 leading-[1.05]">Make it a room.</h2>
            <p className="text-ink-600 leading-relaxed">
              Everything below is designed in from the first drawing, so the conduit is inside the
              post and the screen matches the rafters.
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 text-[15px] text-ink-700 pt-2">
              {pergolaOptions.map((o) => (
                <li key={o} className="flex items-start gap-2.5">
                  <span className="mt-2.5 h-px w-3.5 shrink-0 bg-brass-400" />{o}
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Link href="/quote" className="btn-primary">Get a written proposal</Link>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-6">
            <Photo src="/ats/pergolas/detail-joinery.jpg" alt="Pegged mortise-and-tenon joint" label="Detail — joinery" sizes="(min-width: 1024px) 29vw, 50vw" className="plate aspect-[4/5]" />
            <Photo src="/ats/pergolas/detail-lighting.jpg" alt="Downlight recessed in a pergola rafter" label="Detail — lighting" sizes="(min-width: 1024px) 29vw, 50vw" className="plate aspect-[4/5] mt-10" />
            <Photo src="/ats/pergolas/detail-shade.jpg" alt="Retractable shade canopy under timber rafters" label="Detail — shade canopy" sizes="(min-width: 1024px) 29vw, 50vw" className="plate aspect-[4/5]" />
            <Photo src="/ats/pergolas/detail-screen.jpg" alt="Slatted privacy screen between pergola posts" label="Detail — privacy screen" sizes="(min-width: 1024px) 29vw, 50vw" className="plate aspect-[4/5] mt-10" />
          </div>
        </div>
      </section>

      {/* ─────────── FAQ ─────────── */}
      <section className="bg-bone-100 border-y border-bone-200" id="faq">
        <div className="container-site py-24 md:py-32 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="tag mb-4">Questions</div>
            <h2 className="h-display text-4xl text-ink-950 leading-tight">Asked often, answered plainly.</h2>
          </div>
          <div className="lg:col-span-8 divide-y divide-bone-300">
            {pergolaFaqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                  <span className="h-display text-xl text-ink-950">{f.q}</span>
                  <span className="mt-1.5 text-brass-500 transition-transform group-open:rotate-45" aria-hidden>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 5v14M5 12h14" /></svg>
                  </span>
                </summary>
                <p className="mt-3 text-ink-600 leading-relaxed max-w-2xl">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-24 md:py-32 text-center">
        <h2 className="h-display text-3xl md:text-5xl text-ink-950 mb-4">Picture it over your patio.</h2>
        <p className="text-ink-600 mb-8">A consultation costs nothing and obliges nothing.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link href="/quote" className="btn-primary">Start a project</Link>
          <a href={`tel:${BRAND.phoneRaw}`} className="text-ink-700 hover:text-ink-950 text-[15px] tabular-nums">{BRAND.phone}</a>
        </div>
      </section>
    </>
  );
}
