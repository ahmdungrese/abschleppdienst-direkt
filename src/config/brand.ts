/**
 * Central Brand & Legal Configuration — Abschleppdienst Direkt
 * Single source of truth for brand name, domain, contact, legal details, and logo paths.
 */

export const BRAND = {
  /** Primary public brand name */
  name: 'Abschleppdienst Direkt',
  /** Short brand name */
  shortName: 'Abschleppdienst Direkt',
  /** Legal entity name for Impressum, Datenschutz & Invoices */
  legalName: 'Abschleppdienst Direkt - Inh. Wassem Al Dalati',
  /** Owner / Proprietor (only for Impressum, E-E-A-T & official Invoices) */
  owner: 'Wassem Al Dalati',
  /** Slogan / Claim */
  slogan: 'Schnell. Einfach. Fair.',
  /** Service descriptor */
  tagline: '24h Abschleppdienst, Pannenhilfe & Fahrzeugüberführung',
  /** Primary domain (without protocol) */
  domain: 'abschleppdienst-direkt.de',
  /** Canonical base URL */
  url: 'https://abschleppdienst-direkt.de',
  /** Official contact email */
  email: 'info@abschleppdienst-direkt.de',
  /** Phone numbers */
  phone: {
    display: '+49 155 65500442',
    local: '0155 65500442',
    raw: '+4915565500442',
    telHref: 'tel:+4915565500442',
    whatsappNumber: '4915565500442',
  },
  /** Physical address (Ladungsfähige Anschrift) */
  address: {
    street: 'Am Kreuzacker 21',
    postalCode: '44803',
    city: 'Bochum',
    region: 'Nordrhein-Westfalen',
    countryCode: 'DE',
    countryName: 'Deutschland',
    full: 'Am Kreuzacker 21, 44803 Bochum, Deutschland',
  },
  /** Geo coordinates (Bochum HQ) */
  geo: {
    latitude: 51.4682,
    longitude: 7.2464,
  },
  /** Brand assets & logos */
  assets: {
    logoHorizontal: '/branding/abschleppdienst_direkt_logo_horizontal.png',
    logoHorizontalLight: '/branding/abschleppdienst_direkt_logo_horizontal_light.png',
    logoFull: '/branding/abschleppdienst_direkt_logo_full.png',
    ogImage: '/og-image.png',
    vcard: '/abschleppdienst-direkt-kontakt.vcf',
    vcardDownloadName: 'Abschleppdienst-Direkt-Kontakt.vcf',
    businessCardFront: '/branding/visitenkarte_vorderseite.png',
    businessCardBack: '/branding/visitenkarte_rueckseite.png',
    businessCardDuo: '/images/branding/visitenkarte-duo.png',
  },
  /** Former / alternate names kept temporarily in Schema.org for Google Knowledge Graph continuity */
  alternateNames: [
    'Abschleppdienst Direkt Bochum',
    'Abschleppdienst Direkt NRW',
    'Abschleppdienst Direkt 24h',
    'ProSchlepp Bochum',
  ],
  /** Legacy domains for 301/308 redirects */
  legacyDomains: [
    'dein-abschleppdienst-bochum.de',
    'www.dein-abschleppdienst-bochum.de',
    'proschlepp-bochum.de',
    'www.proschlepp-bochum.de',
  ],
} as const;
