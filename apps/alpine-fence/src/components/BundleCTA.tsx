import Link from 'next/link';

/**
 * BundleCTA — cross-sell component shown on both fence/deck and landscape pages.
 *
 * Drives the strategic flywheel: every fence/deck visitor sees a landscape
 * upsell, every landscape visitor sees a fence/deck upsell. Built as one
 * component so the bundle pricing message stays consistent everywhere.
 *
 * Variants:
 *   - 'to-landscape' → fence/deck pages cross-sell to landscape
 *   - 'to-fence-deck' → landscape pages cross-sell to fence/deck
 *   - 'general'      → both directions, used on the homepage
 */

interface BundleCTAProps {
  variant?: 'to-landscape' | 'to-fence-deck' | 'general';
  className?: string;
}

const COPY = {
  'to-landscape': {
    eyebrow: 'Smarter Together',
    title: 'Add the yard to your',
    titleAccent: 'fence or deck quote.',
    body: 'One mobilization. One crew. One coordinated schedule. Bundle sod, sprinklers, a retaining wall, or a paver patio with your fence or deck and we handle the whole property as a single project.',
    primaryHref: '/landscaping',
    primaryLabel: 'Explore Yard & Landscape',
    secondaryHref: '/quote?bundle=true',
    secondaryLabel: 'Request a Bundled Estimate',
  },
  'to-fence-deck': {
    eyebrow: 'Smarter Together',
    title: 'Pair the yard with a',
    titleAccent: 'fence or deck.',
    body: 'The crews installing your sod, walls, or patio also build 1,700+ Utah fences and decks. Bundle the fence or deck into your landscape project for a single coordinated build under one warranty.',
    primaryHref: '/services',
    primaryLabel: 'Browse Fence & Deck Services',
    secondaryHref: '/quote?bundle=true',
    secondaryLabel: 'Request a Bundled Estimate',
  },
  general: {
    eyebrow: 'Bundle the Whole Property',
    title: 'One crew. One project.',
    titleAccent: 'One coordinated yard.',
    body: 'Combine fence, deck, and landscape into a single bundled estimate — one project manager, one warranty, one invoice. Run by the same Alpine crew leads since 2009.',
    primaryHref: '/quote?bundle=true',
    primaryLabel: 'Request a Bundled Estimate',
    secondaryHref: '/landscaping',
    secondaryLabel: 'See Yard & Landscape',
  },
} as const;

export default function BundleCTA({ variant = 'general', className = '' }: BundleCTAProps) {
  const c = COPY[variant];

  return (
    <section
      className={`section-padding bg-gradient-to-br from-forest-950 via-forest-900 to-forest-800 text-white ${className}`}
    >
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-bronze-300">
            {c.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-6 tracking-tight text-balance">
            {c.title} <span className="italic font-light text-bronze-300">{c.titleAccent}</span>
          </h2>
          <p className="text-stone-200 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">{c.body}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link href={c.primaryHref} className="btn-primary text-lg">
              {c.primaryLabel}
            </Link>
            <Link
              href={c.secondaryHref}
              className="btn-secondary border-white/40 text-white hover:bg-white/10 text-lg"
            >
              {c.secondaryLabel}
            </Link>
          </div>

          <p className="text-xs uppercase tracking-[0.22em] text-bronze-300/80">
            One crew · One warranty · One invoice
          </p>
        </div>
      </div>
    </section>
  );
}
