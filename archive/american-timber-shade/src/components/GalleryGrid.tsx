'use client';

import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import { galleryTags } from '@/data/gallery';
import type { GalleryPhoto } from '@/lib/photos';

/**
 * Filterable photo grid with a lightbox. Receives the build-time list of
 * gallery photos from the server page. Rows alternate a wide plate so a
 * long run of photographs doesn't read as a contact sheet.
 */
export default function GalleryGrid({ photos }: { photos: GalleryPhoto[] }) {
  const [tag, setTag] = useState<string>('all');
  const [open, setOpen] = useState<number | null>(null);

  const tagsInUse = useMemo(
    () => galleryTags.filter((t) => photos.some((p) => p.tag === t.slug)),
    [photos]
  );
  const visible = useMemo(
    () => (tag === 'all' ? photos : photos.filter((p) => p.tag === tag)),
    [photos, tag]
  );

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: 1 | -1) => {
      setOpen((i) => (i === null ? i : (i + dir + visible.length) % visible.length));
    },
    [visible.length]
  );

  useEffect(() => {
    if (open === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    }
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close, step]);

  return (
    <>
      {tagsInUse.length > 1 && (
        <div className="flex flex-wrap justify-center gap-x-7 gap-y-3 mb-12">
          {[{ slug: 'all', label: 'All work' }, ...tagsInUse].map((t) => (
            <button
              key={t.slug}
              onClick={() => setTag(t.slug)}
              className={clsx(
                'tag pb-1 border-b transition-colors',
                tag === t.slug ? '!text-ink-950 border-brass-400' : 'border-transparent hover:!text-ink-800'
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
        {visible.map((p, i) => {
          const wide = i % 7 === 0;
          return (
            <button
              key={p.src}
              onClick={() => setOpen(i)}
              className={clsx(
                'plate group relative text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brass-400',
                wide ? 'col-span-2 aspect-[16/10]' : 'aspect-[4/5]'
              )}
              aria-label={`Open ${p.title}`}
            >
              <Image
                src={p.src}
                alt={p.title}
                fill
                quality={85}
                sizes={wide ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 50vw'}
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 bg-gradient-to-t from-ink-950/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-bone-50 font-display text-lg leading-tight">{p.title}</div>
                {p.location && <div className="tag !text-bone-100/70 mt-1">{p.location}</div>}
              </div>
            </button>
          );
        })}
      </div>

      {open !== null && visible[open] && (
        <div
          className="fixed inset-0 z-50 bg-ink-950/95 flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label={visible[open].title}
          onClick={close}
        >
          <div className="flex items-center justify-between px-5 md:px-8 h-16 text-bone-100">
            <div className="tag !text-bone-100/60">
              {open + 1} / {visible.length}
            </div>
            <button onClick={close} aria-label="Close" className="p-2 hover:text-brass-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 6l12 12M6 18L18 6" /></svg>
            </button>
          </div>
          <div className="relative flex-1 mx-4 md:mx-20 mb-4" onClick={(e) => e.stopPropagation()}>
            <Image
              key={visible[open].src}
              src={visible[open].src}
              alt={visible[open].title}
              fill
              quality={92}
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
          <div className="px-5 md:px-8 pb-6 text-center text-bone-100" onClick={(e) => e.stopPropagation()}>
            <div className="font-display text-xl">{visible[open].title}</div>
            {visible[open].location && <div className="tag !text-bone-100/60 mt-1">{visible[open].location}</div>}
          </div>
          {visible.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); step(-1); }}
                aria-label="Previous"
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-3 text-bone-100/70 hover:text-brass-300"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 5l-7 7 7 7" /></svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); step(1); }}
                aria-label="Next"
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-3 text-bone-100/70 hover:text-brass-300"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 5l7 7-7 7" /></svg>
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
