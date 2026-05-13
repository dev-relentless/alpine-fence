import Link from 'next/link';
import Image from 'next/image';
import { fenceTypes } from '@/data/fenceTypes';

export default function FenceTypesGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {fenceTypes.map((fence) => (
        <Link
          key={fence.slug}
          href={fence.href}
          className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-stone-900 shadow-md hover:shadow-2xl transition-all duration-500"
        >
          {/* Photo (falls back to gradient if missing) */}
          <Image
            src={fence.image}
            alt={`${fence.name} fence installed by Alpine Fence & Deck`}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          />

          {/* Gradient overlay for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

          {/* Label */}
          <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6 text-white">
            <h3 className="text-lg lg:text-xl font-heading font-bold tracking-tight">
              {fence.name}
            </h3>
            <p className="text-sm text-stone-200/90 mt-1 leading-snug">
              {fence.tagline}
            </p>
            <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-compoxen-300 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
              Explore
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </Link>
      ))}

      {/*
        Bridge tile — completes the 4×3 grid and cross-sells the new
        Yard & Landscape division at peak intent. Distinct premium
        forest+bronze treatment so it reads as a category jump, not
        another fence material card.
      */}
      <Link
        href="/landscaping"
        className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-forest-hero ring-1 ring-bronze-400/30 shadow-md hover:shadow-2xl hover:ring-bronze-400/60 transition-all duration-500"
      >
        {/* Decorative texture so the tile doesn't feel empty */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.18] mix-blend-overlay"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 25%, #d8b771 0, transparent 50%), radial-gradient(circle at 75% 80%, #6a9981 0, transparent 55%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-900/30 to-transparent" />

        <div className="absolute inset-0 p-5 lg:p-6 flex flex-col justify-between text-white">
          <span className="self-start inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-bronze-500/20 border border-bronze-300/40 text-[10px] font-semibold uppercase tracking-[0.2em] text-bronze-200">
            <span className="w-1.5 h-1.5 rounded-full bg-bronze-300" />
            New Division
          </span>

          <div>
            <h3 className="text-xl lg:text-2xl font-heading font-bold tracking-tight leading-tight">
              Yard &amp; Landscape
            </h3>
            <p className="text-sm text-stone-200/90 mt-1.5 leading-snug">
              Sod, walls, pavers, sprinklers &amp; full design — by the same crews.
            </p>
            <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-bronze-300 group-hover:translate-x-1 transition-transform duration-300">
              Explore the Whole Yard
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
