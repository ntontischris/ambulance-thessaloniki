'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Clock, MapPin, Phone, Star, Users } from 'lucide-react';
import PriceCalculator from '@/components/widgets/PriceCalculator';
import { ServiceBreadcrumbs } from '@/components/seo/Breadcrumbs';
import { ServiceSchema, FAQSchema } from '@/components/seo/SchemaMarkup';
import { motion } from 'framer-motion';

const servicePackages = [
  {
    id: 'basic',
    name: 'Basic',
    subtitle: 'Βασικές διακομιδές',
    price: '€45',
    duration: '/διαδρομή',
    description: 'Ιδανικό για προγραμματισμένες μεταφορές εντός πόλης',
    features: [
      'Πιστοποιημένο προσωπικό ΕΚΑΒ',
      'Βασικός ιατρικός εξοπλισμός',
      'Ασφάλεια μεταφοράς',
      'Κάλυψη 24/7',
      'Μέσος χρόνος άφιξης: 15-20 λεπτά'
    ],
    popular: false,
    buttonText: 'Κλείσε Ραντεβού',
    color: 'border-gray-200'
  },
  {
    id: 'premium',
    name: 'Premium',
    subtitle: 'Επείγουσες διακομιδές',
    price: '€75',
    duration: '/διαδρομή',
    description: 'Για επείγουσες καταστάσεις με προτεραιότητα',
    features: [
      'Άμεση ανταπόκριση σε 5-10 λεπτά',
      'Προηγμένος ιατρικός εξοπλισμός',
      'Παραϊατρικό προσωπικό ΕΚΑΒ',
      'Επικοινωνία με νοσοκομείο',
      'Προτεραιότητα στην κίνηση',
      'Αναφορά πορείας σε συγγενείς'
    ],
    popular: true,
    buttonText: 'Επείγουσα Κλήση',
    color: 'border-blue-500'
  },
  {
    id: 'vip',
    name: 'VIP',
    subtitle: 'Premium υπηρεσίες',
    price: '€120',
    duration: '/διαδρομή',
    description: 'Υπηρεσίες υψηλού επιπέδου με πλήρη υποστήριξη',
    features: [
      'Άμεση ανταπόκριση σε 3-5 λεπτά',
      'Ιατρός συνοδός (επιλογή)',
      'Πλήρης ιατρικός εξοπλισμός ICU',
      'Συνοδεία συγγενούς',
      'Προεργασία με νοσοκομείο',
      'Υπηρεσίες concierge',
      'Διεθνείς μεταφορές'
    ],
    popular: false,
    buttonText: 'VIP Υπηρεσία',
    color: 'border-gold-400'
  }
];

const additionalServices = [
  {
    name: 'Συνοδεία Συγγενούς',
    price: '€15',
    description: 'Επιπλέον θέση για συνοδό'
  },
  {
    name: 'Ιατρός Συνοδός',
    price: '€85',
    description: 'Ιατρός με εξειδίκευση για τη διαδρομή'
  },
  {
    name: 'Νυχτερινό Τιμολόγιο',
    price: '+25%',
    description: '22:00 - 06:00 (Δευτ-Παρ)'
  },
  {
    name: 'Σαββατοκύριακα',
    price: '+30%',
    description: 'Σάββατο μετά 14:00 & Κυριακή'
  },
  {
    name: 'Αργίες',
    price: '+50%',
    description: 'Επίσημες αργίες'
  },
  {
    name: 'Διεθνείς Μεταφορές',
    price: 'Κατόπιν συνεννόησης',
    description: 'Εκτός Ελλάδας με πλήρη τεκμηρίωση'
  }
];

const faqs = [
  {
    question: 'Πώς υπολογίζεται το κόστος της διακομιδής;',
    answer: 'Το κόστος εξαρτάται από την απόσταση, τον τύπο υπηρεσίας, την ώρα (νυχτερινό/ημερήσιο) και τυχόν επιπλέον υπηρεσίες όπως ιατρός συνοδός.'
  },
  {
    question: 'Δέχεστε ασφάλειες;',
    answer: 'Ναι, συνεργαζόμαστε με όλες τις μεγάλες ασφαλιστικές εταιρείες. Επικοινωνήστε μαζί μας για να μάθετε τη κάλυψη της ασφάλειάς σας.'
  },
  {
    question: 'Υπάρχουν έκπτωσες για τακτικούς πελάτες;',
    answer: 'Προσφέρουμε πακέτα και εκπτώσεις για τακτικούς πελάτες, ιδρύματα υγείας και μαζικές κρατήσεις. Επικοινωνήστε για περισσότερες πληροφορίες.'
  },
  {
    question: 'Τι περιλαμβάνει το VIP πακέτο;',
    answer: 'Το VIP πακέτο περιλαμβάνει άμεση ανταπόκριση, πλήρη ιατρικό εξοπλισμό, δυνατότητα ιατρού συνοδού, συνοδεία συγγενούς και υπηρεσίες concierge.'
  }
];

