import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { BRAND } from '@/data/brand';

/**
 * Brand mark: the arch, sun, and pergola motif shared across the Pergola
 * Experts family, with the state wordmark set in the display serif. Inline
 * SVG so no asset is needed — a state with a production raster logo sets
 * `logo` in its generator config and the image is used instead of the mark.
 */
export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden className={className}>
      <path d="M6 58 V34 a26 26 0 0 1 52 0 V58 Z" fill="#f7efda" stroke="#52391f" strokeWidth="1.5" />
      <circle cx="32" cy="30" r="12" fill="#ecb84a" opacity="0.6" />
      <g fill="none" stroke="#52391f" strokeWidth="2.8" strokeLinecap="round">
        <path d="M12 26 H52" />
        <path d="M18 26 V52 M46 26 V52" />
        <path d="M19 20.5 h26" strokeWidth="2.2" />
        <path d="M22 26 v-4 M28 26 v-4 M34 26 v-4 M40 26 v-4" strokeWidth="1.6" />
      </g>
      <path d="M4 58 H60" stroke="#b04a2f" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

/** Mark or production logo, sized to match. `heightClass` is a Tailwind h-* class. */
export function BrandMark({
  heightClass,
  className,
  priority = false,
}: {
  heightClass: string;
  className?: string;
  priority?: boolean;
}) {
  const logo = BRAND.logo;
  if (logo) {
    return (
      <Image
        src={logo.src}
        alt=""
        width={logo.width}
        height={logo.height}
        priority={priority}
        className={clsx(heightClass, 'w-auto', className)}
      />
    );
  }
  return <Mark className={clsx(heightClass, 'aspect-square', className)} />;
}

export default function Logo({
  variant = 'dark',
  size = 'md',
}: {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}) {
  const color = variant === 'light' ? 'text-linen-50' : 'text-timber-950';
  const dim = size === 'lg' ? 'h-14' : size === 'sm' ? 'h-9' : 'h-11';
  const text = size === 'lg' ? 'text-2xl' : size === 'sm' ? 'text-base' : 'text-xl';
  return (
    <Link href="/" aria-label={BRAND.name} className={clsx('inline-flex items-center gap-3 leading-none', color)}>
      <BrandMark heightClass={dim} className="shrink-0" priority={size === 'md'} />
      <span className={clsx('font-display font-semibold whitespace-nowrap', text)}>
        {BRAND.name}
      </span>
    </Link>
  );
}
