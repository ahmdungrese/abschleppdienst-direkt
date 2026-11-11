import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BRAND } from '@/config/brand';
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.url),
  title: {
    default: `${BRAND.name} | 24h Abschleppdienst, Pannenhilfe & Überführung`,
    template: `%s | ${BRAND.name}`
  },
  description: `${BRAND.name} (${BRAND.slogan}): Ihr inhabergeführter 24h Abschleppdienst, Pannenhilfe & Fahrzeugüberführung in Bochum, im Ruhrgebiet & ganz NRW. Schneller Direkttransport von A nach B, Motorschadenservice und Vor-Ort Starthilfe auf A40, A43 & A448.`,
  keywords: [
    "Abschleppdienst Direkt",
    "Abschleppdienst Bochum",
    "Pannenhilfe Bochum",
    "Abschleppdienst 44803 Bochum",
    "24h Abschleppdienst Ruhrgebiet",
    "Fahrzeugüberführung A nach B",
    "Auto überführen NRW",
    "Abschleppen A40 A43 A448",
    "Starthilfe Bochum",
    "Transport zum Autoplatz"
  ],
  authors: [{ name: BRAND.name }],
  creator: BRAND.name,
  publisher: BRAND.name,
  formatDetection: {
    telephone: true,
    date: false,
    address: true,
    email: true,
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  alternates: {
    canonical: '/',
    languages: {
      'de-DE': '/de',
      'ar': '/ar',
      'en': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: BRAND.url,
    siteName: BRAND.name,
    title: `${BRAND.name} | 24h Abschleppdienst, Pannenhilfe & Überführung`,
    description: 'Schnell. Einfach. Fair. Inhabergeführte Pannenhilfe, Fahrzeugüberführung von A nach B und sichere Bergung in Bochum, im Ruhrgebiet & ganz NRW.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${BRAND.name} - 24h Abschleppdienst & Pannenhilfe`
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BRAND.name} | 24h Abschleppdienst, Pannenhilfe & Überführung`,
    description: 'Schnell. Einfach. Fair. Inhabergeführte Pannenhilfe und Fahrzeugtransport in Bochum & ganz NRW.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'google-site-verification-placeholder',
  },
};

export const dynamic = 'force-dynamic';

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html
      lang={locale}
      dir={dir}
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col font-sans bg-gray-50 text-slate-900">
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
