import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-apex py-32 text-center">
      <div className="tag mb-4">404</div>
      <h1 className="h-display text-6xl md:text-8xl text-basalt-950 mb-6">Not on the plans.</h1>
      <p className="text-basalt-500 mb-10 max-w-md mx-auto">That page doesn’t exist. Check the address or head back to solid ground.</p>
      <div className="flex justify-center gap-3">
        <Link href="/" className="btn-primary">Back to home</Link>
        <Link href="/services" className="btn-ghost">See services</Link>
      </div>
    </section>
  );
}
