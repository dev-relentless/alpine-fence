import Link from 'next/link';
import { BRAND } from '@/data/brand';
import { serviceCategories } from '@/data/services';
import ServiceTile from '@/components/ServiceTile';

export default function HomePage() {
  return (
    <>
      {/* ─────────── HERO ─────────── */}
      <section className="bg-water-light">
        <div className="container-deck pt-24 md:pt-32 pb-20 md:pb-24 text-center">
          <div className="tag mb-7">Pool &amp; Spa Service · Wasatch Front, Utah</div>
          <h1 className="h-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl mx-auto text-pool-950">
            Clear water, <span className="text-pool-500">every week.</span>
          </h1>
          <p className="mt-8 text-pool-700 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Swimming pool and spa cleaning, maintenance, and equipment repair — one
            company, one call, since 1996. You swim; we handle everything else.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link href="/quote" className="btn-primary">
              Request an estimate
            </Link>
            <a href={`tel:${BRAND.phoneRaw}`} className="font-semibold text-pool-700 hover:text-pool-950 text-[15px]">
              or call {BRAND.phone}
            </a>
          </div>
        </div>
        <div className="border-t border-pool-100 bg-white/60">
          <div className="container-deck py-4 text-center tag">
            Licensed &amp; insured · Factory-trained technicians · Serving Utah since 1996
          </div>
        </div>
      </section>

      {/* ─────────── SERVICES ─────────── */}
      <section className="container-deck py-20 md:py-28">
        <div className="text-center mb-14">
          <div className="tag mb-4">What We Do</div>
          <h2 className="h-display text-4xl md:text-5xl text-pool-950">One company for the whole pool.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {serviceCategories.map((c) => (
            <Link key={c.slug} href={`/services#${c.slug}`} className="group block">
              <ServiceTile
                slug={c.slug as 'weekly' | 'repair' | 'seasonal'}
                caption={c.shortTitle}
                className="transition-transform duration-300 group-hover:-translate-y-1"
              />
              <h3 className="h-display text-2xl text-pool-950 mt-6 mb-2 text-center">{c.title}</h3>
              <p className="text-pool-600 text-[15px] leading-relaxed text-center max-w-xs mx-auto">{c.blurb}</p>
              <div className="mt-4 text-center tag !text-aqua-600 group-hover:!text-aqua-700">Learn more</div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─────────── WHY US ─────────── */}
      <section className="bg-deep-end text-deck-50">
        <div className="container-deck py-20 md:py-28 text-center">
          <div className="tag !text-pool-300 mb-6">Why Utah Pool Experts</div>
          <p className="h-display text-3xl md:text-4xl lg:text-[2.75rem] leading-snug max-w-3xl mx-auto">
            Three decades of Utah pools — hard water, hot summers, freezing
            winters — and the routines that keep them swim-ready anyway.
          </p>
          <div className="mx-auto h-px w-16 bg-pool-700 my-10" aria-hidden />
          <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto text-left">
            {[
              { k: 'The same tech, every week', v: 'Uniformed technicians on set routes who know your pool\u2019s history — not a different stranger each visit.' },
              { k: 'Honest diagnosis first', v: 'Factory-trained repair techs who fix before they replace, handle warranty work, and quote in writing.' },
              { k: 'Water chemistry, done right', v: 'Utah water runs hard and alkaline. We test and balance every visit so surfaces, heaters, and swimmers are protected.' },
            ].map((c) => (
              <div key={c.k}>
                <h3 className="h-display text-xl mb-2.5 text-white">{c.k}</h3>
                <p className="text-pool-200 text-[15px] leading-relaxed">{c.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── HOW IT WORKS ─────────── */}
      <section className="container-deck py-20 md:py-28">
        <div className="text-center mb-14">
          <div className="tag mb-4">How It Works</div>
          <h2 className="h-display text-4xl md:text-5xl text-pool-950">From first call to first swim.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl mx-auto">
          {[
            { k: 'Tell us about the pool', v: 'Call, text, or send the form — pool type, size, and what\u2019s bugging you. Estimates are free.' },
            { k: 'Get a written plan', v: 'Service schedule and price in writing. Weekly, chemical-only, or one-time — you pick the level.' },
            { k: 'We take the route', v: 'Your technician arrives on schedule, does the full checklist, and logs every visit.' },
            { k: 'You just swim', v: 'Clear, balanced water all season — and a repair team one call away when equipment acts up.' },
          ].map((s, i) => (
            <div key={s.k} className="text-center sm:text-left">
              <div className="font-display font-bold text-3xl text-aqua-500 mb-3">{i + 1}.</div>
              <div className="h-display text-xl mb-2 text-pool-950">{s.k}</div>
              <p className="text-pool-600 text-[15px] leading-relaxed">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────── TESTIMONIAL ─────────── */}
      <section className="container-deck pb-20 md:pb-28">
        <div className="card-tile px-8 py-14 md:py-16 text-center max-w-3xl mx-auto">
          <div className="text-sun-400 text-2xl tracking-[0.3em] mb-5" aria-hidden>★★★★★</div>
          <blockquote className="h-display text-2xl md:text-3xl text-pool-900 leading-snug">
            &ldquo;Utah Pool Experts continue to do a great job. Highly responsive, fixes any
            issues quickly&hellip; Awesome job guys!&rdquo;
          </blockquote>
          <div className="mt-6 tag">Finley K. — Yelp</div>
        </div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className="container-deck pb-4">
        <div className="rounded-tile bg-water-light border border-pool-100 px-8 py-16 md:py-20 text-center shadow-float">
          <h2 className="h-display text-3xl md:text-4xl text-pool-950 mb-4">Get your free estimate today.</h2>
          <p className="text-pool-600 max-w-xl mx-auto mb-9">
            Tell us about your pool and we&rsquo;ll put a service plan and price in
            writing — no pressure, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link href="/quote" className="btn-primary">Request an estimate</Link>
            <a href={`tel:${BRAND.phoneRaw}`} className="font-semibold text-pool-700 hover:text-pool-950 text-[15px]">
              {BRAND.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
