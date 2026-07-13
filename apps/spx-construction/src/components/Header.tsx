'use client';

import Link from 'next/link';
import { useState } from 'react';
import { BRAND } from '@/data/brand';

const nav = [
  { href: '/services', label: 'The Work' },
  { href: '/process', label: 'Approach' },
  { href: '/about', label: 'Studio' },
  { href: '/contact', label: 'Contact' },
];

const smsHref = `sms:${BRAND.phoneRaw}?&body=${encodeURIComponent(BRAND.smsBody)}`;

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-carbon-950/95 backdrop-blur-sm text-bone-50 border-b border-carbon-800">
      <div className="container-site flex h-[72px] items-center justify-between gap-6">
        <Link href="/" aria-label={BRAND.name} className="flex items-center gap-3.5 leading-none">
          <span className="font-display text-[1.35rem] tracking-[0.06em] text-bone-50">SPX</span>
          <span className="h-4 w-px bg-brass-400/70" aria-hidden />
          <span className="text-[10px] uppercase tracking-[0.3em] text-carbon-300">
            Design <span className="text-brass-300">·</span> Build
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[11px] uppercase tracking-[0.18em] text-carbon-300 hover:text-bone-50 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <span className="h-4 w-px bg-carbon-700" />
          <a href={`tel:${BRAND.phoneRaw}`} className="text-[12px] tracking-wide text-carbon-300 hover:text-bone-50 transition-colors">
            {BRAND.phone}
          </a>
          <Link href="/quote" className="btn-light !py-2.5 !px-5">
            Start a conversation
          </Link>
        </nav>
        <button
          aria-label="Open menu"
          className="lg:hidden p-2 text-bone-100"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d={open ? 'M6 6l12 12M6 18L18 6' : 'M4 8h16M4 16h16'} />
          </svg>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-carbon-800 bg-carbon-950">
          <div className="container-site py-8 flex flex-col gap-5">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl text-bone-100"
              >
                {item.label}
              </Link>
            ))}
            <a href={`tel:${BRAND.phoneRaw}`} className="text-base text-carbon-300">{BRAND.phone}</a>
            <a href={smsHref} className="text-base text-carbon-300">Text the studio</a>
            <Link href="/quote" onClick={() => setOpen(false)} className="btn-light w-full text-center mt-2">
              Start a conversation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
