'use client';

import { useState } from 'react';
import Link from 'next/link';
import { COMPANY } from '@/data/cities';

const navLinks = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Deck & Fence Refinishing', href: '/services/deck-refinishing' },
      { label: 'Fence & Deck Repair', href: '/services/fence-repair' },
      { label: 'Compozen® Fence Installation', href: '/services/compozen-fence-installation' },
      { label: 'Compozen® Deck Installation', href: '/services/compozen-deck-installation' },
    ],
  },
  { label: 'Design Studio', href: '/design-studio' },
  { label: 'HOA Compliance', href: '/hoa-compliance' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Service Areas', href: '/service-areas' },
  { label: 'Calculator', href: '/calculator' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
      {/* Top bar */}
      <div className="bg-alpine-900 text-white text-sm">
        <div className="section-container flex items-center justify-between py-2">
          <div className="flex items-center gap-4">
            <a href={COMPANY.phoneHref} className="flex items-center gap-1.5 hover:text-compozen-400 transition-colors font-semibold">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {COMPANY.phone}
            </a>
            <span className="hidden sm:inline text-stone-400">|</span>
            <span className="hidden sm:inline text-stone-300">{COMPANY.serviceArea}</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="badge-compozen text-[10px]">
              ★ Exclusive Compozen® Certified Installer
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-alpine-700 rounded-lg flex items-center justify-center shadow-md group-hover:bg-alpine-800 transition-colors">
              <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg lg:text-xl font-heading font-bold text-alpine-900 leading-tight">
                Alpine Fence & Deck
              </h1>
              <p className="text-[10px] lg:text-xs text-stone-500 leading-tight">
                Compozen® Certified Installer
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="px-3 xl:px-4 py-2 text-sm font-medium text-stone-700 hover:text-alpine-700 rounded-lg hover:bg-alpine-50 transition-colors"
                >
                  {link.label}
                  {link.children && (
                    <svg className="w-3 h-3 inline ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {link.children && openDropdown === link.href && (
                  <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-stone-100 py-2 animate-fade-in">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-stone-700 hover:bg-alpine-50 hover:text-alpine-700 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link href="/quote" className="hidden sm:inline-flex btn-primary !py-2.5 !px-5 !text-sm">
              Free Estimate
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-stone-600 hover:bg-stone-100 rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-stone-100 py-4 animate-fade-in">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-stone-700 hover:bg-alpine-50 rounded-lg"
                >
                  {link.label}
                </Link>
                {link.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setMobileOpen(false)}
                    className="block pl-8 pr-4 py-2.5 text-sm text-stone-500 hover:text-alpine-700"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="px-4 pt-4">
              <Link href="/quote" className="btn-primary w-full text-center" onClick={() => setMobileOpen(false)}>
                Get Free Estimate
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
