import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { Vehicle, heroSrc } from '@/data/fleet';

export default function FleetCard({ v, index }: { v: Vehicle; index: number }) {
  return (
    <Link
      href={`/fleet/${v.slug}`}
      className={clsx('group card relative block overflow-hidden', index === 0 && 'lg:col-span-2 lg:row-span-2')}
    >
      <div className={clsx('relative w-full', index === 0 ? 'aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[640px]' : 'aspect-[4/3]')}>
        <Image
          src={heroSrc(v)}
          alt={v.gallery[0].alt}
          fill
          sizes={index === 0 ? '(min-width:1024px) 66vw, 100vw' : '(min-width:1024px) 33vw, 100vw'}
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
          priority={index === 0}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/75 to-obsidian-950/10" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <div className="flex items-center gap-3">
          <span className="font-display text-xl text-champagne-500">{v.numeral}</span>
          <span className="h-px w-8 bg-champagne-500/60" />
          <span className="eyebrow">{v.role}</span>
        </div>
        <h3 className={clsx('h-display mt-3', index === 0 ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl')}>
          {v.make} <span className="italic text-bone-200">{v.model}</span>
        </h3>
        <p className="mt-3 max-w-lg text-sm text-obsidian-200">{v.oneLiner}</p>
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
          {v.chauffeur && <span className="eyebrow-muted !text-champagne-300">Self-drive or chauffeured</span>}
          <span className="btn-ghost">
            View allocation
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
