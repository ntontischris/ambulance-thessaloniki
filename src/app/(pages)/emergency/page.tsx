import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  AlertCircle,
  Heart,
  Brain,
  Activity,
  Zap,
  Phone,
  Clock,
  Shield,
  CheckCircle,
} from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Επείγον Ιδιωτικό Ασθενοφόρο Θεσσαλονίκη | 24/7 Άμεση Ανταπόκριση',
  description: 'Επείγουσες διακομιδές ασθενών στη Θεσσαλονίκη. Άμεση ανταπόκριση 24/7, πιστοποιημένο προσωπικό ΕΚΑΒ. Καλέστε: 2310-XXXXXX',
  keywords: 'επείγον ασθενοφόρο, 24ωρο ασθενοφόρο θεσσαλονίκη, επείγουσα διακομιδή, καρδιακό επεισόδιο, εγκεφαλικό',
  openGraph: {
    title: 'Επείγον Ιδιωτικό Ασθενοφόρο Θεσσαλονίκη - Άμεση Ανταπόκριση',
    description: 'Επείγουσες διακομιδές 24/7 με πιστοποιημένο προσωπικό ΕΚΑΒ και σύγχρονο εξοπλισμό.',
  },
};

const emergencyConditions = [
  {
    icon: Heart,
    name: 'Καρδιακά Επεισόδια',
    critical: true,
    description: 'Πόνος στο στήθος, δύσπνοια, εφίδρωση'
  },
  {
    icon: Brain,
    name: 'Εγκεφαλικά',
    critical: true,
    description: 'Ξαφνική αδυναμία, προβλήματα ομιλίας'
  },
  {
    icon: Activity,
    name: 'Αναπνευστικά Προβλήματα',
    critical: true,
    description: 'Σοβαρή δύσπνοια, αδυναμία αναπνοής'
  },
  {
    icon: Zap,
    name: 'Σοβαροί Τραυματισμοί',
    critical: true,
    description: 'Κατάγματα, εκτεταμένες πληγές'
  },
  {
    icon: AlertCircle,
    name: 'Απώλεια Συνείδησης',
    critical: false,
    description: 'Λιποθυμία, σπασμοί, λήθαργος'
  },
  {
    icon: AlertCircle,
    name: 'Σοβαρές Αιμορραγίες',
    critical: false,
    description: 'Αιμορραγίες που δεν σταματούν'
  },
];

const equipment = [
  { item: 'Απινιδωτής AED', available: 'Όλα τα οχήματα', icon: Zap },
  { item: 'Monitor Ζωτικών Λειτουργιών', available: 'Όλα τα οχήματα', icon: Activity },
  { item: 'Φορητός Αναπνευστήρας', available: 'Type C', icon: Activity },
  { item: 'Οξυγόνο Υψηλής Ροής', available: 'Όλα τα οχήματα', icon: Activity },
  { item: 'Φάρμακα Επείγουσας Ανάγκης', available: 'Πλήρες Kit', icon: Heart },
  { item: 'Τραυματολογικός Εξοπλισμός', available: 'Όλα τα οχήματα', icon: Shield },
];

const process = [
  {
    step: 1,
    title: 'Τηλεφωνική Κλήση',
    description: 'Καλέστε το 2310-XXXXXX και περιγράψτε την κατάσταση με σαφήνεια',
    time: '0-30 δευτερόλεπτα',
    color: 'bg-red-100 text-red-600',
  },
  {
    step: 2,
    title: 'Άμεση Αποστολή',
    description: 'Το πλησιέστερο ασθενοφόρο ξεκινά άμεσα προς τη διεύθυνσή σας',
    time: '30 δευτερόλεπτα',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    step: 3,
    title: 'Άφιξη & Αξιολόγηση',
    description: 'Το εξειδικευμένο προσωπικό αξιολογεί και σταθεροποιεί τον ασθενή',
    time: `${COMPANY_INFO.responseTime.center}-${COMPANY_INFO.responseTime.suburbs} λεπτά`,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    step: 4,
    title: 'Ασφαλής Μεταφορά',
    description: 'Μεταφορά στο κατάλληλο νοσοκομείο με συνεχή παρακολούθηση',
    time: 'Ανάλογα με προορισμό',
    color: 'bg-green-100 text-green-600',
  },
];

