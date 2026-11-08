import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND, smsHref } from '@/data/brand';
import { services } from '@/data/services';
import ServiceDiagram from '@/components/ServiceDiagram';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Concrete Services',
  description:
    'Driveways, patios & slabs, footings & foundations, excavation & grading, stamped & decorative, commercial, repair & removal, and retaining walls — full-service concrete on the Wasatch Front.',
  alternates: { canonical: `${BRAND.url}/services` },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Apex Concrete services',
          itemListElement: services.map((s, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: s.title,
            url: `${BRAND.url}/services/${s.slug}`,
          })),
        }}
      />

      <section className="container-apex pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="tag text-flag-600 mb-4">Services</div>
        <h1 className="h-display text-6xl md:text-8xl text-basalt-950 max-w-4xl">
          Everything concrete, <span className="text-basalt-400">one crew.</span>
        </h1>
        <p className="mt-8 text-basalt-600 leading-relaxed text-lg max-w-2xl">
          Every line below is bid in writing after a site walk — scope, spec, mix, finish, and price
          on paper. Not sure which one you need?{' '}
          <a href={smsHref} className="underline decoration-flag-500 underline-offset-4 hover:text-basalt-950">Text us a photo</a> and we’ll tell you.
        </p>
      </section>

      <section className="border-y border-basalt-200 bg-slab-100">
        <div className="container-apex divide-y divide-basalt-200">
          {services.map((s, i) => (
            <article key={s.slug} id={s.slug} className="grid lg:grid-cols-12 gap-10 lg:gap-14 py-16 md:py-20 scroll-mt-32 items-start">
              <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <ServiceDiagram slug={s.slug} index={i} className="shadow-card" />
              </div>
              <div className="lg:col-span-7 max-w-2xl space-y-6">
                <div>
                  <div className="text-[11px] tracking-[0.3em] text-flag-600 font-semibold mb-3">{String(i + 1).padStart(2, '0')}</div>
                  <h2 className="h-display text-4xl md:text-5xl text-basalt-950">
                    <Link href={`/services/${s.slug}`} className="hover:text-flag-600 transition-colors">{s.title}</Link>
                  </h2>
                </div>
                <p className="text-xl text-basalt-800">{s.blurb}</p>
                <p className="text-basalt-600 leading-relaxed">{s.detail}</p>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-[15px] text-basalt-700">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-flag-500" />{item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link href={`/services/${s.slug}`} className="btn-dark">About {s.shortTitle.toLowerCase()}</Link>
                  <Link href={`/estimate?service=${s.slug}`} className="btn-ghost">Get an estimate</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-apex py-20 md:py-28 text-center">
        <h2 className="h-display text-5xl md:text-6xl text-basalt-950 mb-4">Ready to walk the site?</h2>
        <p className="text-basalt-600 mb-8">Estimates are free, in writing, and don’t oblige you to anything.</p>
        <Link href="/estimate" className="btn-primary">Get a free estimate</Link>
      </section>
    </>
  );
}
