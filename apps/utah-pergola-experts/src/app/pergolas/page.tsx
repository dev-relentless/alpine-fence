import type { Metadata } from 'next';
import Link from 'next/link';
import { structureCategories } from '@/data/structures';

export const metadata: Metadata = {
  title: 'The Structures',
  description: 'Timber pergolas, motorized louvered roofs, and solid-roof pavilions on the Wasatch Front — engineered for Utah sun, wind, and snow.',
};

export default function PergolasPage() {
  return (
    <>
      <section className="container-patio py-20 md:py-28 max-w-3xl">
        <div className="tag text-sky-600 mb-4">The Structures</div>
        <h1 className="h-display text-4xl md:text-6xl text-timber-950 leading-tight mb-8">
          Timber, louvered, pavilion.
        </h1>
        <p className="text-timber-500 leading-relaxed text-lg">
          Every structure below starts with a yard walk and ends with a quote in writing —
          drawings, materials, and price on paper. Call, text, or send the form and we&rsquo;ll
          come look at the space.
        </p>
      </section>

      <section className="bg-linen-100 border-y border-timber-200">
        <div className="container-patio divide-y divide-timber-200">
          {structureCategories.map((c, i) => (
            <article key={c.slug} id={c.slug} className="grid lg:grid-cols-12 gap-10 py-16 md:py-20 scroll-mt-24">
              <div className="lg:col-span-4">
                <div className="text-[11px] tracking-[0.3em] text-sky-600 mb-3">{String(i + 1).padStart(2, '0')}</div>
                <h2 className="h-display text-3xl text-timber-950">{c.title}</h2>
              </div>
              <div className="lg:col-span-8 space-y-6 max-w-2xl">
                <p className="text-xl text-timber-900">{c.blurb}</p>
                <p className="text-timber-600 leading-relaxed">{c.detail}</p>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm text-timber-700">
                  {c.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-sky-500" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-patio py-20 md:py-28 text-center">
        <h2 className="h-display text-3xl md:text-5xl text-timber-950 mb-6">Picture it over your patio?</h2>
        <Link href="/quote" className="btn-primary">Get a quote</Link>
      </section>
    </>
  );
}
