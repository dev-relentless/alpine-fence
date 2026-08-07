const WALNUT = '#52391f';
const WALNUT_LIGHT = '#85603a';
const SUN = '#ecb84a';

const drawings: Record<'timber' | 'louvered' | 'pavilions', JSX.Element> = {
  // Timber pergola, elevation
  timber: (
    <g fill="none" stroke={WALNUT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="200" cy="62" r="30" fill={SUN} stroke="none" opacity="0.55" />
      {/* lattice strips */}
      <path d="M46 82 H354 M46 76 H354" stroke={WALNUT_LIGHT} strokeWidth="1.4" />
      {/* rafter ends */}
      {Array.from({ length: 13 }).map((_, i) => (
        <rect key={i} x={52 + i * 24.5} y="86" width="9" height="13" />
      ))}
      {/* beam */}
      <rect x="40" y="101" width="320" height="13" />
      {/* posts */}
      <rect x="86" y="114" width="14" height="116" />
      <rect x="300" y="114" width="14" height="116" />
      {/* knee braces */}
      <path d="M100 138 L128 114 M300 138 L272 114" strokeWidth="1.6" />
      {/* ground + planting */}
      <path d="M24 230 H376" />
      <path d="M46 230 q8 -16 16 0 M330 230 q9 -18 18 0 M352 230 q6 -12 12 0" strokeWidth="1.4" stroke={WALNUT_LIGHT} />
    </g>
  ),
  // Louvered roof, slats open
  louvered: (
    <g fill="none" stroke={WALNUT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="316" cy="48" r="20" fill={SUN} stroke="none" opacity="0.55" />
      <path d="M316 18 v-8 M338 28 l6 -6 M346 48 h8 M294 28 l-6 -6 M286 48 h-8" stroke={SUN} strokeWidth="1.6" />
      {/* frame */}
      <rect x="52" y="86" width="296" height="24" />
      {/* open louvers */}
      {Array.from({ length: 11 }).map((_, i) => (
        <path key={i} d={`M${66 + i * 25} 106 l16 -16`} strokeWidth="1.6" />
      ))}
      {/* posts */}
      <rect x="60" y="110" width="13" height="120" />
      <rect x="327" y="110" width="13" height="120" />
      {/* ground + paving */}
      <path d="M24 230 H376" />
      <path d="M120 230 v-6 M180 230 v-6 M240 230 v-6 M300 230 v-6" strokeWidth="1.2" stroke={WALNUT_LIGHT} />
    </g>
  ),
  // Garden pavilion, gable elevation
  pavilions: (
    <g fill="none" stroke={WALNUT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="88" cy="52" r="20" fill={SUN} stroke="none" opacity="0.55" />
      {/* roof */}
      <path d="M58 132 L200 42 L342 132" />
      <path d="M78 132 L200 55 L322 132" strokeWidth="1.4" />
      <path d="M194 36 h12" strokeWidth="1.6" />
      {/* fascia */}
      <path d="M58 132 H342" />
      {/* gable truss */}
      <path d="M200 55 V132 M200 92 L152 132 M200 92 L248 132" strokeWidth="1.4" stroke={WALNUT_LIGHT} />
      {/* columns */}
      <rect x="92" y="132" width="14" height="98" />
      <rect x="294" y="132" width="14" height="98" />
      <path d="M88 132 h22 M290 132 h22" strokeWidth="1.6" />
      {/* ground + planting */}
      <path d="M24 230 H376" />
      <path d="M48 230 q8 -16 16 0 M336 230 q9 -18 18 0" strokeWidth="1.4" stroke={WALNUT_LIGHT} />
    </g>
  ),
};

/**
 * Engraved-plate architectural drawings, framed like plates in an old
 * builder's folio. Stand-ins with intent — swap for photography by
 * replacing usages with next/image.
 */
export default function StructurePlate({
  slug,
  caption,
  className = '',
}: {
  slug: 'timber' | 'louvered' | 'pavilions';
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={`bg-linen-100 border border-timber-200 p-2.5 ${className}`}>
      <div className="border border-timber-200/80 px-4 pt-6 pb-4">
        <svg viewBox="0 0 400 250" role="img" aria-label={caption ?? 'Architectural drawing'} className="w-full h-auto">
          {drawings[slug]}
        </svg>
        {caption && (
          <figcaption className="mt-3 text-center tag text-timber-500">{caption}</figcaption>
        )}
      </div>
    </figure>
  );
}
