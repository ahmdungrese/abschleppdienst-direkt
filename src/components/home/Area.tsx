"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { MapPin, Clock, ArrowRight } from 'lucide-react';

export default function Area() {
  const t = useTranslations('Area');

  // Key Autobahns with official blue Autobahn sign styling
  const autobahnShields = ["A 40", "A 43", "A 448", "A 42", "A 2"];

  return (
    <section id="einsatzgebiet" className="py-16 sm:py-24 bg-slate-950 text-white border-b border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        <div className="p-7 sm:p-10 rounded-3xl bg-slate-900/80 border border-white/10 shadow-xl relative">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-2.5">
                <MapPin size={12} className="text-emerald-400" />
                <span>Stationiert in Bochum (44803)</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Unser Einsatzgebiet &amp; Anfahrtszeiten
              </h2>
            </div>

            {/* Express Time Badge - Green for fastest arrival */}
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-xl self-start md:self-auto">
              <Clock size={14} />
              <span>Express vor Ort: ca. 20–40 Min.</span>
            </div>
          </div>

          {/* Natural Informational Narrative (No Kennzeichen) */}
          <div className="py-6 space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            <p>
              Zentral stationiert im Herzen von <strong>Bochum (44803)</strong>. Dank unserer direkten Autobahnanbindung erreichen wir Sie bei Pannen, Unfällen oder geplanten Fahrzeugüberführungen auf kürzestem Wege.
            </p>

            {/* Authentic German Blue Autobahn Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1 pb-1">
              <span className="text-xs text-slate-400 font-semibold mr-1">
                Direkte Autobahnanschlüsse:
              </span>
              {autobahnShields.map((ab) => (
                <span
                  key={ab}
                  className="inline-flex items-center justify-center px-3 py-1 rounded-md bg-[#003399] border border-blue-300/40 text-white font-black text-xs shadow-md tracking-wider"
                >
                  {ab}
                </span>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Wir bedienen das gesamte Stadtgebiet Bochum (Wattenscheid, Mitte, Langendreer, Weitmar, Linden, Querenburg, Harpen...), die Nachbarstädte der Metropole Ruhr (Essen, Dortmund, Herne, Gelsenkirchen, Witten...) sowie direkte Ferntransporte in ganz Nordrhein-Westfalen und bundesweit.
            </p>
          </div>

          {/* 3 Zone Indicators with Exact Color Coding: Green for Bochum, Light Blue for Ruhrgebiet */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
              
              {/* Bochum: GREEN (fastest 20-40 min) */}
              <span className="flex items-center gap-2 bg-slate-950/80 px-3 py-1.5 rounded-lg border border-white/5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Bochum Kernzone: 20–40 Min.</span>
              </span>

              {/* Ruhrgebiet: LIGHT BLUE (30-50 min) */}
              <span className="flex items-center gap-2 bg-slate-950/80 px-3 py-1.5 rounded-lg border border-white/5 font-medium">
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                <span>Ruhrgebiet: A40 / A43 / A448</span>
              </span>

              {/* NRW & Bundesweit: Punctual schedule */}
              <span className="flex items-center gap-2 bg-slate-950/80 px-3 py-1.5 rounded-lg border border-white/5 font-medium">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>NRW &amp; Bundesweit: Feste Termine</span>
              </span>
            </div>

            <Link
              href="/einsatzgebiet"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white hover:text-amber-400 transition-colors group flex-shrink-0"
            >
              <span>Alle Städte &amp; Strecken im Detail</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform rtl:rotate-180 text-amber-400" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
