import Link from 'next/link';
import { BRAND } from '@/data/brand';
import { harlowServices } from '@/data/services';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-stone-900 text-ivory-100 mt-24">
      <div className="container-editorial py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 space-y-5">
          <div className="font-display text-3xl tracking-display-tight">
            Harlow <span className="text-bronze-400">&amp;</span> Stone
          </div>
          <p className="text-stone-400 max-w-md leading-relaxed">{BRAND.description}</p>
          <p className="text-stone-500 text-sm">{BRAND.parent.note}</p>
        </div>
        <div>
          <div className="eyebrow text-stone-400 mb-4">Studio</div>
          <ul className="space-y-2 text-sm text-stone-300">
            <li><Link href="/about" className="hover:text-ivory-50">About</Link></li>
            <li><Link href="/process" className="hover:text-ivory-50">Process</Link></li>
            <li><Link href="/portfolio" className="hover:text-ivory-50">Portfolio</Link></li>
            <li><Link href="/contact" className="hover:text-ivory-50">Contact</Link></li>
            <li><Link href="/inquire" className="hover:text-ivory-50">Begin a project</Link></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow text-stone-400 mb-4">Services</div>
          <ul className="space-y-2 text-sm text-stone-300">
            {harlowServices.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="hover:text-ivory-50">{s.shortTitle}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-stone-800">
        <div className="container-editorial py-6 flex flex-col md:flex-row gap-3 justify-between text-xs text-stone-500">
          <div>&copy; {year} {BRAND.name}. All rights reserved.</div>
          <div className="flex gap-6">
            <a href={BRAND.parent.url} className="hover:text-ivory-200">{BRAND.parent.name}</a>
            <Link href="/privacy" className="hover:text-ivory-200">Privacy</Link>
            <Link href="/terms" className="hover:text-ivory-200">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
