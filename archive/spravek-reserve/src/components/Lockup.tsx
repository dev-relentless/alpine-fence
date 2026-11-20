import clsx from 'clsx';
import VMark from './VMark';
import { BRAND } from '@/data/brand';

/** SPRAVEK / —— RESERVE —— lockup. Horizontal for the header, stacked for footers and heroes. */
export default function Lockup({
  variant = 'horizontal',
  className,
  tagline = false,
  id = 'lockup',
}: {
  variant?: 'horizontal' | 'stacked';
  className?: string;
  tagline?: boolean;
  id?: string;
}) {
  if (variant === 'stacked') {
    return (
      <div className={clsx('flex flex-col items-center text-center', className)}>
        <VMark id={id} className="w-24 md:w-32" />
        <div className="mt-8 font-sans text-4xl font-semibold tracking-brand text-silver-gradient md:text-6xl">{BRAND.wordmark}</div>
        <div className="mt-4 flex items-center gap-5">
          <span className="rule-gold" />
          <span className="pl-[0.62em] font-sans text-sm font-medium tracking-reserve text-champagne-500 md:text-lg">{BRAND.sub}</span>
          <span className="rule-gold" />
        </div>
        {tagline && (
          <div className="mt-5 pl-[0.32em] font-sans text-[10px] font-medium uppercase tracking-tag text-obsidian-300 md:text-xs">{BRAND.tagline}</div>
        )}
      </div>
    );
  }

  return (
    <span className={clsx('inline-flex items-center gap-3', className)}>
      <VMark id={id} className="h-7 w-auto" />
      <span className="flex flex-col leading-none">
        <span className="font-sans text-[15px] font-semibold tracking-brand text-silver-gradient">{BRAND.wordmark}</span>
        <span className="mt-1 font-sans text-[9px] font-medium tracking-[0.5em] text-champagne-500">{BRAND.sub}</span>
      </span>
    </span>
  );
}
