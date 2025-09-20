'use client';

import { Button } from '@/components/ui/button';
import { Phone, Calendar, Clock, Shield } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Χρειάζεστε Ασθενοφόρο Τώρα;
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Είμαστε διαθέσιμοι 24/7 για επείγοντα και προγραμματισμένες διακομιδές
            σε όλη τη Θεσσαλονίκη. Καλέστε μας τώρα ή κάντε κράτηση online.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg bg-white hover:bg-gray-100 text-red-600 px-8 py-6"
              asChild
            >
              <a href={`tel:${COMPANY_INFO.phone}`}>
                <Phone className="mr-3 w-6 h-6" />
                ΕΠΕΙΓΟΝ: {COMPANY_INFO.phone}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg bg-transparent border-white text-white hover:bg-white hover:text-red-600 px-8 py-6"
            >
              <Calendar className="mr-3 w-6 h-6" />
              Προγραμματίστε Διακομιδή
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 text-white">
            <div className="flex flex-col items-center">
              <Clock className="w-12 h-12 mb-4 text-white/80" />
              <h3 className="text-xl font-semibold mb-2">Άμεση Ανταπόκριση</h3>
              <p className="text-white/80 text-center">
                Μέσος χρόνος άφιξης {COMPANY_INFO.responseTime.center} λεπτά στο κέντρο
                και {COMPANY_INFO.responseTime.suburbs} λεπτά στα προάστια
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Shield className="w-12 h-12 mb-4 text-white/80" />
              <h3 className="text-xl font-semibold mb-2">Πλήρης Ασφάλεια</h3>
              <p className="text-white/80 text-center">
                Πιστοποιημένο προσωπικό ΕΚΑΒ με σύγχρονο
                ιατρικό εξοπλισμό τύπου C
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Phone className="w-12 h-12 mb-4 text-white/80" />
              <h3 className="text-xl font-semibold mb-2">24/7 Διαθεσιμότητα</h3>
              <p className="text-white/80 text-center">
                Είμαστε εδώ κάθε μέρα, κάθε ώρα,
                365 ημέρες το χρόνο για εσάς
              </p>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/80 text-lg">
              Σε επείγουσα κατάσταση κάθε λεπτό μετράει.
              <strong className="text-white"> Μην διστάσετε να καλέσετε!</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}