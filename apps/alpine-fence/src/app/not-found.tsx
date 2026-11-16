import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="px-6 text-center">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Alpine Fence &amp; Deck</h1>
      <p className="mt-4 text-stone-500">
        Page not found.{' '}
        <Link href="/" className="underline hover:text-stone-800">
          Return home
        </Link>
      </p>
    </main>
  );
}
