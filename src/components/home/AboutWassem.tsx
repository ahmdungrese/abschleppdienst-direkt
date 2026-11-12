"use client";

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Phone, ArrowRight, Truck, ShieldCheck, Award, RotateCw } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function AboutWassem() {
  const t = useTranslations('About');
  const locale = useLocale();
  const isAr = locale === 'ar';
  const isEn = locale === 'en';

  const [activeSide, setActiveSide] = useState<'front' | 'back'>('front');

  return (
    <section id="ueber-uns" className="py-20 sm:py-28 bg-slate-950 text-white border-b border-white/10 relative">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* ======================================================== */}
        {/* TIER 1: TOP ROW - PHOTO ON LEFT & WELCOME ON RIGHT       */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14 sm:mb-18">
          
          {/* Left Column: Official Brand Card with Front/Back Switcher (Single Clean Layer, No Card-Inside-Card) */}
          <div className="lg:col-span-6 space-y-3">
            {/* Card Switcher Pills (Front / Back) */}
            <div className="flex items-center justify-between px-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                {activeSide === 'front' 
                  ? (isAr ? "الوجه: الشعار وبيانات الاتصال" : isEn ? "Front: Logo & Contact" : "Vorderseite: Logo & Kontaktdaten")
                  : (isAr ? "القفى: قائمة الخدمات والتخصصات" : isEn ? "Back: Services Overview" : "Rückseite: Leistungsübersicht")}
              </span>

              <div className="inline-flex rounded-lg bg-slate-900 p-0.5 border border-white/10 text-xs">
                <button
                  type="button"
                  onClick={() => setActiveSide('front')}
                  className={`px-3 py-1 rounded-md font-semibold transition-all cursor-pointer ${
                    activeSide === 'front'
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isAr ? "الوجه" : isEn ? "Front" : "Vorderseite"}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSide('back')}
                  className={`px-3 py-1 rounded-md font-semibold transition-all cursor-pointer ${
                    activeSide === 'back'
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isAr ? "القفى" : isEn ? "Back" : "Rückseite"}
                </button>
              </div>
            </div>

            {/* Direct Card Image Display (No Nested Wrapper Boxes) */}
            <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
              <img
                src={activeSide === 'front' ? "/branding/visitenkarte_vorderseite.png" : "/branding/visitenkarte_rueckseite.png"}
                alt={activeSide === 'front' ? "Abschleppdienst Direkt Visitenkarte Vorderseite" : "Abschleppdienst Direkt Visitenkarte Rückseite Leistungen"}
                loading="lazy"
                width={1050}
                height={600}
                className="w-full h-auto block object-contain transition-all duration-300"
              />
            </div>

            {/* Bottom Quick Card Note */}
            <div className="flex items-center justify-between text-[11px] text-slate-400 px-1">
              <span>{isAr ? "بطاقة Abschleppdienst Direkt الرسمية" : "Offizielle Visitenkarte Abschleppdienst Direkt"}</span>
              <Link
                href="/ueber-uns#visitenkarte"
                className="text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1"
              >
                <span>{isAr ? "عرض الوجهين وتحميل البطاقة" : "Beide Seiten anzeigen"}</span>
                <ArrowRight size={11} className="rtl:rotate-180" />
              </Link>
            </div>
          </div>

          {/* Right Column: Herzlich Willkommen & Breathable Company Narrative */}
          <div className="lg:col-span-6 space-y-4">
            
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-amber-400 mb-3">
                <ShieldCheck size={15} className="text-amber-400 shrink-0" />
                <span>Über unser Unternehmen</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                {t('welcomeTitle')}
              </h2>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              <p>
                {t('welcomeP1')}
              </p>
              <p>
                {t('welcomeP2')}
              </p>
              <p>
                {t('welcomeP3')}
              </p>
              <p>
                {t('welcomeP4')}
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <Link
                href="/ueber-uns"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-200 font-semibold text-xs transition-colors"
              >
                <span>Vollständiges Unternehmensprofil</span>
                <ArrowRight size={13} className="rtl:rotate-180" />
              </Link>

              <a
                href="#kontakt"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 font-medium text-xs transition-colors"
              >
                <span>Kontakt aufnehmen</span>
              </a>
            </div>

          </div>

        </div>

        {/* ======================================================== */}
        {/* TIER 2: BOTTOM FULL-WIDTH COMFORTABLE READING SECTION    */}
        {/* ======================================================== */}
        <div className="pt-10 border-t border-white/10 space-y-5">
          
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-snug">
            {t('detailsTitle')}
          </h3>

          <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-4xl">
            <p>
              {t('detailsP1')}
            </p>
            <p>
              {t('detailsP2')}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
