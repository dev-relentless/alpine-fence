import clsx from 'clsx';

/**
 * The beveled Spravek V. Gradient ids are prefixed per-instance so several
 * marks can live on one page without clashing.
 */
export default function VMark({
  className,
  id = 'v',
  tone = 'silver',
}: {
  className?: string;
  id?: string;
  tone?: 'silver' | 'gold' | 'flat';
}) {
  if (tone === 'flat') {
    return (
      <svg viewBox="0 0 320 220" className={className} role="img" aria-label="Spravek V mark" fill="currentColor">
        <polygon points="18,8 86,8 160,196 146,214 126,200" />
        <polygon points="302,8 234,8 160,196 174,214 194,200" />
      </svg>
    );
  }

  const gold = tone === 'gold';
  const stops = gold
    ? { LL: ['#B0925A', '#6E5A2E'], LR: ['#F2E4C2', '#C8A96A'], RI: ['#DCC698', '#9A7C44'], RO: ['#8C7140', '#4A3A1C'], tipL: '#F6ECD2', tipR: '#D8C28E', fL1: '#5A4820', fL2: '#8A7140', fR1: '#6B5528', fR2: '#3D3016' }
    : { LL: ['#9A9EA4', '#55595F'], LR: ['#F4F5F6', '#A8ACB1'], RI: ['#C9CCD0', '#7E8288'], RO: ['#60646A', '#2E3034'], tipL: '#F7F8F9', tipR: '#D8DADD', fL1: '#3E4146', fL2: '#6A6E74', fR1: '#4A4D52', fR2: '#26282B' };

  return (
    <svg viewBox="0 0 320 220" className={clsx(className)} role="img" aria-label="Spravek V mark">
      <defs>
        <linearGradient id={`${id}-LL`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={stops.LL[0]} /><stop offset="1" stopColor={stops.LL[1]} /></linearGradient>
        <linearGradient id={`${id}-LR`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={stops.LR[0]} /><stop offset="1" stopColor={stops.LR[1]} /></linearGradient>
        <linearGradient id={`${id}-RI`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={stops.RI[0]} /><stop offset="1" stopColor={stops.RI[1]} /></linearGradient>
        <linearGradient id={`${id}-RO`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={stops.RO[0]} /><stop offset="1" stopColor={stops.RO[1]} /></linearGradient>
      </defs>
      <polygon points="18,8 86,8 58,22" fill={stops.tipL} />
      <polygon points="18,8 58,22 145,198 126,200" fill={`url(#${id}-LL)`} />
      <polygon points="86,8 160,196 145,198 58,22" fill={`url(#${id}-LR)`} />
      <polygon points="126,200 145,198 146,214" fill={stops.fL1} />
      <polygon points="145,198 160,196 146,214" fill={stops.fL2} />
      <polygon points="302,8 234,8 262,22" fill={stops.tipR} />
      <polygon points="234,8 262,22 175,198 160,196" fill={`url(#${id}-RI)`} />
      <polygon points="302,8 194,200 175,198 262,22" fill={`url(#${id}-RO)`} />
      <polygon points="160,196 175,198 174,214" fill={stops.fR1} />
      <polygon points="175,198 194,200 174,214" fill={stops.fR2} />
    </svg>
  );
}
