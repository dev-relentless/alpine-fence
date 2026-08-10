'use client';

import { useState } from 'react';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setMessage('');
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setStatus('sent');
      setMessage('Got it. We will get back to you within one business day — usually faster.');
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
        <Field label="Zip code" name="zip" autoComplete="postal-code" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Field label="Pool type" name="poolType" as="select"
          options={['Chlorine', 'Salt water', 'Spa / hot tub only', 'Not sure']} />
        <Field label="Pool location" name="setting" as="select"
          options={['Residential', 'Commercial / HOA']} />
      </div>

      <div>
        <label className="tag block mb-3">What do you need?</label>
        <div className="grid sm:grid-cols-2 gap-2">
          {['Weekly cleaning service', 'Chemical-only service', 'Equipment repair', 'Pool opening', 'Pool closing / winterization', 'Green pool recovery', 'Drain & chemical wash', 'Other / not sure'].map((v) => (
            <label key={v} className="flex items-center gap-3 text-sm text-pool-700">
              <input type="checkbox" name="service" value={v} className="accent-aqua-600" />
              {v}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="tag block mb-3" htmlFor="notes">How can we help?</label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          className="w-full rounded-xl border border-deck-200 bg-white px-4 py-3 text-pool-900 focus:border-pool-500 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-primary disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Request estimate'}
      </button>

      {message && (
        <p className={`text-sm ${status === 'error' ? 'text-red-700' : 'text-pool-800'}`}>{message}</p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
  placeholder,
  autoComplete,
  as,
  options,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  as?: 'select';
  options?: string[];
}) {
  const baseClass = 'w-full rounded-xl border border-deck-200 bg-white px-4 py-3 text-pool-900 focus:border-pool-500 focus:outline-none';
  return (
    <div>
      <label className="tag block mb-2" htmlFor={name}>
        {label}{required && <span className="text-aqua-600"> *</span>}
      </label>
      {as === 'select' && options ? (
        <select id={name} name={name} className={baseClass} defaultValue="">
          <option value="" disabled>Select…</option>
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : (
        <input id={name} name={name} type={type} required={required} placeholder={placeholder} autoComplete={autoComplete} className={baseClass} />
      )}
    </div>
  );
}
