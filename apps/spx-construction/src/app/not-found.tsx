import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-site py-32 text-center">
      <div className="eyebrow mb-5">404</div>
      <h1 className="h-display text-4xl md:text-6xl text-carbon-950 mb-6">Not <span className="italic">here.</span></h1>
      <p className="text-carbon-500 mb-10 max-w-md mx-auto">The page you were looking for doesn&rsquo;t exist — or hasn&rsquo;t been built yet.</p>
      <Link href="/" className="btn-primary">Back to home</Link>
    </section>
  );
}
