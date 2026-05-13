import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { COMPANY } from '@/data/cities';
import { landscapeServices } from '@/data/services';
import FenceTypesGrid from '@/components/FenceTypesGrid';
import SchemaMarkup from '@/components/SchemaMarkup';
import BundleCTA from '@/components/BundleCTA';
import AnniversaryBadge from '@/components/AnniversaryBadge';

export const metadata: Metadata = {
  title: 'Utah Fence, Deck & Landscape Builder | Alpine Fence & Deck',
  description:
    'Alpine Fence & Deck builds every style of fence and deck across 94 Utah cities — plus sod, retaining walls, paver patios, sprinklers, and landscape design. Free same-day estimates. (801) 471-3148',
  openGraph: {
    title: 'Alpine Fence & Deck | Utah\'s Premier Fence, Deck & Landscape Builder',
    description:
      'Wood, vinyl, composite, iron, aluminum and custom fences. Decks, refinishing, repair — plus sod, walls, pavers, sprinklers, and landscape design across 94 Utah cities.',
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
      <section className="relative text-white overflow-hidden">
        <Image
          src="/images/hero/hero-bg.jpg"
          alt="Premium fence installation by Alpine Fence & Deck"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mountain-900/55 via-mountain-900/35 to-mountain-900/70 z-[1]" />

        <div className="section-container relative z-10 py-28 lg:py-44">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-compoxen-300 mb-5 animate-fade-in-up">
              Utah&apos;s Trusted Fence, Deck &amp; Landscape Builder
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-[1.05] tracking-tight mb-6 text-balance animate-fade-in-up-delay-1">
              Built to Define <span className="italic font-light text-compoxen-300">Your Property.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white font-medium mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-in-up-delay-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
              Fence, deck, and <span className="text-compoxen-300 font-semibold">everything between.</span> Every material. Every style.
              Crafted for {COMPANY.serviceArea} by the team that&apos;s set the standard for {COMPANY.yearsExperience}+ years.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up-delay-3">
              <Link href="/quote" className="btn-primary text-lg">
                Request a Free Estimate
              </Link>
              <Link href="/gallery" className="btn-secondary border-white/40 text-white hover:bg-white/10 text-lg">
                See Recent Projects
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-stone-300">
              {['Same-Day Estimates', 'Licensed & Insured', 'Workmanship Guaranteed'].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-compoxen-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <AnniversaryBadge />
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
              { value: `${COMPANY.googleRating}★`, label: `Google Rating · 21 Reviews` },
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

      {/* ───── BEYOND THE FENCE — YARD & LANDSCAPE ───── */}
      <section className="section-padding bg-gradient-to-b from-oat-50 to-white border-y border-oat-100">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-forest-700 mb-3">
              Yard &amp; Landscape
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-stone-900 mb-4 tracking-tight">
              Beyond <span className="italic font-light text-forest-700">the Fence.</span>
            </h2>
            <p className="text-lg text-stone-600">
              The same crews. The same standards. Sod, retaining walls, paver patios, sprinklers,
              and full landscape design &mdash; designed to bundle with your fence or deck.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
            {landscapeServices.map((s) => (
              <Link
                key={s.id}
                href={`/landscaping/${s.slug}`}
                className="group bg-white border border-oat-100 hover:border-bronze-300 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="font-heading font-bold text-stone-900 group-hover:text-forest-700 transition-colors mb-2 tracking-tight">
                  {s.shortTitle}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-4">
                  {s.description.slice(0, 90)}…
                </p>
                <span className="text-sm font-semibold text-forest-700 group-hover:translate-x-1 inline-block transition-transform">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/landscaping" className="btn-primary">
              Explore Yard &amp; Landscape →
            </Link>
          </div>

          {/* Premium value strip — included with every landscape project */}
          <div className="mt-14 lg:mt-16 max-w-5xl mx-auto">
            <div className="bg-white border border-oat-100 rounded-2xl shadow-sm p-6 lg:p-8">
              <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-forest-700 mb-5">
                Included with Every Landscape Project
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 text-center">
                {[
                  'Free Design Layout',
                  'HOA Submittal Handled',
                  'Permits & Engineering',
                  'Same-Day Estimates',
                  'One Warranty',
                  '30-Day Walkthrough',
                ].map((item) => (
                  <div key={item} className="flex flex-col items-center gap-2">
                    <svg className="w-6 h-6 text-bronze-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm font-semibold text-stone-800 leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── PRODUCT GRID ───── */}
      <section id="fence-types" className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-alpine-700 mb-3">
              What We Build
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-stone-900 mb-4 tracking-tight">
              Every Style. <span className="italic font-light text-alpine-700">Built to Last.</span>
            </h2>
            <p className="text-lg text-stone-600">
              Fencing, decking, and railings in every major material — installed with the
              craftsmanship of a team that treats every property like its own.
            </p>
          </div>

          <FenceTypesGrid />

          <div className="text-center mt-12">
            <Link href="/quote" className="btn-primary">
              Not sure which is right? Get a Free Consultation →
            </Link>
          </div>
        </div>
      </section>

      {/* ───── THE ALPINE STANDARD ───── */}
      <section className="section-padding bg-white border-t border-stone-100">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-alpine-700 mb-3">
              The Alpine Standard
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-stone-900 tracking-tight">
              Why Utah Homeowners Choose Alpine.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Master Craftsmen',
                description: `${COMPANY.yearsExperience}+ years installing every major fence and deck material across Utah.`,
                icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
              },
              {
                title: 'Built for Utah Weather',
                description: 'Engineered installations that survive blistering sun, wind, and Wasatch winters.',
                icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
              },
              {
                title: 'Transparent Pricing',
                description: 'Same-day estimates with detailed line items. No surprises, ever.',
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
              },
              {
                title: 'Backed by Warranty',
                description: 'Workmanship guarantee on every project, plus material warranties up to 25 years.',
                icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
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

      {/* ───── HOW IT WORKS ───── */}
      <section className="section-padding bg-stone-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-alpine-700 mb-3">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-stone-900 tracking-tight">
              Simple. Honest. <span className="italic font-light text-alpine-700">Done Right.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
            {[
              {
                step: '01',
                title: 'Same-Day Estimate',
                description: 'Tell us about your project. We respond the same day, walk the property, and give you a detailed line-item estimate — no pressure, no gimmicks.',
              },
              {
                step: '02',
                title: 'Design & Approval',
                description: 'We help you choose the right material, finalize the design, handle permits, and walk your HOA approval through — so nothing slows the build.',
              },
              {
                step: '03',
                title: 'Built to Last',
                description: 'Our crew installs with concrete-set posts, galvanized fasteners, and climate-rated finishes. Every project is backed by our workmanship guarantee.',
              },
            ].map((s) => (
              <div key={s.step} className="relative bg-white rounded-2xl p-8 lg:p-10 border border-stone-200 hover:border-alpine-300 hover:shadow-lg transition-all duration-300">
                <div className="text-5xl font-heading font-bold text-alpine-100 leading-none mb-4">{s.step}</div>
                <h3 className="text-xl font-heading font-bold text-stone-900 mb-3 tracking-tight">{s.title}</h3>
                <p className="text-stone-600 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── EDITORIAL FULL-BLEED IMAGE ───── */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <Image
          src="/images/gallery/custom-wood-fence-stainig-after.jpg"
          alt="Freshly stained custom cedar privacy fence — recent Alpine Fence & Deck install on the Wasatch Front"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 h-full flex items-center">
          <div className="section-container">
            <div className="max-w-xl text-white">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-compoxen-300">
                Recent Work
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-4 tracking-tight text-balance">
                Setting the Utah standard, <span className="italic font-light">one property at a time.</span>
              </h2>
              <Link href="/gallery" className="btn-secondary border-white/40 text-white hover:bg-white/10 mt-2">
                View the Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───── TESTIMONIALS ───── */}
      <section className="section-padding bg-alpine-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-stone-900 mb-4 tracking-tight">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} className="w-6 h-6 text-compoxen-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-stone-600">{COMPANY.googleRating}/5 stars on Google</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Kathy M.',
                location: 'Local Guide',
                text: 'I watched Alpine do my neighbor’s fence and thought they did a very good job. We hired them to repair our fence, rebuild a gate, and power wash and paint the whole thing. Reasonable price and great work.',
                service: 'Repair, Gate & Staining',
              },
              {
                name: 'George Mastakas',
                location: 'Utah',
                text: 'Swooped in and installed + painted/stained my cedar fence with two gates in less than a week! Cannot be more pleased with the work Chandler and his team did. Price was very fair, end result was exactly what I expected.',
                service: 'Cedar Fence & Gates',
              },
              {
                name: 'Cynthia Dunford',
                location: 'Provo, UT',
                text: 'Very professional! First, they repaired my fence and then I had them stain the entire fence. The owner, Chandler, kept me informed every step of the way. The end product was excellent!',
                service: 'Fence Repair & Staining',
              },
              {
                name: 'Mark R.',
                location: 'Lehi, UT',
                text: 'Alpine handled our composite fence install start to finish — design, HOA paperwork, permits, and a clean build. Same crew showed up every day. Looks better than the renderings.',
                service: 'Compoxen Composite Fence',
              },
              {
                name: 'Jenna H.',
                location: 'Draper, UT',
                text: 'We bundled a new fence with sod and a paver patio. Alpine project-managed all of it as one job, one walkthrough, one warranty. Saved us months of coordinating contractors.',
                service: 'Fence + Sod + Patio Bundle',
              },
              {
                name: 'David S.',
                location: 'Sandy, UT',
                text: 'Multi-tier deck with iron railings on a tough hillside. Their structural plan was solid, the install was fast, and they cleaned the site every single day. Would absolutely hire them again.',
                service: 'Composite Deck & Iron Railings',
              },
            ].map((testimonial) => (
              <div key={testimonial.name} className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-alpine-700 text-white flex items-center justify-center font-bold text-sm shrink-0">
                    {testimonial.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} className="w-4 h-4 text-compoxen-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
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

      {/* ───── FAQ (matches FAQPage schema) ───── */}
      <section className="section-padding bg-white">
        <div className="section-container max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-alpine-700 mb-3">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-stone-900 tracking-tight">
              The Answers <span className="italic font-light text-alpine-700">Up Front.</span>
            </h2>
          </div>

          <div className="divide-y divide-stone-200 border-y border-stone-200">
            {[
              {
                q: 'What types of fences do you install?',
                a: 'Every major fencing material — wood (cedar, pine), vinyl, Sim/Tek, composite (including Compoxen®), ornamental iron, aluminum, ranch rail, chain link, and custom gates. We also build decks and iron/vinyl railings.',
              },
              {
                q: 'How much does a fence cost in Utah?',
                a: 'Wood privacy fences typically run $3,000–$15,000. Vinyl and aluminum fall in a similar range. Premium composite installations range from $8,000–$45,000. We provide free on-site estimates with detailed line-item pricing.',
              },
              {
                q: 'Do you offer free estimates?',
                a: 'Yes — free, no-obligation estimates with same-day response. Call (801) 471-3148 or fill out our online quote form.',
              },
              {
                q: 'Are your fences HOA approved?',
                a: 'Yes. We work with homeowners and HOA boards to ensure all designs and materials meet community guidelines, and we handle permit pulling when required.',
              },
              {
                q: 'Do you also stain, refinish, and repair fences and decks?',
                a: 'Absolutely. In addition to new installations, we offer professional fence and deck staining, refinishing, and repair across all 94 cities we serve.',
              },
              {
                q: 'Do you handle yard and landscape work too — sod, walls, pavers, sprinklers?',
                a: 'Yes. Our Yard & Landscape division installs sod, retaining walls, paver patios and walkways, sprinkler systems, and full landscape design and grading — run by the same crew leads who\u2019ve built 1,700+ Alpine fences and decks. One company, one warranty, one walkthrough.',
              },
              {
                q: 'Can I bundle a fence or deck with sod, a patio, or a sprinkler system?',
                a: 'That\u2019s the whole point of the new division. We project-manage the entire yard as one job — fence, deck, sod, walls, pavers, and irrigation sequenced together so trades don\u2019t step on each other and you don\u2019t coordinate three contractors.',
              },
              {
                q: 'Is the landscape crew the same team that does the fences?',
                a: 'Same company, same crew leads, same standards. We expanded into landscape because our customers kept asking us to finish what was inside the fence line — so we built a division around it instead of subbing it out.',
              },
              {
                q: 'What warranty do you offer?',
                a: 'Workmanship guarantee on every project, plus material warranties up to 25 years on premium products including Compoxen® composite. Bundled fence + landscape projects carry a single unified warranty.',
              },
            ].map((item) => (
              <details key={item.q} className="group py-6">
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

      {/* ───── SERVICE AREA ───── */}
      <section className="section-padding bg-stone-50">
        <div className="section-container text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-stone-900 mb-4 tracking-tight">
            Serving 94 Cities Across Utah&apos;s Wasatch Front
          </h2>
          <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
            From Ogden to Payson, Park City to Tooele — we bring expert fence and deck craftsmanship to your city.
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

      {/* ───── FINAL CTA ───── */}
      <section className="bg-alpine-900 text-white">
        <div className="section-container py-20 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 tracking-tight text-balance">
            Ready to build something <span className="italic font-light text-compoxen-300">remarkable?</span>
          </h2>
          <p className="text-lg text-stone-200/90 mb-8 max-w-xl mx-auto">
            Free, same-day estimates. No pressure, no gimmicks — just honest craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="btn-primary text-lg">
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
