import Link from 'next/link';
import VMark from '@/components/VMark';

export default function NotFound() {
  return (
    <section className="container-reserve flex min-h-[70vh] flex-col items-center justify-center pt-24 text-center">
      <VMark id="nf" className="h-14 w-auto" />
      <div className="eyebrow mt-10">Not allocated</div>
      <h1 className="h-display mt-4 text-4xl md:text-6xl">This page is not in the Reserve.</h1>
      <Link href="/" className="btn-outline mt-10">Return home</Link>
    </section>
  );
}
