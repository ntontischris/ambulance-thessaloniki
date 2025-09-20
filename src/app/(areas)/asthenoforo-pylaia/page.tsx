import { Metadata } from 'next'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Phone,
  Clock,
  MapPin,
  Shield,
  Star,
  CheckCircle,
  Ambulance,
  Users,
  Heart,
  Award,
  Mountain,
  Car
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ασθενοφόρο Πυλαία | 24/7 Υπηρεσίες Ασθενοφόρου Θεσσαλονίκη',
  description: 'Άμεση εξυπηρέτηση με ασθενοφόρο στην Πυλαία Θεσσαλονίκης. Εξειδικευμένες υπηρεσίες για προάστια και ανάγκες σύγχρονων οικογενειών. Κλήση: 2310 123456',
  keywords: 'ασθενοφόρο πυλαία, επείγον περιστατικό πυλαία, μεταφορά ασθενούς θεσσαλονίκη, προάστια',
  openGraph: {
    title: 'Ασθενοφόρο Πυλαία | 24/7 Υπηρεσίες',
    description: 'Άμεση εξυπηρέτηση με ασθενοφόρο στην Πυλαία. Διαθέσιμοι 24/7.',
    url: 'https://asthenoforo-thessaloniki.gr/asthenoforo-pylaia',
    type: 'website',
  },
}

const nearbyHospitals = [
  { name: 'Ιατρικό Κέντρο Καλαμαριάς', distance: '2.5 km', time: '8 λεπτά' },
  { name: 'ΑΧΕΠΑ Νοσοκομείο', distance: '5.8 km', time: '18 λεπτά' },
  { name: 'Παπαγεωργίου Νοσοκομείο', distance: '4.2 km', time: '15 λεπτά' },
  { name: 'Ιπποκράτειο Νοσοκομείο', distance: '8.5 km', time: '25 λεπτά' },
]

const coverageAreas = [
  'Πυλαία Κέντρο', 'Χορτιάτης', 'Πανόραμα', 'Θέρμη', 'Ασβεστοχώρι',
  'Πεύκα', 'Φίλυρο', 'Αγ. Αντώνιος', 'Μπότσαρη', 'Εξοχή'
]

const suburbanFeatures = [
  {
    title: 'Προαστιακή Εξυπηρέτηση',
    description: 'Προσαρμοσμένες υπηρεσίες για προάστια και οικογένειες',
    icon: Mountain
  },
  {
    title: 'Εύκολη Πρόσβαση',
    description: 'Γρήγορη πρόσβαση από κύριους δρόμους και Περιφερειακό',
    icon: Car
  },
  {
    title: 'Σύγχρονη Περιοχή',
    description: 'Εξυπηρέτηση σύγχρονων αναγκών των κατοίκων',
    icon: Users
  }
]

const stats = [
  { icon: Clock, value: '6-15', label: 'Λεπτά άφιξης', color: 'text-green-600' },
  { icon: Users, value: '500+', label: 'Εξυπηρετήσεις/μήνα', color: 'text-blue-600' },
  { icon: Star, value: '4.9/5', label: 'Αξιολόγηση', color: 'text-yellow-600' },
  { icon: Award, value: '24/7', label: 'Διαθεσιμότητα', color: 'text-purple-600' },
]

const familyServices = [
  'Οικογενειακές επείγουσες ανάγκες',
  'Παιδιατρικές μεταφορές',
  'Μεταφορά ηλικιωμένων',
  'Προγραμματισμένες εξετάσεις',
  'Μεταφορές σε ιδιωτικές κλινικές',
  'Μεταφορές για χειρουργεία'
]

export default function AsthenоforoPylaia() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */
      <section className="relative bg-gradient-to-r from-indigo-900 via-indigo-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-red-600 hover:bg-red-700">
              <Heart className="w-4 h-4 mr-2" />
              Προαστιακή Φροντίδα
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Ασθενοφόρο<br />
              <span className="text-yellow-400">Πυλαία</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-indigo-100 max-w-3xl mx-auto">
              Εξυπηρετούμε την Πυλαία και τα προάστια με εξειδικευμένες υπηρεσίες για σύγχρονες οικογένειες. Αξιοπιστία 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Κλήση: 2310 123456
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-900 px-8 py-4 text-lg">
                <MapPin className="w-5 h-5 mr-2" />
                Εντοπισμός Θέσης
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-green-400" />
                <span>Άφιξη σε 6-15 λεπτά</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-blue-400" />
                <span>Οικογενειακή φροντίδα</span>
              </div>
              <div className="flex items-center">
                <Mountain className="w-4 h-4 mr-2 text-yellow-400" />
                <span>Προαστιακή εξειδίκευση</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4 ${stat.color}`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suburban Features */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Ειδικά για Προάστια
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {suburbanFeatures.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                      <feature.icon className="w-8 h-8 text-indigo-600" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Family Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Οικογενειακές Υπηρεσίες
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                  Εξειδικευμένη φροντίδα:
                </h3>
                <div className="space-y-3">
                  {familyServices.map((service, index) => (
                    <div key={index} className="flex items-center p-3 bg-indigo-50 rounded-lg border border-indigo-200">
                      <CheckCircle className="w-5 h-5 text-indigo-600 mr-3" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-indigo-200">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                  Προαστιακές Ανάγκες
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mountain className="w-6 h-6 text-indigo-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Περιβάλλον</h4>
                      <p className="text-gray-600">Προσαρμογή στις ιδιαιτερότητες των προαστίων</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Car className="w-6 h-6 text-green-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Πρόσβαση</h4>
                      <p className="text-gray-600">Εύκολη πρόσβαση από Περιφερειακό και κύριους δρόμους</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-6 h-6 text-purple-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Οικογένειες</h4>
                      <p className="text-gray-600">Ειδική φροντίδα για παιδιά και ηλικιωμένους</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Περιοχές Εξυπηρέτησης
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {coverageAreas.map((area, index) => (
                <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <CheckCircle className="w-4 h-4 text-indigo-600 mr-2" />
                  <span className="text-gray-700 text-sm">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Hospitals */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Κοντινά Νοσοκομεία & Κλινικές
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {nearbyHospitals.map((hospital, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">{hospital.name}</CardTitle>
                        <CardDescription>{hospital.distance} από Πυλαία</CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-indigo-100 text-indigo-800">
                        {hospital.time}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>Χρόνος μεταφοράς: {hospital.time}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Εξυπηρετούμε την Πυλαία 24/7
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-indigo-100">
            Οικογενειακή φροντίδα για την Πυλαία και τα προάστια. Επικοινωνήστε μαζί μας για άμεση βοήθεια ή προγραμματισμένες υπηρεσίες.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-4 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Κλήση Τώρα: 2310 123456
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 text-lg">
              Προγραμματισμός Μεταφοράς
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}