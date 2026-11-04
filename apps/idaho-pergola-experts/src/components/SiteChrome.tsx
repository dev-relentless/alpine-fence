'use client';

import { usePathname } from 'next/navigation';

/** Route prefixes rendered without the site header/footer (paid-traffic landing pages). */
const BARE_PREFIXES = ['/lp'];

export default function SiteChrome({
  header,
  footer,
  children,
}: {
  header: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const bare = BARE_PREFIXES.some((p) => pathname === p || pathname?.startsWith(`${p}/`));

  return (
    <>
      {!bare && header}
      <main className="flex-1">{children}</main>
      {!bare && footer}
    </>
  );
}
