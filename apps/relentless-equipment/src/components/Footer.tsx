import Link from 'next/link';
import { BRAND } from '@/data/brand';
import { fleetCategories } from '@/data/fleet';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-carbon-950 text-dust-100 mt-24">
      <div className="h-2 bg-hazard" aria-hidden />
      <div className="container-yard py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 space-y-5">
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center bg-volt-500 font-display font-bold text-carbon-950 text-xl">
              R
            </span>
            <div className="font-display uppercase tracking-headline text-2xl font-bold">
              Relentless <span className="text-volt-500">Equipment</span>
            </div>
          </div>
          <p className="text-carbon-300 max-w-md leading-relaxed text-sm">{BRAND.description}</p>
          <p className="text-carbon-400 text-sm">{BRAND.parent.note}</p>
        </div>
        <div>
          <div className="tag text-carbon-400 mb-4">Company</div>
          <ul className="space-y-2 text-sm text-carbon-200">
            <li><Link href="/about" className="hover:text-dust-50">About</Link></li>
            <li><Link href="/contact" className="hover:text-dust-50">Contact</Link></li>
            <li><Link href="/reserve" className="hover:text-dust-50">Check availability</Link></li>
          </ul>
        </div>
        <div>
          <div className="tag text-carbon-400 mb-4">The Yard</div>
          <ul className="space-y-2 text-sm text-carbon-200">
            {fleetCategories.map((c) => (
              <li key={c.slug}>
                <Link href={`/fleet#${c.slug}`} className="hover:text-dust-50">{c.shortTitle}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-carbon-800">
        <div className="container-yard py-6 flex flex-col md:flex-row gap-3 justify-between text-xs text-carbon-400">
          <div>&copy; {year} {BRAND.name}. All rights reserved.</div>
          <div className="flex flex-wrap gap-6">
            <a href={BRAND.parent.url} className="hover:text-dust-200" target="_blank" rel="noopener">{BRAND.parent.name}</a>
            <a href={BRAND.spravekUrl} className="hover:text-dust-200" target="_blank" rel="noopener">A Spravek Company</a>
            <Link href="/privacy" className="hover:text-dust-200">Privacy</Link>
            <Link href="/terms" className="hover:text-dust-200">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
