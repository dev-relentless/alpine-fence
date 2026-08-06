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
        <Field label="City" name="city" />
      </div>

      <div>
        <label className="tag block mb-3">What are you dreaming up?</label>
        <div className="grid sm:grid-cols-2 gap-2">
          {['Timber pergola', 'Louvered / motorized roof', 'Pavilion or gazebo', 'Attached to the house', 'Freestanding', 'Lighting / fans / heaters', 'Privacy walls / screens', 'Other / not sure'].map((v) => (
            <label key={v} className="flex items-center gap-3 text-sm text-timber-700">
              <input type="checkbox" name="structure" value={v} className="accent-sky-500" />
              {v}
            </label>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Field label="Timeline" name="timeline" as="select"
          options={['As soon as possible', 'Within a month', '1–3 months', 'This season', 'Planning ahead']} />
        <Field label="Approx. size (if known)" name="size" placeholder="e.g. 12×16 over the back patio" />
      </div>

      <div>
        <label className="tag block mb-3" htmlFor="notes">Project details</label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          className="w-full border border-timber-200 bg-linen-50 px-4 py-3 text-timber-900 focus:border-sky-500 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-primary disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Request a quote'}
      </button>

      {message && (
        <p className={`text-sm ${status === 'error' ? 'text-red-700' : 'text-timber-800'}`}>{message}</p>
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
  as,
  options,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  as?: 'select';
  options?: string[];
}) {
  const baseClass = 'w-full border border-timber-200 bg-linen-50 px-4 py-3 text-timber-900 focus:border-sky-500 focus:outline-none';
  return (
    <div>
      <label className="tag block mb-2" htmlFor={name}>
        {label}{required && <span className="text-sky-600"> *</span>}
      </label>
      {as === 'select' && options ? (
        <select id={name} name={name} className={baseClass} defaultValue="">
          <option value="" disabled>Select…</option>
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : (
        <input id={name} name={name} type={type} required={required} placeholder={placeholder} className={baseClass} />
      )}
    </div>
  );
}
