import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { COMPANY } from '@/data/cities';
import { fenceTypes, getFenceTypeBySlug } from '@/data/fenceTypes';
import Breadcrumbs from '@/components/Breadcrumbs';
import SchemaMarkup, { generateFAQSchema, generateServiceSchema } from '@/components/SchemaMarkup';

interface PageProps {
  params: { type: string };
}

export async function generateStaticParams() {
  return fenceTypes.map((f) => ({ type: f.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const fence = getFenceTypeBySlug(params.type);
  if (!fence) return {};
  return {
    title: fence.metaTitle,
    description: fence.metaDescription,
    openGraph: {
      title: `${fence.name} in Utah | Alpine Fence & Deck`,
      description: fence.metaDescription,
      url: `https://alpinefenceanddeck.com/fences/${fence.slug}`,
      images: [{ url: fence.image }],
    },
    alternates: {
      canonical: `https://alpinefenceanddeck.com/fences/${fence.slug}`,
    },
  };
}

export default function FenceTypePage({ params }: PageProps) {
  const fence = getFenceTypeBySlug(params.type);
  if (!fence) notFound();

  const related = fenceTypes.filter((f) => f.slug !== fence.slug).slice(0, 4);
  const faqSchema = generateFAQSchema(fence.faqs.map((f) => ({ question: f.q, answer: f.a })));
  const serviceSchema = generateServiceSchema(
    `${fence.name} Installation in Utah`,
    fence.metaDescription,
    fence.priceRange,
  );

  return (
    <>
      <SchemaMarkup
        pageType="service"
        breadcrumbs={[
          { name: 'Home', url: 'https://alpinefenceanddeck.com' },
          { name: 'What We Build', url: 'https://alpinefenceanddeck.com/#fence-types' },
          { name: fence.name, url: `https://alpinefenceanddeck.com/fences/${fence.slug}` },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'What We Build', href: '/#fence-types' },
          { label: fence.name, href: `/fences/${fence.slug}` },
        ]}
      />

      {/* ───── HERO ───── */}
      <section className="relative text-white overflow-hidden">
        <Image
          src={fence.image}
          alt={`${fence.name} installed by Alpine Fence & Deck in Utah`}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mountain-900/85 via-mountain-900/60 to-mountain-900/40 z-[1]" />

        <div className="section-container relative z-10 py-20 lg:py-32">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-compoxen-300 mb-4">
              {fence.category} · Utah
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-5 tracking-tight leading-[1.05]">
              {fence.name} <span className="italic font-light text-compoxen-300">in Utah.</span>
            </h1>
            <p className="text-lg lg:text-xl text-stone-200/90 leading-relaxed mb-8 max-w-2xl">
              {fence.intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={`/quote?service=${fence.slug}`} className="btn-primary text-lg">
                Get a Free {fence.name} Estimate
              </Link>
              <a href={COMPANY.phoneHref} className="btn-secondary border-white/40 text-white hover:bg-white/10 text-lg">
                Call {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ───── AT A GLANCE ───── */}
      <section className="bg-white border-b border-stone-100">
        <div className="section-container py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Typical Price', value: fence.priceRange },
              { label: 'Lifespan', value: fence.lifespan },
              { label: 'Maintenance', value: fence.maintenance },
              { label: 'Service Area', value: '94 Utah Cities' },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400 mb-2">
                  {item.label}
                </div>
                <div className="text-base lg:text-lg font-heading font-semibold text-stone-900 leading-snug">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── BEST FOR + FEATURES ───── */}
      <section className="section-padding bg-white">
        <div className="section-container grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-alpine-700 mb-3">
              Best For
            </span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-stone-900 tracking-tight mb-6">
              Is {fence.name} <span className="italic font-light text-alpine-700">right for you?</span>
            </h2>
            <ul className="space-y-3">
              {fence.bestFor.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-alpine-600 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-stone-700 text-lg">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-stone-50 rounded-2xl p-8 lg:p-10 border border-stone-200">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-alpine-700 mb-3">
              What You Get
            </span>
            <h3 className="text-2xl font-heading font-bold text-stone-900 tracking-tight mb-5">
              Built the Right Way.
            </h3>
            <ul className="space-y-3">
              {fence.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-alpine-600 mt-2.5 shrink-0" />
                  <span className="text-stone-700">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───── FAQ ───── */}
      <section className="section-padding bg-stone-50">
        <div className="section-container max-w-4xl">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-alpine-700 mb-3">
              Common Questions
            </span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-stone-900 tracking-tight">
              {fence.name} <span className="italic font-light text-alpine-700">FAQ.</span>
            </h2>
          </div>
          <div className="divide-y divide-stone-200 border-y border-stone-200 bg-white rounded-2xl overflow-hidden">
            {fence.faqs.map((item) => (
              <details key={item.q} className="group p-6 lg:p-7">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg lg:text-xl font-heading font-semibold text-stone-900 tracking-tight pr-6">
                    {item.q}
                  </h3>
                  <span className="shrink-0 w-8 h-8 rounded-full bg-alpine-50 text-alpine-700 flex items-center justify-center transition-transform duration-300 group-open:rotate-45">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-stone-600 leading-relaxed pr-12">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ───── RELATED ───── */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-alpine-700 mb-3">
              Also Explore
            </span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-stone-900 tracking-tight">
              Other Materials We Build.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((f) => (
              <Link
                key={f.slug}
                href={f.href}
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-stone-900 shadow-md hover:shadow-2xl transition-all duration-500"
              >
                <Image
                  src={f.image}
                  alt={`${f.name} installed by Alpine Fence & Deck`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="text-lg font-heading font-bold tracking-tight">{f.name}</h3>
                  <p className="text-sm text-stone-200/90 mt-1 leading-snug">{f.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───── FINAL CTA ───── */}
      <section className="bg-alpine-900 text-white">
        <div className="section-container py-16 lg:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 tracking-tight text-balance">
            Ready for {fence.name.toLowerCase().includes('custom') ? 'something custom' : `your new ${fence.name.toLowerCase()}`}?
          </h2>
          <p className="text-lg text-stone-200/90 mb-8 max-w-xl mx-auto">
            Free, same-day estimates across {COMPANY.serviceArea}. No pressure, no gimmicks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/quote?service=${fence.slug}`} className="btn-primary text-lg">
              Request a Free Estimate
            </Link>
            <a href={COMPANY.phoneHref} className="btn-secondary border-white/40 text-white hover:bg-white/10 text-lg">
              Call {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
