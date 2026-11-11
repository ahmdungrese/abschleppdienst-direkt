"use client";

import { useState, useMemo, useRef } from 'react';
import { useLocale } from 'next-intl';
import { 
  ChevronDown, HelpCircle, AlertTriangle, Search, X, 
  Phone, MessageCircle, ShieldCheck, Sparkles 
} from 'lucide-react';
import { faqsData, faqCategories, FAQCategory } from '@/data/faqs';

export default function FAQ() {
  const locale = useLocale();
  const currentLang = (locale === 'ar' ? 'ar' : locale === 'en' ? 'en' : 'de') as 'de' | 'ar' | 'en';
  const isAr = currentLang === 'ar';

  const [activeCategory, setActiveCategory] = useState<FAQCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Drag-to-scroll & Touch handling for Category Tabs
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const [hasDragged, setHasDragged] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!tabsContainerRef.current) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - tabsContainerRef.current.offsetLeft;
    scrollLeftRef.current = tabsContainerRef.current.scrollLeft;
    setHasDragged(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !tabsContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - tabsContainerRef.current.offsetLeft;
    const walk = x - startXRef.current;
    if (Math.abs(walk) > 5) {
      setHasDragged(true);
    }
    tabsContainerRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleMouseLeave = () => {
    isDraggingRef.current = false;
  };

  const handleTabClick = (catId: FAQCategory) => {
    if (hasDragged) {
      setHasDragged(false);
      return;
    }
    setActiveCategory(catId);
    setOpenIndex(0);
  };

  // Localized UI strings
  const ui = {
    de: {
      badge: "Wissensdatenbank & FAQ",
      title: "Wichtige Fragen zu Pannenhilfe, Bergung & Überführung",
      subtitle: "Klare, rechtlich und technisch fundierte Antworten aus der täglichen Praxis auf A40, A43, A448 und im gesamten Ruhrgebiet.",
      searchPlaceholder: "Frage suchen (z. B. Falsch getankt, Tesla, Autobahn, Schutzbrief, TÜV, Kosten)...",
      noResults: "Keine passende Frage gefunden.",
      resetSearch: "Alle Fragen anzeigen",
      ctaTitle: "Ihre persönliche Frage war nicht dabei?",
      ctaText: "Rufen Sie uns direkt an! Inhaber Wassem Al Dalati gibt Ihnen sofort eine ehrliche und 100 % kostenlose Ersteinschätzung.",
      ctaCall: "Jetzt Notruf anrufen: 0155 65500442",
      ctaWhatsApp: "WhatsApp-Anfrage",
      showingCount: "Fragen angezeigt"
    },
    ar: {
      badge: "قاعدة المعرفة والأسئلة الشائعة",
      title: "أهم الأسئلة الشائعة حول خدمات السحب والمساعدة على الطريق",
      subtitle: "إجابات واضحة ودقيقة تقنياً وقانونياً مستخلصة من واقع خبرتنا اليومية على طرق الأوتوبان A40 وA43 وA448 وفي منطقة الرور.",
      searchPlaceholder: "ابحث عن سؤالك (مثلاً: بنزين خطأ، تسلا، أوتوبان، التأمين، TÜV، تكاليف)...",
      noResults: "لم يتم العثور على سؤال يطابق بحثك.",
      resetSearch: "عرض كافة الأسئلة",
      ctaTitle: "هل لديك سؤال خاص لم تجده هنا؟",
      ctaText: "اتصل بنا مباشرة! يقدم لك الخبير وسيم الدالاتي استشارة هاتفية فورية، أمينة ومجانية 100%.",
      ctaCall: "اتصل بالطوارئ: 0155 65500442",
      ctaWhatsApp: "مراسلة عبر واتساب",
      showingCount: "سؤال معروض"
    },
    en: {
      badge: "Knowledge Base & FAQ",
      title: "Frequently Asked Questions about Towing & Recovery",
      subtitle: "Clear, technically accurate answers derived from real operations on Autobahn A40, A43, A448, and across the Ruhr region.",
      searchPlaceholder: "Search FAQ (e.g. wrong fuel, Tesla, motorway, insurance, TÜV, costs)...",
      noResults: "No matching questions found.",
      resetSearch: "Show all questions",
      ctaTitle: "Haven't found your specific question?",
      ctaText: "Call us directly! Owner Wassem Al Dalati provides an honest, 100% free initial evaluation over the phone.",
      ctaCall: "Call Emergency Dispatch: 0155 65500442",
      ctaWhatsApp: "WhatsApp Inquiry",
      showingCount: "questions shown"
    }
  }[currentLang];

  // Filtered FAQs based on active category tab and search input
  const filteredFaqs = useMemo(() => {
    return faqsData.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      const content = item[currentLang];
      return (
        content.question.toLowerCase().includes(q) ||
        content.answer.toLowerCase().includes(q) ||
        content.highlight.toLowerCase().includes(q)
      );
    });
  }, [activeCategory, searchQuery, currentLang]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Google FAQPage Schema Markup (Strictly follows schema.org & Google Search Central Guidelines)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqsData.map(item => ({
      "@type": "Question",
      "name": item[currentLang].question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item[currentLang].answer
      }
    }))
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-slate-950 text-white border-b border-white/10 relative overflow-hidden" dir={isAr ? "rtl" : "ltr"}>
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles size={13} className="text-amber-400" />
            <span>{ui.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {ui.title}
          </h2>
          <p className="mt-3 text-slate-300 text-xs sm:text-base leading-relaxed">
            {ui.subtitle}
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <div className="relative flex items-center">
            <Search className={`absolute ${isAr ? 'right-4' : 'left-4'} text-slate-400 pointer-events-none`} size={18} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setOpenIndex(0);
              }}
              placeholder={ui.searchPlaceholder}
              className={`w-full py-3.5 ${isAr ? 'pr-11 pl-10' : 'pl-11 pr-10'} bg-slate-900/90 border border-white/10 rounded-2xl text-white text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/50 transition-all shadow-inner`}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className={`absolute ${isAr ? 'left-3' : 'right-3'} p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors`}
                aria-label="Clear search"
              >
                <X size={15} />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Tabs (Touch & Drag friendly, No Scrollbar) */}
        <div className="relative mb-8">
          <div
            ref={tabsContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className="flex items-center gap-2 overflow-x-auto sm:flex-wrap sm:justify-center py-2 px-1 no-scrollbar touch-scroll-container cursor-grab active:cursor-grabbing select-none scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {faqCategories.map(cat => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleTabClick(cat.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border select-none ${
                    isActive 
                      ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/20 font-bold scale-[1.02]' 
                      : 'bg-slate-900/80 text-slate-300 border-white/10 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {cat[currentLang]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Questions Counter & Quick Status */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-4 px-1">
          <span>
            {filteredFaqs.length} {ui.showingCount}
          </span>
          {searchQuery && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="text-amber-400 hover:underline cursor-pointer"
            >
              {ui.resetSearch}
            </button>
          )}
        </div>

        {/* Accordion List */}
        {filteredFaqs.length > 0 ? (
          <div className="space-y-3.5">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const content = faq[currentLang];

              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen 
                      ? 'border-amber-500/60 bg-slate-900/95 shadow-xl shadow-amber-500/5' 
                      : 'border-white/10 bg-slate-900/40 hover:border-white/20 hover:bg-slate-900/70'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer transition-colors"
                  >
                    <div className="flex items-start gap-3 flex-grow">
                      {faq.isWarning ? (
                        <div className="p-1 rounded-md bg-amber-500/10 border border-amber-500/30 flex-shrink-0 mt-0.5">
                          <AlertTriangle size={18} className="text-amber-400" />
                        </div>
                      ) : (
                        <div className="p-1 rounded-md bg-white/5 border border-white/10 flex-shrink-0 mt-0.5">
                          <HelpCircle size={18} className="text-slate-400" />
                        </div>
                      )}
                      <div className="space-y-1">
                        <span className="font-bold text-sm sm:text-base text-white block leading-snug">
                          {content.question}
                        </span>
                        {content.highlight && !isOpen && (
                          <span className="inline-block text-[11px] font-semibold text-amber-400/90 bg-amber-500/10 px-2 py-0.5 rounded">
                            {content.highlight}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all flex-shrink-0 ${
                      isOpen 
                        ? 'rotate-180 bg-amber-500 text-slate-950 font-bold shadow-md' 
                        : 'bg-white/5 text-slate-400 hover:text-white'
                    }`}>
                      <ChevronDown size={18} />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-6 pt-2 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/5 bg-slate-950/40">
                      {content.highlight && (
                        <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-md mb-3">
                          <ShieldCheck size={13} />
                          <span>{content.highlight}</span>
                        </div>
                      )}
                      <p className="text-slate-200 leading-relaxed font-normal">
                        {content.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 px-4 rounded-2xl border border-white/10 bg-slate-900/30">
            <HelpCircle size={36} className="text-slate-500 mx-auto mb-3" />
            <p className="text-slate-300 text-sm font-semibold">{ui.noResults}</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-3 text-xs font-bold text-amber-400 hover:underline cursor-pointer"
            >
              {ui.resetSearch}
            </button>
          </div>
        )}

        {/* Free Consultation CTA Banner */}
        <div className="mt-14 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-500/5 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <Sparkles size={18} className="text-amber-400 flex-shrink-0" />
              <span>{ui.ctaTitle}</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              {ui.ctaText}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto flex-shrink-0">
            <a
              href="tel:+4915565500442"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-amber-500/20 transition-all cursor-pointer text-center"
            >
              <Phone size={16} />
              <span>{ui.ctaCall}</span>
            </a>
            <a
              href="https://wa.me/4915565500442"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm border border-white/10 transition-all cursor-pointer text-center"
            >
              <MessageCircle size={16} className="text-emerald-400" />
              <span>{ui.ctaWhatsApp}</span>
            </a>
          </div>
        </div>

        {/* Google FAQPage Schema Markup (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema)
          }}
        />

      </div>
    </section>
  );
}
