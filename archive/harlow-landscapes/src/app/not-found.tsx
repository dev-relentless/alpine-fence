import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-editorial py-32 md:py-44 text-center">
      <div className="tag mb-4">404</div>
      <h1 className="h-display text-5xl md:text-6xl text-stone-900 mb-6">Not found.</h1>
      <div className="rule mb-8" aria-hidden />
      <p className="text-stone-600 mb-10 max-w-md mx-auto">The page you were looking for is no longer here, or has not been planted yet.</p>
      <Link href="/" className="btn-primary">Return home</Link>
    </section>
  );
}
