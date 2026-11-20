import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { BRAND } from '@/data/brand';
import logoHorizontal from '../../public/ats/brand/logo-horizontal.png';
import logoHorizontalReversed from '../../public/ats/brand/logo-horizontal-reversed.png';

/**
 * Horizontal brand lockup. Source files live in /public/ats/brand (web) and
 * /brand/american-timber-shade/logos (originals).
 */
export default function Logo({
  variant = 'dark',
  size = 'md',
  priority = false,
}: {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  priority?: boolean;
}) {
  const src = variant === 'light' ? logoHorizontalReversed : logoHorizontal;
  const height = size === 'lg' ? 'h-16' : size === 'sm' ? 'h-9' : 'h-12';

  return (
    <Link href="/" aria-label={BRAND.name} className="inline-flex items-center leading-none">
      <Image
        src={src}
        alt={BRAND.name}
        priority={priority}
        sizes="(min-width: 1024px) 260px, 190px"
        className={clsx(height, 'w-auto')}
      />
    </Link>
  );
}
