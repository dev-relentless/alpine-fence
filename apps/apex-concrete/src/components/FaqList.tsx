import type { Faq } from '@/data/faq';

/** Zero-JS accordion built on <details>. */
export default function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-basalt-200 border-y border-basalt-200">
      {items.map((f) => (
        <details key={f.q} className="group">
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-left font-semibold text-basalt-950 list-none [&::-webkit-details-marker]:hidden">
            <span>{f.q}</span>
            <span className="relative h-5 w-5 shrink-0" aria-hidden>
              <span className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-flag-500" />
              <span className="absolute left-1/2 top-0 h-5 w-0.5 -translate-x-1/2 bg-flag-500 transition-transform group-open:scale-y-0" />
            </span>
          </summary>
          <p className="pb-6 pr-10 text-basalt-600 leading-relaxed">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export const faqSchema = (items: Faq[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});
