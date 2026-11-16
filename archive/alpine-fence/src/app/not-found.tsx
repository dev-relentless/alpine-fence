import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-32 text-center">
      <p className="text-sm font-semibold tracking-widest text-emerald-700">404</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-900">Page not found</h1>
      <Link href="/" className="mt-6 inline-block rounded-md bg-emerald-800 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-900">
        Return home
      </Link>
    </section>
  );
}
