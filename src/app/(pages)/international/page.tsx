import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Plane,
  Globe,
  FileText,
  Shield,
  Clock,
  Phone,
  MapPin,
  Users,
  Car,
  Building2,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Διεθνείς Διακομιδές & Medical Repatriation | Ασθενοφόρο Θεσσαλονίκη',
  description: 'Επαναπατρισμός ασθενών και διεθνείς διακομιδές από τη Θεσσαλονίκη. Γερμανία, Ιταλία, Βαλκάνια. Συνεργασία με ασφαλιστικές εταιρείες.',
  keywords: 'medical repatriation, επαναπατρισμός ασθενών, διεθνής διακομιδή, μεταφορά γερμανία, ιταλία ασθενοφόρο',
};

const destinations = [
  {
    country: 'Γερμανία',
    cities: ['Μόναχο', 'Φρανκφούρτη', 'Βερολίνο', 'Αμβούργο'],
    distance: '1,200km',
    duration: '14-16 ώρες',
    popular: true,
    flag: '🇩🇪',
  },
  {
    country: 'Ιταλία',
    cities: ['Μιλάνο', 'Ρώμη', 'Φλωρεντία', 'Νάπολη'],
    distance: '900km',
    duration: '10-12 ώρες',
    popular: true,
    flag: '🇮🇹',
  },
  {
    country: 'Βουλγαρία',
    cities: ['Σόφια', 'Πλόβντιβ', 'Βάρνα'],
    distance: '300km',
    duration: '4-5 ώρες',
    popular: false,
    flag: '🇧🇬',
  },
  {
    country: 'Σερβία',
    cities: ['Βελιγράδι', 'Νόβι Σαντ'],
    distance: '450km',
    duration: '6-7 ώρες',
    popular: false,
    flag: '🇷🇸',
  },
  {
    country: 'Β. Μακεδονία',
    cities: ['Σκόπια', 'Μπίτολα'],
    distance: '250km',
    duration: '3-4 ώρες',
    popular: false,
    flag: '🇲🇰',
  },
  {
    country: 'Αλβανία',
    cities: ['Τίρανα', 'Δυρράχιο'],
    distance: '400km',
    duration: '5-6 ώρες',
    popular: false,
    flag: '🇦🇱',
  },
];

const services = [
  {
    icon: Plane,
    title: 'Medical Repatriation',
    description: 'Επαναπατρισμός ασθενών από το εξωτερικό στην Ελλάδα',
    features: [
      'Συντονισμός με αεροπορικές εταιρείες',
      'Ιατρική συνοδεία κατά την πτήση',
      'Μεταφορά από/προς αεροδρόμια',
      'Διαχείριση όλων των εγγράφων'
    ],
  },
  {
    icon: Car,
    title: 'Οδικές Διακομιδές Εξωτερικού',
    description: 'Μεταφορές προς χώρες της Ευρώπης και Βαλκανίων',
    features: [
      'Ειδικά εξοπλισμένα οχήματα',
      'Πιστοποιημένο προσωπικό',
      'Στάσεις για ανάπαυση/φαγητό',
      'Συνεχής επικοινωνία με οικογένεια'
    ],
  },
  {
    icon: Building2,
    title: 'Μεταφορές σε Κλινικές Εξωτερικού',
    description: 'Διακομιδές για θεραπείες σε ευρωπαϊκές κλινικές',
    features: [
      'Προσυμφωνημένα πακέτα',
      'Συνεργασία με κλινικές',
      'Διαμονή συνοδών',
      'Επιστροφή μετά τη θεραπεία'
    ],
  },
  {
    icon: Shield,
    title: 'Ασφαλιστική Διαχείριση',
    description: 'Πλήρη διαχείριση ασφαλιστικών διαδικασιών',
    features: [
      'Προέγκριση από ασφάλεια',
      'Υποβολή δικαιολογητικών',
      'Παρακολούθηση αιτημάτων',
      'Άμεση πληρωμή κλινικών'
    ],
  },
];

