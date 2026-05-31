import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getLandscapeServiceBySlug, landscapeServices } from '@/data/services';
import { getLandscapeGalleryForSlug } from '@/data/landscapeGallery';
import { COMPANY } from '@/data/cities';
import QuoteForm from '@/components/QuoteForm';
import SchemaMarkup, { generateFAQSchema } from '@/components/SchemaMarkup';
import Breadcrumbs from '@/components/Breadcrumbs';
import BundleCTA from '@/components/BundleCTA';
import PhotoStub from '@/components/PhotoStub';
import IncludedValueStack from '@/components/IncludedValueStack';

interface LandscapeServicePageProps {
  params: { serviceSlug: string };
}

export async function generateStaticParams() {
  return landscapeServices.map((s) => ({ serviceSlug: s.slug }));
}

export async function generateMetadata({ params }: LandscapeServicePageProps): Promise<Metadata> {
  const service = getLandscapeServiceBySlug(params.serviceSlug);
  if (!service) return {};
  return {
    title: `${service.title} | Utah Yard & Landscape`,
    description: `${service.heroDescription} Serving 94 Utah cities. Free same-day estimates. ${COMPANY.phone}`,
    openGraph: {
      title: `${service.title} | Alpine Fence & Deck`,
      description: service.heroDescription,
      url: `https://alpinefenceanddeck.com/landscaping/${params.serviceSlug}`,
    },
    alternates: {
      canonical: `https://alpinefenceanddeck.com/landscaping/${params.serviceSlug}`,
    },
  };
}

export default function LandscapeServicePage({ params }: LandscapeServicePageProps) {
  const service = getLandscapeServiceBySlug(params.serviceSlug);
  if (!service) notFound();
  const gallery = getLandscapeGalleryForSlug(params.serviceSlug);

  return (
    <>
      <SchemaMarkup
        pageType="service"
        serviceData={{
          name: service.title,
          description: service.heroDescription,
          slug: service.slug,
          division: 'yard-landscape',
          priceRange: service.priceRange,
        }}
        breadcrumbs={[
          { name: 'Home', url: 'https://alpinefenceanddeck.com' },
          { name: 'Yard & Landscape', url: 'https://alpinefenceanddeck.com/landscaping' },
          { name: service.title, url: `https://alpinefenceanddeck.com/landscaping/${params.serviceSlug}` },
        ]}
      />

      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Yard & Landscape', href: '/landscaping' },
        { label: service.title },
      ]} />

      {/* Hero */}
      <section className="bg-forest-hero text-white">
        <div className="section-container py-16 lg:py-24">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-bronze-300 mb-4">
                Yard &amp; Landscape Service
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-6 tracking-tight">
                {service.title}
              </h1>
              <p className="text-lg text-stone-200 mb-8 leading-relaxed">
                {service.heroDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link href={service.ctaHref} className="btn-primary">
                  {service.ctaText}
                </Link>
                <a href={COMPANY.phoneHref} className="btn-secondary border-white/30 text-white hover:bg-white/10">
                  Call {COMPANY.phone}
                </a>
              </div>
              <p className="text-sm text-bronze-200/80 uppercase tracking-[0.18em]">
                Free on-site consult · Same-week scheduling
              </p>
            </div>
            <div className="lg:col-span-2">
              <QuoteForm variant="sidebar" division="yard-landscape" />
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
                    <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-alpine-100 text-alpine-700">
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
                    <svg className="w-5 h-5 text-compoxen-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
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

      {/* Bundle / cross-sell to fence-deck */}
      <BundleCTA variant="to-fence-deck" />

      {/* Premium included value stack */}
      <IncludedValueStack variant="landscape" background="white" />

      {/* Project Gallery */}
      {gallery && gallery.slots.length > 0 && (
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-forest-700 mb-3">
                Project Gallery
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-stone-900 mb-4 tracking-tight">
                {service.shortTitle} <span className="italic font-light text-forest-700">in the Field.</span>
              </h2>
              <p className="text-lg text-stone-600">
                Real projects, real Utah yards — from the same crews that have built 1,700+ Alpine fences and decks.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {gallery.slots.map((slot) => (
                <PhotoStub
                  key={slot.file}
                  src={`/images/landscaping/gallery/${slot.file}`}
                  alt={slot.alt ?? slot.label}
                  label={slot.label}
                  aspect="4/3"
                />
              ))}
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
              { step: '2', title: 'On-Site Walk', description: 'Crew lead visits, measures, and assesses your yard in person.' },
              { step: '3', title: 'Detailed Proposal', description: 'Transparent line-item quote, timeline, and bundle options.' },
              { step: '4', title: 'Build & Finish', description: 'Same crew that fences 1,700+ Utah yards installs your project.' },
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

      {/* Other landscape services */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <h2 className="text-3xl font-heading font-bold text-alpine-900 mb-12 text-center">
            Other Yard &amp; Landscape Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {landscapeServices.filter((s) => s.id !== service.id).map((s) => (
              <Link key={s.id} href={`/landscaping/${s.slug}`} className="card group p-6">
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

      {/* FAQ */}
      {service.faqs.length > 0 && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(service.faqs)) }}
          />
          <section className="section-padding bg-white border-t border-stone-100">
            <div className="section-container max-w-3xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-alpine-900 mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {service.faqs.map((faq, i) => (
                  <div key={i} className="border border-stone-200 rounded-xl p-6">
                    <h3 className="text-lg font-heading font-bold text-stone-900 mb-2">{faq.question}</h3>
                    <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* CTA */}
      <section className="section-padding bg-alpine-900">
        <div className="section-container max-w-4xl mx-auto">
          <QuoteForm division="yard-landscape" />
        </div>
      </section>
    </>
  );
}
