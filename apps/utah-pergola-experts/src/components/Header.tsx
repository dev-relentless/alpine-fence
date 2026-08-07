'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { BRAND } from '@/data/brand';

const nav = [
  { href: '/pergolas', label: 'The Structures' },
  { href: '/about', label: 'The Company' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-linen-50/95 backdrop-blur-sm text-timber-900 border-b border-timber-200">
      <div className="container-patio flex h-[76px] items-center justify-between gap-6">
        <Link href="/" aria-label={BRAND.name} className="flex items-center gap-3 leading-none">
          <Image
            src="/pergola/logo.png"
            alt=""
            width={687}
            height={577}
            priority
            className="h-14 w-auto"
          />
          <span className="font-display font-semibold text-xl max-sm:hidden">
            Utah Pergola Experts
          </span>
        </Link>
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
