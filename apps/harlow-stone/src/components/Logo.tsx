import Link from 'next/link';
import { BRAND } from '@/data/brand';

/**
 * Brand mark for Harlow & Stone. Renders the H&S logo + typographic
 * wordmark lockup. Variants: 'dark' (on light surfaces) | 'light' (on dark).
 */
export default function Logo({
  variant = 'dark',
  size = 'md',
  showWordmark = true,
}: {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
}) {
  const colorClass = variant === 'light' ? 'text-ivory-50' : 'text-stone-900';
  const accentClass = variant === 'light' ? 'text-bronze-300' : 'text-bronze-500';
  const dim = size === 'lg' ? 'h-10 w-10' : size === 'sm' ? 'h-7 w-7' : 'h-9 w-9';
  const textSize = size === 'lg' ? 'text-[1.45rem]' : size === 'sm' ? 'text-sm' : 'text-lg';
  const filter = variant === 'light' ? 'brightness-0 invert' : '';

  return (
    <Link
      href="/"
      aria-label={BRAND.name}
      className="inline-flex items-center gap-2.5 group leading-none"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/harlow/logo.png"
        alt=""
        className={`${dim} object-contain shrink-0 ${filter}`}
      />
      {showWordmark && (
        <span
          className={`font-display ${textSize} tracking-display-tight ${colorClass} leading-none whitespace-nowrap`}
        >
          Harlow <span className={`italic ${accentClass} font-normal`}>&amp;</span> Stone
        </span>
      )}
    </Link>
  );
}
