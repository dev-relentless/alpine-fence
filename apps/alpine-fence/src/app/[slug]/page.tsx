import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllCities, getCityBySlug, COMPANY } from '@/data/cities';
import { 
  services } from '@/data/services';
import QuoteForm from '@/components/QuoteForm';
import SchemaMarkup from '@/components/SchemaMarkup';
import Breadcrumbs from '@/components/Breadcrumbs';

interface CityPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllCities().map((city) => ({
    slug: `${city.slug}-fence-deck-contractor`,
  }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const citySlug = params.slug.replace(/-fence-deck-contractor$/, '');
  const city = getCityBySlug(citySlug);
  if (!city) return {};

  const title = `${city.name} Fence & Deck Builder | Installation, Staining, Repair`;
  const description = `${city.name}'s trusted fence and deck builder. Wood, vinyl, composite, iron, aluminum and custom installations — plus staining, refinishing, and repair across ${city.county} County. Free same-day estimates. (801) 471-3148`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://alpinefenceanddeck.com/${params.slug}`,
    },
    alternates: {
      canonical: `https://alpinefenceanddeck.com/${params.slug}`,
    },
  };
}

export default function CityLandingPage({ params }: CityPageProps) {
  const citySlug = params.slug.replace(/-fence-deck-contractor$/, '');
  const city = getCityBySlug(citySlug);

  if (!city) notFound();

  const tierLabel = city.tier === 'tier1' ? 'Primary Service Area' : city.tier === 'tier2' ? 'Full Service Area' : 'Service Area';

  return (
    <>
      <SchemaMarkup pageType="city" city={city} breadcrumbs={[
        { name: 'Home', url: 'https://alpinefenceanddeck.com' },
        { name: 'Service Areas', url: 'https://alpinefenceanddeck.com/service-areas' },
        { name: city.name, url: `https://alpinefenceanddeck.com/${params.slug}` },
      ]} />

      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Service Areas', href: '/service-areas' },
        { label: city.name },
      ]} />

      {/* Hero */}
      <section className="bg-hero-gradient text-white">
        <div className="section-container py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-compoxen-300">
                  {city.name}, Utah
                </span>
                <span className="px-3 py-1 text-xs font-medium text-white/80 bg-white/10 rounded-full">
                  {tierLabel}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-[1.05] tracking-tight mb-6">
                {city.name} Fence &amp; Deck <span className="italic font-light text-compoxen-300">Builder.</span>
              </h1>
              <p className="text-lg text-stone-200/90 mb-6 leading-relaxed">
                {city.name}&apos;s trusted fence and deck team. Installation, staining, refinishing, and repair —
                in every major material — across {city.county} County.
              </p>
              <p className="text-stone-300 mb-8">
                Serving {city.name} and surrounding areas with {COMPANY.yearsExperience}+ years of experience.
                {city.population > 20000 ? ` Proudly serving ${city.name}'s ${city.population.toLocaleString()}+ residents.` : ''}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/quote" className="btn-primary">
                  Free {city.name} Estimate
                </Link>
                <a href={COMPANY.phoneHref} className="btn-secondary border-white/30 text-white hover:bg-white/10">
                  Call {COMPANY.phone}
                </a>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-stone-300">
                <span>✓ Same-Day Estimates</span>
                <span>✓ HOA Compliant</span>
                <span>✓ Licensed & Insured</span>
              </div>
            </div>

            <QuoteForm variant="compact" />
          </div>
        </div>
      </section>

      {/* Services for this city */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <h2 className="text-3xl font-heading font-bold text-alpine-900 mb-4 text-center tracking-tight">
            Our Services in {city.name}
          </h2>
          <p className="text-stone-600 text-center max-w-2xl mx-auto mb-12">
            Complete fence and deck solutions for {city.name} homeowners — from staining and repair to brand-new installations.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="card group"
              >
                <div className="p-6">
                  <h3 className="text-lg font-heading font-bold text-stone-900 group-hover:text-alpine-700 transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-stone-600 text-sm mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-alpine-700">{service.priceRange}</span>
                    <span className="text-sm text-alpine-600 font-medium">Learn More →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      {city.neighborhoodNames.length > 0 && (
        <section className="section-padding bg-alpine-50">
          <div className="section-container">
            <h2 className="text-3xl font-heading font-bold text-alpine-900 mb-4 text-center">
              {city.name} Neighborhoods We Serve
            </h2>
            <p className="text-stone-600 text-center max-w-2xl mx-auto mb-12">
              We know {city.name}&apos;s neighborhoods and their unique HOA requirements. 
              Select your area for neighborhood-specific information.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {city.neighborhoodNames.map((neighborhood, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-4 border border-stone-200 hover:border-alpine-300 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-stone-900">{neighborhood}</h3>
                  <p className="text-xs text-stone-500 mt-1">{city.name}, {city.county} County</p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-xs bg-alpine-50 text-alpine-700 px-2 py-0.5 rounded">Installation</span>
                    <span className="text-xs bg-alpine-50 text-alpine-700 px-2 py-0.5 rounded">Staining</span>
                    <span className="text-xs bg-alpine-50 text-alpine-700 px-2 py-0.5 rounded">Repair</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Editorial spotlight for city */}
      <section className="section-padding bg-gradient-to-br from-stone-900 to-alpine-950 text-white">
        <div className="section-container text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-compoxen-300">{city.county} County</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-6 tracking-tight">
            Built for {city.name}. <span className="italic font-light">Built to Last.</span>
          </h2>
          <p className="text-stone-300 text-lg mb-8 leading-relaxed">
            Every fence we install in {city.name} is engineered for Utah&apos;s climate — from the wind off the mountains
            to the freeze-thaw cycle. Setting the standard, one property at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="btn-primary">
              Get Free Estimate
            </Link>
            <Link href="/#fence-types" className="btn-secondary border-stone-600 text-stone-200 hover:bg-stone-800">
              Browse What We Build
            </Link>
          </div>
        </div>
      </section>

      {/* Local trust signals */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <h2 className="text-3xl font-heading font-bold text-alpine-900 mb-12 text-center">
            Trusted by {city.name} Homeowners
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-heading font-bold text-alpine-800 mb-2">{COMPANY.yearsExperience}+</div>
              <p className="text-stone-600">Years serving {city.county} County</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-heading font-bold text-alpine-800 mb-2">{COMPANY.googleRating}★</div>
              <p className="text-stone-600">Google rating</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-heading font-bold text-alpine-800 mb-2">100%</div>
              <p className="text-stone-600">HOA-compliant designs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section className="section-padding bg-alpine-900 text-white">
        <div className="section-container max-w-4xl mx-auto">
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
