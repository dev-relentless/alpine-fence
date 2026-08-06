import Link from 'next/link';
import { BRAND } from '@/data/brand';
import { structureCategories } from '@/data/structures';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-timber-950 text-linen-100 mt-24">
      <div className="h-2 bg-rafters" aria-hidden />
      <div className="container-patio py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 space-y-5">
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center bg-sky-500 font-display font-bold text-linen-50 text-xl">
              P
            </span>
            <div className="font-display font-semibold tracking-display text-2xl">
              Utah Pergola <span className="text-sky-400">Experts</span>
            </div>
          </div>
          <p className="text-timber-300 max-w-md leading-relaxed text-sm">{BRAND.description}</p>
          <p className="text-timber-400 text-sm">{BRAND.parent.note}</p>
        </div>
        <div>
          <div className="tag text-timber-400 mb-4">Company</div>
          <ul className="space-y-2 text-sm text-timber-200">
            <li><Link href="/about" className="hover:text-linen-50">About</Link></li>
            <li><Link href="/contact" className="hover:text-linen-50">Contact</Link></li>
            <li><Link href="/quote" className="hover:text-linen-50">Get a quote</Link></li>
          </ul>
        </div>
        <div>
          <div className="tag text-timber-400 mb-4">The Structures</div>
          <ul className="space-y-2 text-sm text-timber-200">
            {structureCategories.map((c) => (
              <li key={c.slug}>
                <Link href={`/pergolas#${c.slug}`} className="hover:text-linen-50">{c.shortTitle}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-timber-800">
        <div className="container-patio py-6 flex flex-col md:flex-row gap-3 justify-between text-xs text-timber-400">
          <div>&copy; {year} {BRAND.name}. All rights reserved.</div>
          <div className="flex flex-wrap gap-6">
            <a href={BRAND.parent.url} className="hover:text-linen-200" target="_blank" rel="noopener">{BRAND.parent.name}</a>
            <a href={BRAND.spravekUrl} className="hover:text-linen-200" target="_blank" rel="noopener">A Spravek Company</a>
            <Link href="/privacy" className="hover:text-linen-200">Privacy</Link>
            <Link href="/terms" className="hover:text-linen-200">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
