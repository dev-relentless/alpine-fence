import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllCities, getCityBySlug, COMPANY } from '@/data/cities';
import { services } from '@/data/services';
import QuoteForm from '@/components/QuoteForm';
import SchemaMarkup from '@/components/SchemaMarkup';

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

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: `https://alpinefenceanddeck.com/${params.slug}`,
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
      <SchemaMarkup pageType="city" city={city} />

      {/* Hero */}
      <section className="bg-hero-gradient text-white">
        <div className="section-container py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="badge-compozen">Compozen® Certified</span>
                <span className="px-3 py-1 text-xs font-medium text-white/80 bg-white/10 rounded-full">
                  {tierLabel}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-6">
                {city.name} Fence & Deck Contractor
              </h1>
              <p className="text-lg text-stone-200 mb-6 leading-relaxed">
                {city.name}&apos;s trusted fence and deck experts. From professional refinishing and emergency repairs
                to exclusive <strong className="text-compozen-300">Compozen® composite installations</strong> —
                we transform outdoor living spaces across {city.county} County.
              </p>
              <p className="text-stone-300 mb-8">
                Serving {city.name} and surrounding areas with {COMPANY.yearsExperience}+ years of experience.
                {city.population > 20000 ? ` Proudly serving ${city.name}'s ${city.population.toLocaleString()}+ residents.` : ''}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/quote" className="btn-compozen">
                  Free {city.name} Estimate
                </Link>
                <a href={COMPANY.phoneHref} className="btn-secondary !border-white/30 !text-white hover:!bg-white/10">
                  Call {COMPANY.phone}
                </a>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-stone-300">
                <span>✓ Same-Day Estimates</span>
                <span>✓ HOA Compliant</span>
                <span>✓ Licensed & Insured</span>
              </div>
            </div>

            <QuoteForm variant="compact" defaultCity={city.name} />
          </div>
        </div>
      </section>

      {/* Services for this city */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <h2 className="text-3xl font-heading font-bold text-alpine-900 mb-4 text-center">
            Our Services in {city.name}
          </h2>
          <p className="text-stone-600 text-center max-w-2xl mx-auto mb-12">
            Complete fence and deck solutions for {city.name} homeowners — from quick refinishing to 
            revolutionary Compozen® composite transformations.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {services.filter(s => s.id !== 'hoa-compliance').map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className={service.isCompozen ? 'card-compozen group' : 'card group'}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-heading font-bold text-stone-900 group-hover:text-alpine-700 transition-colors">
                      {service.title}
                    </h3>
                    {service.isCompozen && <span className="badge-compozen text-[10px]">Compozen®</span>}
                  </div>
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
                    <span className="text-xs bg-alpine-50 text-alpine-700 px-2 py-0.5 rounded">Refinishing</span>
                    <span className="text-xs bg-alpine-50 text-alpine-700 px-2 py-0.5 rounded">Repair</span>
                    <span className="text-xs bg-compozen-50 text-compozen-700 px-2 py-0.5 rounded">Compozen®</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Compozen spotlight for city */}
      <section className="section-padding bg-gradient-to-br from-stone-900 to-alpine-950 text-white">
        <div className="section-container text-center max-w-3xl mx-auto">
          <span className="badge-compozen mb-6">Exclusive in {city.name}</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
            {city.name}&apos;s Only Compozen® Certified Installer
          </h2>
          <p className="text-stone-300 text-lg mb-8 leading-relaxed">
            As {city.county} County&apos;s exclusive Compozen® certified installer, 
            Alpine Fence & Deck offers revolutionary composite materials and designs 
            unavailable from any other {city.name} contractor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/design-studio" className="btn-compozen">
              Launch Design Studio
            </Link>
            <Link href="/calculator" className="btn-secondary !border-stone-600 !text-stone-200 hover:!bg-stone-800">
              Cost Calculator
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
              <div className="text-4xl font-heading font-bold text-alpine-800 mb-2">4.9★</div>
              <p className="text-stone-600">Average rating in {city.name}</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-heading font-bold text-alpine-800 mb-2">100%</div>
              <p className="text-stone-600">HOA approval rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section className="section-padding bg-alpine-900 text-white">
        <div className="section-container max-w-4xl mx-auto">
          <QuoteForm defaultCity={city.name} />
        </div>
      </section>
    </>
  );
}
