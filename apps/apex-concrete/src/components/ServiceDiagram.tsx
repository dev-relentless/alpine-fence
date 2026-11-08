import clsx from 'clsx';
import type { ServiceSlug } from '@/data/services';

const INK = '#0e1114';
const MID = '#7c858e';
const LIGHT = '#cdd1d5';
const SOIL = '#e2dfd6';
const FLAG = '#e8431f';
const GLACIER = '#6ea4b8';
const PAPER = '#f7f6f2';

function Flag({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <line x1={x} y1={y} x2={x} y2={y - 34} stroke={INK} strokeWidth="1.5" />
      <polygon points={`${x},${y - 34} ${x + 20},${y - 27} ${x},${y - 20}`} fill={FLAG} />
    </g>
  );
}

function Dim({ x, y1, y2, label, side = 'left' }: { x: number; y1: number; y2: number; label: string; side?: 'left' | 'right' }) {
  const mid = (y1 + y2) / 2;
  return (
    <g stroke={FLAG} strokeWidth="1.2">
      <line x1={x} y1={y1} x2={x} y2={y2} />
      <line x1={x - 4} y1={y1} x2={x + 4} y2={y1} />
      <line x1={x - 4} y1={y2} x2={x + 4} y2={y2} />
      <text
        x={side === 'left' ? x - 7 : x + 7}
        y={mid + 3.5}
        fill={FLAG}
        stroke="none"
        fontSize="10"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        textAnchor={side === 'left' ? 'end' : 'start'}
      >
        {label}
      </text>
    </g>
  );
}

function Soil({ id, x, y, w, h }: { id: string; x: number; y: number; w: number; h: number }) {
  return (
    <>
      <rect x={x} y={y} width={w} height={h} fill={SOIL} />
      <rect x={x} y={y} width={w} height={h} fill={`url(#${id}-soil)`} />
    </>
  );
}

function Gravel({ id, x, y, w, h }: { id: string; x: number; y: number; w: number; h: number }) {
  return (
    <>
      <rect x={x} y={y} width={w} height={h} fill={PAPER} stroke={INK} strokeWidth="1" />
      <rect x={x} y={y} width={w} height={h} fill={`url(#${id}-gravel)`} />
    </>
  );
}

