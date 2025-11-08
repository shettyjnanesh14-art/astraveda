import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://astraveda.io';

  // Static pages
  const routes = [
    '',
    '/about',
    '/services',
    '/industries',
    '/case-studies',
    '/portfolio',
    '/pricing',
    '/process',
    '/resources',
    '/contact',
    '/careers',
    '/terms',
    '/privacy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Service pages
  const services = [
    'social-media',
    'performance-marketing',
    'branding',
    'web-design',
    'seo',
    'production',
    'podcast',
    'influencer',
    'retainers',
  ].map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Industry pages
  const industries = [
    'ayurveda',
    'healthcare',
    'fitness',
    'education',
    'food',
    'real-estate',
    'public-figures',
    'local',
  ].map((industry) => ({
    url: `${baseUrl}/industries/${industry}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...services, ...industries];
}

