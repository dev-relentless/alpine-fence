'use client';

import Image from 'next/image';

/**
 * PhotoStub — shows a real image when present, otherwise a labeled placeholder.
 *
 * Lets the team scaffold gallery slots with the eventual filename baked in
 * so photographers know exactly where each image goes. Replace `placeholder`
 * with the real photo at the same path and the stub will swap automatically.
 *
 * Usage:
 *   <PhotoStub src="/images/landscaping/gallery/sod-install-01.jpg"
 *              alt="Sod install in Provo, UT"
 *              label="Sod Install · Provo" />
 */

interface PhotoStubProps {
  src: string;
  alt: string;
  label?: string;
  aspect?: 'square' | '4/3' | '16/9' | '3/2';
  priority?: boolean;
  className?: string;
}

const ASPECT_CLASS: Record<NonNullable<PhotoStubProps['aspect']>, string> = {
  square: 'aspect-square',
  '4/3': 'aspect-[4/3]',
  '16/9': 'aspect-[16/9]',
  '3/2': 'aspect-[3/2]',
};

export default function PhotoStub({
  src,
  alt,
  label,
  aspect = '4/3',
  priority,
  className = '',
}: PhotoStubProps) {
  // We always render the <Image>, but layer a placeholder underneath so
  // missing files degrade gracefully (Next/Image renders nothing on 404
  // when fill is used; the placeholder shows through).
  const filename = src.split('/').pop() ?? 'image.jpg';

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-alpine-100 to-stone-200 border border-stone-200 ${ASPECT_CLASS[aspect]} ${className}`}
    >
      {/* Placeholder layer — shown when no real image is dropped in */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-alpine-700">
        <svg
          className="w-10 h-10 mb-3 opacity-50"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
        {label && (
          <p className="text-sm font-semibold tracking-tight text-alpine-900 mb-1 max-w-[90%]">
            {label}
          </p>
        )}
        <code className="text-[10px] text-alpine-700/70 font-mono break-all max-w-[90%]">
          {filename}
        </code>
        <span className="mt-2 inline-block text-[10px] uppercase tracking-[0.2em] text-alpine-600/70 font-semibold">
          Photo Coming Soon
        </span>
      </div>

      {/* Real image — covers placeholder when file exists */}
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        // Hide broken-image icon if file is missing — the placeholder shows
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.opacity = '0';
        }}
      />
    </div>
  );
}
