import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';
import { BRAND } from '@/data/brand';

export const metadata: Metadata = {
  title: 'Start a project',
  description: 'Tell us the space, what it should do, and when — we walk the yard and leave you with a written proposal: drawings, materials, and price.',
  alternates: { canonical: `${BRAND.url}/quote` },
};

export default function QuotePage() {
  return (
    <section className="container-site py-20 md:py-28 grid lg:grid-cols-12 gap-16">
      <div className="lg:col-span-5 space-y-6">
        <div className="tag">Start a Project</div>
        <h1 className="h-display text-5xl md:text-6xl text-ink-950 leading-[1.0]">
          Begin with a walk of the yard.
        </h1>
        <p className="text-ink-600 leading-relaxed">
          Tell us what you&rsquo;re picturing and where. We&rsquo;ll walk the space, map the sun,
          and leave you with a written proposal — drawings, materials, and price, options priced
          apart. It costs nothing and obliges nothing.
        </p>
        <p className="text-ink-500 text-[15px] leading-relaxed">
          Prefer to talk? Call or text{' '}
          <a href={`tel:${BRAND.phoneRaw}`} className="underline decoration-brass-400 underline-offset-4 text-ink-800 tabular-nums">{BRAND.phone}</a>.
          Scheduling answers are fastest by phone.
        </p>
        <ul className="pt-4 space-y-3 text-[15px] text-ink-700">
          {['Response within one business day', 'On-site visit and sun mapping', 'Drawings, materials & price in writing', 'Permits and engineering handled'].map((t) => (
            <li key={t} className="flex items-start gap-2.5">
              <span className="mt-2.5 h-px w-3.5 shrink-0 bg-brass-400" />{t}
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:col-span-7 bg-bone-100 p-8 md:p-12 border border-bone-200 shadow-plate">
        <QuoteForm />
      </div>
    </section>
  );
}
