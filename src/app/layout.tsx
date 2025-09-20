import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import PhoneButton from "@/components/widgets/PhoneButton";
import AvailabilityWidget from "@/components/widgets/AvailabilityWidget";
import { SEO_DEFAULTS, COMPANY_INFO } from "@/lib/constants";

const inter = Inter({ subsets: ["latin", "greek"] });

export const metadata: Metadata = {
  title: {
    default: SEO_DEFAULTS.title,
    template: `%s | ${COMPANY_INFO.name}`,
  },
  description: SEO_DEFAULTS.description,
  keywords: SEO_DEFAULTS.keywords,
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ambulance-thessaloniki.gr'),
  openGraph: {
    type: 'website',
    locale: 'el_GR',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: COMPANY_INFO.name,
    title: SEO_DEFAULTS.title,
    description: SEO_DEFAULTS.description,
    images: [
      {
        url: SEO_DEFAULTS.ogImage,
        width: 1200,
        height: 630,
        alt: 'Ιδιωτικό Ασθενοφόρο Θεσσαλονίκη',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_DEFAULTS.title,
    description: SEO_DEFAULTS.description,
    images: [SEO_DEFAULTS.ogImage],
    creator: '@ambulance_thess',
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
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  category: 'health',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Toaster />

        {/* Floating Widgets */}
        <PhoneButton position="bottom-left" />
        <AvailabilityWidget />
      </body>
    </html>
  );
}
