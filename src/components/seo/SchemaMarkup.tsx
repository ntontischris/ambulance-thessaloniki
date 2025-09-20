'use client';

import { COMPANY_INFO, SERVICES, AREAS, TESTIMONIALS } from '@/lib/constants';

interface SchemaMarkupProps {
  type: 'organization' | 'localBusiness' | 'service' | 'area' | 'breadcrumbs';
  data?: any;
}

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  const generateSchema = () => {
    switch (type) {
      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: COMPANY_INFO.name,
          url: process.env.NEXT_PUBLIC_SITE_URL,
          logo: `${process.env.NEXT_PUBLIC_SITE_URL}/images/logo.png`,
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: COMPANY_INFO.phone,
            contactType: 'Emergency Services',
            availableLanguage: ['Greek', 'English'],
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: COMPANY_INFO.address,
            addressLocality: 'Thessaloniki',
            postalCode: '54XXX',
            addressCountry: 'GR',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: COMPANY_INFO.coordinates.lat,
            longitude: COMPANY_INFO.coordinates.lng,
          },
          sameAs: [
            'https://www.facebook.com/ambulance-thessaloniki',
            'https://www.instagram.com/ambulance_thessaloniki',
          ],
        };

      case 'localBusiness':
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': `${process.env.NEXT_PUBLIC_SITE_URL}/#business`,
          name: COMPANY_INFO.name,
          image: `${process.env.NEXT_PUBLIC_SITE_URL}/images/ambulance-hero.jpg`,
          telephone: COMPANY_INFO.phone,
          email: COMPANY_INFO.email,
          url: process.env.NEXT_PUBLIC_SITE_URL,
          description: 'Ιδιωτικό ασθενοφόρο στη Θεσσαλονίκη με 24ωρη κάλυψη, πιστοποιημένο προσωπικό ΕΚΑΒ και άμεση ανταπόκριση για επείγουσες και προγραμματισμένες διακομιδές.',
          address: {
            '@type': 'PostalAddress',
            streetAddress: COMPANY_INFO.address,
            addressLocality: 'Θεσσαλονίκη',
            addressRegion: 'Κεντρική Μακεδονία',
            postalCode: '54XXX',
            addressCountry: 'GR',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: COMPANY_INFO.coordinates.lat,
            longitude: COMPANY_INFO.coordinates.lng,
          },
          openingHours: ['Mo-Su 00:00-23:59'],
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '127',
            bestRating: '5',
            worstRating: '1',
          },
          review: TESTIMONIALS.map(testimonial => ({
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: testimonial.name,
            },
            reviewRating: {
              '@type': 'Rating',
              ratingValue: testimonial.rating,
              bestRating: '5',
              worstRating: '1',
            },
            reviewBody: testimonial.text,
            datePublished: testimonial.date,
          })),
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Υπηρεσίες Ασθενοφόρου',
            itemListElement: Object.values(SERVICES).map((service, index) => ({
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: service.title,
                description: service.description,
              },
              price: service.basePrice,
              priceCurrency: 'EUR',
              availability: 'https://schema.org/InStock',
              url: `${process.env.NEXT_PUBLIC_SITE_URL}${service.url}`,
            })),
          },
          areaServed: Object.values(AREAS).map(area => ({
            '@type': 'GeoCircle',
            geoMidpoint: {
              '@type': 'GeoCoordinates',
              latitude: area.coordinates.lat,
              longitude: area.coordinates.lng,
            },
            geoRadius: '10000', // 10km radius
            name: area.name,
          })),
          serviceType: [
            'Emergency Medical Services',
            'Patient Transport',
            'Medical Taxi',
            'Ambulance Services',
          ],
          paymentAccepted: ['Cash', 'Credit Card', 'Insurance'],
          currenciesAccepted: 'EUR',
          keywords: 'ιδιωτικό ασθενοφόρο, διακομιδή ασθενών, 24ωρο ασθενοφόρο, επείγουσα διακομιδή, Θεσσαλονίκη',
        };

      case 'service':
        const service = data || SERVICES.emergency;
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.title,
          description: service.description,
          provider: {
            '@type': 'LocalBusiness',
            name: COMPANY_INFO.name,
            telephone: COMPANY_INFO.phone,
            url: process.env.NEXT_PUBLIC_SITE_URL,
          },
          areaServed: {
            '@type': 'City',
            name: 'Θεσσαλονίκη',
            addressCountry: 'GR',
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: service.title,
            itemListElement: service.features.map((feature: string, index: number) => ({
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: feature,
              },
              price: service.basePrice,
              priceCurrency: 'EUR',
            })),
          },
          offers: {
            '@type': 'Offer',
            price: service.basePrice,
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            validFrom: new Date().toISOString(),
          },
        };

      case 'area':
        const area = data;
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: `Ιδιωτικό Ασθενοφόρο ${area.name}`,
          description: `24ωρες υπηρεσίες ιδιωτικού ασθενοφόρου στην περιοχή ${area.name}. Μέσος χρόνος άφιξης ${area.responseTime} λεπτά.`,
          provider: {
            '@type': 'LocalBusiness',
            name: COMPANY_INFO.name,
            telephone: COMPANY_INFO.phone,
          },
          areaServed: {
            '@type': 'Place',
            name: area.name,
            geo: {
              '@type': 'GeoCoordinates',
              latitude: area.coordinates.lat,
              longitude: area.coordinates.lng,
            },
            address: {
              '@type': 'PostalAddress',
              addressLocality: area.name,
              addressRegion: 'Θεσσαλονίκη',
              addressCountry: 'GR',
              postalCode: area.postalCodes?.[0] || '54XXX',
            },
          },
          offers: {
            '@type': 'Offer',
            description: `Άμεση ανταπόκριση σε ${area.responseTime} λεπτά`,
            availability: 'https://schema.org/InStock',
            areaServed: area.name,
          },
        };

      case 'breadcrumbs':
        const breadcrumbs = data || [];
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs.map((crumb: any, index: number) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: crumb.name,
            item: `${process.env.NEXT_PUBLIC_SITE_URL}${crumb.url}`,
          })),
        };

      default:
        return null;
    }
  };

  const schema = generateSchema();

  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

