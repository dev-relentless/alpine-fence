import { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';
import { COMPANY } from '@/data/cities';

export const metadata: Metadata = {
  title: 'Get a Free Composite Fence & Deck Estimate | Utah',
  description: 'Request a free composite fence or deck estimate from Alpine Fence & Deck. Same-day response guaranteed. Composite installations, refinishing & repair across 94 Utah cities. Compozen® certified.',
  openGraph: {
    title: 'Free Composite Fence & Deck Estimate | Alpine Fence & Deck',
    description: 'Get a same-day estimate for composite fence and deck installation, refinishing, or repair in Utah.',
    url: 'https://alpinefenceanddeck.com/quote',
  },
  alternates: {
    canonical: 'https://alpinefenceanddeck.com/quote',
  },
};

export default function QuotePage() {
  return (
    <>
      <section className="bg-hero-gradient text-white">
        <div className="section-container py-16 lg:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Get Your Free Composite Fence & Deck Estimate
            </h1>
            <p className="text-lg text-stone-200 leading-relaxed">
              Tell us about your project and get a detailed, no-obligation estimate the same day. 
              Whether it&apos;s refinishing, repair, or a Compozen® composite installation — we&apos;re ready to help.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-stone-50">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <QuoteForm variant="full" />
            </div>
            <div className="space-y-6">
              {/* Contact card */}
              <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
                <h3 className="font-heading font-bold text-stone-900 mb-4">Prefer to Call?</h3>
                <a href={COMPANY.phoneHref} className="text-2xl font-bold text-alpine-700 hover:text-alpine-800 transition-colors">
                  {COMPANY.phone}
                </a>
                <p className="text-sm text-stone-500 mt-2">Mon–Fri: 8 AM – 5 PM</p>
              </div>

              {/* Trust signals */}
              <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
                <h3 className="font-heading font-bold text-stone-900 mb-4">Why Alpine?</h3>
                <ul className="space-y-3 text-sm text-stone-600">
                  {[
                    `${COMPANY.yearsExperience}+ years experience`,
                    'Exclusive Compozen® Composite Certified',
                    'Same-day estimates',
                    '2-hour emergency callback',
                    '100% satisfaction guarantee',
                    '25-year composite material warranty',
                    `${COMPANY.googleRating}★ Google rating`,
                    'Licensed, bonded & insured',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-alpine-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Emergency */}
              <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
                <h3 className="font-heading font-bold text-red-800 mb-2">Emergency Repair?</h3>
                <p className="text-sm text-red-700 mb-4">
                  Storm damage, fallen fence, or safety hazard? We offer priority emergency service.
                </p>
                <a href={COMPANY.phoneHref} className="btn-emergency w-full text-center !text-sm">
                  Call for Emergency Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
