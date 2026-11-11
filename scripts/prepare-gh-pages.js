const fs = require('fs');
const path = require('path');

const basePath = (process.env.PAGES_BASE_PATH || '/abschleppdienst-direkt').replace(/\/$/, '');

// 1. Update src/app/[locale]/layout.tsx: remove force-dynamic and add generateStaticParams
const layoutPath = path.join(process.cwd(), 'src/app/[locale]/layout.tsx');
let layoutContent = fs.readFileSync(layoutPath, 'utf8');
layoutContent = layoutContent.replace(
  "export const dynamic = 'force-dynamic';",
  "export function generateStaticParams() {\n  return routing.locales.map((locale) => ({ locale }));\n}"
);
fs.writeFileSync(layoutPath, layoutContent, 'utf8');

// 1b. Remove force-dynamic from src/app/[locale]/blog/page.tsx
const blogPagePath = path.join(process.cwd(), 'src/app/[locale]/blog/page.tsx');
let blogPageContent = fs.readFileSync(blogPagePath, 'utf8');
blogPageContent = blogPageContent.replace("export const dynamic = 'force-dynamic';", '');
fs.writeFileSync(blogPagePath, blogPageContent, 'utf8');

// 2. Add generateStaticParams to src/app/[locale]/blog/[slug]/page.tsx
const blogSlugPath = path.join(process.cwd(), 'src/app/[locale]/blog/[slug]/page.tsx');
let blogSlugContent = fs.readFileSync(blogSlugPath, 'utf8');
if (!blogSlugContent.includes('generateStaticParams')) {
  blogSlugContent += `\nexport function generateStaticParams() {\n  return getAllArticleSlugs().map((slug) => ({ slug }));\n}\n`;
  fs.writeFileSync(blogSlugPath, blogSlugContent, 'utf8');
}

// 3. Add generateStaticParams to src/app/[locale]/leistungen/[slug]/page.tsx
const serviceSlugPath = path.join(process.cwd(), 'src/app/[locale]/leistungen/[slug]/page.tsx');
let serviceSlugContent = fs.readFileSync(serviceSlugPath, 'utf8');
if (!serviceSlugContent.includes('generateStaticParams')) {
  serviceSlugContent += `\nexport function generateStaticParams() {\n  return Object.keys(serviceDatabase).map((slug) => ({ slug }));\n}\n`;
  fs.writeFileSync(serviceSlugPath, serviceSlugContent, 'utf8');
}

// 4. Remove src/middleware.ts for static export
const middlewarePath = path.join(process.cwd(), 'src/middleware.ts');
if (fs.existsSync(middlewarePath)) {
  fs.unlinkSync(middlewarePath);
}

// 5. Prefix basePath onto root-relative public asset paths inside src/** before build
// so that all HTML, JS chunks, RSC .txt payloads, and client-side navigations have the exact path!
const assetPrefixes = [
  '/images/',
  '/branding/',
  '/abschleppdienst-direkt-kontakt.vcf',
  '/proschlepp-kontakt.vcf',
  '/favicon.ico',
  '/favicon-64.png',
  '/icon.png',
  '/apple-icon.png',
  '/apple-touch-icon.png',
  '/og-image.png',
];

function rewriteSrcDir(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      rewriteSrcDir(fullPath);
    } else if (/\.(ts|tsx|js|jsx|css)$/i.test(entry.name)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      for (const prefix of assetPrefixes) {
        const escaped = prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(["'(\`])${escaped}`, 'g');
        const nextContent = content.replace(regex, `$1${basePath}${prefix}`);
        if (nextContent !== content) {
          content = nextContent;
          modified = true;
        }
      }
      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  }
}

if (basePath) {
  rewriteSrcDir(path.join(process.cwd(), 'src'));
}

console.log(`Prepared project for GitHub Pages static export with basePath="${basePath}".`);
