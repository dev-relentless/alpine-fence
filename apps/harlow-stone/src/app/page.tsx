import Link from 'next/link';
import Image from 'next/image';
import { BRAND } from '@/data/brand';
import { harlowServices } from '@/data/services';
import { harlowProjects } from '@/data/projects';
import Reveal from '@/components/Reveal';
import Parallax from '@/components/Parallax';

export default function HomePage() {
  return (
    <>
      {/* ─────────── HERO — cinematic, parallax, monogram watermark ─────────── */}
      <section className="relative h-[92vh] min-h-[640px] overflow-hidden bg-stone-950 text-ivory-50">
        {/* parallax photographic backdrop */}
        <div className="absolute inset-0 -z-0">
          <Parallax speed={-80} className="h-[120%] -mt-[10%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/harlow/hero.jpg"
              alt=""
              className="h-full w-full object-cover opacity-70"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
            />
          </Parallax>
          {/* layered tonal washes for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-stone-950/40 to-stone-950/95" />
          <div className="absolute inset-0 bg-moss-deep opacity-40 mix-blend-multiply" />
        </div>

        {/* logo watermark */}
        <div className="pointer-events-none absolute -right-16 top-1/2 -translate-y-1/2 opacity-[0.08] hidden md:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/harlow/logo.png" alt="" className="w-[680px] h-[680px] object-contain invert brightness-200" />
        </div>

        {/* hero content */}
        <div className="relative container-editorial h-full flex flex-col justify-end pb-20 md:pb-28">
          <Reveal>
            <div className="eyebrow text-bronze-300 mb-8">{BRAND.shortName} — Wasatch Front, Utah</div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="h-display text-[14vw] md:text-[9vw] lg:text-[7.5vw] leading-[0.95] max-w-[18ch]">
              Crafted permanence,<br />
              <span className="italic text-bronze-300 font-light">artfully composed.</span>
            </h1>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-10 grid md:grid-cols-12 gap-8 items-end">
              <p className="md:col-span-6 text-ivory-100/80 text-lg leading-relaxed max-w-xl">
                A landscape design-build studio creating considered outdoor environments where artistry and architecture settle into the land — built to last, designed to deepen with time.
              </p>
              <div className="md:col-span-6 flex flex-wrap gap-3 md:justify-end">
                <Link href="/inquire" className="btn-primary bg-bronze-500 hover:bg-bronze-400 text-stone-900">
                  Begin a project
                </Link>
                <Link href="/portfolio" className="btn-ghost border-ivory-100/40 text-ivory-50 hover:border-ivory-50">
                  See the work
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        {/* bottom rule + micro-type */}
        <div className="absolute bottom-0 inset-x-0">
          <div className="container-editorial flex items-center justify-between py-5 border-t border-ivory-50/15 text-[11px] tracking-[0.25em] uppercase text-ivory-100/50">
            <span>Est. — Wasatch Front</span>
            <span className="hidden md:inline">Design · Build · Steward</span>
            <span>No. 01 / Studio Edition</span>
          </div>
        </div>
      </section>

      {/* ─────────── MEANING — Harlow / & / Stone ─────────── */}
      <section className="relative bg-ivory-50 overflow-hidden">
        <div className="container-editorial py-28 md:py-40">
          <Reveal>
            <div className="eyebrow text-stone-500 mb-6 text-center">Meaning</div>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-display text-3xl md:text-4xl text-stone-800 max-w-3xl mx-auto text-center leading-snug tracking-display-tight">
              Two ideas held in a single name. The meeting of artistry and structure — refinement set into something that endures.
            </p>
          </Reveal>

          <div className="mt-24 grid lg:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-16 items-stretch">
            {/* HARLOW */}
            <Reveal delay={150}>
              <article className="relative h-full p-10 md:p-14 border border-stone-200 bg-ivory-100/60">
                <div className="absolute top-6 right-6 text-[10px] tracking-[0.3em] text-stone-400">I</div>
                <div className="eyebrow text-bronze-500 mb-6">Harlow</div>
                <h3 className="font-display text-5xl md:text-6xl text-stone-900 mb-6 italic font-light">Artistry.</h3>
                <p className="text-stone-700 leading-relaxed text-lg max-w-md">
                  Refinement, elevation, a boutique design sensibility. Harlow is the hand of the studio — the proportion of a stair, the cadence of a planting, the way light lands at dusk.
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

            {/* divider with ampersand */}
            <Reveal delay={250} className="hidden lg:flex flex-col items-center justify-center">
              <div className="h-24 w-px bg-stone-300" />
              <div className="font-display text-7xl text-bronze-500 italic my-4 leading-none">&amp;</div>
              <div className="h-24 w-px bg-stone-300" />
            </Reveal>

            {/* STONE */}
            <Reveal delay={350}>
              <article className="relative h-full p-10 md:p-14 border border-stone-200 bg-stone-900 text-ivory-50">
                <div className="absolute top-6 right-6 text-[10px] tracking-[0.3em] text-ivory-100/40">II</div>
                <div className="eyebrow text-bronze-300 mb-6">Stone</div>
                <h3 className="font-display text-5xl md:text-6xl text-ivory-50 mb-6 italic font-light">Permanence.</h3>
                <p className="text-ivory-100/80 leading-relaxed text-lg max-w-md">
                  Strength, legacy, architectural grounding. Stone is the bones of the work — engineered bases, honest materials, walls and terraces built to outlive the people who commissioned them.
                </p>
                <ul className="mt-8 space-y-2 text-sm text-ivory-100/70">
                  {['Engineered substructure', 'Natural stone & masonry', 'Built for generations'].map((v) => (
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

      {/* ─────────── PHILOSOPHY — editorial pull-quote ─────────── */}
      <section className="bg-ivory-100 border-y border-stone-200">
        <div className="container-editorial py-24 md:py-32 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <div className="eyebrow mb-4">Philosophy</div>
            <div className="rule" />
            <p className="mt-6 text-stone-500 text-sm leading-relaxed max-w-xs">
              How a Harlow &amp; Stone landscape carries itself — across seasons, generations, and the slow widening of a tree canopy.
            </p>
          </div>
          <div className="lg:col-span-8 space-y-12">
            <Reveal>
              <p className="font-display text-3xl md:text-4xl leading-snug text-stone-800 tracking-display-tight">
                We design landscapes that feel inevitable — quiet, generous, and built to deepen with time. Architecture meets horticulture meets craft.
              </p>
            </Reveal>
            <div className="grid sm:grid-cols-3 gap-10 pt-2">
              {[
                { k: 'Considered', v: 'Every line drawn against the architecture, sun path, and grade of the site.' },
                { k: 'Honest', v: 'Stone, steel, timber, and plants chosen for the climate they have to live in.' },
                { k: 'Stewarded', v: 'Built by the team that designs it, and cared for by the team that builds it.' },
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

      {/* ─────────── SERVICES — restrained grid ─────────── */}
      <section className="bg-ivory-50 relative">
        <div className="container-editorial py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <div className="eyebrow mb-3">Services</div>
              <h2 className="h-display text-4xl md:text-6xl text-stone-900 max-w-2xl leading-[1.05]">
                A complete <span className="italic text-moss-700">design-build</span> practice.
              </h2>
            </div>
            <Link href="/services" className="text-sm text-stone-700 hover:text-stone-900 border-b border-stone-400 pb-1 self-start md:self-auto">
              All services →
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

      {/* ─────────── SELECTED WORK — real photography ─────────── */}
      <section className="container-editorial py-24 md:py-32">
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
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
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

      {/* ─────────── STUDIO LINEAGE ─────────── */}
      <section className="bg-stone-50 border-y border-stone-200">
        <div className="container-editorial py-20 md:py-28 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5">
            <div className="eyebrow mb-3">Lineage</div>
            <h2 className="h-display text-3xl md:text-5xl text-stone-900 leading-tight">
              Two decades of craft, <span className="italic text-moss-700">a new studio voice.</span>
            </h2>
          </div>
          <div className="md:col-span-7 space-y-5 text-stone-700 leading-relaxed">
            <p>
              Harlow &amp; Stone is the design-led landscape practice of a family of companies anchored by <a className="underline decoration-bronze-400 underline-offset-4 hover:text-stone-900" href={BRAND.parent.url}>{BRAND.parent.name}</a> — twenty-plus years of Wasatch Front masonry, carpentry, and outdoor construction.
            </p>
            <p className="text-stone-500 text-sm">
              The trades that build the work are the trades that have always built the work. The studio is what they sound like when given a drawing board.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className="relative bg-stone-950 text-ivory-50 overflow-hidden">
        {/* logo backdrop */}
        <div className="pointer-events-none absolute -left-16 top-1/2 -translate-y-1/2 opacity-[0.07] hidden md:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/harlow/logo.png" alt="" className="w-[560px] h-[560px] object-contain invert brightness-200" />
        </div>
        <div className="relative container-editorial py-28 md:py-36 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <h2 className="h-display text-4xl md:text-6xl leading-[1.05]">
              Beginning a project?
              <br />
              <span className="italic text-bronze-300 font-light">We&rsquo;d be honored to hear about it.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <div className="space-y-7 lg:pl-10 border-l border-ivory-50/15 lg:py-2">
              <p className="text-ivory-100/80 leading-relaxed max-w-md">
                Inquiries open the conversation. Tell us about the site, the home, and the way you&rsquo;d like to live in the landscape. The studio principal reads each one personally.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/inquire" className="btn-primary bg-bronze-500 hover:bg-bronze-400 text-stone-900">
                  Begin a project
                </Link>
                <Link href="/contact" className="btn-ghost border-ivory-100/40 text-ivory-50 hover:border-ivory-50">
                  Studio contact
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      {/* keep next/image import live for future migration */}
      <Image src="/harlow/logo.png" alt="" width={1} height={1} className="hidden" />
    </>
  );
}
