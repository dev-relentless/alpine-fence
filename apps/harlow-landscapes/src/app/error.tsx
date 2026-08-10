'use client';

import Link from 'next/link';

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <section className="container-editorial py-32 md:py-44 text-center">
      <div className="tag mb-4">Something happened</div>
      <h1 className="h-display text-5xl md:text-6xl text-stone-900 mb-6">Apologies.</h1>
      <div className="rule mb-8" aria-hidden />
      <p className="text-stone-600 mb-10 max-w-md mx-auto">An unexpected error occurred. The firm has been notified.</p>
      <div className="flex gap-3 justify-center">
        <button onClick={reset} className="btn-primary">Try again</button>
        <Link href="/" className="btn-ghost">Return home</Link>
      </div>
    </section>
  );
}
