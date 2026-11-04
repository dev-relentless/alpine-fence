import Image from 'next/image';
import clsx from 'clsx';
import { photoExists } from '@/lib/photos';

interface PhotoProps {
  /** Public path, e.g. /ats/hero.jpg */
  src: string;
  alt: string;
  /** Short caption shown on the placeholder until the file exists. */
  label?: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  /** Placeholder tone when the slot sits on a dark section. */
  tone?: 'light' | 'dark';
}

/**
 * A photograph slot. Server component: checks public/ at build time and
 * renders `next/image` when the file exists, otherwise a quiet cedar
 * placeholder naming the shot. Drop the file in and rebuild — no code change.
 *
 * The wrapper is `relative` and must be given an aspect ratio or height.
 */
export default function Photo({
  src,
  alt,
  label,
  className,
  imgClassName,
  sizes = '100vw',
  priority = false,
  quality = 88,
  tone = 'light',
}: PhotoProps) {
  if (photoExists(src)) {
    return (
      <div className={clsx('relative overflow-hidden', className)}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          quality={quality}
          className={clsx('object-cover', imgClassName)}
        />
      </div>
    );
  }

  const file = src.split('/').pop();
  return (
    <div
      data-placeholder={src}
      className={clsx(
        'relative overflow-hidden',
        tone === 'dark' ? 'bg-cedar-depth' : 'bg-gradient-to-br from-bone-200 via-cedar-100 to-cedar-200',
        className
      )}
      role="img"
      aria-label={alt}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(100deg, rgba(102,57,38,0.12) 0px, rgba(102,57,38,0.12) 1px, transparent 1px, transparent 9px)',
        }}
      />
      <div aria-hidden className="absolute inset-4 border border-cedar-700/20" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <span className={clsx('tag', tone === 'dark' ? '!text-bone-100/70' : '!text-cedar-800/80')}>Photograph</span>
        {label && (
          <span className={clsx('h-display mt-2 text-lg md:text-xl', tone === 'dark' ? 'text-bone-50' : 'text-cedar-950')}>
            {label}
          </span>
        )}
        <span className={clsx('mt-3 font-mono text-[10px] tracking-wider', tone === 'dark' ? 'text-bone-100/50' : 'text-cedar-800/60')}>
          public{src}
        </span>
        <span className="sr-only">{file}</span>
      </div>
    </div>
  );
}
