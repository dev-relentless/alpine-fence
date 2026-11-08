'use client';

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="container-apex py-32 text-center">
      <div className="tag mb-4">500</div>
      <h1 className="h-display text-6xl md:text-8xl text-basalt-950 mb-6">Something cracked.</h1>
      <p className="text-basalt-500 mb-10 max-w-md mx-auto">An unexpected error occurred. The crew has been notified.</p>
      <button onClick={reset} className="btn-primary">Try again</button>
    </section>
  );
}
