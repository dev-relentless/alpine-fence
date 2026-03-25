'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { COMPANY, getAllCities } from '@/data/cities';
import { services } from '@/data/services';

const navLinks = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Compozen® Fence Installation', href: '/services/compozen-fence-installation' },
      { label: 'Compozen® Deck Installation', href: '/services/compozen-deck-installation' },
      { label: 'Wood Fence Installation', href: '/services/wood-fence-installation' },
      { label: 'Deck & Fence Refinishing', href: '/services/deck-refinishing' },
      { label: 'Fence & Deck Repair', href: '/services/fence-repair' },
    ],
  },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Service Areas', href: '/service-areas' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setSearchQuery('');
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const searchResults = searchQuery.trim().length > 1
    ? [
        ...services
          .filter((s) => s.title.toLowerCase().includes(searchQuery.toLowerCase()))
          .map((s) => ({ label: s.title, href: `/services/${s.slug}`, type: 'Service' as const })),
        ...getAllCities()
          .filter((c) => c.name.toLowerCase().includes(searchQuery.toLowerCase()))
          .slice(0, 8)
          .map((c) => ({ label: c.name, href: `/${c.slug}-fence-deck-contractor`, type: 'City' as const })),
        ...([
          { label: 'Gallery', href: '/gallery' },
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },

          { label: 'Service Areas', href: '/service-areas' },
          { label: 'Get a Quote', href: '/quote' },
        ]
          .filter((p) => p.label.toLowerCase().includes(searchQuery.toLowerCase()))
          .map((p) => ({ ...p, type: 'Page' as const }))),
      ]
    : [];

  function handleResultClick(href: string) {
    setSearchOpen(false);
    setSearchQuery('');
    router.push(href);
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
      {/* Accent line */}
      <div className="h-1 bg-gradient-to-r from-compozen-400 via-compozen-500 to-alpine-600" />

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
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/alpine-fence-deck-logo.png"
              alt="Alpine Fence & Deck"
              width={270}
              height={90}
              className="h-14 lg:h-20 w-auto"
              priority
            />
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

          {/* Search + CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-stone-500 hover:text-alpine-700 hover:bg-alpine-50 rounded-lg transition-colors"
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
            <Link href="/contact" className="hidden sm:inline-flex btn-primary !py-2.5 !px-5 !text-sm">
              Free Estimate
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-stone-600 hover:bg-stone-100 rounded-lg"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
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
          <div id="mobile-nav" className="lg:hidden border-t border-stone-100 py-4 animate-fade-in">
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
              <Link href="/contact" className="btn-primary w-full text-center" onClick={() => setMobileOpen(false)}>
                Get Free Estimate
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]">
          <div
            className="absolute inset-0 bg-stone-900/50 backdrop-blur-sm"
            onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
          />
          <div className="relative w-full max-w-lg mx-4 bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden animate-fade-in">
            <div className="flex items-center gap-3 px-4 py-3 border-b border-stone-200">
              <svg className="w-5 h-5 text-stone-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search cities, services, pages…"
                className="flex-1 text-base text-stone-800 placeholder:text-stone-400 outline-none bg-transparent"
              />
              <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs text-stone-400 bg-stone-100 rounded border border-stone-200">
                ESC
              </kbd>
            </div>

            <div className="max-h-80 overflow-y-auto">
              {searchQuery.trim().length > 1 && searchResults.length === 0 && (
                <div className="px-4 py-8 text-center text-stone-500 text-sm">
                  No results for &ldquo;{searchQuery}&rdquo;
                </div>
              )}
              {searchResults.length > 0 && (
                <ul className="py-2">
                  {searchResults.map((result) => (
                    <li key={result.href}>
                      <button
                        onClick={() => handleResultClick(result.href)}
                        className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-alpine-50 transition-colors"
                      >
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${
                          result.type === 'Service' ? 'bg-compozen-100 text-compozen-800' :
                          result.type === 'City' ? 'bg-alpine-100 text-alpine-800' :
                          'bg-stone-100 text-stone-600'
                        }`}>
                          {result.type}
                        </span>
                        <span className="text-sm text-stone-800">{result.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              {searchQuery.trim().length <= 1 && (
                <div className="px-4 py-6 text-center text-stone-400 text-sm">
                  Type to search 94 cities, services &amp; pages
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
