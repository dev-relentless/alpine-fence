'use client';

import { useState } from 'react';
import { FLEET } from '@/data/fleet';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const OCCASIONS = ['Wedding', 'Anniversary / birthday', 'Airport / Park City transfer', 'Business / client', 'Canyon drive / weekend', 'Towing (boat, horse, toy hauler)', 'Photo / film shoot', 'Other'];
const DURATIONS = ['Half day (up to 5 hrs)', '1 day', 'Weekend (Fri–Sun)', '3–6 days', '1 week', 'Longer / ongoing'];

export default function AllocationForm({ vehicle, service }: { vehicle?: string; service?: string }) {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const [allocation, setAllocation] = useState<string | null>(null);
  const [picked, setPicked] = useState<string>(vehicle && FLEET.some((v) => v.slug === vehicle) ? vehicle : '');
  const [svc, setSvc] = useState<string>(service === 'chauffeured' ? 'chauffeured' : 'self-drive');

  const chauffeurAvailable = picked === '' || FLEET.find((v) => v.slug === picked)?.chauffeur;

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
      setAllocation(data.reference ?? null);
      setMessage('Received. We will confirm availability and your allocation personally within one business day.');
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
        {allocation && <div className="mt-4 font-display text-5xl text-champagne-400">Ref. {allocation}</div>}
        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-obsidian-200">{message}</p>
        <p className="mt-3 text-xs text-obsidian-500">Your allocation number is issued once dates and the agreement are confirmed.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8" noValidate>
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <fieldset>
        <legend className="label">Vehicle <span className="text-champagne-500">*</span></legend>
        <div className="grid gap-3 sm:grid-cols-3">
          {FLEET.map((v) => (
            <label
              key={v.slug}
              className={`cursor-pointer border p-4 transition-colors ${picked === v.slug ? 'border-champagne-500 bg-champagne-500/5' : 'border-obsidian-700 hover:border-obsidian-500'}`}
            >
              <input type="radio" name="vehicle" value={v.slug} className="sr-only" checked={picked === v.slug} onChange={() => { setPicked(v.slug); if (!v.chauffeur) setSvc('self-drive'); }} required />
              <div className="eyebrow-muted">{v.numeral} · {v.role}</div>
              <div className="mt-1 font-display text-lg text-bone-50">{v.make} {v.model}</div>
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

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
        <Field label="Delivery location (city, hotel, or venue)" name="location" placeholder="e.g. Deer Valley, St. Regis" />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Field label="Start date" name="startDate" type="date" required />
        <Select label="Duration" name="duration" options={DURATIONS} />
        <Select label="Occasion" name="occasion" options={OCCASIONS} />
      </div>

      <div>
        <label className="label" htmlFor="notes">Tell us about the occasion</label>
        <textarea id="notes" name="notes" rows={4} className="field" placeholder="Timing, passengers, what you're towing, anything that helps us get it right." />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" disabled={status === 'sending'} className="btn-gold whitespace-nowrap disabled:opacity-60">
          {status === 'sending' ? 'Sending…' : 'Submit Request'}
        </button>
        <p className="text-xs text-obsidian-500">Drivers must be 25+ with a valid license and personal auto insurance. Details confirmed before signing.</p>
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
