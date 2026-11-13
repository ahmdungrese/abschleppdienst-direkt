import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';

/**
 * Canonical + hreflang for a page that exists in every locale.
 *
 * Each language version must point to ITSELF as canonical (/de/..., /ar/..., /en/...)
 * and list its sister versions as alternates – otherwise Google treats the Arabic and
 * English pages as duplicates of a single URL and drops them from the index.
 *
 * @param path Path without locale prefix, e.g. '/rechner' ('' for the homepage)
 */
export function localizedAlternates(locale: string, path: string = ''): NonNullable<Metadata['alternates']> {
  const languages: Record<string, string> = {};
  routing.locales.forEach((loc) => {
    languages[loc] = `/${loc}${path}`;
  });
  languages['x-default'] = `/${routing.defaultLocale}${path}`;

  return {
    canonical: `/${locale}${path}`,
    languages,
  };
}
