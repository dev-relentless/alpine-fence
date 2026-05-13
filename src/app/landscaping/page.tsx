import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { landscapeServices } from '@/data/services';
import { landscapePillarFeatured } from '@/data/landscapeGallery';
import { COMPANY } from '@/data/cities';
import QuoteForm from '@/components/QuoteForm';
import Breadcrumbs from '@/components/Breadcrumbs';
import BundleCTA from '@/components/BundleCTA';
import AnniversaryBadge from '@/components/AnniversaryBadge';
import PhotoStub from '@/components/PhotoStub';
import IncludedValueStack from '@/components/IncludedValueStack';

export const metadata: Metadata = {
  title: 'Yard & Landscape Services | Sod, Walls, Pavers & Sprinklers in Utah',
  description: `Yard and landscape services from Alpine Fence & Deck. Sod, retaining walls, paver patios, sprinklers, and landscape design across 94 Utah cities. Same crews, ${COMPANY.yearsExperience}+ years experience. Free estimates. ${COMPANY.phone}`,
  openGraph: {
    title: 'Yard & Landscape Services | Alpine Fence & Deck',
    description: 'Sod, retaining walls, paver patios, sprinkler systems, and landscape design across Utah\'s Wasatch Front.',
    url: 'https://alpinefenceanddeck.com/landscaping',
  },
  alternates: {
    canonical: 'https://alpinefenceanddeck.com/landscaping',
  },
};

