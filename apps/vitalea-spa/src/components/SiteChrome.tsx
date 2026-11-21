'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BRAND, LINKS } from '@/data/brand';
import { OFFER_SMS, SMS_BODY, type OfferKey } from '@/data/i18n';
import { LangToggle, useLang } from '@/components/LangContext';

export const telHref = `tel:${BRAND.phoneRaw}`;

const smsHref = (body: string) => `sms:${BRAND.phoneRaw}?&body=${encodeURIComponent(body)}`;

/** Online booking once LINKS.booking is set; a prefilled text to the studio until then. */
export function useBooking() {
  const { lang, t } = useLang();
  return LINKS.booking
    ? { href: LINKS.booking, label: t.cta.book }
    : { href: smsHref(SMS_BODY[lang]), label: t.hero.ctaText };
}

/** Checkout link for a prepaid offer once its LINKS entry is set; a prefilled text until then. */
export function useOfferCta(offer: OfferKey) {
  const { lang, t } = useLang();
  const live = Boolean(LINKS[offer]);
  return {
    live,
    href: live ? LINKS[offer] : smsHref(OFFER_SMS[offer][lang]),
    label: live ? t[offer].cta : t[offer].ctaText,
  };
}

function useNav() {
  const { t } = useLang();
  return [
    ['/#services', t.nav.services],
    ['/#couples', t.nav.couples],
    ['/gift-cards', t.nav.giftCards],
    ['/membership', t.nav.membership],
    ['/packages', t.nav.packages],
    ['/#about', t.nav.about],
    ['/#reviews', t.nav.reviews],
    ['/#visit', t.nav.visit],
    ['/faq', t.nav.faq],
  ] as const;
}

function NavLink({
  href,
  className,
  onClick,
  children,
}: {
  href: string;
  className: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  // Plain anchors for in-page sections keep the CSS smooth scroll on the home page.
  return href.includes('#') ? (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  ) : (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export function Header() {
  const { t } = useLang();
  const nav = useNav();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-blush-200/60 bg-cream/85 backdrop-blur-md">
      <div className="container-site flex h-[4.5rem] items-center justify-between gap-2 sm:gap-3">
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
            {/* Narrow phones have no room for the subtitle beside the toggle, call and menu buttons */}
            <span className="hidden whitespace-nowrap text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-gold-600 min-[390px]:block sm:tracking-[0.3em]">
              Spa &amp; Beauty
            </span>
          </span>
        </Link>
        <nav className="hidden gap-5 whitespace-nowrap text-sm font-medium text-plum xl:flex 2xl:gap-8">
          {nav.map(([href, label]) => (
            <NavLink
              key={href}
              href={href}
              className={`transition hover:text-gold-600 ${href === '/gift-cards' ? 'font-semibold text-gold-700' : ''}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <LangToggle />
          <a href={telHref} className="btn-gold hidden !px-5 !py-2.5 sm:inline-flex">
            {BRAND.phone}
          </a>
          <a href={telHref} className="btn-gold !px-3.5 !py-2.5 sm:hidden" aria-label={`Call ${BRAND.phone}`}>
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden>
              <path d="M2.3 3.6c0-.7.6-1.3 1.3-1.3h2.3c.6 0 1.2.4 1.3 1l.8 3.1c.1.5-.1 1-.5 1.3l-1.3 1a12.6 12.6 0 005.1 5.1l1-1.3c.3-.4.8-.6 1.3-.5l3.1.8c.6.1 1 .7 1 1.3v2.3c0 .7-.6 1.3-1.3 1.3A14.4 14.4 0 012.3 3.6z" />
            </svg>
          </a>
          <button
            type="button"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold-600/40 text-plum xl:hidden"
            aria-label={t.nav.menu}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4" aria-hidden>
              <path d={open ? 'M5 5l10 10M15 5L5 15' : 'M3 6h14M3 10h14M3 14h14'} strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-blush-200/60 xl:hidden">
          <div className="container-site flex flex-col py-2 font-medium text-plum">
            {nav.map(([href, label]) => (
              <NavLink
                key={href}
                href={href}
                className={`py-2.5 transition hover:text-gold-600 ${href === '/gift-cards' ? 'font-semibold text-gold-700' : ''}`}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

/** Closing call-to-action band shared by the FAQ and offer pages. */
export function ContactBand() {
  const { t } = useLang();
  const booking = useBooking();
  return (
    <section className="bg-plum-deep py-20 text-white">
      <div className="container-site max-w-3xl text-center">
        <p className="eyebrow-light">{t.faq.ctaEyebrow}</p>
        <h2 className="mt-3 font-serif text-4xl sm:text-5xl">{t.faq.ctaH2}</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/75">{t.faq.ctaBody}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a href={booking.href} className="btn-gold">
            {booking.label}
          </a>
          <a href={telHref} className="btn-outline-light">
            {t.hero.ctaCall} {BRAND.phone}
          </a>
        </div>
      </div>
    </section>
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
