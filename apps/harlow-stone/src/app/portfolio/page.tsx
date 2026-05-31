import type { Metadata } from 'next';
import { harlowProjects } from '@/data/projects';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Selected residential and estate landscape projects across the Wasatch Front.',
};

export default function PortfolioPage() {
  return (
    <>
      <section className="container-editorial py-24 md:py-32 max-w-3xl">
        <div className="eyebrow mb-4">Portfolio</div>
        <h1 className="h-display text-5xl md:text-7xl text-stone-900 leading-[1.05] mb-8">
          Selected <span className="italic text-bronze-500">projects.</span>
        </h1>
        <p className="text-stone-600 leading-relaxed text-lg">
          A small, edited catalogue. Each project is a multi-year relationship — design, construction, and ongoing stewardship by the same firm.
        </p>
      </section>

      <section className="container-editorial pb-32 space-y-28">
        {harlowProjects.map((p, i) => (
          <Reveal key={p.slug}>
            <article className="grid lg:grid-cols-12 gap-10 items-center">
              <div className={`lg:col-span-7 ${i % 2 ? 'lg:order-2' : ''}`}>
                <div className="relative aspect-[4/3] bg-stone-200 overflow-hidden group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.hero}
                    alt={p.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-5 left-5 text-[10px] tracking-[0.3em] uppercase text-ivory-50/85 bg-stone-900/40 backdrop-blur-sm px-2 py-1">
                    No. {String(i + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>
              <div className={`lg:col-span-5 lg:flex lg:flex-col lg:justify-center space-y-5 ${i % 2 ? 'lg:order-1' : ''}`}>
                <div className="eyebrow">{p.location} — {p.year}</div>
                <h2 className="h-display text-3xl md:text-5xl text-stone-900 leading-tight">{p.title}</h2>
                <p className="text-stone-600 leading-relaxed">{p.summary}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {p.scope.map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-[0.25em] text-stone-500 border border-stone-300 rounded-full px-3 py-1">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </>
  );
}
