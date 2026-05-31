'use client';

import Script from 'next/script';

interface QuoteFormProps {
  variant?: 'full' | 'compact' | 'sidebar';
  className?: string;
  /**
   * Pre-frame the lead form so visitors landing from a Yard & Landscape
   * page immediately understand what they're requesting. The HouseCallPro
   * iframe can't be deep-linked with a service pre-select, but a clear
   * label above it cuts confusion and improves submission accuracy.
   * Sale-prep: the division tag is also embedded as a data-attribute so
   * future analytics (or a future split form) can read intent from it.
   */
  division?: 'fence-deck' | 'yard-landscape';
}

export default function QuoteForm({ variant = 'full', className = '', division }: QuoteFormProps) {
  const iframeHeight = variant === 'compact' ? '650px' : variant === 'sidebar' ? '700px' : '900px';

  const banner =
    division === 'yard-landscape'
      ? {
          eyebrow: 'Yard & Landscape Quote',
          line: 'Tell us about your sod, walls, patio, sprinklers, or full design — same crews that build 1,700+ Alpine fences.',
        }
      : division === 'fence-deck'
      ? {
          eyebrow: 'Fence & Deck Quote',
          line: 'Material, size, and timeline — we\u2019ll respond with a same-day estimate.',
        }
      : null;

  return (
    <div
      className={`rounded-2xl overflow-hidden ${className}`}
      data-division={division ?? 'fence-deck'}
    >
      {banner && (
        <div className="bg-gradient-to-r from-alpine-900 to-alpine-800 text-white px-5 py-4 border-b-4 border-bronze-500">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-bronze-300">
            {banner.eyebrow}
          </p>
          <p className="text-sm text-stone-100 mt-1 leading-snug">{banner.line}</p>
        </div>
      )}
      <Script
        src="https://online-booking.housecallpro.com/script.js?token=ab4919eca6a743f88f9367d057f7f963&orgName=Alpine-Fence-and-Deck"
        strategy="lazyOnload"
      />
      <iframe
        src="https://book.housecallpro.com/lead-form/Alpine-Fence-and-Deck/ab4919eca6a743f88f9367d057f7f963"
        style={{ border: 'none', width: '100%', minHeight: iframeHeight, overflow: 'hidden' }}
        title="Request a Quote - Alpine Fence and Deck"
      />
    </div>
  );
}
