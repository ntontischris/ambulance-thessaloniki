import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Calendar,
  Clock,
  Car,
  Heart,
  Stethoscope,
  MapPin,
  Euro,
  Phone,
  CheckCircle,
  Users,
  Shield,
} from 'lucide-react';
import { COMPANY_INFO, PRICING_CONFIG } from '@/lib/constants';
import { formatPrice } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Προγραμματισμένες Διακομιδές Ασθενών Θεσσαλονίκη | Μεταφορά για Διάλυση',
  description: 'Προγραμματισμένες μεταφορές ασθενών στη Θεσσαλονίκη. Διάλυση, εξετάσεις, χημειοθεραπείες. Μηνιαία πακέτα και ειδικές τιμές.',
  keywords: 'μεταφορά για διάλυση, προγραμματισμένη διακομιδή, διακομιδή από νοσοκομείο, χημειοθεραπεία μεταφορά',
};

const services = [
  {
    icon: Heart,
    title: 'Μεταφορά για Αιμοκάθαρση',
    description: 'Τακτικές μεταφορές για διάλυση 3 φορές την εβδομάδα',
    features: [
      'Προσαρμοσμένο πρόγραμμα',
      'Μηνιαία πακέτα με έκπτωση',
      'Άνετα καθίσματα',
      'Ειδικός εξοπλισμός'
    ],
    price: 40,
    packagePrice: 400,
    popular: true,
  },
  {
    icon: Stethoscope,
    title: 'Ακτινοθεραπείες & Χημειοθεραπείες',
    description: 'Μεταφορές για θεραπείες καρκίνου με ειδική φροντίδα',
    features: [
      'Εκπαιδευμένο προσωπικό',
      'Άνετη μεταφορά',
      'Συνοδεία οικείων',
      'Ευέλικτα ωράρια'
    ],
    price: 45,
    packagePrice: null,
    popular: false,
  },
  {
    icon: Calendar,
    title: 'Διαγνωστικές Εξετάσεις',
    description: 'MRI, CT, υπέρηχοι και άλλες διαγνωστικές εξετάσεις',
    features: [
      'Προ-εξεταστικές οδηγίες',
      'Συντονισμός με κλινικές',
      'Αναμονή κατά την εξέταση',
      'Επιστροφή με τα αποτελέσματα'
    ],
    price: 45,
    packagePrice: null,
    popular: false,
  },
  {
    icon: MapPin,
    title: 'Εξιτήρια από Νοσοκομεία',
    description: 'Ασφαλής μεταφορά από το νοσοκομείο στο σπίτι',
    features: [
      'Συντονισμός με νοσηλευτικό προσωπικό',
      'Μεταφορά ιατρικών εγγράφων',
      'Φαρμακείο στη διαδρομή',
      'Βοήθεια στην εγκατάσταση'
    ],
    price: 50,
    packagePrice: null,
    popular: false,
  },
  {
    icon: Users,
    title: 'Μεταφορές Rehabilitation Centers',
    description: 'Τακτικές μεταφορές για φυσιοθεραπεία και αποκατάσταση',
    features: [
      'Εβδομαδιαία προγράμματα',
      'Ειδικός εξοπλισμός κινητικότητας',
      'Παρακολούθηση προόδου',
      'Συνεργασία με κέντρα'
    ],
    price: 35,
    packagePrice: 280,
    popular: false,
  },
];

const pricingTable = [
  {
    service: 'Διάλυση (εντός πόλης)',
    singlePrice: 40,
    packagePrice: 400,
    packageDescription: '12 διαδρομές/μήνα',
    discount: '17%'
  },
  {
    service: 'Εξιτήριο νοσοκομείου',
    singlePrice: 50,
    packagePrice: null,
    packageDescription: '-',
    discount: null
  },
  {
    service: 'Διαγνωστικές εξετάσεις',
    singlePrice: 45,
    packagePrice: null,
    packageDescription: '-',
    discount: null
  },
  {
    service: 'Χημειοθεραπεία',
    singlePrice: 45,
    packagePrice: 360,
    packageDescription: '10 διαδρομές/μήνα',
    discount: '20%'
  },
  {
    service: 'Φυσιοθεραπεία',
    singlePrice: 35,
    packagePrice: 280,
    packageDescription: '10 διαδρομές/μήνα',
    discount: '20%'
  },
];

