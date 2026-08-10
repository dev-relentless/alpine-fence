import Link from 'next/link';
import { BRAND } from '@/data/brand';

/**
 * Brand mark for Harlow Landscapes. Monogram + a single, unhyphenated
 * wordmark set in the display serif. Variants: 'dark' (on light) | 'light' (on dark).
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
  const dim = size === 'lg' ? 'h-10 w-10' : size === 'sm' ? 'h-7 w-7' : 'h-9 w-9';
  const textSize = size === 'lg' ? 'text-[1.4rem]' : size === 'sm' ? 'text-sm' : 'text-lg';
  const markSrc = variant === 'light' ? '/harlow/monogram-light.svg' : '/harlow/monogram.svg';

  return (
    <Link
      href="/"
      aria-label={BRAND.name}
      className="inline-flex items-center gap-3 group leading-none"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={markSrc}
        alt=""
        className={`${dim} object-contain shrink-0`}
      />
      {showWordmark && (
        <span
          className={`font-display font-medium ${textSize} tracking-display ${colorClass} leading-none whitespace-nowrap`}
        >
          Harlow Landscapes
        </span>
      )}
    </Link>
  );
}
