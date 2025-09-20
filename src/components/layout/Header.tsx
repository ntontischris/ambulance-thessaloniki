'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🚑</span>
            <span className="font-bold text-xl text-gray-900">
              {COMPANY_INFO.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/emergency"
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Επείγον
            </Link>
            <Link
              href="/scheduled"
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Προγραμματισμένες
            </Link>
            <Link
              href="/international"
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Διεθνείς
            </Link>
            <Link
              href="/pricing"
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Τιμές
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Επικοινωνία
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              className="hidden lg:flex items-center"
              asChild
            >
              <a href={`tel:${COMPANY_INFO.phone}`}>
                <Phone className="w-4 h-4 mr-2" />
                {COMPANY_INFO.phone}
              </a>
            </Button>

            <Button
              size="sm"
              className="bg-red-600 hover:bg-red-700 animate-pulse"
              asChild
            >
              <a href={`tel:${COMPANY_INFO.emergencyPhone}`}>
                ΚΑΛΕΣΤΕ ΤΩΡΑ
              </a>
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col p-4 space-y-3">
            <Link
              href="/emergency"
              className="py-2 text-gray-700 hover:text-red-600 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Επείγον Ασθενοφόρο
            </Link>
            <Link
              href="/scheduled"
              className="py-2 text-gray-700 hover:text-red-600 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Προγραμματισμένες Μεταφορές
            </Link>
            <Link
              href="/international"
              className="py-2 text-gray-700 hover:text-red-600 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Διεθνείς Μεταφορές
            </Link>
            <Link
              href="/special-needs"
              className="py-2 text-gray-700 hover:text-red-600 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Ειδικές Ανάγκες
            </Link>
            <Link
              href="/pricing"
              className="py-2 text-gray-700 hover:text-red-600 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Τιμοκατάλογος
            </Link>
            <Link
              href="/contact"
              className="py-2 text-gray-700 hover:text-red-600 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Επικοινωνία
            </Link>

            <div className="pt-3 border-t">
              <Button className="w-full mb-2" asChild>
                <a href={`tel:${COMPANY_INFO.phone}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  {COMPANY_INFO.phone}
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}