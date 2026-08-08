import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/data/brand';

export const metadata: Metadata = {
  title: 'Company',
  description: 'About Braddock Concrete — a Wasatch Front concrete & excavation contractor in the Alpine Fence & Deck family. A Spravek company.',
};

export default function AboutPage() {
  return (
    <>
      <section className="container-slab py-20 md:py-28 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-6">
          <div className="tag text-signal-600">Company</div>
          <h1 className="h-display text-4xl md:text-6xl text-iron-950 leading-tight">
            Concrete people <br />
            <span className="text-iron-400">from a building family.</span>
          </h1>
        </div>
        <div className="lg:col-span-7 space-y-6 text-iron-600 leading-relaxed text-lg">
          <p>
            {BRAND.name} exists because our family&rsquo;s crews kept hiring out the two trades
            every project starts with — the dig and the pour — and kept being disappointed.
            So we built the crew we wished we could hire.
          </p>
          <p>
            We run our own iron and finish our own concrete, which means the excavation and the
            pour live on one schedule with one person accountable for both. Base gets compacted
            like we have to pour on it — because we do. Mixes are specified for Utah freeze-thaw,
            joints get cut on time, and the bid you sign is the bid you pay.
          </p>
          <p>
            Braddock is part of a family of companies anchored by{' '}
            <a href={BRAND.parent.url} className="underline decoration-signal-500 underline-offset-4 hover:text-iron-950">{BRAND.parent.name}</a>{' '}
            — a Spravek company — alongside SPX Construction, Harlow Landscapes, and Relentless
            Equipment. Twenty years of Wasatch Front construction, one accountability line.
          </p>
        </div>
      </section>

      <section className="bg-forge-depth text-cement-50">
        <div className="container-slab py-20 md:py-28 grid lg:grid-cols-3 gap-10">
          {[
            { k: 'Own iron, own crews', v: 'No waiting on a rented excavator or a sub who took a better job. Our machines, our people, your schedule.' },
            { k: 'Bids in writing', v: 'Scope, spec, mix design, and price on paper before work starts. Change orders only when the ground surprises us both.' },
            { k: 'Family-backed', v: 'Two decades of Wasatch Front construction stand behind the work. If something is wrong, one call fixes it.' },
          ].map((v) => (
            <div key={v.k} className="border-t-4 border-signal-500 pt-6 space-y-3">
              <div className="h-display text-xl text-signal-400">{v.k}</div>
              <p className="text-iron-300 leading-relaxed text-sm">{v.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-slab py-20 md:py-28 text-center">
        <Link href="/bid" className="btn-primary">Get a bid</Link>
      </section>
    </>
  );
}
