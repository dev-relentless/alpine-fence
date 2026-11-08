import { BRAND } from '@/data/brand';

const INK = '#0e1114';
const MID = '#7c858e';
const LIGHT = '#cdd1d5';
const SOIL = '#e2dfd6';
const FLAG = '#e8431f';
const GLACIER = '#6ea4b8';
const PAPER = '#f7f6f2';

/** The six layers of an Apex slab, top to bottom in the drawing, numbered bottom-up. */
export const slabStandard = [
  { n: 1, k: 'Compacted subgrade', v: 'Topsoil and organics stripped, subgrade proof-rolled. Soft spots dug out and replaced — never bridged.' },
  { n: 2, k: 'Road base', v: `${BRAND.spec.base}, placed in lifts and compacted to 95%. The layer nobody sees decides how long the slab lasts.` },
  { n: 3, k: 'Steel on chairs', v: `${BRAND.spec.steel}, set on chairs so it stays in the slab instead of on the dirt. Fiber reinforcement where the spec calls for it.` },
  { n: 4, k: 'Freeze-thaw mix', v: `${BRAND.spec.psi}, ${BRAND.spec.air} so Utah winters and deicer can’t spall the surface.` },
  { n: 5, k: 'Saw-cut joints', v: `${BRAND.spec.joints} on a tight grid, ¼ of slab depth — so shrinkage cracks happen where we decided, not where they want.` },
  { n: 6, k: 'Finish & cure', v: `Broom, trowel, or decorative finish timed to the set. ${BRAND.spec.cure}, sealed after 28 days.` },
];

function Callout({ x, y, n, lx, ly }: { x: number; y: number; n: number; lx?: number; ly?: number }) {
  return (
    <g>
      {lx !== undefined && ly !== undefined && <line x1={x} y1={y} x2={lx} y2={ly} stroke={FLAG} strokeWidth="1.2" />}
      <circle cx={x} cy={y} r="12" fill={FLAG} />
      <text x={x} y={y + 4} textAnchor="middle" fontSize="12" fontWeight="700" fill={PAPER} fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace">{n}</text>
    </g>
  );
}

export default function SlabSection({ className }: { className?: string }) {
  const id = 'slab-std';
  return (
    <figure className={className}>
      <svg viewBox="0 0 640 360" className="block w-full h-auto" role="img" aria-label="Cross-section of an Apex Concrete slab on grade showing compacted subgrade, road base, rebar on chairs, air-entrained concrete, a saw-cut joint, and the finished surface.">
        <defs>
          <pattern id={`${id}-soil`} width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="9" stroke={MID} strokeWidth="0.9" />
          </pattern>
          <pattern id={`${id}-gravel`} width="11" height="11" patternUnits="userSpaceOnUse">
            <circle cx="2.5" cy="2.5" r="1.4" fill={MID} />
            <circle cx="8" cy="7.5" r="1.4" fill={MID} />
          </pattern>
        </defs>

        {/* subgrade */}
        <rect x="0" y="290" width="640" height="70" fill={SOIL} />
        <rect x="0" y="290" width="640" height="70" fill={`url(#${id}-soil)`} />
        <line x1="0" y1="290" x2="640" y2="290" stroke={INK} strokeWidth="1.5" />

        {/* base */}
        <rect x="70" y="240" width="530" height="50" fill={PAPER} stroke={INK} strokeWidth="1.2" />
        <rect x="70" y="240" width="530" height="50" fill={`url(#${id}-gravel)`} />

        {/* vapor retarder (when specified) */}
        <line x1="70" y1="240" x2="600" y2="240" stroke={GLACIER} strokeWidth="3" />

        {/* slab */}
        <rect x="70" y="170" width="530" height="70" fill={LIGHT} stroke={INK} strokeWidth="2" />

        {/* chairs + rebar */}
        {[100, 160, 220, 280, 340, 400, 460, 520, 580].map((x) => (
          <g key={x}>
            <path d={`M${x - 7} 240 L${x} 222 L${x + 7} 240`} fill="none" stroke={INK} strokeWidth="1.2" />
            <circle cx={x} cy="217" r="5" fill={INK} />
          </g>
        ))}

        {/* saw-cut joint */}
        <path d="M317 170 v18 h6 v-18" fill={PAPER} stroke={INK} strokeWidth="1.5" />

        {/* broom texture */}
        {Array.from({ length: 44 }).map((_, i) => (
          <line key={i} x1={78 + i * 12} y1="164" x2={78 + i * 12} y2="168" stroke={MID} strokeWidth="1" />
        ))}

        {/* dimensions */}
        <g stroke={FLAG} strokeWidth="1.2" fill={FLAG} fontSize="11" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace">
          <line x1="50" y1="170" x2="50" y2="240" />
          <line x1="45" y1="170" x2="55" y2="170" />
          <line x1="45" y1="240" x2="55" y2="240" />
          <text x="42" y="209" textAnchor="end" stroke="none">5–6″</text>
          <line x1="50" y1="240" x2="50" y2="290" />
          <line x1="45" y1="290" x2="55" y2="290" />
          <text x="42" y="269" textAnchor="end" stroke="none">4–6″</text>
        </g>

        {/* survey flag */}
        <line x1="590" y1="170" x2="590" y2="126" stroke={INK} strokeWidth="1.5" />
        <polygon points="590,126 614,134 590,142" fill={FLAG} />

        {/* callouts */}
        <Callout x={110} y={326} n={1} />
        <Callout x={110} y={265} n={2} />
        <Callout x={550} y={217} n={3} />
        <Callout x={480} y={192} n={4} />
        <Callout x={320} y={132} n={5} lx={320} ly={170} />
        <Callout x={200} y={132} n={6} lx={200} ly={166} />
      </svg>
    </figure>
  );
}
