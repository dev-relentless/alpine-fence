'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BRAND } from '@/data/brand';
import { SMS_BODY } from '@/data/i18n';
import { LangToggle, useLang } from '@/components/LangContext';

export const telHref = `tel:${BRAND.phoneRaw}`;

export function useSmsHref() {
  const { lang } = useLang();
  return `sms:${BRAND.phoneRaw}?&body=${encodeURIComponent(SMS_BODY[lang])}`;
}

function useNav() {
  const { t } = useLang();
  return [
    ['/#services', t.nav.services],
    ['/#couples', t.nav.couples],
    ['/#about', t.nav.about],
    ['/#reviews', t.nav.reviews],
    ['/#visit', t.nav.visit],
    ['/faq', t.nav.faq],
  ] as const;
}

function NavLink({ href, className, children }: { href: string; className: string; children: React.ReactNode }) {
  // Plain anchors for in-page sections keep the CSS smooth scroll on the home page.
  return href.includes('#') ? (
    <a href={href} className={className}>
      {children}
    </a>
  ) : (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function Header() {
  const nav = useNav();
  return (
    <header className="sticky top-0 z-50 border-b border-blush-200/60 bg-cream/85 backdrop-blur-md">
      <div className="container-site flex h-[4.5rem] items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt={`${BRAND.name} logo`}
            width={44}
            height={44}
            className="rounded-full shadow-card"
            priority
          />
          <span className="leading-tight">
            <span className="block font-serif text-xl tracking-wide text-plum">Vitalea</span>
            <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-gold-600">
              Spa &amp; Beauty
            </span>
          </span>
        </Link>
        <nav className="hidden gap-8 text-sm font-medium text-plum lg:flex">
          {nav.map(([href, label]) => (
            <NavLink key={href} href={href} className="transition hover:text-gold-600">
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LangToggle />
          <a href={telHref} className="btn-gold hidden !px-5 !py-2.5 sm:inline-flex">
            {BRAND.phone}
          </a>
          <a href={telHref} className="btn-gold !px-4 !py-2.5 sm:hidden" aria-label={`Call ${BRAND.phone}`}>
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden>
              <path d="M2.3 3.6c0-.7.6-1.3 1.3-1.3h2.3c.6 0 1.2.4 1.3 1l.8 3.1c.1.5-.1 1-.5 1.3l-1.3 1a12.6 12.6 0 005.1 5.1l1-1.3c.3-.4.8-.6 1.3-.5l3.1.8c.6.1 1 .7 1 1.3v2.3c0 .7-.6 1.3-1.3 1.3A14.4 14.4 0 012.3 3.6z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  const { t } = useLang();
  const nav = useNav();
  return (
    <footer className="bg-plum-deep py-14 text-white">
      <div className="container-site flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt={`${BRAND.name} logo`}
            width={56}
            height={56}
            className="rounded-full"
          />
          <div>
            <p className="font-serif text-xl">{BRAND.name}</p>
            <p className="text-sm italic text-gold-300">{BRAND.tagline}</p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-x-7 gap-y-2 text-sm text-white/70">
          {nav.map(([href, label]) => (
            <NavLink key={href} href={href} className="hover:text-gold-300">
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="text-sm text-white/60">
          <p>
            {BRAND.address.street}
            <br />
            {BRAND.address.locality}, {BRAND.address.state} {BRAND.address.zip}
          </p>
          <a className="mt-2 inline-block font-semibold text-gold-300" href={telHref}>
            {BRAND.phone}
          </a>
        </div>
      </div>
      <div className="container-site mt-10 border-t border-white/10 pt-6 text-xs text-white/40">
        © {new Date().getFullYear()} {BRAND.name} · {t.footer.serving}{' '}
        {BRAND.areaServed.join(', ')}
      </div>
    </footer>
  );
}
