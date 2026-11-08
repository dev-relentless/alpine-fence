import Link from 'next/link';
import { BRAND, smsHref, telHref } from '@/data/brand';
import { services } from '@/data/services';
import ApexMark from './ApexMark';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-basalt-950 text-slab-200 mt-28 overflow-hidden">
      <div className="h-2 bg-joints" aria-hidden />
      <div className="absolute inset-0 bg-grid-dark bg-grid pointer-events-none" aria-hidden />
      <div className="relative container-apex py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5 space-y-6">
          <Link href="/" className="inline-flex items-center gap-3">
            <ApexMark tone="light" className="h-12 w-12" />
            <span className="font-display uppercase text-3xl leading-none tracking-tight text-slab-50">
              Apex <span className="text-flag-500">Concrete</span>
            </span>
          </Link>
          <p className="text-basalt-300 max-w-md leading-relaxed text-sm">{BRAND.description}</p>
          <div className="text-sm text-basalt-300 space-y-1">
            <div><a href={telHref} className="text-slab-50 font-semibold hover:text-flag-300 tabular-nums">{BRAND.phone}</a> · <a href={smsHref} className="hover:text-flag-300">Text</a></div>
            <div><a href={`mailto:${BRAND.email}`} className="hover:text-flag-300">{BRAND.email}</a></div>
            <div>{BRAND.hours}</div>
            <div>{BRAND.address.locality}, {BRAND.address.state} · {BRAND.address.region}</div>
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="tag text-basalt-400 mb-4">Services</div>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-slab-50">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <div className="tag text-basalt-400 mb-4">Company</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-slab-50">About</Link></li>
            <li><Link href="/service-area" className="hover:text-slab-50">Service area</Link></li>
            <li><Link href="/contact" className="hover:text-slab-50">Contact</Link></li>
            <li><Link href="/estimate" className="hover:text-slab-50">Get an estimate</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <div className="tag text-basalt-400 mb-4">Counties</div>
          <ul className="space-y-2 text-sm text-basalt-300">
            {BRAND.address.serviceArea.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative border-t border-basalt-800">
        <div className="container-apex py-6 flex flex-col md:flex-row gap-3 justify-between text-xs text-basalt-400">
          <div>&copy; {year} {BRAND.name}. Licensed &amp; insured in Utah. All rights reserved.</div>
          <div className="flex flex-wrap gap-6">
            <Link href="/privacy" className="hover:text-slab-200">Privacy</Link>
            <Link href="/terms" className="hover:text-slab-200">Terms</Link>
            <a href="/llms.txt" className="hover:text-slab-200">llms.txt</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
