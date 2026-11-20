import Link from 'next/link';
import { RATE_NOTE, Vehicle, usd } from '@/data/fleet';

export default function RateBox({ v }: { v: Vehicle }) {
  const r = v.rates;
  return (
    <div className="card p-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="eyebrow">Daily rate</div>
          <div className="mt-2 font-display text-5xl text-bone-50">
            {usd(r.daily)}<span className="font-sans text-sm text-obsidian-400"> / day</span>
          </div>
        </div>
        <div className="text-right">
          <div className="eyebrow-muted">Weekly</div>
          <div className="mt-2 font-display text-2xl text-bone-100">{usd(r.weekly)}</div>
        </div>
      </div>

      <dl className="mt-6 divide-y divide-obsidian-800 border-y border-obsidian-800 text-sm">
        <Row label="Security deposit" value={`${usd(r.deposit)} refundable hold`} />
        <Row label="Mileage" value={`${r.milesPerDay} mi / day · ${usd(r.extraMile)} per additional mile`} />
        <Row label="Minimum" value={`${r.minDays} day${r.minDays > 1 ? 's' : ''}`} />
        <Row label="Driver age" value={`${r.minAge}+ with valid license & insurance`} />
        <Row label="Delivery" value="Included on the Wasatch Front" />
        {r.chauffeurHourly && (
          <Row label="Chauffeured" value={`${usd(r.chauffeurHourly)} / hr · ${r.chauffeurMinHours}-hr minimum${r.airportTransfer ? ` · SLC transfer ${usd(r.airportTransfer)}` : ''}`} />
        )}
      </dl>

      <div className="mt-6 flex flex-col gap-3">
        <Link href={`/allocation?vehicle=${v.slug}`} className="btn-gold w-full">Check Availability</Link>
        {v.chauffeur && <Link href={`/allocation?vehicle=${v.slug}&service=chauffeured`} className="btn-outline w-full">Request a Driver</Link>}
      </div>
      <p className="mt-5 text-xs leading-relaxed text-obsidian-500">{RATE_NOTE}</p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[120px_1fr] gap-4 py-3">
      <dt className="text-obsidian-400">{label}</dt>
      <dd className="text-obsidian-100">{value}</dd>
    </div>
  );
}
