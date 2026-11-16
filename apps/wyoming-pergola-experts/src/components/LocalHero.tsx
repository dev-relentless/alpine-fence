import Image from 'next/image';
import clsx from 'clsx';
import { BRAND } from '@/data/brand';

/**
 * Full-bleed local landscape — the one photograph on each state site that
 * is genuinely of that state. Children sit over a warm dark gradient.
 */
export default function LocalHero({
  children,
  className,
  priority = true,
  minHeight = 'min-h-[82vh]',
}: {
  children: React.ReactNode;
  className?: string;
  priority?: boolean;
  minHeight?: string;
}) {
  return (
    <section className={clsx('relative overflow-hidden bg-timber-950 text-linen-50', minHeight, className)}>
      <Image
        src={BRAND.local.hero}
        alt={BRAND.local.alt}
        fill
        priority={priority}
        quality={88}
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-timber-950/70 via-timber-950/35 to-timber-950/85"
      />
      <div className="relative flex h-full flex-col">{children}</div>
      <div className="absolute bottom-4 right-5 tag !text-linen-100/55 !tracking-[0.22em] hidden sm:block">
        {BRAND.local.place}
      </div>
    </section>
  );
}
