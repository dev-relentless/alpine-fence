import type { Metadata } from 'next';
import { BRAND } from '@/data/brand';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contact ${BRAND.name} — design·build studio, Wasatch Front, Utah.`,
};

const smsHref = `sms:${BRAND.phoneRaw}?&body=${encodeURIComponent(BRAND.smsBody)}`;

export default function ContactPage() {
  return (
    <section className="container-site py-24 md:py-32 grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-5 space-y-6">
        <div className="eyebrow">Contact</div>
        <h1 className="h-display text-4xl md:text-6xl text-carbon-950 leading-tight">
          Speak with <span className="italic text-carbon-500">a builder.</span>
        </h1>
        <p className="text-carbon-500 leading-relaxed">
          For projects, the conversation form gives us what we need to arrive prepared.
          For everything else — call or text. A principal answers, not a call center.
        </p>
      </div>
      <div className="lg:col-span-7 space-y-10">
        <div>
          <div className="eyebrow mb-3">Call</div>
          <a href={`tel:${BRAND.phoneRaw}`} className="font-display text-3xl text-carbon-950 hover:text-brass-600 transition-colors">
            {BRAND.phone}
          </a>
        </div>
        <div>
          <div className="eyebrow mb-3">Text</div>
          <a href={smsHref} className="font-display text-3xl text-carbon-950 hover:text-brass-600 transition-colors">
            {BRAND.phone} <span className="text-carbon-400 text-base font-body">— SMS</span>
          </a>
        </div>
        <div>
          <div className="eyebrow mb-3">Where we work</div>
          <p className="font-display text-3xl text-carbon-950">{BRAND.address.region}</p>
          <p className="text-carbon-500 text-sm mt-2">Serving {BRAND.address.cities.slice(0, 8).join(', ')} and the broader Wasatch Front.</p>
        </div>
        <div className="pt-6 flex flex-wrap gap-3">
          <a href="/quote" className="btn-primary">Start a conversation</a>
          <a href={smsHref} className="btn-ghost">Text the studio</a>
        </div>
      </div>
    </section>
  );
}
