import type { Metadata } from 'next';
import Link from 'next/link';
import { structureCategories } from '@/data/structures';
import StructurePlate from '@/components/StructurePlate';

export const metadata: Metadata = {
  title: 'The Structures',
  description: 'Timber pergolas, motorized louvered roofs, and solid-roof pavilions on the Wasatch Front — engineered for Utah sun, wind, and snow.',
};

const numerals = ['I', 'II', 'III'];

export default function PergolasPage() {
  return (
    <>
      <section className="bg-parchment-glow">
        <div className="container-patio py-20 md:py-24 max-w-3xl text-center">
          <div className="tag mb-5">The Structures</div>
          <h1 className="h-display text-4xl md:text-6xl text-timber-950 leading-tight mb-7">
            Timber, louvered, pavilion.
          </h1>
          <div className="rule mb-7" aria-hidden />
          <p className="text-timber-600 leading-relaxed text-lg">
            Every structure begins with a walk of the yard and ends with a proposal in writing —
            drawings, materials, and price on paper. Telephone or send the form and we&rsquo;ll
            come look at the space.
          </p>
        </div>
      </section>

      <section className="border-y border-timber-200">
        <div className="container-patio divide-y divide-timber-200">
          {structureCategories.map((c, i) => (
            <article key={c.slug} id={c.slug} className="grid lg:grid-cols-12 gap-10 lg:gap-14 py-16 md:py-20 scroll-mt-28 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <StructurePlate
                  slug={c.slug as 'timber' | 'louvered' | 'pavilions'}
                  photo={`/pergola/projects/${c.slug}.jpg`}
                  alt={`${c.title} — project photograph`}
                  caption={`Plate ${numerals[i]} — ${c.shortTitle}`}
                  className="shadow-plate"
                />
              </div>
              <div className="lg:col-span-7 space-y-6 max-w-2xl">
                <div>
                  <div className="font-display text-2xl text-sienna-500 mb-2">{numerals[i]}.</div>
                  <h2 className="h-display text-3xl md:text-4xl text-timber-950">{c.title}</h2>
                </div>
                <p className="text-xl text-timber-800 font-display">{c.blurb}</p>
                <p className="text-timber-600 leading-relaxed">{c.detail}</p>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-[15px] text-timber-700">
                  {c.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-3 h-px w-3.5 shrink-0 bg-timber-400" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-patio py-20 md:py-28 text-center">
        <h2 className="h-display text-3xl md:text-5xl text-timber-950 mb-4">Picture it over your patio.</h2>
        <p className="text-timber-600 mb-8">A consultation costs nothing and obliges nothing.</p>
        <Link href="/quote" className="btn-primary">Request a consultation</Link>
      </section>
    </>
  );
}
