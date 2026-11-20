import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-deck py-32 text-center">
      <div className="tag mb-4">404</div>
      <h1 className="h-display text-4xl md:text-6xl text-pool-950 mb-6">Not found.</h1>
      <p className="text-pool-500 mb-10 max-w-md mx-auto">That page went off the deep end. Head back to shallower water.</p>
      <Link href="/" className="btn-primary">Back to home</Link>
    </section>
  );
}
