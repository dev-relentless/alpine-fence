'use client';

import Link from 'next/link';
import Logo from '@/components/Logo';
import { useState } from 'react';
import { BRAND } from '@/data/brand';

const nav = [
  { href: '/pergolas', label: 'The Structures' },
  { href: '/locations', label: 'Locations' },
  { href: '/about', label: 'The Company' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-linen-50/95 backdrop-blur-sm text-timber-900 border-b border-timber-200">
      {/* National-brand bar: transparent disclosure that this is a state arm of the parent. */}
      <div className="bg-walnut-depth text-timber-200">
        <div className="container-patio flex h-8 items-center justify-between gap-4 text-[12px] tracking-wide">
          <span className="truncate">
            {BRAND.shortName} is the {BRAND.state} arm of{' '}
            <a
              href={BRAND.parent.url}
              className="text-linen-50 underline decoration-timber-500 underline-offset-2 hover:decoration-linen-50"
              target="_blank"
              rel="noopener"
            >
              {BRAND.parent.name}
            </a>
          </span>
          <Link href="/locations" className="shrink-0 hover:text-linen-50">
            Other states &rarr;
          </Link>
        </div>
      </div>
      <div className="container-patio flex h-[76px] items-center justify-between gap-6">
        <Logo />
        <nav className="hidden lg:flex items-center gap-9">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] text-timber-700 hover:text-timber-950 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <span className="h-5 w-px bg-timber-200" />
          <a href={`tel:${BRAND.phoneRaw}`} className="text-[15px] text-timber-700 hover:text-timber-950 transition-colors">
            {BRAND.phone}
          </a>
          <Link href="/quote" className="btn-primary !py-2.5 !px-6">
            Request a consultation
          </Link>
        </nav>
        <button
          aria-label="Open menu"
          className="lg:hidden p-2 text-timber-800"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d={open ? 'M6 6l12 12M6 18L18 6' : 'M4 7h16M4 12h16M4 17h16'} />
          </svg>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-timber-200 bg-linen-50">
          <div className="container-patio py-6 flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg text-timber-800"
              >
                {item.label}
              </Link>
            ))}
            <a href={`tel:${BRAND.phoneRaw}`} className="text-lg text-timber-800">{BRAND.phone}</a>
            <Link href="/quote" onClick={() => setOpen(false)} className="btn-primary w-full text-center">
              Request a consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
