const DEEP = '#1e5b76';
const AQUA = '#14b8a6';
const SUN = '#fbbf24';

const drawings: Record<'weekly' | 'repair' | 'seasonal', JSX.Element> = {
  // Skimmer net over rippling water
  weekly: (
    <g fill="none" stroke={DEEP} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="322" cy="52" r="22" fill={SUN} stroke="none" opacity="0.5" />
      {/* skimmer pole */}
      <path d="M64 34 L232 132" strokeWidth="3" />
      {/* net hoop + mesh */}
      <ellipse cx="258" cy="147" rx="42" ry="26" transform="rotate(24 258 147)" />
      <path d="M232 132 l18 34 M248 124 l22 40 M266 120 l22 42" strokeWidth="1.2" stroke={AQUA} />
      {/* water */}
      <path d="M28 190 q18 -12 36 0 t36 0 t36 0 t36 0 t36 0 t36 0 t36 0 t36 0 t36 0" stroke={AQUA} strokeWidth="2.4" />
      <path d="M46 214 q18 -10 36 0 t36 0 t36 0 t36 0 t36 0 t36 0 t36 0 t36 0" stroke={AQUA} strokeWidth="1.6" opacity="0.6" />
      {/* leaf in net */}
      <path d="M252 144 q8 -10 16 -2 q-6 12 -16 2 Z" fill={AQUA} stroke="none" opacity="0.55" />
    </g>
  ),
  // Pump, pressure gauge, wrench
  repair: (
    <g fill="none" stroke={DEEP} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="84" cy="50" r="18" fill={SUN} stroke="none" opacity="0.5" />
      {/* pump body */}
      <rect x="118" y="120" width="112" height="72" rx="10" />
      <circle cx="150" cy="156" r="20" />
      <circle cx="150" cy="156" r="8" stroke={AQUA} />
      {/* motor fins */}
      <path d="M240 132 h44 M240 146 h44 M240 160 h44 M240 174 h44" />
      <path d="M230 124 h60 v64 h-60" />
      {/* gauge */}
      <circle cx="196" cy="96" r="22" />
      <path d="M196 96 L208 82" strokeWidth="2.4" stroke={AQUA} />
      <path d="M196 120 v-2 M174 96 h-2 M218 96 h2" strokeWidth="1.6" />
      {/* pipe */}
      <path d="M118 156 H74 q-12 0 -12 -12 V96" />
      {/* wrench */}
      <path d="M296 210 l34 -34 M330 176 a10 10 0 1 0 10 -14 l-8 8 -8 -8 8 -8 a10 10 0 0 0 -14 10" strokeWidth="2.2" />
      {/* ground */}
      <path d="M40 226 H360" />
    </g>
  ),
  // Sun/snow calendar over water — the Utah season cycle
  seasonal: (
    <g fill="none" stroke={DEEP} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* sun half */}
      <circle cx="120" cy="80" r="26" fill={SUN} stroke="none" opacity="0.55" />
      <path d="M120 40 v-10 M148 52 l7 -7 M160 80 h10 M92 52 l-7 -7 M80 80 h-10" stroke={SUN} strokeWidth="2" />
      {/* snowflake half */}
      <g stroke={AQUA} strokeWidth="2">
        <path d="M290 66 v56 M262 80 l56 28 M318 80 l-56 28" />
        <path d="M290 66 l-8 -10 M290 66 l8 -10 M262 80 l-12 -2 M318 80 l12 -2" strokeWidth="1.6" />
      </g>
      {/* circular arrows between the seasons */}
      <path d="M170 64 q36 -28 72 -6" markerEnd="none" />
      <path d="M236 52 l6 6 -9 3" strokeWidth="1.8" />
      <path d="M244 132 q-36 30 -74 8" />
      <path d="M176 146 l-6 -6 9 -3" strokeWidth="1.8" />
      {/* water */}
      <path d="M28 196 q18 -12 36 0 t36 0 t36 0 t36 0 t36 0 t36 0 t36 0 t36 0 t36 0" stroke={AQUA} strokeWidth="2.4" />
      <path d="M46 220 q18 -10 36 0 t36 0 t36 0 t36 0 t36 0 t36 0 t36 0 t36 0" stroke={AQUA} strokeWidth="1.6" opacity="0.6" />
    </g>
  ),
};

/**
 * Rounded service tiles with line-art illustrations — photographs can
 * replace the drawings later via the `photo` prop.
 */
export default function ServiceTile({
  slug,
  caption,
  className = '',
}: {
  slug: 'weekly' | 'repair' | 'seasonal';
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={`card-tile overflow-hidden ${className}`}>
      <div className="bg-water-light px-4 pt-6 pb-4">
        <svg viewBox="0 0 400 250" role="img" aria-label={caption ?? 'Service illustration'} className="w-full h-auto">
          {drawings[slug]}
        </svg>
        {caption && (
          <figcaption className="mt-3 text-center tag">{caption}</figcaption>
        )}
      </div>
    </figure>
  );
}
