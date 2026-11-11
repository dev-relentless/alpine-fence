'use client';

import Link from 'next/link';

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="container-reserve flex min-h-[70vh] flex-col items-center justify-center pt-24 text-center">
      <div className="eyebrow">Something went wrong</div>
      <h1 className="h-display mt-4 text-4xl md:text-6xl">A brief interruption.</h1>
      <div className="mt-10 flex gap-4">
        <button type="button" onClick={reset} className="btn-gold">Try again</button>
        <Link href="/" className="btn-outline">Home</Link>
      </div>
    </section>
  );
}
