import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import PriceCalculator from '@/components/calculator/PriceCalculator';
import RealWorldPriceExamples from '@/components/calculator/RealWorldPriceExamples';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { ArrowLeft, ShieldCheck, CheckCircle2, Info, HelpCircle } from 'lucide-react';
import type { Metadata } from 'next';
import { localizedAlternates } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Kostenrechner für Autotransport & Abschleppen",
    description: "Ermitteln Sie die voraussichtlichen Transportkosten für Bochum, Ruhrgebiet & ganz NRW. Transparente Festpreise ab 50 € Grundpauschale zzgl. 1,50 €/km.",
    alternates: localizedAlternates(locale, '/rechner'),
  };
}

export default async function CalculatorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isAr = locale === 'ar';
  const isEn = locale === 'en';

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: isAr ? "الرئيسية" : isEn ? "Home" : "Startseite", url: `https://abschleppdienst-direkt.de/${locale}` },
          { name: isAr ? "حاسبة التكلفة" : isEn ? "Price Calculator" : "Kostenrechner", url: `https://abschleppdienst-direkt.de/${locale}/rechner` },
        ]}
      />

      <main className="min-h-screen bg-slate-950 text-white py-12 sm:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Navigation Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-amber-400 transition-colors flex items-center gap-1 font-semibold">
              <ArrowLeft size={14} className="rtl:rotate-180" />
              <span>{isAr ? "العودة إلى الصفحة الرئيسية" : isEn ? "Back to Homepage" : "Zurück zur Startseite"}</span>
            </Link>
            <span>/</span>
            <span className="text-amber-400 font-bold">
              {isAr ? "حاسبة التكلفة الشفافة" : isEn ? "Cost Calculator" : "Kostenrechner"}
            </span>
          </div>

          {/* Dedicated Semantic H1 Header */}
          <div className="mb-10 text-center sm:text-left">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-amber-400 mb-3 justify-center sm:justify-start">
              <span className="w-4 h-px bg-amber-400/80"></span>
              <span>{isAr ? "تسعير عادل بدون وسيط" : isEn ? "100% Transparent Guide Price" : "Kostentransparenz & Richtpreis"}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              {isAr 
                ? "حاسبة تكلفة نقل وسحب السيارات" 
                : isEn 
                ? "Vehicle Towing & Transport Cost Calculator" 
                : "Kostenrechner für Autotransport & Abschleppen"}
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              {isAr
                ? "احسب فوراً التكلفة التقريبية لنقل سيارتك في بوخوم، مدن حوض الرور، وكافة أنحاء ألمانيا بناءً على المسافة الحقيقية بالكيلومتر ونوع السيارة."
                : isEn
                ? "Instantly calculate realistic guide prices for vehicle towing and transport in Bochum, the Ruhr area, and Germany-wide."
                : "Berechnen Sie in Sekundenschnelle die voraussichtlichen Kosten für Ihre Fahrzeugüberführung in Bochum, NRW und bundesweit – ehrlich, transparent und verbindlich."}
            </p>
          </div>

          {/* Explanatory Narrative Section (Clean German Editorial Typography, Zero Box Clutter) */}
          <section className="mb-10 border-t border-b border-white/10 py-8 space-y-6">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm uppercase tracking-wider">
              <HelpCircle size={18} />
              <h2>
                {isAr 
                  ? "كيف يتم احتساب السعر؟ (مبادئ الشفافية والعدالة)" 
                  : isEn 
                  ? "How is the Price Calculated? (Transparent & Fair)" 
                  : "Wie funktioniert unsere Preiskalkulation? (Ehrlich & Transparent)"}
              </h2>
            </div>

            <div className="text-sm text-slate-300 space-y-4 leading-relaxed">
              <p>
                {isAr ? (
                  <>
                    تعتمد حساباتنا على معادلة واضحة وبسيطة: <strong>50 يورو كأجرة أساسية (Grundpauschale)</strong> تشمل تجهيز شاحنة النقل، وتكاليف الانطلاق، وعملية التحميل الآمن وتثبيت العجلات بـ 4 نقاط وفقاً لمعايير <strong>VDI 2700</strong>، يضاف إليها <strong>حوالي 1,50 يورو لكل كيلومتر</strong> للمسافة المقطوعة فعلياً.
                  </>
                ) : isEn ? (
                  <>
                    Our pricing is based on a simple, honest principle: a <strong>50 € base fee (Grundpauschale)</strong> covering flatbed preparation, dispatch, and professional 4-point wheel strapping according to <strong>VDI 2700</strong> regulations, plus <strong>approx. 1.50 € per kilometer</strong> driven from the pickup point.
                  </>
                ) : (
                  <>
                    Unsere Preisberechnung basiert auf einem einfachen und ehrlichen Grundprinzip: Einer <strong>Grundpauschale von 50 €</strong> (für Fahrzeugbereitstellung, professionelle Anfahrt und vorschriftsmäßige 4-Punkt-Ladungssicherung nach <strong>VDI 2700</strong>) zzgl. <strong>ca. 1,50 € pro gefahrenem Kilometer</strong> der tatsächlichen Transportstrecke.
                  </>
                )}
              </p>

              <ul className="space-y-3 pt-1">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">
                      {isAr ? "إذا كانت السيارة سليمة وتتدحرج بحرية:" : isEn ? "For undamaged, rolling vehicles:" : "Verlässlichster Richtpreis für intakte Fahrzeuge:"}
                    </strong>{" "}
                    {isAr
                      ? "السعر الظاهر في الحاسبة هو أدق وأقرب سعر للواقع على الإطلاق، وهو السعر المعتمد للنقل دون أي زيادات أو رسوم خفية."
                      : isEn
                      ? "The price shown in the calculator is the closest and most accurate estimate to reality, with zero hidden costs."
                      : "Für fahrbereite oder rollfähige PKW liefert diese Kalkulation die exakteste und verlässlichste Annäherung an den realen Endpreis – ohne versteckte Zusatzgebühren."}
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">
                      {isAr ? "تأثير وزن السيارة وحجمها:" : isEn ? "Vehicle Weight & Curb Mass:" : "Einfluss von Fahrzeuggewicht & Fahrzeugtyp:"}
                    </strong>{" "}
                    {isAr
                      ? "السيارات الكبيرة مثل جيب SUV، والسيارات الكهربائية الثقيلة (حتى 3.5 طن)، أو الفانات الطويلة (حتى 7 أمتار) تتطلب حمولة أعلى وتجهيزاً خاصاً، لذلك توجد إضافة بسيطة وعادلة تغطي فرق الوزن."
                      : isEn
                      ? "Heavier vehicles such as large SUVs, electric vehicles with heavy traction batteries (up to 3.5t), or long vans (up to 7m) incur a minor weight surcharge."
                      : "Große SUV, schwere E-Fahrzeuge mit Großbatterie (bis 3.500 kg) oder lange Transporter (bis 7 m) beanspruchen eine höhere Nutzlast unseres Spezial-Plateaus, was im Rechner transparent berücksichtigt wird."}
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">
                      {isAr ? "حالة الأعطال والأضرار (عجلات مقفلة أو حوادث):" : isEn ? "Damage & Locked Wheels:" : "Fahrzeugzustand & Erschwernis:"}
                    </strong>{" "}
                    {isAr
                      ? "إذا كانت فرامل اليد الإلكترونية مقفلة أو الجير معطلاً، نستخدم بكرات خاصة (Go-Jaks) لرفع العجلات دون إتلاف نظام الدفع. وفي حالات الحوادث يتم السحب بالونش الكهربائي وتأمين الأجزاء المفكوكة بشبك حماية."
                      : isEn
                      ? "If the electronic handbrake or automatic gearbox is locked, we use Go-Jak dollies to safeguard the drivetrain. Damaged accident cars are safely winched with debris netting."
                      : "Bei blockierten Rädern oder festsitzender elektronischer Parkbremse (EPB) setzen wir schonende Go-Jak-Rangierroller ein, um das Getriebe zu schonen. Bei Unfallwagen erfolgt die Bergung behutsam per elektrischer Seilwinde mit Sicherungsnetz."}
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">
                      {isAr ? "ضمان السعر الثابت هاتفياً:" : isEn ? "Guaranteed Price by Phone:" : "Verbindliche telefonische Festpreis-Garantie:"}
                    </strong>{" "}
                    {isAr
                      ? "قبل الانطلاق، نتفق معك هاتفياً على السعر النهائي الثابت. السعر المتفق عليه هو السعر الذي تدفعه بالضبط."
                      : isEn
                      ? "Before dispatch, we confirm the guaranteed flat rate with you over the phone. What we agree upon is exactly what you pay."
                      : "Vor jedem Einsatz stimmen wir die genauen Details persönlich mit Ihnen ab. Die telefonische Zusage von Herrn Al Dalati ist verbindlich – keine Nachverhandlungen vor Ort."}
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Embedded Calculator */}
          <PriceCalculator />

          {/* Real-World Price Scenarios & Middleman Comparison */}
          <RealWorldPriceExamples locale={locale} />

          {/* Reassurance & Legal Clarification (Editorial Typography, Zero Box Clutter) */}
          <section className="mt-14 border-t border-white/10 pt-8 text-xs sm:text-sm text-slate-300 space-y-4">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <ShieldCheck size={20} className="text-amber-400" />
              <span>
                {isAr ? "معلومات هامة عن الفاتورة وطرق الدفع" : isEn ? "Payment Options & § 19 UStG Tax Notice" : "Wichtige Abrechnungshinweise & Zahlungsarten"}
              </span>
            </h2>

            <p className="leading-relaxed">
              {isAr ? (
                <>
                  بصفتنا مشروعاً مرخصاً وفقاً للبند <strong>§ 19 UStG (قانون المشاريع الصغيرة في ألمانيا)</strong>، لا تضاف ضريبة القيمة المضافة (19% MwSt)، ما يعني أن السعر الذي تراه هو السعر الصافي المباشر. كما نقدم لك فاتورة نظامية مطابقة لـ <strong>§ 14 UStG</strong> يمكنك تقديمها مباشرة لشركات التأمين أو نوادي السيارات (Schutzbrief / ADAC) لاسترداد كامل المبلغ.
                </>
              ) : isEn ? (
                <>
                  As a registered business under <strong>§ 19 UStG (Small Business Regulation)</strong>, no additional 19% VAT is charged. You receive an official, compliant invoice according to <strong>§ 14 UStG</strong> to submit directly to your insurance company or Schutzbrief assistance for 100% reimbursement.
                </>
              ) : (
                <>
                  Als ordnungsgemäß angemeldetes Einzelunternehmen greift die <strong>Kleinunternehmerregelung nach § 19 UStG</strong>, weshalb wir keine gesonderte 19% Umsatzsteuer ausweisen – der genannte Betrag ist der tatsächlich zu zahlende Endpreis. Sie erhalten zu jedem Einsatz eine ordnungsgemäße Rechnung gemäß <strong>§ 14 UStG</strong>, die Sie problemlos bei Ihrer Kfz-Versicherung oder Ihrem Schutzbrief zur Erstattung einreichen können.
                </>
              )}
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <p>
                <strong className="text-slate-200">{isAr ? "طرق الدفع المتاحة في الموقع:" : isEn ? "Accepted payment methods on-site:" : "Bequeme Zahlungsmöglichkeiten direkt am Einsatzort:"}</strong>{" "}
                EC-Karte / Kreditkarte (Kartenzahlung vor Ort), Barzahlung, PayPal sowie Banküberweisung.
              </p>
              <p>
                <strong className="text-slate-200">{isAr ? "الاستفسارات الخاصة والمسافات الطويلة:" : isEn ? "Long-distance inquiries:" : "Individuelle Ferntransporte:"}</strong>{" "}
                {isAr 
                  ? "لرحلات النقل التي تتجاوز 300 كم أو نقل عدة مركبات، يرجى التواصل معنا مباشرة للحصول على تسعيرة مخفضة خاصة بالمسافات الطويلة." 
                  : isEn 
                  ? "For long-distance transfers exceeding 300 km or multiple vehicles, please contact us directly for an optimized individual package." 
                  : "Für Strecken über 300 km oder spezielle Händlerüberführungen erstellen wir Ihnen gerne ein rabattiertes Fernstrecken-Angebot."}
              </p>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
