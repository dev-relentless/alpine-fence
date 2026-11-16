import Link from 'next/link';

const nav = [
  { href: '#services', label: 'Services' },
  { href: '#approach', label: 'Approach' },
  { href: '#materials', label: 'Materials' },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-stone-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-stone-900">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-800 text-white">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 20 L10 7 L14 13 L17 9 L21 20 Z" />
            </svg>
          </span>
          Alpine Fence &amp; Deck
        </Link>
        <nav className="hidden gap-8 text-sm font-medium text-stone-600 sm:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-stone-900">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
