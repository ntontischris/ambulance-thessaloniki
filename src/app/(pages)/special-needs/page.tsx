import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Heart,
  Baby,
  Brain,
  Users,
  Scale,
  Stethoscope,
  Shield,
  Phone,
  Clock,
  CheckCircle,
  AlertCircle,
  User,
} from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';
import { formatPrice } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Ειδικές Διακομιδές - Βαριατρική, Παιδιατρική, Ψυχιατρική | Θεσσαλονίκη',
  description: 'Εξειδικευμένες διακομιδές για βαριατρικούς ασθενείς, παιδιά, ψυχιατρικές περιπτώσεις και ειδικές ανάγκες στη Θεσσαλονίκη.',
  keywords: 'βαριατρική διακομιδή, παιδιατρικό ασθενοφόρο, ψυχιατρική μεταφορά, ειδικές ανάγκες ασθενοφόρο',
};

const specializations = [
  {
    icon: Scale,
    title: 'Βαριατρικές Διακομιδές',
    description: 'Μεταφορές ασθενών με υψηλό σωματικό βάρος έως 300kg',
    features: [
      'Ειδικά ενισχυμένα φορεία',
      'Εκπαιδευμένο προσωπικό',
      'Ειδικός εξοπλισμός ανύψωσης',
      'Προσαρμοσμένα ασθενοφόρα'
    ],
    maxWeight: '300kg',
    price: 80,
    urgent: false,
  },
  {
    icon: Baby,
    title: 'Παιδιατρικές & Νεογνικές',
    description: 'Εξειδικευμένες μεταφορές βρεφών και παιδιών',
    features: [
      'Παιδιατρικός εξοπλισμός',
      'Εκπαιδευμένο προσωπικό',
      'Συνοδεία γονέων',
      'Ειδικές κλίμακες θερμοκρασίας'
    ],
    maxWeight: 'Όλες οι ηλικίες',
    price: 60,
    urgent: true,
  },
  {
    icon: Brain,
    title: 'Ψυχιατρικές Διακομιδές',
    description: 'Μεταφορές ψυχιατρικών ασθενών με ασφάλεια',
    features: [
      'Εκπαιδευμένη συνοδεία',
      'Πρωτόκολλα ασφαλείας',
      'Ήρεμο περιβάλλον',
      'Συνεργασία με ψυχιάτρους'
    ],
    maxWeight: 'Όλες οι ηλικίες',
    price: 70,
    urgent: true,
  },
  {
    icon: Stethoscope,
    title: 'Μεταφορές ΜΕΘ',
    description: 'Κρίσιμοι ασθενείς με ιατρική συνοδεία',
    features: [
      'Ιατρός στη συνοδεία',
      'Εξοπλισμός εντατικής',
      'Συνεχής παρακολούθηση',
      'Άμεση επικοινωνία με νοσοκομεία'
    ],
    maxWeight: 'Όλες οι ηλικίες',
    price: 150,
    urgent: true,
  },
  {
    icon: Users,
    title: 'Ηλικιωμένοι με Άνοια',
    description: 'Ειδική φροντίδα για ασθενείς με άνοια/Alzheimer',
    features: [
      'Εξειδικευμένο προσωπικό',
      'Ήρεμη μεταφορά',
      'Συνοδεία οικείων',
      'Ειδικά πρωτόκολλα'
    ],
    maxWeight: 'Όλες οι ηλικίες',
    price: 65,
    urgent: false,
  },
  {
    icon: Heart,
    title: 'Μολυσματικές Ασθένειες',
    description: 'Ασφαλής μεταφορά ασθενών με μολυσματικές παθήσεις',
    features: [
      'Ειδικά πρωτόκολλα προστασίας',
      'Απολύμανση οχήματος',
      'Προστατευτικός εξοπλισμός',
      'Ειδική εκπαίδευση προσωπικού'
    ],
    maxWeight: 'Όλες οι ηλικίες',
    price: 90,
    urgent: true,
  },
];

const equipment = [
  {
    category: 'Βαριατρικός Εξοπλισμός',
    items: [
      'Ενισχυμένα φορεία έως 300kg',
      'Ειδικά ρυθμιζόμενα κρεβάτια',
      'Εξοπλισμός ανύψωσης',
      'Πλατιά πρόσβαση οχημάτων'
    ]
  },
  {
    category: 'Παιδιατρικός Εξοπλισμός',
    items: [
      'Βρεφικές κουβέζ μεταφοράς',
      'Παιδιατρικά monitors',
      'Ειδικές μάσκες οξυγόνου',
      'Θερμαντικές συσκευές'
    ]
  },
  {
    category: 'Ψυχιατρικός Εξοπλισμός',
    items: [
      'Ιμάντες ασφαλείας',
      'Ηχομόνωση οχήματος',
      'Κάμερες παρακολούθησης',
      'Συσκευές επικοινωνίας'
    ]
  },
  {
    category: 'Εξοπλισμός ΜΕΘ',
    items: [
      'Φορητοί αναπνευστήρες',
      'Καρδιακοί monitors',
      'Συσκευές διάλυσης',
      'Φάρμακα εντατικής'
    ]
  },
];

