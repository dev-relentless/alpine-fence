import type { FAQ } from '@/data/brand';

type Item = (typeof FAQ)[number];

export default function Faq({ items, withSchema = false }: { items: readonly Item[]; withSchema?: boolean }) {
  const schema = withSchema && {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
  return (
    <>
      {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />}
      <div className="divide-y divide-obsidian-800 border-y border-obsidian-800">
        {items.map((i) => (
          <details key={i.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left font-display text-xl text-bone-50 transition-colors hover:text-champagne-300 [&::-webkit-details-marker]:hidden">
              {i.q}
              <span className="relative h-4 w-4 shrink-0 text-champagne-500">
                <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
                <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current transition-transform group-open:scale-y-0" />
              </span>
            </summary>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-obsidian-300">{i.a}</p>
          </details>
        ))}
      </div>
    </>
  );
}
