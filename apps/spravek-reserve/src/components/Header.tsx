'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Lockup from './Lockup';
import { BRAND } from '@/data/brand';

const nav = [
  { href: '/fleet', label: 'The Fleet' },
  { href: '/chauffeur', label: 'Chauffeur' },
  { href: '/#allocation', label: 'The Allocation' },
  { href: '/about', label: 'The Reserve' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
        scrolled || open ? 'border-obsidian-800 bg-obsidian-950/90 backdrop-blur-md' : 'border-transparent bg-transparent',
      )}
    >
      <div className="container-reserve flex h-[76px] items-center justify-between gap-6">
        <Link href="/" aria-label={BRAND.name} onClick={() => setOpen(false)}>
          <Lockup id="hdr" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="font-sans text-[11px] uppercase tracking-[0.22em] text-obsidian-200 transition-colors hover:text-champagne-300">
              {item.label}
            </Link>
          ))}
          <span className="h-4 w-px bg-obsidian-700" />
          <a href={`tel:${BRAND.phoneRaw}`} className="font-sans text-[11px] tracking-[0.18em] text-obsidian-300 transition-colors hover:text-bone-50">
            {BRAND.phone}
          </a>
          <Link href="/allocation" className="btn-gold !px-5 !py-2.5">
            Request Allocation
          </Link>
        </nav>

        <button aria-label={open ? 'Close menu' : 'Open menu'} className="p-2 text-bone-100 lg:hidden" onClick={() => setOpen((v) => !v)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d={open ? 'M6 6l12 12M6 18L18 6' : 'M3 7h18M3 12h18M3 17h18'} />
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-obsidian-800 bg-obsidian-950 lg:hidden">
          <div className="container-reserve flex flex-col gap-5 py-8">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="font-sans text-sm uppercase tracking-[0.22em] text-bone-100">
                {item.label}
              </Link>
            ))}
            <a href={`tel:${BRAND.phoneRaw}`} className="font-sans text-sm tracking-[0.18em] text-obsidian-300">{BRAND.phone}</a>
            <Link href="/allocation" onClick={() => setOpen(false)} className="btn-gold w-full">
              Request Allocation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