const process = [
  {
    step: 1,
    title: 'Εκτίμηση Αναγκών',
    description: 'Λεπτομερής καταγραφή των ειδικών αναγκών του ασθενούς',
    items: [
      'Ιατρικό ιστορικό',
      'Σωματικές παράμετροι',
      'Κινητικότητα',
      'Ειδικός εξοπλισμός'
    ]
  },
  {
    step: 2,
    title: 'Προετοιμασία Εξοπλισμού',
    description: 'Προσαρμογή ασθενοφόρου και εξοπλισμού στις ανάγκες',
    items: [
      'Επιλογή κατάλληλου οχήματος',
      'Προετοιμασία ειδικού εξοπλισμού',
      'Έλεγχος ασφαλείας',
      'Δοκιμή συστημάτων'
    ]
  },
  {
    step: 3,
    title: 'Εκπαίδευση Προσωπικού',
    description: 'Ενημέρωση της ομάδας για τις ειδικές απαιτήσεις',
    items: [
      'Ιατρικές οδηγίες',
      'Πρωτόκολλα ασφαλείας',
      'Χειρισμός εξοπλισμού',
      'Επικοινωνία με ασθενή'
    ]
  },
  {
    step: 4,
    title: 'Εκτέλεση Μεταφοράς',
    description: 'Ασφαλής και άνετη μεταφορά με συνεχή παρακολούθηση',
    items: [
      'Παραλαβή ασθενούς',
      'Συνεχής monitoring',
      'Επικοινωνία με νοσοκομεία',
      'Παράδοση με αναφορά'
    ]
  },
];

const faqs = [
  {
    question: 'Ποιο είναι το μέγιστο βάρος που μπορείτε να μεταφέρετε;',
    answer: 'Διαθέτουμε ειδικό εξοπλισμό για βαριατρικές μεταφορές έως 300kg. Το ασθενοφόρο έχει ενισχυμένα φορεία και ειδικό σύστημα ανύψωσης.',
  },
  {
    question: 'Μπορεί να συνοδεύσει κάποιος συγγενής τον ασθενή;',
    answer: 'Ναι, ειδικά σε παιδιατρικές και ψυχιατρικές περιπτώσεις ενθαρρύνουμε τη συνοδεία. Έχουμε ειδικούς χώρους για συνοδούς.',
  },
  {
    question: 'Διαθέτετε ιατρό για κρίσιμες μεταφορές;',
    answer: 'Για μεταφορές ΜΕΘ και κρίσιμους ασθενείς διαθέτουμε ιατρούς εντατικής ιατρικής που συνοδεύουν τη μεταφορά.',
  },
  {
    question: 'Πώς διασφαλίζετε την ασφάλεια σε ψυχιατρικές περιπτώσεις;',
    answer: 'Το προσωπικό μας είναι εκπαιδευμένο σε πρωτόκολλα ψυχιατρικής νοσηλευτικής. Διαθέτουμε ειδικό εξοπλισμό ασφαλείας και συνεργαζόμαστε με ψυχιάτρους.',
  },
];

