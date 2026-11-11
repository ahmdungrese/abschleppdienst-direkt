"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ShieldCheck, Wrench, BadgeCheck, Clock4, ArrowRight } from 'lucide-react';

export default function TrustBadges() {
  const t = useTranslations('TrustBadges');

  const badges = [
    {
      icon: ShieldCheck,
      title: t('b1Title'),
      desc: t('b1Desc'),
      highlight: t('b1Tag'),
      cta: t('b1Cta'),
      href: "/leistungen/fahrzeugueberfuehrung",
    },
    {
      icon: Wrench,
      title: t('b2Title'),
      desc: t('b2Desc'),
      highlight: t('b2Tag'),
      cta: t('b2Cta'),
      href: "/leistungen/abschleppdienst-werkstatt",
    },
    {
      icon: BadgeCheck,
      title: t('b3Title'),
      desc: t('b3Desc'),
      highlight: t('b3Tag'),
      cta: t('b3Cta'),
      href: "/rechner",
    },
    {
      icon: Clock4,
      title: t('b4Title'),
      desc: t('b4Desc'),
      highlight: t('b4Tag'),
      cta: t('b4Cta'),
      href: "/leistungen/pannenhilfe-starthilfe",
    }
  ];

  return (
    <section className="py-10 bg-slate-950 border-b border-white/10 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {badges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <Link
                key={idx}
                href={badge.href}
                className="glass-card p-5 rounded-2xl border border-white/5 hover:border-amber-500/50 hover:bg-slate-900/80 transition-all flex flex-col justify-between group active:scale-[0.98] cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors shadow-sm">
                      <Icon size={20} />
                    </div>
                    <span className="text-[10px] font-extrabold text-amber-400/90 uppercase tracking-wider bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
                      {badge.highlight}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-white group-hover:text-amber-300 transition-colors">
                    {badge.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    {badge.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-amber-400 group-hover:text-amber-300 transition-colors">
                  <span>{badge.cta}</span>
                  <ArrowRight size={14} className="rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
