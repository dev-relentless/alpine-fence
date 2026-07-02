import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { COMPANY } from '@/data/cities';
import { landscapeServices } from '@/data/services';
import SchemaMarkup, { generateFAQSchema } from '@/components/SchemaMarkup';
import Breadcrumbs from '@/components/Breadcrumbs';
import IncludedValueStack from '@/components/IncludedValueStack';
import BundleCTA from '@/components/BundleCTA';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'New-Construction Yard Packages | Premium Composite Fence $47/ft — Alpine Fence & Deck',
  description:
    'Turn a blank builder lot into a finished yard in one coordinated project. New-construction yard packages with sod, sprinklers, patios, and a Premium Composite Fence installed for $47/ft. Free same-day estimates. (801) 471-3148',
  openGraph: {
    title: 'New-Construction Yard Packages | Alpine Fence & Deck',
    description:
      'Blank dirt lot to finished yard — one crew, one schedule, one warranty. Bundle sod, sprinklers, and hardscape, then upgrade to a Premium Composite Fence for just $47/ft.',
    url: 'https://alpinefenceanddeck.com/yard-packages',
  },
  alternates: {
    canonical: 'https://alpinefenceanddeck.com/yard-packages',
  },
};

const PACKAGES = [
  {
    name: 'Move-In Ready',
    tagline: 'The essentials, done right on day one.',
    price: 'from $9,900',
    highlight: false,
    best: 'New homeowners who want a finished, usable yard fast.',
    includes: [
      'Full-lot grading & soil prep',
      'Premium Utah-climate sod (front & back)',
      'Automatic sprinkler & drip system',
      'Clean rock or mulch bed borders',
      'One coordinated schedule & warranty',
    ],
  },
  {
    name: 'Complete Yard',
    tagline: 'The full outdoor build most new homes need.',
    price: 'from $24,500',
    highlight: true,
    best: 'Builders & buyers who want the whole yard finished at once.',
    includes: [
      'Everything in Move-In Ready',
      'Paver patio or walkway',
      'Segmental retaining wall (as needed)',
      'Full perimeter fence — material of your choice',
      'Landscape design layout, HOA packet & permits',
    ],
  },
  {
    name: 'Signature Estate',
    tagline: 'A designed, magazine-ready property.',
    price: 'from $48,000',
    highlight: false,
    best: 'Custom & luxury lots that want a fully designed exterior.',
    includes: [
      'Everything in Complete Yard',
      'Custom landscape design & grading plan',
      'Expanded hardscape & feature lighting',
      'Premium Composite Fence upgrade included',
      'Composite deck or covered patio option',
    ],
  },
];

const FAQS = [
  {
    question: 'What is a new-construction yard package?',
    answer:
      'It is a single, coordinated project that turns a bare builder lot into a finished yard — grading, sod, sprinklers, hardscape, and fencing installed together by one crew under one schedule, one warranty, and one invoice instead of hiring three or four separate contractors.',
  },
  {
    question: 'How much is the Premium Composite Fence?',
    answer:
      'Our Premium Composite Fence is installed for $47 per linear foot when added to any new-construction yard package. That is an all-in bundled rate covering concrete-set posts, reinforced rails, and the Compoxen® composite panels — backed by up to a 25-year material warranty and zero ongoing maintenance.',
  },
  {
    question: 'Why bundle the fence with the yard instead of doing it later?',
    answer:
      'Bundling means one mobilization, one grading pass, and one project manager. Trenching for sprinklers, grading for sod, and setting fence posts all happen in the right sequence so nothing gets torn up and re-done. Customers typically save 8–12% versus booking each trade separately.',
  },
  {
    question: 'Do you handle HOA approval and permits on a new build?',
    answer:
      'Yes. We assemble and submit the HOA packet and pull every required city permit in-house — never a surprise line item. We have been approved by 200+ Wasatch Front HOAs since 2009.',
  },
  {
    question: 'Can you work with my builder or closing timeline?',
    answer:
      'Absolutely. We coordinate directly with builders and schedule around your closing and possession dates so the yard is finished shortly after you move in. Same-day estimates keep the process moving.',
  },
];

