'use client';

import { useState } from 'react';
import { services } from '@/data/services';
import { BRAND, telHref } from '@/data/brand';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const inputClass = 'input';

export default function EstimateForm({ defaultService }: { defaultService?: string }) {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    setStatus('sending');
    setMessage('');
    const form = new FormData(formEl);
    const payload: Record<string, unknown> = {};
    form.forEach((value, key) => {
      if (key === 'work') {
        payload.work = [...((payload.work as string[] | undefined) ?? []), String(value)];
      } else {
        payload[key] = value;
      }
    });
    try {
      const res = await fetch('/api/estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setStatus('sent');
      setMessage('Got it. We will reach out within one business day to schedule a site visit — usually sooner.');
      formEl.reset();
    } catch (err) {
      setStatus('error');
      setMessage(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  if (status === 'sent') {
    return (
      <div className="text-center py-10 space-y-4">
        <div className="mx-auto h-12 w-12 rounded-full bg-flag-500 text-slab-50 flex items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg>
        </div>
        <h3 className="h-display text-3xl text-basalt-950">Request received.</h3>
        <p className="text-basalt-600 max-w-md mx-auto">{message}</p>
        <p className="text-sm text-basalt-500">Need it faster? Call <a href={telHref} className="underline decoration-flag-500 underline-offset-4">{BRAND.phone}</a>.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-7" noValidate>
      {/* Honeypot */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <fieldset className="space-y-3">
        <legend className="tag mb-3">What are we pouring?</legend>
        <div className="grid sm:grid-cols-2 gap-2">
          {services.map((s) => (
            <label key={s.slug} className="flex items-center gap-3 border border-basalt-200 bg-slab-50 px-4 py-3 text-sm text-basalt-800 has-[:checked]:border-flag-500 has-[:checked]:bg-flag-50 cursor-pointer">
              <input type="checkbox" name="work" value={s.title} defaultChecked={s.slug === defaultService} className="accent-flag-500 h-4 w-4" />
              {s.title}
            </label>
          ))}
          <label className="flex items-center gap-3 border border-basalt-200 bg-slab-50 px-4 py-3 text-sm text-basalt-800 has-[:checked]:border-flag-500 has-[:checked]:bg-flag-50 cursor-pointer">
            <input type="checkbox" name="work" value="Other / not sure" className="accent-flag-500 h-4 w-4" />
            Other / not sure
          </label>
        </div>
      </fieldset>

      <div className="grid md:grid-cols-2 gap-6">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field label="Phone" name="phone" type="tel" required autoComplete="tel" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        <Field label="Project address or city" name="city" autoComplete="street-address" placeholder="e.g. Draper, UT" />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Field
          label="Timeline"
          name="timeline"
          as="select"
          options={['As soon as possible', 'Within a month', '1–3 months', 'This season', 'Planning ahead']}
        />
        <Field label="Approx. size" name="size" placeholder="e.g. 20×40 driveway" />
        <Field label="Preferred contact" name="contact" as="select" options={['Call', 'Text', 'Email']} />
      </div>

      <div>
        <label className="tag block mb-2" htmlFor="notes">Project details</label>
        <textarea
          id="notes"
          name="notes"
          rows={5}
          className={inputClass}
          placeholder="Existing concrete to remove? Slope or access issues? Stamped or broom finish? Anything helps."
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <button type="submit" disabled={status === 'sending'} className="btn-primary disabled:opacity-60 min-w-[200px]">
          {status === 'sending' ? 'Sending…' : 'Request my estimate'}
        </button>
        <p className="text-xs text-basalt-500 leading-relaxed">
          No spam, no sales pressure. We reply within one business day.
        </p>
      </div>

      {status === 'error' && message && (
        <p className="text-sm text-flag-700" role="alert">{message}</p>
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
  return (
    <div>
      <label className="tag block mb-2" htmlFor={name}>
        {label}{required && <span className="text-flag-600"> *</span>}
      </label>
      {as === 'select' && options ? (
        <select id={name} name={name} className={inputClass} defaultValue="">
          <option value="" disabled>Select…</option>
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={inputClass}
        />
      )}
    </div>
  );
}
