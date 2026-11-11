'use client';

import React, { useState, useMemo, useRef } from 'react';
import { Link } from '@/i18n/routing';
import type { BlogArticle } from '@/data/blogArticles';
import { 
  Search, X, Clock, ArrowRight, Phone, MessageCircle, 
  ShieldCheck, Sparkles, Car, Truck, Wrench, BatteryCharging, 
  AlertTriangle, Fuel, Zap, FileText, CheckCircle2, ChevronRight,
  Flame, HelpCircle
} from 'lucide-react';

interface BlogExplorerProps {
  articles: BlogArticle[];
  locale: string;
}

const categoryFallbacks: Record<string, string> = {
  pkw: '/images/real/tow-truck-audi-clean-user.jpg',
  suv: '/images/real/tow-truck-bmw-detail.jpg',
  transporter: '/images/real/plateau-ramp-bochum.jpg',
  ueberfuehrung: '/images/real/tow-truck-bmw-ueberfuehrung.jpg',
  logistik: '/images/blog/warentransport-plateau-motor-paletten.jpg',
  'elektro-automatik': '/images/real/bmw_strapped_ramp.jpg',
  'autobahn-notfall': '/images/real/tow-truck-street.jpg',
  'versicherung-recht': '/images/blog/versicherung-schutzbrief-kostenuebernahme.jpg',
  'falsch-getankt': '/images/blog/falsch-getankt-tankstelle-sofortmassnahme.jpg',
  ladungssicherung: '/images/blog/ladungssicherung-gurte-vdi2700.jpg',
  'starthilfe-winter': '/images/real/noco-boost-starthilfe.jpg',
  'pannenhilfe-motorschaden': '/images/real/tow-truck-street.jpg',
  'kostenlose-beratung': '/images/real/tow-truck-audi-clean-user.jpg',
  sportwagen: '/images/real/tow-truck-audi-rs3-full.jpg',
};

