import type { Metadata } from 'next';
import Link from 'next/link';
import { spxServices } from '@/data/services';

export const metadata: Metadata = {
  title: 'Services',
  description: 'General contracting, home additions, basement finishing, basement walkouts & egress, structural work, and garages — Utah residential construction.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="container-site py-20 md:py-28 max-w-3xl">
        <div className="tag text-signal-600 mb-4">Services</div>
        <h1 className="h-display text-4xl md:text-6xl text-iron-950 leading-tight mb-8">
          The hard parts of residential construction.
        </h1>
        <p className="text-iron-500 leading-relaxed text-lg">
          Additions, basements, walkouts, and structural work — the scopes that demand engineering,
          permits, and crews that have done it a hundred times. One GC, one schedule, one number.
        </p>
      </section>

      <section className="bg-concrete-100 border-y border-iron-200">
        <div className="container-site divide-y divide-iron-200">
          {spxServices.map((s, i) => (
            <article key={s.slug} id={s.slug} className="grid lg:grid-cols-12 gap-10 py-16 md:py-20 scroll-mt-24">
              <div className="lg:col-span-4">
                <div className="text-[11px] tracking-[0.3em] text-signal-600 mb-3">{String(i + 1).padStart(2, '0')}</div>
                <h2 className="font-display font-bold uppercase tracking-headline text-2xl text-iron-950">{s.title}</h2>
              </div>
              <div className="lg:col-span-8 space-y-5 text-iron-600 leading-relaxed max-w-2xl">
                <p className="text-xl text-iron-900">{s.blurb}</p>
                <p>{s.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-site py-20 md:py-28 text-center">
        <h2 className="h-display text-3xl md:text-5xl text-iron-950 mb-6">Ready for numbers?</h2>
        <Link href="/quote" className="btn-primary">Get a bid</Link>
      </section>
    </>
  );
}
