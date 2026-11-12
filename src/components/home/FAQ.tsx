"use client";

import { useState, useMemo, useRef } from 'react';
import { useLocale } from 'next-intl';
import { 
  ChevronDown, HelpCircle, AlertTriangle, Search, X, 
  Phone, ShieldCheck, Sparkles 
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
      ctaText: "Rufen Sie uns direkt an! Unser erfahrener Fahrer Adam gibt Ihnen sofort eine ehrliche und 100 % kostenlose Ersteinschätzung.",
      ctaCall: "24h Notruf: 0155 65500442",
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
      ctaText: "اتصل بنا مباشرة! يقدم لك سائقنا الخبير آدم وفريقنا استشارة هاتفية فورية، أمينة ومجانية 100%.",
      ctaCall: "اتصل بالطوارئ: 0155 65500442",
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
      ctaText: "Call us directly! Our experienced driver Adam provides an honest, 100% free initial evaluation over the phone.",
      ctaCall: "Call Emergency Dispatch: 0155 65500442",
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

  // Google FAQPage Schema Markup
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
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-amber-400 mb-3">
            <Sparkles size={15} className="text-amber-400 shrink-0" />
            <span>{ui.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            {ui.title}
          </h2>
          <p className="mt-3 text-slate-300 text-xs sm:text-base leading-relaxed">
            {ui.subtitle}
          </p>
        </div>

        {/* Search & Filter Controls - Open Editorial Layout (Zero Outer Box) */}
        <div className="mb-8 space-y-4">
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
              className={`w-full py-3.5 ${isAr ? 'pr-11 pl-10' : 'pl-11 pr-10'} bg-slate-900/90 border border-white/10 rounded-xl text-white text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:border-amber-400 transition-all`}
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

          {/* Category Filter Tabs */}
          <div
            ref={tabsContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className="flex items-center gap-2 overflow-x-auto sm:flex-wrap py-1 no-scrollbar touch-scroll-container cursor-grab active:cursor-grabbing select-none"
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
                  className={`whitespace-nowrap px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer select-none ${
                    isActive 
                      ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20' 
                      : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  {cat[currentLang]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Questions Counter */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
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

        {/* Clean Editorial Divided Accordion List (No Separate Box per Question, No Nested Boxes) */}
        {filteredFaqs.length > 0 ? (
          <div className="border-t border-b border-white/10 divide-y divide-white/10">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const content = faq[currentLang];

              return (
                <div key={faq.id} className="py-5 sm:py-6 transition-colors hover:bg-white/[0.01]">
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-start gap-3 flex-grow">
                      {faq.isWarning ? (
                        <AlertTriangle size={18} className="text-amber-400 shrink-0 mt-1" />
                      ) : (
                        <HelpCircle size={18} className="text-amber-400/80 shrink-0 mt-1" />
                      )}
                      <div className="space-y-1">
                        <span className={`font-bold text-sm sm:text-base block leading-snug transition-colors ${isOpen ? 'text-amber-400' : 'text-white'}`}>
                          {content.question}
                        </span>
                        {content.highlight && (
                          <span className="inline-block text-[11px] font-bold text-amber-400/90 uppercase tracking-wider">
                            {content.highlight}
                          </span>
                        )}
                      </div>
                    </div>

                    <ChevronDown
                      size={18}
                      className={`shrink-0 mt-1 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-amber-400' : 'text-slate-400'
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="mt-3 pl-7 rtl:pl-0 rtl:pr-7 text-slate-300 text-xs sm:text-sm leading-relaxed">
                      <p>{content.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-12 border-t border-b border-white/10 text-center">
            <HelpCircle size={32} className="text-slate-500 mx-auto mb-2" />
            <p className="text-slate-300 text-sm font-semibold">{ui.noResults}</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-2 text-xs font-bold text-amber-400 hover:underline cursor-pointer"
            >
              {ui.resetSearch}
            </button>
          </div>
        )}

        {/* Editorial Bottom Callout (Open Layout, No Box Clutter) */}
        <div className="mt-10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-black text-white">
              {ui.ctaTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              {ui.ctaText}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto flex-shrink-0">
            <a
              href="tel:+4915565500442"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black text-xs sm:text-sm shadow-lg shadow-red-600/25 transition-all cursor-pointer text-center"
            >
              <Phone size={16} className="fill-white" />
              <span>{ui.ctaCall}</span>
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm transition-all cursor-pointer text-center"
            >
              <span>{isAr ? "طلب الخدمة الآن ↓" : "Zur Preisanfrage ↓"}</span>
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