export default function BlogExplorer({ articles, locale }: BlogExplorerProps) {
  const isAr = locale === 'ar';
  const isEn = locale === 'en';
  const currentLang = (locale === 'ar' ? 'ar' : locale === 'en' ? 'en' : 'de') as 'de' | 'ar' | 'en';

  const [activeTab, setActiveTab] = useState<'all' | 'notfall' | 'transport' | 'technik' | 'beratung'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Drag-to-scroll & Touch handling for Category Tabs on Desktop & Mobile
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasDraggedRef = useRef(false);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tabsContainerRef.current) return;
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    startXRef.current = e.pageX - tabsContainerRef.current.offsetLeft;
    scrollLeftRef.current = tabsContainerRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !tabsContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - tabsContainerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.4;
    if (Math.abs(x - startXRef.current) > 5) {
      hasDraggedRef.current = true;
    }
    tabsContainerRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDraggingRef.current = false;
  };

  const handleTabClick = (tabId: 'all' | 'notfall' | 'transport' | 'technik' | 'beratung') => {
    if (hasDraggedRef.current) {
      hasDraggedRef.current = false;
      return;
    }
    setActiveTab(tabId);
  };

  const categoryIcons: Record<string, React.ReactNode> = {
    pkw: <Car className="text-amber-400" size={16} />,
    suv: <ShieldCheck className="text-emerald-400" size={16} />,
    transporter: <Truck className="text-sky-400" size={16} />,
    ueberfuehrung: <Sparkles className="text-purple-400" size={16} />,
    logistik: <Sparkles className="text-amber-400" size={16} />,
    'elektro-automatik': <Zap className="text-amber-400" size={16} />,
    'autobahn-notfall': <AlertTriangle className="text-amber-400" size={16} />,
    'versicherung-recht': <FileText className="text-emerald-400" size={16} />,
    'falsch-getankt': <Fuel className="text-amber-400" size={16} />,
    'ladungssicherung': <ShieldCheck className="text-amber-400" size={16} />,
    'starthilfe-winter': <BatteryCharging className="text-amber-400" size={16} />,
    'pannenhilfe-motorschaden': <Wrench className="text-red-400" size={16} />,
    'kostenlose-beratung': <MessageCircle className="text-emerald-400" size={16} />,
    sportwagen: <Flame className="text-amber-400" size={16} />,
  };

  const tabs = [
    {
      id: 'all',
      label: isAr ? 'جميع الأدلة' : isEn ? 'All Guides' : 'Alle Ratgeber',
      icon: <Sparkles size={16} />,
      categories: [] as string[],
    },
    {
      id: 'notfall',
      label: isAr ? 'طوارئ وأعطال' : isEn ? 'Emergency & Breakdown' : 'Notfall & Pannenhilfe',
      icon: <AlertTriangle size={16} />,
      categories: ['pannenhilfe-motorschaden', 'starthilfe-winter', 'autobahn-notfall', 'falsch-getankt'],
    },
    {
      id: 'transport',
      label: isAr ? 'شحن ونقل سيارات' : isEn ? 'Car Transport' : 'Transporte & Überführung',
      icon: <Car size={16} />,
      categories: ['pkw', 'suv', 'transporter', 'ueberfuehrung', 'logistik', 'sportwagen'],
    },
    {
      id: 'technik',
      label: isAr ? 'السلامة والتلبيط' : isEn ? 'Tech & Safety' : 'Technik & Sicherung',
      icon: <Wrench size={16} />,
      categories: ['ladungssicherung', 'elektro-automatik', 'versicherung-recht'],
    },
    {
      id: 'beratung',
      label: isAr ? 'استشارة مجانية' : isEn ? 'Free Assessment' : 'Kostenlose Beratung',
      icon: <MessageCircle size={16} />,
      categories: ['kostenlose-beratung'],
    },
  ];

  // Filter articles based on active tab and search query
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const trans = article.translations[currentLang];
      
      // Tab filter
      const currentTabObj = tabs.find((t) => t.id === activeTab);
      if (currentTabObj && currentTabObj.categories.length > 0) {
        if (!currentTabObj.categories.includes(article.category)) {
          return false;
        }
      }

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const titleMatch = trans.title.toLowerCase().includes(query);
        const subMatch = trans.subtitle.toLowerCase().includes(query);
        const catMatch = article.categoryLabel[currentLang].toLowerCase().includes(query);
        return titleMatch || subMatch || catMatch;
      }

      return true;
    });
  }, [articles, activeTab, searchQuery, currentLang]);

  // Segment articles for modern magazine rhythm
  const heroArticle = filteredArticles[0];
  const duoArticles = filteredArticles.slice(1, 3);
  const remainingArticles = filteredArticles.slice(3);

  const getArticleImage = (article: BlogArticle) => {
    return article.featuredImage?.src || categoryFallbacks[article.category] || '/images/real/tow-truck-street.jpg';
  };

  return (
    <div className="space-y-12">
      
      {/* Search Bar & Smart Interactive Filter Chips */}
      <div className="bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-3xl p-4 sm:p-6 shadow-2xl space-y-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 rtl:left-auto rtl:right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                isAr
                  ? 'ابحث بالمواضيع (محرك، شتاء، بطارية، تلبيط، نقل...)'
                  : isEn
                  ? 'Search topics (engine, battery, transport, winter...)'
                  : 'Thema suchen (Motorschaden, Winter, Batterie, Gurte, Transport...)'
              }
              className="w-full bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm rounded-2xl pl-11 pr-10 rtl:pl-10 rtl:pr-11 py-3 focus:outline-none focus:border-amber-400/80 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Quick Counter */}
          <div className="text-xs text-slate-400 flex items-center gap-2 self-start md:self-center">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              {isAr
                ? `عرض ${filteredArticles.length} من أصل ${articles.length} دليلاً عملياً`
                : isEn
                ? `Showing ${filteredArticles.length} of ${articles.length} guides`
                : `${filteredArticles.length} von ${articles.length} Praxis-Ratgebern`}
            </span>
          </div>
        </div>

        {/* Category Tabs (Touch & Mouse-Drag friendly, No Scrollbar) */}
        <div
          ref={tabsContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className="flex items-center gap-2 overflow-x-auto py-1.5 px-0.5 no-scrollbar touch-scroll-container cursor-grab active:cursor-grabbing select-none"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabClick(tab.id as any)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer select-none active:scale-95 ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 ring-2 ring-amber-400/50'
                    : 'bg-slate-950/60 hover:bg-slate-800/80 text-slate-300 border border-white/5 hover:border-white/10'
                }`}
              >
                <span className="shrink-0">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Empty State */}
      {filteredArticles.length === 0 && (
        <div className="text-center py-20 bg-slate-900/40 rounded-3xl border border-white/10 p-8 max-w-lg mx-auto">
          <HelpCircle className="mx-auto text-amber-400 mb-4" size={48} />
          <h3 className="text-xl font-bold text-white mb-2">
            {isAr ? 'لم نعثر على مقالات مطابقة' : isEn ? 'No guides match your search' : 'Keine passenden Ratgeber gefunden'}
          </h3>
          <p className="text-sm text-slate-400 mb-6">
            {isAr
              ? 'جرّب البحث بكلمة أخرى أو إعادة تعيين الفلاتر.'
              : isEn
              ? 'Try different keywords or reset your filters.'
              : 'Versuchen Sie es mit einem anderen Begriff oder setzen Sie die Filter zurück.'}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveTab('all');
            }}
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
          >
            {isAr ? 'إعادة ضبط الفلاتر' : isEn ? 'Reset filters' : 'Filter zurücksetzen'}
          </button>
        </div>
      )}

      {/* 🌟 1. FEATURED HERO ARTICLE (Magazine Cover Feature) */}
      {heroArticle && (
        <section aria-label="Featured Story" className="relative">
          <Link
            href={`/blog/${heroArticle.slug}`}
            className="group block relative rounded-3xl overflow-hidden border border-amber-500/30 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950 hover:border-amber-400 transition-all duration-500 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
              
              {/* Visual Half with Real Photo */}
              <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] lg:min-h-[440px] overflow-hidden">
                <img
                  src={getArticleImage(heroArticle)}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent lg:bg-gradient-to-r rtl:lg:bg-gradient-to-l lg:from-transparent lg:to-slate-950/90" />
                
                {/* Floating Badges */}
                <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500 text-slate-950 text-xs font-black shadow-lg shadow-amber-500/30">
                    <Flame size={14} />
                    <span>{isAr ? 'دليل مميز وموصى به' : isEn ? 'Featured Guide' : 'Empfohlener Ratgeber'}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-white text-xs font-bold">
                    {categoryIcons[heroArticle.category]}
                    <span>{heroArticle.categoryLabel[currentLang]}</span>
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 rtl:left-auto rtl:right-4 flex items-center gap-2 text-xs font-medium text-slate-300 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                  <Clock size={13} className="text-amber-400" />
                  <span>{heroArticle.readTime}</span>
                  <span>•</span>
                  <span>{heroArticle.publishDate}</span>
                </div>
              </div>

              {/* Content Half */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 mb-3">
                    <Sparkles size={14} />
                    <span>{heroArticle.translations[currentLang].badge}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-white group-hover:text-amber-400 transition-colors leading-tight mb-4 tracking-tight">
                    {heroArticle.translations[currentLang].title}
                  </h2>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-4">
                    {heroArticle.translations[currentLang].subtitle}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-6 hidden sm:block">
                    {heroArticle.translations[currentLang].equipmentItems.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 size={15} className="text-amber-400 shrink-0 mt-0.5" />
                        <span><strong className="text-white">{item.name}:</strong> {item.highlight || item.description.slice(0, 70)}...</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Author & CTA Button */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black text-xs shadow-md">
                      WA
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{heroArticle.author}</div>
                      <div className="text-[11px] text-slate-400">{heroArticle.authorRole}</div>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-all shadow-md group-hover:shadow-amber-500/30 group-hover:scale-105 active:scale-95">
                    <span>{isAr ? 'قراءة الدليل' : isEn ? 'Read Guide' : 'Jetzt lesen'}</span>
                    <ArrowRight size={14} className="rtl:rotate-180" />
                  </span>
                </div>

              </div>

            </div>
          </Link>
        </section>
      )}

      {/* 🌟 2. DUO FEATURED CARDS (Bento Magazine Rhythm) */}
      {duoArticles.length > 0 && (
        <section aria-label="Top Featured Articles" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {duoArticles.map((article) => {
            const trans = article.translations[currentLang];
            return (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900/80 hover:border-amber-400/60 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* Image Header with Aspect Ratio */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <img
                      src={getArticleImage(article)}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    
                    {/* Floating Badges */}
                    <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-white text-xs font-bold">
                        {categoryIcons[article.category]}
                        <span>{article.categoryLabel[currentLang]}</span>
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 rtl:left-auto rtl:right-3 text-[11px] font-medium text-slate-300 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 flex items-center gap-1.5">
                      <Clock size={12} className="text-amber-400" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Body Text */}
                  <div className="p-6">
                    <div className="text-xs font-bold text-amber-400 mb-2">
                      {trans.badge}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors leading-snug mb-3">
                      {trans.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                      {trans.subtitle}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">{article.author}</span>
                  <span className="inline-flex items-center gap-1 font-bold text-amber-400 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                    <span>{isAr ? 'قراءة الدليل' : isEn ? 'Read Guide' : 'Leitfaden lesen'}</span>
                    <ArrowRight size={14} className="rtl:rotate-180" />
                  </span>
                </div>
              </Link>
            );
          })}
        </section>
      )}

      {/* 🌟 3. PERSONAL ADVISORY BRIDGE BANNER (Wassem Al Dalati Live Help) */}
      <section aria-label="Direct Phone Advice" className="relative rounded-3xl overflow-hidden border border-emerald-500/30 bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950/40 p-6 sm:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 blur-[100px] pointer-events-none" />
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
          
          <div className="flex items-center gap-5">
            <div className="relative shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-emerald-400/50 shadow-lg">
                <img
                  src="/images/real/tow-truck-audi-clean-user.jpg"
                  alt="Wassem Al Dalati - Abschleppdienst Direkt"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-2">
                <ShieldCheck size={14} />
                <span>{isAr ? 'استشارة هاتفية مجانية 100%' : isEn ? '100% Free Phone Advice' : '100% Kostenlose Beratung vor Ort'}</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                {isAr
                  ? 'متردد قبل السفر أو تواجه عطلاً مفاجئاً؟ تحدث مع وسيم مباشرة'
                  : isEn
                  ? 'Unsure before driving or facing a breakdown? Talk directly to Wassem'
                  : 'Unsicher vor der Fahrt oder plötzliche Panne? Sprechen Sie direkt mit Wassem'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                {isAr
                  ? 'أرسل فيديو أو صوت العطل عبر واتساب أو اتصل بي مباشرة: سأعطيك تقييماً ميكانيكياً صادقاً وسريعاً دون أي تكلفة.'
                  : isEn
                  ? 'Send a short video or audio of the sound via WhatsApp or call directly: Get an honest assessment without any obligation.'
                  : 'Schicken Sie ein Video des Geräusches per WhatsApp oder rufen Sie an: Ehrliche Ersteinschätzung aus 10 Jahren Praxis – völlig gratis.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full lg:w-auto shrink-0">
            <a
              href="tel:+4915565500442"
              className="flex-1 lg:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-all shadow-md active:scale-95"
            >
              <Phone size={16} />
              <span>{isAr ? 'اتصال: 0155 65500442' : '0155 65500442'}</span>
            </a>
            <a
              href="https://wa.me/4915565500442?text=Hallo%20Wassem,%20ich%20habe%20eine%20Frage%20zu%20einem%20Ger%C3%A4usch%20oder%20einer%20Panne."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 lg:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all shadow-md active:scale-95"
            >
              <MessageCircle size={16} />
              <span>{isAr ? 'واتساب مباشر' : 'WhatsApp'}</span>
            </a>
          </div>

        </div>
      </section>

      {/* 🌟 4. THE EDITORIAL MAGAZINE CARDS (Visual, Dynamic & Rich) */}
      {remainingArticles.length > 0 && (
        <section aria-label="More Guides">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <span>{isAr ? 'جميع الأدلة والتقارير الفنية' : isEn ? 'Technical Guides & Insights' : 'Weitere Praxis-Ratgeber & Fachberichte'}</span>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300">
                {remainingArticles.length}
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {remainingArticles.map((article) => {
              const trans = article.translations[currentLang];
              const icon = categoryIcons[article.category];

              return (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900/60 hover:bg-slate-900 hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-1"
                >
                  <div>
                    {/* Visual Card Image with 16:10 aspect ratio */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                      <img
                        src={getArticleImage(article)}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                      
                      {/* Floating Category Badge */}
                      <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-white text-[11px] font-bold">
                          {icon}
                          <span>{article.categoryLabel[currentLang]}</span>
                        </span>
                      </div>

                      {/* Read Time */}
                      <div className="absolute bottom-3 left-3 rtl:left-auto rtl:right-3 text-[11px] font-medium text-slate-300 bg-slate-950/80 backdrop-blur-md px-2 py-0.5 rounded-lg border border-white/10 flex items-center gap-1">
                        <Clock size={11} className="text-amber-400" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5">
                      <div className="text-[11px] font-bold text-amber-400/90 mb-2">
                        {trans.badge}
                      </div>
                      <h4 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors leading-snug mb-2 line-clamp-2">
                        {trans.title}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4">
                        {trans.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="px-5 py-3.5 border-t border-white/5 bg-slate-950/40 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-slate-400 font-medium">
                      {article.author}
                    </span>
                    <span className="inline-flex items-center gap-1 font-bold text-amber-400 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform text-xs">
                      <span>{isAr ? 'التفاصيل' : isEn ? 'Read' : 'Lesen'}</span>
                      <ArrowRight size={13} className="rtl:rotate-180" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

    </div>
  );
}