const bookingSteps = [
  {
    step: 1,
    title: 'Κλήση ή Online Κράτηση',
    description: 'Επικοινωνήστε μαζί μας τηλεφωνικά ή μέσω της φόρμας κράτησης',
    icon: Phone,
  },
  {
    step: 2,
    title: 'Επιλογή Ημερομηνίας & Ώρας',
    description: 'Επιλέγετε την καταλληλότερη ημερομηνία και ώρα για εσάς',
    icon: Calendar,
  },
  {
    step: 3,
    title: 'Επιβεβαίωση Κράτησης',
    description: 'Λαμβάνετε επιβεβαίωση με όλες τις λεπτομέρειες της μεταφοράς',
    icon: CheckCircle,
  },
  {
    step: 4,
    title: 'Μεταφορά την Ημέρα',
    description: 'Το ασθενοφόρο φτάνει στην ώρα του για ασφαλή μεταφορά',
    icon: Car,
  },
];

export default function ScheduledPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-600 hover:bg-blue-700" size="lg">
              <Calendar className="w-4 h-4 mr-2" />
              ΠΡΟΓΡΑΜΜΑΤΙΣΜΕΝΕΣ ΜΕΤΑΦΟΡΕΣ
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Προγραμματισμένες
              <span className="block text-blue-600 mt-2">Διακομιδές Ασθενών</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Αξιόπιστες και άνετες μεταφορές για τις τακτικές σας ιατρικές ανάγκες.
              Διάλυση, εξετάσεις, θεραπείες και εξιτήρια με πλήρη ασφάλεια και επαγγελματισμό.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-xl bg-blue-600 hover:bg-blue-700 px-8 py-6" asChild>
                <a href={`tel:${COMPANY_INFO.phone}`}>
                  <Phone className="mr-3 w-6 h-6" />
                  Κράτηση: {COMPANY_INFO.phone}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-xl px-8 py-6">
                <Calendar className="mr-3 w-6 h-6" />
                Online Κράτηση
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
              Οι Υπηρεσίες Μας
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Προσφέρουμε εξειδικευμένες υπηρεσίες μεταφοράς για κάθε ιατρική ανάγκη
              με προσαρμοσμένα προγράμματα και ανταγωνιστικές τιμές.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-xl transition-all duration-300 ${
                  service.popular ? 'border-blue-500 border-2' : ''
                }`}
              >
                {service.popular && (
                  <Badge className="absolute -top-3 left-6 bg-blue-600">
                    Δημοφιλές
                  </Badge>
                )}

                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <service.icon className="w-8 h-8 text-blue-600" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>

                <CardContent>
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {formatPrice(service.price)}
                    </div>
                    {service.packagePrice && (
                      <div className="text-lg text-blue-600 font-medium">
                        Μηνιαίο: {formatPrice(service.packagePrice)}
                      </div>
                    )}
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-2">
                    <Button className="w-full" variant="outline">
                      Μάθετε Περισσότερα
                    </Button>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                      <a href={`tel:${COMPANY_INFO.phone}`}>
                        Κράτηση Τώρα
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Διαφανής Τιμοκατάλογος
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Καμία κρυφή χρέωση. Γνωρίζετε εκ των προτέρων το ακριβές κόστος
              της μεταφοράς σας με δυνατότητα μηνιαίων πακέτων.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-blue-50">
                    <tr>
                      <th className="text-left p-4 font-semibold">Υπηρεσία</th>
                      <th className="text-left p-4 font-semibold">Μονή Διαδρομή</th>
                      <th className="text-left p-4 font-semibold">Μηνιαίο Πακέτο</th>
                      <th className="text-left p-4 font-semibold">Εξοικονόμηση</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingTable.map((row, index) => (
                      <tr key={index} className="border-t hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-medium">{row.service}</td>
                        <td className="p-4">
                          <span className="text-2xl font-bold text-gray-900">
                            {formatPrice(row.singlePrice)}
                          </span>
                        </td>
                        <td className="p-4">
                          {row.packagePrice ? (
                            <div>
                              <span className="text-2xl font-bold text-blue-600">
                                {formatPrice(row.packagePrice)}
                              </span>
                              <div className="text-sm text-gray-500">
                                {row.packageDescription}
                              </div>
                            </div>
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                        <td className="p-4">
                          {row.discount ? (
                            <Badge className="bg-green-100 text-green-800">
                              -{row.discount}
                            </Badge>
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            <div className="mt-6 bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Πρόσθετες Χρεώσεις</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Νυχτερινή χρέωση (22:00-06:00): +€10</li>
                <li>• Σαββατοκύριακο: +€10</li>
                <li>• Αργίες: +€15</li>
                <li>• Αναμονή (πέραν 30'): €15/ώρα</li>
                <li>• Επιπλέον στάσεις: €10/στάση</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Πώς Γίνεται η Κράτηση
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Απλή και γρήγορη διαδικασία κράτησης με επιβεβαίωση και υπενθύμιση
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {bookingSteps.map((step, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-sm font-medium text-blue-600 mb-2">ΒΗΜΑ {step.step}</div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-blue-50 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="font-semibold text-lg mb-2">💡 Συμβουλή</h3>
              <p className="text-gray-600">
                Για τακτικές μεταφορές (π.χ. διάλυση), κλείστε μηνιαίο πακέτο
                και εξοικονομήστε έως 20% στο συνολικό κόστος!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & Payment */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Ασφαλιστική Κάλυψη & Πληρωμές
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-6">
              <h3 className="font-semibold text-xl mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-2 text-blue-600" />
                Αποδεκτές Ασφάλειες
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="font-medium">Δημόσιες Ασφάλειες:</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• ΙΚΑ-ΕΦΚΑ</li>
                    <li>• ΟΑΕΕ</li>
                    <li>• ΟΓΑ</li>
                    <li>• ΔΗΜΟΣΙΟ</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">Ιδιωτικές Ασφάλειες:</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Εθνική Ασφαλιστική</li>
                    <li>• Εurolife ERB</li>
                    <li>• Interamerican</li>
                    <li>• Όλες οι υπόλοιπες</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-xl mb-4 flex items-center">
                <Euro className="w-6 h-6 mr-2 text-blue-600" />
                Τρόποι Πληρωμής
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span>Μετρητά</span>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span>Κάρτα (POS)</span>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span>Τραπεζική Κατάθεση</span>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span>Μηνιαία Τιμολόγηση</span>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Έτοιμοι για την Επόμενη Κράτησή σας;
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Κλείστε την προγραμματισμένη σας μεταφορά τώρα και εξασφαλίστε
            άνετη και ασφαλή διακομιδή στην ώρα σας.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-xl bg-white hover:bg-gray-100 text-blue-600 px-8 py-6" asChild>
              <a href={`tel:${COMPANY_INFO.phone}`}>
                <Phone className="mr-3 w-6 h-6" />
                Κλήση για Κράτηση
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-xl bg-transparent border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6">
              <Calendar className="mr-3 w-6 h-6" />
              Online Φόρμα
            </Button>
          </div>

          <div className="mt-8 text-white/80">
            <p>Κράτηση έως 1 ώρα πριν την επιθυμητή μεταφορά</p>
          </div>
        </div>
      </section>
    </div>
  );
}