import { TRUST_POINTS } from '@/data/brand';

export default function TrustBar() {
  return (
    <div className="grid gap-px bg-obsidian-800 sm:grid-cols-2 lg:grid-cols-4">
      {TRUST_POINTS.map((t) => (
        <div key={t.title} className="bg-obsidian-950 p-6 md:p-8">
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-champagne-500">{t.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-obsidian-300">{t.body}</p>
        </div>
      ))}
    </div>
  );
}