export default function SpecialNeedsPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-purple-600 hover:bg-purple-700" size="lg">
              <Heart className="w-4 h-4 mr-2" />
              ΕΙΔΙΚΕΣ ΔΙΑΚΟΜΙΔΕΣ
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Εξειδικευμένες Διακομιδές
              <span className="block text-purple-600 mt-2">Ειδικών Αναγκών</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Προσφέρουμε εξειδικευμένες υπηρεσίες διακομιδής για ασθενείς με ειδικές ανάγκες,
              βαριατρικές περιπτώσεις, παιδιά, ψυχιατρικούς ασθενείς και κρίσιμες καταστάσεις.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-xl bg-purple-600 hover:bg-purple-700 px-8 py-6" asChild>
                <a href={`tel:${COMPANY_INFO.phone}`}>
                  <Phone className="mr-3 w-6 h-6" />
                  Κλήση: {COMPANY_INFO.phone}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-xl px-8 py-6">
                <Stethoscope className="mr-3 w-6 h-6" />
                Συμβουλή Ειδικού
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Οι Εξειδικεύσεις Μας
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Κάθε ειδικός τύπος διακομιδής απαιτεί διαφορετική προσέγγιση,
              εξοπλισμό και εκπαίδευση προσωπικού
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {specializations.map((spec, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 relative"
              >
                {spec.urgent && (
                  <Badge className="absolute -top-3 left-6 bg-red-600">
                    Επείγον Διαθέσιμο
                  </Badge>
                )}

                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <spec.icon className="w-8 h-8 text-purple-600" />
                    <CardTitle className="text-xl">{spec.title}</CardTitle>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{spec.description}</p>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Μέγιστο Βάρος:</span>
                      <span className="text-purple-600">{spec.maxWeight}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Τιμή από:</span>
                      <span className="text-2xl font-bold text-gray-900">
                        {formatPrice(spec.price)}
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {spec.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-2">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                      <a href={`tel:${COMPANY_INFO.phone}`}>
                        Κράτηση Τώρα
                      </a>
                    </Button>
                    <Button className="w-full" variant="outline" size="sm">
                      Περισσότερες Πληροφορίες
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Ειδικός Εξοπλισμός
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Διαθέτουμε τον πλέον σύγχρονο και εξειδικευμένο εξοπλισμό
              για κάθε τύπο ειδικής διακομιδής
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {equipment.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Shield className="w-6 h-6 mr-2 text-purple-600" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-3 text-green-500 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Διαδικασία Ειδικής Διακομιδής
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Προσεκτικός σχεδιασμός και προετοιμασία για κάθε ειδική περίπτωση
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center pb-3">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-purple-600">{step.step}</span>
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      {step.items.map((item, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training & Certification */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Εκπαίδευση & Πιστοποιήσεις
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Το προσωπικό μας έχει λάβει εξειδικευμένη εκπαίδευση για κάθε τύπο ειδικής διακομιδής
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 text-center">
              <User className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-3">Πιστοποιήσεις Προσωπικού</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Πιστοποίηση ΕΚΑΒ</li>
                <li>• Εκπαίδευση CPR/AED</li>
                <li>• Βαριατρική νοσηλευτική</li>
                <li>• Παιδιατρική φροντίδα</li>
                <li>• Ψυχιατρική νοσηλευτική</li>
              </ul>
            </Card>

            <Card className="p-6 text-center">
              <Stethoscope className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-3">Ιατρική Υποστήριξη</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Συνεργασία με ειδικούς ιατρούς</li>
                <li>• 24/7 ιατρική παρακολούθηση</li>
                <li>• Τηλε-συμβουλευτική</li>
                <li>• Άμεση επικοινωνία με νοσοκομεία</li>
                <li>• Ιατρικές οδηγίες real-time</li>
              </ul>
            </Card>

            <Card className="p-6 text-center">
              <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-3">Πρωτόκολλα Ασφαλείας</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Διαδικασίες risk assessment</li>
                <li>• Πρωτόκολλα infection control</li>
                <li>• Αξιολόγηση ασφαλείας</li>
                <li>• Emergency procedures</li>
                <li>• Τακτικά safety drills</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Συχνές Ερωτήσεις
            </h2>
            <p className="text-xl text-gray-600">
              Απαντήσεις σε συχνές ερωτήσεις για τις ειδικές διακομιδές
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg mb-3 flex items-start">
                  <AlertCircle className="w-5 h-5 mr-2 text-purple-600 mt-0.5" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed ml-7">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Χρειάζεστε Εξειδικευμένη Διακομιδή;
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Επικοινωνήστε μαζί μας για λεπτομερή συζήτηση των αναγκών σας.
            Οι ειδικοί μας θα σας καθοδηγήσουν στην καλύτερη λύση.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-xl bg-white hover:bg-gray-100 text-purple-600 px-8 py-6" asChild>
              <a href={`tel:${COMPANY_INFO.phone}`}>
                <Phone className="mr-3 w-6 h-6" />
                Άμεση Κλήση
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-xl bg-transparent border-white text-white hover:bg-white hover:text-purple-600 px-8 py-6">
              <Stethoscope className="mr-3 w-6 h-6" />
              Συμβουλή Ειδικού
            </Button>
          </div>

          <div className="mt-8 text-white/80">
            <p>Κάθε περίπτωση είναι μοναδική - σχεδιάζουμε την ιδανική λύση για εσάς</p>
          </div>
        </div>
      </section>
    </div>
  );
}