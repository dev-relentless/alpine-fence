import type { Metadata } from 'next';
import Link from 'next/link';
import { harlowServices } from '@/data/services';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Design, hardscape, planting, irrigation, lighting, water, and estate care — a complete landscape design-build practice.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="container-editorial py-24 md:py-32 max-w-3xl">
        <div className="tag mb-4">Services</div>
        <h1 className="h-display text-5xl md:text-6xl text-stone-900 leading-[1.06] mb-8">
          One firm. Every layer of the landscape.
        </h1>
        <p className="text-stone-600 leading-relaxed text-lg">
          We carry a project from first sketch to final pruning — design, construction, and
          stewardship handled in-house so the vision is held by one team across years, not
          handed off across trades.
        </p>
      </section>

      <section className="bg-ivory-100 border-y border-stone-200">
        <div className="container-editorial divide-y divide-stone-200">
          {harlowServices.map((s, i) => (
            <article key={s.slug} id={s.slug} className="grid lg:grid-cols-12 gap-10 py-16 md:py-20 scroll-mt-24">
              <div className="lg:col-span-3">
                <div className="tag mb-3">{String(i + 1).padStart(2, '0')}</div>
                <h2 className="h-display text-3xl text-stone-900">{s.title}</h2>
              </div>
              <div className="lg:col-span-9 space-y-5 text-stone-700 leading-relaxed max-w-2xl">
                <p className="text-xl text-stone-800">{s.blurb}</p>
                <p>{s.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-editorial py-24 md:py-32 text-center">
        <h2 className="h-display text-4xl md:text-5xl text-stone-900 mb-6">Ready to begin?</h2>
        <Link href="/inquire" className="btn-primary">Begin a project</Link>
      </section>
    </>
  );
}
