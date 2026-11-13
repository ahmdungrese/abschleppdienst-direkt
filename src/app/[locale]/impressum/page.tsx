import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { ArrowLeft, Shield, FileText } from 'lucide-react';
import type { Metadata } from 'next';
import { localizedAlternates } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Impressum",
    description: "Gesetzliche Anbieterkennzeichnung gemäß § 5 DDG für Abschleppdienst Direkt - Inhaber Wassem Al Dalati in Bochum.",
    alternates: localizedAlternates(locale, '/impressum'),
  };
}

export default async function ImpressumPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 sm:py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-amber-400 transition-colors flex items-center gap-1 font-semibold">
            <ArrowLeft size={14} className="rtl:rotate-180" />
            <span>Zurück zur Startseite</span>
          </Link>
          <span>/</span>
          <span className="text-amber-400 font-bold">Impressum</span>
        </div>

        <div className="border-t border-b border-white/10 py-10 space-y-8 text-sm text-slate-300">
          
          <div className="border-b border-white/10 pb-6">
            <h1 className="text-3xl sm:text-4xl font-black text-white">Impressum</h1>
            <p className="text-xs text-amber-400 font-semibold mt-1.5">Angaben gemäß § 5 DDG (ehem. § 5 TMG)</p>
          </div>

          <div>
            <h2 className="font-bold text-white text-base mb-1">Unternehmensbezeichnung:</h2>
            <p className="text-amber-400 font-extrabold text-xl">Abschleppdienst Direkt</p>
            <p className="text-slate-300 font-medium text-xs mt-0.5">24h Abschleppdienst, Pannenhilfe &amp; Fahrzeugüberführung</p>
            <p className="mt-2 text-white">Inhaber: <span className="font-bold">Wassem Al Dalati</span></p>
            <p className="mt-1">Am Kreuzacker 21</p>
            <p>44803 Bochum</p>
            <p>Deutschland</p>
          </div>

          <div>
            <h2 className="font-bold text-white text-base mb-1">Kontakt:</h2>
            <p>Telefon: <a href="tel:+4915565500442" className="text-amber-400 font-bold hover:underline">+49 155 65500442</a></p>
            <p>E-Mail: <a href="mailto:info@abschleppdienst-direkt.de" className="text-amber-400 hover:underline">info@abschleppdienst-direkt.de</a></p>
            <p>Webseite: <Link href="/" className="text-amber-400 hover:underline">abschleppdienst-direkt.de</Link></p>
          </div>

          <div>
            <h2 className="font-bold text-white text-base mb-1">Gewerbeanmeldung:</h2>
            <p>Ordnungsgemäß angemeldetes Gewerbe bei der Stadt Bochum (Ordnungsamt / Gewerbemeldestelle).</p>
          </div>

          <div>
            <h2 className="font-bold text-white text-base mb-1">Umsatzsteuer-Hinweis (§ 19 UStG):</h2>
            <p className="text-xs text-slate-300 leading-relaxed pl-3 border-l-2 border-amber-400">
              Gemäß § 19 UStG (Kleinunternehmerregelung) wird keine Umsatzsteuer berechnet und auf Rechnungen nicht gesondert ausgewiesen.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-white text-base mb-1">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
            <p>Wassem Al Dalati</p>
            <p>Am Kreuzacker 21, 44803 Bochum</p>
          </div>

          <div>
            <h2 className="font-bold text-white text-base mb-1">EU-Streitschlichtung:</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-amber-400 underline ml-1">https://ec.europa.eu/consumers/odr</a>.<br />
              Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div className="pt-6 border-t border-white/10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 px-4 rounded-xl text-xs border border-white/10 transition-colors"
            >
              <ArrowLeft size={14} className="rtl:rotate-180" />
              <span>Zur Startseite zurückkehren</span>
            </Link>
          </div>

        </div>

      </div>
    </main>
  );
}
