import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { Truck, ShieldCheck, Award, Phone, MessageCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import { localizedAlternates } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Über uns & Unser Team",
    description: "Lernen Sie unser engagiertes Team von Abschleppdienst Direkt in Bochum kennen: 10 Jahre Straßenerfahrung, modernste Plateau-Technik bis 3,5t, 100% Einzelfahrten und transparente Festpreise im Ruhrgebiet & bundesweit.",
    alternates: localizedAlternates(locale, '/ueber-uns'),
  };
}

export default async function UeberUnsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isAr = locale === 'ar';
  const isEn = locale === 'en';

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: isAr ? "الرئيسية" : isEn ? "Home" : "Startseite", url: `https://abschleppdienst-direkt.de/${locale}` },
          { name: isAr ? "من نحن" : isEn ? "About Us" : "Über uns", url: `https://abschleppdienst-direkt.de/${locale}/ueber-uns` },
        ]}
      />

      <main className="min-h-screen bg-slate-950 text-white py-12 sm:py-20 relative overflow-hidden">
        {/* Ambient lighting */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-600/10 blur-[130px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 blur-[140px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          
          {/* Breadcrumb back link */}
          <div className="mb-8 flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-amber-400 transition-colors flex items-center gap-1 font-semibold">
              <ArrowLeft size={14} className="rtl:rotate-180" />
              <span>{isAr ? "العودة للرئيسية" : isEn ? "Back to Homepage" : "Zurück zur Startseite"}</span>
            </Link>
            <span>/</span>
            <span className="text-slate-300">{isAr ? "من نحن • نبذة عن الشركة" : isEn ? "About Us • Company Profile" : "Über uns • Unternehmen"}</span>
          </div>

          {/* ======================================================== */}
          {/* TIER 1: TOP ROW - PHOTO ON LEFT & WELCOME ON RIGHT       */}
          {/* ======================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14 sm:mb-18">
            
            {/* Left: Official Brand Logo & Card - Clean Single Layer (No nested boxes) */}
            <div className="lg:col-span-6 relative">
              <div className="relative group">
                <img
                  src="/branding/visitenkarte_vorderseite.png"
                  alt="Abschleppdienst Direkt - Offizielle Visitenkarte Vorderseite"
                  loading="lazy"
                  width={1050}
                  height={600}
                  className="w-full h-auto rounded-2xl object-contain border border-white/15 shadow-2xl group-hover:scale-[1.01] transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right: Welcome & Narrative */}
            <div className="lg:col-span-6 space-y-4">
              
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-amber-400 mb-3">
                  <ShieldCheck size={15} className="text-amber-400 shrink-0" />
                  <span>{isAr ? "نبذة عن المؤسسة" : isEn ? "Company Profile" : "Über unser Unternehmen"}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                  {isAr ? "أهلاً وسهلاً بكم" : isEn ? "Welcome to Our Company" : "Herzlich Willkommen"}
                </h1>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                <p>
                  {isAr
                    ? "تعتبر مؤسسة Abschleppdienst Direkt في بوخوم، بفريقها المتمرس، شريكك الموثوق للمساعدة السريعة على الطريق (Pannenhilfe) في بوخوم، ونقل وشحن السيارات الموثوق من النقطة A إلى B في عموم ألمانيا."
                    : isEn
                    ? "Abschleppdienst Direkt, led by our experienced team in Bochum, is your reliable partner for prompt roadside assistance in Bochum and scheduled vehicle transfers from A to B nationwide across Germany."
                    : "Abschleppdienst Direkt, geführt von unserem erfahrenen Team aus Bochum, ist Ihr zuverlässiger Partner für zügige Pannenhilfe in Bochum sowie sorgfältige Fahrzeugüberführungen von A nach B im gesamten Bundesgebiet."}
                </p>
                <p>
                  {isAr
                    ? "منذ أكثر من 10 سنوات، نقوم بنقل وسحب وتأمين كافة أنواع المركبات في بوخوم، ولاية شمال الراين وستفاليا وعموم ألمانيا – دائماً بأعلى درجات العناية والمعدات الحديثة والالتزام الشخصي."
                    : isEn
                    ? "For over 10 years, we have been transporting, securing, and transferring vehicles of all types in Bochum, North Rhine-Westphalia, and across Germany – always with maximum care and personal dedication."
                    : "Seit über 10 Jahren transportieren, sichern und überführen wir Fahrzeuge jeder Art in Bochum, Nordrhein-Westfalen und ganz Deutschland – stets mit höchster Sorgfalt und persönlichem Einsatz."}
                </p>
                <p>
                  {isAr
                    ? "تتركز خبرتنا الميدانية في المساعدة العاجلة على الطريق في بوخوم، ونقل وشحن السيارات المجدول من النقطة A إلى B في عموم ألمانيا، وسحب الأعطال والحوادث للورشات بأمان تام."
                    : isEn
                    ? "Our core expertise lies in fast roadside assistance & recovery in Bochum, scheduled vehicle transfers from point A to B nationwide, and professional on-site battery jump-starts."
                    : "Die Expertise unseres Unternehmens liegt im schnellen Abschleppen & Pannenhilfe in Bochum, der termingerechten Fahrzeugüberführung von A nach B bundesweit sowie der professionellen Starthilfe vor Ort."}
                </p>
                <p>
                  {isAr
                    ? "شاحنتنا مزودة بسطحة متطورة بزاوية صعود منخفضة، وونش سحب كهربائي قوي، وأنظمة تثبيت معتمدة وفق معايير VDI 2700 الألمانية، لنقل كافة أنواع المركبات حتى 3.5 طن برفق ودون أي خدوش."
                    : isEn
                    ? "Our transport vehicle is equipped with a modern flatbed featuring a flat approach angle, a high-capacity electric winch, and certified VDI 2700 load securing systems to carry all vehicle types up to 3.5 tonnes safely."
                    : "Unser Einsatzfahrzeug verfügt über ein modernes Spezial-Plateau mit flachem Auffahrwinkel, eine leistungsstarke Seilwinde und VDI-2700-zertifizierte Sicherungssysteme, um Fahrzeuge aller Art bis 3,5 Tonnen behutsam und ohne Schäden zu transportieren."}
                </p>
              </div>

              {/* Action Buttons - Emergency Red Call + Smooth Anchor to Inquiry */}
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="tel:+4915565500442"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-md shadow-red-600/20 transition-all active:scale-95"
                >
                  <Phone size={14} />
                  <span>0155 65500442</span>
                </a>

                <a
                  href="#kontakt-unten"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-amber-500 hover:text-slate-950 text-white border border-white/15 hover:border-amber-400 font-bold text-xs transition-all"
                >
                  <span>{isAr ? "تواصل وطلب خدمة ↓" : isEn ? "Contact & Inquiry ↓" : "Kontakt & Anfrage ↓"}</span>
                </a>
              </div>

            </div>

          </div>

          {/* ======================================================== */}
          {/* OFFICIAL BUSINESS CARD & DIGITAL CONTACT DOWNLOAD        */}
          {/* (VORDERSEITE & RÜCKSEITE - BEIDE SEITEN)                 */}
          {/* ======================================================== */}
          <div id="visitenkarte" className="my-12 pt-10 border-t border-white/10 space-y-8">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-amber-400 mb-2">
                  <ShieldCheck size={15} className="text-amber-400 shrink-0" />
                  <span>{isAr ? "بطاقة العمل الرسمية (الوجه والقفى)" : isEn ? "Official Business Card (Front & Back)" : "Offizielle Visitenkarte (Vorder- & Rückseite)"}</span>
                </div>
                <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight">
                  {isAr ? "بطاقة Abschleppdienst Direkt الرسمية بكامل الوجهين" : isEn ? "Abschleppdienst Direkt Official Dual-Sided Business Card" : "Abschleppdienst Direkt – Visitenkarte (Beide Seiten)"}
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                  {isAr
                    ? "الوجه الأمامي يحتوي على أرقام الطوارئ المباشرة، والوجه الخلفي يوضح قائمة الخدمات الكاملة."
                    : isEn
                    ? "Front side features direct emergency hotline and contact, while the reverse side details the full service overview."
                    : "Die Vorderseite enthält den direkten Notruf- und Fahrerkontakt, die Rückseite bietet die vollständige Leistungsübersicht."}
                </p>
              </div>

              {/* vCard Action - Unified Signal Gold */}
              <a
                href="/abschleppdienst-direkt-kontakt.vcf"
                download="Abschleppdienst-Direkt-Kontakt.vcf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shadow-lg shadow-amber-500/20 transition-all text-center whitespace-nowrap cursor-pointer shrink-0"
              >
                <Phone size={14} />
                <span>{isAr ? "حفظ كجهة اتصال (vCard)" : isEn ? "Save vCard Contact" : "Als vCard Kontakt speichern"}</span>
              </a>
            </div>

            {/* Side-by-Side Dual Cards Showcase (Vorderseite & Rückseite) - Direct single layer */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Card 1: Vorderseite (الوجه) */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    <span>{isAr ? "الوجه الأمامي (بيانات الاتصال)" : isEn ? "Front Side (Contact & 24h Hotline)" : "Vorderseite (Kontakt & Notruf)"}</span>
                  </span>
                  <a
                    href="/branding/visitenkarte_vorderseite.png"
                    download="Abschleppdienst-Direkt-Visitenkarte-Vorderseite.png"
                    className="text-[11px] text-slate-400 hover:text-amber-400 underline font-medium transition-colors"
                  >
                    {isAr ? "تحميل الوجه (PNG)" : "Download (PNG)"}
                  </a>
                </div>

                <img
                  src="/branding/visitenkarte_vorderseite.png"
                  alt="Abschleppdienst Direkt Visitenkarte Vorderseite"
                  width={1050}
                  height={600}
                  className="w-full h-auto rounded-2xl object-contain border border-white/15 shadow-2xl hover:scale-[1.01] transition-transform duration-500"
                />

                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {isAr 
                    ? "شعار Abschleppdienst Direkt الرسمي • Schnell. Zuverlässig. Preiswert. • abschleppdienst-direkt.de • +49 155 65500442" 
                    : "Abschleppdienst Direkt • Schnell. Zuverlässig. Preiswert. • abschleppdienst-direkt.de • Tel: +49 155 65500442"}
                </p>
              </div>

              {/* Card 2: Rückseite (القفى) */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    <span>{isAr ? "الوجه الخلفي (قائمة الخدمات)" : isEn ? "Reverse Side (Services Overview)" : "Rückseite (Unsere Leistungen)"}</span>
                  </span>
                  <a
                    href="/branding/visitenkarte_rueckseite.png"
                    download="Abschleppdienst-Direkt-Visitenkarte-Rueckseite.png"
                    className="text-[11px] text-slate-400 hover:text-amber-400 underline font-medium transition-colors"
                  >
                    {isAr ? "تحميل القفى (PNG)" : "Download (PNG)"}
                  </a>
                </div>

                <img
                  src="/branding/visitenkarte_rueckseite.png"
                  alt="Abschleppdienst Direkt Visitenkarte Rückseite - Unsere Leistungen"
                  width={1050}
                  height={600}
                  className="w-full h-auto rounded-2xl object-contain border border-white/15 shadow-2xl hover:scale-[1.01] transition-transform duration-500"
                />

                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {isAr 
                    ? "تفصيل الخدمات الـ 6 المعتمدة: سحب سيارات، SUV، باصات حتى 7م، استارتهيلفه، نقل سيارات، ونقل بضائع." 
                    : "Abschleppdienst PKW & SUV • Busse & Transporter bis 7m • Starthilfe • Überführung • Warentransport"}
                </p>
              </div>

            </div>

            {/* Quick Action Download Row */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="text-slate-400">
                {isAr
                  ? "كافة الملفات بدقة فائقة وجاهزة للطباعة أو الحفظ على الهاتف الذكي."
                  : "Originalauflösung für Druck oder digitales Speichern auf dem Smartphone."}
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="/images/branding/visitenkarte-duo.png"
                  download="Abschleppdienst-Direkt-Visitenkarte-Duo.png"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-white/15 font-bold transition-colors"
                >
                  <ShieldCheck size={13} className="text-amber-400" />
                  <span>{isAr ? "تحميل الوجهين معاً (Duo)" : "Beide Seiten als Duo (PNG)"}</span>
                </a>
              </div>
            </div>

          </div>

          {/* ======================================================== */}
          {/* TIER 2: BOTTOM FULL-WIDTH COMFORTABLE READING SECTION    */}
          {/* ======================================================== */}
          <div className="pt-10 border-t border-white/10 space-y-8">
            
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {isAr
                ? "Abschleppdienst Direkt لكل الحالات – المزيد عنا"
                : isEn
                ? "Abschleppdienst Direkt for Every Situation – More About Us"
                : "Abschleppdienst Direkt für jeden Fall – mehr über uns"}
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              <p>
                {isAr
                  ? "فريقنا الميداني في بوخوم هو وجهتك الأولى عندما يتعلق الأمر بخدمات السحب، المساعدة العاجلة، ونقل المركبات الدقيق. نحن نقف بجانبك بخبرة ميدانية تفوق 10 سنوات وأحدث المعدات المتطورة. معنا، لن تتحدث مع مركز اتصالات خارجي أو وسيط مجهول، بل تتحدث مباشرة مع سائقنا الميداني آدم وفريق العمل الذي يقدم لك المشورة الصادقة والدعم المستمر."
                  : isEn
                  ? "Our dedicated team in Bochum is your premier contact for professional towing services, rapid roadside assistance, and careful vehicle transfers. We stand by you with high competence, 10 years of road experience, and state-of-the-art equipment. You speak directly with our driver Adam and our team."
                  : "Unser engagiertes Team in Bochum ist Ihre erste Anlaufstelle, wenn es um professionelle Abschleppdienste, zügige Pannenhilfe und sorgfältige Fahrzeugtransporte geht. Wir stehen Ihnen mit hoher Fachkompetenz, 10 Jahren praktischer Straßenerfahrung und modernstem Equipment zur Seite. Bei uns landen Sie in keinem anonymen Callcenter: Sie sprechen direkt mit unserem Fahrer Adam und unserem Team, das Sie ehrlich berät und Sie auch nach Abschluss der Bergungsarbeiten verlässlich unterstützt."}
              </p>
              <p>
                {isAr
                  ? "معنا، لديك شريك يعمل بأمان ودقة واحترافية مطلقة. كما نضع الشفافية في مقدمة أولوياتنا: نحدد أسعاراً واضحة وثابتة دون أي رسوم مخفية أو مفاجآت، ونوثق كل خطوة في عملية التحميل والتثبيت. العمل القائم على الثقة المتبادلة مع عملائنا هو الأساس. وإذا كانت لديك أي أسئلة، يمكنك دائماً التواصل مباشرة مع آدم وفريق العمل لدينا."
                  : isEn
                  ? "With us, you have a partner working safely, carefully, and above all reliably. Transparency is paramount: we offer fair, fixed rates with no hidden fees and document every step properly. A trusting partnership on eye level is our foundation. Should you have any questions, you can always reach Adam and our team personally."
                  : "Mit uns haben Sie einen Partner an der Seite, der sicher, sorgfältig und vor allem zuverlässig arbeitet. Auch Transparenz wird bei uns großgeschrieben: Wir vereinbaren faire Festpreise ohne versteckte Gebühren und dokumentieren jeden Schritt der Verladung ordnungsgemäß. Eine vertrauensvolle Zusammenarbeit mit unseren Kunden ist für uns das A und O. Sollten Sie Fragen haben, können Sie sich jederzeit persönlich an Adam und unser Team wenden."}
              </p>
            </div>

            {/* Core Values / Pillar Highlights - Clean Editorial Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-6 border-t border-white/10">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <Truck size={18} />
                  <h3 className="text-white font-black">100% Einzelfahrten</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Ihr Fahrzeug wird einzeln transportiert – ohne riskantes Umladen oder zeitraubende Sammeltouren.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <ShieldCheck size={18} />
                  <h3 className="text-white font-black">VDI 2700 Sicherheit</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Zertifizierte 4-Punkt-Radverzurrung mit weichen Spezial-Spanngurten zum Schutz edler Felgen.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <Award size={18} />
                  <h3 className="text-white font-black">10 Jahre Praxiserfahrung</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Unser erfahrener Fahrer Adam steuert das Fahrzeug persönlich und garantiert höchste Sorgfalt.
                </p>
              </div>
            </div>

            {/* Final Inquiry & Contact Strip at Bottom of Page */}
            <div id="kontakt-unten" className="scroll-mt-28 p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-8">
              <div>
                <span className="text-[11px] font-black text-amber-400 uppercase tracking-widest block mb-1">
                  {isAr ? "تواصل مباشر مع السائق" : "Direkter Kontakt & Dispo"}
                </span>
                <strong className="block text-white text-base sm:text-lg font-black mb-1">
                  {isAr ? "هل تخطط لنقل سيارة أو تحتاج مساعدة عاجلة؟" : "Möchten Sie einen Transport planen oder haben Sie eine Notfall-Panne?"}
                </strong>
                <span className="text-xs sm:text-sm text-slate-300">
                  {isAr ? "اتصل بسائقنا آدم أو فريقنا مباشرة للطوارئ أو أرسل تفاصيل النقل عبر واتساب." : "Rufen Sie unser Team oder Fahrer Adam direkt an oder senden Sie Ihre Anfrage ruhig per WhatsApp."}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0 w-full md:w-auto">
                <a
                  href="tel:+4915565500442"
                  className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black text-xs sm:text-sm shadow-lg shadow-red-600/25 transition-all"
                >
                  <Phone size={15} />
                  <span>0155 65500442</span>
                </a>
                <a
                  href={`https://wa.me/4915565500442?text=${encodeURIComponent("Hallo Abschleppdienst Direkt, ich habe eine Anfrage:")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-white/15 hover:border-amber-400/40 font-bold text-xs sm:text-sm transition-all"
                >
                  <MessageCircle size={15} className="text-amber-400" />
                  <span>WhatsApp Anfrage</span>
                </a>
                <Link
                  href="/rechner"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl bg-white/5 hover:bg-amber-500 hover:text-slate-950 text-slate-200 border border-white/10 font-bold text-xs sm:text-sm transition-all"
                >
                  <span>Preisrechner</span>
                  <ArrowRight size={14} className="rtl:rotate-180" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </main>
    </>
  );
}
