import Link from 'next/link';
import Image from 'next/image';
import { BRAND } from '@/data/brand';
import { serviceCategories } from '@/data/services';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-forge-depth text-cement-100 mt-24">
      <div className="h-2 bg-joints" aria-hidden />
      <div className="container-slab py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 space-y-5">
          <div className="flex items-center gap-3">
            <Image
              src="/braddock/logo.png"
              alt={BRAND.name}
              width={1000}
              height={867}
              className="h-16 w-auto rounded-sm"
            />
            <div className="font-display uppercase tracking-display text-2xl">
              Braddock <span className="text-signal-500">Concrete</span>
            </div>
          </div>
          <p className="text-iron-300 max-w-md leading-relaxed text-sm">{BRAND.description}</p>
          <p className="text-iron-400 text-sm">{BRAND.parent.note}</p>
        </div>
        <div>
          <div className="tag text-iron-400 mb-4">Company</div>
          <ul className="space-y-2 text-sm text-iron-200">
            <li><Link href="/about" className="hover:text-cement-50">About</Link></li>
            <li><Link href="/contact" className="hover:text-cement-50">Contact</Link></li>
            <li><Link href="/bid" className="hover:text-cement-50">Get a bid</Link></li>
          </ul>
        </div>
        <div>
          <div className="tag text-iron-400 mb-4">The Work</div>
          <ul className="space-y-2 text-sm text-iron-200">
            {serviceCategories.map((c) => (
              <li key={c.slug}>
                <Link href={`/services#${c.slug}`} className="hover:text-cement-50">{c.shortTitle}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-iron-800">
        <div className="container-slab py-6 flex flex-col md:flex-row gap-3 justify-between text-xs text-iron-400">
          <div>&copy; {year} {BRAND.name}. All rights reserved.</div>
          <div className="flex flex-wrap gap-6">
            <a href={BRAND.parent.url} className="hover:text-cement-200" target="_blank" rel="noopener">{BRAND.parent.name}</a>
            <a href={BRAND.spravekUrl} className="hover:text-cement-200" target="_blank" rel="noopener">A Spravek Company</a>
            <Link href="/privacy" className="hover:text-cement-200">Privacy</Link>
            <Link href="/terms" className="hover:text-cement-200">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
