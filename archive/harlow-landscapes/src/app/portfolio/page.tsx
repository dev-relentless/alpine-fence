import type { Metadata } from 'next';
import { harlowProjects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Selected residential and estate landscape projects across the Wasatch Front.',
};

const numerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

export default function PortfolioPage() {
  return (
    <>
      <section className="container-editorial py-24 md:py-32 max-w-3xl">
        <div className="tag mb-4">Portfolio</div>
        <h1 className="h-display text-5xl md:text-6xl text-stone-900 leading-[1.06] mb-8">
          Selected projects.
        </h1>
        <p className="text-stone-600 leading-relaxed text-lg">
          A small, edited catalogue. Each project is a multi-year relationship — design,
          construction, and ongoing stewardship by the same firm.
        </p>
      </section>

      <section className="container-editorial pb-32 space-y-24 md:space-y-28">
        {harlowProjects.map((p, i) => (
          <article key={p.slug} className="grid lg:grid-cols-12 gap-10 items-center">
            <div className={`lg:col-span-7 ${i % 2 ? 'lg:order-2' : ''}`}>
              <figure className="relative aspect-[4/3] bg-stone-200 overflow-hidden shadow-editorial">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.hero}
                  alt={p.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </figure>
              <figcaption className="tag mt-4 text-stone-500">
                Plate {numerals[i]} — {p.location}
              </figcaption>
            </div>
            <div className={`lg:col-span-5 lg:flex lg:flex-col lg:justify-center space-y-5 ${i % 2 ? 'lg:order-1' : ''}`}>
              <div className="tag">{p.location} · {p.year}</div>
              <h2 className="h-display text-3xl md:text-5xl text-stone-900 leading-[1.1]">{p.title}</h2>
              <p className="text-stone-600 leading-relaxed">{p.summary}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {p.scope.map((t) => (
                  <span key={t} className="tag border border-stone-300 px-3 py-1">{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
