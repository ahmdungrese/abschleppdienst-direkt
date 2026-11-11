"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';
import { Phone, Menu, X, MessageCircle, Calculator, Truck, ShieldCheck, MapPin, HelpCircle, User, Zap, BookOpen } from 'lucide-react';

export default function Header() {
  const t = useTranslations('Header');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Brand Logo - returns to Homepage */}
        <Link href="/" className="flex items-center gap-3 group" onClick={closeMenu} aria-label="Abschleppdienst Direkt Startseite">
          <div className="h-11 sm:h-14 w-auto flex items-center">
            <img
              src="/branding/abschleppdienst_direkt_logo_horizontal.png"
              alt="Abschleppdienst Direkt - 24h Abschleppdienst & Pannenhilfe"
              width="240"
              height="50"
              className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
            />
          </div>
        </Link>

        {/* Navigation & Language (Desktop & Mobile) */}
        <div className="flex items-center gap-2.5 sm:gap-5">
          <nav className="hidden xl:flex items-center gap-6 font-semibold text-sm text-slate-300">
            <Link href="/" className="hover:text-amber-400 transition-colors">{t('home')}</Link>
            <Link href="/leistungen" className="hover:text-amber-400 transition-colors">{t('services')}</Link>
            <Link href="/rechner" className="hover:text-amber-400 transition-colors">{t('calculator')}</Link>
            <Link href="/einsatzgebiet" className="hover:text-amber-400 transition-colors">{t('area')}</Link>
            <Link href="/blog" className="hover:text-amber-400 transition-colors">{t('blog')}</Link>
            <Link href="/#faq" className="hover:text-amber-400 transition-colors">FAQ</Link>
            <Link href="/ueber-uns" className="hover:text-amber-400 transition-colors">{t('about')}</Link>
            <Link href="/#kontakt" className="hover:text-amber-400 transition-colors">{t('contact')}</Link>
          </nav>
          
          {/* Direct Phone Contact in Header (Desktop & Tablet only - Mobile has it in Hero & Drawer) */}
          <a
            href="tel:+4915565500442"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/40 text-slate-200 hover:text-white transition-all text-xs font-bold"
          >
            <Phone size={13} className="text-amber-400" />
            <span>0155 65500442</span>
          </a>

          {/* Language Switcher */}
          <div className="sm:border-l sm:border-white/10 sm:pl-4">
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-amber-400 flex items-center justify-center transition-colors border border-white/10 shrink-0"
            aria-label="Navigation öffnen"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950/98 border-b border-amber-500/30 px-4 py-6 shadow-2xl animate-fadeIn text-sm">
          <div className="space-y-3 font-semibold text-slate-200">
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 hover:text-amber-400 transition-colors"
            >
              <Truck size={18} className="text-amber-400" />
              <span>{t('home')}</span>
            </Link>

            <Link
              href="/leistungen"
              onClick={closeMenu}
              className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 hover:text-amber-400 transition-colors bg-white/5 border border-white/5"
            >
              <div className="flex items-center gap-3">
                <ShieldCheck size={18} className="text-amber-400" />
                <span>{t('services')}</span>
              </div>
              <span className="text-[10px] bg-amber-500 text-slate-950 font-black px-2 py-0.5 rounded-full">Alle</span>
            </Link>

            <Link
              href="/rechner"
              onClick={closeMenu}
              className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 hover:text-amber-400 transition-colors bg-white/5 border border-white/5"
            >
              <div className="flex items-center gap-3">
                <Calculator size={18} className="text-amber-400" />
                <span>{t('calculator')}</span>
              </div>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">Online</span>
            </Link>

            <Link
              href="/einsatzgebiet"
              onClick={closeMenu}
              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 hover:text-amber-400 transition-colors"
            >
              <MapPin size={18} className="text-amber-400" />
              <span>{t('area')} (Bochum &amp; NRW)</span>
            </Link>

            <Link
              href="/blog"
              onClick={closeMenu}
              className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 hover:text-amber-400 transition-colors bg-white/5 border border-white/5"
            >
              <div className="flex items-center gap-3">
                <BookOpen size={18} className="text-amber-400" />
                <span>{t('blog')}</span>
              </div>
              <span className="text-[10px] bg-amber-500/20 text-amber-300 font-bold px-2 py-0.5 rounded-full border border-amber-500/30">Praxis</span>
            </Link>

            <Link
              href="/#faq"
              onClick={closeMenu}
              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 hover:text-amber-400 transition-colors"
            >
              <HelpCircle size={18} className="text-amber-400" />
              <span>Häufige Fragen (FAQ)</span>
            </Link>

            <Link
              href="/ueber-uns"
              onClick={closeMenu}
              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 hover:text-amber-400 transition-colors"
            >
              <User size={18} className="text-amber-400" />
              <span>{t('about')}</span>
            </Link>

            <Link
              href="/#kontakt"
              onClick={closeMenu}
              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 hover:text-amber-400 transition-colors"
            >
              <Phone size={18} className="text-amber-400" />
              <span>{t('contact')} &amp; Notruf</span>
            </Link>
          </div>

          {/* Quick Direct Actions inside Mobile Drawer */}
          <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-2 gap-3">
            <a
              href="tel:+4915565500442"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black py-3 rounded-xl text-xs shadow-md"
            >
              <Phone size={14} className="fill-slate-950" />
              <span>Sofort anrufen</span>
            </a>

            <a
              href="https://wa.me/4915565500442?text=Hallo%20Wassem%2C%20ich%20brauche%20Hilfe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl text-xs shadow-md"
            >
              <MessageCircle size={14} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}

    </header>
  );
}
