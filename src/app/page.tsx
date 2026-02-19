import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { COMPANY } from '@/data/cities';
import { services } from '@/data/services';

export default function HomePage() {
  return (
    <>
      {/* ───── HERO ───── */}
      <section className="relative bg-hero-gradient text-white overflow-hidden">
        {/* decorative */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-compozen-400 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-mountain-400 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="section-container relative z-10 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* copy */}
            <div className="max-w-xl">
              <div className="badge-compozen mb-6">★ Exclusive Compozen® Certified Installer</div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 text-balance">
                Utah&apos;s Premier Fence & Deck{' '}
                <span className="text-compozen-400">Transformation</span> Experts
              </h1>
              <p className="text-lg text-stone-200 mb-8 leading-relaxed">
                From expert refinishing to revolutionary <strong className="text-compozen-300">Compozen® composite</strong> installations —
                we deliver stunning outdoor living spaces across {COMPANY.serviceArea}. {COMPANY.yearsExperience}+ years of trusted craftsmanship.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/quote" className="btn-compozen text-lg">
                  Get Free Estimate
                </Link>
                <Link href="/design-studio" className="btn-secondary !border-white/30 !text-white hover:!bg-white/10 text-lg">
                  Launch Design Studio →
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm text-stone-300">
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
                  HOA Approved
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-compozen-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Lifetime Warranty
                </span>
              </div>
            </div>

            {/* hero form */}
            <div className="lg:pl-8">
              <QuoteForm variant="compact" />
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
              { value: '4.9★', label: 'Average Rating' },
              { value: '2,500+', label: 'Projects Completed' },
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
              Complete Fence & Deck Solutions
            </h2>
            <p className="text-lg text-stone-600">
              From quick refinishing to revolutionary Compozen® composite installations — 
              we have the right solution for every outdoor living project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.filter(s => s.id !== 'hoa-compliance').map((service) => (
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

      {/* ───── COMPOZEN SPOTLIGHT ───── */}
      <section className="bg-gradient-to-br from-stone-900 via-alpine-950 to-stone-900 text-white section-padding overflow-hidden relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-compozen-500 rounded-full blur-[128px]" />
        </div>
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="badge-compozen mb-6">Exclusive Technology</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight">
                The <span className="text-compozen-400">Compozen®</span> Revolution
              </h2>
              <p className="text-lg text-stone-300 mb-8 leading-relaxed">
                Stop the endless cycle of refinishing. Compozen® composite materials deliver stunning natural wood aesthetics 
                with <strong className="text-white">zero lifetime maintenance</strong>. As Utah&apos;s exclusive certified installer, 
                we offer designs and materials unavailable anywhere else.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  'Never stain or seal again',
                  'Won\'t rot, warp, or splinter',
                  'Lifetime material warranty',
                  'Eco-friendly recycled materials',
                  'Custom colors & textures',
                  'Increases property value 70-80%',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-compozen-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-stone-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/design-studio" className="btn-compozen">
                  Launch Design Studio
                </Link>
                <Link href="/calculator" className="btn-secondary !border-stone-600 !text-stone-200 hover:!bg-stone-800">
                  Refinish vs. Replace Calculator
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl border border-stone-700 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-compozen-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-compozen-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-2">3D Design Studio</h3>
                  <p className="text-stone-400 text-sm">
                    Visualize your Compozen® installation in stunning 3D before a single board is placed.
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-compozen-500 text-stone-900 rounded-xl px-6 py-3 font-bold shadow-xl">
                10x Value vs. Refinishing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── WHY CHOOSE US ───── */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-alpine-900 mb-4">
              Why Utah Homeowners Choose Alpine
            </h2>
            <p className="text-lg text-stone-600">
              We&apos;re not just contractors — we&apos;re your outdoor living transformation partners 
              backed by {COMPANY.yearsExperience}+ years of trusted craftsmanship.
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
                title: 'Exclusive Compozen® Access',
                description: 'As a certified installer, we offer composite materials and designs unavailable from other contractors.',
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
              },
              {
                title: 'HOA Guarantee',
                description: 'We guarantee HOA approval on every Compozen® installation or we redesign free of charge.',
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
                title: 'Lifetime Warranty',
                description: 'Compozen® installations come with a lifetime material warranty and our workmanship guarantee.',
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
            <p className="text-stone-600">4.9/5 stars from 347+ verified reviews</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah M.',
                location: 'South Jordan (Daybreak)',
                text: 'We started with deck refinishing and were so impressed we upgraded to a full Compozen fence. The design studio let us visualize everything before committing. Absolutely stunning results!',
                service: 'Compozen® Fence',
              },
              {
                name: 'Mike T.',
                location: 'Sandy',
                text: 'Emergency fence repair after a storm — they called back in 45 minutes and had it fixed next day. Then they showed us Compozen options that won\'t blow down. Converting our entire yard next spring.',
                service: 'Repair → Compozen®',
              },
              {
                name: 'Jennifer L.',
                location: 'Draper (SunCrest)',
                text: 'HOA had super strict requirements. Alpine handled everything — submitted designs, got approval in 3 days, and the Compozen deck installation is absolutely gorgeous. Zero maintenance is a dream.',
                service: 'Compozen® Deck',
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
              The Smart Upgrade Path
            </h2>
            <p className="text-lg text-stone-600">
              Every refinishing job reveals an opportunity. See why homeowners who start with refinishing 
              end up choosing Compozen® for their permanent solution.
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
                description: 'Use our 3D Design Studio to visualize a Compozen® upgrade. See the 10-year cost comparison side by side.',
                detail: 'Free design consultation',
              },
              {
                step: '3',
                title: 'Transform Forever',
                description: 'Upgrade to Compozen® when you\'re ready. Zero maintenance, lifetime warranty, stunning results.',
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
                10-Year Cost: Refinishing vs. Compozen®
              </h2>
              <p className="text-stone-600 mb-6">
                The numbers speak for themselves. Repeated refinishing costs add up, while a single 
                Compozen® installation pays for itself and adds lasting property value.
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
                  <span className="font-medium text-stone-700">One Compozen® Installation</span>
                  <span className="font-bold text-alpine-700">$15,000 – $35,000</span>
                </div>
                <div className="w-full bg-stone-200 rounded-full h-4">
                  <div className="bg-compozen-500 h-4 rounded-full" style={{ width: '55%' }} />
                </div>
                <p className="text-xs text-stone-500 mt-1">One-time investment + $0 maintenance forever</p>
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
            Compozen® installations to your city.
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
      <section className="section-padding bg-alpine-900 text-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
