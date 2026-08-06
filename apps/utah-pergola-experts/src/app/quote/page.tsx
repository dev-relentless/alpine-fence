import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Get a quote',
  description: 'Tell us the space, the structure, and the timeline — we walk the yard and put a quote in writing within one business day of the visit.',
};

export default function QuotePage() {
  return (
    <section className="container-patio py-20 md:py-28 grid lg:grid-cols-12 gap-16">
      <div className="lg:col-span-5 space-y-6">
        <div className="tag text-sky-600">Quotes</div>
        <h1 className="h-display text-4xl md:text-6xl text-timber-950 leading-tight">
          Space, structure, <br /> timeline. Go.
        </h1>
        <p className="text-timber-500 leading-relaxed">
          Tell us what you&rsquo;re picturing and where. We&rsquo;ll walk the yard, map the sun,
          and put drawings, materials, and price in writing — no pressure, no games.
        </p>
        <p className="text-timber-400 text-sm leading-relaxed">
          In a hurry? Call or text — scheduling answers are fastest by phone.
        </p>
      </div>
      <div className="lg:col-span-7 bg-linen-100 p-8 md:p-12 border border-timber-200 shadow-pergola">
        <QuoteForm />
      </div>
    </section>
  );
}
