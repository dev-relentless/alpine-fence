import Link from 'next/link';
import { BRAND } from '@/data/brand';
import { harlowServices } from '@/data/services';
import { harlowProjects } from '@/data/projects';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-moss-deep text-ivory-50 overflow-hidden">
        <div className="container-editorial py-28 md:py-40 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8 space-y-8 animate-fade-up">
            <div className="eyebrow text-ivory-200/70">{BRAND.shortName} — Wasatch Front, Utah</div>
            <h1 className="h-display text-5xl md:text-7xl lg:text-8xl leading-[1.02]">
              Considered landscapes.
              <br />
              <span className="text-bronze-300">Crafted to last.</span>
            </h1>
            <p className="max-w-xl text-ivory-100/80 text-lg leading-relaxed">
              {BRAND.description}
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <Link href="/inquire" className="btn-primary bg-bronze-500 hover:bg-bronze-400 text-stone-900">
                Begin a project
              </Link>
              <Link href="/portfolio" className="btn-ghost border-ivory-100/40 text-ivory-50 hover:border-ivory-50">
                See the work
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4 space-y-4 text-ivory-100/70 text-sm leading-relaxed border-l border-ivory-100/15 pl-8">
            <div className="eyebrow text-ivory-200/70">Studio</div>
            <p>A premium design-build practice for residential gardens, estate properties, and architecturally-significant homes.</p>
            <p className="text-ivory-200/60">{BRAND.parent.note}</p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="container-editorial py-24 md:py-32 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="eyebrow mb-4">Philosophy</div>
          <div className="rule" />
        </div>
        <div className="lg:col-span-8 space-y-8">
          <p className="font-display text-3xl md:text-4xl leading-snug text-stone-800 tracking-display-tight">
            We design landscapes that feel inevitable — quiet, generous, and built to deepen with time. Architecture meets horticulture meets craft.
          </p>
          <div className="grid sm:grid-cols-3 gap-8 pt-6">
            {[
              { k: 'Considered', v: 'Every line drawn against the architecture, sun path, and grade of the site.' },
              { k: 'Honest', v: 'Stone, steel, timber, and plants chosen for the climate they have to live in.' },
              { k: 'Stewarded', v: 'Built by the team that designs it, and cared for by the team that builds it.' },
            ].map((p) => (
              <div key={p.k} className="space-y-3">
                <div className="font-display text-xl text-moss-700">{p.k}</div>
                <p className="text-stone-600 text-sm leading-relaxed">{p.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-ivory-100">
        <div className="container-editorial py-24 md:py-32">
          <div className="flex items-end justify-between mb-14">
            <div>
              <div className="eyebrow mb-3">Services</div>
              <h2 className="h-display text-4xl md:text-5xl text-stone-900">A complete design-build practice.</h2>
            </div>
            <Link href="/services" className="hidden md:inline-block text-sm text-stone-700 hover:text-stone-900 border-b border-stone-400 pb-1">
              All services
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200">
            {harlowServices.map((s) => (
              <article key={s.slug} className="bg-ivory-50 p-8 lg:p-10 space-y-3">
                <div className="font-display text-2xl text-stone-900">{s.title}</div>
                <p className="text-stone-600 text-sm leading-relaxed">{s.blurb}</p>
                <Link href={`/services#${s.slug}`} className="inline-block text-xs tracking-eyebrow uppercase text-moss-700 hover:text-moss-900 pt-2">
                  Detail →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="container-editorial py-24 md:py-32">
        <div className="flex items-end justify-between mb-14">
          <div>
            <div className="eyebrow mb-3">Selected Work</div>
            <h2 className="h-display text-4xl md:text-5xl text-stone-900">Recent projects.</h2>
          </div>
          <Link href="/portfolio" className="text-sm text-stone-700 hover:text-stone-900 border-b border-stone-400 pb-1">
            Full portfolio
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {harlowProjects.map((p) => (
            <article key={p.slug} className="group">
              <div className="aspect-[4/5] bg-stone-200 mb-5 overflow-hidden">
                {/* Photography placeholder — drop image at /harlow/projects/<slug>.jpg */}
                <div className="h-full w-full flex items-center justify-center text-stone-400 text-sm">
                  {p.title}
                </div>
              </div>
              <div className="eyebrow mb-2">{p.location} — {p.year}</div>
              <h3 className="font-display text-2xl text-stone-900 mb-2 group-hover:text-moss-700 transition-colors">{p.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{p.summary}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-900 text-ivory-50">
        <div className="container-editorial py-24 md:py-32 grid lg:grid-cols-2 gap-10 items-center">
          <h2 className="h-display text-4xl md:text-5xl leading-tight">
            Beginning a project?
            <br />
            <span className="text-bronze-300">We&rsquo;d be honored to hear about it.</span>
          </h2>
          <div className="space-y-6 lg:pl-10">
            <p className="text-ivory-100/80 leading-relaxed max-w-md">
              Inquiries open the conversation. Tell us about the site, the home, and the way you&rsquo;d like to live in the landscape.
            </p>
            <Link href="/inquire" className="btn-primary bg-bronze-500 hover:bg-bronze-400 text-stone-900">
              Begin a project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
