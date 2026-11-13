"use client";

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Clock,
  Award,
  Phone,
  Wrench,
  HelpCircle,
  BookOpen,
  type LucideIcon,
} from 'lucide-react';

type Lang = 'de' | 'ar' | 'en';
type BranchKind = 'service' | 'faq' | 'guide' | 'page';

interface BranchLink {
  kind: BranchKind;
  href: string;
  label: Record<Lang, string>;
}

interface Branch {
  icon: LucideIcon;
  title: Record<Lang, string>;
  /** Existing translation keys (Expertise.pointX) merged into one short paragraph */
  points: [string, string];
  links: BranchLink[];
}

const kindMeta: Record<BranchKind, { icon: LucideIcon; label: Record<Lang, string> }> = {
  service: { icon: Wrench, label: { de: 'Leistung', ar: 'خدمة', en: 'Service' } },
  faq: { icon: HelpCircle, label: { de: 'Frage', ar: 'سؤال', en: 'FAQ' } },
  guide: { icon: BookOpen, label: { de: 'Ratgeber', ar: 'دليل', en: 'Guide' } },
  page: { icon: ArrowRight, label: { de: 'Seite', ar: 'صفحة', en: 'Page' } },
};

/**
 * Topic tree: 3 core strengths (trunk) → each one branches into the matching
 * service page, the related FAQ and the in-depth guide. The homepage stays short,
 * the detail lives one click deeper.
 */
const branches: Branch[] = [
  {
    icon: Truck,
    title: {
      de: 'Jedes Fahrzeug bis 3,5 t – schonend verladen',
      ar: 'كل المركبات حتى 3.5 طن – تحميل آمن بدون خدوش',
      en: 'Every vehicle up to 3.5 t – loaded gently',
    },
    points: ['point1', 'point5'],
    links: [
      { kind: 'service', href: '/leistungen/abschleppdienst-pkw', label: { de: 'PKW abschleppen', ar: 'سحب سيارات الركاب', en: 'Car towing' } },
      { kind: 'service', href: '/leistungen/abschleppdienst-suv', label: { de: 'SUV & Allrad', ar: 'سيارات SUV والدفع الرباعي', en: 'SUV & 4x4' } },
      { kind: 'service', href: '/leistungen/elektroauto-automatik-abschleppen', label: { de: 'E-Auto & Automatik', ar: 'السيارات الكهربائية والأوتوماتيك', en: 'EV & automatic' } },
      { kind: 'faq', href: '/faq#tiefergelegte-sportwagen-spoilerschutz', label: { de: 'Tiefergelegt – setzt mein Auto auf?', ar: 'سيارتي منخفضة – هل تحتكّ عند التحميل؟', en: 'Lowered car – will it scrape?' } },
      { kind: 'guide', href: '/blog/ladungssicherung-auto-abschleppen-vdi-2700-gurte', label: { de: 'Ladungssicherung nach VDI 2700', ar: 'تثبيت الحمولة وفق VDI 2700', en: 'Load securing (VDI 2700)' } },
    ],
  },
  {
    icon: Clock,
    title: {
      de: 'In 20–40 Min. vor Ort – rund um die Uhr',
      ar: 'نصلك خلال 20–40 دقيقة – على مدار الساعة',
      en: 'On site in 20–40 min – around the clock',
    },
    points: ['point2', 'point6'],
    links: [
      { kind: 'service', href: '/leistungen/pannenhilfe-starthilfe', label: { de: 'Pannenhilfe & Starthilfe', ar: 'المساعدة على الطريق وتشغيل البطارية', en: 'Roadside help & jump start' } },
      { kind: 'page', href: '/einsatzgebiet', label: { de: 'Einsatzgebiet & Anfahrtszeiten', ar: 'منطقة الخدمة وأوقات الوصول', en: 'Service area & arrival times' } },
      { kind: 'faq', href: '/faq#anfahrtszeit-bochum', label: { de: 'Wie schnell sind Sie bei mir?', ar: 'كم تحتاجون للوصول إليّ؟', en: 'How fast can you reach me?' } },
      { kind: 'guide', href: '/blog/autobahn-panne-ratgeber-sicherheit-standort-bochum', label: { de: 'Panne auf der Autobahn – was tun?', ar: 'عطل على الأوتوبان – ماذا أفعل؟', en: 'Motorway breakdown – what to do?' } },
    ],
  },
  {
    icon: Award,
    title: {
      de: '10 Jahre Praxis – ehrliche, feste Absprachen',
      ar: '10 سنوات خبرة – اتفاق واضح وسعر ثابت',
      en: '10 years of practice – honest, fixed agreements',
    },
    points: ['point3', 'point4'],
    links: [
      { kind: 'page', href: '/rechner', label: { de: 'Preis vorab berechnen', ar: 'احسب السعر مسبقاً', en: 'Calculate your price' } },
      { kind: 'page', href: '/ueber-uns', label: { de: 'Unser Team & Unternehmen', ar: 'فريقنا وشركتنا', en: 'Our team & company' } },
      { kind: 'faq', href: '/faq#feste-pauschalpreise', label: { de: 'Gibt es feste Preise?', ar: 'هل الأسعار ثابتة؟', en: 'Are prices fixed?' } },
      { kind: 'guide', href: '/blog/kostenuebernahme-versicherung-schutzbrief-abschleppen', label: { de: 'Zahlt die Versicherung?', ar: 'هل يدفع التأمين التكاليف؟', en: 'Does insurance pay?' } },
    ],
  },
];