export default function PricingClient() {
  const [selectedPackage, setSelectedPackage] = useState('premium');

  return (
    <>
      <ServiceBreadcrumbs
        serviceName="Τιμές & Πακέτα"
        serviceUrl="/pricing"
      />

      <ServiceSchema service={{
        title: 'Τιμές & Πακέτα Υπηρεσιών Ασθενοφόρου',
        description: 'Διαφανείς τιμές και πακέτα υπηρεσιών για όλους τους τύπους διακομιδών',
        features: ['Basic πακέτο', 'Premium επείγουσες', 'VIP υπηρεσίες'],
        basePrice: '45',
        url: '/pricing'
      }} />

      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              Διαφανής Τιμολόγηση
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              Τιμές & Πακέτα Υπηρεσιών
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Επιλέξτε το πακέτο που ταιριάζει στις ανάγκες σας. Διαφανείς τιμές,
              χωρίς κρυφές χρεώσεις, με δυνατότητα κάλυψης από ασφάλειες.
            </p>
          </motion.div>

          {/* Service Packages */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {servicePackages.map((pkg, index) => (
              <Card
                key={pkg.id}
                className={`relative hover:shadow-xl transition-all duration-300 ${
                  pkg.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                } ${pkg.color}`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">
                    <Star className="w-3 h-3 mr-1" />
                    Δημοφιλές
                  </Badge>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                  <p className="text-gray-600">{pkg.subtitle}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-blue-600">{pkg.price}</span>
                    <span className="text-gray-500">{pkg.duration}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{pkg.description}</p>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      pkg.popular ? 'bg-blue-600 hover:bg-blue-700' : ''
                    }`}
                    variant={pkg.popular ? 'default' : 'outline'}
                    onClick={() => setSelectedPackage(pkg.id)}
                  >
                    {pkg.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Price Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Υπολογιστής Κόστους</h2>
              <p className="text-gray-600">
                Υπολογίστε το ακριβές κόστος της διακομιδής σας
              </p>
            </div>
            <PriceCalculator />
          </motion.div>

          {/* Additional Services */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-8">Επιπλέον Υπηρεσίες</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">{service.name}</h3>
                      <Badge variant="secondary">{service.price}</Badge>
                    </div>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Insurance & Payment Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-16"
          >
            <Card className="bg-gradient-to-r from-blue-50 to-red-50">
              <CardContent className="pt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-blue-600" />
                      Ασφαλιστική Κάλυψη
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>• ΕΟΠΥΥ (πρώην ΙΚΑ)</li>
                      <li>• ΟΑΕΕ</li>
                      <li>• Δημόσιο</li>
                      <li>• Ιδιωτικές ασφάλειες</li>
                      <li>• Διεθνείς ασφάλειες</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-red-600" />
                      Τρόποι Πληρωμής
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Μετρητά</li>
                      <li>• Κάρτες (Visa, Mastercard)</li>
                      <li>• Τραπεζική μεταφορά</li>
                      <li>• Άμεση χρέωση ασφάλειας</li>
                      <li>• Εταιρικοί λογαριασμοί</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-8">Συχνές Ερωτήσεις</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-3 text-blue-600">{faq.question}</h3>
                    <p className="text-sm text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-blue-600 to-red-600 text-white">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-3xl font-bold mb-4">Χρειάζεστε Άμεση Βοήθεια;</h2>
                <p className="text-xl mb-6 opacity-90">
                  Καλέστε μας τώρα για επείγουσα διακομιδή ή κλείστε ραντεβού online
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="text-blue-600">
                    <Phone className="w-5 h-5 mr-2" />
                    210 123 4567
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                    <Clock className="w-5 h-5 mr-2" />
                    Κλείσε Ραντεβού
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
}