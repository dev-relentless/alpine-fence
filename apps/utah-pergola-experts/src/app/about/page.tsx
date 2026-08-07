import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/data/brand';

export const metadata: Metadata = {
  title: 'Company',
  description: 'About Utah Pergola Experts — a Wasatch Front pergola and outdoor-living builder in the Alpine Fence & Deck family. A Spravek company.',
};

export default function AboutPage() {
  return (
    <>
      <section className="container-patio py-20 md:py-28 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-6">
          <div className="tag">The Company</div>
          <h1 className="h-display text-4xl md:text-6xl text-timber-950 leading-tight">
            Shade builders <br />
            <span className="text-timber-500">from a building family.</span>
          </h1>
        </div>
        <div className="lg:col-span-7 space-y-6 text-timber-600 leading-relaxed text-lg">
          <p>
            {BRAND.name} grew out of two decades of deck and outdoor work: the requests kept
            coming for pergolas, and the market kept answering with wobbly kits and crews who
            had never set a footing. So we made it a specialty.
          </p>
          <p>
            We build shade structures the way the rest of our family builds fences, decks, and
            homes — real footings below frost line, spans engineered for snow, connections that
            are bolted instead of hoped, and finishes chosen for high-altitude sun. Timber when
            you want warmth, motorized aluminum when you want control, solid roofs when you want
            all-weather cover.
          </p>
          <p>
            Pergola Experts is part of a family of companies anchored by{' '}
            <a href={BRAND.parent.url} className="underline decoration-sienna-400 underline-offset-4 hover:text-timber-950">{BRAND.parent.name}</a>{' '}
            — a Spravek company — alongside SPX Construction, Harlow Landscapes, Braddock
            Concrete, and Relentless Equipment. Twenty years of Wasatch Front construction,
            one accountability line.
          </p>
        </div>
      </section>

      <section className="bg-walnut-depth text-linen-50">
        <div className="container-patio py-20 md:py-28 grid lg:grid-cols-3 gap-10">
          {[
            { k: 'Structures, not kits', v: 'Concrete footings, engineered spans, bolted connections. Built to be inherited with the house, not replaced with it.' },
            { k: 'Proposals in writing', v: 'Drawings, materials, and price on paper before work starts — options priced separately so you decide what\u2019s worth it.' },
            { k: 'Family-backed', v: 'Two decades of Wasatch Front construction stand behind the work. If something is wrong, one call fixes it.' },
          ].map((v) => (
            <div key={v.k} className="border-t border-timber-600 pt-6 space-y-3">
              <div className="h-display text-xl text-linen-50">{v.k}</div>
              <p className="text-timber-300 leading-relaxed text-[15px]">{v.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-patio py-20 md:py-28 text-center">
        <h2 className="h-display text-3xl md:text-4xl text-timber-950 mb-4">Begin with a walk of the yard.</h2>
        <p className="text-timber-600 mb-8">A consultation costs nothing and obliges nothing.</p>
        <Link href="/quote" className="btn-primary">Request a consultation</Link>
      </section>
    </>
  );
}
