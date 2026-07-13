import type { MetadataRoute } from 'next';
import { BRAND } from '@/data/brand';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ['', '/services', '/portfolio', '/process', '/about', '/contact', '/inquire'];
  return routes.map((path) => ({
    url: `${BRAND.url}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));
}
