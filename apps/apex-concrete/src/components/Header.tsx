'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { BRAND, smsHref, telHref } from '@/data/brand';
import { services } from '@/data/services';
import ApexMark from './ApexMark';

const nav = [
  { href: '/services', label: 'Services' },
  { href: '/service-area', label: 'Service area' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40">
      {/* utility bar */}
      <div className="bg-basalt-950 text-slab-200">
        <div className="container-apex flex h-9 items-center justify-between text-[11px] uppercase tracking-[0.18em]">
          <span className="truncate">
            Concrete contractor · {BRAND.address.region}
          </span>
          <div className="flex items-center gap-5">
            <span className="hidden sm:inline text-basalt-400">{BRAND.hours}</span>
            <a href={telHref} className="hover:text-flag-300 transition-colors tabular-nums whitespace-nowrap shrink-0">{BRAND.phone}</a>
          </div>
        </div>
      </div>

      {/* main bar */}
      <div className="bg-slab-50/95 backdrop-blur border-b border-basalt-200">
        <div className="container-apex flex h-[72px] items-center justify-between gap-6">
          <Link href="/" aria-label={BRAND.name} className="flex items-center gap-3">
            <ApexMark className="h-10 w-10" />
            <span className="font-display uppercase text-[26px] leading-none tracking-tight text-basalt-950">
              Apex <span className="text-flag-500">Concrete</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((item) => {
              const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    'relative text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors py-1',
                    active ? 'text-basalt-950' : 'text-basalt-500 hover:text-basalt-950',
                  )}
                >
                  {item.label}
                  {active && <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-flag-500" />}
                </Link>
              );
            })}
            <span className="h-6 w-px bg-basalt-200" />
            <a href={smsHref} className="text-[13px] font-semibold uppercase tracking-[0.1em] text-basalt-500 hover:text-flag-600 transition-colors">
              Text us
            </a>
            <Link href="/estimate" className="btn-primary !py-3 !px-5">
              Get an estimate
            </Link>
          </nav>

          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="lg:hidden -mr-2 p-2 text-basalt-950"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d={open ? 'M6 6l12 12M6 18L18 6' : 'M3 7h18M3 12h18M3 17h18'} />
            </svg>
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-basalt-200 bg-slab-50">
            <div className="container-apex py-6 grid gap-8 sm:grid-cols-2">
              <div>
                <div className="tag mb-3">Services</div>
                <ul className="grid gap-2">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className="text-base text-basalt-800 hover:text-flag-600">
                        {s.title}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/services" className="text-sm font-semibold uppercase tracking-[0.1em] text-flag-600">All services →</Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <div className="tag mb-3">Company</div>
                  <ul className="grid gap-2">
                    {nav.slice(1).map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className="text-base text-basalt-800 hover:text-flag-600">{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <a href={telHref} className="font-display text-2xl text-basalt-950">{BRAND.phone}</a>
                <div className="flex gap-3">
                  <Link href="/estimate" className="btn-primary flex-1">Get an estimate</Link>
                  <a href={smsHref} className="btn-ghost">Text</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
