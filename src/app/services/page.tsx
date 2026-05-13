import { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/data/services';
import { COMPANY } from '@/data/cities';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Fence & Deck Services | Installation, Repair, Staining & Refinishing',
  description: 'Complete fence and deck services in Utah: installation, repair, staining, and refinishing across 94 cities. Wood, vinyl, iron, aluminum, composite & more. Free estimates.',
  openGraph: {
    title: 'Fence & Deck Services | Alpine Fence & Deck',
    description: 'Utah\'s full-service fence and deck contractor. Installation, repair, staining, and refinishing in every major material.',
    url: 'https://alpinefenceanddeck.com/services',
  },
  alternates: {
    canonical: 'https://alpinefenceanddeck.com/services',
  },
};

export default function ServicesIndex() {
  return (
    <>
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Services' },
      ]} />

      <section className="bg-hero-gradient text-white">
        <div className="section-container py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-compoxen-300 mb-5">
              Full-Service Fence &amp; Deck
            </span>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6 tracking-tight leading-[1.05]">
              Our Services. <span className="italic font-light text-compoxen-300">Built to Last.</span>
            </h1>
            <p className="text-lg text-stone-200/90 leading-relaxed">
              Installation, staining, refinishing, and repair — in every major fencing and decking
              material. {COMPANY.yearsExperience}+ years of trusted craftsmanship across Utah&apos;s Wasatch Front.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className={`group relative flex flex-col justify-between p-8 lg:p-10 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  service.isCompoxen
                    ? 'bg-gradient-to-br from-compoxen-50/60 to-white border-compoxen-200'
                    : 'bg-white border-stone-200 hover:border-alpine-300'
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <h2 className="text-2xl font-heading font-bold text-stone-900 group-hover:text-alpine-700 transition-colors tracking-tight">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-stone-600 leading-relaxed mb-5">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.slice(0, 3).map((f) => (
                      <span key={f} className="text-xs bg-stone-100 text-stone-700 px-3 py-1 rounded-full">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                  <span className="text-sm font-semibold text-alpine-700">{service.priceRange}</span>
                  <span className="text-sm font-semibold text-alpine-700 group-hover:translate-x-1 transition-transform">
                    {service.ctaText} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
