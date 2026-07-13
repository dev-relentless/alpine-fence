import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-site py-32 text-center">
      <div className="tag mb-4">404</div>
      <h1 className="h-display text-4xl md:text-6xl text-iron-950 mb-6">Not found.</h1>
      <p className="text-iron-500 mb-10 max-w-md mx-auto">The page you were looking for isn&rsquo;t here — or hasn&rsquo;t been built yet.</p>
      <Link href="/" className="btn-primary">Back to home</Link>
    </section>
  );
}
