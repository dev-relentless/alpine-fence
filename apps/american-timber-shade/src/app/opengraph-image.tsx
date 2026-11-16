import { ImageResponse } from 'next/og';
import { BRAND } from '@/data/brand';

export const runtime = 'edge';
export const alt = `${BRAND.name} — ${BRAND.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/**
 * Generated Open Graph card: hero photograph (public/ats/og-bg.jpg) under a
 * dark gradient, with the reversed logo and tagline.
 */
export default async function OpenGraphImage() {
  const logo = await fetch(new URL('../../public/ats/brand/logo-horizontal-reversed.png', import.meta.url)).then((r) =>
    r.arrayBuffer()
  );
  const logoSrc = `data:image/png;base64,${Buffer.from(logo).toString('base64')}`;
  const photo = await fetch(new URL('../../public/ats/og-bg.jpg', import.meta.url)).then((r) => r.arrayBuffer());
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
          background: '#17140f',
          color: '#faf8f4',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photoSrc} alt="" width={1200} height={630} style={{ position: 'absolute', top: 0, left: 0, width: 1200, height: 630, objectFit: 'cover' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, width: 1200, height: 630, display: 'flex', background: 'linear-gradient(180deg, rgba(23,20,15,0.62) 0%, rgba(23,20,15,0.42) 40%, rgba(23,20,15,0.92) 100%)' }} />
        <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="" width={346} height={90} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28, position: 'relative' }}>
          <div style={{ fontSize: 84, lineHeight: 1.02, letterSpacing: '-0.02em', maxWidth: 980 }}>
            Premium Outdoor Spaces.
          </div>
          <div style={{ width: 72, height: 2, background: '#cfa548' }} />
          <div style={{ fontSize: 28, color: 'rgba(250,248,244,0.78)', maxWidth: 900, lineHeight: 1.35 }}>
            Timber pergolas, pavilions, kitchens, fire &amp; light — designed and built across the Mountain West.
          </div>
        </div>
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', gap: 48, fontSize: 18, color: 'rgba(250,248,244,0.6)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          <div>{BRAND.domain}</div>
          <div>{BRAND.address.states.join(' · ')}</div>
        </div>
      </div>
    ),
    size
  );
}
