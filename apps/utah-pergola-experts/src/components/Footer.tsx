import Link from 'next/link';
import Image from 'next/image';
import { BRAND } from '@/data/brand';
import { structureCategories } from '@/data/structures';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-walnut-depth text-linen-100 mt-28">
      <div className="container-patio py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 space-y-5">
          <div className="flex items-center gap-4">
            <Image
              src="/pergola/logo.png"
              alt={BRAND.name}
              width={687}
              height={577}
              className="h-16 w-auto rounded-sm"
            />
            <div className="font-display font-semibold text-2xl">
              Utah Pergola Experts
            </div>
          </div>
          <p className="text-timber-300 max-w-md leading-relaxed text-[15px]">{BRAND.description}</p>
          <p className="text-timber-400 text-[15px]">{BRAND.parent.note}</p>
        </div>
        <div>
          <div className="tag text-timber-400 mb-4">The Company</div>
          <ul className="space-y-2.5 text-[15px] text-timber-200">
            <li><Link href="/about" className="hover:text-linen-50">About</Link></li>
            <li><Link href="/contact" className="hover:text-linen-50">Contact</Link></li>
            <li><Link href="/quote" className="hover:text-linen-50">Consultations</Link></li>
          </ul>
        </div>
        <div>
          <div className="tag text-timber-400 mb-4">The Structures</div>
          <ul className="space-y-2.5 text-[15px] text-timber-200">
            {structureCategories.map((c) => (
              <li key={c.slug}>
                <Link href={`/pergolas#${c.slug}`} className="hover:text-linen-50">{c.shortTitle}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-timber-900">
        <div className="container-patio py-6 flex flex-col md:flex-row gap-3 justify-between text-[13px] text-timber-400">
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
