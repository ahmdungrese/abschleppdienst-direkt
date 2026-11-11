"use client";

import { Star, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';
import { useLocale } from 'next-intl';

interface Review {
  name: string;
  location: { de: string; ar: string; en: string };
  date: { de: string; ar: string; en: string };
  service: { de: string; ar: string; en: string };
  rating: number;
  text: { de: string; ar: string; en: string };
  highlight: { de: string; ar: string; en: string };
}

export default function CustomerReviews() {
  const locale = useLocale();
  const isAr = locale === 'ar';
  const isEn = locale === 'en';
  const langKey = isAr ? 'ar' : isEn ? 'en' : 'de';

  const reviews: Review[] = [
    {
      name: "Markus Becker",
      location: {
        de: "Bochum-Wattenscheid (A40)",
        ar: "بوخوم - فاتنشايد (A40)",
        en: "Bochum-Wattenscheid (A40)"
      },
      date: {
        de: "Vor 2 Wochen",
        ar: "منذ أسبوعين",
        en: "2 weeks ago"
      },
      service: {
        de: "PKW-Abschleppdienst bei Motorschaden",
        ar: "سحب سيارة ركاب إثر عطل مفاجئ بالمحرك",
        en: "Car towing after engine failure"
      },
      rating: 5,
      text: {
        de: "Mit rauchendem Motor auf der A40 kurz vor Bochum liegen geblieben. Nach dem Anruf war Herr Al Dalati in genau 25 Minuten da. Extrem ruhiger, kompetenter Profi! Mein Wagen wurde millimetergenau ohne Schrammen auf das flache Plateau gezogen und direkt zu meiner Werkstatt gebracht. Absolut fairer Festpreis ohne Überraschungen.",
        ar: "تعطلت سيارتي مع تصاعد الدخان من المحرك على الطريق A40 قرب بوخوم. وصل السيد وسيم الدالاتي خلال 25 دقيقة بالضبط. هدوء واحترافية عالية، وتم سحب السيارة برفق تام على السطحة ونقلها مباشرة إلى ورشتي بسعر ثابت وشفاف.",
        en: "Broken down with engine smoke on the A40 near Bochum. Mr. Al Dalati arrived in exactly 25 minutes. Extremely calm, competent professional! My car was loaded millimeter-precise onto the flatbed and taken directly to my mechanic."
      },
      highlight: {
        de: "In 25 Min. auf der A40 vor Ort",
        ar: "وصل خلال 25 دقيقة على A40",
        en: "On site on A40 in 25 min"
      }
    },
    {
      name: "Timo S.",
      location: {
        de: "Dortmund ➔ Essen",
        ar: "دورتموند ➔ إيسن",
        en: "Dortmund ➔ Essen"
      },
      date: {
        de: "Vor 1 Monat",
        ar: "منذ شهر",
        en: "1 month ago"
      },
      service: {
        de: "Fahrzeugüberführung (Automatik-PKW)",
        ar: "نقل سيارة أوتوماتيك من A إلى B",
        en: "Vehicle transfer (Automatic car)"
      },
      rating: 5,
      text: {
        de: "Habe einen abgemeldeten BMW mit Automatikgetriebe gekauft und brauchte eine zuverlässige Einzelfahrt nach Essen. Super pünktlich, 4-Punkt-Radverzurrung nach VDI 2700, Felgen 100% geschützt. Kein Umladen wie bei Großspeditionen. Kann ich uneingeschränkt weiterempfehlen!",
        ar: "اشتريت سيارة بي إم دبليو بدون لوحات بقير أوتوماتيك واحتجت نقلها إلى إيسن. التزام فائق بالموعد وربط رباعي للعجلات وفق معايير VDI 2700 دون أي خدوش للجنوط. رحلة فردية مباشرة بدون تبديل شاحنات.",
        en: "Bought an unregistered automatic BMW and needed a reliable direct transport to Essen. Super punctual, 4-point wheel tie-down according to VDI 2700, rims 100% protected. Highly recommended!"
      },
      highlight: {
        de: "100% schonende VDI-2700 Verzurrung",
        ar: "تثبيت معتمد 100% VDI 2700",
        en: "100% gentle VDI 2700 securing"
      }
    },
    {
      name: "Sabine Wagner",
      location: {
        de: "Bochum-Querenburg (RUB)",
        ar: "بوخوم - جامعة الرور (RUB)",
        en: "Bochum-Querenburg (RUB)"
      },
      date: {
        de: "Vor 3 Wochen",
        ar: "منذ 3 أسابيع",
        en: "3 weeks ago"
      },
      service: {
        de: "Vor-Ort Starthilfe (NOCO Boost)",
        ar: "تشغيل بطارية فوري (NOCO Boost)",
        en: "Roadside jumpstart (NOCO Boost)"
      },
      rating: 5,
      text: {
        de: "Morgens bei Frost am Uni-Parkplatz ging gar nichts mehr, Batterie komplett tot. Herr Al Dalati kam direkt mit dem großen NOCO Booster vorbei. Einmal angeschlossen und mein Diesel schnurrte wieder. Schneller und freundlicher als jeder Großclub!",
        ar: "في الصباح الباكر بمواقف الجامعة فرغت البطارية تماماً بسبب الصقيع. حضر السيد وسيم بجهاز NOCO Boost الاحترافي، وبمجرد توصيله اشتغل المحرك فوراً. سرعة وتواضع يفوقان أي خدمة أخرى!",
        en: "Dead battery in freezing morning weather at the university parking lot. Mr. Al Dalati arrived with the heavy-duty NOCO booster. Connected once and my diesel started immediately. Faster and friendlier than big auto clubs!"
      },
      highlight: {
        de: "Schnelle Hilfe am Uni-Parkplatz",
        ar: "مساعدة سريعة في مواقف الجامعة",
        en: "Fast help at university campus"
      }
    },
    {
      name: "Klaus M.",
      location: {
        de: "Herne / Bochum-Nord",
        ar: "هيرنه / شمال بوخوم",
        en: "Herne / Bochum-North"
      },
      date: {
        de: "Vor 1 Monat",
        ar: "منذ شهر",
        en: "1 month ago"
      },
      service: {
        de: "Transport zur Wunschwerkstatt",
        ar: "سحب السيارة لورشة العميل المفضلة",
        en: "Towing to preferred workshop"
      },
      rating: 5,
      text: {
        de: "Reifenpanne und festsitzende Schrauben mitten in der Nacht. Der Kontakt per Telefon war direkt mit dem Chef selbst – kein langes Callcenter! Innerhalb von 35 Minuten war mein Auto aufgeladen. Sehr menschlich, unkompliziert und ehrlich.",
        ar: "تعرضت لبنشر منتصف الليل ومسامير العجلة كانت عالقة. الاتصال كان مباشراً مع وسيم نفسه في الشاحنة بدون انتظار في الكول سنتر. خلال 35 دقيقة كانت السيارة محملة بأمان. تعامل إنساني وصادق.",
        en: "Flat tire and stuck bolts in the middle of the night. Direct phone call with the owner himself – no call center delay! My car was loaded safely within 35 minutes. Very personal and honest service."
      },
      highlight: {
        de: "Direktkontakt ohne Callcenter",
        ar: "اتصال مباشر بدون كول سنتر",
        en: "Direct contact, no call center"
      }
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-slate-950 text-white relative border-t border-white/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Section Header with Google Rating Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck size={14} />
              <span>
                {isAr ? "تجارب وتقييمات العملاء المعتمدة" : isEn ? "Verified Customer Reviews" : "Verifizierte Kundenerfahrungen"}
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              {isAr ? "ماذا يقول عملاؤنا عنا؟" : isEn ? "What Our Customers Say" : "Was Kunden über uns sagen"}
            </h2>
            <p className="mt-2 text-slate-400 text-xs sm:text-sm max-w-xl">
              {isAr
                ? "حالات إنقاذ حقيقية من شوارع بوخوم، حوض الرور، وطرق السفر السريعة A40 و A43 – التزام، دقة، وبدون وسيط."
                : isEn
                ? "Real rescue and towing operations from Bochum, the Ruhr area, and highways A40/A43 – transparent and owner-managed."
                : "Echte Einsätze aus Bochum, dem Ruhrgebiet und auf den NRW-Autobahnen – transparent, pünktlich und inhabergeführt."}
            </p>
          </div>

          {/* Google 5.0 Rating Summary Card */}
          <div className="flex items-center gap-4 bg-slate-900/90 border border-white/10 p-4 rounded-2xl shrink-0 backdrop-blur-sm shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center font-black text-slate-900 text-xl shadow-inner">
              G
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-lg font-black text-white">5.0</span>
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="fill-amber-400" />
                  ))}
                </div>
              </div>
              <span className="text-[11px] text-slate-400 block font-medium">
                {isAr ? "ممتاز 5.0 • تقييمات خرائط جوجل" : isEn ? "Excellent • Google Maps Reviews" : "Hervorragend • Google Rezensionen"}
              </span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-3xl bg-slate-900/60 border border-white/10 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between shadow-lg relative"
            >
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                      {rev.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-400">
                      <span className="flex items-center gap-1 text-slate-300">
                        <MapPin size={11} className="text-amber-400" />
                        <span>{rev.location[langKey]}</span>
                      </span>
                      <span>•</span>
                      <span>{rev.date[langKey]}</span>
                    </div>
                  </div>

                  {/* 5 Stars */}
                  <div className="flex items-center text-amber-400 shrink-0">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={13} className="fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Highlight Badge */}
                <div className="inline-block px-2.5 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[10px] font-bold uppercase tracking-wide mb-3">
                  {rev.highlight[langKey]}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-4">
                  "{rev.text[langKey]}"
                </p>
              </div>

              {/* Verified Tag */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span className="text-slate-400 font-medium truncate max-w-[240px]">
                  {rev.service[langKey]}
                </span>
                <span className="flex items-center gap-1 text-emerald-400 font-bold shrink-0">
                  <CheckCircle2 size={13} />
                  <span>{isAr ? "خدمة ميدانية موثقة" : isEn ? "Verified Operation" : "Verifizierter Einsatz"}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Notice */}
        <div className="mt-8 text-center text-xs text-slate-400 flex flex-wrap items-center justify-center gap-2">
          <span>
            {isAr ? "هل قمت بنقل سيارتك أو سحبها معنا مؤخراً؟" : isEn ? "Did you recently use Abschleppdienst Direkt?" : "Hatten Sie kürzlich einen Einsatz mit Abschleppdienst Direkt?"}
          </span>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:underline font-bold inline-flex items-center gap-1"
          >
            <span>{isAr ? "شارك تجربتك على خرائط جوجل ←" : isEn ? "Review us on Google Maps →" : "Bewerten Sie uns auf Google Maps →"}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
