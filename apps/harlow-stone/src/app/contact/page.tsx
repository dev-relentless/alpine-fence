import type { Metadata } from 'next';
import { BRAND } from '@/data/brand';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contact ${BRAND.name} — premium landscape design-build studio, Wasatch Front, Utah.`,
};

export default function ContactPage() {
  return (
    <section className="container-editorial py-24 md:py-32 grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-5 space-y-6">
        <div className="eyebrow">Contact</div>
        <h1 className="h-display text-5xl md:text-6xl text-stone-900 leading-tight">
          The studio.
        </h1>
        <p className="text-stone-600 leading-relaxed">
          For new projects, please use the inquiry form so we can ask the right questions up front. For everything else, you can reach the studio directly.
        </p>
      </div>
      <div className="lg:col-span-7 space-y-10">
        <div>
          <div className="eyebrow mb-2">Email</div>
          <a href={`mailto:${BRAND.email}`} className="font-display text-2xl text-stone-900 hover:text-moss-700">
            {BRAND.email}
          </a>
        </div>
        <div>
          <div className="eyebrow mb-2">Phone</div>
          <a href={`tel:${BRAND.phone.replace(/\D/g, '')}`} className="font-display text-2xl text-stone-900 hover:text-moss-700">
            {BRAND.phone}
          </a>
        </div>
        <div>
          <div className="eyebrow mb-2">Region</div>
          <p className="font-display text-2xl text-stone-900">{BRAND.address.region}</p>
        </div>
        <div className="pt-6">
          <a href="/inquire" className="btn-primary">Begin a project</a>
        </div>
      </div>
    </section>
  );
}