const drawings: Record<ServiceSlug, (id: string) => JSX.Element> = {
  flatwork: (id) => (
    <g>
      <Soil id={id} x={0} y={190} w={400} h={50} />
      <Gravel id={id} x={48} y={160} w={322} h={30} />
      <rect x="48" y="120" width="322" height="40" fill={LIGHT} stroke={INK} strokeWidth="1.5" />
      {[70, 110, 150, 190, 230, 270, 310, 350].map((x) => (
        <circle key={x} cx={x} cy="142" r="3.5" fill={INK} />
      ))}
      {/* saw-cut joint */}
      <path d="M198 120 v11 h4 v-11" fill={PAPER} stroke={INK} strokeWidth="1.2" />
      {/* broom texture */}
      {Array.from({ length: 27 }).map((_, i) => (
        <line key={i} x1={56 + i * 12} y1="116" x2={56 + i * 12} y2="119" stroke={MID} strokeWidth="1" />
      ))}
      <Dim x={36} y1={120} y2={160} label="5″" />
      <Dim x={36} y1={160} y2={190} label="4–6″" />
      <line x1="48" y1="190" x2="370" y2="190" stroke={INK} strokeWidth="1.5" />
      <Flag x={350} y={120} />
    </g>
  ),

  foundations: (id) => (
    <g>
      <Soil id={id} x={0} y={100} w={400} h={140} />
      <line x1="0" y1="100" x2="400" y2="100" stroke={INK} strokeWidth="1.5" />
      {/* footing + stem wall */}
      <rect x="150" y="180" width="100" height="30" fill={LIGHT} stroke={INK} strokeWidth="1.5" />
      <rect x="180" y="60" width="40" height="120" fill={LIGHT} stroke={INK} strokeWidth="1.5" />
      {/* steel */}
      {[170, 200, 230].map((x) => <circle key={x} cx={x} cy="196" r="3" fill={INK} />)}
      <path d="M192 70 V196 h-14 M208 70 V196 h14" fill="none" stroke={INK} strokeWidth="1.4" />
      {/* sill plate + anchor bolt */}
      <rect x="176" y="52" width="48" height="8" fill={MID} />
      <line x1="200" y1="36" x2="200" y2="76" stroke={INK} strokeWidth="2" />
      <rect x="195" y="44" width="10" height="5" fill={INK} />
      <Dim x={120} y1={100} y2={180} label="30″ frost" />
      <Dim x={280} y1={180} y2={210} label="footing" side="right" />
      <Flag x={60} y={100} />
    </g>
  ),

  excavation: (id) => (
    <g>
      <Soil id={id} x={0} y={110} w={400} h={130} />
      {/* spoil pile */}
      <path d="M290 110 q45 -46 95 0 z" fill={SOIL} stroke={INK} strokeWidth="1.5" />
      <path d="M290 110 q45 -46 95 0 z" fill={`url(#${id}-soil)`} />
      <line x1="0" y1="110" x2="400" y2="110" stroke={INK} strokeWidth="1.5" />
      {/* trench */}
      <polygon points="120,110 135,190 265,190 280,110" fill={PAPER} stroke={INK} strokeWidth="1.5" />
      <Gravel id={id} x={140} y={172} w={120} h={18} />
      <circle cx="200" cy="164" r="12" fill={GLACIER} stroke={INK} strokeWidth="1.5" />
      {/* excavator arm + bucket */}
      <path d="M400 18 L330 52 L302 96" fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M302 96 l-20 10 l7 20 l24 -7 z" fill={MID} stroke={INK} strokeWidth="1.5" strokeLinejoin="round" />
      <Dim x={105} y1={110} y2={190} label="depth" />
      <Flag x={338} y={88} />
    </g>
  ),

  decorative: () => {
    const rows: number[][] = [
      [70, 44, 86, 54, 66],
      [48, 84, 52, 70, 66],
      [86, 50, 64, 46, 74],
      [56, 72, 44, 82, 66],
    ];
    return (
      <g>
        <rect x="30" y="30" width="340" height="180" fill={FLAG} />
        <rect x="44" y="44" width="312" height="152" fill={PAPER} />
        {rows.map((widths, r) => {
          let x = 46;
          return widths.map((w, i) => {
            const rect = (
              <rect key={`${r}-${i}`} x={x} y={46 + r * 38} width={w - 3} height="35" fill={LIGHT} stroke={INK} strokeWidth="1.2" />
            );
            x += w;
            return rect;
          });
        })}
        <line x1="200" y1="30" x2="200" y2="210" stroke={INK} strokeWidth="2.5" />
        <Flag x={386} y={44} />
      </g>
    );
  },

  commercial: (id) => (
    <g>
      <Soil id={id} x={0} y={200} w={400} h={40} />
      <Gravel id={id} x={138} y={184} w={262} h={16} />
      {/* building + dock door */}
      <rect x="0" y="40" width="132" height="144" fill={LIGHT} stroke={INK} strokeWidth="1.5" />
      <rect x="36" y="70" width="64" height="84" fill={MID} stroke={INK} strokeWidth="1.2" />
      {[86, 102, 118, 134].map((y) => <line key={y} x1="36" y1={y} x2="100" y2={y} stroke={INK} strokeWidth="1" />)}
      <rect x="132" y="150" width="8" height="34" fill={INK} />
      {/* apron slab */}
      <rect x="138" y="172" width="262" height="12" fill={LIGHT} stroke={INK} strokeWidth="1.5" />
      <path d="M238 172 v4 M330 172 v4" stroke={INK} strokeWidth="1.5" />
      {/* bollards */}
      {[160, 190].map((x) => (
        <g key={x}>
          <rect x={x} y="128" width="9" height="44" fill={FLAG} />
          <rect x={x} y="126" width="9" height="5" rx="1" fill={INK} />
        </g>
      ))}
      <Dim x={388} y1={172} y2={184} label="6″" side="left" />
      <Flag x={120} y={40} />
    </g>
  ),

  repair: (id) => (
    <g>
      <Soil id={id} x={0} y={190} w={400} h={50} />
      <Gravel id={id} x={30} y={160} w={340} h={30} />
      <rect x="30" y="120" width="150" height="40" fill={LIGHT} stroke={INK} strokeWidth="1.5" />
      <polygon points="184,126 260,134 260,174 184,166" fill={LIGHT} stroke={INK} strokeWidth="1.5" />
      <rect x="264" y="120" width="106" height="40" fill={LIGHT} stroke={INK} strokeWidth="1.5" />
      {/* crack */}
      <path d="M305 120 l-6 10 l8 10 l-5 12 l4 8" fill="none" stroke={INK} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* replacement outline */}
      <rect x="184" y="120" width="76" height="40" fill="none" stroke={FLAG} strokeWidth="1.5" strokeDasharray="4 4" />
      {/* lift arrows */}
      {[204, 240].map((x) => (
        <g key={x} stroke={FLAG} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <line x1={x} y1="214" x2={x} y2="184" />
          <polyline points={`${x - 6},${190} ${x},${184} ${x + 6},${190}`} />
        </g>
      ))}
      <Flag x={60} y={120} />
    </g>
  ),

  'retaining-walls': (id) => (
    <g>
      <Soil id={id} x={200} y={50} w={200} h={190} />
      <Soil id={id} x={0} y={170} w={200} h={70} />
      <line x1="0" y1="170" x2="170" y2="170" stroke={INK} strokeWidth="1.5" />
      <line x1="200" y1="50" x2="400" y2="50" stroke={INK} strokeWidth="1.5" />
      {/* washed rock + fabric */}
      <Gravel id={id} x={200} y={118} w={40} h={72} />
      <line x1="240" y1="52" x2="240" y2="190" stroke={INK} strokeWidth="1.2" strokeDasharray="5 4" />
      {/* footing + wall */}
      <rect x="140" y="190" width="100" height="25" fill={LIGHT} stroke={INK} strokeWidth="1.5" />
      <rect x="170" y="50" width="30" height="140" fill={LIGHT} stroke={INK} strokeWidth="1.5" />
      <rect x="166" y="44" width="38" height="8" fill={MID} />
      <path d="M180 60 V205 M190 60 V205" stroke={INK} strokeWidth="1.3" />
      {/* drain + weep */}
      <circle cx="218" cy="178" r="9" fill={GLACIER} stroke={INK} strokeWidth="1.5" />
      <g stroke={FLAG} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <line x1="170" y1="178" x2="148" y2="178" />
        <polyline points="154,172 148,178 154,184" />
      </g>
      <Flag x={320} y={50} />
    </g>
  ),
};

