import type { MetadataRoute } from 'next';
import { getAllArticleSlugs } from '@/data/blogArticles';
import { BRAND } from '@/config/brand';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BRAND.url;
  const locales = ['de', 'ar', 'en'];

  const services = [
    'abschleppdienst-pkw',
    'abschleppdienst-suv',
    'abschleppdienst-busse',
    'warentransport-logistik',
    'fahrzeugueberfuehrung',
    'abschleppdienst-werkstatt',
    'pannenhilfe-starthilfe',
    'bundesweite-ueberfuehrung',
    'elektroauto-automatik-abschleppen',
    'werkstatt-autoplatz',
  ];

  const routes: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    // Homepage
    routes.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    });

    // Services overview
    routes.push({
      url: `${baseUrl}/${locale}/leistungen`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    });

    // Service subpages
    services.forEach((slug) => {
      routes.push({
        url: `${baseUrl}/${locale}/leistungen/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.85,
      });
    });

    // Calculator
    routes.push({
      url: `${baseUrl}/${locale}/rechner`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });

    // Einsatzgebiet & Streckennetz
    routes.push({
      url: `${baseUrl}/${locale}/einsatzgebiet`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    });

    // Starthilfe & NOCO Boost Ratgeber
    routes.push({
      url: `${baseUrl}/${locale}/starthilfe-bochum`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    });

    // Über uns / Unternehmen
    routes.push({
      url: `${baseUrl}/${locale}/ueber-uns`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    });

    // Ratgeber & Blog Overview
    routes.push({
      url: `${baseUrl}/${locale}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    });

    // Ratgeber & Blog Articles
    const blogSlugs = getAllArticleSlugs();
    blogSlugs.forEach((slug) => {
      routes.push({
        url: `${baseUrl}/${locale}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.85,
      });
    });

    // Legal
    routes.push({
      url: `${baseUrl}/${locale}/impressum`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    });
    routes.push({
      url: `${baseUrl}/${locale}/datenschutz`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    });
  });

  return routes;
}
