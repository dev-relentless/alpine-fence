import { Metadata } from 'next';
import Link from 'next/link';
import { getAllCities, COUNTIES, type CityData } from '@/data/cities';

export const metadata: Metadata = {
  title: 'Service Areas | 94 Cities Across Utah\'s Wasatch Front',
  description: 'Alpine Fence & Deck serves 94 cities across Weber, Davis, Salt Lake, Utah, and surrounding counties. Find your city for local fence & deck services.',
};

function groupByCounty(cities: CityData[]): Record<string, CityData[]> {
  const grouped: Record<string, CityData[]> = {};
  for (const city of cities) {
    if (!grouped[city.county]) grouped[city.county] = [];
    grouped[city.county].push(city);
  }
  // Sort each county's cities by population desc
  for (const county in grouped) {
    grouped[county].sort((a, b) => b.population - a.population);
  }
  return grouped;
}

export default function ServiceAreasPage() {
  const cities = getAllCities();
  const grouped = groupByCounty(cities);

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient text-white">
        <div className="section-container py-16 lg:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Our Service Areas
            </h1>
            <p className="text-lg text-stone-200 leading-relaxed">
              Alpine Fence & Deck proudly serves <strong>94 cities</strong> across Utah&apos;s Wasatch Front.
              From Ogden to Payson, Park City to Tooele — we bring expert refinishing and exclusive 
              Compozen® installations to your neighborhood.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-stone-200">
        <div className="section-container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-heading font-bold text-alpine-800">94</div>
              <div className="text-sm text-stone-500">Cities Served</div>
            </div>
            <div>
              <div className="text-3xl font-heading font-bold text-alpine-800">{COUNTIES.length}</div>
              <div className="text-sm text-stone-500">Counties</div>
            </div>
            <div>
              <div className="text-3xl font-heading font-bold text-alpine-800">2,500+</div>
              <div className="text-sm text-stone-500">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-heading font-bold text-alpine-800">4.9★</div>
              <div className="text-sm text-stone-500">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities by county */}
      <section className="section-padding bg-stone-50">
        <div className="section-container">
          {COUNTIES.map((county) => {
            const countyCities = grouped[county];
            if (!countyCities || countyCities.length === 0) return null;

            return (
              <div key={county} id={county.toLowerCase().replace(/ /g, '-')} className="mb-16 last:mb-0">
                <h2 className="text-2xl font-heading font-bold text-alpine-900 mb-2">
                  {county} County
                </h2>
                <p className="text-stone-600 mb-6">
                  {countyCities.length} cities served in {county} County
                </p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {countyCities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/${city.slug}-fence-deck-contractor`}
                      className="bg-white rounded-xl p-4 border border-stone-200 hover:border-alpine-300 hover:shadow-md transition-all group"
                    >
                      <h3 className="font-semibold text-stone-900 group-hover:text-alpine-700 transition-colors">
                        {city.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          city.tier === 'tier1' ? 'bg-alpine-100 text-alpine-700' :
                          city.tier === 'tier2' ? 'bg-mountain-100 text-mountain-700' :
                          city.tier === 'tier3' ? 'bg-cedar-100 text-cedar-700' :
                          'bg-stone-100 text-stone-600'
                        }`}>
                          {city.tier === 'tier1' ? 'Primary' : city.tier === 'tier2' ? 'Full Service' : city.tier === 'tier3' ? 'Service Area' : 'Available'}
                        </span>
                        {city.neighborhoodNames.length > 0 && (
                          <span className="text-xs text-stone-400">
                            {city.neighborhoodNames.length} neighborhoods
                          </span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-alpine-900 text-white text-center">
        <div className="section-container max-w-2xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-4">Don&apos;t See Your City?</h2>
          <p className="text-stone-300 mb-8">
            We may still serve your area. Contact us to check availability and schedule a free estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="btn-compozen">Get Free Estimate</Link>
            <a href="tel:+8015553325" className="btn-secondary !border-white/30 !text-white hover:!bg-white/10">
              Call (801) 555-DECK
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
