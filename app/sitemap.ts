import { MetadataRoute } from 'next';
import { SERVICES } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com';

  const routes = [
    '',
    '/about',
    '/services',
    '/cases',
    '/blog',
    '/materials',
    '/contact',
    '/consultation',
    ...SERVICES.map(service => `/services/${service.slug}`),
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}

