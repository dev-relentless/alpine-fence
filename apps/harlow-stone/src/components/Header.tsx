'use client';

import Link from 'next/link';
import { useState } from 'react';
import Logo from './Logo';

const nav = [
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/process', label: 'Process' },
  { href: '/about', label: 'Studio' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-ivory-50/80 backdrop-blur border-b border-stone-200">
      <div className="container-editorial flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide text-stone-700 hover:text-stone-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/inquire" className="btn-primary">
            Begin a project
          </Link>
        </nav>
        <button
          aria-label="Open menu"
          className="md:hidden p-2 text-stone-800"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-stone-200 bg-ivory-50">
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
            <Link href="/inquire" onClick={() => setOpen(false)} className="btn-primary self-start">
              Begin a project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
