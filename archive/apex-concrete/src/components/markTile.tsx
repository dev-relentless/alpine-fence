import { ImageResponse } from 'next/og';

/** Shared Apex mark tile used for the Apple touch icon and PWA icons. */
export function markTile(size: number) {
  return new ImageResponse(
    (
      <div
        style={{
          width: size,
          height: size,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0e1114',
        }}
      >
        <svg width={size * 0.8} height={size * 0.8} viewBox="0 0 64 64">
          <polygon points="32,8 10,48 32,48" fill="#f7f6f2" />
          <polygon points="32,8 54,48 32,48" fill="#e8431f" />
          <polygon points="32,27 40.5,43 23.5,43" fill="#0e1114" />
          <rect x="8" y="51" width="48" height="5" fill="#f7f6f2" />
        </svg>
      </div>
    ),
    { width: size, height: size },
  );
}
