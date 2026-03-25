'use client';

import Script from 'next/script';

interface QuoteFormProps {
  variant?: 'full' | 'compact' | 'sidebar';
  className?: string;
}

export default function QuoteForm({ variant = 'full', className = '' }: QuoteFormProps) {
  const iframeHeight = variant === 'compact' ? '650px' : variant === 'sidebar' ? '700px' : '900px';

  return (
    <div className={`rounded-2xl overflow-hidden ${className}`}>
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
