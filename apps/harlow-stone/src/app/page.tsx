import Link from 'next/link';
import Image from 'next/image';
import { BRAND } from '@/data/brand';
import { harlowServices } from '@/data/services';
import { harlowProjects } from '@/data/projects';
import Reveal from '@/components/Reveal';
import Parallax from '@/components/Parallax';

const smsHref = `sms:${BRAND.phoneRaw}?&body=${encodeURIComponent(BRAND.smsBody)}`;

export default function HomePage() {
  return (
    <>
      {/* ─────────── HERO — cinematic, parallax, sharp ─────────── */}
      <section className="relative h-[94vh] min-h-[660px] overflow-hidden bg-stone-950 text-ivory-50">
        {/* photographic backdrop — next/image for sharp delivery, parallax wrapper */}
        <div className="absolute inset-0 -z-0">
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
          {/* tonal washes — kept light to preserve photographic richness */}
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/30 via-stone-950/5 to-stone-950/80" />
          {/* vignette */}
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at center, transparent 55%, rgba(13,11,9,0.4) 100%)' }}
          />
        </div>

        {/* logo watermark */}
        <div className="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 opacity-[0.20] hidden md:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/harlow/logo.png" alt="" className="w-[640px] h-[640px] object-contain brightness-0 invert" />
        </div>

        {/* hero content */}
        <div className="relative container-editorial h-full flex flex-col justify-end pb-24 md:pb-28">
          <Reveal>
            <div className="eyebrow text-bronze-300 mb-7">A landscape firm · Wasatch Front, Utah</div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="h-display text-[13vw] md:text-[8.5vw] lg:text-[7vw] leading-[0.96] max-w-[16ch] tracking-[-0.025em]">
              Outdoor environments,<br />
              <span className="italic text-bronze-300 font-light">crafted to endure.</span>
            </h1>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-10 grid md:grid-cols-12 gap-8 items-end">
              <p className="md:col-span-7 text-ivory-100/85 text-lg leading-relaxed max-w-2xl">
                Full landscape installations, retaining walls, sport courts, hardscape, lighting, and water — composed for the architecture they belong to and built on bones that don&rsquo;t move.
              </p>
              <div className="md:col-span-5 flex flex-wrap gap-3 md:justify-end">
                <Link href="/inquire" className="btn-primary bg-bronze-500 hover:bg-bronze-400 text-stone-900">
                  Begin a project
                </Link>
                <a href={smsHref} className="btn-ghost border-ivory-100/40 text-ivory-50 hover:border-ivory-50">
                  Text the firm
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-0 inset-x-0">
          <div className="container-editorial flex items-center justify-between py-5 border-t border-ivory-50/15 text-[11px] tracking-[0.28em] uppercase text-ivory-100/55">
            <span>Wasatch Front</span>
            <span className="hidden md:inline">Design · Build · Steward</span>
            <span>House Edition · No. 01</span>
          </div>
        </div>
      </section>

      {/* ─────────── MEANING — the name carries the work ─────────── */}
      <section className="relative bg-ivory-50 overflow-hidden">
        {/* logo watermark in shadows */}
        <div className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 opacity-[0.16] hidden md:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/harlow/logo.png" alt="" className="w-[680px] h-[680px] object-contain" />
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

      {/* ─────────── PHILOSOPHY ─────────── */}
      <section className="relative bg-ivory-100 border-y border-stone-200 overflow-hidden">
        {/* logo watermark in shadows */}
        <div className="pointer-events-none absolute -right-40 -bottom-32 opacity-[0.16] hidden md:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/harlow/logo.png" alt="" className="w-[620px] h-[620px] object-contain" />
        </div>
        <div className="relative container-editorial py-24 md:py-32 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <div className="eyebrow mb-4">Philosophy</div>
            <div className="rule" />
            <p className="mt-6 text-stone-500 text-sm leading-relaxed max-w-xs">
              How a Harlow &amp; Stone property carries itself — across seasons, ownership, and the slow widening of a canopy.
            </p>
          </div>
          <div className="lg:col-span-8 space-y-12">
            <Reveal>
              <p className="font-display text-3xl md:text-4xl leading-snug text-stone-800 tracking-display-tight">
                We compose outdoor environments that feel inevitable — generous to live in, quiet to look at, built so the structure outlasts the styling.
              </p>
            </Reveal>
            <div className="grid sm:grid-cols-3 gap-10 pt-2">
              {[
                { k: 'Considered', v: 'Every line drawn against the architecture, sun path, and grade of the site.' },
                { k: 'Honest', v: 'Stone, steel, timber, and plant material chosen for the climate they have to live in.' },
                { k: 'Stewarded', v: 'Built by the team that drew it. Looked after by the team that built it.' },
              ].map((p, i) => (
                <Reveal key={p.k} delay={i * 120}>
                  <div className="space-y-3 border-t border-stone-300 pt-6">
                    <div className="font-display text-xl text-moss-700 italic">{p.k}</div>
                    <p className="text-stone-600 text-sm leading-relaxed">{p.v}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── SERVICES ─────────── */}
      <section className="bg-ivory-50 relative overflow-hidden">
        {/* logo watermark in shadows */}
        <div className="pointer-events-none absolute -left-40 -bottom-40 opacity-[0.16] hidden md:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/harlow/logo.png" alt="" className="w-[640px] h-[640px] object-contain" />
        </div>
        <div className="relative container-editorial py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <div className="eyebrow mb-3">Capabilities</div>
              <h2 className="h-display text-4xl md:text-6xl text-stone-900 max-w-2xl leading-[1.05]">
                One firm. <span className="italic text-moss-700">Every layer of the property.</span>
              </h2>
              <p className="mt-5 text-stone-600 max-w-xl leading-relaxed">
                From rough grading to the final fixture aim — design, construction, and ongoing stewardship handled in-house, so the vision is held by one team across years.
              </p>
            </div>
            <Link href="/services" className="text-sm text-stone-700 hover:text-stone-900 border-b border-stone-400 pb-1 self-start md:self-auto">
              All capabilities →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200">
            {harlowServices.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 80}>
                <article className="group bg-ivory-50 p-8 lg:p-10 h-full transition-colors hover:bg-ivory-100 relative overflow-hidden">
                  <div className="absolute top-6 right-6 text-[10px] tracking-[0.3em] text-stone-300">{String(i + 1).padStart(2, '0')}</div>
                  <div className="font-display text-2xl text-stone-900 mb-3">{s.title}</div>
                  <p className="text-stone-600 text-sm leading-relaxed mb-5">{s.blurb}</p>
                  <Link href={`/services#${s.slug}`} className="inline-block text-xs tracking-eyebrow uppercase text-moss-700 group-hover:text-bronze-500 transition-colors">
                    Detail →
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── IN-HOUSE — our own crews, beginning to end ─────────── */}
      <section className="relative bg-ivory-100 border-y border-stone-200 overflow-hidden">
        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-[0.16] hidden md:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/harlow/logo.png" alt="" className="w-[700px] h-[700px] object-contain" />
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
              <Reveal key={s.n}>
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

      {/* ─────────── SELECTED WORK — real photography ─────────── */}
      <section className="relative container-editorial py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <div className="eyebrow mb-3">Selected Work</div>
            <h2 className="h-display text-4xl md:text-6xl text-stone-900 max-w-2xl leading-[1.05]">
              Recent <span className="italic text-bronze-500">projects.</span>
            </h2>
          </div>
          <Link href="/portfolio" className="text-sm text-stone-700 hover:text-stone-900 border-b border-stone-400 pb-1 self-start md:self-auto">
            Full portfolio →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {harlowProjects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 140}>
              <article className="group">
                <div className="relative aspect-[4/5] bg-stone-200 mb-6 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.hero}
                    alt={p.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-[10px] tracking-[0.3em] uppercase text-ivory-50/85">
                    No. {String(i + 1).padStart(2, '0')}
                  </div>
                </div>
                <div className="eyebrow mb-2">{p.location} — {p.year}</div>
                <h3 className="font-display text-2xl text-stone-900 mb-2 group-hover:text-moss-700 transition-colors">{p.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{p.summary}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─────────── STEWARDSHIP — replaces 'care' with a deeper voice ─────────── */}
      <section className="relative bg-moss-deep text-ivory-50 overflow-hidden">
        <div className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 opacity-[0.18] hidden md:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/harlow/logo.png" alt="" className="w-[560px] h-[560px] object-contain brightness-0 invert" />
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

      {/* ─────────── LINEAGE ─────────── */}
      <section className="relative bg-stone-50 border-y border-stone-200 overflow-hidden">
        <div className="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 opacity-[0.16] hidden md:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/harlow/logo.png" alt="" className="w-[520px] h-[520px] object-contain" />
        </div>
        <div className="relative container-editorial py-20 md:py-28 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5">
            <div className="eyebrow mb-3">Lineage</div>
            <h2 className="h-display text-3xl md:text-5xl text-stone-900 leading-tight">
              Twenty years of trades, <span className="italic text-moss-700">all under one firm.</span>
            </h2>
          </div>
          <div className="md:col-span-7 space-y-5 text-stone-700 leading-relaxed">
            <p>
              Harlow &amp; Stone is the design-led landscape practice of a family of companies anchored by <a className="underline decoration-bronze-400 underline-offset-4 hover:text-stone-900" href={BRAND.parent.url}>{BRAND.parent.name}</a> &mdash; twenty-plus years of Wasatch Front masonry, carpentry, and outdoor construction. The same crews that built fences and decks across Utah for two decades are the crews on your project.
            </p>
            <p className="text-stone-500 text-sm">
              The trades that build the work are the trades that have always built the work. The firm is what they sound like when given a drawing board.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className="relative bg-stone-950 text-ivory-50 overflow-hidden">
        {/* logo backdrop */}
        <div className="pointer-events-none absolute -left-16 top-1/2 -translate-y-1/2 opacity-[0.18] hidden md:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/harlow/logo.png" alt="" className="w-[560px] h-[560px] object-contain brightness-0 invert" />
        </div>
        <div className="relative container-editorial py-28 md:py-36 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <h2 className="h-display text-4xl md:text-6xl leading-[1.05]">
              Bring us a property.
              <br />
              <span className="italic text-bronze-300 font-light">We&rsquo;ll bring it forward a generation.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <div className="space-y-7 lg:pl-10 border-l border-ivory-50/15 lg:py-2">
              <p className="text-ivory-100/80 leading-relaxed max-w-md">
                The first conversation is unhurried. Tell us the site, the architecture, and what the property is meant to become. The firm’s principal reads each inquiry personally.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/inquire" className="btn-primary bg-bronze-500 hover:bg-bronze-400 text-stone-900">
                  Begin a project
                </Link>
                <a href={smsHref} className="btn-ghost border-ivory-100/40 text-ivory-50 hover:border-ivory-50">
                  Text the firm
                </a>
                <a href={`tel:${BRAND.phoneRaw}`} className="btn-ghost border-ivory-100/40 text-ivory-50 hover:border-ivory-50">
                  {BRAND.phone}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