export default function ExpertiseSection() {
  const t = useTranslations('Expertise');
  const locale = useLocale();
  const lang: Lang = locale === 'ar' ? 'ar' : locale === 'en' ? 'en' : 'de';

  const readMore = { de: 'Hier weiterlesen', ar: 'تابع القراءة من هنا', en: 'Continue reading' }[lang];

  return (
    <section className="py-16 sm:py-24 bg-slate-950 text-white border-b border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-amber-400 mb-3">
            <ShieldCheck size={16} className="text-amber-400 shrink-0" />
            <span>{t('badge')}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            {t('title')}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {t('desc')}
          </p>
        </div>

        {/* Topic tree: 3 strengths, each branching into deeper pages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {branches.map((branch) => {
            const Icon = branch.icon;
            return (
              <article
                key={branch.points[0]}
                className="flex flex-col rounded-2xl bg-slate-900/50 border border-white/10 p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-400 flex items-center justify-center shrink-0">
                    <Icon size={20} strokeWidth={2.2} />
                  </div>
                  <h3 className="text-base font-black text-white tracking-tight leading-snug pt-0.5">
                    {branch.title[lang]}
                  </h3>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {t(branch.points[0])}. {t(branch.points[1])}.
                </p>

                {/* Branches */}
                <div className="mt-4 pt-3 border-t border-white/10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    {readMore}
                  </span>

                  <ul className="mt-2 ms-1.5 border-s border-amber-400/30">
                    {branch.links.map((link) => {
                      const meta = kindMeta[link.kind];
                      const KindIcon = meta.icon;
                      return (
                        <li key={link.href} className="relative ps-5">
                          {/* twig connecting the link to the trunk line */}
                          <span className="absolute start-0 top-1/2 w-3.5 h-px bg-amber-400/30" aria-hidden="true"></span>
                          <Link
                            href={link.href}
                            className="group flex items-center gap-2 py-2 text-xs sm:text-[13px] font-semibold text-slate-200 hover:text-amber-400 transition-colors"
                          >
                            <KindIcon size={13} className={`text-amber-400 shrink-0 ${link.kind === 'page' ? 'rtl:rotate-180' : ''}`} />
                            <span className="flex-grow leading-snug">{link.label[lang]}</span>
                            <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-amber-400/80 shrink-0">
                              {meta.label[lang]}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        {/* Primary Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="tel:+4915565500442"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-black py-3.5 px-6 rounded-xl shadow-lg shadow-red-600/25 text-xs sm:text-sm transition-all active:scale-95"
          >
            <Phone size={16} className="fill-white" />
            <span>24h Notruf: 0155 65500442</span>
          </a>

          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-amber-500 hover:text-slate-950 text-white font-bold py-3.5 px-6 rounded-xl border border-white/15 hover:border-amber-400 text-xs sm:text-sm transition-all"
          >
            <span>{t('ctaBtn')}</span>
            <ArrowRight size={15} className="rtl:rotate-180" />
          </Link>
        </div>

      </div>
    </section>
  );
}
