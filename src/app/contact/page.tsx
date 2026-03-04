import { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';
import { COMPANY } from '@/data/cities';

export const metadata: Metadata = {
  title: 'Contact Us | Composite Fence & Deck Experts | Free Estimates',
  description:
    'Contact Alpine Fence & Deck for a free composite fence or deck estimate. Call, email, or fill out our form. Utah\'s trusted Compozen® composite fence and deck contractor serving 94 cities.',
  openGraph: {
    title: 'Contact Alpine Fence & Deck | Utah Composite Fence & Deck Contractor',
    description: 'Get a free estimate for composite fence and deck installation, refinishing, or repair across Utah.',
    url: 'https://alpinefenceanddeck.com/contact',
  },
  alternates: {
    canonical: 'https://alpinefenceanddeck.com/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient text-white">
        <div className="section-container py-16 lg:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Contact Utah&apos;s Composite Fence & Deck Experts
            </h1>
            <p className="text-lg text-stone-200 leading-relaxed">
              Have a question about composite fencing or decking? Ready to get started? Reach out by phone, email, or fill out the
              form below for a free, no-obligation composite fence or deck estimate.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-white border-b border-stone-200">
        <div className="section-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone */}
            <a
              href={COMPANY.phoneHref}
              className="group flex flex-col items-center text-center p-6 rounded-2xl border border-stone-200 hover:border-alpine-300 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-alpine-50 text-alpine-600 flex items-center justify-center mb-4 group-hover:bg-alpine-100 transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-stone-900 mb-1">Call Us</h3>
              <span className="text-alpine-700 font-semibold">{COMPANY.phone}</span>
              <span className="text-xs text-stone-500 mt-1">{COMPANY.hours}</span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${COMPANY.email}`}
              className="group flex flex-col items-center text-center p-6 rounded-2xl border border-stone-200 hover:border-alpine-300 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-alpine-50 text-alpine-600 flex items-center justify-center mb-4 group-hover:bg-alpine-100 transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-stone-900 mb-1">Email</h3>
              <span className="text-alpine-700 font-semibold text-sm">{COMPANY.email}</span>
            </a>

            {/* Address */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-stone-200">
              <div className="w-12 h-12 rounded-full bg-alpine-50 text-alpine-600 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-stone-900 mb-1">Office</h3>
              <span className="text-sm text-stone-600">{COMPANY.address}</span>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-stone-200">
              <div className="w-12 h-12 rounded-full bg-alpine-50 text-alpine-600 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-stone-900 mb-1">Hours</h3>
              <span className="text-sm text-stone-600">{COMPANY.hours}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="section-padding bg-stone-50">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-heading font-bold text-stone-900 mb-6">
                Request a Free Estimate
              </h2>
              <QuoteForm variant="full" />
            </div>

            <div className="space-y-6">
              {/* Trust signals */}
              <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
                <h3 className="font-heading font-bold text-stone-900 mb-4">Why Alpine?</h3>
                <ul className="space-y-3 text-sm text-stone-600">
                  {[
                    `${COMPANY.yearsExperience}+ years experience`,
                    'Exclusive Compozen\u00AE Composite Certified',
                    'Same-day estimates',
                    '2-hour emergency callback',
                    '100% satisfaction guarantee',
                    '25-year composite material warranty',
                    `${COMPANY.googleRating}\u2605 Google rating`,
                    'Licensed, bonded & insured',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-alpine-600 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
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
                <a
                  href={COMPANY.phoneHref}
                  className="btn-emergency w-full text-center !text-sm"
                >
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
