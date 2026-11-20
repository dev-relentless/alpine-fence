import type { Metadata } from 'next';
import Link from 'next/link';
import { serviceCategories } from '@/data/services';
import ServiceTile from '@/components/ServiceTile';

export const metadata: Metadata = {
  title: 'Pool & Spa Services',
  description: 'Weekly pool & spa cleaning, equipment repair, chemical-only plans, and seasonal openings & closings along the Wasatch Front — since 1996.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-water-light">
        <div className="container-deck py-20 md:py-24 max-w-3xl text-center">
          <div className="tag mb-5">Our Services</div>
          <h1 className="h-display text-4xl md:text-6xl text-pool-950 leading-tight mb-7">
            Cleaning, repair, and everything between.
          </h1>
          <p className="text-pool-600 leading-relaxed text-lg">
            Every plan starts with a free estimate — pool type, condition, and what you
            want handled, priced in writing. Call or send the form and we&rsquo;ll take
            it from there.
          </p>
        </div>
      </section>

      <section className="border-y border-deck-200 bg-white">
        <div className="container-deck divide-y divide-deck-200">
          {serviceCategories.map((c, i) => (
            <article key={c.slug} id={c.slug} className="grid lg:grid-cols-12 gap-10 lg:gap-14 py-16 md:py-20 scroll-mt-28 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <ServiceTile
                  slug={c.slug as 'weekly' | 'repair' | 'seasonal'}
                  caption={c.shortTitle}
                />
              </div>
              <div className="lg:col-span-7 space-y-6 max-w-2xl">
                <div>
                  <div className="font-display font-bold text-2xl text-aqua-500 mb-2">{i + 1}.</div>
                  <h2 className="h-display text-3xl md:text-4xl text-pool-950">{c.title}</h2>
                </div>
                <p className="text-xl text-pool-800 font-display font-medium">{c.blurb}</p>
                <p className="text-pool-600 leading-relaxed">{c.detail}</p>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-[15px] text-pool-700">
                  {c.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua-500" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-deck py-20 md:py-28 text-center">
        <h2 className="h-display text-3xl md:text-5xl text-pool-950 mb-4">Picture the water clear again.</h2>
        <p className="text-pool-600 mb-8">Estimates are free and carry no obligation.</p>
        <Link href="/quote" className="btn-primary">Request an estimate</Link>
      </section>
    </>
  );
}
