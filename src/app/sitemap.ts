import { MetadataRoute } from 'next';
import { getAllCities } from '@/data/cities';
import { services } from '@/data/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://alpinefenceanddeck.com';
  const cities = getAllCities();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/design-studio`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/hoa-compliance`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/gallery`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/calculator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/service-areas`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/quote`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: s.isCompozen ? 0.9 : 0.8,
  }));

  const cityPages: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${baseUrl}/${c.slug}-fence-deck-contractor`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: c.tier === 'tier1' ? 0.9 : c.tier === 'tier2' ? 0.8 : c.tier === 'tier3' ? 0.7 : 0.5,
  }));

  return [...staticPages, ...servicePages, ...cityPages];
}
