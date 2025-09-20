import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Star } from 'lucide-react';
import { COMPANY_INFO, AREAS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🚑</span>
              <span className="font-bold text-xl">{COMPANY_INFO.name}</span>
            </div>
            <p className="text-gray-300 mb-4">
              24ωρο ιδιωτικό ασθενοφόρο στη Θεσσαλονίκη με πιστοποιημένο προσωπικό
              και σύγχρονο εξοπλισμό.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-300">4.9/5 (127 αξιολογήσεις)</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Υπηρεσίες</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/emergency" className="text-gray-300 hover:text-white transition-colors">
                  Επείγουσες Διακομιδές
                </Link>
              </li>
              <li>
                <Link href="/scheduled" className="text-gray-300 hover:text-white transition-colors">
                  Προγραμματισμένες Μεταφορές
                </Link>
              </li>
              <li>
                <Link href="/international" className="text-gray-300 hover:text-white transition-colors">
                  Διεθνείς Διακομιδές
                </Link>
              </li>
              <li>
                <Link href="/special-needs" className="text-gray-300 hover:text-white transition-colors">
                  Ειδικές Ανάγκες
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                  Τιμοκατάλογος
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Περιοχές</h3>
            <ul className="space-y-2">
              {Object.values(AREAS).slice(0, 5).map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/${area.slug}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/areas" className="text-red-400 hover:text-red-300 transition-colors">
                  Όλες οι περιοχές →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Επικοινωνία</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-red-400" />
                <div>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-white font-medium hover:text-red-400 transition-colors"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                  <div className="text-sm text-gray-400">Κεντρικός αριθμός</div>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-red-400" />
                <div>
                  <a
                    href={`tel:${COMPANY_INFO.emergencyPhone}`}
                    className="text-red-400 font-medium hover:text-red-300 transition-colors"
                  >
                    {COMPANY_INFO.emergencyPhone}
                  </a>
                  <div className="text-sm text-gray-400">Επείγοντα</div>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-red-400" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-red-400 mt-0.5" />
                <div className="text-gray-300">{COMPANY_INFO.address}</div>
              </div>

              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-red-400" />
                <div className="text-gray-300">24/7 Διαθεσιμότητα</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} {COMPANY_INFO.name}. Όλα τα δικαιώματα διατηρούνται.
              </p>
            </div>

            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Πολιτική Απορρήτου
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Όροι Χρήσης
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>

          {/* Certification */}
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm">
              Πιστοποιημένη υπηρεσία από το ΕΚΑΒ | Άδεια λειτουργίας: ΑΡ.ΠΡΩΤ. XXXX/2012
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}