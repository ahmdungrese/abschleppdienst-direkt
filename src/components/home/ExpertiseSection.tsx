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
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-red-600/5 blur-[120px] rounded-full pointer-events-none -z-0"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visual Photo Box with "Unsere Werte" Banner */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl relative group">
              
              {/* Real Transporter Photo */}
              <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-slate-950">
                <img
                  src="/images/real/tow-truck-audi-clean-user.jpg"
                  alt="Abschleppdienst Direkt - Transporter mit Plateau und Audi RS3 in Bochum"
                  loading="lazy"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Weight Capacity Badge */}
                <div className="absolute top-3.5 left-3.5 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-xs font-black text-amber-400 flex items-center gap-1.5 shadow-lg">
                  <Truck size={14} />
                  <span>Bis 3,5 Tonnen</span>
                </div>
              </div>

              {/* Overlaid Bottom Card: UNSERE WERTE (FREUNDLICH | MODERN | PROFESSIONELL) */}
              <div className="bg-slate-950/95 backdrop-blur-md p-4 sm:p-5 border-t border-white/10 text-center space-y-1.5">
                <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                  {t('valuesTitle')}
                </div>
                <div className="text-xs sm:text-sm font-black text-amber-400 tracking-wider">
                  FREUNDLICH | MODERN | PROFESSIONELL
                </div>
              </div>

              {/* Action Ribbon at the bottom */}
              <a
                href="#ueber-uns"
                className="block w-full py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-xs sm:text-sm text-center transition-all border-t border-white/5 tracking-wide flex items-center justify-center gap-2"
              >
                <span>{t('moreAboutUs')}</span>
                <ArrowRight size={14} className="rtl:rotate-180 text-amber-400" />
              </a>

            </div>
          </div>

          {/* Right Column: Expertise & Vehicle Scope up to 3.5t */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-wider mb-3">
                <ShieldCheck size={13} className="text-amber-400" />
                <span>{t('badge')}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                {t('title')}
              </h2>

              <p className="mt-3.5 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {t('desc')}
              </p>
            </div>

            {/* Intuitive Icon Points (Each Service Feature has its Own Distinct Visual Icon) */}
            <div className="space-y-3.5 pt-1">
              {featurePoints.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3.5 group">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover:bg-amber-500/20 group-hover:border-amber-400 transition-colors">
                      <IconComponent size={18} strokeWidth={2.2} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-amber-400/90 uppercase tracking-wider">
                        {item.title}
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed block mt-0.5">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Primary Action Button */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/leistungen"
                className="inline-flex items-center gap-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold py-3.5 px-7 rounded-xl border border-white/10 hover:border-amber-400/40 text-sm transition-all shadow-lg active:scale-95 tracking-wide"
              >
                <span>{t('ctaBtn')}</span>
                <ArrowRight size={16} className="rtl:rotate-180 text-amber-400" />
              </Link>

              <a
                href="tel:+4915565500442"
                className="inline-flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-white font-bold py-4 px-6 rounded-xl border border-white/10 hover:border-amber-500/40 text-sm transition-all"
              >
                <Phone size={16} className="text-amber-400" />
                <span>Direkt anrufen: 0155 65500442</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
