import Link from 'next/link';
import { BRAND } from '@/data/brand';
import { harlowServices } from '@/data/services';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-stone-900 text-ivory-100 mt-24">
      <div className="container-editorial py-16 md:py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 space-y-5">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/harlow/monogram-light.svg" alt="" className="h-11 w-11 object-contain" />
            <div className="font-display font-medium text-2xl tracking-display">
              Harlow Landscapes
            </div>
          </div>
          <p className="text-stone-300 max-w-md leading-relaxed text-[15px]">{BRAND.description}</p>
          <p className="text-stone-400 text-[15px]">{BRAND.parent.note}</p>
        </div>
        <div>
          <div className="tag text-stone-400 mb-4">The Firm</div>
          <ul className="space-y-2.5 text-[15px] text-stone-200">
            <li><Link href="/about" className="hover:text-ivory-50">About</Link></li>
            <li><Link href="/process" className="hover:text-ivory-50">Process</Link></li>
            <li><Link href="/portfolio" className="hover:text-ivory-50">Portfolio</Link></li>
            <li><Link href="/contact" className="hover:text-ivory-50">Contact</Link></li>
            <li><Link href="/inquire" className="hover:text-ivory-50">Begin a project</Link></li>
          </ul>
        </div>
        <div>
          <div className="tag text-stone-400 mb-4">Services</div>
          <ul className="space-y-2.5 text-[15px] text-stone-200">
            {harlowServices.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="hover:text-ivory-50">{s.shortTitle}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-stone-800">
        <div className="container-editorial py-6 flex flex-col md:flex-row gap-3 justify-between text-[13px] text-stone-400">
          <div>&copy; {year} {BRAND.name}. All rights reserved.</div>
          <div className="flex flex-wrap gap-6">
            <a href={BRAND.parent.url} className="hover:text-ivory-100" target="_blank" rel="noopener">{BRAND.parent.name}</a>
            <a href="https://spravek.com" className="hover:text-ivory-100" target="_blank" rel="noopener">A Spravek Company</a>
            <Link href="/privacy" className="hover:text-ivory-100">Privacy</Link>
            <Link href="/terms" className="hover:text-ivory-100">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
