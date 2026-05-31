import Link from 'next/link';
import { BRAND } from '@/data/brand';

/**
 * Brand mark for Harlow & Stone. Renders the H&S monogram + typographic
 * wordmark lockup. Variants: 'dark' (on light surfaces) | 'light' (on dark).
 */
export default function Logo({
  variant = 'dark',
  size = 'md',
}: {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}) {
  const colorClass = variant === 'light' ? 'text-ivory-50' : 'text-stone-900';
  const accentClass = variant === 'light' ? 'text-bronze-300' : 'text-bronze-500';
  const dim = size === 'lg' ? 'h-14 w-14' : size === 'sm' ? 'h-9 w-9' : 'h-11 w-11';
  const textSize = size === 'lg' ? 'text-2xl' : size === 'sm' ? 'text-base' : 'text-xl';
  const filter = variant === 'light' ? 'invert brightness-0 brightness-200 contrast-100' : '';

  return (
    <Link href="/" aria-label={BRAND.name} className="inline-flex items-center gap-3 group">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/harlow/logo.png"
        alt=""
        className={`${dim} object-contain transition-transform duration-700 group-hover:-rotate-2 ${filter}`}
      />
      <span className={`font-display ${textSize} tracking-display-tight ${colorClass} leading-none`}>
        Harlow <span className={`italic ${accentClass}`}>&amp;</span> Stone
      </span>
    </Link>
  );
}
