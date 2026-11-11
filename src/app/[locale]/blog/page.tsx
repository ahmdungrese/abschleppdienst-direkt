import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import BlogExplorer from '@/components/blog/BlogExplorer';
import { blogArticles } from '@/data/blogArticles';
import { ShieldCheck, Phone, MessageCircle, ArrowLeft, Wrench, Sparkles, BookOpen, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Ratgeber & Praxis-Wissen: Abschleppen & Transport | Abschleppdienst Direkt",
  description: "Praxisnahe Ratgeber aus 10 Jahren Straßenerfahrung in Bochum & im Ruhrgebiet: Wie PKW-, SUV-, Transporter-, E-Auto- und Falschtank-Einsätze wirklich ablaufen. Ehrlich, sicher und stressfrei von Abschleppdienst Direkt.",
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: "Ratgeber & Praxis-Wissen: Abschleppen & Transport | Abschleppdienst Direkt",
    description: "Ehrliche Praxisberichte und Schritt-für-Schritt-Abläufe für sichere Transporte in Bochum und im Ruhrgebiet.",
    url: "https://abschleppdienst-direkt.de/de/blog",
  },
};

export default async function BlogOverviewPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isAr = locale === 'ar';
  const isEn = locale === 'en';

  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: isAr ? 'الرئيسية' : isEn ? 'Home' : 'Startseite',
            url: `https://abschleppdienst-direkt.de/${locale}`
          },
          {
            name: isAr ? 'دليل الخبرة والمدونة' : isEn ? 'Guides & Blog' : 'Ratgeber & Blog',
            url: `https://abschleppdienst-direkt.de/${locale}/blog`
          }
        ]}
      />

      <main className="min-h-screen bg-slate-950 text-white py-12 sm:py-20 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          
          {/* Back Navigation */}
          <div className="mb-8 flex items-center gap-2 text-xs text-slate-400">
            <Link
              href="/"
              className="hover:text-amber-400 transition-colors flex items-center gap-1 font-semibold"
            >
              <ArrowLeft size={14} className="rtl:rotate-180" />
              <span>{isAr ? 'العودة للرئيسية' : isEn ? 'Back to Homepage' : 'Zurück zur Startseite'}</span>
            </Link>
            <span>/</span>
            <span className="text-slate-300">
              {isAr ? 'المدونة ودليل النقل' : isEn ? 'Guides & Blog' : 'Ratgeber & Blog'}
            </span>
          </div>

          {/* Page Header with Trust Stats */}
          <header className="mb-12 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-amber-400 text-xs font-black uppercase tracking-wider mb-5">
              <Wrench size={14} />
              <span>
                {isAr
                  ? 'خبرة حقيقية من قلب الميدان • Abschleppdienst Direkt'
                  : isEn
                  ? 'Real Practical Field Insights • Abschleppdienst Direkt'
                  : 'Praxis-Ratgeber & Fachwissen • Abschleppdienst Direkt'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-5 leading-tight">
              {isAr ? (
                <>
                  دليل الإنقاذ ونقل السيارات:{' '}
                  <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                    خبرة واقعية وشفافية مطلقة
                  </span>
                </>
              ) : isEn ? (
                <>
                  Towing & Vehicle Transport:{' '}
                  <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                    Field Experience in Practice
                  </span>
                </>
              ) : (
                <>
                  Abschleppen & Fahrzeugtransport:{' '}
                  <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                    Praxis-Wissen vom Profi
                  </span>
                </>
              )}
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              {isAr
                ? 'أكثر من 10 سنوات على طرق بوخوم ومنطقة الرور: نوثق لك كيفية سير عمليات السحب ونقل السيارات الحديثة والمعطلة بدقة، ما المعدات المستخدمة، وكيف نضمن لك نقلاً آمناً بنسبة 100% وخالياً من أي قلق.'
                : isEn
                ? 'Over 10 years on the roads of Bochum and the Ruhr area: step-by-step breakdowns of real recoveries, flatbed vehicle transfers, and safe equipment guidelines.'
                : 'Aus über 10 Jahren Praxis im Ruhrgebiet: Transparente Einblicke in unsere Ausrüstung an Bord, den genauen Bergungsablauf und wie wir Ihr Fahrzeug oder Ihre Fracht vollkommen stressfrei, sicher und flexibel ans Ziel bringen.'}
            </p>

            {/* Quick Badges Strip */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-300">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-white/10">
                <BookOpen size={13} className="text-amber-400" />
                <span>{isAr ? `${blogArticles.length} دليلاً مفصلاً` : `${blogArticles.length} Fachratgeber`}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-white/10">
                <Clock size={13} className="text-emerald-400" />
                <span>{isAr ? '20-35 دقيقة استجابة' : '20-35 Min. Vor Ort'}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-white/10">
                <ShieldCheck size={13} className="text-sky-400" />
                <span>{isAr ? 'استشارة هاتفية مجانية 100%' : '100% Kostenlose Beratung'}</span>
              </span>
            </div>
          </header>

          {/* Dynamic Magazine Explorer with Search & Filtering */}
          <div className="mb-20">
            <BlogExplorer articles={blogArticles} locale={locale} />
          </div>

          {/* Reassuring Human CTA Section */}
          <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/40 p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[90px] pointer-events-none" />
            
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold mb-4">
              <ShieldCheck size={14} />
              <span>
                {isAr
                  ? 'خدمة مباشرة مع Wassem Al Dalati شخصياً'
                  : isEn
                  ? 'Direct Service with Wassem Al Dalati'
                  : 'Direkter Draht zu Wassem Al Dalati'}
              </span>
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
              {isAr
                ? 'هل تريد نقلاً آمناً، مرناً وبدون أي توتر أو ضغط؟'
                : isEn
                ? 'Looking for safe, flexible, and completely stress-free transport?'
                : 'Sie möchten Ihr Fahrzeug sicher, flexibel und ohne Stress transportieren lassen?'}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              {isAr
                ? 'سواء كانت سيارة معطلة، أو سيارة دفع رباعي، أو فان بطول 7 أمتار، أو شحن بضائع عاجلة: نحن نصل مجهزين بكامل المعدات ونضمن لك راحة البال التامة بأسعار ثابتة وعادلة.'
                : isEn
                ? 'Whether it is a broken-down car, heavy SUV, 7-meter van, or urgent cargo: we arrive fully prepared and guarantee complete peace of mind with fair, transparent fixed rates.'
                : 'Ob Liegenbleiber, schwerer Allrad-SUV, 7-Meter-Transporter oder eilige Sonderfracht: Wir kommen mit voller Profi-Ausrüstung zu Ihnen und garantieren absolute Sorgfalt zu fairen, verbindlichen Festpreisen.'}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+4915565500442"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm transition-all shadow-lg shadow-amber-500/25 active:scale-95"
              >
                <Phone size={18} />
                <span>{isAr ? 'اتصال مباشر: 0155 65500442' : 'Direkt anrufen: 0155 65500442'}</span>
              </a>

              <a
                href="https://wa.me/4915565500442?text=Hallo%20Wassem,%20ich%20habe%20eine%20Anfrage%20f%C3%BCr%20einen%20Fahrzeugtransport."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-lg shadow-emerald-600/25 active:scale-95"
              >
                <MessageCircle size={18} />
                <span>{isAr ? 'مراسلتنا عبر واتساب' : 'Per WhatsApp schreiben'}</span>
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-400">
              {isAr
                ? 'متواجدون 24 ساعة في بوخوم وكامل منطقة الرور وشمال الراين'
                : '24h Notruf & Transportbereitschaft in Bochum, auf A40/A43 und in ganz NRW'}
            </p>
          </div>

        </div>
      </main>
    </>
  );
}
