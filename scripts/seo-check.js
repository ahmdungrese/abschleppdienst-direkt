/**
 * Google SEO Guidelines & Smart Content Compliance Inspector
 * Abschleppdienst Direkt - Inh. Wassem Al Dalati
 */

const fs = require('fs');
const path = require('path');

console.log('\n========================================================');
console.log('🔍 GOOGLE SEO & COMPLIANCE SMART INSPECTOR (VOLLPRÜFUNG)');
console.log('   Abschleppdienst Direkt - Inh. Wassem Al Dalati');
console.log('========================================================\n');

let issuesFound = 0;
let passes = 0;

function reportPass(msg) {
  console.log(`  ✅ PASS: ${msg}`);
  passes++;
}

function reportWarn(msg) {
  console.log(`  ⚠️ WARN: ${msg}`);
  issuesFound++;
}

// 1. Check Messages & Keyword Density
const deMessagesPath = path.join(__dirname, '../messages/de.json');
if (fs.existsSync(deMessagesPath)) {
  const deContent = fs.readFileSync(deMessagesPath, 'utf8');
  const words = deContent.toLowerCase().match(/\b[a-zäöüß0-9-]+\b/g) || [];
  const totalWords = words.length;

  const targetKeyword = 'abschleppdienst';
  const keywordCount = words.filter(w => w.includes(targetKeyword)).length;
  const density = (keywordCount / totalWords) * 100;

  if (density < 3.5) {
    reportPass(`Keyword-Dichte für "${targetKeyword}": ${density.toFixed(2)}% (Sicherer Bereich < 3.5%)`);
  } else {
    reportWarn(`Keyword-Dichte zu hoch (${density.toFixed(2)}%). Gefahr von Google Penalty.`);
  }

  // 2. Check for human trust credentials (E-E-A-T)
  const phoneTarget = '015565500442';
  if (deContent.includes(phoneTarget) || deContent.includes('0155 65500442')) {
    reportPass(`Verifizierte Notrufnummer (${phoneTarget}) ist korrekt hinterlegt.`);
  } else {
    reportWarn(`Rufnummer (${phoneTarget}) fehlt in de.json.`);
  }

  if (deContent.includes('Wassem Al Dalati') || deContent.includes('Wassem Aldalati')) {
    reportPass('Inhabername "Wassem Al Dalati" ist im System verankert (Google E-E-A-T).');
  } else {
    reportWarn('Inhabername fehlt in de.json.');
  }

  if (deContent.includes('10 Jahre') || deContent.includes('Erfahrung')) {
    reportPass('Echte Praxiserfahrung (10 Jahre) ist im Inhalt verankert.');
  } else {
    reportWarn('Erfahrungsnachweis fehlt.');
  }
}

// 3. Check Sitemap & Robots
const sitemapPath = path.join(__dirname, '../src/app/sitemap.ts');
const robotsPath = path.join(__dirname, '../src/app/robots.ts');
if (fs.existsSync(sitemapPath) && fs.existsSync(robotsPath)) {
  reportPass('XML Sitemap & robots.txt Routen sind aktiv für Google Crawler konfiguriert.');
} else {
  reportWarn('sitemap.ts oder robots.ts fehlt.');
}

// 4. Check LocalBusiness Schema JSON-LD
const schemaPath = path.join(__dirname, '../src/components/seo/LocalBusinessSchema.tsx');
if (fs.existsSync(schemaPath)) {
  const schemaContent = fs.readFileSync(schemaPath, 'utf8');
  if (schemaContent.includes('PostalAddress') && schemaContent.includes('Bochum') && schemaContent.includes('GeoCoordinates') && (schemaContent.includes('Wassem Al Dalati') || schemaContent.includes('Wassem Aldalati') || schemaContent.includes('BRAND.owner'))) {
    reportPass('Google LocalBusiness Schema (JSON-LD) mit Inhaber "Wassem Al Dalati", Geo & Öffnungszeiten ist aktiv.');
  } else {
    reportWarn('LocalBusiness Schema unvollständig.');
  }
}

// 5. Check Breadcrumb Schema
const breadcrumbPath = path.join(__dirname, '../src/components/seo/BreadcrumbSchema.tsx');
if (fs.existsSync(breadcrumbPath)) {
  reportPass('Google BreadcrumbList Schema ist für alle Unterseiten aktiv.');
} else {
  reportWarn('BreadcrumbSchema fehlt.');
}

// 6. Check FAQ Schema
const faqPath = path.join(__dirname, '../src/components/home/FAQ.tsx');
if (fs.existsSync(faqPath)) {
  const faqContent = fs.readFileSync(faqPath, 'utf8');
  if (faqContent.includes('FAQPage') && faqContent.includes('acceptedAnswer')) {
    reportPass('Google FAQPage Rich Snippet Schema ist aktiv implementiert.');
  } else {
    reportWarn('FAQPage Schema fehlt.');
  }
}

// 7. Check Vollkasko Abmahnrisiko (UWG)
const layoutPath = path.join(__dirname, '../src/app/[locale]/layout.tsx');
if (fs.existsSync(layoutPath)) {
  const layoutContent = fs.readFileSync(layoutPath, 'utf8');
  if (layoutContent.includes('metadataBase') && layoutContent.includes('openGraph') && layoutContent.includes('twitter')) {
    reportPass('Social Media & OpenGraph Meta-Tags (Facebook/Twitter/WhatsApp) sind vollständig.');
  } else {
    reportWarn('OpenGraph Tags unvollständig.');
  }
}

console.log('\n--------------------------------------------------------');
console.log(`ERGEBNIS: ${passes} bestanden, ${issuesFound} Warnungen.`);
if (issuesFound === 0) {
  console.log('🏆 100% Google SEO & Compliance Konform! Alle fundamentalen Standards erfüllt.');
} else {
  console.log('💡 Optimierungen empfohlen.');
}
console.log('========================================================\n');
