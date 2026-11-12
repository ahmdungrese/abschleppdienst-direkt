import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Abschleppdienst Direkt",
  description: "Datenschutzerklärung gemäß DSGVO für Abschleppdienst Direkt - Inh. Wassem Al Dalati.",
};

export default async function DatenschutzPage({ params }: { params: Promise<{ locale: string }> }) {
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
          <span className="text-amber-400 font-bold">Datenschutz</span>
        </div>

        <div className="border-t border-b border-white/10 py-10 space-y-8 text-sm text-slate-300">
          
          <div className="border-b border-white/10 pb-6">
            <h1 className="text-3xl sm:text-4xl font-black text-white">Datenschutzerklärung</h1>
            <p className="text-xs text-amber-400 font-semibold mt-1.5">Stand: DSGVO-konform 2026</p>
          </div>

          <div>
            <h2 className="font-bold text-white text-base mb-2">1. Datenschutz auf einen Blick</h2>
            <p className="leading-relaxed">
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-white text-base mb-2">2. Verantwortliche Stelle</h2>
            <p>
              <strong>Abschleppdienst Direkt</strong><br />
              Inhaber: Wassem Al Dalati<br />
              Am Kreuzacker 21<br />
              44803 Bochum, Deutschland<br />
              Telefon: +49 155 65500442<br />
              E-Mail: info@abschleppdienst-direkt.de
            </p>
          </div>

          <div>
            <h2 className="font-bold text-white text-base mb-2">3. Datenerfassung auf dieser Website</h2>
            <p className="leading-relaxed mb-2">
              <strong>Server-Log-Dateien:</strong> Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien (Browsertyp, Betriebssystem, Referrer URL, Uhrzeit der Serveranfrage).
            </p>
            <p className="leading-relaxed">
              <strong>Kontaktaufnahme per WhatsApp / Telefon:</strong> Wenn Sie uns per WhatsApp oder Telefon kontaktieren, wird Ihre Telefonnummer und die übermittelte Nachricht zum Zweck der Bearbeitung der Transportanfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-white text-base mb-2">4. Ihre Rechte</h2>
            <p className="leading-relaxed">
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
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