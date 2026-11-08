import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BRAND, smsHref, telHref } from '@/data/brand';
import { services, serviceBySlug } from '@/data/services';
import ServiceDiagram, { figureTitles } from '@/components/ServiceDiagram';
import FaqList, { faqSchema } from '@/components/FaqList';
import JsonLd from '@/components/JsonLd';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const s = serviceBySlug(params.slug);
  if (!s) return {};
  return {
    title: `${s.title} · Wasatch Front, Utah`,
    description: s.blurb,
    keywords: s.keywords,
    alternates: { canonical: `${BRAND.url}/services/${s.slug}` },
    openGraph: {
      title: `${s.title} | ${BRAND.name}`,
      description: s.blurb,
      url: `${BRAND.url}/services/${s.slug}`,
    },
  };
}

export default function ServicePage({ params }: Props) {
  const s = serviceBySlug(params.slug);
  if (!s) notFound();
  const index = services.findIndex((x) => x.slug === s.slug);
  const others = services.filter((x) => x.slug !== s.slug);

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: BRAND.url },
            { '@type': 'ListItem', position: 2, name: 'Services', item: `${BRAND.url}/services` },
            { '@type': 'ListItem', position: 3, name: s.title, item: `${BRAND.url}/services/${s.slug}` },
          ],
        }}
      />
      {s.faqs.length > 0 && <JsonLd data={faqSchema(s.faqs)} />}

      {/* HERO */}
      <section className="relative bg-basalt-950 text-slab-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark bg-grid" aria-hidden />
        <div className="relative container-apex pt-14 pb-20 md:pt-20 md:pb-28 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <nav aria-label="Breadcrumb" className="text-[11px] uppercase tracking-[0.2em] text-basalt-400 mb-8 flex gap-2">
              <Link href="/" className="hover:text-slab-50">Home</Link><span>/</span>
              <Link href="/services" className="hover:text-slab-50">Services</Link><span>/</span>
              <span className="text-flag-400">{s.shortTitle}</span>
            </nav>
            <div className="text-[11px] tracking-[0.3em] text-flag-400 font-semibold mb-4">{String(index + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}</div>
            <h1 className="h-display text-6xl md:text-8xl">{s.title}</h1>
            <p className="mt-8 text-basalt-300 text-lg leading-relaxed max-w-2xl">{s.blurb}</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link href={`/estimate?service=${s.slug}`} className="btn-primary">Get an estimate</Link>
              <a href={smsHref} className="btn-ghost-light">Text a photo</a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <ServiceDiagram slug={s.slug} index={index} className="shadow-slab" />
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="container-apex py-20 md:py-28 grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-7 space-y-10">
          <div className="space-y-5 text-lg text-basalt-700 leading-relaxed">
            <p className="text-2xl text-basalt-950 font-medium leading-snug">{s.detail}</p>
            <p>{s.method}</p>
          </div>
          <div>
            <div className="tag text-flag-600 mb-4">What’s included</div>
            <ul className="grid sm:grid-cols-2 gap-px bg-basalt-200 border border-basalt-200">
              {s.items.map((item) => (
                <li key={item} className="bg-slab-50 px-5 py-4 text-[15px] text-basalt-800 flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-flag-500" />{item}
                </li>
              ))}
            </ul>
          </div>
          {s.faqs.length > 0 && (
            <div>
              <div className="tag text-flag-600 mb-4">{s.shortTitle} questions</div>
              <FaqList items={s.faqs} />
            </div>
          )}
        </div>

        {/* spec ticket */}
        <aside className="lg:col-span-5">
          <div className="lg:sticky lg:top-32 space-y-6">
            <div className="relative bg-slab-100 border border-basalt-200 shadow-card">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-chevrons" aria-hidden />
              <div className="px-6 pt-7 pb-6">
                <div className="tag mb-5">Spec ticket · {s.shortTitle}</div>
                <dl className="divide-y divide-basalt-200">
                  {s.specs.map((row) => (
                    <div key={row.k} className="flex items-baseline justify-between gap-4 py-2.5 text-sm">
                      <dt className="text-basalt-500 uppercase tracking-[0.12em] text-[11px] font-semibold">{row.k}</dt>
                      <dd className="font-semibold text-right">{row.v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-5 text-[11px] uppercase tracking-[0.18em] text-basalt-500">Fig. {String(index + 1).padStart(2, '0')} — {figureTitles[s.slug]}</p>
              </div>
            </div>
            <div className="bg-basalt-950 text-slab-50 p-6">
              <div className="tag text-basalt-400 mb-2">Talk to the crew</div>
              <a href={telHref} className="h-display text-3xl hover:text-flag-400 transition-colors tabular-nums">{BRAND.phone}</a>
              <p className="text-basalt-300 text-sm mt-3 leading-relaxed">{BRAND.hours}. Serving {BRAND.address.serviceArea.slice(0, 3).join(', ')} and the rest of the Wasatch Front.</p>
            </div>
          </div>
        </aside>
      </section>

      {/* OTHER SERVICES */}
      <section className="bg-slab-100 border-t border-basalt-200">
        <div className="container-apex py-16 md:py-20">
          <div className="flex items-end justify-between gap-6 mb-8">
            <h2 className="h-display text-4xl text-basalt-950">Other services</h2>
            <Link href="/services" className="text-sm font-semibold uppercase tracking-[0.1em] text-basalt-600 hover:text-flag-600">All services →</Link>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-basalt-200 border border-basalt-200">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/services/${o.slug}`} className="group block bg-slab-50 p-6 h-full hover:bg-basalt-950 hover:text-slab-50 transition-colors">
                  <div className="h-display text-2xl mb-2">{o.title}</div>
                  <p className="text-sm text-basalt-500 group-hover:text-basalt-300 leading-relaxed">{o.blurb}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
