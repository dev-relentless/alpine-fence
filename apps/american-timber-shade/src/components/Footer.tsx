import Link from 'next/link';
import Logo from '@/components/Logo';
import { BRAND } from '@/data/brand';
import { spaces } from '@/data/spaces';
import { pergolaStyles } from '@/data/pergolas';
import { NETWORK_STATES } from '@/data/network';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink-depth text-bone-100 mt-28">
      <div className="container-site py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4 space-y-6">
          <Logo variant="light" size="lg" />
          <p className="text-ink-300 max-w-md leading-relaxed text-[15px]">{BRAND.description}</p>
          <p className="text-ink-400 text-[14px]">{BRAND.parent.note}</p>
          <div className="pt-2">
            <a href={`tel:${BRAND.phoneRaw}`} className="font-display text-2xl text-bone-50 hover:text-brass-300 transition-colors">
              {BRAND.phone}
            </a>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="tag-brass mb-4">Pergolas</div>
          <ul className="space-y-2.5 text-[15px] text-ink-200">
            {pergolaStyles.map((p) => (
              <li key={p.slug}>
                <Link href={`/pergolas#${p.slug}`} className="hover:text-bone-50">{p.title}</Link>
              </li>
            ))}
            <li><Link href="/gallery" className="hover:text-bone-50">Gallery</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <div className="tag-brass mb-4">Outdoor Living</div>
          <ul className="space-y-2.5 text-[15px] text-ink-200">
            {spaces.map((s) => (
              <li key={s.slug}>
                <Link href={`/outdoor-living#${s.slug}`} className="hover:text-bone-50">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <div className="tag-brass mb-4">Pergola Experts</div>
          <ul className="space-y-2.5 text-[15px] text-ink-200">
            {NETWORK_STATES.map((s) => (
              <li key={s.key}>
                <a href={s.url} className="hover:text-bone-50">{s.state}</a>
              </li>
            ))}
            <li className="pt-1"><Link href="/locations" className="text-ink-400 hover:text-bone-50">All locations &rarr;</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <div className="tag-brass mb-4">Company</div>
          <ul className="space-y-2.5 text-[15px] text-ink-200">
            <li><Link href="/about" className="hover:text-bone-50">About</Link></li>
            <li><Link href="/locations" className="hover:text-bone-50">Locations</Link></li>
            <li><Link href="/contact" className="hover:text-bone-50">Contact</Link></li>
            <li><Link href="/quote" className="hover:text-bone-50">Start a project</Link></li>
          </ul>
          <div className="tag-brass mt-8 mb-4">Where we build</div>
          <p className="text-[14px] text-ink-300 leading-relaxed">{BRAND.address.states.join(' · ')}</p>
        </div>
      </div>
      <div className="border-t border-ink-800">
        <div className="container-site py-6 flex flex-col md:flex-row gap-3 justify-between text-[13px] text-ink-400">
          <div>&copy; {year} {BRAND.name}. {BRAND.tagline}. All rights reserved.</div>
          <div className="flex flex-wrap gap-6">
            <a href={BRAND.spravekUrl} className="hover:text-bone-100" target="_blank" rel="noopener">A Spravek Company</a>
            <Link href="/privacy" className="hover:text-bone-100">Privacy</Link>
            <Link href="/terms" className="hover:text-bone-100">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
