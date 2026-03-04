import { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Composite Fence & Deck Services | Refinishing, Repair & Compozen® Installation',
  description: 'Complete composite fence and deck services in Utah: refinishing, repair, and exclusive Compozen® composite installations across 94 cities. Free estimates for all composite projects.',
  openGraph: {
    title: 'Composite Fence & Deck Services | Alpine Fence & Deck',
    description: 'Utah\'s full-service composite fence and deck contractor. Refinishing, repair & Compozen® composite installations.',
    url: 'https://alpinefenceanddeck.com/services',
  },
  alternates: {
    canonical: 'https://alpinefenceanddeck.com/services',
  },
};

export default function ServicesIndex() {
  return (
    <>
      <section className="bg-hero-gradient text-white">
        <div className="section-container py-16 lg:py-20">
          <div className="max-w-3xl">
            <span className="badge-compozen mb-6">Full-Service Solutions</span>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Our Composite Fence & Deck Services
            </h1>
            <p className="text-lg text-stone-200 leading-relaxed">
              From expert refinishing to revolutionary Compozen® composite fence and deck installations — 
              we deliver complete composite outdoor living solutions backed by 15+ years of experience.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="space-y-8">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className={`block ${service.isCompozen ? 'card-compozen' : 'card'} group`}
              >
                <div className="p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h2 className="text-2xl font-heading font-bold text-stone-900 group-hover:text-alpine-700 transition-colors">
                          {service.title}
                        </h2>
                        {service.isCompozen && <span className="badge-compozen">Compozen®</span>}
                      </div>
                      <p className="text-stone-600 mb-4">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.slice(0, 3).map((f) => (
                          <span key={f} className="text-xs bg-stone-100 text-stone-700 px-3 py-1 rounded-full">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="lg:text-right shrink-0">
                      <div className="text-lg font-bold text-alpine-700 mb-2">{service.priceRange}</div>
                      <span className="btn-primary !py-2.5 !px-5 !text-sm">
                        {service.ctaText} →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