export default function YardPackagesPage() {
  return (
    <>
      <SchemaMarkup
        pageType="service"
        serviceData={{
          name: 'New-Construction Yard Packages',
          description:
            'Complete new-construction yard packages for Utah homes — grading, sod, sprinklers, hardscape, and fencing installed as one coordinated project. Upgrade to a Premium Composite Fence installed for $47/ft.',
          slug: 'yard-packages',
          division: 'yard-landscape',
          priceRange: '$9,900 – $75,000+',
        }}
        breadcrumbs={[
          { name: 'Home', url: 'https://alpinefenceanddeck.com' },
          { name: 'Yard Packages', url: 'https://alpinefenceanddeck.com/yard-packages' },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(FAQS)),
        }}
      />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Yard Packages' },
        ]}
      />

      {/* ───── HERO ───── */}
      <section className="relative text-white overflow-hidden">
        <Image
          src="/images/hero/hero-bg.jpg"
          alt="New-construction yard package by Alpine Fence & Deck"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mountain-900/70 via-mountain-900/55 to-mountain-900/80 z-[1]" />

        <div className="section-container relative z-10 py-24 lg:py-36">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-compoxen-300 mb-5 animate-fade-in-up">
              New-Construction Yard Packages
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold leading-[1.05] tracking-tight mb-6 text-balance animate-fade-in-up-delay-1">
              Blank Lot to <span className="italic font-light text-compoxen-300">Finished Yard.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white font-medium mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-in-up-delay-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
              Sod, sprinklers, patios, walls, and fencing — installed as{' '}
              <span className="text-compoxen-300 font-semibold">one coordinated project.</span> One crew,
              one schedule, one warranty. Built for {COMPANY.serviceArea} since {COMPANY.founded}.
            </p>

            {/* Offer badge */}
            <div className="animate-fade-in-up-delay-2 mb-10">
              <div className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full bg-compoxen-400/95 px-6 py-3 text-stone-900 shadow-xl">
                <span className="text-sm font-bold uppercase tracking-wide">Bundle Upgrade</span>
                <span className="hidden sm:inline text-stone-800">·</span>
                <span className="text-base sm:text-lg font-heading font-bold">
                  Premium Composite Fence installed for <span className="whitespace-nowrap">$47/ft</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 animate-fade-in-up-delay-3">
              <Link href="/quote?bundle=true" className="btn-compoxen text-lg">
                Request a Package Estimate
              </Link>
              <a href={COMPANY.phoneHref} className="btn-secondary border-white/40 text-white hover:bg-white/10 text-lg">
                Call {COMPANY.phone}
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-stone-300">
              {['Same-Day Estimates', 'Builder-Coordinated Scheduling', 'One Warranty · One Invoice'].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-compoxen-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── TRUST BAR ───── */}
      <section className="bg-white border-b border-stone-100">
        <div className="section-container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: `${COMPANY.yearsExperience}+`, label: 'Years in Utah' },
              { value: '1,700+', label: 'Projects Completed' },
              { value: '8–12%', label: 'Bundle Savings' },
              { value: `${COMPANY.googleRating}★`, label: 'Google Rating' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-heading font-bold text-alpine-800">{stat.value}</div>
                <div className="text-sm text-stone-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── THE OPPORTUNITY ───── */}
      <section className="section-padding bg-gradient-to-b from-oat-50 to-white border-b border-oat-100">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-forest-700 mb-3">
              The New-Home Problem
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-stone-900 mb-4 tracking-tight">
              The builder hands you <span className="italic font-light text-forest-700">a dirt lot.</span>
            </h2>
            <p className="text-lg text-stone-600">
              A new home is finished at the walls. Everything past the back door — grading, grass, sprinklers,
              patio, and fence — is on you. Hire it out piece by piece and you juggle four contractors, four
              schedules, and four warranties. We do the whole yard as one build.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'One Coordinated Crew',
                body: 'Grading, sod, irrigation, hardscape, and fence sequenced by one project manager so nothing gets torn up and re-done.',
              },
              {
                title: 'One Bundled Price',
                body: 'A single estimate covers the whole property — typically 8–12% less than booking each trade separately.',
              },
              {
                title: 'One Warranty & Walkthrough',
                body: 'One number to call, one written warranty, and a 30-day walkthrough across the entire finished yard.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-oat-100 rounded-2xl p-6 shadow-sm">
                <h3 className="font-heading font-bold text-stone-900 mb-2 tracking-tight">{item.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── PACKAGE TIERS ───── */}
      <section id="packages" className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-alpine-700 mb-3">
              Choose Your Package
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-stone-900 mb-4 tracking-tight">
              Three Ways to <span className="italic font-light text-alpine-700">Finish the Yard.</span>
            </h2>
            <p className="text-lg text-stone-600">
              Every package is built to your lot and closing timeline. Mix, match, and upgrade — pricing is a
              starting point, and your free on-site estimate locks the real number.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 ${
                  pkg.highlight
                    ? 'bg-gradient-to-br from-forest-950 via-forest-900 to-forest-800 text-white shadow-2xl lg:-translate-y-2 ring-2 ring-bronze-400'
                    : 'bg-white border border-stone-200 shadow-sm hover:shadow-lg'
                }`}
              >
                {pkg.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-bronze-400 px-4 py-1 text-xs font-bold uppercase tracking-wider text-stone-900 shadow-md">
                    Most Popular
                  </span>
                )}
                <h3
                  className={`text-2xl font-heading font-bold tracking-tight ${
                    pkg.highlight ? 'text-white' : 'text-stone-900'
                  }`}
                >
                  {pkg.name}
                </h3>
                <p className={`mt-2 text-sm ${pkg.highlight ? 'text-stone-200' : 'text-stone-600'}`}>
                  {pkg.tagline}
                </p>
                <div
                  className={`mt-5 text-3xl font-heading font-bold ${
                    pkg.highlight ? 'text-bronze-300' : 'text-alpine-800'
                  }`}
                >
                  {pkg.price}
                </div>

                <ul className="mt-6 space-y-3 flex-1">
                  {pkg.includes.map((line) => (
                    <li key={line} className="flex items-start gap-3">
                      <svg
                        className={`w-5 h-5 shrink-0 mt-0.5 ${pkg.highlight ? 'text-bronze-300' : 'text-forest-600'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className={`text-sm leading-relaxed ${pkg.highlight ? 'text-stone-100' : 'text-stone-700'}`}>
                        {line}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className={`mt-6 text-xs uppercase tracking-[0.18em] ${pkg.highlight ? 'text-bronze-300/90' : 'text-stone-400'}`}>
                  Best for
                </p>
                <p className={`text-sm ${pkg.highlight ? 'text-stone-200' : 'text-stone-600'}`}>{pkg.best}</p>

                <Link
                  href="/quote?bundle=true"
                  className={`mt-6 ${
                    pkg.highlight
                      ? 'btn-compoxen w-full'
                      : 'btn-secondary w-full'
                  }`}
                >
                  Get This Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── FEATURED: $47/FT COMPOSITE FENCE UPGRADE ───── */}
      <section className="section-padding bg-gradient-to-br from-compoxen-50 to-white border-y border-compoxen-200">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-compoxen-100 to-stone-200">
              <Image
                src="/images/fence-types/composite-fencing.jpg"
                alt="Premium Compoxen® composite fence installed for $47 per linear foot"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                quality={85}
              />
            </div>

            <div>
              <span className="badge-compoxen mb-4">Featured Bundle Upgrade</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-stone-900 mb-4 tracking-tight text-balance">
                Premium Composite Fence.{' '}
                <span className="compoxen-text">$47 per foot, installed.</span>
              </h2>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                Add our Compoxen® composite fence to any yard package for a flat, all-in{' '}
                <strong className="text-stone-900">$47 per linear foot</strong> — posts set in concrete,
                reinforced rails, and premium composite panels that never rot, warp, splinter, or fade.
                It&apos;s the last fence your new home will ever need.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { h: '$47 / linear ft', p: 'Flat bundled rate — materials, posts, and labor included.' },
                  { h: 'Up to 25-Year Warranty', p: 'Warrantied composite material engineered for Utah freeze-thaw.' },
                  { h: 'Zero Maintenance', p: 'Never stain, seal, or paint. Rinse with a hose and walk away.' },
                  { h: 'HOA-Approved Profiles', p: 'Clean, modern wood-grain looks that pass strict HOA specs.' },
                ].map((f) => (
                  <div key={f.h} className="rounded-xl border border-compoxen-200 bg-white p-4">
                    <p className="font-heading font-bold text-stone-900">{f.h}</p>
                    <p className="text-sm text-stone-600 mt-1 leading-snug">{f.p}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote?bundle=true" className="btn-compoxen">
                  Add Composite for $47/ft
                </Link>
                <Link href="/fences/composite-fencing" className="btn-secondary">
                  See the Composite Fence
                </Link>
              </div>

              <p className="mt-5 text-xs text-stone-500 leading-relaxed">
                $47/ft is an all-in bundled rate for standard 6&apos; privacy composite fence added to a
                new-construction yard package. Final pricing confirmed on your free on-site estimate; gates,
                grade changes, and custom heights quoted separately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── WHAT'S IN THE PACKAGE — SERVICES ───── */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-forest-700 mb-3">
              What We Install
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-stone-900 mb-4 tracking-tight">
              Every Trade. <span className="italic font-light text-forest-700">One Build.</span>
            </h2>
            <p className="text-lg text-stone-600">
              Pick the pieces your lot needs. Every service below is run by the same crew leads who&apos;ve
              built 1,700+ Wasatch Front fences and decks.
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
                <p className="text-sm text-stone-600 leading-relaxed mb-4">{s.description.slice(0, 90)}…</p>
                <span className="text-sm font-semibold text-forest-700 group-hover:translate-x-1 inline-block transition-transform">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───── INCLUDED VALUE ───── */}
      <IncludedValueStack
        variant="landscape"
        eyebrow="Included in Every Yard Package"
        background="alpine-50"
      />

      {/* ───── BUNDLE MATH ───── */}
      <section className="section-padding bg-white border-t border-stone-100">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-alpine-700 mb-3">
                Why Bundle Wins
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-stone-900 tracking-tight">
                Piecemeal vs. <span className="italic font-light text-alpine-700">one package.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-7">
                <h3 className="font-heading font-bold text-stone-900 text-lg mb-4">Hiring it piece by piece</h3>
                <ul className="space-y-3">
                  {[
                    'Four contractors, four estimates, four schedules',
                    'Crews re-grade over each other\u2019s work',
                    'Four separate warranties to chase',
                    'Fence bid separately at full retail',
                    'Weeks of gaps between trades',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 text-sm text-stone-600">
                      <svg className="w-5 h-5 shrink-0 mt-0.5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border-2 border-forest-700 bg-gradient-to-br from-forest-950 to-forest-800 p-7 text-white shadow-xl">
                <h3 className="font-heading font-bold text-white text-lg mb-4">One Alpine yard package</h3>
                <ul className="space-y-3">
                  {[
                    'One estimate, one project manager, one invoice',
                    'Trades sequenced so nothing gets re-done',
                    'One written warranty across the whole yard',
                    'Composite fence upgrade at $47/ft, not retail',
                    'Typically 8–12% total savings',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 text-sm text-stone-100">
                      <svg className="w-5 h-5 shrink-0 mt-0.5 text-bronze-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── FAQ ───── */}
      <section className="section-padding bg-oat-50 border-y border-oat-100">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-forest-700 mb-3">
                Questions
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-stone-900 tracking-tight">
                Yard Package <span className="italic font-light text-forest-700">FAQs.</span>
              </h2>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-oat-100 bg-white p-6 shadow-sm [&_svg]:open:rotate-45"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-heading font-bold text-stone-900 list-none">
                    {faq.question}
                    <svg className="w-5 h-5 shrink-0 text-forest-600 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </summary>
                  <p className="mt-4 text-stone-600 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── QUOTE FORM ───── */}
      <section id="quote" className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-alpine-700 mb-3">
              Start Your Build
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-stone-900 mb-4 tracking-tight">
              Get Your <span className="italic font-light text-alpine-700">Package Estimate.</span>
            </h2>
            <p className="text-lg text-stone-600">
              Tell us about your lot, timeline, and whether you want the $47/ft composite upgrade. We respond
              same-day with a bundled estimate — or call {COMPANY.phone}.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <QuoteForm variant="full" division="yard-landscape" className="shadow-xl border border-stone-100" />
          </div>
        </div>
      </section>

      {/* ───── CROSS-SELL ───── */}
      <BundleCTA variant="general" />
    </>
  );
}
