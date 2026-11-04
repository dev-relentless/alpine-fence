import Link from 'next/link';
import clsx from 'clsx';
import { BRAND } from '@/data/brand';

/**
 * Brand mark: a beam with rafter ends over two posts — a pergola reduced
 * to its silhouette. Inline SVG so it needs no asset file and inherits
 * color. Swap for the production logo in one place when it arrives.
 */
export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={className} fill="currentColor">
      {/* rafter ends */}
      <rect x="2" y="4" width="3" height="4" />
      <rect x="8.75" y="4" width="3" height="4" />
      <rect x="15.5" y="4" width="3" height="4" />
      <rect x="22.25" y="4" width="3" height="4" />
      <rect x="29" y="4" width="3" height="4" />
      {/* beam */}
      <rect x="0" y="9.5" width="32" height="3.5" />
      {/* posts */}
      <rect x="6" y="13" width="3.5" height="17" />
      <rect x="22.5" y="13" width="3.5" height="17" />
      {/* brass peg */}
      <rect x="14.75" y="15" width="2.5" height="2.5" className="text-brass-400" fill="currentColor" />
    </svg>
  );
}

export default function Logo({
  variant = 'dark',
  size = 'md',
  showTagline = false,
}: {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}) {
  const color = variant === 'light' ? 'text-bone-50' : 'text-ink-950';
  const markDim = size === 'lg' ? 'h-10 w-10' : size === 'sm' ? 'h-7 w-7' : 'h-8 w-8';
  const textSize = size === 'lg' ? 'text-2xl' : size === 'sm' ? 'text-base' : 'text-lg';

  return (
    <Link href="/" aria-label={BRAND.name} className={clsx('inline-flex items-center gap-3 leading-none', color)}>
      <Mark className={clsx(markDim, 'shrink-0')} />
      <span className="flex flex-col">
        <span className={clsx('font-display font-semibold tracking-display whitespace-nowrap', textSize)}>
          American Timber Shade
        </span>
        {showTagline && (
          <span className={clsx('tag mt-1.5', variant === 'light' ? '!text-bone-100/60' : '!text-ink-500')}>
            {BRAND.tagline}
          </span>
        )}
      </span>
    </Link>
  );
}
