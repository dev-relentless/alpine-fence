import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/data/brand';

export const metadata: Metadata = {
  title: 'The Firm',
  description: 'About Harlow Landscapes — a premium design-build firm backed by 20+ years of Wasatch Front craftsmanship.',
};

export default function AboutPage() {
  return (
    <>
      <section className="container-editorial py-24 md:py-32 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-6">
          <div className="eyebrow">The Firm</div>
          <h1 className="h-display text-5xl md:text-6xl text-stone-900 leading-tight">
            A small firm. <br />
            <span className="text-moss-700">Considered work.</span>
          </h1>
        </div>
        <div className="lg:col-span-7 space-y-6 text-stone-700 leading-relaxed text-lg">
          <p>
            Harlow Landscapes is a premium landscape design-build firm composing full outdoor environments — for estate residences, architecturally-significant homes, and the properties that surround them — along Utah&rsquo;s Wasatch Front.
          </p>
          <p>
            We are a deliberately small practice. Each project is led from concept through construction by the same designer, built by our own crews, and cared for by the team that built it. Nothing is brokered. Nothing is handed off.
          </p>
          <p>
            The firm is part of a family of companies anchored by <a href={BRAND.parent.url} className="underline decoration-bronze-400 underline-offset-4 hover:text-stone-900">{BRAND.parent.name}</a>, with more than two decades of construction craft on the Wasatch Front. Harlow Landscapes is its design-led landscape practice.
          </p>
        </div>
      </section>

      <section className="bg-stone-900 text-ivory-50">
        <div className="container-editorial py-24 md:py-32 grid lg:grid-cols-3 gap-10">
          {[
            { k: 'Design-led', v: 'Every project starts on the drawing board, not in a sales meeting.' },
            { k: 'Self-performed', v: 'Masonry, carpentry, irrigation, planting, and lighting handled by our own crews.' },
            { k: 'Long-term', v: 'We stay with the landscapes we build — through their first decade and beyond.' },
          ].map((v) => (
            <div key={v.k} className="space-y-3">
              <div className="font-display text-2xl text-bronze-300">{v.k}</div>
              <p className="text-ivory-100/80 leading-relaxed">{v.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-editorial py-24 md:py-32 text-center">
        <Link href="/inquire" className="btn-primary">Begin a project</Link>
      </section>
    </>
  );
}
