import { ImageResponse } from 'next/og';
import { BRAND } from '@/data/brand';

export const alt = `${BRAND.name} — ${BRAND.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Generated Open Graph card — no binary asset to maintain. */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(180deg, #272c31 0%, #191d21 50%, #0e1114 100%)',
          color: '#f7f6f2',
          padding: '64px 72px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 14, display: 'flex' }}>
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} style={{ width: 72, height: 14, background: '#e8431f', marginRight: 8 }} />
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <svg width="96" height="96" viewBox="0 0 64 64">
            <polygon points="32,6 8,50 32,50" fill="#f7f6f2" />
            <polygon points="32,6 56,50 32,50" fill="#e8431f" />
            <polygon points="32,27 41.5,44 22.5,44" fill="#0e1114" />
            <rect x="6" y="53" width="52" height="5" fill="#f7f6f2" />
          </svg>
          <div style={{ display: 'flex', fontSize: 56, fontWeight: 800, letterSpacing: -1, textTransform: 'uppercase' }}>
            Apex&nbsp;<span style={{ color: '#e8431f' }}>Concrete</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ fontSize: 104, fontWeight: 800, lineHeight: 0.95, textTransform: 'uppercase', letterSpacing: -2, display: 'flex', flexDirection: 'column' }}>
            <span>Poured to the</span>
            <span><span style={{ color: '#e8431f' }}>summit</span> standard.</span>
          </div>
          <div style={{ fontSize: 28, color: '#a9b0b7', display: 'flex' }}>
            Full-service concrete contractor · Wasatch Front, Utah · {BRAND.phone}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 40, fontSize: 20, color: '#7c858e', textTransform: 'uppercase', letterSpacing: 4 }}>
          <span>{BRAND.spec.psi}</span>
          <span>{BRAND.spec.air}</span>
          <span>{BRAND.spec.joints}</span>
          <span>Estimates in writing</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
