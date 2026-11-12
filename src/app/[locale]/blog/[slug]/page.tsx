import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/routing';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { getArticleBySlug, getAllArticleSlugs, blogArticles } from '@/data/blogArticles';
import {
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  Clock,
  ArrowLeft,
  ArrowRight,
  Truck,
  Wrench,
  AlertTriangle,
  HelpCircle,
  Check,
  UserCheck
} from 'lucide-react';
import type { Metadata } from 'next';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const currentLang = (locale === 'ar' ? 'ar' : locale === 'en' ? 'en' : 'de') as 'de' | 'ar' | 'en';
  const trans = article.translations[currentLang];

  return {
    title: `${trans.metaTitle}`,
    description: trans.metaDescription,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: `${trans.title} | Abschleppdienst Direkt`,
      description: trans.subtitle,
      url: `https://abschleppdienst-direkt.de/${locale}/blog/${slug}`,
      type: 'article',
      publishedTime: article.publishDate,
      authors: [article.author],
      images: article.featuredImage ? [article.featuredImage.src] : ['/branding/abschleppdienst_direkt_logo_horizontal.png'],
    },
  };
}

export default async function BlogDetailPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const article = getArticleBySlug(slug);
  if (!article) {
    notFound();
  }

  const isAr = locale === 'ar';
  const isEn = locale === 'en';
  const currentLang = (locale === 'ar' ? 'ar' : locale === 'en' ? 'en' : 'de') as 'de' | 'ar' | 'en';
  const trans = article.translations[currentLang];

  // Article & FAQ JSON-LD Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: trans.title,
    description: trans.metaDescription,
    image: article.featuredImage ? `https://abschleppdienst-direkt.de${article.featuredImage.src}` : undefined,
    author: {
      '@type': 'Person',
      name: article.author,
      jobTitle: article.authorRole,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Abschleppdienst Direkt',
      logo: {
        '@type': 'ImageObject',
        url: 'https://abschleppdienst-direkt.de/branding/abschleppdienst_direkt_logo_horizontal.png',
      },
    },
    datePublished: article.publishDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://abschleppdienst-direkt.de/${locale}/blog/${slug}`,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: trans.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  // Other articles for recommendation
  const otherArticles = blogArticles.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: isAr ? 'الرئيسية' : isEn ? 'Home' : 'Startseite',
            url: `https://abschleppdienst-direkt.de/${locale}`,
          },
          {
            name: isAr ? 'دليل الخبرة والمدونة' : isEn ? 'Guides & Blog' : 'Ratgeber & Blog',
            url: `https://abschleppdienst-direkt.de/${locale}/blog`,
          },
          {
            name: trans.title,
            url: `https://abschleppdienst-direkt.de/${locale}/blog/${slug}`,
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-slate-950 text-white py-12 sm:py-20 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-5 w-96 h-96 bg-red-600/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          
          {/* Breadcrumb / Back button */}
          <div className="mb-8 flex items-center gap-2 text-xs text-slate-400">
            <Link
              href="/blog"
              className="hover:text-amber-400 transition-colors flex items-center gap-1 font-semibold"
            >
              <ArrowLeft size={14} className="rtl:rotate-180" />
              <span>{isAr ? 'العودة لجميع الأدلة' : isEn ? 'Back to All Guides' : 'Zurück zur Ratgeber-Übersicht'}</span>
            </Link>
            <span>/</span>
            <span className="text-slate-300 truncate max-w-xs">{trans.badge}</span>
          </div>

          {/* Article Header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-amber-400">
                <Wrench size={14} className="text-amber-400 shrink-0" />
                <span>{trans.badge}</span>
              </span>

              <span className="flex items-center gap-1.5 text-xs text-slate-400">
                <Clock size={13} />
                <span>{article.readTime}</span>
              </span>

              <span className="text-xs text-slate-500">•</span>

              <span className="text-xs text-slate-400">
                {article.authorRole}: <strong className="text-slate-200">{article.author}</strong>
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
              {trans.title}
            </h1>

            {/* Editorial Lead Paragraph */}
            <div className="border-l-4 border-amber-500 pl-4 py-1 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-4 my-6">
              <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-normal">
                {trans.subtitle}
              </p>
            </div>

            {/* Featured Photo if available */}
            {article.featuredImage && (
              <figure className="my-8 rounded-3xl overflow-hidden border border-white/10 bg-slate-900/80 shadow-2xl">
                <img
                  src={article.featuredImage.src}
                  alt=""
                  className="w-full h-auto max-h-[500px] object-cover"
                  width={1200}
                  height={675}
                  loading="eager"
                />
              </figure>
            )}
          </header>

          <hr className="border-white/10 my-10" />

          {/* Intro Section: The Real World Experience */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-3xl font-extrabold text-white mb-5 flex items-center gap-2.5">
              <ShieldCheck className="text-amber-400 shrink-0" size={26} />
              <span>{trans.introHeadline}</span>
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {trans.introParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>

          <hr className="border-white/10 my-10" />

          {/* Section: Equipment Brought on Board (Pure Editorial Layout - No Clickable Boxes) */}
          <section className="mb-12">
            <div className="mb-8">
              <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight mb-2.5 flex items-center gap-2.5">
                <Truck className="text-amber-400" size={26} />
                <span>{trans.equipmentTitle}</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                {trans.equipmentSubtitle}
              </p>
            </div>

            <div className="space-y-7">
              {trans.equipmentItems.map((item, idx) => (
                <div
                  key={idx}
                  className="relative pl-5 border-l-2 border-slate-700/80 rtl:pl-0 rtl:pr-5 rtl:border-l-0 rtl:border-r-2"
                >
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {idx + 1}. {item.name}
                    </h3>
                    {item.highlight && (
                      <span className="text-xs font-semibold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                        {item.highlight}
                      </span>
                    )}
                  </div>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-white/10 my-10" />

          {/* Section: Step-by-Step Procedure (Editorial Timeline Flow) */}
          <section className="mb-12">
            <div className="mb-8">
              <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight mb-2.5 flex items-center gap-2.5">
                <CheckCircle2 className="text-amber-400" size={26} />
                <span>{trans.processTitle}</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                {trans.processSubtitle}
              </p>
            </div>

            <div className="space-y-7">
              {trans.processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="relative pl-5 border-l-2 border-amber-500/50 rtl:pl-0 rtl:pr-5 rtl:border-l-0 rtl:border-r-2"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {isAr ? `الخطوة ${step.number}: ` : `Schritt ${step.number}: `}
                      <span>{step.title}</span>
                    </h3>
                    {step.focusNote && (
                      <span className="text-xs font-semibold text-amber-400/90">
                        ✓ {step.focusNote}
                      </span>
                    )}
                  </div>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Expert Knowledge / Legal Tips */}
          {trans.expertKnowledgeItems && trans.expertKnowledgeItems.length > 0 && (
            <>
              <hr className="border-white/10 my-10" />
              <section className="mb-12">
                <h2 className="text-xl sm:text-3xl font-extrabold text-white mb-2.5 flex items-center gap-2.5">
                  <AlertTriangle className="text-amber-400" size={26} />
                  <span>{trans.expertKnowledgeTitle}</span>
                </h2>
                <p className="text-sm sm:text-base text-slate-400 mb-6 leading-relaxed">
                  {trans.expertKnowledgeSubtitle}
                </p>

                <div className="space-y-6">
                  {trans.expertKnowledgeItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="pl-5 border-l-2 border-amber-500/70 rtl:pl-0 rtl:pr-5 rtl:border-l-0 rtl:border-r-2 text-slate-300"
                    >
                      <h3 className="font-bold text-base mb-1.5 text-amber-400">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}

          <hr className="border-white/10 my-10" />

          {/* Section: Frequently Asked Questions (Clean Editorial Q&A List) */}
          {trans.faqs && trans.faqs.length > 0 && (
            <section className="mb-14">
              <h2 className="text-xl sm:text-3xl font-extrabold text-white mb-8 flex items-center gap-2.5">
                <HelpCircle className="text-amber-400" size={26} />
                <span>
                  {isAr ? 'أسئلة شائعة وإجابات مباشرة' : isEn ? 'Frequently Asked Questions' : 'Häufig gestellte Fragen (FAQ)'}
                </span>
              </h2>

              <div className="space-y-6">
                {trans.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="pb-6 border-b border-white/10 last:border-b-0 last:pb-0"
                  >
                    <h3 className="font-bold text-white text-base sm:text-lg mb-2 flex items-start gap-2.5">
                      <span className="text-amber-400 font-black">Q:</span>
                      <span>{faq.question}</span>
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed pl-6 rtl:pl-0 rtl:pr-6">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <hr className="border-white/10 my-12" />

          {/* Reassuring Human CTA Section at the end of the article — Open Editorial Layout */}
          <section id="artikel-anfrage" className="mb-14 py-8 border-t border-b border-white/10 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
                  <UserCheck size={14} />
                  <span>
                    {isAr ? 'بدون وسيط • مباشرة مع Abschleppdienst Direkt' : 'Direkter Kontakt • Abschleppdienst Direkt'}
                  </span>
                </span>
                
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                  {trans.ctaTitle}
                </h2>
                
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {trans.ctaText}
                </p>

                <p className="text-xs text-slate-400 font-medium">
                  {trans.ctaSubtext}
                </p>
              </div>

              <div className="flex flex-col gap-3 w-full sm:w-auto shrink-0">
                <a
                  href="tel:+4915565500442"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-black text-sm transition-all shadow-lg shadow-red-600/25 active:scale-95"
                >
                  <Phone size={18} className="fill-white" />
                  <span>{trans.ctaButtonCall}</span>
                </a>

                <a
                  href={`https://wa.me/4915565500442?text=Hallo%20Abschleppdienst%20Direkt,%20ich%20habe%20eine%20Anfrage%20zu:%20${encodeURIComponent(trans.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white border border-white/15 hover:border-amber-400/40 font-bold text-sm transition-all shadow-lg active:scale-95"
                >
                  <MessageCircle size={18} className="text-amber-400" />
                  <span>{trans.ctaButtonWhatsApp}</span>
                </a>
              </div>
            </div>
          </section>

          {/* Other Articles Recommendation — Clean Divided Rows */}
          <section className="pt-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
              {isAr ? 'أدلة إرشادية أخرى قد تهمك' : isEn ? 'Other Helpful Guides' : 'Weitere interessante Ratgeber:'}
            </h2>

            <div className="divide-y divide-white/10 border-t border-b border-white/10">
              {otherArticles.map((other) => {
                const oTrans = other.translations[currentLang];
                return (
                  <Link
                    key={other.slug}
                    href={`/blog/${other.slug}`}
                    className="group py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 transition-colors hover:bg-white/[0.01]"
                  >
                    <div>
                      <span className="text-[11px] font-bold text-amber-400 mb-0.5 block">
                        {other.categoryLabel[currentLang]}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                        {oTrans.title}
                      </h3>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs text-amber-400 font-semibold shrink-0">
                      <span>{isAr ? 'قراءة المزيد' : 'Mehr erfahren'}</span>
                      <ArrowRight size={13} className="rtl:rotate-180" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
