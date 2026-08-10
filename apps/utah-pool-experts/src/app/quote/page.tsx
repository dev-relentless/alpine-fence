import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Request an estimate',
  description: 'Tell us about your pool — type, condition, and what you need handled — and we\'ll put a service plan and price in writing. Estimates are free.',
};

export default function QuotePage() {
  return (
    <section className="container-deck py-20 md:py-28 grid lg:grid-cols-12 gap-16">
      <div className="lg:col-span-5 space-y-6">
        <div className="tag">Estimates</div>
        <h1 className="h-display text-4xl md:text-6xl text-pool-950 leading-tight">
          Get your free estimate today.
        </h1>
        <p className="text-pool-600 leading-relaxed">
          Tell us about the pool and what you want handled. We&rsquo;ll follow up with
          a service plan and price in writing — no pressure, no obligation.
        </p>
        <p className="text-pool-500 text-[15px] leading-relaxed">
          Prefer to speak with someone? Call or text — scheduling answers are fastest by phone.
        </p>
      </div>
      <div className="lg:col-span-7 card-tile p-8 md:p-12">
        <QuoteForm />
      </div>
    </section>
  );
}
