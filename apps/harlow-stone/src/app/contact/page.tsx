import type { Metadata } from 'next';
import { BRAND } from '@/data/brand';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contact ${BRAND.name} — premium landscape design-build studio, Wasatch Front, Utah.`,
};

const smsHref = `sms:${BRAND.phoneRaw}?&body=${encodeURIComponent(BRAND.smsBody)}`;

export default function ContactPage() {
  return (
    <section className="container-editorial py-24 md:py-32 grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-5 space-y-6">
        <div className="eyebrow">Contact</div>
        <h1 className="h-display text-5xl md:text-6xl text-stone-900 leading-tight">
          The studio.
        </h1>
        <p className="text-stone-600 leading-relaxed">
          For new projects, the inquiry form gives us the right starting points. For everything else, reach the studio directly — call, text, or email. The principal answers each one.
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
          <div className="eyebrow mb-2">Call</div>
          <a href={`tel:${BRAND.phoneRaw}`} className="font-display text-2xl text-stone-900 hover:text-moss-700">
            {BRAND.phone}
          </a>
        </div>
        <div>
          <div className="eyebrow mb-2">Text the studio</div>
          <a href={smsHref} className="font-display text-2xl text-stone-900 hover:text-moss-700">
            {BRAND.phone} <span className="italic text-bronze-500 text-base">— SMS</span>
          </a>
        </div>
        <div>
          <div className="eyebrow mb-2">Region</div>
          <p className="font-display text-2xl text-stone-900">{BRAND.address.region}</p>
          <p className="text-stone-500 text-sm mt-1">Serving {BRAND.address.cities.slice(0, 8).join(', ')} and the broader Wasatch Front.</p>
        </div>
        <div className="pt-6 flex flex-wrap gap-3">
          <a href="/inquire" className="btn-primary">Begin a project</a>
          <a href={smsHref} className="btn-ghost">Text us</a>
        </div>
      </div>
    </section>
  );
}
