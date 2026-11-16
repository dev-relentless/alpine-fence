import type { Metadata } from 'next';
import Link from 'next/link';
import { spxServices } from '@/data/services';

export const metadata: Metadata = {
  title: 'The Work',
  description: 'Design·build delivery, custom residences, whole-home renovations, additions, lower levels & walkouts, and structural site work — Wasatch Front, Utah.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="container-site py-24 md:py-32 max-w-3xl">
        <div className="eyebrow mb-5">The work</div>
        <h1 className="h-display text-4xl md:text-6xl text-carbon-950 leading-tight mb-8">
          Residential work,
          <br />
          <span className="italic text-carbon-500">considered whole.</span>
        </h1>
        <p className="text-carbon-500 leading-relaxed text-lg">
          New residences, renovations, additions, and the structural scopes beneath them —
          designed and built by one team, so nothing is lost in translation between the
          drawing and the site.
        </p>
      </section>

      <section className="bg-bone-100 border-y border-bone-200">
        <div className="container-site divide-y divide-bone-200">
          {spxServices.map((s, i) => (
            <article key={s.slug} id={s.slug} className="grid lg:grid-cols-12 gap-10 py-16 md:py-20 scroll-mt-24">
              <div className="lg:col-span-4">
                <div className="text-[11px] tracking-[0.3em] text-brass-500 mb-4">{String(i + 1).padStart(2, '0')}</div>
                <h2 className="font-display text-3xl text-carbon-950 leading-snug">{s.title}</h2>
              </div>
              <div className="lg:col-span-8 space-y-5 text-carbon-600 leading-relaxed max-w-2xl">
                <p className="font-display text-xl text-carbon-900">{s.blurb}</p>
                <p>{s.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-site py-24 md:py-32 text-center">
        <h2 className="h-display text-3xl md:text-5xl text-carbon-950 mb-4">Have something <span className="italic">in mind?</span></h2>
        <p className="text-carbon-500 mb-10 max-w-md mx-auto leading-relaxed">Every project begins the same way — quietly, with a conversation.</p>
        <Link href="/quote" className="btn-primary">Start a conversation</Link>
      </section>
    </>
  );
}
