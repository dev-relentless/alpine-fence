import { ImageResponse } from 'next/og';
import { BRAND } from '@/data/brand';

export const runtime = 'edge';
export const alt = `${BRAND.name} — ${BRAND.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/**
 * Generated Open Graph card. Replace by dropping a 1200×630 photograph at
 * public/ats/og.jpg and pointing metadata.openGraph.images at it.
 */
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
          padding: '72px 84px',
          background: 'linear-gradient(160deg, #17140f 0%, #2e1810 60%, #533022 100%)',
          color: '#faf8f4',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <svg width="56" height="56" viewBox="0 0 32 32" fill="#faf8f4">
            <rect x="2" y="4" width="3" height="4" />
            <rect x="8.75" y="4" width="3" height="4" />
            <rect x="15.5" y="4" width="3" height="4" />
            <rect x="22.25" y="4" width="3" height="4" />
            <rect x="29" y="4" width="3" height="4" />
            <rect x="0" y="9.5" width="32" height="3.5" />
            <rect x="6" y="13" width="3.5" height="17" />
            <rect x="22.5" y="13" width="3.5" height="17" />
            <rect x="14.75" y="15" width="2.5" height="2.5" fill="#cfa548" />
          </svg>
          <div style={{ fontSize: 34, fontWeight: 600, letterSpacing: '-0.01em' }}>{BRAND.name}</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div style={{ fontSize: 84, lineHeight: 1.02, letterSpacing: '-0.02em', maxWidth: 980 }}>
            Premium Outdoor Spaces.
          </div>
          <div style={{ width: 72, height: 2, background: '#cfa548' }} />
          <div style={{ fontSize: 28, color: 'rgba(250,248,244,0.78)', maxWidth: 900, lineHeight: 1.35 }}>
            Timber pergolas, pavilions, kitchens, fire &amp; light — designed and built across the Mountain West.
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 22, color: 'rgba(250,248,244,0.6)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
          <div>{BRAND.domain}</div>
          <div>{BRAND.address.states.join(' · ')}</div>
        </div>
      </div>
    ),
    size
  );
}