export const figureTitles: Record<ServiceSlug, string> = {
  flatwork: 'Slab-on-grade section',
  foundations: 'Footing & stem wall',
  excavation: 'Utility trench profile',
  decorative: 'Ashlar stamp, plan',
  commercial: 'Dock apron section',
  repair: 'Settled section replaced',
  'retaining-walls': 'Wall with drainage',
};

export default function ServiceDiagram({
  slug,
  index,
  className,
  caption = true,
}: {
  slug: ServiceSlug;
  index?: number;
  className?: string;
  caption?: boolean;
}) {
  const id = `fig-${slug}`;
  return (
    <figure className={clsx('bg-slab-100 bg-grid-paper bg-grid border border-basalt-200', className)}>
      <svg viewBox="0 0 400 240" className="block w-full h-auto" aria-hidden>
        <defs>
          <pattern id={`${id}-soil`} width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="8" stroke={MID} strokeWidth="0.9" />
          </pattern>
          <pattern id={`${id}-gravel`} width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="2.5" cy="2.5" r="1.3" fill={MID} />
            <circle cx="7.5" cy="7" r="1.3" fill={MID} />
          </pattern>
        </defs>
        {drawings[slug](id)}
      </svg>
      {caption && (
        <figcaption className="flex items-center justify-between border-t border-basalt-200 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-basalt-500">
          <span>Fig. {index !== undefined ? String(index + 1).padStart(2, '0') : '—'} — {figureTitles[slug]}</span>
          <span>n.t.s.</span>
        </figcaption>
      )}
    </figure>
  );
}
