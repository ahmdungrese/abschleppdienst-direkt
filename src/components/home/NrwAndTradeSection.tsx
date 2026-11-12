"use client";

import { useTranslations } from 'next-intl';
import { Map, ArrowRight, Building2, Phone } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function NrwAndTradeSection() {
  const tNrw = useTranslations('NrwService');
  const tTrade = useTranslations('CarTradeService');

  return (
    <section className="py-20 sm:py-28 bg-slate-900 text-white border-b border-white/10 relative">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          
          {/* Column 1: NRW-Abschlepp Service (Clean Editorial Column, No Box-Inside-Box) */}
          <div className=" flex flex-col justify-between space-y-6 pb-8 lg:pb-0 lg:pr-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-400">
                <Map size={16} />
                <span>NRW-Weit &amp; Fernstrecke</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white">
                {tNrw('title')}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {tNrw('desc')}
              </p>

              {/* Distant Cities NRW Routes - Clean List with Unified Amber Dots */}
              <div className="pt-2 space-y-2 text-xs font-semibold">
                <div className="text-amber-400 uppercase tracking-wider font-extrabold text-[11px]">
                  Beliebte NRW-Langstrecken:
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>{tNrw('route1')}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>{tNrw('route2')}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>{tNrw('route3')}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">Feste Kilometerpauschale</span>
              <Link
                href="/rechner"
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
              >
                <span>Streckenpreis berechnen</span>
                <ArrowRight size={14} className="rtl:rotate-180" />
              </Link>
            </div>
          </div>

          {/* Column 2: Autoplatz & Verkaufshilfe (Clean Editorial Column) */}
          <div className="flex flex-col justify-between space-y-6 pt-8 lg:pt-0 lg:pl-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-400">
                <Building2 size={16} />
                <span>Fahrzeugbörse &amp; Autoplatz</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white">
                {tTrade('title')}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {tTrade('desc')}
              </p>

              {/* Real Autoplatz Photo Thumbnail */}
              <div className="relative h-36 rounded-2xl overflow-hidden bg-slate-950 border border-white/10">
                <img
                  src="/images/real/autoplatz-nissan.jpg"
                  alt="Transport zum Autoplatz und Händlerbörse in Bochum und NRW"
                  loading="lazy"
                  width="400"
                  height="150"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">Ehrliche Händlervermittlung</span>
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
              >
                <span>Anfrage senden ↓</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
