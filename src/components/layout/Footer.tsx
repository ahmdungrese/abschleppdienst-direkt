"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Truck, ShieldCheck, Phone } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-slate-950 text-slate-400 py-14 border-t border-white/10 text-sm">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-white/10">
          
          {/* Col 1: Brand */}
          <div>
            <Link href="/" className="inline-block mb-3.5 group">
              <img
                src="/branding/abschleppdienst_direkt_logo_horizontal.png"
                alt="Abschleppdienst Direkt Logo"
                width="220"
                height="46"
                className="h-11 w-auto object-contain group-hover:scale-105 transition-transform drop-shadow"
              />
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t('desc')}
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-amber-400 font-bold">
              <ShieldCheck size={16} className="text-emerald-400" />
              <span>Fachgerechte 4-Punkt-Sicherung nach VDI 2700</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider mb-3.5">
              Seitenübersicht
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/" className="hover:text-amber-400 transition-colors">Startseite</Link></li>
              <li><Link href="/ueber-uns" className="hover:text-amber-400 transition-colors">Über uns &amp; Unternehmen</Link></li>
              <li><Link href="/leistungen" className="hover:text-amber-400 transition-colors">Alle Leistungen &amp; Fachdetails</Link></li>
              <li><Link href="/blog" className="hover:text-amber-400 transition-colors text-amber-400 font-semibold">Ratgeber &amp; Praxis-Blog</Link></li>
              <li><Link href="/starthilfe-bochum" className="hover:text-amber-400 transition-colors text-red-400 font-semibold">Profi-Starthilfe (NOCO Boost)</Link></li>
              <li><Link href="/einsatzgebiet" className="hover:text-amber-400 transition-colors">Einsatzgebiet &amp; Autobahnen</Link></li>
              <li><Link href="/rechner" className="hover:text-amber-400 transition-colors">Interaktiver Kostenrechner</Link></li>
              <li><Link href="/#galerie" className="hover:text-amber-400 transition-colors">Einsätze vor Ort</Link></li>
              <li><Link href="/#kontakt" className="hover:text-amber-400 transition-colors">24h Kontakt &amp; Notruf</Link></li>
            </ul>
          </div>

          {/* Col 3: Legal & Tax */}
          <div>
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider mb-3.5">
              Rechtliche Angaben
            </h4>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Angemeldetes Kleingewerbe nach § 19 UStG bei der Stadt Bochum.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-semibold">
              <Link
                href="/impressum"
                className="text-slate-300 hover:text-amber-400 underline underline-offset-2 transition-colors"
              >
                {t('impressum')}
              </Link>
              <span>•</span>
              <Link
                href="/datenschutz"
                className="text-slate-300 hover:text-amber-400 underline underline-offset-2 transition-colors"
              >
                {t('datenschutz')}
              </Link>
            </div>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-3">
          <div>
            © {new Date().getFullYear()} Abschleppdienst Direkt. {t('rights')}
          </div>
          <div className="flex items-center gap-1.5">
            <Phone size={13} className="text-amber-400" />
            <span>Notruf-Rufbereitschaft:</span>
            <a href="tel:+4915565500442" className="text-amber-400 font-black hover:underline ml-1">0155 65500442</a>
          </div>
        </div>
      </div>
    </footer>
  );
}