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
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        {/* Section Header with Clean Rating Summary (No Nested Boxes) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-amber-400 mb-3">
              <ShieldCheck size={16} className="text-amber-400 shrink-0" />
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

          {/* Clean Editorial Google Rating Summary */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="text-3xl font-black text-amber-400 font-mono">5.0</div>
            <div>
              <div className="flex items-center text-amber-400 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} className="fill-amber-400" />
                ))}
              </div>
              <span className="text-xs text-slate-300 block font-semibold">
                {isAr ? "تقييمات خرائط جوجل (5.0)" : isEn ? "Google Maps Reviews (5.0)" : "Google Rezensionen (5.0)"}
              </span>
            </div>
          </div>
        </div>

        {/* Clean Editorial Reviews List (Divided Rows, Zero Nested Boxes) */}
        <div className="divide-y divide-white/10 border-b border-white/10">
          {reviews.map((rev, idx) => (
            <article key={idx} className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
              
              {/* Left Column: Customer Info & Rating */}
              <div className="md:col-span-4 space-y-1.5">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-white">{rev.name}</h3>
                  <div className="flex items-center text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={12} className="fill-amber-400" />
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-300">
                  <MapPin size={12} className="text-amber-400 shrink-0" />
                  <span>{rev.location[langKey]}</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-400">{rev.date[langKey]}</span>
                </div>

                <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wide pt-1">
                  {rev.service[langKey]}
                </div>
              </div>

              {/* Right Column: Review Quote & Verification */}
              <div className="md:col-span-8 space-y-2.5">
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                  &bdquo;{rev.text[langKey]}&ldquo;
                </p>

                <div className="flex items-center gap-4 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-slate-300 font-semibold">
                    <CheckCircle2 size={13} className="text-amber-400" />
                    <span>{rev.highlight[langKey]}</span>
                  </span>
                </div>
              </div>

            </article>
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
