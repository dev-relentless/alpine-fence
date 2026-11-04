import type { MetadataRoute } from 'next';
import { BRAND } from '@/data/brand';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: { path: string; priority: number }[] = [
    { path: '', priority: 1 },
    { path: '/pergolas', priority: 0.9 },
    { path: '/outdoor-living', priority: 0.8 },
    { path: '/gallery', priority: 0.8 },
    { path: '/about', priority: 0.6 },
    { path: '/contact', priority: 0.6 },
    { path: '/quote', priority: 0.7 },
  ];
  return routes.map((r) => ({
    url: `${BRAND.url}${r.path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: r.priority,
  }));
}
