import Link from 'next/link';
import Image from 'next/image';
import { BRAND } from '@/data/brand';
import { serviceCategories } from '@/data/services';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-deep-end text-deck-50 mt-28">
      <div className="container-deck py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 space-y-5">
          <div className="flex items-center gap-3">
            <Image
              src="/pool/logo-light.svg"
              alt={BRAND.name}
              width={44}
              height={44}
              className="h-11 w-11"
            />
            <div className="font-display font-semibold text-xl">
              Utah Pool Experts
            </div>
          </div>
          <p className="text-pool-200 max-w-md leading-relaxed text-[15px]">{BRAND.description}</p>
          <div className="text-pool-300 text-[15px] leading-relaxed">
            <div>{BRAND.address.street}, {BRAND.address.locality}, {BRAND.address.state} {BRAND.address.zip}</div>
            <div>{BRAND.hours.weekdays} · {BRAND.hours.weekend}</div>
          </div>
        </div>
        <div>
          <div className="tag !text-pool-300 mb-4">Company</div>
          <ul className="space-y-2.5 text-[15px] text-pool-100">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/quote" className="hover:text-white">Estimates</Link></li>
          </ul>
        </div>
        <div>
          <div className="tag !text-pool-300 mb-4">Services</div>
          <ul className="space-y-2.5 text-[15px] text-pool-100">
            {serviceCategories.map((c) => (
              <li key={c.slug}>
                <Link href={`/services#${c.slug}`} className="hover:text-white">{c.shortTitle}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-pool-900">
        <div className="container-deck py-6 flex flex-col md:flex-row gap-3 justify-between text-[13px] text-pool-300">
          <div>&copy; {year} {BRAND.name}. Serving Utah since {BRAND.founded}.</div>
          <div className="flex flex-wrap gap-6">
            <a href={`tel:${BRAND.phoneRaw}`} className="hover:text-white">{BRAND.phone}</a>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