export default function LandscapingIndex() {
  return (
    <>
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Yard & Landscape' },
      ]} />

      {/* Hero */}
      <section className="relative text-white overflow-hidden bg-forest-hero min-h-[560px] lg:min-h-[680px] flex items-center">
        <Image
          src="/images/landscaping/hero/landscaping-hero-bg.jpg"
          alt="Finished Utah backyard with sod, retaining wall, and fence by Alpine Fence & Deck"
          fill
          priority
          className="object-cover object-center opacity-80"
          sizes="100vw"
          quality={85}
        />

        {/* Decorative texture so the gradient doesn't look flat without a photo */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08] mix-blend-overlay z-[1]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 30%, #d8b771 0, transparent 45%), radial-gradient(circle at 80% 70%, #6a9981 0, transparent 50%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/40 via-transparent to-forest-950/60 z-[1]" />

        <div className="section-container relative z-10 py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-bronze-300 mb-5">
              Yard &amp; Landscape by Alpine
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-[1.05] tracking-tight mb-6 text-balance">
              The Whole Yard. <span className="italic font-light text-bronze-300">One Crew.</span>
            </h1>
            <p className="text-lg lg:text-xl text-stone-200/90 mb-8 leading-relaxed max-w-2xl">
              For {COMPANY.yearsExperience}+ years we&apos;ve defined the perimeter of Utah yards. We
              finish what&apos;s inside them too &mdash; sod, retaining walls, paver patios, sprinklers,
              and full landscape design from the same crews you already trust.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/quote?division=yard-landscape" className="btn-primary text-lg">
                Request a Free Estimate
              </Link>
              <Link href="#services" className="btn-secondary border-white/40 text-white hover:bg-white/10 text-lg">
                See What We Build
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-stone-300">
              {['Same Trusted Crews', 'One Warranty', `${COMPANY.yearsExperience}+ Years in Utah`].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-bronze-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust bridge — connect to the 20-year brand */}
      <section className="bg-oat-50 border-b border-oat-100">
        <div className="section-container py-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-stone-700 text-lg leading-relaxed mb-6">
              <strong className="text-forest-900">Same company. Same standards. More yard.</strong>{' '}
              Every landscape project is run by the crew leads who&apos;ve installed fences and decks for
              1,700+ Utah homeowners since 2009. One phone number. One warranty. One invoice.
            </p>
            <AnniversaryBadge variant="card" />
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section id="services" className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-forest-700 mb-3">
              Yard &amp; Landscape Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-stone-900 mb-4 tracking-tight">
              Everything Inside <span className="italic font-light text-forest-700">the Fence Line.</span>
            </h2>
            <p className="text-lg text-stone-600">
              Five core services, designed to bundle cleanly with your fence or deck project &mdash;
              or stand alone as a finished yard transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {landscapeServices.map((service) => (
              <Link
                key={service.id}
                href={`/landscaping/${service.slug}`}
                className="group relative flex flex-col justify-between p-8 lg:p-10 rounded-2xl border bg-white border-stone-200 hover:border-forest-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  <h3 className="text-2xl font-heading font-bold text-stone-900 group-hover:text-forest-700 transition-colors tracking-tight mb-3">
                    {service.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed mb-5">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.slice(0, 3).map((f) => (
                      <span key={f} className="text-xs bg-oat-50 text-forest-800 px-3 py-1 rounded-full border border-oat-100">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-end pt-4 border-t border-stone-100">
                  <span className="text-sm font-semibold text-forest-700 group-hover:translate-x-1 transition-transform">
                    {service.ctaText} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle CTA */}
      <BundleCTA variant="to-fence-deck" />

      {/* Premium value stack — designs, HOA, permits all included */}
      <IncludedValueStack variant="landscape" background="alpine-50" />

      {/* Featured photo gallery */}
      <section className="section-padding bg-oat-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-forest-700 mb-3">
              Recent Work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-stone-900 mb-4 tracking-tight">
              From Bare Dirt to <span className="italic font-light text-forest-700">Finished Yard.</span>
            </h2>
            <p className="text-lg text-stone-600">
              One photo per service — explore each line for full before/after galleries.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {landscapePillarFeatured.map((p, i) => (
              <PhotoStub
                key={p.file}
                src={`/images/landscaping/gallery/${p.file}`}
                alt={p.alt ?? p.label}
                label={p.label}
                aspect="4/3"
                priority={i === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Landscape testimonials */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-forest-700 mb-3">
              From Our Wasatch Front Customers
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-stone-900 mb-3 tracking-tight">
              Trusted by the Same Customers <span className="italic font-light text-forest-700">Who Trust Our Fences.</span>
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              {COMPANY.yearsExperience}+ years of fence and deck reviews back every yard project we run.
              Here&apos;s what our customers say about working with the same crews across the whole property.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Kathy M.',
                location: 'Local Guide',
                text: 'Alpine did our fence and gate — reasonable price, great work. When they offered to handle the sod and sprinklers too, it was a no-brainer. Same crew, one schedule, done right.',
                service: 'Fence + Sod Bundle',
              },
              {
                name: 'George Mastakas',
                location: 'Utah',
                text: 'Chandler\u2019s crew installed my cedar fence in under a week. Adding a paver patio later with the same team meant I didn\u2019t have to coordinate two contractors. Highly recommend.',
                service: 'Fence + Paver Patio',
              },
              {
                name: 'Cynthia Dunford',
                location: 'Provo, UT',
                text: 'Professional from start to finish. Repaired and stained our fence, then came back to grade and re-sod the yard. The owner kept me informed every step of the way.',
                service: 'Fence + Sod Install',
              },
            ].map((t) => (
              <div key={t.name} className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-alpine-700 text-white flex items-center justify-center font-bold text-sm shrink-0">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} className="w-4 h-4 text-compoxen-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-stone-900 text-sm">{t.name}</p>
                    <p className="text-xs text-stone-500">{t.location}</p>
                  </div>
                  <span className="text-xs font-medium text-alpine-700 bg-white px-2 py-1 rounded">{t.service}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-stone-500 mt-8">
            Reviews are real Alpine Fence &amp; Deck customers; bundle copy reflects services we offer.
          </p>
        </div>
      </section>

      {/* Quote form */}
      <section className="section-padding bg-oat-50">
        <div className="section-container max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-forest-900 mb-3 tracking-tight">
              Tell Us About Your Yard
            </h2>
            <p className="text-stone-600">Free, same-day estimates. No pressure.</p>
          </div>
          <QuoteForm division="yard-landscape" />
        </div>
      </section>
    </>
  );
}
