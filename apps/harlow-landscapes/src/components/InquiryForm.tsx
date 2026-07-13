'use client';

import { useState } from 'react';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function InquiryForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setMessage('');
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setStatus('sent');
      setMessage('Thank you. The firm will be in touch within one business day.');
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
        <Field label="City / Neighborhood" name="city" />
      </div>

      <div>
        <label className="eyebrow block mb-3">Project scope</label>
        <div className="grid sm:grid-cols-2 gap-2">
          {['Master plan / design', 'Hardscape & masonry', 'Planting design', 'Outdoor lighting', 'Water feature', 'Full design-build'].map((v) => (
            <label key={v} className="flex items-center gap-3 text-sm text-stone-700">
              <input type="checkbox" name="scope" value={v} className="accent-moss-700" />
              {v}
            </label>
          ))}
        </div>
      </div>

      <Field label="Estimated investment" name="budget" as="select"
        options={['Under $50k', '$50k – $100k', '$100k – $250k', '$250k – $500k', '$500k+']} />

      <div>
        <label className="eyebrow block mb-3" htmlFor="notes">Tell us about the project</label>
        <textarea
          id="notes"
          name="notes"
          rows={5}
          className="w-full rounded-md border border-stone-300 bg-ivory-50 px-4 py-3 text-stone-900 focus:border-moss-700 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-primary disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Submit inquiry'}
      </button>

      {message && (
        <p className={`text-sm ${status === 'error' ? 'text-red-700' : 'text-moss-700'}`}>{message}</p>
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
  const baseClass = 'w-full rounded-md border border-stone-300 bg-ivory-50 px-4 py-3 text-stone-900 focus:border-moss-700 focus:outline-none';
  return (
    <div>
      <label className="eyebrow block mb-2" htmlFor={name}>
        {label}{required && <span className="text-bronze-500"> *</span>}
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
