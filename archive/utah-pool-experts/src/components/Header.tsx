'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { BRAND } from '@/data/brand';

const nav = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm text-pool-900 border-b border-deck-200">
      <div className="container-deck flex h-[72px] items-center justify-between gap-6">
        <Link href="/" aria-label={BRAND.name} className="flex items-center gap-3 leading-none">
          <Image
            src="/pool/logo.svg"
            alt=""
            width={44}
            height={44}
            priority
            className="h-11 w-11"
          />
          <span className="font-display font-semibold text-lg max-sm:hidden">
            Utah Pool Experts
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-pool-700 hover:text-pool-950 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <span className="h-5 w-px bg-deck-200" />
          <a href={`tel:${BRAND.phoneRaw}`} className="text-[15px] font-semibold text-pool-700 hover:text-pool-950 transition-colors">
            {BRAND.phone}
          </a>
          <Link href="/quote" className="btn-primary !py-2.5 !px-6">
            Request an estimate
          </Link>
        </nav>
        <button
          aria-label="Open menu"
          className="lg:hidden p-2 text-pool-800"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d={open ? 'M6 6l12 12M6 18L18 6' : 'M4 7h16M4 12h16M4 17h16'} />
          </svg>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-deck-200 bg-white">
          <div className="container-deck py-6 flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg text-pool-800"
              >
                {item.label}
              </Link>
            ))}
            <a href={`tel:${BRAND.phoneRaw}`} className="text-lg font-semibold text-pool-800">{BRAND.phone}</a>
            <Link href="/quote" onClick={() => setOpen(false)} className="btn-primary w-full text-center">
              Request an estimate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
