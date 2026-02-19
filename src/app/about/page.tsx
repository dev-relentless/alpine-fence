import { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/data/cities';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'About Alpine Fence & Deck | Utah\'s Compozen® Certified Installer',
  description: `About Alpine Fence & Deck — ${COMPANY.yearsExperience}+ years transforming Utah's outdoor living spaces. From refinishing experts to exclusive Compozen® certified installers.`,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient text-white">
        <div className="section-container py-16 lg:py-24">
          <div className="max-w-3xl">
            <span className="badge-compozen mb-6">Our Story</span>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6 leading-tight">
              {COMPANY.yearsExperience}+ Years Transforming Utah&apos;s Outdoor Living
            </h1>
            <p className="text-lg text-stone-200 leading-relaxed">
              From a small refinishing crew in 2009 to Utah&apos;s exclusive Compozen® certified installer — 
              Alpine Fence & Deck has grown by keeping one promise: deliver exceptional craftsmanship 
              and honest service to every homeowner we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-alpine-900 mb-6">From Refinishing to Revolution</h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  Alpine Fence & Deck started in 2009 with a simple mission: provide Salt Lake City homeowners 
                  with honest, high-quality fence and deck refinishing. Word spread quickly — our attention to detail 
                  and fair pricing earned trust across the Wasatch Front.
                </p>
                <p>
                  As we refinished thousands of fences and decks, we saw a recurring problem: no matter how well 
                  we refinished wood, Utah&apos;s extreme weather always won. Homeowners were trapped in an endless cycle 
                  of refinishing, each time getting diminishing returns.
                </p>
                <p>
                  That&apos;s when we discovered <strong className="text-compozen-700">Compozen®</strong>. 
                  This revolutionary composite material delivered the natural wood aesthetics our customers loved 
                  with zero lifetime maintenance. We became Utah&apos;s first (and exclusive) certified installer — 
                  and everything changed.
                </p>
                <p>
                  Today, we serve 94 cities across 8 counties, offering both our trusted refinishing services 
                  and the revolutionary Compozen® upgrade path. We don&apos;t push replacements — we let the results 
                  speak for themselves.
                </p>
              </div>
            </div>
            <div className="bg-alpine-50 rounded-2xl p-8 border border-alpine-200">
              <h3 className="text-xl font-heading font-bold text-alpine-900 mb-6">By the Numbers</h3>
              <div className="space-y-6">
                {[
                  { value: `${COMPANY.yearsExperience}+`, label: 'Years in Business' },
                  { value: '2,500+', label: 'Projects Completed' },
                  { value: '94', label: 'Cities Served' },
                  { value: '347+', label: 'Five-Star Reviews' },
                  { value: '100%', label: 'HOA Approval Rate' },
                  { value: '#1', label: 'Compozen® Certified Installer in Utah' },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between border-b border-stone-200 pb-4 last:border-0 last:pb-0">
                    <span className="text-2xl font-heading font-bold text-alpine-700">{stat.value}</span>
                    <span className="text-sm text-stone-600">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-alpine-50">
        <div className="section-container">
          <h2 className="text-3xl font-heading font-bold text-alpine-900 mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Honest Craftsmanship',
                description: 'We won\'t upsell what you don\'t need. If refinishing is the right choice, we\'ll say so. If replacement makes more sense, we\'ll show you the numbers.',
              },
              {
                title: 'Innovation',
                description: 'Our certification as Utah\'s exclusive Compozen® installer represents our commitment to bringing the best materials and technology to our customers.',
              },
              {
                title: 'Community',
                description: 'We\'re Utah homeowners too. We support local HOAs, contractor networks, and home improvement partnerships that make our communities better.',
              },
            ].map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-8 border border-stone-200">
                <h3 className="text-xl font-heading font-bold text-alpine-900 mb-4">{value.title}</h3>
                <p className="text-stone-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-gradient-to-br from-stone-900 to-alpine-950 text-white">
        <div className="section-container text-center max-w-3xl mx-auto">
          <span className="badge-compozen mb-6">Certifications & Credentials</span>
          <h2 className="text-3xl font-heading font-bold mb-8">Licensed, Certified & Trusted</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              'Compozen® Certified Installer (Exclusive)',
              'Utah State Licensed Contractor',
              'Fully Bonded & Insured',
              'BBB Accredited Business',
              'EPA Lead-Safe Certified',
              'OSHA Safety Certified',
            ].map((cert) => (
              <div key={cert} className="bg-white/10 rounded-xl p-4 flex items-center gap-3">
                <svg className="w-6 h-6 text-compozen-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="section-container max-w-4xl mx-auto">
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
