'use client';

import { COMPANY } from '@/data/cities';

/**
 * StickyCallButton — mobile-only floating call CTA.
 *
 * Conversion lever for trades: when a homeowner is researching on a
 * phone, the lowest-friction action is tapping a number that auto-dials.
 * Pinned to the bottom-right on screens < lg so it never blocks desktop
 * layout and stays out of the footer's way.
 */
export default function StickyCallButton() {
  return (
    <a
      href={COMPANY.phoneHref}
      aria-label={`Call ${COMPANY.phone}`}
      className="lg:hidden fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-alpine-800 hover:bg-alpine-900 text-white font-semibold text-sm shadow-2xl shadow-alpine-900/40 ring-1 ring-bronze-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze-400 focus-visible:ring-offset-2 transition-colors"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-bronze-300 opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-bronze-400" />
      </span>
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      Call {COMPANY.phone}
    </a>
  );
}
