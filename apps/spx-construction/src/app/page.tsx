import Link from 'next/link';
import { BRAND } from '@/data/brand';
import { spxServices } from '@/data/services';

const smsHref = `sms:${BRAND.phoneRaw}?&body=${encodeURIComponent(BRAND.smsBody)}`;

export default function HomePage() {
  return (
    <>
      {/* ─────────── HERO ─────────── */}
      <section className="relative overflow-hidden bg-carbon-depth text-bone-50">
        <div
          className="absolute inset-y-0 right-0 w-px bg-brass-400/30 hidden lg:block"
          style={{ right: '28%' }}
          aria-hidden
        />
        <div className="relative container-site pt-28 pb-24 md:pt-40 md:pb-36">
          <div className="eyebrow text-brass-300/90 mb-8">Design · Build — Wasatch Front, Utah</div>
          <h1 className="h-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.6rem] leading-[1.04] max-w-4xl">
            Considered homes,
            <br />
            <span className="italic text-bone-300">built as drawn.</span>
          </h1>
          <p className="mt-10 text-carbon-300 text-lg leading-relaxed max-w-xl">
            {BRAND.shortName} is a design·build firm for residential work that deserves
            restraint — new residences, whole-home renovations, and additions carried by
            one team from the first sketch to the final walk-through.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            <Link href="/quote" className="btn-light w-full sm:w-auto text-center">
              Start a conversation
            </Link>
            <a href={`tel:${BRAND.phoneRaw}`} className="text-sm tracking-wide text-carbon-300 hover:text-bone-50 transition-colors sm:ml-1">
              {BRAND.phone}
            </a>
          </div>
        </div>
        <div className="relative border-t border-carbon-800">
          <div className="container-site py-5 flex flex-wrap gap-x-12 gap-y-2 text-[10px] uppercase tracking-[0.3em] text-carbon-400">
            <span>Licensed &amp; insured</span>
            <span>Stamped engineering</span>
            <span>Self-performed crews</span>
            <span>A Spravek company</span>
          </div>
        </div>
      </section>

      {/* ─────────── POSITION ─────────── */}
      <section className="container-site py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="rule-brass mb-6" />
            <div className="eyebrow">The premise</div>
          </div>
          <div className="lg:col-span-8">
            <p className="h-display text-3xl md:text-[2.6rem] leading-snug text-carbon-950 max-w-3xl">
              Most projects lose their design between the drawing and the jobsite.
              We removed the distance — the people who design the work
              <span className="italic"> stand next to the people who build it.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ─────────── WORK / SERVICES ─────────── */}
      <section className="bg-bone-100 border-y border-bone-200">
        <div className="container-site py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <div className="eyebrow mb-4">The work</div>
              <h2 className="h-display text-4xl md:text-5xl text-carbon-950">
                Six disciplines. <span className="italic text-carbon-500">One hand.</span>
              </h2>
            </div>
            <Link href="/services" className="btn-ghost self-start md:self-auto">The work in full</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
            {spxServices.map((s, i) => (
              <Link key={s.slug} href={`/services#${s.slug}`} className="group">
                <div className="flex items-baseline justify-between border-b border-carbon-200 pb-4 mb-5 transition-colors group-hover:border-brass-400">
                  <span className="text-[11px] tracking-[0.3em] text-carbon-400">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-[11px] tracking-[0.2em] uppercase text-carbon-400 opacity-0 group-hover:opacity-100 transition-opacity">View</span>
                </div>
                <h3 className="font-display text-2xl text-carbon-950 mb-3 transition-colors group-hover:text-brass-600">{s.title}</h3>
                <p className="text-sm leading-relaxed text-carbon-500">{s.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── SIGNATURE ─────────── */}
      <section className="bg-carbon-950 text-bone-50">
        <div className="container-site py-24 md:py-32 grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-6">
            <div className="eyebrow text-brass-300/90 mb-5">A quiet signature</div>
            <h2 className="h-display text-4xl md:text-5xl leading-tight mb-8">
              The scopes other firms
              <span className="italic text-bone-300"> decline.</span>
            </h2>
            <p className="text-carbon-300 leading-relaxed mb-6 max-w-lg">
              Opening a foundation for a daylight walkout. Carrying a second story over an
              occupied home. Removing the wall every other bid tiptoed around. Structural
              work is where design either survives or surrenders — so we kept it in-house,
              engineered, and self-performed.
            </p>
            <Link href="/services#lower-levels" className="btn-light mt-2">Lower levels &amp; walkouts</Link>
          </div>
          <div className="lg:col-span-6 self-center">
            <dl className="divide-y divide-carbon-800 border-y border-carbon-800">
              {[
                { k: 'Engineered', v: 'Stamped structural engineering on every cut, beam, and load path — drawn before demolition, not after.' },
                { k: 'Self-performed', v: 'Concrete, framing, and finish carpentry by our own crews; trade partners work to our schedule and standard.' },
                { k: 'Documented', v: 'Permitted, inspected, photographed — a record of what lives inside the walls, delivered at close-out.' },
              ].map((c) => (
                <div key={c.k} className="grid sm:grid-cols-12 gap-3 py-7">
                  <dt className="sm:col-span-4 font-display text-xl text-brass-300">{c.k}</dt>
                  <dd className="sm:col-span-8 text-sm leading-relaxed text-carbon-300">{c.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ─────────── PROVENANCE ─────────── */}
      <section className="container-site py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="rule-brass mb-6" />
            <div className="eyebrow">Provenance</div>
          </div>
          <div className="lg:col-span-8 max-w-3xl space-y-6 text-lg leading-relaxed text-carbon-600">
            <p>
              {BRAND.shortName} is the residential design·build practice of a Utah construction
              family with two decades on the Wasatch Front — a Spravek company, alongside{' '}
              <a href={BRAND.parent.url} className="underline decoration-brass-400 underline-offset-4 hover:text-carbon-950 transition-colors" target="_blank" rel="noopener">
                {BRAND.parent.name}
              </a>{' '}
              and Harlow Landscapes.
            </p>
            <p>
              We take on a deliberate number of projects at a time. Each carries a
              principal&rsquo;s attention, an engineer&rsquo;s stamp, and a schedule that is
              kept quietly, without drama.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className="bg-bone-100 border-t border-bone-200">
        <div className="container-site py-20 md:py-28 text-center">
          <div className="eyebrow mb-5">When you&rsquo;re ready</div>
          <h2 className="h-display text-4xl md:text-6xl text-carbon-950 leading-tight max-w-2xl mx-auto">
            Begin with a <span className="italic">conversation.</span>
          </h2>
          <p className="mt-6 text-carbon-500 max-w-md mx-auto leading-relaxed">
            A site walk, an honest read on feasibility, and numbers that mean something. {BRAND.phone}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/quote" className="btn-primary w-full sm:w-auto text-center">Start a conversation</Link>
            <a href={smsHref} className="btn-ghost w-full sm:w-auto text-center">Text the studio</a>
          </div>
        </div>
      </section>
    </>
  );
}
