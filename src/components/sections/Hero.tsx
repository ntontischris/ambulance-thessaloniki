'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, Calendar, Shield, Star, Clock } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="relative min-h-[700px] flex items-center">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder for ambulance background image */}
        <div className="w-full h-full bg-gradient-to-br from-red-600 via-red-500 to-blue-600"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            24ωρο Ιδιωτικό Ασθενοφόρο Θεσσαλονίκη
            <span className="block text-2xl md:text-3xl mt-3 text-gray-200 font-normal">
              Άμεση Ανταπόκριση σε {COMPANY_INFO.responseTime.center} Λεπτά
            </span>
          </h1>

          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Πιστοποιημένο προσωπικό ΕΚΑΒ, σύγχρονος εξοπλισμός και 13+ χρόνια εμπειρίας
            στη διακομιδή ασθενών. Εξυπηρετούμε όλη τη Θεσσαλονίκη 24/7.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button
              size="lg"
              className="text-lg bg-red-600 hover:bg-red-700 animate-pulse px-8 py-6"
              asChild
            >
              <a href={`tel:${COMPANY_INFO.phone}`}>
                <Phone className="mr-3 w-6 h-6" />
                ΚΑΛΕΣΤΕ ΤΩΡΑ: {COMPANY_INFO.phone}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg bg-white/90 hover:bg-white border-white px-8 py-6"
            >
              <Calendar className="mr-3 w-6 h-6" />
              Κράτηση Online
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-3">
            <Badge
              variant="secondary"
              className="bg-white/90 text-gray-900 px-4 py-2 text-sm font-medium"
            >
              <Shield className="w-4 h-4 mr-2" />
              Πιστοποίηση ΕΚΑΒ
            </Badge>
            <Badge
              variant="secondary"
              className="bg-white/90 text-gray-900 px-4 py-2 text-sm font-medium"
            >
              <Clock className="w-4 h-4 mr-2" />
              13+ Έτη Εμπειρίας
            </Badge>
            <Badge
              variant="secondary"
              className="bg-white/90 text-gray-900 px-4 py-2 text-sm font-medium"
            >
              <Star className="w-4 h-4 mr-2 fill-current text-yellow-500" />
              4.9★ (127 Reviews)
            </Badge>
            <Badge
              variant="secondary"
              className="bg-white/90 text-gray-900 px-4 py-2 text-sm font-medium"
            >
              ✓ Όλες οι Ασφάλειες
            </Badge>
          </div>

          {/* Quick Stats */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">5000+</div>
              <div className="text-gray-300 text-sm">Διακομιδές</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{COMPANY_INFO.responseTime.center}min</div>
              <div className="text-gray-300 text-sm">Μέσος Χρόνος</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-gray-300 text-sm">Διαθεσιμότητα</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">13+</div>
              <div className="text-gray-300 text-sm">Έτη Εμπειρίας</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-6 right-6 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">2 Ασθενοφόρα Διαθέσιμα Τώρα</span>
          </div>
          <div className="text-xs text-gray-300">
            Μέσος χρόνος άφιξης: {COMPANY_INFO.responseTime.center} λεπτά
          </div>
        </div>
      </div>
    </section>
  );
}