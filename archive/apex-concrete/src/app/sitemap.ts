import type { MetadataRoute } from 'next';
import { BRAND } from '@/data/brand';
import { services } from '@/data/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const top: MetadataRoute.Sitemap = [
    { url: BRAND.url, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${BRAND.url}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BRAND.url}/estimate`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${BRAND.url}/service-area`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BRAND.url}/about`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BRAND.url}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
  ];
  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BRAND.url}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));
  return [...top, ...servicePages];
}
