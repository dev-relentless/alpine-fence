import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Start a conversation',
  description: 'Tell us about the residence, renovation, or addition you have in mind. A principal responds within one business day.',
};

export default function QuotePage() {
  return (
    <section className="container-site py-24 md:py-32 grid lg:grid-cols-12 gap-16">
      <div className="lg:col-span-5 space-y-6">
        <div className="eyebrow">Start a conversation</div>
        <h1 className="h-display text-4xl md:text-6xl text-carbon-950 leading-tight">
          Tell us what
          <br />
          <span className="italic text-carbon-500">you&rsquo;re imagining.</span>
        </h1>
        <p className="text-carbon-500 leading-relaxed">
          The more we know up front — the house, the ambition, the timing — the more
          useful the first walk-through becomes.
        </p>
        <p className="text-carbon-400 text-sm leading-relaxed">
          A principal reads every note. Expect a response within one business day.
        </p>
      </div>
      <div className="lg:col-span-7 bg-bone-100 p-8 md:p-12 border border-bone-200 shadow-gallery">
        <QuoteForm />
      </div>
    </section>
  );
}
