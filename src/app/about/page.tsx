import { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/data/cities';

export const metadata: Metadata = {
  title: 'Our Story | Utah\'s Composite Fence & Deck Experts | Compozen® Certified',
  description: `Alpine Fence & Deck — ${COMPANY.yearsExperience}+ years transforming Utah's outdoor living spaces with composite fence and deck solutions. From refinishing experts to exclusive Compozen® certified composite installers. We build certainty, longevity, and spaces people are proud to come home to.`,
  openGraph: {
    title: 'Our Story | Alpine Fence & Deck — Utah\'s Composite Experts',
    description: `${COMPANY.yearsExperience}+ years of composite fence and deck expertise in Utah. Exclusive Compozen® certified installer.`,
    url: 'https://alpinefenceanddeck.com/about',
  },
  alternates: {
    canonical: 'https://alpinefenceanddeck.com/about',
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient text-white">
        <div className="section-container py-20 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <span className="badge-compozen mb-6 inline-flex">Our Story</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Utah&apos;s Composite Fence &amp; Deck Experts
            </h1>
            <p className="text-xl text-stone-200 leading-relaxed">
              We started by restoring what homeowners loved.<br />
              Now we build what they&apos;ll love for the next 25 years.
            </p>
          </div>
        </div>
      </section>

      {/* Where We Started */}
      <section className="section-padding bg-white">
        <div className="section-container max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-alpine-900 mb-8">Where We Started</h2>
          <div className="space-y-5 text-stone-600 leading-relaxed text-lg">
            <p>
              Alpine began in the most demanding corner of the industry: <strong className="text-stone-800">refinishing natural wood.</strong>
            </p>
            <p>
              Not the glamorous work. The hard work. The kind that teaches you how wood breathes, how weather
              destroys, and how to bring something back that a homeowner has already emotionally written off.
            </p>
            <p>
              Those early years built our reputation the right way — one restored deck, one revived fence,
              one grateful homeowner at a time. Neighbors watched transformations happen in real time, and
              trust spread street by street across the Wasatch Front.
            </p>
          </div>
        </div>
      </section>

      {/* What We Learned */}
      <section className="section-padding bg-stone-50">
        <div className="section-container max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-alpine-900 mb-8">What We Learned About Homeowners</h2>
          <p className="text-lg text-stone-600 leading-relaxed mb-8">
            After {COMPANY.yearsExperience}+ years, a pattern became impossible to ignore.
            Homeowners weren&apos;t just asking for repairs. They were asking for <strong className="text-stone-800">relief.</strong>
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              'Relief from constant sanding and staining',
              'Relief from sun damage and winter rot',
              'Relief from the fear of choosing wrong',
              'Relief from the cycle of "fix it again next year"',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-xl p-5 border border-stone-200">
                <svg className="w-5 h-5 text-compozen-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-stone-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-alpine-50 border-l-4 border-alpine-600 rounded-r-xl p-6">
            <p className="text-lg text-alpine-900 font-medium italic">
              People don&apos;t buy materials. They buy certainty, beauty, and freedom from future problems.
            </p>
            <p className="text-stone-600 mt-2">Understanding that psychology changed everything.</p>
          </div>
        </div>
      </section>

      {/* The Turning Point */}
      <section className="section-padding bg-white">
        <div className="section-container max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-alpine-900 mb-8">The Turning Point: Discovering Composite</h2>
          <div className="space-y-5 text-stone-600 leading-relaxed text-lg">
            <p>
              As Utah&apos;s climate became harsher and homeowners demanded longer-lasting solutions, we searched
              for a partner who could match our standards for durability, aesthetics, and engineering.
            </p>
            <p>
              That search led to <strong className="text-compozen-700">Compozen®</strong>.
            </p>
            <p>
              Not just another composite brand — an engineered, premium composite material built specifically to outperform
              in extreme climates. When we saw the quality, the structural integrity, and the 25-year performance
              expectations, the decision to become Utah&apos;s go-to composite fence and deck contractor was obvious.
            </p>
          </div>
          <div className="mt-10 bg-gradient-to-br from-compozen-50 to-alpine-50 rounded-2xl p-8 border border-compozen-200">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-8 h-8 text-compozen-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <h3 className="text-xl font-heading font-bold text-compozen-800">Exclusive Compozen® Certified Installer</h3>
            </div>
            <p className="text-stone-700 leading-relaxed">
              We became an Exclusive Compozen® Certified Installer, bringing Utah homeowners a level of outdoor
              living performance they simply couldn&apos;t get anywhere else.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="section-padding bg-alpine-50">
        <div className="section-container max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-alpine-900 mb-8">Why This Matters</h2>
          <div className="space-y-5 text-stone-600 leading-relaxed text-lg mb-10">
            <p>
              This wasn&apos;t a pivot. It was an <strong className="text-stone-800">evolution</strong>.
            </p>
            <p>
              We still refinish natural wood with the same craftsmanship that built our name. But now we also
              offer a revolutionary composite option for homeowners who want beauty without the burden.
            </p>
            <p>
              Our composite fence and deck installations use Compozen® — the industry-leading composite material
              designed for Utah&apos;s extreme climate. This dual offering gives homeowners something powerful: <strong className="text-stone-800">choice without compromise.</strong>
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-stone-200 text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-cedar-50 text-cedar-700 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-stone-900 mb-3">Restore What You Love</h3>
              <p className="text-stone-600">Expert refinishing that revives your existing wood fence or deck to its former glory.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-compozen-200 text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-compozen-50 text-compozen-700 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-stone-900 mb-3">Upgrade to Last Decades</h3>
              <p className="text-stone-600">Revolutionary Compozen® composite — built for 25+ years of beauty without maintenance. The ultimate composite fence and deck solution.</p>
            </div>
          </div>
          <p className="text-center text-stone-500 mt-6 text-lg">
            Either way, you&apos;re choosing a company that understands both worlds.
          </p>
        </div>
      </section>

      {/* Where We Stand Today */}
      <section className="section-padding bg-gradient-to-br from-stone-900 to-alpine-950 text-white">
        <div className="section-container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8">Where We Stand Today</h2>
          <p className="text-lg text-stone-200 leading-relaxed mb-10 max-w-3xl mx-auto">
            Alpine Fence &amp; Deck is now Utah&apos;s premier transformation company — serving 94 areas across the
            Wasatch Front with a blend of craftsmanship, engineering, and homeowner psychology that no one else
            in the market brings together.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { value: `${COMPANY.yearsExperience}+`, label: 'Years in Business' },
              { value: '94', label: 'Cities Served' },
              { value: '25yr', label: 'Compozen® Performance' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/10 rounded-xl p-6">
                <div className="text-3xl font-heading font-bold text-compozen-400 mb-1">{stat.value}</div>
                <div className="text-sm text-stone-300">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-stone-300 leading-relaxed text-lg">
              We don&apos;t just build fences and decks.<br />
              We build <strong className="text-white">certainty</strong>, <strong className="text-white">longevity</strong>,
              and <strong className="text-white">spaces people are proud to come home to</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="section-container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold text-alpine-900 mb-4">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-stone-600 text-lg mb-8">
            Whether you want to restore what you love or upgrade to something built to last — we&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-compozen text-lg">
              Request a Free Estimate
            </Link>
            <a href={COMPANY.phoneHref} className="btn-secondary text-lg">
              Call {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
