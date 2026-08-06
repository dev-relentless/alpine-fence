'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { BRAND } from '@/data/brand';

const nav = [
  { href: '/pergolas#timber', label: 'Timber' },
  { href: '/pergolas#louvered', label: 'Louvered' },
  { href: '/pergolas#pavilions', label: 'Pavilions' },
  { href: '/about', label: 'Company' },
  { href: '/contact', label: 'Contact' },
];

const smsHref = `sms:${BRAND.phoneRaw}?&body=${encodeURIComponent(BRAND.smsBody)}`;

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-timber-950 text-linen-50 border-b-2 border-sky-500">
      <div className="container-patio flex h-[68px] items-center justify-between gap-6">
        <Link href="/" aria-label={BRAND.name} className="flex items-center gap-3 leading-none">
          <Image
            src="/pergola/logo.png"
            alt=""
            width={687}
            height={577}
            priority
            className="h-12 w-auto rounded-md"
          />
          <span className="font-display font-semibold tracking-display text-lg max-sm:hidden">
            Utah Pergola <span className="text-sky-400">Experts</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] uppercase tracking-wide text-timber-300 hover:text-linen-50 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <span className="h-5 w-px bg-timber-700" />
          <a href={smsHref} className="text-[13px] uppercase tracking-wide text-timber-300 hover:text-sky-400 transition-colors">
            Text
          </a>
          <a href={`tel:${BRAND.phoneRaw}`} className="text-[13px] tracking-wide text-timber-300 hover:text-sky-400 transition-colors">
            {BRAND.phone}
          </a>
          <Link href="/quote" className="btn-primary !py-2.5 !px-5 !text-[13px]">
            Get a quote
          </Link>
        </nav>
        <button
          aria-label="Open menu"
          className="lg:hidden p-2 text-linen-100"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d={open ? 'M6 6l12 12M6 18L18 6' : 'M4 7h16M4 12h16M4 17h16'} />
          </svg>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-timber-800 bg-timber-950">
          <div className="container-patio py-6 flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base uppercase tracking-wide text-linen-100"
              >
                {item.label}
              </Link>
            ))}
            <a href={`tel:${BRAND.phoneRaw}`} className="text-base text-linen-100">{BRAND.phone}</a>
            <Link href="/quote" onClick={() => setOpen(false)} className="btn-primary w-full text-center">
              Get a quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
