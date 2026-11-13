import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { 
  MapPin, 
  Navigation, 
  Compass, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  ArrowLeft, 
  ArrowRight, 
  Route, 
  Wrench, 
  Home, 
  Building2, 
  Check, 
  Mountain,
  Truck
} from 'lucide-react';
import type { Metadata } from 'next';
import { localizedAlternates } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Einsatzgebiet & Streckennetz: Bochum, Ruhrgebiet & NRW",
    description: "Zonierte Eintreffzeiten: Express in 15–30 Min. in Bochum, Dortmund, Essen, Herne, Witten. Erweiterte Zone (40–60 Min.), Sauerland-Spezialbergung & bundesweite Überführungen.",
    alternates: localizedAlternates(locale, '/einsatzgebiet'),
  };
}

export default async function EinsatzgebietPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isAr = locale === 'ar';
  const isEn = locale === 'en';

  // Key NRW Autobahns from central Bochum
  const autobahns = [
    { code: "A 40", name: "Ruhrschnellweg", desc: isAr ? 'إسن (15 دقيقة) ↔ بوخوم ↔ دورتموند (18 دقيقة)' : "Essen (ca. 15 Min.) ↔ Bochum ↔ Dortmund (ca. 18 Min.)" },
    { code: "A 43", name: "Münster ↔ Wuppertal", desc: isAr ? 'هيرنه، ريكلينغهاوزن، هالترن، ومونسترلاند' : "Herne, Recklinghausen, Haltern & Münsterland" },
    { code: "A 448", name: "Bochumer Ring", desc: isAr ? 'طريق بوخوم الدائري، جامعة الرور، فاتنشايد وفايتمار' : "Südring, Querenburg (RUB), Wattenscheid & Weitmar" },
    { code: "A 42", name: "Emscherschnellweg", desc: isAr ? 'غيلسنكيرشن، كاستروب-روكسل، وهيرنه' : "Gelsenkirchen, Castrop-Rauxel, Herne & Oberhausen" },
    { code: "A 45", name: "Sauerlandlinie", desc: isAr ? 'دورتموند ↔ هاغن ↔ لودنشايد ↔ أولبه وزيغن' : "Dortmund ↔ Hagen ↔ Lüdenscheid ↔ Siegen" },
    { code: "A 44", name: "Süd-Achse", desc: isAr ? 'بوخوم، فيتن، جنوب دورتموند وأونا' : "Bochum, Witten, Dortmund-Süd & Unna" },
  ];

  const bochumDistricts = [
    { name: "Altenbochum", zip: "44803", note: isAr ? 'المقر المركزي لـ Abschleppdienst Direkt' : "Zentraler Standort Abschleppdienst Direkt" },
    { name: "Bochum-Mitte", zip: "44787 / 44789", note: isAr ? 'وسط المدينة ومحطة القطار الرئيسية' : "Innenstadt & Hauptbahnhof" },
    { name: "Wattenscheid", zip: "44866 / 44867", note: isAr ? 'اتصال مباشر بالطريق السريع A40' : "Direkte A40-Anbindung" },
    { name: "Langendreer", zip: "44892", note: isAr ? 'شرق بوخوم والحدود مع فيتن' : "Ostumgehung & Witten-Grenze" },
    { name: "Querenburg", zip: "44801", note: isAr ? 'جامعة الرور (RUB) والطريق A448' : "Ruhr-Universität (RUB) & A448" },
    { name: "Weitmar", zip: "44795", note: isAr ? 'عبر شارع هاتينغر و Springorum' : "Über Springorumtrasse & Hattinger Str." },
    { name: "Linden & Dahlhausen", zip: "44879", note: isAr ? 'المنطقة الجنوبية ووادي الرور' : "Südbereich Ruhrtal" },
    { name: "Stiepel", zip: "44797", note: isAr ? 'بحيرة كيمناد ووادي الرور' : "Kemnader See & Ruhrtal" },
    { name: "Harpen", zip: "44805", note: isAr ? 'مركز تسوق Ruhr Park و A40' : "Ruhr Park Einkaufszentrum & A40" },
    { name: "Gerthe & Hiltrop", zip: "44805", note: isAr ? 'الشمال الشرقي والحدود مع هيرنه' : "Nordost-Grenzbereich Herne/Castrop" },
    { name: "Riemke", zip: "44807", note: isAr ? 'شارع هيرنر ومحور مترو U35' : "Herner Straße & U35-Achse" },
    { name: "Wiemelhausen", zip: "44799", note: isAr ? 'حي الكنيسة ومحور A448' : "Kirchviertel & A448" },
  ];

  const expressNeighbors = [
    { name: "Dortmund", time: "ca. 15–25 Min.", route: "Über A40 / B1 Ostachse" },
    { name: "Essen", time: "ca. 15–25 Min.", route: "Über A40 Ruhrschnellweg" },
    { name: "Herne", time: "ca. 15–20 Min.", route: "Über A43 direkte Nordachse" },
    { name: "Witten", time: "ca. 15–20 Min.", route: "Über Crengeldanz & A44" },
  ];

  const extendedRuhrCities = [
    { name: "Gelsenkirchen", time: "ca. 25–40 Min.", route: "Über A42 & B227" },
    { name: "Castrop-Rauxel", time: "ca. 25–40 Min.", route: "Über A42 / B235" },
    { name: "Hattingen", time: "ca. 25–40 Min.", route: "Über Hattinger Straße & Ruhrbrücke" },
    { name: "Recklinghausen", time: "ca. 30–45 Min.", route: "Über A43 Kreuz Recklinghausen" },
    { name: "Gladbeck & Bottrop", time: "ca. 35–50 Min.", route: "Über B224 & A2" },
    { name: "Mülheim an der Ruhr", time: "ca. 35–50 Min.", route: "Über A40 Richtung Duisburg" },
    { name: "Hagen", time: "ca. 35–50 Min.", route: "Über A45 / Hagen-Nord" },
  ];

  // Schema.org JSON-LD for Local SEO & Gemini Entity Recognition
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    name: 'Abschleppdienst Direkt',
    url: `https://abschleppdienst-direkt.de/${locale}/einsatzgebiet`,
    telephone: '+4915565500442',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Am Kreuzacker 21',
      addressLocality: 'Bochum',
      postalCode: '44803',
      addressCountry: 'DE',
    },
    areaServed: [
      { '@type': 'City', name: 'Bochum' },
      { '@type': 'City', name: 'Dortmund' },
      { '@type': 'City', name: 'Essen' },
      { '@type': 'City', name: 'Herne' },
      { '@type': 'City', name: 'Witten' },
      { '@type': 'City', name: 'Gelsenkirchen' },
      { '@type': 'City', name: 'Recklinghausen' },
      { '@type': 'City', name: 'Castrop-Rauxel' },
      { '@type': 'City', name: 'Hattingen' },
      { '@type': 'City', name: 'Lüdenscheid' },
      { '@type': 'City', name: 'Olpe' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Leistungsangebot Abschleppdienst Direkt',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '24h Abschleppdienst & Unfallbergung' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pannenhilfe & Starthilfe' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fahrzeugüberführung ohne Zulassung' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Spezialbergung Hanglagen & Bergregionen A45' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Werkstattvermittlung & Fachberatung' } },
      ],
    },
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: isAr ? "الرئيسية" : isEn ? "Home" : "Startseite", url: `https://abschleppdienst-direkt.de/${locale}` },
          { name: isAr ? "نطاق العمل ومناطق التغطية" : isEn ? "Service Area" : "Einsatzgebiet", url: `https://abschleppdienst-direkt.de/${locale}/einsatzgebiet` },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <main className="min-h-screen bg-slate-950 text-white py-12 sm:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Navigation Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-xs text-slate-400">
            <Link
              href="/"
              className="hover:text-amber-400 transition-colors flex items-center gap-1 font-semibold"
            >
              <ArrowLeft size={14} className="rtl:rotate-180" />
              <span>{isAr ? "العودة للرئيسية" : isEn ? "Back to Homepage" : "Zurück zur Startseite"}</span>
            </Link>
            <span>/</span>
            <span className="text-slate-300">
              {isAr ? "نطاق العمل ومناطق التغطية" : isEn ? "Service Area" : "Einsatzgebiet & Streckennetz"}
            </span>
          </div>

          {/* Page Hero Header */}
          <header className="mb-14">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-amber-400 mb-4">
              <MapPin size={15} className="text-amber-400 shrink-0" />
              <span>
                {isAr 
                  ? "المقر المركزي: بوخوم (44803) • تصنيف مناطق الوصول" 
                  : "Standort: Am Kreuzacker 21, 44803 Bochum • Zonierte Eintreffzeiten"}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-5">
              {isAr ? "نطاق العمل وشبكة الطرق: بوخوم وحوض الرور وكامل NRW" : "Unser Einsatzgebiet & Streckennetz im Ruhrgebiet"}
            </h1>

            <div className="border-l-4 border-amber-500 pl-4 py-1 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-4 mb-8">
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {isAr
                  ? "من مقرنا المركزي في بوخوم، نربط كافة خدماتنا بتقسيم زمني دقيق وشفاف: وصول سريع في بوخوم والمدن المجاورة، تغطية شاملة لنطاق الرور الأوسع، وعمليات متخصصة في المناطق الجبلية وسحب المسافات الطويلة."
                  : "Vom zentralen Standort in Bochum erreichen wir über A40, A43 und A448 die Kernzone in kürzester Zeit. Transparente Zoneneinteilung nach garantierter Reaktionszeit, flexiblen Zielorten und fairen Festpreisen ab Startort."}
              </p>
            </div>

            {/* Quick Contact Bar - Emergency Red + Smooth Scroll to Bottom Inquiry */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+4915565500442"
                className="inline-flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-500 text-white font-black py-3.5 px-6 rounded-xl shadow-lg shadow-red-600/30 text-sm transition-all active:scale-95"
              >
                <Phone size={18} className="fill-white" />
                <span>24h Notruf: 0155 65500442</span>
              </a>

              <a
                href="#anfrage-unten"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3.5 px-6 rounded-xl shadow-md text-sm transition-all"
              >
                <span>{isAr ? "طلب الخدمة وإرسال الموقع ↓" : "Standort & Preisanfrage ↓"}</span>
              </a>
            </div>
          </header>

          <hr className="border-white/10 my-10" />

          {/* ZONE 1: KERNZONE & EXPRESS-NAHBEREICH */}
          <section className="mb-14">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-400 flex items-center justify-center font-bold text-lg">
                  1
                </span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    {isAr ? "النطاق السريع (Zone 1): بوخوم + المدن الملاصقة" : "Zone 1 • Express-Nahbereich: Bochum & Nachbarstädte"}
                  </h2>
                  <span className="text-xs text-amber-400 font-semibold">
                    {isAr ? "الوصول خلال: 15 إلى 30 دقيقة (أقصاها 40 دقيقة)" : "Garantierte Express-Eintreffzeit: Ø 15–30 Minuten (max. 40 Min.)"}
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-amber-400">
                {isAr ? "وصول فوري فائق السرعة" : "Express-Priorität"}
              </span>
            </div>

            {/* Comprehensive Semantic Text (Clean Editorial Layout, No Boxes Inside Boxes) */}
            <div className="space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              <p>
                {isAr
                  ? "في نطاقنا المباشر الذي يضم مدينة بوخوم بالكامل (كافة الأحياء الـ 10) والمدن الملاصقة مباشرة (دورتموند، إسن، هيرنه، وفيتن)، نضمن أسرع زمن استجابة على الإطلاق. في هذا النطاق نوفر تغطية كاملة لكافة خدماتنا: سحب الطوارئ 24 ساعة، المساعدة على الطريق (شحن البطارية، تبديل الإطارات)، سحب السيارات الكهربائية والهجينة، وسحب الأعطال الميكانيكية بعد الحوادث."
                  : "In unserem unmittelbaren Einzugsgebiet – der gesamten Stadt Bochum mit allen 10 Stadtbezirken sowie den direkt angrenzenden Großstädten Dortmund, Essen, Herne und Witten – gewährleisten wir die kürzesten Anfahrtswege im Ruhrgebiet. Hier steht Ihnen unser vollständiges Leistungsspektrum uneingeschränkt zur Verfügung: 24h Pkw- und SUV-Abschleppdienst, Pannenhilfe (Starthilfe, Radwechsel), E-Auto-Bergung sowie Fahrzeugüberführungen."}
              </p>

              <div className="border-l-2 border-white/20 pl-4 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-4 space-y-1">
                <h3 className="font-bold text-white text-sm flex items-center gap-2">
                  <Home size={16} className="text-amber-400" />
                  <span>{isAr ? "إلى أين ننقل سيارتك؟ نقل لوجهتك المختارة 100%" : "Wohin wird Ihr Fahrzeug gebracht? Freie Zielwahl:"}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  {isAr
                    ? "السيارة تنقل بالضبط إلى المكان الذي تريده: إما إلى أمام باب منزلك مباشرة، أو كراج شركتك، أو إلى أي ورشة صيانة أنت تختارها."
                    : "Ihr Fahrzeug wird exakt an Ihren Wunschort überstellt: Zur Kfz-Werkstatt Ihres Vertrauens, zum Vertragshändler, direkt vor Ihre eigene Haustür oder auf Ihr Firmengelände."}
                </p>
              </div>

              {/* Exclusive Workshop Advisory Highlight */}
              <div className="border-l-2 border-amber-400 pl-4 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-4 space-y-1">
                <h3 className="font-bold text-amber-400 text-sm flex items-center gap-2">
                  <Wrench size={16} />
                  <span>
                    {isAr 
                      ? "محتار أين تصلح سيارتك؟ نقدم لك توصية بأفضل الورشات المتخصصة الشريكة!" 
                      : "Sie wissen nicht, welche Werkstatt die richtige ist? Unser Partner-Netzwerk hilft!"}
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {isAr
                    ? "إذا تعطلت سيارتك ولم تكن تعرف أي ورشة هي الأنسب لعطلك، فنحن لا نتركك في حيرة! بحكم خبرتنا الميدانية الطويلة في بوخوم والرور، ننصحك ونربطك بسلسلة من الورشات المعتمدة وذات السمعة الممتازة (Kfz-Meisterbetriebe) المتخصصة بحسب نوع المشكلة (محركات، كهرباء وبرمجة، سمكرة ودهان، أو إطارات) لحل مشكلتك بأمانة وسرعة وبأقل تكلفة."
                    : "Falls Sie nach einer Panne unschlüssig sind, welche Werkstatt Ihr Problem am besten löst, beraten wir Sie ehrlich und neutral. Durch unsere langjährige Vernetzung im Ruhrgebiet empfehlen wir Ihnen geprüfte Partner- und Kfz-Meisterwerkstätten (spezialisiert auf Motoren, Getriebe, Kfz-Elektronik, Karosserie oder Reifen), die Ihr Fahrzeug verlässlich und fair instandsetzen."}
                </p>
              </div>
            </div>

            {/* Bochum Districts (Clean Typography Grid with Dividers, Zero Small Boxes) */}
            <div className="mb-8 pt-6 border-t border-white/10">
              <h3 className="text-xs font-bold uppercase tracking-wider mb-4 text-amber-400">
                {isAr ? "أحياء بوخوم الـ 10 (نطاق مركزي خالص):" : "Bochum Stadtgebiet & alle 10 Stadtbezirke:"}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-3 text-xs">
                {bochumDistricts.map((d) => (
                  <div key={d.name} className="pb-2 border-b border-white/5">
                    <strong className="text-white block font-semibold">{d.name}</strong>
                    <span className="text-[11px] text-slate-400 font-mono">{d.zip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Express Neighbors (Clean Divided Rows, Zero Small Boxes) */}
            <div className="pt-4">
              <h3 className="text-xs font-bold uppercase tracking-wider mb-3 text-amber-400">
                {isAr ? "المدن الملاصقة المباشرة (وصول سريع 15–25 دقيقة):" : "Direkte Nachbarstädte im Express-Radius (15–25 Min.):"}
              </h3>
              <div className="divide-y divide-white/10 border-t border-b border-white/10 text-xs sm:text-sm">
                {expressNeighbors.map((city) => (
                  <div key={city.name} className="py-3 flex items-center justify-between gap-4">
                    <div>
                      <strong className="text-white font-bold">{city.name}</strong>
                      <span className="text-slate-400 ml-2 text-xs">— {city.route}</span>
                    </div>
                    <span className="text-amber-400 font-bold shrink-0 text-xs">{city.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <hr className="border-white/10 my-10" />

          {/* ZONE 2: ERWEITERTE RUHRGEBIETS-ZONE */}
          <section className="mb-14">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-amber-400 flex items-center justify-center font-bold text-lg">
                  2
                </span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    {isAr ? "النطاق الأوسع (Zone 2): باقي مدن ومحيط حوض الرور" : "Zone 2 • Erweiterter Radius: Mittleres & Nördliches Ruhrgebiet"}
                  </h2>
                  <span className="text-xs text-slate-300 font-semibold">
                    {isAr ? "الوصول خلال: 40 إلى 60 دقيقة" : "Eintreffzeit: ca. 40–60 Minuten"}
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-slate-300">
                {isAr ? "تغطية كاملة" : "Vollabdeckung"}
              </span>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              {isAr
                ? "في المناطق والمدن الأبعد قليلاً عن المركز، نصل إليك خلال فترة تتراوح بين 40 و 60 دقيقة. خدماتنا هنا تشمل سحب الطوارئ بعد الأعطال والحوادث، ونقل المركبات إلى أقرب ورشة صيانة تختارها أو نقلها مباشرة إلى أمام منزلك. لا نتركك عالقاً في أي مكان، ويتم الاتفاق على السعر الثابت قبل انطلاق السطحة."
                : "Für Einsätze im erweiterten Radius (z. B. Recklinghausen, Gelsenkirchen, Gladbeck, Bottrop, Hattingen, Castrop-Rauxel, Mülheim oder Hagen) rücken wir verlässlich binnen 40 bis 60 Minuten aus. Das Fahrzeug wird wahlweise zur nächstgelegenen Wunschwerkstatt transportiert oder direkt vor Ihre Haustür überstellt. Auch hier gilt: Fester Kilometer- oder Pauschalpreis ohne verdeckte Kosten."}
            </p>

            <div className="divide-y divide-white/10 border-t border-b border-white/10 text-xs sm:text-sm">
              {extendedRuhrCities.map((city) => (
                <div key={city.name} className="py-3 flex items-center justify-between gap-4">
                  <div>
                    <strong className="text-white font-bold">{city.name}</strong>
                    <span className="text-slate-400 ml-2 text-xs">— {city.route}</span>
                  </div>
                  <span className="text-xs font-bold text-slate-200 shrink-0">
                    {city.time}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-white/10 my-10" />

          {/* ZONE 3: BERGREGIONEN & STEILLAGEN (SAUERLAND / LÜDENSCHEID / OLPE / A45) */}
          <section className="mb-14">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-400 flex items-center justify-center font-bold text-lg">
                  3
                </span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                    <Mountain size={20} className="text-amber-400" />
                    <span>
                      {isAr 
                        ? "المناطق الجبلية والمنحدرات الصعبة: زاورلاند، لودنشايد وأولبه (A45)" 
                        : "Zone 3 • Spezial-Bergung: A45 Sauerlandlinie, Lüdenscheid & Olpe"}
                    </span>
                  </h2>
                  <span className="text-xs text-amber-400 font-semibold">
                    {isAr ? "معدات إنقاذ مخصصة للمنحدرات والثلوج" : "Spezial-Equipment für Steillagen & winterliche Witterung"}
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-amber-400">
                {isAr ? "عتاد خاص 5 طن" : "5t Funkseilwinde"}
              </span>
            </div>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                {isAr
                  ? "يُعد محور طريق A45 (المعروف بـ Sauerlandlinie) والمناطق الجبلية المحيطة بها في لودنشايد (Lüdenscheid)، هاغن (Hagen)، وأولبه (Olpe) من أكثر الطرق صعوبة في ولاية NRW. المنحدرات القاسية التي تصل إلى 12%، والمنعطفات الحادة، والهبوط المفاجئ للثلوج في الشتاء تجعل عمليات الإنقاذ هناك صعبة للغاية وتتردد فيها معظم سيارات السحب التقليدية."
                  : "Die südlichen Höhenzüge von Nordrhein-Westfalen entlang der A45 Sauerlandlinie (Hagen ↔ Lüdenscheid ↔ Olpe) zeichnen sich durch anspruchsvolle Topografien mit Steigungen von bis zu 12 %, enge Kurvenradien und plötzliche Wintereinbrüche aus. Bleibt ein Fahrzeug auf einer Hangstrecke liegen, reicht herkömmliches Standard-Gerät oft nicht aus."}
              </p>
              
              <div className="border-l-2 border-amber-400 pl-4 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-4 space-y-1">
                <strong className="text-amber-400 block font-bold text-sm sm:text-base">
                  {isAr ? "مبدأ Abschleppdienst Direkt: لا نترك أحداً عالقاً في أصعب الظروف!" : "Abschleppdienst Direkt lässt Sie nicht im Stich:"}
                </strong>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {isAr
                    ? "بفضل ونش السحب اللاسلكي فائق القوة بحمولة 5 أطنان، والمنحدرات الخاصة المسطحة، وأحزمة التثبيت المعتمدة وفق معيار VDI 2700، نتمكن من سحب وتثبيت المركبات على المنحدرات الجبلية بسلاسة تامة ودون أي ضرر لنظام الدفع أو الصدمات السفلية للسيارة."
                    : "Mit unserer durchzugsstarken 5-Tonnen-Funkseilwinde, griffigen Auffahrkeilen und zertifizierten 4-Punkt-Radspanngurten nach VDI 2700 sichern und verladen wir verunfallte oder liegengebliebene Fahrzeuge auch an extremen Hanglagen vollkommen erschütterungsfrei und materialschonend."}
                </p>
              </div>
            </div>
          </section>

          <hr className="border-white/10 my-10" />

          {/* ZONE 4: NRW & BUNDESWEITE LANGSTRECKE */}
          <section className="mb-14">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-amber-400 flex items-center justify-center font-bold text-lg">
                  4
                </span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                    <Truck size={20} className="text-amber-400" />
                    <span>
                      {isAr ? "النقل الفردي الطويل ومسارات السفر في عموم ألمانيا" : "Zone 4 • NRW-weit & Bundesweite Langstrecken-Überführung"}
                    </span>
                  </h2>
                  <span className="text-xs text-slate-400">
                    {isAr ? "نقل حصري مباشر 100% بدون وسيط وبسعر ثابت" : "100% Einzelfahrten auf eigenem Plateau ohne Beiladung"}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              {isAr
                ? "هل اشتريت سيارة جديدة من مدينة أخرى بدون لوحات؟ أو تحتاج لنقل سيارة كلاسيكية إلى ورشة متخصصة في كولن أو دوسلدورف أو فرانكفورت؟ نوفر رحلات فردية مباشرة على السطحة من الباب إلى الباب مع ربط رباعي مانع للخدوش."
                : "Ob Kauf eines Neuwagens ohne Zulassung, Transfer eines Oldtimers zu einem Spezialisten nach Köln, Düsseldorf oder Frankfurt: Wir führen Überführungsfahrten termintreu als reine Einzelfahrt durch – kein Umladen, kein Risiko, volle Transparenz."}
            </p>
          </section>

          <hr className="border-white/10 my-10" />

          {/* INTERNAL SILO HUBS: OPEN EDITORIAL LIST (No Card-Inside-Card) */}
          <section className="mb-14">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
                  {isAr ? "خدماتنا المتخصصة لكل منطقة" : isEn ? "Specialized Services for the Region" : "Spezifische Leistungen nach Einsatzgebiet"}
                </span>
                <h2 className="text-lg sm:text-2xl font-black text-white">
                  {isAr ? "ما هي الخدمة التي تحتاجها في موقعك الحالي؟" : isEn ? "Which service do you need at your location?" : "Passende Direktleistungen für Ihren aktuellen Standort:"}
                </h2>
              </div>
              <Link
                href="/leistungen"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
              >
                <span>{isAr ? "جميع الخدمات" : "Alle Leistungen"}</span>
                <ArrowRight size={14} className="rtl:rotate-180" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-b border-white/10 py-6">
              <Link
                href="/leistungen/abschleppdienst-pkw"
                className="group space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <Wrench size={15} className="text-amber-400" />
                  <strong className="text-sm text-white group-hover:text-amber-400 transition-colors">
                    {isAr ? "سحب سيارات الركاب (PKW)" : "PKW Abschleppdienst"}
                  </strong>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {isAr ? "وصول سريع خلال 20–40 دقيقة في بوخوم ومحيطها." : "20–40 Min. Express vor Ort in Bochum & Revier."}
                </p>
              </Link>

              <Link
                href="/starthilfe-bochum"
                className="group space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <Clock size={15} className="text-amber-400" />
                  <strong className="text-sm text-white group-hover:text-amber-400 transition-colors">
                    {isAr ? "خدمة المساعدة في التشغيل 24h" : "Vor-Ort Starthilfe 24h"}
                  </strong>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {isAr ? "مع جهاز NOCO Boost الاحترافي بدون تأخير." : "Mit 5250A Profi-Booster bei leerer Batterie."}
                </p>
              </Link>

              <Link
                href="/leistungen/fahrzeugueberfuehrung"
                className="group space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <Route size={15} className="text-amber-400" />
                  <strong className="text-sm text-white group-hover:text-amber-400 transition-colors">
                    {isAr ? "نقل من A إلى B" : "Überführung von A nach B"}
                  </strong>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {isAr ? "نقل سيارات فردي وموثوق بدون وسيط." : "Sicherer Einzeltransport auf eigenem Plateau."}
                </p>
              </Link>

              <Link
                href="/leistungen/elektroauto-automatik-abschleppen"
                className="group space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck size={15} className="text-amber-400" />
                  <strong className="text-sm text-white group-hover:text-amber-400 transition-colors">
                    {isAr ? "سيارات كهربائية وأوتوماتيك" : "E-Auto & Automatik"}
                  </strong>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {isAr ? "سحب آمن 100% يحمي القير والبطارية." : "100% akkuschonende Plateau-Verladung."}
                </p>
              </Link>
            </div>
          </section>

          {/* AUTOBAHN CONNECTION OVERVIEW (Clean Divided Rows, Zero Small Boxes) */}
          <section className="mb-14">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <Route size={22} className="text-amber-400" />
              <span>{isAr ? "شبكة الطرق السريعة المباشرة من بوخوم" : "Direkte Autobahnanbindung ab Standort Bochum"}</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              {isAr ? "إذا تعطلت على الأوتوبان، يكفي أن تذكر لنا رقم المخرج القريب:" : "Panne auf der Autobahn? Nennen Sie uns einfach die nächste Ausfahrt oder Anschlussstelle:"}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 divide-y divide-white/10 border-t border-b border-white/10">
              {autobahns.map((ab) => (
                <div key={ab.code} className="py-3.5 flex items-start gap-3">
                  <span className="bg-[#003399] text-white text-xs font-black px-2.5 py-0.5 rounded tracking-wide border border-blue-300/30 flex-shrink-0 mt-0.5">
                    {ab.code}
                  </span>
                  <div>
                    <strong className="text-white text-xs sm:text-sm block">{ab.name}</strong>
                    <span className="text-xs text-slate-400 leading-relaxed block mt-0.5">{ab.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Destination Inquiry & Contact Section */}
          <section id="anfrage-unten" className="mt-14 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl font-black text-white">
                {isAr ? "هل تحتاج إلى المساعدة في موقعك الآن؟" : "Soforthilfe oder Streckenkalkulation gewünscht?"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                {isAr ? "اتصل بالطوارئ مباشرة أو أرسل موقعك لطلب السحب أو حساب التكلفة." : "Rufen Sie direkt an, senden Sie Ihren Standort oder kalkulieren Sie den Festpreis im Rechner."}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:+4915565500442"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-black py-3.5 px-6 rounded-xl shadow-lg shadow-red-600/25 transition-all text-xs sm:text-sm"
              >
                <Phone size={16} className="fill-white" />
                <span>24h Notruf: 0155 65500442</span>
              </a>

              <a
                href="https://wa.me/4915565500442?text=Hallo%20Abschleppdienst%20Direkt%2C%20ich%20habe%20eine%20Standortanfrage%20f%C3%BCr%20einen%20Transport"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white border border-white/15 hover:border-amber-400/40 font-bold py-3.5 px-5 rounded-xl transition-all text-xs sm:text-sm"
              >
                <MessageCircle size={16} className="text-amber-400" />
                <span>{isAr ? "إرسال الموقع عبر واتساب" : "Standort per WhatsApp"}</span>
              </a>

              <Link
                href="/rechner"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3.5 px-6 rounded-xl transition-all text-xs sm:text-sm"
              >
                <span>{isAr ? "حاسبة التكلفة" : "Zum Kostenrechner"}</span>
                <ArrowRight size={15} className="rtl:rotate-180" />
              </Link>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
