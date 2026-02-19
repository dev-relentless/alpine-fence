import { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/data/cities';
import QuoteForm from '@/components/QuoteForm';
import HOACheckerForm from '@/components/HOACheckerForm';

export const metadata: Metadata = {
  title: 'HOA Compliance Center | Pre-Approved Fence & Deck Designs',
  description: 'Navigate HOA regulations with confidence. Pre-approved Compozen® fence and deck designs for Utah HOAs. Guaranteed approval or we redesign free.',
};

const hoaFaqs = [
  {
    q: 'What if my HOA rejects the fence/deck design?',
    a: 'We guarantee HOA approval on every Compozen® installation. If your HOA rejects our submitted design, we\'ll redesign and resubmit at no additional cost until approved.',
  },
  {
    q: 'How do you know my HOA\'s requirements?',
    a: 'We maintain a database of HOA regulations for hundreds of neighborhoods across Utah\'s Wasatch Front. We verify requirements directly with your HOA before submitting designs.',
  },
  {
    q: 'Do Compozen® materials meet HOA standards?',
    a: 'Yes. Compozen® composite materials are approved by the vast majority of Utah HOAs. Their premium appearance often exceeds minimum HOA standards.',
  },
  {
    q: 'Can you handle the HOA approval paperwork?',
    a: 'Absolutely. We prepare all architectural review submissions, including detailed design specifications, material samples, and color swatches. We handle the entire process.',
  },
  {
    q: 'How long does HOA approval take?',
    a: 'Most HOA approvals take 2-4 weeks. With our pre-approved designs and established HOA relationships, we often achieve faster turnaround.',
  },
  {
    q: 'What if I need a variance from HOA rules?',
    a: 'Our team has experience obtaining variances for custom designs. We\'ll prepare your variance request with supporting documentation and attend board meetings if needed.',
  },
];

export default function HOACompliancePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient text-white">
        <div className="section-container py-16 lg:py-24">
          <div className="max-w-3xl">
            <span className="badge-compozen mb-6">HOA Peace of Mind</span>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6 leading-tight">
              HOA Compliance Center
            </h1>
            <p className="text-lg text-stone-200 mb-8 leading-relaxed">
              Navigate HOA regulations with confidence. Our pre-approved Compozen® designs and 
              expert HOA liaison services guarantee a smooth approval process for your fence or deck project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#checker" className="btn-compozen">
                Check Your HOA Requirements ↓
              </a>
              <Link href="/quote?service=hoa" className="btn-secondary !border-white/30 !text-white hover:!bg-white/10">
                Talk to an HOA Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="bg-compozen-50 border-b border-compozen-200">
        <div className="section-container py-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 bg-compozen-100 rounded-2xl flex items-center justify-center shrink-0">
              <svg className="w-8 h-8 text-compozen-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-heading font-bold text-stone-900">100% HOA Approval Guarantee</h2>
              <p className="text-stone-600">
                On every Compozen® installation: if your HOA doesn&apos;t approve our design, we redesign free until they do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <h2 className="text-3xl font-heading font-bold text-alpine-900 mb-12 text-center">
            Our HOA Compliance Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Address Lookup', desc: 'Enter your address and we\'ll identify your HOA and its specific fence/deck requirements.', icon: '🔍' },
              { step: '2', title: 'Requirements Review', desc: 'We research height limits, style restrictions, material requirements, and setback rules.', icon: '📋' },
              { step: '3', title: 'Pre-Approved Design', desc: 'Choose from designs already approved by your HOA, or we\'ll create a compliant custom design.', icon: '✏️' },
              { step: '4', title: 'Submission & Approval', desc: 'We handle all paperwork, submissions, and HOA communications until you\'re approved.', icon: '✅' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-3xl mb-4">{item.icon}</div>
                <div className="w-10 h-10 bg-alpine-100 text-alpine-700 rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-heading font-bold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-sm text-stone-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOA Checker */}
      <section id="checker" className="section-padding bg-alpine-50">
        <div className="section-container max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <h2 className="text-2xl font-heading font-bold text-alpine-900 mb-2 text-center">
              Check Your HOA Requirements
            </h2>
            <p className="text-stone-600 text-center mb-8">
              Enter your address and we&apos;ll look up your HOA&apos;s fence and deck regulations.
            </p>
            <HOACheckerForm />
          </div>
        </div>
      </section>

      {/* Common HOA requirements */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <h2 className="text-3xl font-heading font-bold text-alpine-900 mb-4 text-center">
            Common Utah HOA Fence & Deck Requirements
          </h2>
          <p className="text-stone-600 text-center mb-12 max-w-2xl mx-auto">
            While every HOA is different, here are common requirements we encounter across Utah neighborhoods.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Height Restrictions', items: ['Front yard: 3-4 feet maximum', 'Side/back yard: 6 feet maximum', 'Corner lots: special visibility requirements', 'Deck railing: 36-42 inches'] },
              { title: 'Material Requirements', items: ['Pre-approved materials list', 'No chain link in front yards', 'Composite materials often preferred', 'Color must match community standards'] },
              { title: 'Setback & Placement', items: ['Property line setback: 1-3 feet', 'Utility easement clearance', 'Corner lot sight triangle', 'Pool fence: self-closing gates required'] },
            ].map((section) => (
              <div key={section.title} className="card p-6">
                <h3 className="font-heading font-bold text-stone-900 mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-stone-600">
                      <svg className="w-4 h-4 text-alpine-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-alpine-50">
        <div className="section-container max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-alpine-900 mb-12 text-center">
            HOA Compliance FAQ
          </h2>
          <div className="space-y-6">
            {hoaFaqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 border border-stone-200">
                <h3 className="font-heading font-bold text-stone-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-alpine-900">
        <div className="section-container max-w-4xl mx-auto">
          <QuoteForm defaultService="hoa" />
        </div>
      </section>
    </>
  );
}