const documentation = [
  {
    document: 'Διαβατήριο ή Ταυτότητα',
    required: true,
    notes: 'Σε ισχύ για τουλάχιστον 6 μήνες',
  },
  {
    document: 'Ιατρικά Πιστοποιητικά',
    required: true,
    notes: 'Μεταφρασμένα στη γλώσσα προορισμού',
  },
  {
    document: 'Ασφαλιστήριο Συμβόλαιο',
    required: true,
    notes: 'Πιστοποιητικό κάλυψης εξωτερικού',
  },
  {
    document: 'Προέγκριση Ασφάλειας',
    required: true,
    notes: 'Για μη επείγουσες περιπτώσεις',
  },
  {
    document: 'Φάρμακα & Συνταγές',
    required: false,
    notes: 'Με διεθνή ονομασία (DCI)',
  },
  {
    document: 'Πιστοποιητικά Εμβολιασμών',
    required: false,
    notes: 'Ανάλογα με χώρα προορισμού',
  },
];

const process = [
  {
    step: 1,
    title: 'Αρχικό Αίτημα',
    description: 'Επικοινωνία και καταγραφή των αναγκών',
    duration: '1-2 ώρες',
  },
  {
    step: 2,
    title: 'Έλεγχος Εγγράφων',
    description: 'Επαλήθευση δικαιολογητικών και ιατρικών πιστοποιητικών',
    duration: '4-8 ώρες',
  },
  {
    step: 3,
    title: 'Ασφαλιστική Προέγκριση',
    description: 'Υποβολή αιτήματος στην ασφαλιστική εταιρεία',
    duration: '24-48 ώρες',
  },
  {
    step: 4,
    title: 'Προγραμματισμός Μεταφοράς',
    description: 'Οργάνωση της διαδρομής και των στάσεων',
    duration: '2-4 ώρες',
  },
  {
    step: 5,
    title: 'Εκτέλεση Μεταφοράς',
    description: 'Ασφαλής διακομιδή στον προορισμό',
    duration: 'Ανάλογα με προορισμό',
  },
];

