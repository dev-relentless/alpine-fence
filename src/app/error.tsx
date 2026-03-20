'use client';

import Link from 'next/link';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="section-padding bg-white">
      <div className="section-container text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-heading font-bold text-alpine-900 mb-4">Something Went Wrong</h1>
        <p className="text-stone-600 mb-8">
          We encountered an unexpected error. Please try again or contact us directly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={reset} className="btn-primary">
            Try Again
          </button>
          <Link href="/" className="btn-secondary">
            Back to Home
          </Link>
          <a href="tel:+18014713148" className="btn-secondary">
            Call (801) 471-3148
          </a>
        </div>
      </div>
    </section>
  );
}
