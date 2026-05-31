import Link from 'next/link';
import Image from 'next/image';
import { BRAND } from '@/data/brand';

/**
 * Brand mark for Harlow & Stone. Drop the production logo at
 * `public/harlow/logo.svg` (and optional `logo-dark.svg`) and this
 * component will render it. Falls back to a typographic wordmark.
 */
export default function Logo({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  const src = variant === 'light' ? '/harlow/logo-light.svg' : '/harlow/logo.svg';
  const colorClass = variant === 'light' ? 'text-ivory-50' : 'text-stone-900';

  return (
    <Link href="/" aria-label={BRAND.name} className="inline-flex items-center gap-3 group">
      {/* When the logo file is present, Next/Image will serve it.
          The wordmark below is the typographic fallback / supporting lockup. */}
      <span className="relative h-9 w-9 shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          className="h-9 w-9 object-contain"
          onError={(e) => { (e.currentTarget.style.display = 'none'); }}
        />
      </span>
      <span className={`font-display text-xl tracking-display-tight ${colorClass}`}>
        Harlow <span className="text-bronze-500">&amp;</span> Stone
      </span>
    </Link>
  );
}

// Suppress unused import warning when image fallback handler is removed in future
void Image;
