import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/data/brand';
import SlabSection from '@/components/SlabSection';

export const metadata: Metadata = {
  title: 'About',
  description: `About ${BRAND.name} — an independent, full-service concrete contractor on Utah's Wasatch Front. One crew from excavation to finish, estimates in writing, built for freeze-thaw.`,
  alternates: { canonical: `${BRAND.url}/about` },
};

const principles = [
  { k: 'The ground comes first', v: 'We spend more time on subgrade and base than most contractors spend on the whole job. Concrete doesn’t fail from the top.' },
  { k: 'Weather is the spec', v: 'Air-entrained mixes, joints on a tight grid, cure that isn’t rushed. Our standard is written for a Wasatch January, not a brochure.' },
  { k: 'Paper before concrete', v: 'Scope, spec, mix, finish, and price in writing before a form is set. If the ground surprises us, we show you before we change anything.' },
  { k: 'Our own people', v: 'The crew that digs is the crew that pours. Nothing sits open waiting on a sub, and nobody points at anybody.' },
  { k: 'Finish like it’s ours', v: 'Edges tooled, joints straight, forms stripped clean, site swept. The last hour of the job is the one you look at for twenty years.' },
  { k: 'Answer the phone', v: 'The number on this site rings a person who was on your job. Questions after the pour get the same attention as the estimate did.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="container-apex pt-16 pb-12 md:pt-24 md:pb-16 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="tag text-flag-600 mb-4">About</div>
          <h1 className="h-display text-6xl md:text-8xl text-basalt-950">
            Independent. <br />
            <span className="text-basalt-400">Uncompromised.</span>
          </h1>
        </div>
        <div className="lg:col-span-7 space-y-6 text-basalt-600 leading-relaxed text-lg lg:pt-4">
          <p className="text-2xl text-basalt-950 font-medium leading-snug">
            {BRAND.name} is an independent concrete contractor on Utah’s Wasatch Front. We pour everything
            from a front walk to a shop foundation — and we pour all of it to the same written standard.
          </p>
          <p>
            The company exists because good concrete here is harder than it looks. The Wasatch Front has
            expansive clays on the benches, cobble in the valley, forty-degree daily swings, and deicer on
            everything from November to March. A slab that would last forever in Phoenix spalls and heaves
            here in three winters if the base, the mix, and the joints aren’t right.
          </p>
          <p>
            So we built a crew that treats the invisible work as the product: compacted base, steel on
            chairs, air-entrained mixes, joints cut on time, and a proper cure. Then we put that spec in
            writing on every estimate so you can hold us to it.
          </p>
          <p>
            Apex is licensed and insured in Utah and carries general liability and workers’ compensation.
            We are not part of a franchise or a marketing network — the person who estimates your job is
            the person responsible for it.
          </p>
        </div>
      </section>

      <section className="relative bg-basalt-950 text-slab-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark bg-grid" aria-hidden />
        <div className="relative container-apex py-20 md:py-28">
          <div className="tag text-flag-400 mb-3">How we work</div>
          <h2 className="h-display text-5xl md:text-6xl mb-12 max-w-3xl">Six things we won’t trade away.</h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-basalt-800 border border-basalt-800">
            {principles.map((p, i) => (
              <li key={p.k} className="bg-basalt-950 p-7">
                <div className="num text-4xl mb-5">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="h-display text-2xl mb-3">{p.k}</h3>
                <p className="text-basalt-300 text-sm leading-relaxed">{p.v}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-apex py-20 md:py-28 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <SlabSection className="bg-slab-100 p-4 border border-basalt-200 shadow-card" />
        </div>
        <div className="lg:col-span-6 space-y-6">
          <div className="tag text-flag-600">The standard</div>
          <h2 className="h-display text-5xl md:text-6xl text-basalt-950">Written into every estimate.</h2>
          <p className="text-basalt-600 leading-relaxed">
            {BRAND.spec.psi}, {BRAND.spec.air}. {BRAND.spec.base}. {BRAND.spec.steel}. {BRAND.spec.joints}. {BRAND.spec.cure}.
            That’s the floor, not the ceiling — engineered work follows the drawings.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/estimate" className="btn-primary">Get a free estimate</Link>
            <Link href="/services" className="btn-ghost">See the services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
