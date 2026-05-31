import { COMPANY } from '@/data/cities';

/**
 * AnniversaryBadge — celebrates the 20-year milestone (founded 2009).
 *
 * The 20-year anniversary is a brand-trust asset: it differentiates Alpine
 * from new fence companies and underwrites the credibility of the new
 * Yard & Landscape line. Drop into hero sections, page footers, or beside
 * pricing CTAs to anchor "we've been doing this a long time."
 *
 * Variants:
 *   - 'pill'   → compact inline badge for hero/header use
 *   - 'card'   → larger framed card for testimonials/about sections
 */

interface AnniversaryBadgeProps {
  variant?: 'pill' | 'card';
  className?: string;
}

export default function AnniversaryBadge({ variant = 'pill', className = '' }: AnniversaryBadgeProps) {
  const years = COMPANY.yearsExperience;

  if (variant === 'card') {
    return (
      <div
        className={`inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-br from-compoxen-50 to-white border border-compoxen-200 shadow-sm ${className}`}
      >
        <div className="flex flex-col items-center justify-center w-16 h-16 rounded-full bg-alpine-900 text-white shrink-0">
          <span className="text-2xl font-heading font-bold leading-none">{years}</span>
          <span className="text-[10px] uppercase tracking-wider mt-0.5">Years</span>
        </div>
        <div className="text-left">
          <div className="text-xs uppercase tracking-[0.2em] text-compoxen-700 font-semibold mb-0.5">
            Utah Owned & Operated
          </div>
          <div className="font-heading font-bold text-stone-900 text-lg leading-tight">
            Trusted Since {COMPANY.founded}
          </div>
          <div className="text-xs text-stone-500 mt-0.5">1,700+ projects · Same family ownership</div>
        </div>
      </div>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-xs font-semibold tracking-[0.15em] uppercase ${className}`}
    >
      <svg className="w-3.5 h-3.5 text-compoxen-300" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
      <span>
        {years} Years · Utah Owned Since {COMPANY.founded}
      </span>
    </span>
  );
}
