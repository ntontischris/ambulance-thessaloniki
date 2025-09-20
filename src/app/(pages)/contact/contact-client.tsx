'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  AlertCircle,
  MessageSquare,
  Send,
  CheckCircle,
  Car,
  Heart,
  Shield
} from 'lucide-react';
import ContactForm from '@/components/forms/ContactForm';
import QuickCallForm from '@/components/forms/QuickCallForm';
import { ServiceBreadcrumbs } from '@/components/seo/Breadcrumbs';
import { ServiceSchema, FAQSchema } from '@/components/seo/SchemaMarkup';
import { motion } from 'framer-motion';

const contactMethods = [
  {
    icon: Phone,
    title: 'Επείγουσες Κλήσεις',
    subtitle: '24/7 Άμεση Ανταπόκριση',
    value: '210 123 4567',
    description: 'Για επείγουσες διακομιδές και έκτακτες ανάγκες',
    action: 'Κάλεσε Τώρα',
    urgent: true,
    color: 'bg-red-500'
  },
  {
    icon: MessageSquare,
    title: 'Προγραμματισμένες Μεταφορές',
    subtitle: 'Κρατήσεις & Πληροφορίες',
    value: '210 123 4568',
    description: 'Για προγραμματισμένες διακομιδές και γενικές πληροφορίες',
    action: 'Κλείσε Ραντεβού',
    urgent: false,
    color: 'bg-blue-500'
  },
  {
    icon: Mail,
    title: 'Email',
    subtitle: 'Γραπτή Επικοινωνία',
    value: 'info@ambulance-thessaloniki.gr',
    description: 'Για γενικές ερωτήσεις και διοικητικά θέματα',
    action: 'Στείλε Email',
    urgent: false,
    color: 'bg-green-500'
  }
];

const officeHours = [
  { day: 'Δευτέρα - Παρασκευή', hours: '24 ώρες', emergency: true },
  { day: 'Σαββατοκύριακο', hours: '24 ώρες', emergency: true },
  { day: 'Αργίες', hours: '24 ώρες', emergency: true },
  { day: 'Γραφείο (Διοικητικά)', hours: '08:00 - 17:00', emergency: false }
];

const locationInfo = {
  address: 'Εγνατία 156, Θεσσαλονίκη 54636',
  coordinates: { lat: 40.6401, lng: 22.9444 },
  area: 'Κέντρο Θεσσαλονίκης',
  landmarks: ['Κοντά στο Ιπποκράτειο', 'Δίπλα στη στάση μετρό Βενιζέλου'],
  parking: 'Διαθέσιμος χώρος στάθμευσης'
};

const quickStats = [
  {
    icon: Car,
    value: '< 10 λεπτά',
    label: 'Μέσος χρόνος άφιξης',
    color: 'text-blue-600'
  },
  {
    icon: Heart,
    value: '24/7',
    label: 'Διαθεσιμότητα',
    color: 'text-red-600'
  },
  {
    icon: Shield,
    value: '100%',
    label: 'Ασφαλισμένες διακομιδές',
    color: 'text-green-600'
  }
];

const faqs = [
  {
    question: 'Πόσο γρήγορα φτάνετε σε επείγουσα κλήση;',
    answer: 'Ο μέσος χρόνος άφιξης μας είναι 5-10 λεπτά για επείγουσες κλήσεις εντός Θεσσαλονίκης, ανάλογα με την κίνηση και την ακριβή τοποθεσία.'
  },
  {
    question: 'Μπορώ να κλείσω ραντεβού για προγραμματισμένη μεταφορά;',
    answer: 'Ναι, μπορείτε να κλείσετε ραντεβού τηλεφωνικά ή μέσω της φόρμας επικοινωνίας. Συνιστούμε κράτηση τουλάχιστον 2 ώρες πριν.'
  },
  {
    question: 'Ποιες περιοχές καλύπτετε;',
    answer: 'Καλύπτουμε όλη τη Θεσσαλονίκη και τα προάστια, καθώς και διεθνείς μεταφορές προς Βαλκάνια και Ευρώπη.'
  },
  {
    question: 'Τι χρεώσεις έχετε για νυχτερινές ώρες;',
    answer: 'Οι νυχτερινές χρεώσεις (22:00-06:00) έχουν προσαύξηση 25%. Τα Σαββατοκύριακα και αργίες έχουν επιπλέον χρεώσεις.'
  }
];

