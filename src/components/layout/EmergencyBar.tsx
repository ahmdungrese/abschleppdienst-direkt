"use client";

import { useTranslations } from 'next-intl';
import { Phone, MessageCircle } from 'lucide-react';

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
            className="flex items-center gap-1.5 bg-black/25 hover:bg-black/40 py-1 px-3 rounded-full transition-all border border-white/10"
          >
            <Phone size={13} className="text-amber-300" />
            <span dir="ltr" className="tracking-wider font-extrabold">+49 155 65500442</span>
          </a>
          
          <a
            href="https://wa.me/4915565500442?text=Hallo%20Wassem%2C%20ich%20brauche%20einen%20Abschleppdienst%20oder%20Fahrzeugtransport"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white py-1 px-3 rounded-full transition-all shadow-sm font-extrabold text-xs"
          >
            <MessageCircle size={13} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}