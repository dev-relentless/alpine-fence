import Link from 'next/link';
import Image from 'next/image';
import { BRAND } from '@/data/brand';
import Reveal from '@/components/Reveal';
import Parallax from '@/components/Parallax';

const smsHref = `sms:${BRAND.phoneRaw}?&body=${encodeURIComponent(BRAND.smsBody)}`;

export default function HomePage() {
  return (
    <>
      {/* ─────────── HERO ─────────── */}
      <section className="relative h-[100vh] min-h-[720px] overflow-hidden bg-stone-950 text-ivory-50">
        <div className="absolute inset-0">
          <Parallax speed={-40} className="absolute inset-0">
            <Image
              src="/harlow/hero.jpg"
              alt="Wasatch Front estate landscape"
              fill
              priority
              quality={92}
              sizes="100vw"
              className="object-cover"
            />
          </Parallax>
          {/* tonal scrim — darkens for legibility, anchors the right-side mark */}
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/45 via-stone-950/20 to-stone-950/90" />
          <div className="absolute inset-0 bg-gradient-to-l from-stone-950/65 via-stone-950/15 to-transparent" />
        </div>

        {/* visible monogram in dark right gutter */}
        <div className="pointer-events-none absolute right-[-3%] top-1/2 -translate-y-1/2 opacity-50 hidden md:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/harlow/monogram-light.svg"
            alt=""
            className="w-[640px] h-[640px] object-contain"
          />
        </div>

        {/* upper meta bar */}
        <div className="absolute top-0 inset-x-0">
          <div className="container-editorial flex items-center justify-between py-7 text-[11px] tracking-[0.32em] uppercase text-ivory-100/70">
            <span>Harlow &amp; Stone</span>
            <span className="hidden md:inline">By appointment</span>
            <span>Wasatch Front, UT</span>
          </div>
        </div>

        {/* hero content — anchored low-left for editorial weight */}
        <div className="relative container-editorial h-full flex flex-col justify-end pb-28 md:pb-32">
          <Reveal>
            <div className="eyebrow text-bronze-300 mb-7">A landscape firm · Design · Build · Steward</div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="h-display text-[14vw] md:text-[9.5vw] lg:text-[8vw] leading-[0.94] max-w-[14ch] tracking-[-0.03em]">
              The property
              <br />
              you&rsquo;ll never
              <br />
              <span className="italic text-bronze-300 font-light">want to leave.</span>
            </h1>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link href="/inquire" className="btn-primary bg-bronze-500 hover:bg-bronze-400 text-stone-900">
                Begin a project
              </Link>
              <a href={smsHref} className="btn-ghost border-ivory-100/40 text-ivory-50 hover:border-ivory-50">
                Text the firm
              </a>
              <a href={`tel:${BRAND.phoneRaw}`} className="text-sm tracking-wide text-ivory-100/75 hover:text-ivory-50 ml-2">
                {BRAND.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────── CREDO ─ full-bleed declaration ─────────── */}
      <section className="relative bg-ivory-50 border-b border-stone-200">
        <div className="container-editorial py-20 md:py-28 text-center">
          <Reveal>
            <div className="eyebrow text-bronze-500 mb-8">The Credo</div>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-display text-3xl md:text-5xl lg:text-[3.4rem] text-stone-900 leading-[1.18] tracking-display-tight max-w-5xl mx-auto">
              Few properties are ever built like this.
              <br className="hidden md:block" />
              <span className="italic text-moss-700"> The few that are, are built by one firm.</span>
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 flex items-center justify-center gap-4 text-stone-400">
              <span className="h-px w-12 bg-stone-300" />
              <span className="text-[10px] tracking-[0.4em] uppercase">From sketch to steward</span>
              <span className="h-px w-12 bg-stone-300" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────── MEANING — the name carries the work ─────────── */}
      <section className="relative bg-ivory-50 overflow-hidden">
        {/* logo watermark in shadows */}
        <div className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 opacity-25 hidden md:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/harlow/monogram.svg" alt="" className="w-[600px] h-[600px] object-contain" />
        </div>
        <div className="relative container-editorial py-28 md:py-40">
          <Reveal>
            <div className="eyebrow text-stone-500 mb-6 text-center">The Name</div>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-display text-3xl md:text-4xl text-stone-800 max-w-3xl mx-auto text-center leading-snug tracking-display-tight">
              Two ideas held in one name. The hand and the foundation. What the eye keeps, and what the ground holds.
            </p>
          </Reveal>

          <div className="mt-24 grid lg:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-16 items-stretch">
            <Reveal delay={150}>
              <article className="relative h-full p-10 md:p-14 border border-stone-200 bg-ivory-100/60">
                <div className="absolute top-6 right-6 text-[10px] tracking-[0.3em] text-stone-400">I</div>
                <div className="eyebrow text-bronze-500 mb-6">Harlow</div>
                <h3 className="font-display text-5xl md:text-6xl text-stone-900 mb-6 italic font-light">The hand.</h3>
                <p className="text-stone-700 leading-relaxed text-lg max-w-md">
                  Refinement, proportion, restraint. Harlow is the design intelligence of the firm — the way a wall meets the architecture, the cadence of light across a terrace, the quiet edit that keeps a property feeling inevitable instead of arranged.
                </p>
                <ul className="mt-8 space-y-2 text-sm text-stone-600">
                  {['Considered proportion', 'Editorial restraint', 'Light, line, repetition'].map((v) => (
                    <li key={v} className="flex items-center gap-3">
                      <span className="h-px w-5 bg-bronze-400" />{v}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal delay={250} className="hidden lg:flex flex-col items-center justify-center">
              <div className="h-24 w-px bg-stone-300" />
              <div className="font-display text-7xl text-bronze-500 italic my-4 leading-none">&amp;</div>
              <div className="h-24 w-px bg-stone-300" />
            </Reveal>

            <Reveal delay={350}>
              <article className="relative h-full p-10 md:p-14 border border-stone-200 bg-stone-900 text-ivory-50">
                <div className="absolute top-6 right-6 text-[10px] tracking-[0.3em] text-ivory-100/40">II</div>
                <div className="eyebrow text-bronze-300 mb-6">Stone</div>
                <h3 className="font-display text-5xl md:text-6xl text-ivory-50 mb-6 italic font-light">The foundation.</h3>
                <p className="text-ivory-100/85 leading-relaxed text-lg max-w-md">
                  Strength, legacy, the part you don&rsquo;t see. Stone is the engineering underneath — base preparation, drainage, footings, structural walls, and honest materials specified to outlive the people who commissioned them.
                </p>
                <ul className="mt-8 space-y-2 text-sm text-ivory-100/75">
                  {['Engineered substructure', 'Natural stone & masonry', 'Built to outlast trends'].map((v) => (
                    <li key={v} className="flex items-center gap-3">
                      <span className="h-px w-5 bg-bronze-300" />{v}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────── INVITATION — who this is for ─────────── */}
      <section className="relative bg-stone-950 text-ivory-50 overflow-hidden">
        <div className="pointer-events-none absolute right-[-8%] -top-20 opacity-30 hidden md:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/harlow/monogram-light.svg" alt="" className="w-[560px] h-[560px] object-contain" />
        </div>
        <div className="relative container-editorial py-24 md:py-32 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="eyebrow text-bronze-300 mb-4">An Invitation</div>
            <h2 className="h-display text-4xl md:text-6xl leading-[1.04] mb-8">
              For the property
              <br />
              <span className="italic text-bronze-300 font-light">that deserves it.</span>
            </h2>
            <p className="text-ivory-100/80 leading-relaxed max-w-md mb-8">
              We take on a small number of projects each year. Each one is held by the principal, drawn against the architecture, and built by trades that have worked together for two decades.
            </p>
            <Link href="/inquire" className="btn-primary bg-bronze-500 hover:bg-bronze-400 text-stone-900">
              Request a conversation
            </Link>
          </div>
          <div className="lg:col-span-7 lg:pl-10 lg:border-l border-ivory-50/15 space-y-2">
            <div className="eyebrow text-ivory-100/55 mb-6">Harlow &amp; Stone is for —</div>
            {[
              {
                n: '01',
                k: 'Architecturally-significant homes',
                v: 'Properties where the landscape has to answer to architecture as well as to the land.',
              },
              {
                n: '02',
                k: 'Estate properties & private compounds',
                v: 'Long-form sites: drives, courts, terraces, water, gardens, and the years of stewardship that follow.',
              },
              {
                n: '03',
                k: 'Owners who plan to stay',
                v: 'Clients who want one firm holding the property across decades — not a different number for every season.',
              },
            ].map((item, i) => (
              <Reveal key={item.n} delay={i * 100}>
                <div className="grid grid-cols-[auto_1fr] gap-6 py-7 border-b border-ivory-50/10 last:border-0">
                  <div className="text-[11px] tracking-[0.3em] text-bronze-300 pt-2">{item.n}</div>
                  <div>
                    <div className="font-display text-2xl md:text-3xl italic text-ivory-50 mb-2 leading-snug">{item.k}</div>
                    <p className="text-ivory-100/70 leading-relaxed">{item.v}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── IN-HOUSE — our own crews, beginning to end ─────────── */}
      <section className="relative bg-ivory-100 border-y border-stone-200 overflow-hidden">
        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-25 hidden md:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/harlow/monogram.svg" alt="" className="w-[620px] h-[620px] object-contain" />
        </div>
        <div className="relative container-editorial py-24 md:py-32">
          <div className="max-w-3xl mb-14">
            <div className="eyebrow mb-4">In-house, end to end</div>
            <h2 className="h-display text-4xl md:text-6xl text-stone-900 leading-[1.05]">
              Our own crews. <span className="italic text-moss-700">From the first sketch to the last walk-through.</span>
            </h2>
            <p className="mt-6 text-stone-600 leading-relaxed text-lg max-w-2xl">
              We don&rsquo;t broker the work. Designers, landscapers, builders, masons, concrete and stone setters, planters, irrigation techs, lighting specialists, and stewardship horticulturists are all on our payroll &mdash; one firm, one chain of accountability, one phone number for the life of the property.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-px bg-stone-200 border border-stone-200">
            {[
              { n: '01', k: 'Design', v: 'Site analysis, master planning, construction documents — drawn by the principal who walks the property with you.' },
              { n: '02', k: 'Build', v: 'Earthwork, concrete, masonry, retaining walls, hardscape, sport courts, irrigation, and lighting — installed by our own landscapers, builders, and trades. No subs.' },
              { n: '03', k: 'Plant', v: 'Specimen sourcing, layered planting, sod and lawn install, and finish work by our in-house planters and horticulturists.' },
              { n: '04', k: 'Steward', v: 'Mowing, pruning, fertility, irrigation tuning, lighting service, and seasonal refinements — the same firm, returning year after year, keeping the property looking its best.' },
            ].map((s) => (
              <Reveal key={s.n} className="h-full">
                <div className="bg-ivory-50 p-8 lg:p-10 h-full">
                  <div className="text-[10px] tracking-[0.3em] text-stone-400 mb-4">{s.n}</div>
                  <div className="font-display text-2xl italic text-moss-700 mb-3">{s.k}</div>
                  <p className="text-stone-600 text-sm leading-relaxed">{s.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-stone-500 text-sm italic max-w-2xl">
            — No subcontracted designers. No subcontracted builders. No handoff to a maintenance company you&rsquo;ve never met.
          </p>
        </div>
      </section>

      {/* ─────────── STEWARDSHIP ─────────── */}
      <section className="relative bg-moss-deep text-ivory-50 overflow-hidden">
        <div className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 opacity-30 hidden md:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/harlow/monogram-light.svg" alt="" className="w-[500px] h-[500px] object-contain" />
        </div>
        <div className="relative container-editorial py-24 md:py-32 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="eyebrow text-bronze-300 mb-4">Stewardship</div>
            <h2 className="h-display text-4xl md:text-5xl leading-[1.05] mb-6">
              The firm doesn&rsquo;t leave <span className="italic text-bronze-300">when the truck does.</span>
            </h2>
            <p className="text-ivory-100/80 leading-relaxed max-w-md">
              A property settles into itself slowly — and looks its best when someone is paying attention. Bronze patinas, stone weathers, canopies widen, lawns thicken, light shifts with the seasons. Our stewardship program keeps the same firm close to the work: full-service maintenance and the slow refinements that hold a property at its peak.
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-ivory-50/10">
            {[
              { k: 'Lawn & grounds', v: 'Mowing, edging, fertility, aeration, and the weekly attention that keeps a property feeling kept — not merely cut.' },
              { k: 'Horticultural care', v: 'Pruning, plant replacement, seasonal color edits, and editorial refinements by in-house horticulturists.' },
              { k: 'Systems service', v: 'Irrigation calibration, lighting alignment and re-lamping, controller programming, blowouts, and spring start-ups.' },
              { k: 'Hardscape inspection', v: 'Annual review of walls, terraces, drainage, joinery, and finishes — small attention now, no failures later.' },
            ].map((c) => (
              <div key={c.k} className="bg-moss-deep p-7 md:p-9">
                <div className="font-display text-xl text-bronze-300 mb-2 italic">{c.k}</div>
                <p className="text-ivory-100/75 text-sm leading-relaxed">{c.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── CLOSER — by appointment ─────────── */}
      <section className="relative bg-stone-950 text-ivory-50 overflow-hidden">
        <div className="pointer-events-none absolute -left-16 top-1/2 -translate-y-1/2 opacity-30 hidden md:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/harlow/monogram-light.svg" alt="" className="w-[500px] h-[500px] object-contain" />
        </div>
        <div className="relative container-editorial py-28 md:py-40">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <Reveal className="lg:col-span-7">
              <div>
                <div className="eyebrow text-bronze-300 mb-6">By appointment</div>
                <h2 className="h-display text-4xl md:text-7xl leading-[1.02]">
                  Bring us a property.
                  <br />
                  <span className="italic text-bronze-300 font-light">We&rsquo;ll bring it forward a generation.</span>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={150} className="lg:col-span-5 lg:pl-10 lg:border-l border-ivory-50/15">
              <div>
                <p className="text-ivory-100/80 leading-relaxed mb-8">
                  The first conversation is unhurried. Tell us the site, the architecture, and what the property is meant to become. The firm&rsquo;s principal reads each inquiry personally.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <Link href="/inquire" className="btn-primary bg-bronze-500 hover:bg-bronze-400 text-stone-900">
                    Begin a project
                  </Link>
                  <a href={smsHref} className="btn-ghost border-ivory-100/40 text-ivory-50 hover:border-ivory-50">
                    Text the firm
                  </a>
                </div>
                <a href={`tel:${BRAND.phoneRaw}`} className="text-sm tracking-wide text-ivory-100/70 hover:text-ivory-50 inline-block">
                  {BRAND.phone}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