export default function ContactClient() {
  const [activeForm, setActiveForm] = useState<'contact' | 'emergency'>('contact');

  return (
    <>
      <ServiceBreadcrumbs
        serviceName="Επικοινωνία"
        serviceUrl="/contact"
      />

      <ServiceSchema service={{
        title: 'Επικοινωνία - Ιδιωτικό Ασθενοφόρο',
        description: '24ωρη διαθεσιμότητα για επείγουσες και προγραμματισμένες διακομιδές',
        features: ['24/7 κάλυψη', 'Άμεση ανταπόκριση', 'Πιστοποιημένο προσωπικό'],
        basePrice: '45',
        url: '/contact'
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
            <Badge className="mb-4 bg-red-100 text-red-800">
              <AlertCircle className="w-4 h-4 mr-1" />
              24ωρη Κάλυψη
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              Επικοινωνήστε Μαζί Μας
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Είμαστε εδώ για εσάς 24 ώρες το 24ωρο, 7 μέρες τη βδομάδα.
              Επικοινωνήστε μαζί μας για επείγουσες ή προγραμματισμένες διακομιδές.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {quickStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-300 ${
                  method.urgent ? 'ring-2 ring-red-500 scale-105' : ''
                }`}
              >
                {method.urgent && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-500">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    Επείγον
                  </Badge>
                )}

                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-full ${method.color} flex items-center justify-center mx-auto mb-4`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{method.title}</CardTitle>
                  <p className="text-gray-600">{method.subtitle}</p>
                </CardHeader>

                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    {method.value}
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    {method.description}
                  </p>
                  <Button
                    className={`w-full ${method.urgent ? 'bg-red-600 hover:bg-red-700' : ''}`}
                    variant={method.urgent ? 'default' : 'outline'}
                  >
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Forms */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex space-x-1 mb-4">
                    <Button
                      variant={activeForm === 'contact' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setActiveForm('contact')}
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Γενική Επικοινωνία
                    </Button>
                    <Button
                      variant={activeForm === 'emergency' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setActiveForm('emergency')}
                      className="bg-red-600 hover:bg-red-700"
                    >
                      <AlertCircle className="w-4 h-4 mr-2" />
                      Επείγουσα Κλήση
                    </Button>
                  </div>
                  <CardTitle>
                    {activeForm === 'contact' ? 'Φόρμα Επικοινωνίας' : 'Επείγουσα Αίτηση'}
                  </CardTitle>
                  <p className="text-sm text-gray-600">
                    {activeForm === 'contact'
                      ? 'Συμπληρώστε τη φόρμα για πληροφορίες ή κρατήσεις'
                      : 'Για επείγουσες καταστάσεις - άμεση ανταπόκριση'
                    }
                  </p>
                </CardHeader>
                <CardContent>
                  {activeForm === 'contact' ? <ContactForm /> : <QuickCallForm />}
                </CardContent>
              </Card>
            </motion.div>

            {/* Location & Hours */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="space-y-6"
            >
              {/* Location */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                    Τοποθεσία
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold">{locationInfo.address}</p>
                      <p className="text-sm text-gray-600">{locationInfo.area}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Σημεία Αναφοράς:</p>
                      <ul className="text-sm text-gray-600">
                        {locationInfo.landmarks.map((landmark, idx) => (
                          <li key={idx}>• {landmark}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="text-sm">
                        <strong>Στάθμευση:</strong> {locationInfo.parking}
                      </p>
                    </div>
                    <Button variant="outline" className="w-full">
                      <MapPin className="w-4 h-4 mr-2" />
                      Δες στο Χάρτη
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Operating Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-green-600" />
                    Ωράριο Λειτουργίας
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {officeHours.map((schedule, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-sm">{schedule.day}</span>
                        <div className="flex items-center">
                          <span className="text-sm font-medium">{schedule.hours}</span>
                          {schedule.emergency && (
                            <Badge className="ml-2 bg-green-100 text-green-800" size="sm">
                              Emergency
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-red-50 rounded">
                    <p className="text-sm text-red-800">
                      <AlertCircle className="w-4 h-4 inline mr-1" />
                      Οι επείγουσες κλήσεις εξυπηρετούνται 24/7
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

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

          {/* Emergency CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-red-600 to-blue-600 text-white">
              <CardContent className="pt-8 pb-8">
                <AlertCircle className="w-16 h-16 mx-auto mb-4 text-white" />
                <h2 className="text-3xl font-bold mb-4">Επείγουσα Ανάγκη;</h2>
                <p className="text-xl mb-6 opacity-90">
                  Μην διστάσετε! Καλέστε μας άμεσα για επείγουσα διακομιδή
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="text-red-600">
                    <Phone className="w-5 h-5 mr-2" />
                    210 123 4567
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                    <Send className="w-5 h-5 mr-2" />
                    Επείγουσα Φόρμα
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