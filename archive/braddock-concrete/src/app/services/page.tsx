import type { Metadata } from 'next';
import Link from 'next/link';
import { serviceCategories } from '@/data/services';

export const metadata: Metadata = {
  title: 'The Work',
  description: 'Concrete flatwork, footings & foundations, and excavation on the Wasatch Front — driveways, slabs, retaining walls, digs, trenching, and grading.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="container-slab py-20 md:py-28 max-w-3xl">
        <div className="tag text-signal-600 mb-4">The Work</div>
        <h1 className="h-display text-4xl md:text-6xl text-iron-950 leading-tight mb-8">
          Flatwork, foundations, dirt work.
        </h1>
        <p className="text-iron-500 leading-relaxed text-lg">
          Everything below is bid in writing after a site walk — scope, spec, mix, and price on
          paper. Call, text, or send the form and we&rsquo;ll come look at the ground.
        </p>
      </section>

      <section className="bg-cement-100 border-y border-iron-200">
        <div className="container-slab divide-y divide-iron-200">
          {serviceCategories.map((c, i) => (
            <article key={c.slug} id={c.slug} className="grid lg:grid-cols-12 gap-10 py-16 md:py-20 scroll-mt-24">
              <div className="lg:col-span-4">
                <div className="text-[11px] tracking-[0.3em] text-signal-600 mb-3">{String(i + 1).padStart(2, '0')}</div>
                <h2 className="h-display text-3xl text-iron-950">{c.title}</h2>
              </div>
              <div className="lg:col-span-8 space-y-6 max-w-2xl">
                <p className="text-xl text-iron-900">{c.blurb}</p>
                <p className="text-iron-600 leading-relaxed">{c.detail}</p>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm text-iron-700">
                  {c.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-signal-500" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-slab py-20 md:py-28 text-center">
        <h2 className="h-display text-3xl md:text-5xl text-iron-950 mb-6">Ready to walk the site?</h2>
        <Link href="/bid" className="btn-primary">Get a bid</Link>
      </section>
    </>
  );
}
