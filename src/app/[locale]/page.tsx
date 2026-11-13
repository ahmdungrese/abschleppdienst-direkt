import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/home/Hero';
import ExpertiseSection from '@/components/home/ExpertiseSection';
import Services from '@/components/home/Services';
import Area from '@/components/home/Area';
import AboutWassem from '@/components/home/AboutWassem';
import Gallery from '@/components/home/Gallery';
// import CustomerReviews from '@/components/home/CustomerReviews';
import FAQ from '@/components/home/FAQ';
import Contact from '@/components/home/Contact';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <LocalBusinessSchema />

      <main className="flex-grow flex flex-col bg-slate-950">
        <Hero />
        <Services />
        <Area />
        <AboutWassem />
        <Gallery />
        {/* Temporarily hidden: placeholder texts. Re-enable once real Google reviews are available. */}
        {/* <CustomerReviews /> */}
        <ExpertiseSection />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}
