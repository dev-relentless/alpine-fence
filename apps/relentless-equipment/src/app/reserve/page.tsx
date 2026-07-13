import type { Metadata } from 'next';
import ReserveForm from '@/components/ReserveForm';

export const metadata: Metadata = {
  title: 'Check availability',
  description: 'Tell us the machine, the dates, and the job — we confirm availability within one business day, usually faster.',
};

export default function ReservePage() {
  return (
    <section className="container-yard py-20 md:py-28 grid lg:grid-cols-12 gap-16">
      <div className="lg:col-span-5 space-y-6">
        <div className="tag text-volt-600">Availability</div>
        <h1 className="h-display text-4xl md:text-6xl text-carbon-950 leading-tight">
          Machine, dates, <br /> jobsite. Go.
        </h1>
        <p className="text-carbon-500 leading-relaxed">
          Tell us what you&rsquo;re running and when. If we don&rsquo;t have it, we&rsquo;ll say so
          and point you somewhere that does.
        </p>
        <p className="text-carbon-400 text-sm leading-relaxed">
          In a hurry? Call or text — availability answers are fastest by phone.
        </p>
      </div>
      <div className="lg:col-span-7 bg-dust-100 p-8 md:p-12 border border-carbon-200 shadow-yard">
        <ReserveForm />
      </div>
    </section>
  );
}
