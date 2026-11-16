import type { Metadata } from 'next';
import BidForm from '@/components/BidForm';

export const metadata: Metadata = {
  title: 'Get a bid',
  description: 'Tell us the project, the site, and the timeline — we walk the ground and put a bid in writing within one business day of the site visit.',
};

export default function BidPage() {
  return (
    <section className="container-slab py-20 md:py-28 grid lg:grid-cols-12 gap-16">
      <div className="lg:col-span-5 space-y-6">
        <div className="tag text-signal-600">Bids</div>
        <h1 className="h-display text-4xl md:text-6xl text-iron-950 leading-tight">
          Project, site, <br /> timeline. Go.
        </h1>
        <p className="text-iron-500 leading-relaxed">
          Tell us what you&rsquo;re building and where. We&rsquo;ll walk the site, talk through
          options, and put scope, spec, and price in writing — no pressure, no games.
        </p>
        <p className="text-iron-400 text-sm leading-relaxed">
          In a hurry? Call or text — scheduling answers are fastest by phone.
        </p>
      </div>
      <div className="lg:col-span-7 bg-cement-100 p-8 md:p-12 border border-iron-200 shadow-slab">
        <BidForm />
      </div>
    </section>
  );
}
