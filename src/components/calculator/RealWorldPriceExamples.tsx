"use client";

import { useState } from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Phone, 
  MessageCircle, 
  XCircle, 
  AlertTriangle,
  Zap,
  Car,
  FileText
} from 'lucide-react';

interface Props {
  locale?: string;
}

export default function RealWorldPriceExamples({ locale = 'de' }: Props) {
  const isAr = locale === 'ar';
  const isEn = locale === 'en';

  const [activeTab, setActiveTab] = useState<'examples' | 'comparison'>('examples');

  const examples = [
    {
      id: 1,
      badge: isAr ? 'عطل طارئ على الأوتوبان' : isEn ? 'Highway Breakdown' : 'A40 / A43 Notfall-Abschleppung',
      title: isAr 
        ? 'عطل على الأوتوبان (A40 أو A43 ➔ إلى أي ورشة أو وجهة مختارة)' 
        : isEn 
        ? 'Highway Breakdown on A40 or A43 (➔ to any workshop of choice)' 
        : 'Panne auf der Autobahn (A40 / A43 ➔ zur Wunschwerkstatt)',
      route: 'A40 / A43 (Raum Bochum) ➔ Wunschadresse / Werkstatt',
      distance: 'ca. 8–15 km',
      time: isAr ? 'الوصول في 10–20 دقيقة' : isEn ? 'Arrived in 10–20 min' : 'In 10–20 Min. vor Ort',
      price: '50 € – 80 €',
      priceNote: isAr 
        ? 'حسب المسافة من مكان الانطلاق (بين 50 و 80 يورو)' 
        : isEn 
        ? 'Distance-based from pickup point (€50 – €80 local range)' 
        : 'Staffelung primär nach Distanz ab Startort (50 € – 80 € im Nahbereich)',
      coveredBy: isAr 
        ? 'الزبون يحاسب مباشرة ويقدم الفاتورة الرسمية لكارت الحماية للاسترداد' 
        : isEn 
        ? 'Customer settles on-site and submits invoice to Schutzbrief for reimbursement' 
        : 'Kunde rechnet vor Ort ab und reicht die § 14 UStG Rechnung beim Schutzbrief zur Erstattung ein',
      coveredBadge: isAr ? 'مسترد من كارت الحماية' : isEn ? 'Reimbursable by Schutzbrief' : 'Schutzbrief-Erstattung',
      details: isAr
        ? 'تأمين الموقع بإنارة LED، سحب هادئ بالونش اللاسلكي، والزبون يستلم فوراً فاتورة نظامية مطابقة لـ § 14 UStG لطلب استرداد القيمة من التأمين.'
        : isEn
        ? 'Hazard secured with LED strobe lightbar, winched smoothly, driver receives § 14 UStG invoice to submit for insurance reimbursement.'
        : 'Absicherung mit LED-Blitzbalken, sanfter Seilwindenzug, Übergabe einer ordnungsgemäßen § 14 UStG Rechnung zur Einreichung bei Ihrer Versicherung.'
    },
    {
      id: 2,
      badge: isAr ? 'نقل سيارة جديدة بدون لوحات' : isEn ? 'Car Transfer (No Plates)' : 'Fahrzeugüberführung A nach B',
      title: isAr 
        ? 'نقل سيارة جديدة بدون لوحات (حساب دقيق بالمسافة بدون أي خدش)' 
        : isEn 
        ? 'Transfer of Unregistered Car (Exact Mileage Rate & Rim Protection)' 
        : 'Überführung ohne Zulassung (Exakte Distanzberechnung & Felgenschutz)',
      route: 'Dortmund ➔ Bochum-Langendreer (A40)',
      distance: '19 km',
      time: isAr ? 'موعد محدد ومريح' : isEn ? 'Punctual fixed appointment' : 'Pünktlicher Wunschtermin',
      price: '28,50 €',
      priceNote: isAr 
        ? 'حساب دقيق: 19 كم × 1,50 €/كم من مكان الانطلاق' 
        : isEn 
        ? 'Exact calculation: 19 km × €1.50/km from pickup' 
        : 'Exakte Berechnung: 19 km × 1,50 €/km ab Startort',
      coveredBy: isAr 
        ? 'حساب شفاف ومباشر مع الزبون' 
        : isEn 
        ? 'Direct transparent settlement with customer' 
        : 'Transparente Direktabrechnung mit dem Auftraggeber',
      coveredBadge: isAr ? '19 × 1,5 €/كم بدون خدوش' : isEn ? '19 × €1.50/km Rim-Safe' : '19 × 1,50 €/km schonend',
      details: isAr
        ? 'نقل فردي حصري على السطحة دون نقل سيارات أخرى، وتثبيت العجلات بأحزمة VDI 2700 دون أي خدش للجنوط.'
        : isEn
        ? '100% single-car direct transfer on dedicated flatbed, 4-point tire strapping with zero rim scratches.'
        : '100% Einzelfahrt ohne Beiladung fremder Autos. Schonende 4-Punkt-Radverzurrung nach VDI 2700.'
    },
    {
      id: 3,
      badge: isAr ? 'سيارة كهربائية بفرامل مقفلة' : isEn ? 'EV / Locked Handbrake' : 'E-Auto Spezial-Bergung',
      title: isAr 
        ? 'تسلا ببطارية فارغة وفرامل يد مقفلة (بوخوم كويرنبورغ ➔ مركز تسلا دورتموند)' 
        : isEn 
        ? 'Tesla Model Y Dead 12V Battery & Locked Brakes (Bochum RUB ➔ Tesla Dortmund)' 
        : 'Tesla Model Y mit toter 12V-Batterie & blockierter Bremse (Bochum ➔ Tesla Dortmund)',
      route: 'Bochum-Querenburg (RUB) ➔ Tesla Service Center Dortmund',
      distance: 'ca. 24 km',
      time: isAr ? 'الوصول في 22 دقيقة' : isEn ? 'Arrived in 22 min' : 'In 22 Min. vor Ort',
      price: '115 € – 125 €',
      priceNote: isAr 
        ? 'شامل استخدام مزلاجات Go-Jak الهيدروليكية' 
        : isEn 
        ? 'Includes hydraulic Go-Jak wheel dollies' 
        : 'Inkl. Go-Jak Radroller & Plateau-Vollverladung',
      coveredBy: isAr 
        ? 'الزبون يقدم الفاتورة للتأمين الشامل للاسترداد' 
        : isEn 
        ? 'Customer submits invoice to insurer for reimbursement' 
        : 'Kunde reicht Rechnung bei Kasko / Schutzbrief zur Erstattung ein',
      coveredBadge: isAr ? 'حماية تامة للقير والبطارية' : isEn ? 'Zero Drivetrain Damage' : '100% Getriebeschutz',
      details: isAr
        ? 'رفع العجلات بمزلاجات Go-Jak، والعجلات لم تدر على الأرض 0% لحماية المحولات الكهربائية الحثية.'
        : isEn
        ? 'Tires lifted completely using hydraulic Go-Jaks; 0% wheel rolling prevented back-EMF inverter burnout.'
        : 'Räder mit hydraulischen Go-Jaks schwebend verladen. 0% Radrollen verhinderte teuren Inverter-Totalschaden.'
    },
    {
      id: 4,
      badge: isAr ? 'حادث مروري (الطرف الآخر متسبب)' : isEn ? 'Not-at-fault Collision' : 'Unfallbergung (Fremdverschulden)',
      title: isAr 
        ? 'تصادم مروري على طريق A43 (مخرج بوخوم ريمكه ➔ ورشة الوكالة المعتمدة)' 
        : isEn 
        ? 'Rear-End Collision on A43 (Bochum-Riemke Exit ➔ Authorized Dealership Body Shop)' 
        : 'Auffahrunfall auf der A43 (Anschlussstelle Riemke ➔ Vertragswerkstatt)',
      route: 'A43 Bochum-Riemke ➔ Kfz-Meisterbetrieb Bochum',
      distance: 'ca. 14 km',
      time: isAr ? 'استجابة طوارئ في 15 دقيقة' : isEn ? 'Emergency response in 15 min' : 'Express-Eintreffen in 15 Min.',
      price: '140 € – 160 €',
      priceNote: isAr 
        ? 'سحب إنقاذ وتأمين شظايا ومخلفات الحادث' 
        : isEn 
        ? 'Accident recovery, clean-up & secure transit' 
        : 'Bergung, Absicherung & Trümmer-Sicherungsnetz',
      coveredBy: isAr 
        ? 'الزبون يحاسب ويقدم الفاتورة لتأمين المتسبب لاسترداد 100%' 
        : isEn 
        ? 'Customer claims 100% reimbursement from at-fault insurer' 
        : 'Kunde reicht Rechnung bei gegnerischer Haftpflicht zur 100% Erstattung ein',
      coveredBadge: isAr ? 'مسترد بالكامل 100%' : isEn ? '100% Reimbursable' : '100% Erstattungsfähig',
      details: isAr
        ? 'تركيب شبكة تثبيت على الصدام المتضرر، رفع السيارة بالونش، وتسليم الزبون فاتورة مفصلة ليقدمها لتأمين الطرف المتسبب.'
        : isEn
        ? 'Securing nets placed over damaged front clip, customer receives itemized invoice to claim from opposing insurer.'
        : 'Sicherungsnetz über lockere Stoßstange, Seilwindenbergung und Übergabe einer detaillierten Rechnung zur Vorlage bei der gegnerischen Versicherung.'
    }
  ];

  return (
    <section className="py-12 sm:py-16">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-amber-400 mb-3">
          <ShieldCheck size={16} className="text-amber-400 shrink-0" />
          <span>{isAr ? 'شفافية الأسعار المطلقة' : isEn ? '100% Price Transparency' : 'Echte Kostentransparenz'}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
          {isAr 
            ? 'أمثلة حقيقية من الواقع: كم تكلف الرحلات فعلياً؟' 
            : isEn 
            ? 'Real-World Scenarios: What Does Towing Actually Cost?' 
            : 'Praxis-Beispiele: Was kostet ein Einsatz in der Realität?'}
        </h2>
        <p className="mt-3 text-slate-300 text-xs sm:text-sm leading-relaxed">
          {isAr
            ? 'لا توجد لدينا أي مفاجآت أو رسوم خفية. إليك أمثلة حية لرحلات قمنا بها في بوخوم وكيف تم استرداد قيمتها بالكامل من التأمين.'
            : isEn
            ? 'Zero hidden fees, zero unpleasant surprises. Here is how actual recovery jobs are calculated and reimbursed by insurance in Bochum.'
            : 'Keine Abzocke, keine Überraschungen vor Ort. Sehen Sie hier echte Abrechnungsbeispiele aus unserer Praxis in Bochum und wie die Versicherung erstattet.'}
        </p>

        {/* Tab Switcher */}
        <div className="mt-6 inline-flex p-1 bg-slate-900 border border-white/10 rounded-2xl">
          <button
            onClick={() => setActiveTab('examples')}
            className={`px-4 sm:px-6 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'examples'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {isAr ? 'أمثلة لرحلات حقيقية' : isEn ? 'Real Job Examples' : 'Echte Einsatzbeispiele'}
          </button>
          <button
            onClick={() => setActiveTab('comparison')}
            className={`px-4 sm:px-6 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'comparison'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {isAr ? 'مقارنة الشفافية (نحن مقابل السماسرة)' : isEn ? 'Abschleppdienst Direkt vs. Shady Middlemen' : 'Vergleich: Abschleppdienst Direkt vs. Abzocke'}
          </button>
        </div>
      </div>

      {/* Tab 1: Clean Editorial Price Schedule Table (No Boxes, Clean Typography) */}
      {activeTab === 'examples' && (
        <div className="overflow-x-auto border-t border-b border-white/10">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/10 text-slate-400 text-xs uppercase tracking-wider">
                <th className="py-3.5 pr-4 font-bold">{isAr ? 'الخدمة والمسار' : isEn ? 'Service & Route' : 'Einsatz & Strecke'}</th>
                <th className="py-3.5 px-4 font-bold hidden md:table-cell">{isAr ? 'الوصول والمسافة' : isEn ? 'ETA & Distance' : 'Eintreffzeit & Distanz'}</th>
                <th className="py-3.5 px-4 font-bold text-amber-400">{isAr ? 'السعر الثابت' : isEn ? 'Fixed Price' : 'Verbindlicher Festpreis'}</th>
                <th className="py-3.5 px-4 font-bold hidden lg:table-cell">{isAr ? 'استرداد التأمين' : isEn ? 'Insurance Reimbursement' : 'Schutzbrief / Erstattung'}</th>
                <th className="py-3.5 pl-4 font-bold text-right">{isAr ? 'طلب فوري' : isEn ? 'Action' : 'Anfrage'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-slate-300">
              {examples.map((item) => (
                <tr key={item.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-5 pr-4 align-top">
                    <div className="font-bold text-white text-sm">
                      {item.title}
                    </div>
                    <div className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                      <MapPin size={13} className="text-amber-400 flex-shrink-0" />
                      <span>{item.route}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 max-w-md hidden sm:block">
                      {item.details}
                    </div>
                  </td>

                  <td className="py-5 px-4 align-top hidden md:table-cell whitespace-nowrap">
                    <div className="font-semibold text-slate-200">{item.time}</div>
                    <div className="text-xs text-slate-400 font-mono mt-0.5">{item.distance}</div>
                  </td>

                  <td className="py-5 px-4 align-top whitespace-nowrap">
                    <div className="text-lg font-black text-amber-400 font-mono">
                      {item.price}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5 max-w-[160px]">
                      {item.priceNote}
                    </div>
                  </td>

                  <td className="py-5 px-4 align-top hidden lg:table-cell">
                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                      <CheckCircle2 size={14} className="text-amber-400 flex-shrink-0" />
                      <span>{item.coveredBy}</span>
                    </span>
                  </td>

                  <td className="py-5 pl-4 align-top text-right whitespace-nowrap">
                    <a
                      href="#kalkulator"
                      className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 text-xs font-bold transition-colors"
                    >
                      <span>{isAr ? 'احسب مسارك ↑' : isEn ? 'Calculate ↑' : 'Kalkulieren ↑'}</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Tab 2: Comparison vs. Shady Middlemen (Open Editorial Table, Zero Boxes) */}
      {activeTab === 'comparison' && (
        <div className="border-t border-b border-white/10 py-6">
          <div className="mb-6">
            <h3 className="text-lg sm:text-2xl font-black text-white">
              {isAr 
                ? 'لماذا يثق بنا العملاء؟ مقارنة الصدق والشفافية' 
                : isEn 
                ? 'Why Drivers Trust Us: Transparency vs. Industry Gouging' 
                : 'Der Transparenz-Vergleich: Abschleppdienst Direkt vs. Vermittler-Abzocke'}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-400">
              {isAr
                ? 'في ألمانيا تنتشر مواقع وسيطة وهمية تستغل حاجة السائق في البرد. إليك كيف نميز أنفسنا بالأمانة والمهنية:'
                : isEn
                ? 'The German towing market unfortunately suffers from predatory middlemen. Here is how we guarantee your safety and honest rates:'
                : 'Leider gibt es in unserer Branche viele schwarze Schafe, die Pannenopfer mit Mondpreisen überrumpeln. So schützen wir Sie:'}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 text-xs uppercase tracking-wider">
                  <th className="py-3 pr-4">{isAr ? 'المعيار' : isEn ? 'Criteria' : 'Kriterium'}</th>
                  <th className="py-3 px-4 text-amber-400 font-bold">
                    Abschleppdienst Direkt
                  </th>
                  <th className="py-3 pl-4 text-slate-400 font-bold">
                    {isAr ? 'الوسطاء المشبوهين' : isEn ? 'Shady Middlemen' : 'Typische Vermittler'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-slate-300">
                <tr>
                  <td className="py-3.5 pr-4 font-semibold text-white">
                    {isAr ? 'السعر المتفق عليه' : isEn ? 'Agreed Price' : 'Preisvereinbarung'}
                  </td>
                  <td className="py-3.5 px-4 text-white font-bold">
                    <span className="inline-flex items-center gap-1.5">
                      <CheckCircle2 size={16} className="text-amber-400 flex-shrink-0" />
                      <span>{isAr ? 'سعر ثابت ملزم قبل التحرك' : isEn ? 'Binding flat price upfront' : 'Verbindlicher Festpreis vor Abfahrt'}</span>
                    </span>
                  </td>
                  <td className="py-3.5 pl-4 text-slate-400">
                    <span className="inline-flex items-center gap-1.5">
                      <XCircle size={16} className="text-slate-500 flex-shrink-0" />
                      <span>{isAr ? 'طعم بـ 19 يورو ثم فاتورة 800 يورو!' : isEn ? '€19 bait, then €800 bill!' : 'Lockangebot ab 19 €, vor Ort 600–900 €'}</span>
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="py-3.5 pr-4 font-semibold text-white">
                    {isAr ? 'شاحنة ومعدات مملوكة' : isEn ? 'Fleet Ownership' : 'Eigener Fuhrpark'}
                  </td>
                  <td className="py-3.5 px-4 text-white font-bold">
                    <span className="inline-flex items-center gap-1.5">
                      <CheckCircle2 size={16} className="text-amber-400 flex-shrink-0" />
                      <span>{isAr ? 'شاحنة مرخصة ومجهزة في بوخوم' : isEn ? 'Own specialized truck in Bochum' : 'Eigener Plateau-Transporter vor Ort'}</span>
                    </span>
                  </td>
                  <td className="py-3.5 pl-4 text-slate-400">
                    <span className="inline-flex items-center gap-1.5">
                      <XCircle size={16} className="text-slate-500 flex-shrink-0" />
                      <span>{isAr ? 'مجرد كول سنتر وسيط بدون سيارات' : isEn ? 'Virtual call-center broker' : 'Reine Vermittlungsagentur ohne Fuhrpark'}</span>
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="py-3.5 pr-4 font-semibold text-white">
                    {isAr ? 'رسوم خفية (ليل / عطل)' : isEn ? 'Hidden Surcharges' : 'Zuschläge (Nacht/Wetter)'}
                  </td>
                  <td className="py-3.5 px-4 text-white font-bold">
                    <span className="inline-flex items-center gap-1.5">
                      <CheckCircle2 size={16} className="text-amber-400 flex-shrink-0" />
                      <span>{isAr ? 'لا توجد أي رسوم خفية' : isEn ? 'Zero hidden fees' : 'Keine versteckten Gebühren'}</span>
                    </span>
                  </td>
                  <td className="py-3.5 pl-4 text-slate-400">
                    <span className="inline-flex items-center gap-1.5">
                      <XCircle size={16} className="text-slate-500 flex-shrink-0" />
                      <span>{isAr ? 'رسوم شتاء، رسوم ونش، رسوم وقت' : isEn ? 'Steep night & weather markups' : 'Horrende Winden-, Schlechtwetter-Gebühren'}</span>
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="py-3.5 pr-4 font-semibold text-white">
                    {isAr ? 'فواتير معتمدة للتأمين' : isEn ? 'Insurance Invoices' : 'Versicherungsrechnung'}
                  </td>
                  <td className="py-3.5 px-4 text-white font-bold">
                    <span className="inline-flex items-center gap-1.5">
                      <CheckCircle2 size={16} className="text-amber-400 flex-shrink-0" />
                      <span>{isAr ? 'فاتورة § 14 UStG معتمدة رسمياً' : isEn ? 'Verified § 14 UStG invoice' : 'Ordnungsgemäße Rechnung nach § 14 UStG'}</span>
                    </span>
                  </td>
                  <td className="py-3.5 pl-4 text-slate-400">
                    <span className="inline-flex items-center gap-1.5">
                      <XCircle size={16} className="text-slate-500 flex-shrink-0" />
                      <span>{isAr ? 'إيصالات يدوية يرفضها التأمين' : isEn ? 'Handwritten slips rejected by insurers' : 'Ungültige Quittungen, Erstattung verweigert'}</span>
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="py-3.5 pr-4 font-semibold text-white">
                    {isAr ? 'المسؤولية والضمان' : isEn ? 'Transport Insurance' : 'Transportversicherung'}
                  </td>
                  <td className="py-3.5 px-4 text-white font-bold">
                    <span className="inline-flex items-center gap-1.5">
                      <CheckCircle2 size={16} className="text-amber-400 flex-shrink-0" />
                      <span>{isAr ? 'تأمين نقل كامل وحماية VDI 2700' : isEn ? 'Full cargo liability & VDI 2700' : 'Gewerbliche Frachtführerversicherung'}</span>
                    </span>
                  </td>
                  <td className="py-3.5 pl-4 text-slate-400">
                    <span className="inline-flex items-center gap-1.5">
                      <XCircle size={16} className="text-slate-500 flex-shrink-0" />
                      <span>{isAr ? 'لا يوجد تأمين؛ الخدوش على مسؤوليتك' : isEn ? 'Uninsured damage risks' : 'Haftungsausschluss bei Kratzern/Schäden'}</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Direct Call Strip — Open Editorial Layout */}
      <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-black text-white text-base sm:text-lg">
            {isAr ? 'هل تريد معرفة السعر الدقيق لحالتك الآن؟' : isEn ? 'Need an Exact Quote for Your Situation?' : 'Sie möchten den genauen Preis für Ihre Fahrt erfahren?'}
          </h4>
          <p className="text-xs text-slate-300 mt-0.5">
            {isAr
              ? 'اتصل بنا مباشرة أو راسلنا على واتساب – وسنعطيك السعر الثابت الملزم خلال دقيقة واحدة.'
              : isEn
              ? 'Call directly or send a WhatsApp message – we will give you a binding price within 60 seconds.'
              : 'Rufen Sie uns an oder schreiben Sie uns kurz per WhatsApp – wir nennen Ihnen in 60 Sekunden Ihren Festpreis.'}
          </p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <a
            href="tel:+4915565500442"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-black text-xs py-3 px-5 rounded-xl shadow-lg shadow-red-600/25 transition-all active:scale-95"
          >
            <Phone size={15} className="fill-white" />
            <span>24h Notruf: 0155 65500442</span>
          </a>
        </div>
      </div>

    </section>
  );
}
