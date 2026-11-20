'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import clsx from 'clsx';

export interface GalleryImage { src: string; alt: string }

export default function Gallery({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (d: number) => setActive((a) => (a === null ? a : (a + d + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, close, step]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActive(i)}
            className={clsx(
              'group relative overflow-hidden border border-obsidian-800 bg-obsidian-900',
              i === 0 ? 'col-span-2 aspect-[16/10] md:col-span-2 md:row-span-2 md:aspect-auto' : 'aspect-[4/3]',
            )}
            aria-label={`Open photo ${i + 1}: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes={i === 0 ? '(min-width:768px) 50vw, 100vw' : '(min-width:768px) 25vw, 50vw'}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-obsidian-950/95 p-4 md:p-10"
          onClick={close}
        >
          <div className="relative h-full w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <Image src={images[active].src} alt={images[active].alt} fill sizes="100vw" className="object-contain" priority />
          </div>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 text-center text-xs tracking-wide text-obsidian-300">
            {active + 1} / {images.length} · {images[active].alt}
          </p>
          <button type="button" onClick={close} aria-label="Close" className="absolute right-5 top-5 p-2 text-bone-100 hover:text-champagne-300">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 6l12 12M6 18L18 6" /></svg>
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous" className="absolute left-3 top-1/2 -translate-y-1/2 p-3 text-bone-100 hover:text-champagne-300 md:left-6">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 6l-6 6 6 6" /></svg>
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next" className="absolute right-3 top-1/2 -translate-y-1/2 p-3 text-bone-100 hover:text-champagne-300 md:right-6">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 6l6 6-6 6" /></svg>
          </button>
        </div>
      )}
    </>
  );
}
