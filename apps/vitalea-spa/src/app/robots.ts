import type { MetadataRoute } from 'next';
import { BRAND } from '@/data/brand';

export default function robots(): MetadataRoute.Robots {
  return {
    // Blocked until client-owned photos replace placeholders (PLAYBOOK.md §3, §8).
    rules: { userAgent: '*', disallow: '/' },
    sitemap: `${BRAND.url}/sitemap.xml`,
  };
}
