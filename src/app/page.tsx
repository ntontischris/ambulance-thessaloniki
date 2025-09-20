import Hero from '@/components/sections/Hero';
import ServiceCards from '@/components/sections/ServiceCards';
import Testimonials from '@/components/sections/Testimonials';
import CTASection from '@/components/sections/CTASection';
import { OrganizationSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Metadata } from 'next';
import { SEO_DEFAULTS } from '@/lib/constants';

export const metadata: Metadata = {
  title: SEO_DEFAULTS.title,
  description: SEO_DEFAULTS.description,
  keywords: SEO_DEFAULTS.keywords.join(', '),
  openGraph: {
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
    locale: 'el_GR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_DEFAULTS.title,
    description: SEO_DEFAULTS.description,
    images: [SEO_DEFAULTS.ogImage],
  },
};

export default function Home() {
  return (
    <>
      {/* SEO Schema Markup */}
      <OrganizationSchema />
      <LocalBusinessSchema />

      <main className="min-h-screen">
        <Hero />
        <ServiceCards />
        <Testimonials />
        <CTASection />
      </main>
    </>
  );
}