const faqs = [
  {
    question: 'Πόσο γρήγορα θα φτάσει το ασθενοφόρο;',
    answer: `Ο μέσος χρόνος άφιξης είναι ${COMPANY_INFO.responseTime.center} λεπτά για το κέντρο της Θεσσαλονίκης και ${COMPANY_INFO.responseTime.suburbs} λεπτά για τα προάστια. Σε επείγουσες καταστάσεις προτεραιοποιούμε την ταχύτητα ανταπόκρισης.`,
  },
  {
    question: 'Καλύπτεται η διακομιδή από την ασφάλειά μου;',
    answer: 'Συνεργαζόμαστε με όλες τις ασφαλιστικές εταιρείες και ταμεία. Θα σας βοηθήσουμε με τη διαδικασία αποζημίωσης και θα σας ενημερώσουμε για την κάλυψη.',
  },
  {
    question: 'Τι εξοπλισμό διαθέτουν τα ασθενοφόρα σας;',
    answer: 'Όλα τα οχήματά μας είναι τύπου C, πλήρως εξοπλισμένα με απινιδωτή, monitor ζωτικών λειτουργιών, φορητό αναπνευστήρα, οξυγόνο και φάρμακα επείγουσας ανάγκης.',
  },
  {
    question: 'Μπορείτε να μεταφέρετε ασθενή σε συγκεκριμένο νοσοκομείο;',
    answer: 'Ναι, μπορούμε να μεταφέρουμε τον ασθενή στο νοσοκομείο της επιλογής σας, εφόσον είναι ιατρικά ασφαλές και δεν υπάρχει άμεσος κίνδυνος που απαιτεί μεταφορά στο πλησιέστερο νοσοκομείο.',
  },
  {
    question: 'Παρέχετε ιατρική περίθαλψη κατά τη διάρκεια της μεταφοράς;',
    answer: 'Το πιστοποιημένο προσωπικό μας παρέχει βασική υποστήριξη ζωής και παρακολουθεί τα ζωτικά σημεία. Σε σοβαρές καταστάσεις, συνεργαζόμαστε με ιατρούς του ΕΚΑΒ για επιπλέον υποστήριξη.',
  },
];

