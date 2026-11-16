import type { Metadata } from 'next';
import Link from 'next/link';
import Photo from '@/components/Photo';
import Emblem from '@/components/Emblem';
import { BRAND } from '@/data/brand';
import { NETWORK_STATES } from '@/data/network';

export const metadata: Metadata = {
  title: 'About',
  description: `About ${BRAND.name} — the premium outdoor-living design-build firm behind the Pergola Experts state sites, building timber pergolas and complete outdoor spaces across the Mountain West. A Spravek company.`,
  alternates: { canonical: `${BRAND.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <section className="container-site pt-20 md:pt-28 pb-16 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-6">
          <div className="tag">The Company</div>
          <h1 className="h-display text-5xl md:text-6xl text-ink-950 leading-[1.0]">
            Builders first.<br />
            <span className="text-cedar-700">Then designers of shade.</span>
          </h1>
          <Emblem className="w-32 md:w-44 pt-4" />
        </div>
        <div className="lg:col-span-7 space-y-6 text-ink-600 leading-relaxed text-lg">
          <p>
            {BRAND.name} grew out of two decades of building fences, decks, and structures on the
            Wasatch Front. The requests kept coming for pergolas — real ones — and the market kept
            answering with wobbly kits and crews who had never set a footing. So we made the timber
            pergola our flagship and built a firm around it.
          </p>
          <p>
            Then the pergolas kept turning into rooms. Clients wanted the kitchen under it, the fire
            beside it, a screen from the neighbor, and lighting that made the whole thing glow at
            night. Today we design and build the entire outdoor space as one composition — timber,
            stone, steel, fire, and light — and we travel across the {BRAND.address.region} to do it.
          </p>
          <p>
            {BRAND.name} is the national brand; on the ground, we build under the{' '}
            <Link href="/locations" className="underline decoration-brass-400 underline-offset-4 hover:text-ink-950">Pergola Experts</Link>{' '}
            name in {NETWORK_STATES.map((s) => s.state).join(', ')} — a crew, a phone line, and
            climate-specific engineering for each state. We&rsquo;re a Spravek company, alongside
            Harlow Landscapes, SPX Construction, Braddock Concrete, and Relentless Equipment.
            Twenty years of construction, one accountability line.
          </p>
        </div>
      </section>

      <section className="container-site pb-24 md:pb-32 grid md:grid-cols-12 gap-5 md:gap-6">
        <Photo src="/ats/about/crew.jpg" alt="The crew raising a heavy-timber beam" label="About — crew raising a beam" sizes="(min-width: 768px) 58vw, 100vw" className="plate aspect-[16/11] md:col-span-7" />
        <Photo src="/ats/about/detail.jpg" alt="Hand-fit timber joinery detail" label="About — joinery in hand" sizes="(min-width: 768px) 42vw, 100vw" className="plate aspect-[16/11] md:aspect-auto md:col-span-5" />
      </section>

      <section className="bg-ink-depth text-bone-50">
        <div className="container-site py-24 md:py-32 grid lg:grid-cols-3 gap-10">
          {[
            { k: 'Structures, not kits', v: 'Concrete footings, engineered spans, bolted connections. Built to be inherited with the house, not replaced with it.' },
            { k: 'Proposals in writing', v: 'Drawings, materials, and price on paper before work starts — options priced separately so you decide what\u2019s worth it.' },
            { k: 'Family-backed', v: 'Two decades of Wasatch Front construction stand behind the work. If something is wrong, one call fixes it.' },
          ].map((v) => (
            <div key={v.k} className="border-t border-bone-50/20 pt-6 space-y-3">
              <div className="h-display text-xl">{v.k}</div>
              <p className="text-bone-100/70 leading-relaxed text-[15px]">{v.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-site py-24 md:py-32 text-center">
        <h2 className="h-display text-3xl md:text-4xl text-ink-950 mb-4">Begin with a walk of the yard.</h2>
        <p className="text-ink-600 mb-8">A consultation costs nothing and obliges nothing.</p>
        <Link href="/quote" className="btn-primary">Start a project</Link>
      </section>
    </>
  );
}
