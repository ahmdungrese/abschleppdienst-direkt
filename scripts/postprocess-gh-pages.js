const fs = require('fs');
const path = require('path');

const outDir = path.join(process.cwd(), 'out');
const basePath = (process.env.PAGES_BASE_PATH || '/abschleppdienst-direkt').replace(/\/$/, '');

if (!fs.existsSync(outDir)) {
  console.error('out/ directory does not exist.');
  process.exit(1);
}

// 1. Create .nojekyll so GitHub Pages serves _next/ static assets
fs.writeFileSync(path.join(outDir, '.nojekyll'), '', 'utf8');

// 2. Create root index.html redirecting to ./de/
const redirectHtml = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8" />
  <title>Abschleppdienst Direkt | 24h Abschleppdienst, Pannenhilfe & Überführung</title>
  <meta http-equiv="refresh" content="0; url=${basePath}/de/" />
  <link rel="canonical" href="https://abschleppdienst-direkt.de/de" />
  <script>window.location.replace("${basePath}/de/" + window.location.search + window.location.hash);</script>
</head>
<body style="background:#020617;color:#f8fafc;font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;">
  <p>Weiterleitung zu <a href="${basePath}/de/" style="color:#fbbf24;">Abschleppdienst Direkt</a>…</p>
</body>
</html>`;
fs.writeFileSync(path.join(outDir, 'index.html'), redirectHtml, 'utf8');

// 3. Prefix basePath onto any remaining unprefixed asset paths in HTML, JS, CSS, JSON, and RSC .txt files
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

function processDir(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDir(fullPath);
    } else if (/\.(html|js|css|json|txt|rsc)$/i.test(entry.name)) {
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
  processDir(outDir);
}

console.log(`Post-processed out/ for GitHub Pages with basePath="${basePath}".`);
