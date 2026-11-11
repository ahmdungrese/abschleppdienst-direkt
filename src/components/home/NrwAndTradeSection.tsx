"use client";

import { useTranslations } from 'next-intl';
import SpotlightCard from '@/components/ui/SpotlightCard';
import { Map, ArrowRight, ShieldCheck, Car, Building2, Phone } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function NrwAndTradeSection() {
  const tNrw = useTranslations('NrwService');
  const tTrade = useTranslations('CarTradeService');

  return (
    <section className="py-20 sm:py-28 bg-slate-900 text-white border-b border-white/10 relative">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: NRW-Abschlepp Service (Münster bis Bonn) */}
          <SpotlightCard className="p-6 sm:p-8 flex flex-col justify-between border-amber-500/30">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                  <Map size={24} />
                </div>
                <span className="text-xs font-black uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
                  NRW-Weit
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                {tNrw('title')}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {tNrw('desc')}
              </p>

              {/* Distant Cities NRW Routes */}
              <div className="bg-slate-950/80 p-4 rounded-2xl border border-white/5 space-y-2.5 mb-6 text-xs font-semibold">
                <div className="text-amber-400 uppercase tracking-wider font-extrabold text-[11px]">
                  Beliebte NRW-Langstrecken:
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>{tNrw('route1')}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>{tNrw('route2')}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
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
          </SpotlightCard>

          {/* Card 2: Autoplatz & Verkaufshilfe (Real Trading Yard Photo) */}
          <SpotlightCard className="p-6 sm:p-8 flex flex-col justify-between border-white/10">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-amber-400 flex items-center justify-center font-bold">
                  <Building2 size={24} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                  Fahrzeugbörse
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                {tTrade('title')}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                {tTrade('desc')}
              </p>

              {/* Real Autoplatz Photo Thumbnail */}
              <div className="relative h-36 rounded-2xl overflow-hidden bg-slate-950 mb-4 border border-white/10">
                <img
                  src="/images/real/autoplatz-nissan.jpg"
                  alt="Transport zum Autoplatz und Händlerbörse in Bochum und NRW"
                  loading="lazy"
                  width="400"
                  height="150"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] text-white font-bold">
                  Direkttransport zu Händlern &amp; Export
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">Ehrliche Händlervermittlung</span>
              <a
                href="tel:+4915565500442"
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
              >
                <span>Wassem fragen</span>
                <Phone size={13} />
              </a>
            </div>
          </SpotlightCard>

        </div>

      </div>
    </section>
  );
}