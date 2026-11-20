'use client';

import { useState } from 'react';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function ReserveForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setMessage('');
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const res = await fetch('/api/reserve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setStatus('sent');
      setMessage('Got it. We will confirm availability within one business day — usually faster.');
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus('error');
      setMessage(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      {/* Honeypot */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="grid md:grid-cols-2 gap-6">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
        <Field label="City / Jobsite" name="city" />
      </div>

      <div>
        <label className="tag block mb-3">What do you need?</label>
        <div className="grid sm:grid-cols-2 gap-2">
          {['Skid steer / track loader', 'Mini excavator', 'Attachment only', 'Dump trailer', 'Equipment trailer', 'Other / not sure'].map((v) => (
            <label key={v} className="flex items-center gap-3 text-sm text-carbon-700">
              <input type="checkbox" name="gear" value={v} className="accent-volt-500" />
              {v}
            </label>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Field label="Start date" name="startDate" type="date" />
        <Field label="Rental length" name="duration" as="select"
          options={['1 day', '2–3 days', '1 week', '2–4 weeks', 'Monthly / ongoing']} />
      </div>

      <div>
        <label className="tag block mb-3" htmlFor="notes">Job details</label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          className="w-full border border-carbon-200 bg-dust-50 px-4 py-3 text-carbon-900 focus:border-volt-500 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-primary disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Check availability'}
      </button>

      {message && (
        <p className={`text-sm ${status === 'error' ? 'text-red-700' : 'text-carbon-800'}`}>{message}</p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
  as,
  options,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: 'select';
  options?: string[];
}) {
  const baseClass = 'w-full border border-carbon-200 bg-dust-50 px-4 py-3 text-carbon-900 focus:border-volt-500 focus:outline-none';
  return (
    <div>
      <label className="tag block mb-2" htmlFor={name}>
        {label}{required && <span className="text-volt-600"> *</span>}
      </label>
      {as === 'select' && options ? (
        <select id={name} name={name} className={baseClass} defaultValue="">
          <option value="" disabled>Select…</option>
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : (
        <input id={name} name={name} type={type} required={required} className={baseClass} />
      )}
    </div>
  );
}
