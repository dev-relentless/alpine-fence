import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { Vehicle, heroSrc, usd } from '@/data/fleet';

export default function FleetCard({ v, index = 0, priority = false }: { v: Vehicle; index?: number; priority?: boolean }) {
  return (
    <article className={clsx('group card flex flex-col overflow-hidden transition-colors hover:border-obsidian-600')}>
      <Link href={`/fleet/${v.slug}`} className="relative block aspect-[4/3] overflow-hidden">
        <Image
          src={heroSrc(v)}
          alt={v.gallery[0].alt}
          fill
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
          priority={priority || index === 0}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/70 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="bg-obsidian-950/80 px-3 py-1.5 font-sans text-[10px] uppercase tracking-tag text-champagne-400 backdrop-blur">
            {v.numeral} · {v.role}
          </span>
          {v.chauffeur && (
            <span className="bg-champagne-500 px-3 py-1.5 font-sans text-[10px] font-semibold uppercase tracking-tag text-obsidian-950">
              Chauffeur available
            </span>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="eyebrow-muted">{v.year} · {v.category}</div>
        <h3 className="h-display mt-2 text-2xl md:text-[1.75rem]">
          <Link href={`/fleet/${v.slug}`}>{v.make} <span className="italic text-bone-200">{v.model}</span></Link>
        </h3>

        <dl className="mt-5 grid grid-cols-3 gap-3 border-y border-obsidian-800 py-4 text-center">
          <Stat label="Seats" value={`${v.seats}`} />
          <Stat label="Miles / day" value={`${v.rates.milesPerDay}`} />
          <Stat label="Deposit" value={usd(v.rates.deposit)} />
        </dl>

        <div className="mt-5 flex items-end justify-between gap-4">
          <div>
            <div className="eyebrow-muted">From</div>
            <div className="mt-1 font-display text-3xl text-bone-50">
              {usd(v.rates.daily)}<span className="font-sans text-xs text-obsidian-400"> / day</span>
            </div>
            {v.rates.chauffeurHourly && (
              <div className="mt-1 text-xs text-obsidian-400">Chauffeured from {usd(v.rates.chauffeurHourly)} / hr</div>
            )}
          </div>
          <Link href={`/allocation?vehicle=${v.slug}`} className="btn-outline !px-5 !py-2.5">Reserve</Link>
        </div>
      </div>
    </article>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-sans text-[10px] uppercase tracking-tag text-obsidian-500">{label}</dt>
      <dd className="mt-1 text-sm text-bone-100">{value}</dd>
    </div>
  );
}
