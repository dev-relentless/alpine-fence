import Link from 'next/link';
import { BRAND } from '@/data/brand';
import { harlowServices } from '@/data/services';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-stone-950 text-ivory-100 mt-24 overflow-hidden">
      {/* logo watermark */}
      <div className="pointer-events-none absolute -right-16 -bottom-24 opacity-[0.14] hidden md:block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/harlow/monogram-light.svg" alt="" className="w-[480px] h-[480px] object-contain" />
      </div>

      <div className="relative container-editorial py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 space-y-5">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/harlow/monogram-light.svg" alt="" className="h-12 w-12 object-contain" />
            <div className="font-display text-3xl tracking-display-tight">
              Harlow <span className="italic text-bronze-300">Landscapes</span>
            </div>
          </div>
          <p className="text-stone-400 max-w-md leading-relaxed">{BRAND.description}</p>
          <p className="text-stone-500 text-sm">{BRAND.parent.note}</p>
        </div>
        <div>
          <div className="eyebrow text-stone-400 mb-4">The Firm</div>
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
      <div className="relative border-t border-stone-800">
        <div className="container-editorial py-6 flex flex-col md:flex-row gap-3 justify-between text-xs text-stone-500">
          <div>&copy; {year} {BRAND.name}. All rights reserved.</div>
          <div className="flex flex-wrap gap-6">
            <a href={BRAND.parent.url} className="hover:text-ivory-200" target="_blank" rel="noopener">{BRAND.parent.name}</a>
            <a href="https://spravek.com" className="hover:text-ivory-200" target="_blank" rel="noopener">A Spravek Company</a>
            <Link href="/privacy" className="hover:text-ivory-200">Privacy</Link>
            <Link href="/terms" className="hover:text-ivory-200">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
