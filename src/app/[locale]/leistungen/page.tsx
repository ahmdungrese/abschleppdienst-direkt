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
      title: "Fahrzeugüberführung (Autotransport von A nach B)",
      tag: "Bis 3,5 Tonnen • Regional & Überregional",
      image: "/images/real/tow-truck-audi-rs3-wide.jpg",
      summary: "Sicherer und termingerechter Transport von Fahrzeugen – regional oder überregional. Schonender Einzeltransport von fahrbereiten, nicht zugelassenen PKW, Neufahrzeugen oder Oldtimern im Ruhrgebiet und bundesweit.",
      scenarios: [
        "Fahrzeugkauf ohne Kennzeichen / abgemeldete Neufahrzeuge",
        "Transport zwischen Werkstätten, Autohäusern oder Privatpersonen",
        "Schonender Transport von Oldtimern und Sportwagen",
        "Überführung rollfähiger Autos bei Wohnortwechsel oder Umzug"
      ],
      highlights: "100% Einzelfahrt auf Plateau • Haustürabholung & Zustellung • Keine Beiladung"
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
      title: "Pannenhilfe & Vor-Ort Starthilfe",
      tag: "800 € NOCO Boost Max (5250A)",
      image: "/images/real/noco-boost-starthilfe.jpg",
      summary: "Sofortige Vor-Ort-Hilfe bei leerer Batterie ohne Risiko für die Bordelektronik sowie schneller Radwechsel mit dem 800 € Profi-Booster NOCO Boost Max (5250A).",
      scenarios: [
        "Winter-Kälteschock: Batterie bricht bei Frost elektrochemisch zusammen",
        "Licht versehentlich angelassen: Batterie über Nacht tiefentladen",
        "Klickendes Starterrelais beim Startversuch",
        "Reifenpanne: Montage des Reserverads direkt vor Ort"
      ],
      highlights: "800 € NOCO Boost Max • 100% Funkenfrei & Verpolungsschutz • In 20–40 Min. vor Ort"
    },
    {
      slug: 'bundesweite-ueberfuehrung',
      icon: Map,
      title: "Bundesweite Überführung & Warentransport",
      tag: "Güter & KFZ bis 3,5 t",
      image: "/images/real/tow-truck-bmw-side.jpg",
      summary: "Professionelle Durchführung von Transportaufträgen für unterschiedlichste Güter und Fahrzeuge bis 3,5 t quer durch ganz Deutschland zu transparenten Konditionen.",
      scenarios: [
        "Warentransport & Logistik: Durchführung von Transportaufträgen für unterschiedlichste Güter, Maschinen & Paletten bis 3,5 t",
        "Fahrzeugkauf in Münster, Bielefeld, Köln, Düsseldorf, Frankfurt oder Berlin",
        "Rückholung defekter oder verunfallter Fahrzeuge aus dem Urlaub",
        "Termintransporte ohne Zwischenlagerung von Punkt A nach Punkt B"
      ],
      highlights: "Feste Kilometerpreise • VDI-2700-Ladungssicherung • Pünktliche Direktfahrten"
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
          <div className="inline-block px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            Unser Leistungsspektrum
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Professionelle Autotransport- & Abschleppdienste
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Ob akute Panne auf der Autobahn, Transport zur Wunschwerkstatt oder bundesweite Überführung: Wir bieten Ihnen maßgeschneiderte Lösungen mit höchster Transportsicherheit nach VDI 2700 und moderner Plateau-Technik.
          </p>
        </div>

        {/* Detailed Service Cards */}
        <div className="space-y-8">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-amber-500/40 transition-all flex flex-col md:flex-row justify-between gap-6"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-300">
                      {srv.tag}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {srv.title}
                  </h2>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {srv.summary}
                  </p>

                  {/* Scenarios - Clean Typography, No Nested Box */}
                  <div className="space-y-2 mb-4 pt-1">
                    <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                      Typische Einsatzfälle:
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                      {srv.scenarios.map((sc, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-amber-400 flex-shrink-0" />
                          <span>{sc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-xs text-slate-400 font-semibold flex items-center gap-2">
                    <ShieldCheck size={16} className="text-emerald-400" />
                    <span>{srv.highlights}</span>
                  </div>
                </div>

                <div className="flex md:flex-col justify-end items-end gap-3 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6 min-w-[220px]">
                  {srv.image && (
                    <div className="relative w-full h-28 rounded-xl overflow-hidden bg-slate-900 border border-white/10 hidden md:block group">
                      <img
                        src={srv.image}
                        alt={srv.title}
                        loading="lazy"
                        width={220}
                        height={112}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <Link
                    href={`/leistungen/${srv.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black py-3 px-5 rounded-xl text-xs sm:text-sm shadow-md transition-all active:scale-95"
                  >
                    <span>Zur Leistungsseite</span>
                    <ArrowRight size={15} className="rtl:rotate-180" />
                  </Link>

                  <a
                    href="tel:+4915565500442"
                    className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-5 rounded-xl text-xs transition-all border border-white/10"
                  >
                    <Phone size={14} className="text-amber-400" />
                    <span>0155 65500442</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </main>
    </>
  );
}