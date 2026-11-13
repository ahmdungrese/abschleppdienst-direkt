import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import FAQ from '@/components/home/FAQ';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { faqsData } from '@/data/faqs';
import { BRAND } from '@/config/brand';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';
import { localizedAlternates } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Häufige Fragen (FAQ) zu Abschleppen, Pannenhilfe & Überführung",
    description: `Alle ${faqsData.length} Fragen & Antworten rund um Abschleppdienst, Pannenhilfe, E-Auto-Transport, Kosten und Versicherung in Bochum, im Ruhrgebiet & NRW – direkt aus der Praxis von ${BRAND.name}.`,
    alternates: localizedAlternates(locale, '/faq'),
  };
}

export default async function FAQPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isAr = locale === 'ar';
  const isEn = locale === 'en';

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: isAr ? "الرئيسية" : isEn ? "Home" : "Startseite", url: `${BRAND.url}/${locale}` },
          { name: isAr ? "الأسئلة الشائعة" : isEn ? "FAQ" : "Häufige Fragen (FAQ)", url: `${BRAND.url}/${locale}/faq` },
        ]}
      />

      <main className="min-h-screen bg-slate-950 text-white pt-12 sm:pt-20">
        <div className="container mx-auto px-4 max-w-5xl">

          {/* Navigation Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-amber-400 transition-colors flex items-center gap-1 font-semibold">
              <ArrowLeft size={14} className="rtl:rotate-180" />
              <span>{isAr ? "العودة إلى الصفحة الرئيسية" : isEn ? "Back to Homepage" : "Zurück zur Startseite"}</span>
            </Link>
            <span>/</span>
            <span className="text-amber-400 font-bold">
              {isAr ? "الأسئلة الشائعة" : "FAQ"}
            </span>
          </div>

          {/* Dedicated Semantic H1 Header */}
          <div className="mb-10 text-center sm:text-left">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-amber-400 mb-3 justify-center sm:justify-start">
              <span className="w-4 h-px bg-amber-400/80"></span>
              <span>{isAr ? "قاعدة المعرفة والأسئلة الشائعة" : isEn ? "Knowledge Base & FAQ" : "Wissensdatenbank & FAQ"}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              {isAr
                ? "الأسئلة الشائعة حول السحب والمساعدة على الطريق ونقل السيارات"
                : isEn
                ? "Frequently Asked Questions about Towing, Roadside Help & Vehicle Transfer"
                : "Häufige Fragen zu Abschleppen, Pannenhilfe & Fahrzeugüberführung"}
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              {isAr
                ? "إجابات واضحة ودقيقة تقنياً وقانونياً مستخلصة من واقع خبرتنا اليومية على طرق الأوتوبان A40 وA43 وA448 وفي منطقة الرور. ابحث عن سؤالك أو اختر الفئة المناسبة."
                : isEn
                ? "Clear, technically accurate answers from real operations on Autobahn A40, A43, A448 and across the Ruhr region. Search for your question or pick a category."
                : "Klare, rechtlich und technisch fundierte Antworten aus der täglichen Praxis auf A40, A43, A448 und im gesamten Ruhrgebiet. Suchen Sie Ihre Frage oder wählen Sie eine Kategorie."}
            </p>
          </div>
        </div>

        <FAQ variant="full" />
      </main>
    </>
  );
}
