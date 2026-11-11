"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Phone, Calculator, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white py-16 sm:py-24 lg:py-28 border-b border-white/10 transition-colors duration-500">
      
      {/* Offizielle Renault Master Abschleppwagen Einsatzaufnahme */}
      <div className="absolute inset-0 z-0 overflow-hidden animate-fade-in">
        <img
          src="/images/hero/hero-renault-master-clean.jpg"
          alt="Abschleppdienst Direkt - 24h Pannenhilfe & Fahrzeugtransport in Bochum und im Ruhrgebiet"
          className="w-full h-full object-cover object-[center_right] filter brightness-[0.92] contrast-[1.05]"
          loading="eager"
        />
        {/* تدرج جانبي ناعم لضمان وضوح النصوص وأرقام الطوارئ بنسبة 100% */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 sm:via-slate-950/70 to-transparent"></div>
        {/* هالة دمج انسيابية في الأسفل */}
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="max-w-2xl sm:max-w-3xl space-y-6 text-center sm:text-left py-2">
          
          {/* Live Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/85 border border-amber-500/40 text-amber-300 text-xs font-bold tracking-wide backdrop-blur-md shadow-xl">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>24/7 Notdienst-Rufbereitschaft • Bochum &amp; Ruhrgebiet</span>
          </div>

          {/* Direct Authentic Headline with Official Brand */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              Abschleppdienst <span className="text-amber-400">Direkt</span>
            </h1>

            <p className="mt-2 text-lg sm:text-2xl font-bold text-slate-100 tracking-tight leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              24h Abschleppdienst, Pannenhilfe &amp; Fahrzeugüberführung im Ruhrgebiet
            </p>
          </div>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed max-w-2xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            {t('subtitle')}
          </p>

          {/* Action CTAs - Red reserved ONLY for 24h Notruf */}
          <div className="pt-2 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-center sm:justify-start">
            <a
              href="tel:+4915565500442"
              className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-500 text-white font-black py-4 px-8 rounded-xl shadow-2xl shadow-red-600/50 text-base transition-all active:scale-95 group"
            >
              <Phone size={20} className="fill-white group-hover:rotate-12 transition-transform" />
              <span>24h Notruf: 0155 65500442</span>
            </a>

            <Link
              href="/rechner"
              className="inline-flex items-center justify-center gap-2.5 bg-slate-950/90 hover:bg-slate-900 text-white font-bold py-4 px-7 rounded-xl border border-white/20 hover:border-amber-400/50 text-base transition-all shadow-xl backdrop-blur-md"
            >
              <Calculator size={18} className="text-amber-400" />
              <span>{t('ctaCalc')}</span>
            </Link>
          </div>

          {/* Quick Value Props */}
          <div className="pt-6 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm font-bold text-slate-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Clock size={16} className="text-amber-400 flex-shrink-0" />
              <span>{t('feature1')}</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <ShieldCheck size={16} className="text-amber-400 flex-shrink-0" />
              <span>{t('feature2')}</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <CheckCircle2 size={16} className="text-amber-400 flex-shrink-0" />
              <span>{t('feature3')}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
