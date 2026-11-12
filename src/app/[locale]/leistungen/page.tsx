import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { Car, ShieldAlert, Bus, Navigation, Zap, Package, Truck, ArrowRight, ArrowLeft, ShieldCheck, CheckCircle2, Phone, AlertTriangle, Map } from 'lucide-react';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Alle Leistungen & Fachdetails | Abschleppdienst Direkt",
  description: "Detaillierte Übersicht aller 6 Kernleistungen von Abschleppdienst Direkt in Bochum & NRW: PKW, SUV, Transporter & Busse bis 7m, Fahrzeugüberführung von A nach B, Profi-Starthilfe (NOCO Boost) und Warentransport bis 3,5t.",
  alternates: {
    canonical: '/leistungen',
  },
};

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const services = [
    {
      slug: 'fahrzeugueberfuehrung',
      icon: Truck,
      title: "Fahrzeugüberführung von A nach B (Bundesweit)",
      tag: "Bundesweit & NRW • Bis 3,5 Tonnen",
      image: "/images/real/tow-truck-audi-rs3-wide.jpg",
      summary: "Sicherer und termingerechter Einzeltransport von PKW aller Art von Punkt A nach Punkt B – in ganz Nordrhein-Westfalen und bundesweit. Schonender Transport von fahrbereiten, nicht zugelassenen PKW, Neufahrzeugen oder Oldtimern direkt zur Wunschadresse.",
      scenarios: [
        "Fahrzeugkauf ohne Kennzeichen / abgemeldete Neufahrzeuge bundesweit",
        "Transport zwischen Werkstätten, Autohäusern oder Privatpersonen",
        "Schonender Transport von Oldtimern und Sportwagen",
        "Überführung rollfähiger Autos bei Wohnortwechsel oder Umzug quer durch Deutschland"
      ],
      highlights: "100% Einzelfahrt auf Plateau • Haustürabholung & Zustellung bundesweit • Keine Beiladung"
    },
    {
      slug: 'abschleppdienst-werkstatt',
      icon: AlertTriangle,
      title: "Abschleppdienst (PKW, SUV & Busse bis 7m)",
      tag: "Panne & Unfall • Bis 7 Meter Länge",
      image: "/images/real/tow-truck-bmw-ramp.jpg",
      summary: "Schnelle und sichere Bergung sowie Transport von Fahrzeugen bei Panne oder Unfall. Fachgerechter Transport für PKW, schwere SUV sowie Kleinbusse und Transporter bis 7 Meter Länge direkt zur Wunschwerkstatt.",
      scenarios: [
        "PKW Abschleppdienst: Schnelle und sichere Bergung sowie Transport bei Panne oder Unfall",
        "Abschleppdienst für SUV: Fachgerechter Transport auch größerer Fahrzeuge mit passender Ausstattung bis 3,5 t",
        "Abschleppdienst für Busse (bis 7m): Zuverlässiges Abschleppen von Kleinbussen und Transportern (Kastenwagen, Sprinter & Vans)",
        "Unfallfahrzeuge nach Kollision mit Karosserie- oder Achsschaden"
      ],
      highlights: "Elektrische Seilwinde • Radroller für blockierte Räder • Freie Werkstattwahl"
    },
    {
      slug: 'pannenhilfe-starthilfe',
      icon: Zap,
      title: "Pannenhilfe & Vor-Ort Starthilfe (Bochum)",
      tag: "Lokal in Bochum & Autobahnen • 20–40 Min.",
      image: "/images/real/noco-boost-starthilfe.jpg",
      summary: "Schnelle Soforthilfe direkt vor Ort im Stadtgebiet Bochum und auf A40/A43/A448 bei leerer Batterie ohne Risiko für die Bordelektronik sowie schneller Radwechsel mit dem 800 € Profi-Booster NOCO Boost Max (5250A).",
      scenarios: [
        "Winter-Kälteschock: Batterie bricht bei Frost elektrochemisch zusammen",
        "Licht versehentlich angelassen: Batterie über Nacht tiefentladen",
        "Klickendes Starterrelais beim Startversuch im Raum Bochum",
        "Reifenpanne: Montage des Reserverads direkt vor Ort auf Straßen & Autobahnen"
      ],
      highlights: "800 € NOCO Boost Max • 100% Funkenfrei & Verpolungsschutz • In 20–40 Min. vor Ort in Bochum"
    },
    {
      slug: 'bundesweite-ueberfuehrung',
      icon: Map,
      title: "Warentransport & Fracht-Express bis 3,5 t (Bundesweit)",
      tag: "Paletten, Maschinen & Fracht • Bundesweit",
      image: "/images/real/tow-truck-bmw-side.jpg",
      summary: "Professionelle Durchführung von Express-Transportaufträgen für eilige Fracht, Baustellen- und Maschinenfracht sowie Güter bis 3,5 t quer durch ganz Deutschland zu transparenten Konditionen.",
      scenarios: [
        "Warentransport & Logistik: Durchführung von Transportaufträgen für eilige Fracht, Maschinen & Paletten bis 3,5 t",
        "Direktfahrten zwischen Münster, Bielefeld, Köln, Düsseldorf, Frankfurt oder Berlin",
        "Sondertransporte ohne Zwischenlagerung von Punkt A nach Punkt B",
        "Termintransporte ohne Risiko von Transportschäden im Verteilerzentrum"
      ],
      highlights: "Feste Kilometerpreise • VDI-2700-Ladungssicherung • Pünktliche Direktfahrten bundesweit"
    },
    {
      slug: 'elektroauto-automatik-abschleppen',
      icon: Car,
      title: "Spezial-Transport für E-Autos & Hybridfahrzeuge",
      tag: "Schonend • Bis 3,5 t • Go-Jaks",
      image: "/images/real/tow-truck-audi-clean-user.jpg",
      summary: "Schonender Transport von Elektrofahrzeugen mit leerer 12V-Batterie oder blockierter Feststellbremse. Einsatz von Rangierrollern (Go-Jaks) zum Schutz des elektrischen Antriebsstrangs.",
      scenarios: [
        "Tesla Model 3, Y, S, X & andere E-Autos mit leerer 12V-Batterie",
        "Blockierte elektrische Feststellbremse (EPB) oder Getriebesperre",
        "Transport zu Hochvolt-Meisterbetrieben oder Tesla Service Centern",
        "Keine Drehmoment-Belastung auf Elektromotoren beim Verladen"
      ],
      highlights: "Go-Jak-Rangierroller • Schutz vor Getriebeschäden • Fachgerechtes Verzurren"
    },
    {
      slug: 'werkstatt-autoplatz',
      icon: Truck,
      title: "Werkstatt-Überführung & Transport zum Autoplatz",
      tag: "Fahrzeugverkauf & Freie Werkstattwahl",
      image: "/images/real/tow-truck-bmw-ramp.jpg",
      summary: "Transport Ihres verunfallten oder defekten Autos zur Wunschwerkstatt oder zu seriösen Händlern und Autoplätzen. Auf Wunsch ehrliche Beratung und Vermittlung bewährter Kontakte.",
      scenarios: [
        "Transfer zur Stammwerkstatt für Kostenvoranschlag und Reparatur",
        "Wirtschaftlicher Totalschaden: Verkauf an renommierte Autoplätze",
        "Altfahrzeug oder Unfallwagen: Seriöse Händlervermittlung ohne Provision",
        "Direkte Übergabe an Werkstattleiter oder Händler vor Ort"
      ],
      highlights: "Freie Werkstattwahl in ganz NRW • Ehrliche Kontakte • Direkte Zustellung"
    }
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Startseite", url: `https://abschleppdienst-direkt.de/${locale}` },
          { name: "Leistungen", url: `https://abschleppdienst-direkt.de/${locale}/leistungen` },
        ]}
      />
      <main className="min-h-screen bg-slate-950 text-white py-12 sm:py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-amber-400 transition-colors flex items-center gap-1 font-semibold">
            <ArrowLeft size={14} className="rtl:rotate-180" />
            <span>Startseite</span>
          </Link>
          <span>/</span>
          <span className="text-amber-400 font-bold">Leistungen</span>
        </div>

        {/* Header */}
        <div className="mb-14 text-center sm:text-left border-b border-white/10 pb-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-amber-400 mb-4 justify-center sm:justify-start">
            <span className="w-5 h-px bg-amber-400/80"></span>
            <span>Unser Leistungsspektrum</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Professionelle Autotransport- & Abschleppdienste
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Ob akute Panne auf der Autobahn, Transport zur Wunschwerkstatt oder bundesweite Überführung: Wir bieten Ihnen maßgeschneiderte Lösungen mit höchster Transportsicherheit nach VDI 2700 und moderner Plateau-Technik.
          </p>
        </div>

        {/* Editorial Service Catalog (Clean Divided Rows, Zero Nested Box Clutter) */}
        <div className="border-t border-b border-white/10 divide-y divide-white/10">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <article
                key={idx}
                className="py-10 sm:py-12 transition-colors hover:bg-white/[0.015] flex flex-col md:flex-row justify-between gap-8 items-start"
              >
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-400 flex items-center justify-center font-bold shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block">
                        {srv.tag}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                        {srv.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {srv.summary}
                  </p>

                  {/* Scenarios - Clean Typography, No Nested Box */}
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                      Typische Einsatzfälle:
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                      {srv.scenarios.map((sc, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                          <span>{sc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 text-xs text-slate-400 font-semibold flex items-center gap-2">
                    <ShieldCheck size={15} className="text-amber-400 shrink-0" />
                    <span>{srv.highlights}</span>
                  </div>
                </div>

                <div className="flex md:flex-col justify-end items-stretch gap-3 w-full md:w-[230px] shrink-0 pt-2 md:pt-0">
                  {srv.image && (
                    <div className="relative w-full h-32 rounded-2xl overflow-hidden bg-slate-900 border border-white/10 hidden md:block group">
                      <img
                        src={srv.image}
                        alt={srv.title}
                        loading="lazy"
                        width={230}
                        height={128}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <Link
                    href={`/leistungen/${srv.slug}`}
                    className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3 px-5 rounded-xl text-xs sm:text-sm shadow-md transition-all active:scale-95"
                  >
                    <span>Zur Leistungsseite</span>
                    <ArrowRight size={15} className="rtl:rotate-180" />
                  </Link>

                  <a
                    href="#anfrage-unten"
                    className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-slate-200 font-bold py-3 px-5 rounded-xl text-xs transition-all border border-white/10"
                  >
                    <span>Direkt anfragen ↓</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Direct Contact & Inquiry Destination */}
        <section id="anfrage-unten" className="mt-14 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-black text-white">
              Soforthilfe oder Transporttermin gewünscht?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Sprechen Sie direkt mit unserem Fahrer Adam und unserem Team – 24h Notruf oder unverbindliche Preisanfrage.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <a
              href="tel:+4915565500442"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-black py-3.5 px-6 rounded-xl text-xs sm:text-sm shadow-lg shadow-red-600/25 transition-all"
            >
              <Phone size={16} className="fill-white" />
              <span>24h Notruf: 0155 65500442</span>
            </a>
            <Link
              href="/#kontakt"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3.5 px-6 rounded-xl text-xs sm:text-sm transition-all"
            >
              <span>Zum Anfrageformular</span>
              <ArrowRight size={15} className="rtl:rotate-180" />
            </Link>
          </div>
        </section>

      </div>
    </main>
    </>
  );
}