'use client';

import { useMemo, useState } from 'react';
import { ZONES } from '@/data/brand';
import { FLEET, RATE_NOTE, usd } from '@/data/fleet';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const OCCASIONS = ['Wedding', 'Anniversary / birthday', 'Airport / Park City transfer', 'Business / executive travel', 'Canyon drive / weekend', 'Towing (boat, horse, toy hauler)', 'Photo / film shoot', 'Other'];
const TIMES = ['Morning (7–10 am)', 'Midday (10 am–1 pm)', 'Afternoon (1–5 pm)', 'Evening (5–9 pm)', 'Flight-timed (airport)'];

export interface AllocationFormProps {
  vehicle?: string;
  service?: string;
  start?: string;
  end?: string;
}

function daysBetween(a?: string, b?: string) {
  if (!a || !b) return 0;
  const d = (new Date(b).getTime() - new Date(a).getTime()) / 86_400_000;
  return Number.isFinite(d) ? Math.max(0, Math.round(d)) : 0;
}

export default function AllocationForm({ vehicle, service, start, end }: AllocationFormProps) {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const [reference, setReference] = useState<string | null>(null);
  const [picked, setPicked] = useState<string>(vehicle && FLEET.some((v) => v.slug === vehicle) ? vehicle : '');
  const [svc, setSvc] = useState<string>(service === 'chauffeured' ? 'chauffeured' : 'self-drive');
  const [startDate, setStartDate] = useState(start ?? '');
  const [endDate, setEndDate] = useState(end ?? '');

  const v = FLEET.find((x) => x.slug === picked);
  const chauffeurAvailable = picked === '' || v?.chauffeur;
  const days = daysBetween(startDate, endDate);

  const estimate = useMemo(() => {
    if (!v || svc === 'chauffeured') return null;
    const n = Math.max(v.rates.minDays, days || v.rates.minDays);
    const weeks = Math.floor(n / 7);
    const rem = n % 7;
    const total = weeks * v.rates.weekly + Math.min(rem * v.rates.daily, rem > 0 ? v.rates.weekly : 0);
    return { n, total };
  }, [v, svc, days]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setMessage('');
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const res = await fetch('/api/allocation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setStatus('sent');
      setReference(data.reference ?? null);
      setMessage('Received. We will confirm availability and send a written quote within one business day.');
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus('error');
      setMessage(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  if (status === 'sent') {
    return (
      <div className="card p-10 text-center">
        <div className="eyebrow">Request received</div>
        {reference && <div className="mt-4 font-display text-5xl text-champagne-400">Ref. {reference}</div>}
        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-obsidian-200">{message}</p>
        <p className="mt-3 text-xs text-obsidian-500">Your dates are held once the rental agreement is signed and the deposit is placed.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8" noValidate>
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <fieldset>
        <legend className="label">Vehicle <span className="text-champagne-500">*</span></legend>
        <div className="grid gap-3 sm:grid-cols-3">
          {FLEET.map((x) => (
            <label
              key={x.slug}
              className={`cursor-pointer border p-4 transition-colors ${picked === x.slug ? 'border-champagne-500 bg-champagne-500/5' : 'border-obsidian-700 hover:border-obsidian-500'}`}
            >
              <input type="radio" name="vehicle" value={x.slug} className="sr-only" checked={picked === x.slug} onChange={() => { setPicked(x.slug); if (!x.chauffeur) setSvc('self-drive'); }} required />
              <div className="eyebrow-muted">{x.year} · {x.make}</div>
              <div className="mt-1 font-display text-lg text-bone-50">{x.model}</div>
              <div className="mt-2 text-xs text-obsidian-300">From {usd(x.rates.daily)} / day · {x.rates.milesPerDay} mi</div>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="label">Service</legend>
        <div className="flex flex-wrap gap-3">
          {[['self-drive', 'Self-drive'], ['chauffeured', 'Chauffeured (S 580 only)']].map(([val, lbl]) => {
            const disabled = val === 'chauffeured' && !chauffeurAvailable;
            return (
              <label key={val} className={`cursor-pointer border px-5 py-3 text-sm transition-colors ${svc === val ? 'border-champagne-500 text-bone-50' : 'border-obsidian-700 text-obsidian-300 hover:border-obsidian-500'} ${disabled ? 'cursor-not-allowed opacity-40' : ''}`}>
                <input type="radio" name="service" value={val} className="sr-only" checked={svc === val} disabled={disabled} onChange={() => setSvc(val)} />
                {lbl}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="grid gap-6 md:grid-cols-3">
        <div>
          <label className="label" htmlFor="startDate">{svc === 'chauffeured' ? 'Service date' : 'Pickup date'} <span className="text-champagne-500">*</span></label>
          <input id="startDate" name="startDate" type="date" required value={startDate} min={new Date().toISOString().slice(0, 10)} onChange={(e) => setStartDate(e.target.value)} className="field [color-scheme:dark]" />
        </div>
        <div>
          <label className="label" htmlFor="endDate">{svc === 'chauffeured' ? 'End date (if multi-day)' : 'Return date'} {svc !== 'chauffeured' && <span className="text-champagne-500">*</span>}</label>
          <input id="endDate" name="endDate" type="date" required={svc !== 'chauffeured'} value={endDate} min={startDate || undefined} onChange={(e) => setEndDate(e.target.value)} className="field [color-scheme:dark]" />
        </div>
        <Select label={svc === 'chauffeured' ? 'Pickup time' : 'Delivery window'} name="pickupTime" options={TIMES} />
      </div>

      {estimate && (
        <div className="flex flex-col gap-2 border border-obsidian-800 bg-obsidian-900/60 px-5 py-4 text-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="text-obsidian-200">
            Estimated rental: <span className="font-display text-xl text-bone-50">{usd(estimate.total)}</span>
            <span className="text-obsidian-400"> for {estimate.n} day{estimate.n > 1 ? 's' : ''} · {v!.rates.milesPerDay * estimate.n} mi included · {usd(v!.rates.deposit)} refundable deposit</span>
          </div>
          <span className="text-xs text-obsidian-500">Before tax, delivery outside Zone A, and seasonal pricing</span>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <Select label="Delivery zone" name="zone" options={ZONES.map((z) => `${z.name} — ${z.fee}`)} />
        <Field label="Delivery address, hotel, or venue" name="location" placeholder="e.g. St. Regis Deer Valley, or a street address" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Full name" name="name" required autoComplete="name" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        <Field label="Mobile phone" name="phone" type="tel" required autoComplete="tel" />
        <Select label="Occasion" name="occasion" options={OCCASIONS} />
      </div>

      <div>
        <label className="label" htmlFor="notes">Anything else</label>
        <textarea id="notes" name="notes" rows={4} className="field" placeholder="Flight number, passengers, what you're towing, venue timing — anything that helps us quote accurately." />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" disabled={status === 'sending'} className="btn-gold whitespace-nowrap disabled:opacity-60">
          {status === 'sending' ? 'Sending…' : 'Request Allocation'}
        </button>
        <p className="text-xs text-obsidian-500">
          No charge until you approve a written quote. Drivers must meet the <a href="/rates#requirements" className="text-obsidian-300 hover:text-champagne-300">requirements</a>. {RATE_NOTE}
        </p>
      </div>

      {message && <p className={`text-sm ${status === 'error' ? 'text-red-400' : 'text-obsidian-200'}`}>{message}</p>}
    </form>
  );
}

function Field({ label, name, type = 'text', required = false, placeholder, autoComplete }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string; autoComplete?: string }) {
  return (
    <div>
      <label className="label" htmlFor={name}>{label}{required && <span className="text-champagne-500"> *</span>}</label>
      <input id={name} name={name} type={type} required={required} placeholder={placeholder} autoComplete={autoComplete} className="field" />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: readonly string[] }) {
  return (
    <div>
      <label className="label" htmlFor={name}>{label}</label>
      <select id={name} name={name} className="field" defaultValue="">
        <option value="" disabled>Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
