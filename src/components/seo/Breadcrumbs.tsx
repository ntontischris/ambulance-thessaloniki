'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbSchema } from './SchemaMarkup';

interface BreadcrumbItem {
  name: string;
  url: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

// Page name mappings for Greek URLs
const PAGE_NAMES: Record<string, string> = {
  '': 'Αρχική',
  'emergency': 'Επείγουσες Διακομιδές',
  'scheduled': 'Προγραμματισμένες Μεταφορές',
  'international': 'Διεθνείς Μεταφορές',
  'special-needs': 'Ειδικές Ανάγκες',
  'timokatalogos': 'Τιμοκατάλογος',
  'contact': 'Επικοινωνία',
  'blog': 'Blog',
  'asthenoforo-kentro': 'Ασθενοφόρο Κέντρο',
  'asthenoforo-kalamaria': 'Ασθενοφόρο Καλαμαριά',
  'asthenoforo-pylaia': 'Ασθενοφόρο Πυλαία',
  'asthenoforo-neapoli': 'Ασθενοφόρο Νεάπολη',
  'asthenoforo-toumba': 'Ασθενοφόρο Τούμπα',
  'asthenoforo-eukarpia': 'Ασθενοφόρο Ευκαρπία',
};

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const pathname = usePathname();

  // Generate breadcrumbs from pathname if items not provided
  const breadcrumbs = items || generateBreadcrumbs(pathname);

  if (breadcrumbs.length <= 1) {
    return null; // Don't show breadcrumbs for home page only
  }

  return (
    <>
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <nav
        className={`py-4 ${className}`}
        aria-label="Breadcrumb navigation"
      >
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((item, index) => (
              <li key={item.url} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                )}

                {item.current ? (
                  <span className="text-gray-600 font-medium" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="text-gray-500 hover:text-gray-700 transition-colors flex items-center"
                  >
                    {index === 0 && <Home className="w-4 h-4 mr-1" />}
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}

function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [
    {
      name: 'Αρχική',
      url: '/',
    },
  ];

  let currentPath = '';

  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === segments.length - 1;

    breadcrumbs.push({
      name: PAGE_NAMES[segment] || formatSegmentName(segment),
      url: currentPath,
      current: isLast,
    });
  });

  return breadcrumbs;
}

function formatSegmentName(segment: string): string {
  // Handle dynamic segments like [slug]
  if (segment.startsWith('[') && segment.endsWith(']')) {
    return 'Σελίδα';
  }

  // Convert kebab-case to title case
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Specialized breadcrumb components for specific page types
export function ServiceBreadcrumbs({ serviceName, serviceUrl }: { serviceName: string; serviceUrl: string }) {
  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Αρχική', url: '/' },
    { name: 'Υπηρεσίες', url: '/#services' },
    { name: serviceName, url: serviceUrl, current: true },
  ];

  return <Breadcrumbs items={breadcrumbs} />;
}

export function AreaBreadcrumbs({ areaName, areaUrl }: { areaName: string; areaUrl: string }) {
  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Αρχική', url: '/' },
    { name: 'Περιοχές Κάλυψης', url: '/#areas' },
    { name: areaName, url: areaUrl, current: true },
  ];

  return <Breadcrumbs items={breadcrumbs} />;
}

export function BlogBreadcrumbs({ postTitle, postSlug }: { postTitle?: string; postSlug?: string }) {
  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Αρχική', url: '/' },
    { name: 'Blog', url: '/blog' },
  ];

  if (postTitle && postSlug) {
    breadcrumbs.push({
      name: postTitle,
      url: `/blog/${postSlug}`,
      current: true,
    });
  }

  return <Breadcrumbs items={breadcrumbs} />;
}