/**
 * Topic tree ("Themenbaum"): connects every FAQ with the matching service page,
 * the in-depth guide (blog) or tool page. Used to render "read more" links so that
 * visitors – and Google – can always go one level deeper from any point of the site:
 *
 *   Homepage point → Service page → related FAQs → in-depth guide
 */
export interface TopicLink {
  /** Slug under /leistungen/ */
  service?: string;
  /** Slug under /blog/ */
  article?: string;
  /** Any other internal page, e.g. '/rechner' */
  page?: '/rechner' | '/einsatzgebiet' | '/starthilfe-bochum';
}

export const faqTopicLinks: Record<string, TopicLink> = {
  'autobahn-sicherheit': { service: 'abschleppdienst-pkw', article: 'autobahn-panne-ratgeber-sicherheit-standort-bochum' },
  'falsch-getankt': { service: 'abschleppdienst-werkstatt', article: 'falsch-getankt-bochum-sofortmassnahmen-transport' },
  'anfahrtszeit-bochum': { service: 'abschleppdienst-pkw', page: '/einsatzgebiet' },
  'starthilfe-winter-elektronik': { service: 'pannenhilfe-starthilfe', article: 'auto-springt-nicht-an-winter-starthilfe-noco-boost' },
  'kostenlose-beratung-weiterfahren': { service: 'pannenhilfe-starthilfe', article: 'auto-panne-weiterfahren-oder-anhalten-kostenlose-beratung' },
  'mitfahren-im-abschleppwagen': { service: 'abschleppdienst-pkw' },
  'modernes-auto-anschieben-seil': { service: 'elektroauto-automatik-abschleppen', article: 'elektroauto-hybrid-automatik-abschleppen-ratgeber' },
  'e-auto-seil-verbot': { service: 'elektroauto-automatik-abschleppen', article: 'elektroauto-hybrid-automatik-abschleppen-ratgeber' },
  'tesla-transportmodus-tot': { service: 'elektroauto-automatik-abschleppen', article: 'elektroauto-hybrid-automatik-abschleppen-ratgeber' },
  'tiefergelegte-sportwagen-spoilerschutz': { service: 'fahrzeugueberfuehrung', article: 'sportwagen-tiefergelegte-autos-abschleppen-transport-bochum' },
  'grosse-suv-22-zoll-felgen': { service: 'abschleppdienst-suv', article: 'suv-allrad-abschleppdienst-technik' },
  'transporter-sprinter-7-meter': { service: 'abschleppdienst-busse', article: 'transporter-busse-abschleppen-7-meter' },
  'nicht-rollfaehig-getriebeschaden': { service: 'abschleppdienst-werkstatt', article: 'ploetzlicher-motorschaden-pannenhilfe-bochum-wunschwerkstatt' },
  'kein-schluessel-lenkung-blockiert': { service: 'abschleppdienst-pkw', article: 'pkw-abschleppdienst-ablauf-ausruestung' },
  'ohne-batterie-verladen': { service: 'abschleppdienst-pkw', article: 'pkw-abschleppdienst-ablauf-ausruestung' },
  'felgenschutz-vdi-2700': { service: 'fahrzeugueberfuehrung', article: 'ladungssicherung-auto-abschleppen-vdi-2700-gurte' },
  'versicherung-schutzbrief-adac': { service: 'abschleppdienst-pkw', article: 'kostenuebernahme-versicherung-schutzbrief-abschleppen' },
  'freie-werkstattwahl': { service: 'werkstatt-autoplatz', article: 'ploetzlicher-motorschaden-pannenhilfe-bochum-wunschwerkstatt' },
  'werkstatt-geschlossen-nachteinwurf': { service: 'werkstatt-autoplatz' },
  'feste-pauschalpreise': { page: '/rechner' },
  'abgemeldet-ohne-tuev-transport': { service: 'fahrzeugueberfuehrung', article: 'fahrzeugueberfuehrung-autotransport-ablauf' },
  'kontaktlose-ueberfuehrung-rundum-service': { service: 'bundesweite-ueberfuehrung', article: 'fahrzeugtransfer-ohne-eigene-anwesenheit-rundum-service' },
  'frachtfuehrerhaftpflicht-versicherung': { service: 'warentransport-logistik', article: 'warentransport-logistik-plateau' },
  'zahlungsmethoden-vor-ort': { page: '/rechner' },
  'rechnung-transport-leistung': { page: '/rechner' },
};

/** Extra FAQs per service beyond the direct 1:1 links above (general questions that fit every service). */
const GENERAL_FAQ_IDS = ['feste-pauschalpreise', 'versicherung-schutzbrief-adac', 'zahlungsmethoden-vor-ort'];

/** FAQ ids that belong to a service page: direct matches first, then general price/insurance questions. */
export function getFaqIdsForService(serviceSlug: string, max = 5): string[] {
  const direct = Object.keys(faqTopicLinks).filter((id) => faqTopicLinks[id].service === serviceSlug);
  const merged = [...direct, ...GENERAL_FAQ_IDS.filter((id) => !direct.includes(id))];
  return merged.slice(0, max);
}
