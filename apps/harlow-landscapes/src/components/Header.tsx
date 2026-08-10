'use client';

import Link from 'next/link';
import { useState } from 'react';
import Logo from './Logo';
import { BRAND } from '@/data/brand';

const nav = [
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/process', label: 'Process' },
  { href: '/about', label: 'The Firm' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-ivory-50/95 backdrop-blur-sm border-b border-stone-200">
      <div className="container-editorial flex h-[76px] items-center justify-between gap-6">
        <Logo />
        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] text-stone-700 hover:text-stone-950 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <span className="h-5 w-px bg-stone-300" />
          <a
            href={`tel:${BRAND.phoneRaw}`}
            className="text-[15px] text-stone-700 hover:text-stone-950 transition-colors"
          >
            {BRAND.phone}
          </a>
          <Link href="/inquire" className="btn-primary !py-2.5 !px-6">
            Begin a project
          </Link>
        </nav>
        <button
          aria-label="Open menu"
          className="lg:hidden p-2 text-stone-800"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d={open ? 'M6 6l12 12M6 18L18 6' : 'M4 7h16M4 12h16M4 17h16'} />
          </svg>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-stone-200 bg-ivory-50">
          <div className="container-editorial py-6 flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg text-stone-800"
              >
                {item.label}
              </Link>
            ))}
            <a href={`tel:${BRAND.phoneRaw}`} className="text-lg text-stone-800">{BRAND.phone}</a>
            <Link href="/inquire" onClick={() => setOpen(false)} className="btn-primary w-full text-center">
              Begin a project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
