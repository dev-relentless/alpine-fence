import { FLEET } from '@/data/fleet';

/** Server-rendered GET form — lands on /allocation with the fields pre-filled. */
export default function AvailabilityBar({ className = '' }: { className?: string }) {
  return (
    <form action="/allocation" method="get" className={`card grid gap-px bg-obsidian-800 md:grid-cols-[1.4fr_1fr_1fr_auto] ${className}`}>
      <Cell label="Vehicle" htmlFor="ab-vehicle">
        <select id="ab-vehicle" name="vehicle" className="field !border-0 !bg-transparent !px-0 !py-0 text-base" defaultValue="">
          <option value="">Any vehicle</option>
          {FLEET.map((v) => <option key={v.slug} value={v.slug}>{v.make} {v.model}</option>)}
        </select>
      </Cell>
      <Cell label="Pickup" htmlFor="ab-start">
        <input id="ab-start" name="start" type="date" className="field !border-0 !bg-transparent !px-0 !py-0 text-base [color-scheme:dark]" />
      </Cell>
      <Cell label="Return" htmlFor="ab-end">
        <input id="ab-end" name="end" type="date" className="field !border-0 !bg-transparent !px-0 !py-0 text-base [color-scheme:dark]" />
      </Cell>
      <button type="submit" className="btn-gold !rounded-none md:h-full md:px-8">Check Availability</button>
    </form>
  );
}

function Cell({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div className="bg-obsidian-950/90 px-5 py-4 backdrop-blur">
      <label htmlFor={htmlFor} className="label !mb-1">{label}</label>
      {children}
    </div>
  );
}
