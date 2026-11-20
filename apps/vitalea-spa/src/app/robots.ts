import type { MetadataRoute } from 'next';
import { BRAND } from '@/data/brand';

export default function robots(): MetadataRoute.Robots {
  return {
    // Client-owned photos and copy are live — open for indexing (PLAYBOOK.md §3, §8).
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${BRAND.url}/sitemap.xml`,
  };
}
