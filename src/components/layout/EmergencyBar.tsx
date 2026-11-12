"use client";

import { useTranslations } from 'next-intl';
import { Phone, ArrowDown } from 'lucide-react';

export default function EmergencyBar() {
  const t = useTranslations('EmergencyBar');

  return (
    <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white py-2 px-4 relative z-30 text-xs sm:text-sm border-b border-red-500/30">
      <div className="container mx-auto flex flex-row justify-between sm:justify-center items-center gap-2 sm:gap-6 font-bold text-center">
        <span className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <span className="tracking-wide">{t('requestHelp')}</span>
        </span>
        
        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="tel:+4915565500442"
            className="flex items-center gap-1.5 bg-black/25 hover:bg-black/40 py-1 px-3 rounded-lg transition-all border border-white/15"
          >
            <Phone size={13} className="text-amber-300" />
            <span dir="ltr" className="tracking-wider font-extrabold">+49 155 65500442</span>
          </a>
          
          <a
            href="#kontakt"
            className="hidden sm:flex items-center gap-1.5 bg-slate-950/60 hover:bg-slate-950 text-white py-1 px-3 rounded-lg transition-all border border-white/15 font-extrabold text-xs"
          >
            <span>Anfrage</span>
            <ArrowDown size={12} className="text-amber-400" />
          </a>
        </div>
      </div>
    </div>
  );
}
