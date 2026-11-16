import Link from 'next/link';
import { BRAND } from '@/data/brand';
import { spxServices } from '@/data/services';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-carbon-950 text-bone-100 mt-28 border-t border-brass-500/40">
      <div className="container-site py-20 grid gap-14 md:grid-cols-4">
        <div className="md:col-span-2 space-y-6">
          <div className="flex items-center gap-3.5">
            <span className="font-display text-3xl tracking-[0.06em] text-bone-50">SPX</span>
            <span className="h-5 w-px bg-brass-400/70" aria-hidden />
            <span className="text-[10px] uppercase tracking-[0.3em] text-carbon-300">
              Design <span className="text-brass-300">·</span> Build
            </span>
          </div>
          <p className="text-carbon-300 max-w-md leading-relaxed text-sm">{BRAND.description}</p>
          <p className="text-carbon-400 text-sm">{BRAND.parent.note}</p>
        </div>
        <div>
          <div className="eyebrow text-carbon-400 mb-5">Studio</div>
          <ul className="space-y-2.5 text-sm text-carbon-200">
            <li><Link href="/about" className="hover:text-bone-50 transition-colors">About</Link></li>
            <li><Link href="/process" className="hover:text-bone-50 transition-colors">Approach</Link></li>
            <li><Link href="/contact" className="hover:text-bone-50 transition-colors">Contact</Link></li>
            <li><Link href="/quote" className="hover:text-bone-50 transition-colors">Start a conversation</Link></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow text-carbon-400 mb-5">The work</div>
          <ul className="space-y-2.5 text-sm text-carbon-200">
            {spxServices.map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="hover:text-bone-50 transition-colors">{s.shortTitle}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-carbon-800">
        <div className="container-site py-6 flex flex-col md:flex-row gap-3 justify-between text-xs text-carbon-400">
          <div>&copy; {year} {BRAND.name}. All rights reserved.</div>
          <div className="flex flex-wrap gap-6">
            <a href={BRAND.parent.url} className="hover:text-bone-200 transition-colors" target="_blank" rel="noopener">{BRAND.parent.name}</a>
            <a href={BRAND.spravekUrl} className="hover:text-bone-200 transition-colors" target="_blank" rel="noopener">A Spravek Company</a>
            <Link href="/privacy" className="hover:text-bone-200 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-bone-200 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
