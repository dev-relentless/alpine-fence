import { ImageResponse } from 'next/og';
import { BRAND } from '@/data/brand';

export const runtime = 'edge';
export const alt = `${BRAND.name} — ${BRAND.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Generated Open Graph card: the state's local landscape under a dark gradient. */
export default async function OpenGraphImage() {
  const photo = await fetch(new URL('../../public/pergola/local/og-bg.jpg', import.meta.url)).then((r) => r.arrayBuffer());
  const photoSrc = `data:image/jpeg;base64,${Buffer.from(photo).toString('base64')}`;
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
          position: 'relative',
          background: '#281b0e',
          color: '#fbf7ec',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photoSrc} alt="" width={1200} height={630} style={{ position: 'absolute', top: 0, left: 0, width: 1200, height: 630, objectFit: 'cover' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, width: 1200, height: 630, display: 'flex', background: 'linear-gradient(180deg, rgba(40,27,14,0.62) 0%, rgba(40,27,14,0.40) 45%, rgba(40,27,14,0.92) 100%)' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 22, position: 'relative' }}>
          <svg width="64" height="64" viewBox="0 0 64 64">
            <path d="M6 58 V34 a26 26 0 0 1 52 0 V58 Z" fill="rgba(251,247,236,0.12)" stroke="#fbf7ec" strokeWidth="1.5" />
            <circle cx="32" cy="30" r="12" fill="#ecb84a" opacity="0.6" />
            <g fill="none" stroke="#fbf7ec" strokeWidth="2.8" strokeLinecap="round">
              <path d="M12 26 H52" />
              <path d="M18 26 V52 M46 26 V52" />
              <path d="M19 20.5 h26" strokeWidth="2.2" />
            </g>
            <path d="M4 58 H60" stroke="#b04a2f" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
          <div style={{ fontSize: 36, fontWeight: 600 }}>{BRAND.name}</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 26, position: 'relative' }}>
          <div style={{ fontSize: 80, lineHeight: 1.04, maxWidth: 980 }}>
            The best room in the house isn&rsquo;t in the house.
          </div>
          <div style={{ width: 72, height: 2, background: '#b04a2f' }} />
          <div style={{ fontSize: 28, color: 'rgba(251,247,236,0.82)', maxWidth: 900, lineHeight: 1.35 }}>
            {`Timber pergolas, louvered roofs & pavilions — engineered for ${BRAND.state} ${BRAND.climate.elements}.`}
          </div>
        </div>
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', gap: 40, fontSize: 20, color: 'rgba(251,247,236,0.65)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
          <div>{BRAND.domain}</div>
          <div>{BRAND.regionLine}</div>
        </div>
      </div>
    ),
    size
  );
}
