import Link from 'next/link';
import Lockup from './Lockup';
import { BRAND } from '@/data/brand';
import { FLEET } from '@/data/fleet';

export default function Footer() {
  return (
    <footer className="border-t border-obsidian-800 bg-obsidian-950">
      <div className="container-reserve py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Lockup id="ftr" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-obsidian-300">{BRAND.shortDescription}</p>
            <p className="mt-6 font-sans text-[11px] uppercase tracking-tag text-champagne-600">{BRAND.tagline}</p>
          </div>

          <div>
            <h3 className="eyebrow-muted">The Fleet</h3>
            <ul className="mt-5 space-y-3">
              {FLEET.map((v) => (
                <li key={v.slug}>
                  <Link href={`/fleet/${v.slug}`} className="text-sm text-obsidian-200 transition-colors hover:text-champagne-300">
                    <span className="text-obsidian-500">{v.numeral}.</span> {v.role}
                    <span className="block text-xs text-obsidian-400">{v.make} {v.model}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow-muted">Reserve</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link href="/allocation" className="text-obsidian-200 hover:text-champagne-300">Request Allocation</Link></li>
              <li><Link href="/chauffeur" className="text-obsidian-200 hover:text-champagne-300">Chauffeur Service</Link></li>
              <li><Link href="/about" className="text-obsidian-200 hover:text-champagne-300">The Reserve</Link></li>
              <li><Link href="/terms" className="text-obsidian-200 hover:text-champagne-300">Rental Terms</Link></li>
              <li><Link href="/privacy" className="text-obsidian-200 hover:text-champagne-300">Privacy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow-muted">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href={`tel:${BRAND.phoneRaw}`} className="text-obsidian-200 hover:text-champagne-300">{BRAND.phone}</a></li>
              <li><a href={`mailto:${BRAND.email}`} className="break-all text-obsidian-200 hover:text-champagne-300">{BRAND.email}</a></li>
              <li className="text-obsidian-400">{BRAND.address.region}</li>
              <li className="text-obsidian-400">Delivery along the Wasatch Front, Park City &amp; SLC airport</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-obsidian-800 pt-8 text-xs text-obsidian-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {BRAND.legalLine}. All rights reserved.
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
