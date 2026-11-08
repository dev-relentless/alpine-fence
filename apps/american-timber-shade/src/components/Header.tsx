'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Logo from '@/components/Logo';
import { BRAND } from '@/data/brand';

const nav = [
  { href: '/pergolas', label: 'Pergolas' },
  { href: '/outdoor-living', label: 'Outdoor Living' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/locations', label: 'Locations' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-bone-50/92 backdrop-blur-md border-b border-ink-100">
      <div className="container-site flex h-[76px] items-center justify-between gap-6">
        <Logo />
        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => {
            const active = pathname === item.href || pathname?.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  'text-[15px] transition-colors pb-0.5 border-b',
                  active ? 'text-ink-950 border-brass-400' : 'text-ink-600 hover:text-ink-950 border-transparent'
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <span className="h-5 w-px bg-ink-200" />
          <a href={`tel:${BRAND.phoneRaw}`} className="text-[15px] text-ink-700 hover:text-ink-950 transition-colors tabular-nums">
            {BRAND.phone}
          </a>
          <Link href="/quote" className="btn-primary !py-2.5 !px-5">
            Start a project
          </Link>
        </nav>
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="lg:hidden p-2 text-ink-800"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d={open ? 'M6 6l12 12M6 18L18 6' : 'M4 7h16M4 12h16M4 17h16'} />
          </svg>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-ink-100 bg-bone-50">
          <div className="container-site py-6 flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg text-ink-800"
              >
                {item.label}
              </Link>
            ))}
            <a href={`tel:${BRAND.phoneRaw}`} className="text-lg text-ink-800">{BRAND.phone}</a>
            <Link href="/quote" onClick={() => setOpen(false)} className="btn-primary w-full text-center">
              Start a project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
