import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-slab py-32 text-center">
      <div className="tag mb-4">404</div>
      <h1 className="h-display text-4xl md:text-6xl text-iron-950 mb-6">Not found.</h1>
      <p className="text-iron-500 mb-10 max-w-md mx-auto">That page isn&rsquo;t on the plans. Check the address or head back to solid ground.</p>
      <Link href="/" className="btn-primary">Back to home</Link>
    </section>
  );
}
