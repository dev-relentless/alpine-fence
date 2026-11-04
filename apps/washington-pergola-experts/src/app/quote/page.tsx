import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Request a consultation',
  description: 'Tell us the space, the structure, and the timeline — we walk the yard and leave you with a written proposal: drawings, materials, and price.',
};

export default function QuotePage() {
  return (
    <section className="container-patio py-20 md:py-28 grid lg:grid-cols-12 gap-16">
      <div className="lg:col-span-5 space-y-6">
        <div className="tag">Consultations</div>
        <h1 className="h-display text-4xl md:text-6xl text-timber-950 leading-tight">
          Begin with a walk of the yard.
        </h1>
        <p className="text-timber-600 leading-relaxed">
          Tell us what you&rsquo;re picturing and where. We&rsquo;ll walk the yard, map the sun,
          and leave you with a written proposal — drawings, materials, and price. It costs
          nothing and obliges nothing.
        </p>
        <p className="text-timber-500 text-[15px] leading-relaxed">
          Prefer to speak with someone? Telephone or text — scheduling answers are fastest by phone.
        </p>
      </div>
      <div className="lg:col-span-7 bg-linen-100 p-8 md:p-12 border border-timber-200 shadow-plate">
        <QuoteForm />
      </div>
    </section>
  );
}
