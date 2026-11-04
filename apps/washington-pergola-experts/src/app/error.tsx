'use client';

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="container-patio py-32 text-center">
      <div className="tag mb-4">500</div>
      <h1 className="h-display text-4xl md:text-6xl text-timber-950 mb-6">Something broke.</h1>
      <p className="text-timber-500 mb-10 max-w-md mx-auto">An unexpected error occurred. The crew has been notified.</p>
      <button onClick={reset} className="btn-primary">Try again</button>
    </section>
  );
}
