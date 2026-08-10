import Link from 'next/link';
import Image from 'next/image';
import { BRAND } from '@/data/brand';

const numerals = ['I', 'II', 'III', 'IV'];

export default function HomePage() {
  return (
    <>
      {/* ─────────── HERO ─────────── */}
      <section className="bg-ivory-soft">
        <div className="container-editorial pt-24 md:pt-32 pb-20 md:pb-24 text-center">
          <div className="tag mb-7">Landscape Design · Build · Steward — Wasatch Front, Utah</div>
          <h1 className="h-display text-5xl md:text-6xl lg:text-7xl leading-[1.06] max-w-4xl mx-auto text-stone-900">
            Landscapes composed with intent, built to be inherited.
          </h1>
          <div className="rule my-9" aria-hidden />
          <p className="text-stone-700 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            A small design-build firm holding a limited number of properties each year —
            drawn against the architecture, built by our own crews, and cared for by the
            people who built them.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link href="/inquire" className="btn-primary">Begin a project</Link>
            <a href={`tel:${BRAND.phoneRaw}`} className="text-stone-700 hover:text-stone-950 text-[15px]">
              or telephone {BRAND.phone}
            </a>
          </div>
        </div>
        <div className="border-t border-stone-200">
          <div className="container-editorial py-4 text-center tag">
            Licensed &amp; insured · By appointment · A Spravek company
          </div>
        </div>
      </section>

      {/* ─────────── HERO PLATE — a single, quiet image ─────────── */}
      <section className="container-editorial pt-16 md:pt-20">
        <figure className="relative aspect-[16/9] overflow-hidden shadow-editorial">
          <Image
            src="/harlow/hero.jpg"
            alt="Wasatch Front estate landscape"
            fill
            priority
            quality={92}
            sizes="(min-width: 1180px) 1140px, 100vw"
            className="object-cover"
          />
        </figure>
        <figcaption className="tag mt-4 text-center text-stone-500">Plate I — Estate landscape, Wasatch Front</figcaption>
      </section>

      {/* ─────────── THE DISCIPLINE — three plates ─────────── */}
      <section className="container-editorial py-20 md:py-28">
        <div className="text-center mb-14">
          <div className="tag mb-4">The Discipline</div>
          <h2 className="h-display text-4xl md:text-5xl text-stone-900">One firm. Every layer of the landscape.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10 lg:gap-14 max-w-5xl mx-auto">
          {[
            {
              n: 'I',
              k: 'Design',
              v: 'Site analysis, master planning, and construction documents — drawn against the architecture, phased for the seasons ahead.',
            },
            {
              n: 'II',
              k: 'Build',
              v: 'Earthwork, masonry, hardscape, planting, irrigation, and lighting installed by our own crews. Nothing brokered. Nothing handed off.',
            },
            {
              n: 'III',
              k: 'Steward',
              v: 'Ongoing care of the landscapes we build — by the people who built them. The firm doesn\u2019t leave when the truck does.',
            },
          ].map((c) => (
            <div key={c.k} className="text-center">
              <div className="font-display text-3xl text-stone-400 mb-3">{c.n}.</div>
              <h3 className="h-display text-2xl text-stone-900 mb-3">{c.k}</h3>
              <p className="text-stone-600 text-[15px] leading-relaxed max-w-xs mx-auto">{c.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────── THE CONVICTION ─────────── */}
      <section className="bg-stone-deep text-ivory-100">
        <div className="container-editorial py-20 md:py-28 text-center">
          <div className="tag text-stone-400 mb-6">The Conviction</div>
          <p className="h-display text-3xl md:text-4xl lg:text-[2.75rem] leading-snug max-w-3xl mx-auto text-ivory-50">
            A landscape is a place a family lives in for a generation — held by one firm
            across decades, not a different number for every season.
          </p>
          <div className="mx-auto h-px w-16 bg-stone-600 my-10" aria-hidden />
          <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto text-left">
            {[
              { k: 'Drawn against the house', v: 'The landscape has to answer to the architecture as well as to the land. We begin on the drawing board, not in a sales meeting.' },
              { k: 'Built by our own crews', v: 'Designers, masons, planters, and lighting techs on our payroll. One firm, one accountability line, from earthwork to finish.' },
              { k: 'Kept, not maintained', v: 'The firm returns year after year — pruning, tuning, and quietly refining. A property looks its best when someone is paying attention.' },
            ].map((c) => (
              <div key={c.k}>
                <h3 className="h-display text-xl mb-2.5 text-ivory-50">{c.k}</h3>
                <p className="text-stone-300 text-[15px] leading-relaxed">{c.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── THE MANNER OF WORKING ─────────── */}
      <section className="container-editorial py-20 md:py-28">
        <div className="text-center mb-14">
          <div className="tag mb-4">The Manner of Working</div>
          <h2 className="h-display text-4xl md:text-5xl text-stone-900">From a walk of the property.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl mx-auto">
          {[
            { k: 'Consult', v: 'A site visit and conversation. We walk the property, listen for the way you mean to live in it, and outline a fit.' },
            { k: 'Design', v: 'Concept plans, material palettes, and a master plan — phased so the work can be built whole or across seasons.' },
            { k: 'Build', v: 'Construction by our own trades: earthwork, masonry, hardscape, planting, irrigation, and lighting. No subs.' },
            { k: 'Care', v: 'Stewardship after install. Seasonal walks, horticultural care, systems tuning, and the slow refinements that follow.' },
          ].map((s, i) => (
            <div key={s.k} className="text-center sm:text-left">
              <div className="font-display text-3xl text-bronze-500 mb-3">{numerals[i]}.</div>
              <div className="h-display text-xl mb-2 text-stone-900">{s.k}</div>
              <p className="text-stone-600 text-[15px] leading-relaxed">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────── FOR WHOM ─────────── */}
      <section className="bg-ivory-100 border-y border-stone-200">
        <div className="container-editorial py-20 md:py-28">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <div className="tag mb-4">For Whom</div>
            <h2 className="h-display text-4xl md:text-5xl text-stone-900">A small number of properties, each year.</h2>
            <p className="mt-6 text-stone-600 leading-relaxed">
              The firm keeps a short list. Inquiries are read by the principal and answered
              personally, usually within a business day.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
            {[
              { k: 'Architecturally-significant homes', v: 'Where the landscape has to answer to architecture as well as to the land.' },
              { k: 'Estate properties &amp; private compounds', v: 'Long-form sites: drives, courts, terraces, water, gardens, and the stewardship that follows.' },
              { k: 'Owners who plan to stay', v: 'Clients who want one firm holding the property across decades — not a different number for every season.' },
            ].map((c) => (
              <div key={c.k} className="border-t border-stone-300 pt-6">
                <h3 className="h-display text-xl text-stone-900 mb-2" dangerouslySetInnerHTML={{ __html: c.k }} />
                <p className="text-stone-600 text-[15px] leading-relaxed">{c.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── INVITATION ─────────── */}
      <section className="container-editorial pb-4">
        <div className="border border-stone-200 bg-ivory-100 px-8 py-16 md:py-20 text-center shadow-editorial">
          <h2 className="h-display text-3xl md:text-4xl text-stone-900 mb-4">Begin with a walk of the property.</h2>
          <p className="text-stone-600 max-w-xl mx-auto mb-9">
            The first conversation is unhurried. Tell us the site, the architecture, and
            what the property is meant to become — we&rsquo;ll write back within a business day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link href="/inquire" className="btn-primary">Begin a project</Link>
            <a href={`tel:${BRAND.phoneRaw}`} className="text-stone-700 hover:text-stone-950 text-[15px]">
              {BRAND.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
