import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const isGithubPages = process.env.GITHUB_PAGES === 'true';
const basePath = isGithubPages ? (process.env.PAGES_BASE_PATH || '/ruhrschlep') : '';

const legacyHosts = [
  'dein-abschleppdienst-bochum.de',
  'www.dein-abschleppdienst-bochum.de',
  'proschlepp-bochum.de',
  'www.proschlepp-bochum.de',
  'www.abschleppdienst-direkt.de',
];

const nextConfig: NextConfig = {
  ...(isGithubPages
    ? {
        output: 'export',
        trailingSlash: true,
        basePath,
        assetPrefix: basePath,
        images: {
          unoptimized: true,
        },
      }
    : {
        experimental: {
          cpus: 1,
        },
        async redirects() {
          return legacyHosts.map((host) => ({
            source: '/:path*',
            has: [{ type: 'host' as const, value: host }],
            destination: 'https://abschleppdienst-direkt.de/:path*',
            permanent: true,
          }));
        },
      }),
};

export default withNextIntl(nextConfig);