export default function InternationalPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-green-600 hover:bg-green-700" size="lg">
              <Globe className="w-4 h-4 mr-2" />
              ΔΙΕΘΝΕΙΣ ΔΙΑΚΟΜΙΔΕΣ
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Διεθνείς Διακομιδές &
              <span className="block text-green-600 mt-2">Medical Repatriation</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Εξειδικευμένες υπηρεσίες επαναπατρισμού και διεθνών διακομιδών με πλήρη
              ιατρική υποστήριξη και διαχείριση όλων των διαδικασιών.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-xl bg-green-600 hover:bg-green-700 px-8 py-6" asChild>
                <a href={`tel:${COMPANY_INFO.phone}`}>
                  <Phone className="mr-3 w-6 h-6" />
                  Κλήση: {COMPANY_INFO.phone}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-xl px-8 py-6">
                <FileText className="mr-3 w-6 h-6" />
                Δωρεάν Προσφορά
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Τι Προσφέρουμε
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ολοκληρωμένες λύσεις για κάθε ανάγκη διεθνούς ιατρικής μεταφοράς
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <service.icon className="w-8 h-8 text-green-600" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Προορισμοί
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Εξυπηρετούμε όλες τις ευρωπαϊκές χώρες με ειδική εμπειρία στους παρακάτω προορισμούς
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {destinations.map((dest, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-lg transition-shadow ${
                  dest.popular ? 'border-green-500 border-2' : ''
                }`}
              >
                {dest.popular && (
                  <Badge className="absolute -top-3 left-6 bg-green-600">
                    Δημοφιλές
                  </Badge>
                )}

                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{dest.flag}</span>
                    <CardTitle className="text-xl">{dest.country}</CardTitle>
                  </div>

                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {dest.distance}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {dest.duration}
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Κύριες Πόλεις:</h4>
                    <div className="flex flex-wrap gap-1">
                      {dest.cities.map((city, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {city}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full" variant="outline" size="sm">
                    Ζητήστε Προσφορά
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Δεν βλέπετε τον προορισμό που χρειάζεστε;
            </p>
            <Button variant="outline" asChild>
              <a href={`tel:${COMPANY_INFO.phone}`}>
                Επικοινωνήστε για Άλλους Προορισμούς
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Documentation Required */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Απαραίτητα Έγγραφα
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Συλλογή και προετοιμασία όλων των απαραίτητων εγγράφων για ομαλή διακομιδή
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-green-50">
                    <tr>
                      <th className="text-left p-4 font-semibold">Έγγραφο</th>
                      <th className="text-center p-4 font-semibold">Απαραίτητο</th>
                      <th className="text-left p-4 font-semibold">Σημειώσεις</th>
                    </tr>
                  </thead>
                  <tbody>
                    {documentation.map((doc, index) => (
                      <tr key={index} className="border-t hover:bg-gray-50 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center">
                            <FileText className="w-5 h-5 mr-3 text-green-600" />
                            <span className="font-medium">{doc.document}</span>
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          {doc.required ? (
                            <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                          ) : (
                            <AlertTriangle className="w-5 h-5 text-yellow-600 mx-auto" />
                          )}
                        </td>
                        <td className="p-4 text-sm text-gray-600">
                          {doc.notes}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            <div className="mt-6 bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-blue-600" />
                Βοήθεια με Έγγραφα
              </h3>
              <p className="text-gray-600 mb-3">
                Η ομάδα μας μπορεί να σας βοηθήσει με:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Μετάφραση ιατρικών εγγράφων</li>
                <li>• Επικύρωση εγγράφων στο υπουργείο</li>
                <li>• Υποβολή αιτημάτων σε ασφαλιστικές</li>
                <li>• Συντονισμός με πρεσβείες</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Διαδικασία Διεθνούς Διακομιδής
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Βήμα προς βήμα η διαδικασία για ασφαλή και νόμιμη διακομιδή
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {process.map((step, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-lg">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-600 mb-2">{step.description}</p>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          <Clock className="w-3 h-3 mr-1" />
                          {step.duration}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Partners */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Ασφαλιστικοί Συνεργάτες
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Συνεργαζόμαστε με όλες τις μεγάλες ασφαλιστικές εταιρείες για άμεση κάλυψη
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6 text-center">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Ελληνικές Ασφάλειες</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Εθνική Ασφαλιστική</li>
                <li>• Eurolife ERB</li>
                <li>• Interamerican</li>
                <li>• Generali Hellas</li>
              </ul>
            </Card>

            <Card className="p-6 text-center">
              <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Διεθνείς Ασφάλειες</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• DKV Euro Service</li>
                <li>• Allianz Worldwide</li>
                <li>• AXA Global</li>
                <li>• Cigna International</li>
              </ul>
            </Card>

            <Card className="p-6 text-center">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Κρατικές Ασφάλειες</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• ΕΟΠΥΥ (πρώην ΙΚΑ)</li>
                <li>• ΟΑΕΕ</li>
                <li>• ΟΓΑ</li>
                <li>• Δημόσιο</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Χρειάζεστε Διεθνή Διακομιδή;
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Επικοινωνήστε μαζί μας για δωρεάν συμβουλή και λεπτομερή προσφορά.
            Αναλαμβάνουμε όλες τις διαδικασίες για εσάς.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-xl bg-white hover:bg-gray-100 text-green-600 px-8 py-6" asChild>
              <a href={`tel:${COMPANY_INFO.phone}`}>
                <Phone className="mr-3 w-6 h-6" />
                Άμεση Κλήση
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-xl bg-transparent border-white text-white hover:bg-white hover:text-green-600 px-8 py-6">
              <FileText className="mr-3 w-6 h-6" />
              Αίτηση Προσφοράς
            </Button>
          </div>

          <div className="mt-8 text-white/80">
            <p>Διαθέσιμοι 24/7 για επείγουσες διεθνείς διακομιδές</p>
          </div>
        </div>
      </section>
    </div>
  );
}