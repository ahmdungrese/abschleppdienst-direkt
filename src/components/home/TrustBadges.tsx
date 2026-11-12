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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {badges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <Link
                key={idx}
                href={badge.href}
                className="pt-6 sm:pt-0 sm:px-6 first:pt-0 first:pl-0 last:pr-0 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-extrabold uppercase tracking-wider mb-2">
                    <Icon size={16} />
                    <span>{badge.highlight}</span>
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-white group-hover:text-amber-400 transition-colors">
                    {badge.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    {badge.desc}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-amber-400 group-hover:text-amber-300 transition-colors">
                  <span>{badge.cta}</span>
                  <ArrowRight size={13} className="rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
