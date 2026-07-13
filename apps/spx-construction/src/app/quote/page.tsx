import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Get a bid',
  description: 'Tell us about the addition, basement, or walkout you have in mind. We respond within one business day.',
};

export default function QuotePage() {
  return (
    <section className="container-site py-20 md:py-28 grid lg:grid-cols-12 gap-16">
      <div className="lg:col-span-5 space-y-6">
        <div className="tag text-signal-600">Get a bid</div>
        <h1 className="h-display text-4xl md:text-6xl text-iron-950 leading-tight">
          Tell us what <br /> you&rsquo;re building.
        </h1>
        <p className="text-iron-500 leading-relaxed">
          The more we know up front — the house, the scope, the timeline — the more useful the
          first site walk becomes.
        </p>
        <p className="text-iron-400 text-sm leading-relaxed">
          A builder reads every request. Expect a response within one business day.
        </p>
      </div>
      <div className="lg:col-span-7 bg-concrete-100 p-8 md:p-12 border border-iron-200 shadow-plate">
        <QuoteForm />
      </div>
    </section>
  );
}
