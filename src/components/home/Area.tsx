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
        
        {/* Header - Open Editorial Flow (No Outer Box) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-amber-400 mb-3">
              <MapPin size={15} className="text-amber-400 shrink-0" />
              <span>Stationiert in Bochum (44803)</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Unser Einsatzgebiet &amp; Anfahrtszeiten
            </h2>
          </div>

          {/* Express Time Badge - Unified Brand Gold Minimalist */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-amber-400 self-start md:self-auto">
            <Clock size={15} className="text-amber-400 shrink-0" />
            <span>Express vor Ort: ca. 20–40 Min.</span>
          </div>
        </div>

        {/* Natural Informational Narrative */}
        <div className="py-8 space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
          <p>
            Zentral stationiert im Herzen von <strong className="text-white">Bochum (44803)</strong>. Dank unserer direkten Autobahnanbindung erreichen wir Sie bei Pannen, Unfällen oder geplanten Fahrzeugüberführungen auf kürzestem Wege.
          </p>

          {/* Authentic German Blue Autobahn Badges */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1 pb-1">
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

        {/* 3 Zone Indicators - Clean Divided Typography without Nested Boxes */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-300">
            <span className="flex items-center gap-2 font-semibold">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span><strong className="text-white">Bochum Kernzone:</strong> 20–40 Min. (Pannenhilfe &amp; Notfall)</span>
            </span>

            <span className="flex items-center gap-2 font-semibold">
              <span className="w-2 h-2 rounded-full bg-amber-400/70"></span>
              <span><strong className="text-white">Ruhrgebiet:</strong> A40 / A43 / A448</span>
            </span>

            <span className="flex items-center gap-2 font-semibold">
              <span className="w-2 h-2 rounded-full bg-slate-400"></span>
              <span><strong className="text-white">Bundesweit:</strong> Fahrzeugüberführung von A nach B</span>
            </span>
          </div>

          <Link
            href="/einsatzgebiet"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors group flex-shrink-0"
          >
            <span>Alle Städte &amp; Strecken im Detail</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform rtl:rotate-180" />
          </Link>
        </div>

      </div>
    </section>
  );
}