// Specialized schema components for different page types
export function OrganizationSchema() {
  return <SchemaMarkup type="organization" />;
}

export function LocalBusinessSchema() {
  return <SchemaMarkup type="localBusiness" />;
}

export function ServiceSchema({ service }: { service: any }) {
  return <SchemaMarkup type="service" data={service} />;
}

export function AreaSchema({ area }: { area: any }) {
  return <SchemaMarkup type="area" data={area} />;
}

export function BreadcrumbSchema({ breadcrumbs }: { breadcrumbs: Array<{ name: string; url: string }> }) {
  return <SchemaMarkup type="breadcrumbs" data={breadcrumbs} />;
}

// FAQ Schema for service pages
export function FAQSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

// Emergency Service Schema
export function EmergencyServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'EmergencyService',
    name: COMPANY_INFO.name,
    telephone: COMPANY_INFO.phone,
    url: process.env.NEXT_PUBLIC_SITE_URL,
    serviceType: 'Ambulance Service',
    description: '24ωρο ιδιωτικό ασθενοφόρο με άμεση ανταπόκριση για επείγουσες διακομιδές',
    areaServed: {
      '@type': 'City',
      name: 'Θεσσαλονίκη',
      addressCountry: 'GR',
    },
    availableService: Object.values(SERVICES).map(service => ({
      '@type': 'MedicalService',
      name: service.title,
      description: service.description,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Emergency Services',
      itemListElement: Object.values(SERVICES).map(service => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
        },
        price: service.basePrice,
        priceCurrency: 'EUR',
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}