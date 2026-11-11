import type { MetadataRoute } from 'next';
import { BRAND } from '@/data/brand';
import { FLEET } from '@/data/fleet';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ['', '/fleet', '/chauffeur', '/allocation', '/about', ...FLEET.map((v) => `/fleet/${v.slug}`)];
  return routes.map((path) => ({
    url: `${BRAND.url}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : path.startsWith('/fleet/') ? 0.9 : 0.7,
  }));
}
