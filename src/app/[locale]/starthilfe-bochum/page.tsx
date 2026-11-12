import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { Zap, ShieldCheck, CheckCircle2, AlertTriangle, Phone, MessageCircle, ArrowLeft, ArrowRight, BatteryCharging, Sparkles, Cpu, Clock, Check, X } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Profi-Starthilfe Bochum (800€ NOCO Boost Max 5250A) | Abschleppdienst Direkt",
  description: "Professionelle Vor-Ort Starthilfe in Bochum & A40/A43 mit dem 800 € High-End Starthilfegerät NOCO Boost Max GB250+ (5250A). 100% funkenfrei & sicherer Schutz für moderne Steuergeräte. Vor Ort in 20-40 Min.",
  alternates: {
    canonical: '/starthilfe-bochum',
  },
};

export default async function StarthilfeBochumPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isAr = locale === 'ar';
  const isEn = locale === 'en';

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: isAr ? "الرئيسية" : isEn ? "Home" : "Startseite", url: `https://abschleppdienst-direkt.de/${locale}` },
          { name: isAr ? "خدمة تشغيل السيارات" : isEn ? "Jump Start Service" : "Starthilfe Bochum", url: `https://abschleppdienst-direkt.de/${locale}/starthilfe-bochum` },
        ]}
      />

      <main className="min-h-screen bg-slate-950 text-white py-12 sm:py-20 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-red-600/10 blur-[130px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-amber-500/10 blur-[140px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          
          {/* Back link */}
          <div className="mb-8 flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-amber-400 transition-colors flex items-center gap-1 font-semibold">
              <ArrowLeft size={14} className="rtl:rotate-180" />
              <span>{isAr ? "العودة للرئيسية" : isEn ? "Back to Homepage" : "Zurück zur Startseite"}</span>
            </Link>
            <span>/</span>
            <span className="text-slate-300">{isAr ? "معدات Starthilfe الاحترافية" : isEn ? "Professional Jump Start" : "Ratgeber Starthilfe"}</span>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-amber-400 mb-5">
              <Zap size={15} className="fill-amber-400 text-amber-400 shrink-0" />
              <span>
                {isAr
                  ? "معدات الورشات الاحترافية • Abschleppdienst Direkt"
                  : isEn
                  ? "Pro Workshop Equipment • Abschleppdienst Direkt"
                  : "Werkstatt-Technik im Vor-Ort-Einsatz • Abschleppdienst Direkt"}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {isAr
                ? "تشغيل السيارات الاحترافي في بوخوم: لماذا نستثمر في جهاز NOCO Boost Max بقيمة 800 يورو لحماية سيارتك؟"
                : isEn
                ? "Professional Jump-Start in Bochum: Why We Rely on the €800 NOCO Boost Max (5250A) to Protect Your Car"
                : "Professionelle Starthilfe in Bochum: Warum wir auf das 800-Euro-Starthilfegerät NOCO Boost Max (5250A) setzen"}
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {isAr
                ? "قد تظن أن كابل الاشتراك التقليدي الرخيص يكفي، ولكن في السيارات الحديثة قد يؤدي ذلك إلى حرق كمبيوتر السيارة (Steuergerät) وتلفيات بآلاف اليوروهات. تعرّف على كيفية تشغيل سيارتك في بوخوم بأعلى معايير الأمان العالمية وبدون أي شرر أو مخاطر كهربائية."
                : isEn
                ? "You might think a cheap jumper cable is enough, but on modern cars, voltage spikes can instantly destroy sensitive ECUs worth thousands of euros. Discover how we jump-start vehicles in Bochum safely, spark-free, and with zero electrical risks."
                : "Warum billige Baumarkt-Starthilfekabel teure Steuergeräte moderner Fahrzeuge zerstören können – und wie Sie bei Abschleppdienst Direkt in Bochum von zertifizierter Werkstatt-Sicherheitstechnik ohne jedes Elektronik-Risiko profitieren."}
            </p>

            {/* Quick emergency callout banner */}
            <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-red-600/20 via-slate-900 to-slate-900 border border-red-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-red-400 block mb-0.5">
                  {isAr ? "هل بطارية سيارتك فارغة الآن في بوخوم أو على الأوتوبان؟" : isEn ? "Car battery dead in Bochum or on highway right now?" : "Batterie aktuell leer in Bochum oder auf A40 / A43?"}
                </span>
                <span className="text-sm font-semibold text-white">
                  {isAr ? "وصول سريع خلال 20–40 دقيقة مع جهاز NOCO Boost الاحترافي" : isEn ? "Express arrival in 20–40 min with NOCO Boost Pro" : "Express-Anfahrt in ca. 20–40 Min. mit dem NOCO Boost Profi-Gerät"}
                </span>
              </div>
              <a
                href="tel:+4915565500442"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black text-xs sm:text-sm shadow-lg shadow-red-600/30 transition-all flex-shrink-0"
              >
                <Phone size={16} />
                <span>0155 65500442</span>
              </a>
            </div>
          </header>

          {/* Visual Showcase: The Real NOCO Boost Equipment (Clean Dual Showcase, Zero Nested Boxes) */}
          <section className="mb-14 pt-6 border-t border-b border-white/10 pb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Photo 1: The GB250+ Unit */}
              <div className="flex flex-col justify-between space-y-4">
                <div className="relative h-60 sm:h-72 w-full overflow-hidden rounded-2xl bg-slate-900/70 flex items-center justify-center p-4 border border-white/10">
                  <img
                    src="/images/real/noco-boost-starthilfe.jpg"
                    alt="NOCO Boost Max GB250+ 5250A 12V High-End Starthilfegerät in Bochum"
                    loading="lazy"
                    width={600}
                    height={400}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
                    Werkstatt-Originalausrüstung
                  </span>
                  <h3 className="text-base font-bold text-white mb-1.5">
                    NOCO Boost Max GB250+ (5.250 Ampere Spitzenstrom)
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Startet selbst tiefentladene Motoren bis zu 16,0 Liter Hubraum – vom Kleinwagen über V8/V10-Sportwagen bis zum schweren Diesel-Transporter.
                  </p>
                </div>
              </div>

              {/* Photo 2: Funkenfrei & Ultra Sicher 2.0 Graphic */}
              <div className="flex flex-col justify-between space-y-4">
                <div className="relative h-60 sm:h-72 w-full overflow-hidden rounded-2xl bg-slate-900/70 flex items-center justify-center p-4 border border-white/10">
                  <img
                    src="/images/real/noco-boost-profi-geraet.jpg"
                    alt="Ultra Sicher 2.0 Elektronik-Schutz NOCO Boost Max"
                    loading="lazy"
                    width={600}
                    height={600}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
                    Elektronik-Sicherheit
                  </span>
                  <h3 className="text-base font-bold text-white mb-1.5">
                    100% Funkenfrei mit aktivem Verpolungsschutz
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Ultra Sicher 2.0 garantiert geglättete Gleichspannung ohne Spannungsspitzen – absoluter Schutz für Steuergeräte, Sensoren und Bordnetze.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* Article Body Section 1: The Hidden Danger */}
          <section className="mb-12 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              1. Das unterschätzte Risiko: Warum herkömmliche Starthilfe gefährlich ist
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              In früheren Fahrzeuggenerationen war Starthilfe simpel: Man klemmte zwei Kabel zwischen zwei Autos, ließ den Spender laufen und drehte den Schlüssel. Wer das heute bei einem modernen Fahrzeug (BMW, Mercedes, Audi, VW, Porsche oder Hybrid) tut, spielt mit dem Feuer.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Moderne Automobile beherbergen zwischen <strong>40 und 80 hochsensible Steuergeräte</strong> (Motorsteuergerät, Getriebesteuerung, ABS/ESP, Infotainment und Batteriemanagement-Sensoren). Wenn ein herkömmliches Kabel an- oder abgeklemmt wird, entstehen mikroskopisch kurze, aber verheerende <strong>Spannungsspitzen von 18 bis über 30 Volt</strong>.
            </p>
            
            <div className="border-l-4 border-red-500 pl-4 py-1 my-6">
              <div className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                <strong className="text-white block mb-1">Die bittere Realität billiger Überbrückungsversuche:</strong>
                Ein einzelnes durchgebranntes Steuergerät kostet zwischen 1.200 € und 3.500 € in der Vertragswerkstatt. Aus einer scheinbar einfachen leeren Batterie wird so in Sekundenbruchteilen ein wirtschaftlicher Albtraum.
              </div>
            </div>
          </section>

          {/* Article Body Section 2: Editorial Differences (Clean Divided Rows, Zero Boxes) */}
          <section className="mb-14 space-y-5 pt-8 border-t border-white/10">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              2. Worauf es bei professioneller Starthilfe ankommt
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Damit ein moderner Motor auch bei tiefentladener Batterie sicher anspringt, ohne dass Sensoren oder Steuergeräte beschädigt werden, setzen wir auf drei entscheidende Schutzmechanismen:
            </p>

            <div className="divide-y divide-white/10 border-t border-b border-white/10">
              <div className="py-5 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <Check size={16} strokeWidth={3} />
                  <span>Keine Spannungsspitzen (Geglättete 12V-Gleichspannung)</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-6">
                  Im Gegensatz zu einfachen Baumarktkabeln liefert der NOCO Boost Max GB250+ geregelten Gleichstrom. Spannungsspitzen über 14,8 Volt sind technisch ausgeschlossen, sodass selbst empfindlichste Steuergeräte keinen Schaden nehmen.
                </p>
              </div>

              <div className="py-5 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <Check size={16} strokeWidth={3} />
                  <span>100% Funkenfreie Anschlusstechnik &amp; aktiver Verpolungsschutz</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-6">
                  Beim Anklemmen fließen erst dann Ströme, wenn die korrekte Polarität beider Zangen digital verifiziert wurde. Dadurch wird jeglicher Funkenflug verhindert – lebenswichtig bei ausgasenden Bleibatterien.
                </p>
              </div>

              <div className="py-5 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <Check size={16} strokeWidth={3} />
                  <span>Integrierte Spannungsdiagnose vor dem Start</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-6">
                  Vor dem Anlassen messen wir über das digitale Voltmeter die Restspannung der Batterie. So erkennen wir sofort, ob lediglich das Licht vergessen wurde oder ein interner Zellenschluss vorliegt.
                </p>
              </div>
            </div>
          </section>

          {/* Article Body Section 3: Team Philosophy */}
          <section className="mb-14 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
              <ShieldCheck size={16} />
              <span>Handwerksehre &amp; echte Verantwortung</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-white">
              Warum unser Einsatzteam diese Investition getätigt hat
            </h2>

            <blockquote className="border-l-4 border-amber-500 pl-4 py-1 italic text-sm sm:text-base text-slate-200 leading-relaxed font-serif">
              &bdquo;Ich übe diesen Beruf seit über 10 Jahren mit Herzblut aus. Wenn mich nachts ein Kunde von der A40 anruft oder morgens jemand in Bochum verzweifelt vor seinem nicht anspringenden Wagen steht, mache ich keine halben Sachen. Ich behandle jedes Kundenfahrzeug mit demselben Respekt wie mein eigenes. Die 800 Euro für den NOCO Boost Max GB250+ waren für mich selbstverständlich – denn die Sicherheit der Bordelektronik meiner Kunden ist unbezahlbar.&ldquo;
            </blockquote>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
              — <strong className="text-white">Adam</strong>, erfahrener Einsatzfahrer bei Abschleppdienst Direkt
            </p>
          </section>

          {/* Article Body Section 4: Process (Clean Editorial Steps, Zero Boxes) */}
          <section className="mb-14 pt-8 border-t border-white/10 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              3. So läuft unser Starthilfe-Einsatz vor Ort in Bochum ab
            </h2>

            <div className="divide-y divide-white/10">
              <div className="py-4 flex items-start gap-4">
                <div className="w-7 h-7 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-400 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Anruf &amp; Standorterfassung</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-1">
                    Rufen Sie uns direkt an (0155 65500442) oder nutzen Sie den Kontaktbereich am Seitenende. Wir machen uns sofort auf den Weg (ca. 20–40 Min.).
                  </p>
                </div>
              </div>

              <div className="py-4 flex items-start gap-4">
                <div className="w-7 h-7 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-400 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Spannungsdiagnose vor Ort</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-1">
                    Über das integrierte digitale Voltmeter prüfen wir die Ruhespannung der Batterie, um zu sehen, ob nur Entladung oder ein Defekt vorliegt.
                  </p>
                </div>
              </div>

              <div className="py-4 flex items-start gap-4">
                <div className="w-7 h-7 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-400 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Funkenfreier Startvorgang</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-1">
                    Anschluss der massiven Sicherheitsklemmen. Mit 5.250A Spitzenstrom startet der Motor sofort, ohne dass die Bordelektronik gefährdet wird.
                  </p>
                </div>
              </div>

              <div className="py-4 flex items-start gap-4">
                <div className="w-7 h-7 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-400 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                  4
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Sicherheits-Backup parat</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-1">
                    Sollte die Lichtmaschine defekt sein oder die Batterie einen Zellenschluss haben, steht unser Plateau-Transporter bereit für die direkte Fahrt zur Werkstatt.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing & Fair Play */}
          <section className="mb-14 pt-8 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-black text-white mb-2">
              Faire Festpreise ohne böse Überraschungen
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              Bei uns gibt es keine überteuerten Fantasiepreise wie bei anonymen Notdienst-Vermittlern. Für unsere professionelle Vor-Ort-Starthilfe mit dem NOCO Boost Max im Stadtgebiet von Bochum zahlen Sie eine transparente, faire Pauschale (gemäß § 19 UStG ohne MwSt). Rufen Sie einfach kurz an, und wir nennen Ihnen den verbindlichen Festpreis sofort am Telefon.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-200">
              <span className="flex items-center gap-1.5"><Check size={14} className="text-amber-400" /> Keine versteckten Gebühren</span>
              <span className="flex items-center gap-1.5"><Check size={14} className="text-amber-400" /> Ausgestellt auf Ihren Namen für Versicherung</span>
              <span className="flex items-center gap-1.5"><Check size={14} className="text-amber-400" /> Inhabergeführter Meister-Einsatz vor Ort</span>
            </div>
          </section>

          {/* Direct CTA Section at End of Article — Open Editorial Layout */}
          <section className="py-10 border-t border-b border-white/10 text-center space-y-6">
            <div className="max-w-xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Brauchen Sie jetzt schnelle Starthilfe in Bochum?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Wir sind rund um die Uhr einsatzbereit im gesamten Stadtgebiet von Bochum, Wattenscheid und auf den Autobahnen A40, A43 und A448.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+4915565500442"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black text-sm shadow-xl shadow-red-600/30 active:scale-95 transition-all"
              >
                <Phone size={18} className="fill-white" />
                <span>24h Notruf: 0155 65500442</span>
              </a>

              <a
                href={`https://wa.me/4915565500442?text=${encodeURIComponent(
                  "Hallo Abschleppdienst Direkt, ich brauche Starthilfe für mein Fahrzeug in Bochum. Können Sie mir helfen?"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-white/15 hover:border-amber-400/40 font-bold text-sm shadow-md active:scale-95 transition-all"
              >
                <MessageCircle size={18} className="text-amber-400" />
                <span>WhatsApp Standort senden</span>
              </a>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs text-slate-400 flex items-center justify-center gap-6">
              <span>Stationiert in 44809 Bochum</span>
              <span>•</span>
              <span>Express vor Ort in 20–40 Min.</span>
            </div>
          </section>

          {/* Bottom Back Navigation */}
          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-amber-400 transition-colors text-xs font-bold shadow-sm"
            >
              <ArrowLeft size={15} className="rtl:rotate-180 text-amber-400" />
              <span>{isAr ? "العودة إلى الصفحة الرئيسية" : isEn ? "Back to Homepage" : "Zurück zur Startseite"}</span>
            </Link>
          </div>

        </div>
      </main>
    </>
  );
}
