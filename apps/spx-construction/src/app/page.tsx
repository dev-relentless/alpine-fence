import Link from 'next/link';
import { BRAND } from '@/data/brand';
import { spxServices } from '@/data/services';

const smsHref = `sms:${BRAND.phoneRaw}?&body=${encodeURIComponent(BRAND.smsBody)}`;

export default function HomePage() {
  return (
    <>
      {/* ─────────── HERO ─────────── */}
      <section className="relative overflow-hidden bg-iron-fade text-concrete-50">
        <div className="absolute inset-0 bg-blueprint bg-[size:44px_44px]" aria-hidden />
        <div className="absolute -right-24 -top-24 h-[420px] w-[420px] rotate-12 border-[3px] border-signal-500/20 hidden lg:block" aria-hidden />
        <div className="relative container-site py-24 md:py-36">
          <div className="tag text-signal-400 mb-6">Residential General Contractor · Wasatch Front, UT</div>
          <h1 className="h-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] leading-[0.95] max-w-5xl">
            Additions. Basements.
            <br />
            <span className="text-signal-500">Walkouts.</span> Done right.
          </h1>
          <p className="mt-8 text-iron-300 text-lg leading-relaxed max-w-2xl">
            {BRAND.name} builds the hard parts of residential construction — cutting foundations,
            tying in rooflines, holding structural loads — with our own crews, stamped engineering,
            and schedules we actually keep.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <Link href="/quote" className="btn-primary w-full sm:w-auto text-center">
              Get a bid
            </Link>
            <a href={smsHref} className="btn-ghost border-concrete-50/30 text-concrete-50 hover:border-concrete-50 w-full sm:w-auto text-center">
              Text us
            </a>
            <a href={`tel:${BRAND.phoneRaw}`} className="text-sm tracking-wide text-iron-300 hover:text-concrete-50 sm:ml-2">
              {BRAND.phone}
            </a>
          </div>
        </div>
        <div className="relative border-t border-iron-800">
          <div className="container-site py-5 flex flex-wrap gap-x-10 gap-y-2 text-[11px] uppercase tracking-[0.25em] text-iron-400">
            <span>Licensed &amp; insured GC</span>
            <span>Stamped engineering</span>
            <span>Self-performed crews</span>
            <span>A Spravek company</span>
          </div>
        </div>
      </section>

      {/* ─────────── SERVICES GRID ─────────── */}
      <section className="container-site py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="tag text-signal-600 mb-3">What we build</div>
            <h2 className="h-display text-4xl md:text-5xl text-iron-950">
              Six scopes. <span className="text-iron-400">Zero hand-offs.</span>
            </h2>
          </div>
          <Link href="/services" className="btn-dark self-start md:self-auto">All services</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-iron-200 border border-iron-200">
          {spxServices.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services#${s.slug}`}
              className="group bg-concrete-50 p-8 hover:bg-iron-950 hover:text-concrete-50 transition-colors"
            >
              <div className="text-[11px] tracking-[0.3em] text-signal-600 mb-5">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="font-display font-bold uppercase tracking-headline text-xl mb-3">{s.title}</h3>
              <p className="text-sm leading-relaxed text-iron-500 group-hover:text-iron-300">{s.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ─────────── WALKOUT SPOTLIGHT ─────────── */}
      <section className="bg-iron-950 text-concrete-50">
        <div className="container-site py-20 md:py-28 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <div className="tag text-signal-400 mb-4">The specialty</div>
            <h2 className="h-display text-4xl md:text-5xl leading-tight mb-6">
              Basement walkouts that <span className="text-signal-500">unlock the whole level.</span>
            </h2>
            <p className="text-iron-300 leading-relaxed mb-6">
              Cutting a walkout into an existing foundation is structural surgery: engineering, saw-cutting,
              shoring, excavation, retaining, drainage, and a finished stairwell and door system. It&rsquo;s the
              difference between a basement and a daylight level — and it&rsquo;s the scope most contractors
              won&rsquo;t touch.
            </p>
            <ul className="space-y-3 text-sm text-iron-200 mb-8">
              {[
                'Stamped structural engineering on every cut',
                'Excavation, window wells, and retaining handled in-house',
                'Egress-compliant stairs, doors, and drainage',
                'Separate entrances for basement suites and ADUs',
              ].map((v) => (
                <li key={v} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 bg-signal-500" />{v}
                </li>
              ))}
            </ul>
            <Link href="/services#basement-walkouts" className="btn-primary">Walkouts &amp; entrances</Link>
          </div>
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-px bg-iron-800 border border-iron-800 self-start">
            {[
              { k: 'Cut & shore', v: 'Foundation saw-cut with the load path engineered and temporarily carried — never guessed.' },
              { k: 'Dig & retain', v: 'Excavated areaway with engineered retaining and drainage that keeps water out for good.' },
              { k: 'Frame & finish', v: 'Stairwell, landing, and door system built to egress code and flashed like an exterior wall should be.' },
              { k: 'Inspect & document', v: 'Permitted, inspected, and photographed at every stage — a paper trail your appraiser will love.' },
            ].map((c) => (
              <div key={c.k} className="bg-iron-900 p-7">
                <div className="font-display font-bold uppercase tracking-headline text-signal-400 mb-2 text-sm">{c.k}</div>
                <p className="text-iron-300 text-sm leading-relaxed">{c.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── WHY SPX ─────────── */}
      <section className="container-site py-20 md:py-28">
        <div className="tag text-signal-600 mb-3">Why SPX</div>
        <h2 className="h-display text-4xl md:text-5xl text-iron-950 mb-12 max-w-3xl">
          A builder&rsquo;s company, <span className="text-iron-400">not a broker&rsquo;s.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              k: 'Self-performed',
              v: 'Concrete, framing, and finish carpentry run by our own crews. Licensed trade partners handle mechanical, electrical, and plumbing under our schedule — not theirs.',
            },
            {
              k: 'Engineered, permitted, inspected',
              v: 'Every structural scope carries stamped engineering. Every project is permitted and inspected. If a corner needs cutting, it gets engineering — not silence.',
            },
            {
              k: 'Two decades of family craft',
              v: `${BRAND.name} is part of the ${BRAND.parent.name} family — a Spravek company with twenty years of construction on the Wasatch Front and one accountability line.`,
            },
          ].map((c) => (
            <div key={c.k} className="border-t-4 border-signal-500 pt-6">
              <h3 className="font-display font-bold uppercase tracking-headline text-lg mb-3">{c.k}</h3>
              <p className="text-iron-500 text-sm leading-relaxed">{c.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className="bg-signal-500 text-iron-950">
        <div className="container-site py-16 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="h-display text-4xl md:text-5xl leading-none">Have a project in mind?</h2>
            <p className="mt-3 font-medium">Site walk, straight numbers, and a schedule we keep. {BRAND.phone}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/quote" className="btn-dark w-full sm:w-auto text-center">Get a bid</Link>
            <a href={smsHref} className="btn-ghost border-iron-950/40 text-iron-950 hover:border-iron-950 w-full sm:w-auto text-center">Text us</a>
          </div>
        </div>
      </section>
    </>
  );
}
