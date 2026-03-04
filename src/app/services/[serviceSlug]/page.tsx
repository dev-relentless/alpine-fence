import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getServiceBySlug, services } from '@/data/services';
import { COMPANY } from '@/data/cities';
import QuoteForm from '@/components/QuoteForm';
import SchemaMarkup from '@/components/SchemaMarkup';

interface ServicePageProps {
  params: { serviceSlug: string };
}

export async function generateStaticParams() {
  return services.map((s) => ({ serviceSlug: s.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.serviceSlug);
  if (!service) return {};
  const titlePrefix = service.isCompozen ? `${service.title} | Composite` : service.title;
  return {
    title: `${titlePrefix} | Utah's Composite Fence & Deck Contractor`,
    description: `${service.heroDescription} Serving 94 Utah cities. Free composite fence and deck estimates. (801) 471-3148`,
    openGraph: {
      title: `${service.title} | Alpine Fence & Deck`,
      description: service.heroDescription,
      url: `https://alpinefenceanddeck.com/services/${params.serviceSlug}`,
    },
    alternates: {
      canonical: `https://alpinefenceanddeck.com/services/${params.serviceSlug}`,
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.serviceSlug);
  if (!service) notFound();

  return (
    <>
      <SchemaMarkup pageType="service" service={service.title} />

      {/* Hero */}
      <section className={service.isCompozen ? 'bg-gradient-to-br from-stone-900 via-alpine-950 to-stone-900 text-white' : 'bg-hero-gradient text-white'}>
        <div className="section-container py-16 lg:py-24">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              {service.isCompozen && <span className="badge-compozen mb-6">Exclusive Compozen® Technology</span>}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-6">
                {service.title}
              </h1>
              <p className="text-lg text-stone-200 mb-8 leading-relaxed">
                {service.heroDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link href={service.ctaHref} className={service.isCompozen ? 'btn-compozen' : 'btn-compozen'}>
                  {service.ctaText}
                </Link>
                <a href={COMPANY.phoneHref} className="btn-secondary border-white/30 text-white hover:bg-white/10">
                  Call {COMPANY.phone}
                </a>
              </div>
              <p className="text-sm text-stone-400">
                Typical project: <strong className="text-stone-200">{service.priceRange}</strong>
              </p>
            </div>
            <div className="lg:col-span-2">
              <QuoteForm variant="sidebar" defaultService={service.id} />
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-heading font-bold text-alpine-900 mb-8">What&apos;s Included</h2>
              <div className="space-y-4">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${service.isCompozen ? 'bg-compozen-100 text-compozen-700' : 'bg-alpine-100 text-alpine-700'}`}>
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-stone-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-heading font-bold text-alpine-900 mb-8">Key Benefits</h2>
              <div className="space-y-4">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-compozen-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-stone-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compozen upgrade section for non-Compozen services */}
      {!service.isCompozen && (
        <section className="section-padding bg-gradient-to-br from-stone-900 to-alpine-950 text-white">
          <div className="section-container text-center max-w-3xl mx-auto">
            <span className="badge-compozen mb-6">Permanent Composite Solution</span>
            <h2 className="text-3xl font-heading font-bold mb-6">
              Ready for a Permanent Composite Fix?
            </h2>
            <p className="text-stone-300 text-lg mb-8">
              {service.id === 'deck-refinishing'
                ? 'Tired of refinishing every 2-3 years? Compozen® composite materials deliver the same beautiful wood look with zero lifetime maintenance. Upgrade to composite today.'
                : 'Instead of repeated repairs, upgrade to Compozen® composite that won\'t rot, warp, or need repairs again. One composite investment, lifetime beauty.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services/compozen-fence-installation" className="btn-compozen">
                Explore Compozen® Fences
              </Link>
              <Link href="/services/compozen-deck-installation" className="btn-secondary border-stone-600 text-stone-200">
                Explore Compozen® Decks
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      <section className="section-padding bg-alpine-50">
        <div className="section-container">
          <h2 className="text-3xl font-heading font-bold text-alpine-900 mb-12 text-center">
            Our {service.shortTitle} Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Request Quote', description: 'Fill out our form or call for a same-day estimate.' },
              { step: '2', title: 'On-Site Assessment', description: 'Our expert visits your property for a detailed evaluation.' },
              { step: '3', title: 'Detailed Proposal', description: 'Receive a transparent quote with timeline and options.' },
              { step: '4', title: service.isCompozen ? 'Installation' : 'Service Complete', description: service.isCompozen ? 'Professional installation with quality inspections.' : 'Expert service with quality inspection and cleanup.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-alpine-700 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-heading font-bold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-sm text-stone-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <h2 className="text-3xl font-heading font-bold text-alpine-900 mb-12 text-center">
            Explore Our Other Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.filter(s => s.id !== service.id).map((s) => (
              <Link key={s.id} href={`/services/${s.slug}`} className="card group p-6">
                <h3 className="font-heading font-bold text-stone-900 group-hover:text-alpine-700 transition-colors mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-stone-600 mb-3">{s.description.slice(0, 100)}...</p>
                <span className="text-sm text-alpine-600 font-medium">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-alpine-900">
        <div className="section-container max-w-4xl mx-auto">
          <QuoteForm defaultService={service.id} />
        </div>
      </section>
    </>
  );
}
