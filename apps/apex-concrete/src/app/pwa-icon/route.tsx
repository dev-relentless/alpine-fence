import type { NextRequest } from 'next/server';
import { markTile } from '@/components/markTile';


/** PWA icons for the web manifest: /pwa-icon?size=192 | 512 */
export function GET(req: NextRequest) {
  const requested = Number(req.nextUrl.searchParams.get('size'));
  const size = requested === 512 ? 512 : 192;
  return markTile(size);
}
