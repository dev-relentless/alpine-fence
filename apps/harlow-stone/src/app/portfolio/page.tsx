import type { Metadata } from 'next';
import { harlowProjects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Selected residential and estate landscape projects across the Wasatch Front.',
};

export default function PortfolioPage() {
  return (
    <>
      <section className="container-editorial py-24 md:py-32 max-w-3xl">
        <div className="eyebrow mb-4">Portfolio</div>
        <h1 className="h-display text-5xl md:text-6xl text-stone-900 leading-tight mb-8">
          Selected projects.
        </h1>
        <p className="text-stone-600 leading-relaxed text-lg">
          A small, edited catalogue. Each project is a multi-year relationship — design, construction, and ongoing stewardship by the same studio.
        </p>
      </section>

      <section className="container-editorial pb-24 md:pb-32 space-y-20">
        {harlowProjects.map((p, i) => (
          <article key={p.slug} className="grid lg:grid-cols-12 gap-10">
            <div className={`lg:col-span-7 ${i % 2 ? 'lg:order-2' : ''}`}>
              <div className="aspect-[4/3] bg-stone-200 flex items-center justify-center text-stone-400 text-sm">
                {p.title}
              </div>
            </div>
            <div className={`lg:col-span-5 lg:flex lg:flex-col lg:justify-center space-y-4 ${i % 2 ? 'lg:order-1' : ''}`}>
              <div className="eyebrow">{p.location} — {p.year}</div>
              <h2 className="h-display text-3xl md:text-4xl text-stone-900">{p.title}</h2>
              <p className="text-stone-600 leading-relaxed">{p.summary}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {p.scope.map((tag) => (
                  <span key={tag} className="text-xs uppercase tracking-eyebrow text-stone-500 border border-stone-300 rounded-full px-3 py-1">{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
