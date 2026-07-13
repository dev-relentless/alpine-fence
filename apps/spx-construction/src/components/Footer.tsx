import Link from 'next/link';
import { BRAND } from '@/data/brand';
import { spxServices } from '@/data/services';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-iron-950 text-concrete-100 mt-24 border-t-4 border-signal-500">
      <div className="container-site py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 space-y-5">
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center bg-signal-500 font-display font-extrabold text-iron-950 text-sm">
              SPX
            </span>
            <div className="font-display uppercase tracking-headline text-2xl font-extrabold">
              SPX <span className="text-signal-500">Construction</span>
            </div>
          </div>
          <p className="text-iron-300 max-w-md leading-relaxed text-sm">{BRAND.description}</p>
          <p className="text-iron-400 text-sm">{BRAND.parent.note}</p>
        </div>
        <div>
          <div className="tag text-iron-400 mb-4">Company</div>
          <ul className="space-y-2 text-sm text-iron-200">
            <li><Link href="/about" className="hover:text-concrete-50">About</Link></li>
            <li><Link href="/process" className="hover:text-concrete-50">Process</Link></li>
            <li><Link href="/contact" className="hover:text-concrete-50">Contact</Link></li>
            <li><Link href="/quote" className="hover:text-concrete-50">Get a bid</Link></li>
          </ul>
        </div>
        <div>
          <div className="tag text-iron-400 mb-4">Services</div>
          <ul className="space-y-2 text-sm text-iron-200">
            {spxServices.map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="hover:text-concrete-50">{s.shortTitle}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-iron-800">
        <div className="container-site py-6 flex flex-col md:flex-row gap-3 justify-between text-xs text-iron-400">
          <div>&copy; {year} {BRAND.name}. All rights reserved.</div>
          <div className="flex flex-wrap gap-6">
            <a href={BRAND.parent.url} className="hover:text-concrete-200" target="_blank" rel="noopener">{BRAND.parent.name}</a>
            <a href={BRAND.spravekUrl} className="hover:text-concrete-200" target="_blank" rel="noopener">A Spravek Company</a>
            <Link href="/privacy" className="hover:text-concrete-200">Privacy</Link>
            <Link href="/terms" className="hover:text-concrete-200">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