export default function EmergencyPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-red-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-red-600 hover:bg-red-700" size="lg">
              <Clock className="w-4 h-4 mr-2" />
              24/7 ΕΠΕΙΓΟΥΣΑ ΔΙΑΘΕΣΙΜΟΤΗΤΑ
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Επείγον Ιδιωτικό Ασθενοφόρο
              <span className="block text-red-600 mt-2">Θεσσαλονίκη</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Όταν κάθε δευτερόλεπτο μετράει, η ομάδα μας είναι έτοιμη να ανταποκριθεί άμεσα.
              Μέσος χρόνος άφιξης {COMPANY_INFO.responseTime.center} λεπτά στο κέντρο και {COMPANY_INFO.responseTime.suburbs} λεπτά στα προάστια της Θεσσαλονίκης.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-xl animate-pulse bg-red-600 hover:bg-red-700 px-8 py-6" asChild>
                <a href={`tel:${COMPANY_INFO.phone}`}>
                  <Phone className="mr-3 w-6 h-6" />
                  ΚΑΛΕΣΤΕ ΤΩΡΑ: {COMPANY_INFO.phone}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-xl px-8 py-6">
                <Shield className="mr-3 w-6 h-6" />
                Δείτε τον Εξοπλισμό
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* When to Call Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Πότε να Καλέσετε Επείγον Ασθενοφόρο
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Μην διστάσετε να καλέσετε σε οποιαδήποτε από τις παρακάτω καταστάσεις.
              Η έγκαιρη παρέμβαση μπορεί να σώσει ζωές.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {emergencyConditions.map((condition, index) => (
              <Card
                key={index}
                className={`p-6 hover:shadow-lg transition-all duration-300 ${
                  condition.critical ? 'border-red-500 border-2 bg-red-50' : 'border-orange-300 bg-orange-50'
                }`}
              >
                <div className="flex items-start gap-4">
                  <condition.icon className={`w-8 h-8 mt-1 ${
                    condition.critical ? 'text-red-600' : 'text-orange-600'
                  }`} />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 text-gray-900">
                      {condition.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {condition.description}
                    </p>
                    {condition.critical && (
                      <Badge variant="destructive" size="sm">
                        ΚΡΙΣΙΜΟ
                      </Badge>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 text-lg">
              <strong>Σημαντικό:</strong> Αν έχετε αμφιβολίες, καλέστε μας.
              Προτιμάμε να έρθουμε χωρίς λόγο παρά να μην έρθουμε όταν χρειάζεστε.
            </p>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Εξοπλισμός Ασθενοφόρων
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Όλα τα ασθενοφόρα μας είναι τύπου C και διαθέτουν τον πλέον σύγχρονο
              ιατρικό εξοπλισμό για τη διασφάλιση της ζωής κατά τη μεταφορά.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-left p-4 font-semibold">Εξοπλισμός</th>
                      <th className="text-left p-4 font-semibold">Διαθεσιμότητα</th>
                      <th className="text-left p-4 font-semibold">Κατάσταση</th>
                    </tr>
                  </thead>
                  <tbody>
                    {equipment.map((item, index) => (
                      <tr key={index} className="border-t hover:bg-gray-50 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center">
                            <item.icon className="w-5 h-5 mr-3 text-blue-600" />
                            <span className="font-medium">{item.item}</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge variant="outline">{item.available}</Badge>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                            <span className="text-green-600 font-medium">Διαθέσιμο</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Η Διαδικασία Επείγουσας Διακομιδής
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ακολουθούμε ένα δοκιμασμένο πρωτόκολλο για να εξασφαλίσουμε την ταχύτερη
              και ασφαλέστερη δυνατή ανταπόκριση.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {process.map((step, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center font-bold text-xl`}>
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 mb-3 leading-relaxed">{step.description}</p>
                    <Badge variant="secondary" className="bg-gray-100">
                      <Clock className="w-3 h-3 mr-1" />
                      {step.time}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Συχνές Ερωτήσεις
            </h2>
            <p className="text-xl text-gray-600">
              Απαντήσεις στις πιο συχνές ερωτήσεις για τις επείγουσες διακομιδές
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg mb-3 text-gray-900">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Σε Επείγουσα Κατάσταση Κάθε Λεπτό Μετράει
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Μην διστάσετε να καλέσετε. Είμαστε εδώ 24 ώρες το 24ωρο, 365 ημέρες το χρόνο
            για να σας βοηθήσουμε όταν χρειάζεστε άμεση ιατρική βοήθεια.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-xl bg-white hover:bg-gray-100 text-red-600 px-8 py-6" asChild>
              <a href={`tel:${COMPANY_INFO.phone}`}>
                <Phone className="mr-3 w-6 h-6" />
                {COMPANY_INFO.phone}
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-xl bg-transparent border-white text-white hover:bg-white hover:text-red-600 px-8 py-6" asChild>
              <a href={`tel:${COMPANY_INFO.emergencyPhone}`}>
                <AlertCircle className="mr-3 w-6 h-6" />
                ΕΠΕΙΓΟΝ: {COMPANY_INFO.emergencyPhone}
              </a>
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-white/80 text-lg">
              <strong className="text-white">Θυμηθείτε:</strong> Στην περίπτωση καρδιακής ανακοπής,
              κάθε λεπτό καθυστέρησης μειώνει τις πιθανότητες επιβίωσης κατά 10%.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}