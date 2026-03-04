import Link from 'next/link';
import { Metadata } from 'next';
import { COMPANY } from '@/data/cities';
import { services } from '@/data/services';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Utah\'s #1 Composite Fence & Deck Contractor | Compozen® Certified | Alpine Fence & Deck',
  description: 'Utah\'s premier composite fence and deck contractor. Expert refinishing, repair, and exclusive Compozen® composite installations across 94 cities. 25-year warranty. Free estimates. (801) 471-3148',
  openGraph: {
    title: 'Alpine Fence & Deck | Utah\'s #1 Composite Fence & Deck Contractor',
    description: 'Composite fence and deck installations, refinishing & repair across 94 Utah cities. Compozen® certified. 25-year warranty. Free estimates.',
    url: 'https://alpinefenceanddeck.com',
  },
  alternates: {
    canonical: 'https://alpinefenceanddeck.com',
  },
};

export default function HomePage() {
  return (
    <>
      <SchemaMarkup pageType="home" />
      {/* ───── HERO ───── */}
      <section className="relative bg-hero-gradient text-white overflow-hidden">
        {/* decorative */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-compozen-400 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-mountain-400 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="section-container relative z-10 py-24 lg:py-36">
          <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 text-balance">
                Utah&apos;s Premier Composite Fence & Deck{' '}
                <span className="text-compozen-400">Experts</span>
              </h1>
              <p className="text-lg lg:text-xl text-stone-200 mb-10 leading-relaxed max-w-2xl mx-auto">
                From expert refinishing to revolutionary <strong className="text-compozen-300">Compozen® composite</strong> installations —
                we deliver stunning outdoor living spaces across {COMPANY.serviceArea}. {COMPANY.yearsExperience}+ years of trusted craftsmanship.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <Link href="/quote" className="btn-compozen text-lg">
                  Request a Free Quote
                </Link>
                <Link href="/contact" className="btn-secondary border-white/30 text-white hover:bg-white/10 text-lg">
                  Contact Us
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-stone-300">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-compozen-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Same-Day Estimates
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-compozen-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Licensed & Insured
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-compozen-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  25-Year Warranty
                </span>
              </div>
          </div>
        </div>
      </section>

      {/* ───── TRUST BAR ───── */}
      <section className="bg-white border-b border-stone-100">
        <div className="section-container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: `${COMPANY.yearsExperience}+`, label: 'Years Experience' },
              { value: '94', label: 'Cities Served' },
              { value: `${COMPANY.googleRating}★`, label: 'Google Rating' },
              { value: '1,700+', label: 'Projects Completed' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-heading font-bold text-alpine-800">{stat.value}</div>
                <div className="text-sm text-stone-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── SERVICE CARDS ───── */}
      <section className="section-padding bg-trust-gradient">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-alpine-900 mb-4">
              Complete Composite Fence & Deck Solutions
            </h2>
            <p className="text-lg text-stone-600">
              From quick refinishing to revolutionary Compozen® composite fence and deck installations — 
              we have the right composite solution for every outdoor living project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className={service.isCompozen ? 'card-compozen group' : 'card group'}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      service.isCompozen ? 'bg-compozen-100 text-compozen-700' : 'bg-alpine-100 text-alpine-700'
                    }`}>
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        {service.icon === 'Paintbrush' && <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />}
                        {service.icon === 'Wrench' && <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />}
                        {service.icon === 'Shield' && <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />}
                        {service.icon === 'Home' && <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />}
                      </svg>
                    </div>
                    {service.isCompozen && (
                      <span className="badge-compozen">Compozen®</span>
                    )}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-stone-900 mb-2 group-hover:text-alpine-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-stone-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-alpine-700">{service.priceRange}</span>
                    <span className="text-sm text-alpine-600 font-medium group-hover:translate-x-1 transition-transform">
                      Learn More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>



      {/* ───── WHY CHOOSE US ───── */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-alpine-900 mb-4">
              Why Utah Homeowners Choose Alpine for Composite
            </h2>
            <p className="text-lg text-stone-600">
              We&apos;re not just contractors — we&apos;re Utah&apos;s trusted composite fence and deck experts 
              backed by {COMPANY.yearsExperience}+ years of craftsmanship.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: `${COMPANY.yearsExperience}+ Years Experience`,
                description: 'Decades of refinishing and installation expertise across Utah\'s unique climate conditions.',
                icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
              },
              {
                title: 'Exclusive Compozen® Composite Access',
                description: 'As a certified composite installer, we offer composite materials and designs unavailable from other contractors.',
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
              },
              {
                title: 'Quality Guarantee',
                description: 'We stand behind every project with our satisfaction guarantee and industry-leading warranties.',
                icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
              },
              {
                title: 'Same-Day Estimates',
                description: 'Request a quote and get a detailed estimate the same day. No waiting, no hassle.',
                icon: 'M13 10V3L4 14h7v7l9-11h-7z',
              },
              {
                title: '2-Hour Callback',
                description: 'For repair emergencies, we guarantee a callback within 2 hours during business hours.',
                icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
              },
              {
                title: '25-Year Composite Warranty',
                description: 'Compozen® composite installations come with a 25-year composite material warranty and our workmanship guarantee.',
                icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="w-14 h-14 bg-alpine-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-alpine-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-heading font-bold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── TESTIMONIALS ───── */}
      <section className="section-padding bg-alpine-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-alpine-900 mb-4">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} className="w-6 h-6 text-compozen-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-stone-600">{COMPANY.googleRating}/5 stars on Google</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Cynthia Dunford',
                location: 'Utah',
                text: 'Very professional! First, they repaired my fence and then I had them stain the entire fence. The owner, Chandler, kept me informed every step of the way. The end product was excellent!',
                service: 'Fence Repair & Staining',
              },
              {
                name: 'Scott Poppen',
                location: 'Utah',
                text: 'They repaired, stained, and sealed a 28-year-old fence, making it look like new. They also replaced an old worn-out gate. The crew were very professional and personable.',
                service: 'Fence Staining & Gate Repair',
              },
              {
                name: 'Morgan Busch',
                location: 'Utah',
                text: 'Great communication all around! They power washed the fence and the staining looks gorgeous! Love the way it turned out. Would highly recommend Alpine Fence and Deck!',
                service: 'Power Wash & Staining',
              },
            ].map((testimonial) => (
              <div key={testimonial.name} className="card p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-4 h-4 text-compozen-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-stone-900 text-sm">{testimonial.name}</p>
                    <p className="text-xs text-stone-500">{testimonial.location}</p>
                  </div>
                  <span className="text-xs font-medium text-alpine-700 bg-alpine-50 px-2 py-1 rounded">{testimonial.service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── UPGRADE PATH ───── */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-alpine-900 mb-4">
              The Smart Composite Upgrade Path
            </h2>
            <p className="text-lg text-stone-600">
              Every refinishing job reveals an opportunity. See why homeowners who start with refinishing 
              end up choosing Compozen® composite for their permanent solution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Refinish & Assess',
                description: 'We restore your current fence or deck while expertly assessing its condition and remaining lifespan.',
                detail: 'Avg. project: $2,000',
              },
              {
                step: '2',
                title: 'Design & Compare',
                description: 'Compare your options with our cost calculator. See the 10-year cost comparison side by side.',
                detail: 'Free design consultation',
              },
              {
                step: '3',
                title: 'Transform Forever',
                description: 'Upgrade to Compozen® when you\'re ready. Zero maintenance, 25-year warranty, stunning results.',
                detail: 'Avg. project: $25,000',
              },
            ].map((step) => (
              <div key={step.step} className="relative p-8 rounded-2xl border-2 border-stone-100 hover:border-alpine-200 transition-colors">
                <div className="w-10 h-10 bg-alpine-700 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-heading font-bold text-stone-900 mb-2">{step.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">{step.description}</p>
                <span className="text-xs font-medium text-alpine-700 bg-alpine-50 px-3 py-1 rounded-full">
                  {step.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── COST COMPARISON TEASER ───── */}
      <section className="bg-alpine-50 section-padding">
        <div className="section-container">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-alpine-900 mb-4">
                10-Year Cost: Refinishing vs. Compozen® Composite
              </h2>
              <p className="text-stone-600 mb-6">
                The numbers speak for themselves. Repeated refinishing costs add up, while a single 
                Compozen® composite installation pays for itself and adds lasting property value.
              </p>
              <Link href="/calculator" className="btn-primary">
                Use Our Cost Calculator →
              </Link>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-stone-700">10 Years of Refinishing</span>
                  <span className="font-bold text-red-600">$12,000 – $20,000</span>
                </div>
                <div className="w-full bg-stone-200 rounded-full h-4">
                  <div className="bg-red-400 h-4 rounded-full" style={{ width: '80%' }} />
                </div>
                <p className="text-xs text-stone-500 mt-1">Every 2-3 years × declining returns</p>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-stone-700">One Compozen® Composite Installation</span>
                  <span className="font-bold text-alpine-700">$15,000 – $35,000</span>
                </div>
                <div className="w-full bg-stone-200 rounded-full h-4">
                  <div className="bg-compozen-500 h-4 rounded-full" style={{ width: '55%' }} />
                </div>
                <p className="text-xs text-stone-500 mt-1">One-time composite investment + $0 maintenance forever</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── SERVICE AREA MAP TEASER ───── */}
      <section className="section-padding bg-white">
        <div className="section-container text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-alpine-900 mb-4">
            Serving 94 Cities Across Utah&apos;s Wasatch Front
          </h2>
          <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
            From Ogden to Payson, Park City to Tooele — we bring expert refinishing and exclusive 
            Compozen® composite fence and deck installations to your city.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['Salt Lake City', 'Provo', 'Orem', 'Sandy', 'South Jordan', 'Layton', 'Draper', 'Park City'].map((city) => (
              <Link
                key={city}
                href={`/${city.toLowerCase().replace(/ /g, '-')}-fence-deck-contractor`}
                className="px-4 py-2 bg-alpine-50 text-alpine-700 rounded-full text-sm font-medium hover:bg-alpine-100 transition-colors"
              >
                {city}
              </Link>
            ))}
          </div>
          <Link href="/service-areas" className="btn-secondary">
            View All Service Areas →
          </Link>
        </div>
      </section>

    </>
  );
}
