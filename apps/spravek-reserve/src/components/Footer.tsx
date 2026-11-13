import Link from 'next/link';
import Lockup from './Lockup';
import { BRAND } from '@/data/brand';
import { FLEET, usd } from '@/data/fleet';

const COMPANY = [
  ['/rates', 'Rates & Requirements'],
  ['/chauffeur', 'Chauffeur Service'],
  ['/locations', 'Delivery Locations'],
  ['/faq', 'FAQ'],
  ['/about', 'About the Reserve'],
  ['/terms', 'Rental Terms & Cancellation'],
  ['/privacy', 'Privacy'],
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-obsidian-800 bg-obsidian-950">
      <div className="container-reserve py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Lockup id="ftr" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-obsidian-300">{BRAND.shortDescription}</p>
            <p className="mt-6 font-sans text-[11px] uppercase tracking-tag text-champagne-600">{BRAND.tagline}</p>
            <Link href="/allocation" className="btn-gold mt-8 !px-5 !py-2.5">Request Allocation</Link>
          </div>

          <div>
            <h3 className="eyebrow-muted">Rental Fleet</h3>
            <ul className="mt-5 space-y-3">
              {FLEET.map((v) => (
                <li key={v.slug}>
                  <Link href={`/fleet/${v.slug}`} className="text-sm text-obsidian-200 transition-colors hover:text-champagne-300">
                    {v.year} {v.make} {v.model}
                    <span className="block text-xs text-obsidian-400">From {usd(v.rates.daily)} / day{v.chauffeur ? ' · chauffeur available' : ''}</span>
                  </Link>
                </li>
              ))}
              <li><Link href="/fleet" className="text-sm text-champagne-500 hover:text-champagne-300">View all rentals →</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow-muted">Company</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {COMPANY.map(([href, label]) => (
                <li key={href}><Link href={href} className="text-obsidian-200 hover:text-champagne-300">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow-muted">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href={`tel:${BRAND.phoneRaw}`} className="text-obsidian-200 hover:text-champagne-300">{BRAND.phone}</a></li>
              <li><a href={`mailto:${BRAND.email}`} className="break-all text-obsidian-200 hover:text-champagne-300">{BRAND.email}</a></li>
              <li className="text-obsidian-400">{BRAND.address.locality}, {BRAND.address.state} · {BRAND.address.region}</li>
              <li className="text-obsidian-400">{BRAND.hours.display}</li>
              <li className="text-obsidian-400">Serving {BRAND.address.cities.slice(0, 6).join(', ')} &amp; {BRAND.address.airport}</li>
              <li><a href={BRAND.social.instagram} rel="noopener noreferrer" target="_blank" className="text-obsidian-200 hover:text-champagne-300">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-obsidian-800 pt-8 text-xs text-obsidian-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {BRAND.legalLine}. All rights reserved. Commercially insured · {BRAND.address.locality}, Utah.
          </p>
          <p>
            A <a href={BRAND.spravekUrl} className="text-obsidian-300 hover:text-champagne-300">Spravek</a> company · Sister to{' '}
            <a href={BRAND.parent.url} className="text-obsidian-300 hover:text-champagne-300">{BRAND.parent.name}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
