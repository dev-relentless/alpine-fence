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

const smsHref = `sms:${BRAND.phoneRaw}?&body=${encodeURIComponent(BRAND.smsBody)}`;

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-ivory-50/85 backdrop-blur border-b border-stone-200 overflow-hidden">
      {/* faint logo watermark in shadows */}
      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 opacity-[0.14] hidden md:block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/harlow/logo.png" alt="" className="h-[140px] w-[140px] object-contain" />
      </div>
      <div className="relative container-editorial flex h-[72px] items-center justify-between gap-6">
        <Logo />
        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] tracking-wide text-stone-700 hover:text-stone-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <span className="h-5 w-px bg-stone-300" />
          <a
            href={smsHref}
            className="text-[13px] tracking-wide text-stone-700 hover:text-moss-700 transition-colors inline-flex items-center gap-1.5"
            aria-label="Text the firm"
          >
            <SmsIcon /> Text
          </a>
          <a
            href={`tel:${BRAND.phoneRaw}`}
            className="text-[13px] tracking-wide text-stone-700 hover:text-moss-700 transition-colors"
          >
            {BRAND.phone}
          </a>
          <Link href="/inquire" className="btn-primary !py-2.5 !px-5 !text-[13px]">
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
                className="text-base text-stone-800"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-2">
              <a href={`tel:${BRAND.phoneRaw}`} className="btn-ghost flex-1 !py-3 text-sm">Call</a>
              <a href={smsHref} className="btn-ghost flex-1 !py-3 text-sm">Text</a>
            </div>
            <Link href="/inquire" onClick={() => setOpen(false)} className="btn-primary w-full !py-3">
              Begin a project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function SmsIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}
