"use client";

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  Clock, 
  Award, 
  PhoneCall, 
  Shield, 
  Siren,
  Phone
} from 'lucide-react';

export default function ExpertiseSection() {
  const t = useTranslations('Expertise');
  const locale = useLocale();
  const isAr = locale === 'ar';

  const featurePoints = [
    {
      icon: Truck,
      title: isAr ? "كافة أنواع المركبات حتى 3.5 طن" : "Alle Fahrzeugtypen bis 3,5 Tonnen",
      desc: t('point1'),
    },
    {
      icon: Clock,
      title: isAr ? "استجابة سريعة (20–40 دقيقة)" : "Express vor Ort (20–40 Min.)",
      desc: t('point2'),
    },
    {
      icon: Award,
      title: isAr ? "10 سنوات خبرة ميدانية للمالك" : "10 Jahre Praxiserfahrung",
      desc: t('point3'),
    },
    {
      icon: PhoneCall,
      title: isAr ? "اتفاق هاتفي واضح ومباشر" : "Verbindliche telefonische Absprache",
      desc: t('point4'),
    },
    {
      icon: Shield,
      title: isAr ? "زاوية صعود مسطحة وحماية الجنوط" : "Flacher Rampenwinkel & VDI 2700",
      desc: t('point5'),
    },
    {
      icon: Siren,
      title: isAr ? "طوارئ وجاهزية على مدار 24 ساعة" : "24h Notfall-Bereitschaft",
      desc: t('point6'),
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-950 text-white border-b border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Clean Single-Layer Visual Photo + Editorial Caption (Zero Nested Boxes) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-900 border border-white/15 shadow-2xl group">
              <img
                src="/images/real/tow-truck-audi-clean-user.jpg"
                alt="Abschleppdienst Direkt - Transporter mit Plateau und Audi RS3 in Bochum"
                loading="lazy"
                width={600}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-4">
              <div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                  {t('valuesTitle')}
                </div>
                <div className="text-xs sm:text-sm font-black text-amber-400 tracking-wider mt-0.5">
                  FREUNDLICH • MODERN • PROFESSIONELL
                </div>
              </div>

              <a
                href="#ueber-uns"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-amber-400 transition-colors shrink-0"
              >
                <span>{t('moreAboutUs')}</span>
                <ArrowRight size={13} className="rtl:rotate-180 text-amber-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Expertise & Vehicle Scope up to 3.5t (Clean Editorial Divided Rows) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
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

            {/* Clean Divided Editorial List (No Small Icon Boxes) */}
            <div className="divide-y divide-white/10 border-t border-b border-white/10">
              {featurePoints.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="py-3.5 flex items-start gap-3">
                    <IconComponent size={18} className="text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white">
                        {item.title}
                      </div>
                      <span className="text-xs text-slate-300 leading-relaxed block mt-0.5">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
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

        </div>

      </div>
    </section>
  );
}
