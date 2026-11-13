const fs = require('fs');
const path = require('path');

const dirs = [
  '.next/static/chunks/next/dist/client',
  '.next/static/chunks/app/[locale]/blog',
  '.next/static/chunks/app/[locale]/blog/[slug]',
  '.next/static/chunks/app/[locale]/leistungen',
  '.next/static/chunks/app/[locale]/leistungen/[slug]',
  '.next/server/app/[locale]/leistungen',
  '.next/server/app/[locale]/leistungen/[slug]',
  '.next/server/app/[locale]/blog',
  '.next/server/app/[locale]/blog/[slug]',
  '.next/server/app/de/blog',
  '.next/server/app/ar/blog',
  '.next/server/app/en/blog',
  '.next/server/app/de/blog.segments/$d$locale',
  '.next/server/app/ar/blog.segments/$d$locale',
  '.next/server/app/en/blog.segments/$d$locale',
  '.next/server/app/_global-error.segments/_global-error',
  '.next/types/app/[locale]',
  '.next/types/app/[locale]/blog',
  '.next/types/app/[locale]/blog/[slug]',
  '.next/types/app/[locale]/datenschutz',
  '.next/types/app/[locale]/einsatzgebiet',
  '.next/types/app/[locale]/faq',
  '.next/types/app/[locale]/impressum',
  '.next/types/app/[locale]/leistungen',
  '.next/types/app/[locale]/leistungen/[slug]',
  '.next/types/app/[locale]/rechner',
  '.next/types/app/[locale]/starthilfe-bochum',
  '.next/types/app/[locale]/ueber-uns',
];

const pages = [
  'blog',
  'datenschutz',
  'einsatzgebiet',
  'faq',
  'impressum',
  'leistungen',
  'rechner',
  'starthilfe-bochum',
  'ueber-uns',
];
const locales = ['de', 'ar', 'en'];

locales.forEach((loc) => {
  pages.forEach((p) => {
    dirs.push(`.next/server/app/${loc}/${p}.segments/$d$locale`);
    dirs.push(`.next/server/app/${loc}/${p}`);
  });
});
dirs.push('.next/server/app/_not-found.segments/_not-found');
dirs.push('.next/server/app/_global-error.segments/_global-error');

dirs.forEach((d) => {
  try {
    fs.mkdirSync(path.join(process.cwd(), d), { recursive: true });
  } catch (err) {
    // Ignore if already exists
  }
});
console.log('Prebuild directories verified.');
