import type { Metadata } from 'next';
import Link from 'next/link';
import { fleetCategories } from '@/data/fleet';

export const metadata: Metadata = {
  title: 'The Fleet',
  description: 'Skid steers, mini excavators, attachments, and trailers for rent on the Wasatch Front — day, week, and month rates.',
};

export default function FleetPage() {
  return (
    <>
      <section className="container-yard py-20 md:py-28 max-w-3xl">
        <div className="tag text-volt-600 mb-4">The Fleet</div>
        <h1 className="h-display text-4xl md:text-6xl text-carbon-950 leading-tight mb-8">
          Machines, attachments, trailers.
        </h1>
        <p className="text-carbon-500 leading-relaxed text-lg">
          Everything below rents by the day, week, or month. Availability moves fast in season —
          call, text, or send the form and we&rsquo;ll confirm what&rsquo;s in the yard for your dates.
        </p>
      </section>

      <section className="bg-dust-100 border-y border-carbon-200">
        <div className="container-yard divide-y divide-carbon-200">
          {fleetCategories.map((c, i) => (
            <article key={c.slug} id={c.slug} className="grid lg:grid-cols-12 gap-10 py-16 md:py-20 scroll-mt-24">
              <div className="lg:col-span-4">
                <div className="text-[11px] tracking-[0.3em] text-volt-600 mb-3">{String(i + 1).padStart(2, '0')}</div>
                <h2 className="h-display text-3xl text-carbon-950">{c.title}</h2>
              </div>
              <div className="lg:col-span-8 space-y-6 max-w-2xl">
                <p className="text-xl text-carbon-900">{c.blurb}</p>
                <p className="text-carbon-600 leading-relaxed">{c.detail}</p>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm text-carbon-700">
                  {c.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-volt-500" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-yard py-20 md:py-28 text-center">
        <h2 className="h-display text-3xl md:text-5xl text-carbon-950 mb-6">Dates in mind?</h2>
        <Link href="/reserve" className="btn-primary">Check availability</Link>
      </section>
    </>
  );
}
