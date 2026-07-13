'use client';

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="container-site py-32 text-center">
      <div className="eyebrow mb-5">500</div>
      <h1 className="h-display text-4xl md:text-6xl text-carbon-950 mb-6">Something <span className="italic">slipped.</span></h1>
      <p className="text-carbon-500 mb-10 max-w-md mx-auto">An unexpected error occurred. The studio has been notified.</p>
      <button onClick={reset} className="btn-primary">Try again</button>
    </section>
  );
}
