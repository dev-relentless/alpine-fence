'use client';

import Link from 'next/link';
import { useState } from 'react';
import { BRAND } from '@/data/brand';

const nav = [
  { href: '/services#flatwork', label: 'Flatwork' },
  { href: '/services#foundations', label: 'Foundations' },
  { href: '/services#excavation', label: 'Excavation' },
  { href: '/about', label: 'Company' },
  { href: '/contact', label: 'Contact' },
];

const smsHref = `sms:${BRAND.phoneRaw}?&body=${encodeURIComponent(BRAND.smsBody)}`;

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-iron-950 text-cement-50 border-b-2 border-signal-500">
      <div className="container-slab flex h-[68px] items-center justify-between gap-6">
        <Link href="/" aria-label={BRAND.name} className="flex items-center gap-2.5 leading-none">
          <span className="grid h-9 w-9 place-items-center bg-signal-500 font-display text-cement-50 text-lg">
            B
          </span>
          <span className="font-display uppercase tracking-display text-lg">
            Braddock <span className="text-signal-500">Concrete</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] uppercase tracking-wide text-iron-300 hover:text-cement-50 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <span className="h-5 w-px bg-iron-700" />
          <a href={smsHref} className="text-[13px] uppercase tracking-wide text-iron-300 hover:text-signal-400 transition-colors">
            Text
          </a>
          <a href={`tel:${BRAND.phoneRaw}`} className="text-[13px] tracking-wide text-iron-300 hover:text-signal-400 transition-colors">
            {BRAND.phone}
          </a>
          <Link href="/bid" className="btn-primary !py-2.5 !px-5 !text-[13px]">
            Get a bid
          </Link>
        </nav>
        <button
          aria-label="Open menu"
          className="lg:hidden p-2 text-cement-100"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d={open ? 'M6 6l12 12M6 18L18 6' : 'M4 7h16M4 12h16M4 17h16'} />
          </svg>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-iron-800 bg-iron-950">
          <div className="container-slab py-6 flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base uppercase tracking-wide text-cement-100"
              >
                {item.label}
              </Link>
            ))}
            <a href={`tel:${BRAND.phoneRaw}`} className="text-base text-cement-100">{BRAND.phone}</a>
            <Link href="/bid" onClick={() => setOpen(false)} className="btn-primary w-full text-center">
              Get a bid
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
