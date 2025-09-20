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
  Home,
  School
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ασθενοφόρο Τούμπα | 24/7 Υπηρεσίες Ασθενοφόρου Θεσσαλονίκη',
  description: 'Άμεση εξυπηρέτηση με ασθενοφόρο στην Τούμπα Θεσσαλονίκης. Εξυπηρέτηση κοντά στο Πανεπιστήμιο και κατοικημένες περιοχές. Κλήση: 2310 123456',
  keywords: 'ασθενοφόρο τούμπα, επείγον περιστατικό τούμπα, μεταφορά ασθενούς θεσσαλονίκη, φοιτητικές περιοχές',
  openGraph: {
    title: 'Ασθενοφόρο Τούμπα | 24/7 Υπηρεσίες',
    description: 'Άμεση εξυπηρέτηση με ασθενοφόρο στην Τούμπα. Διαθέσιμοι 24/7.',
    url: 'https://asthenoforo-thessaloniki.gr/asthenoforo-toumba',
    type: 'website',
  },
}

const nearbyHospitals = [
  { name: 'ΑΧΕΠΑ Νοσοκομείο', distance: '1.8 km', time: '6 λεπτά' },
  { name: 'Ιπποκράτειο Νοσοκομείο', distance: '3.5 km', time: '12 λεπτά' },
  { name: 'Παπαγεωργίου Νοσοκομείο', distance: '5.2 km', time: '18 λεπτά' },
  { name: 'Γ.Ν. Θεσσαλονίκης Γ. Παπανικολάου', distance: '6.8 km', time: '22 λεπτά' },
]

const coverageAreas = [
  'Τούμπα Κέντρο', 'Άνω Τούμπα', 'Κάτω Τούμπα', 'Φοιτητική Εστία', 'Πανεπιστήμιο ΑΠΘ',
  'Χαριλάου', 'Σταδίου', 'Καλλιθέα', 'Πολίχνη', 'Ελευθέριο'
]

const communityFeatures = [
  {
    title: 'Φοιτητική Περιοχή',
    description: 'Εξειδικευμένες υπηρεσίες για φοιτητές και νέους',
    icon: School
  },
  {
    title: 'Κοινότητα',
    description: 'Εξυπηρέτηση παραδοσιακής γειτονιάς με ιστορία',
    icon: Home
  },
  {
    title: 'Αθλητικό Κέντρο',
    description: 'Κοντά σε αθλητικές εγκαταστάσεις και στάδιο',
    icon: Users
  }
]

const stats = [
  { icon: Clock, value: '4-10', label: 'Λεπτά άφιξης', color: 'text-green-600' },
  { icon: Users, value: '700+', label: 'Εξυπηρετήσεις/μήνα', color: 'text-blue-600' },
  { icon: Star, value: '4.8/5', label: 'Αξιολόγηση', color: 'text-yellow-600' },
  { icon: Award, value: '24/7', label: 'Διαθεσιμότητα', color: 'text-purple-600' },
]

const specialServices = [
  'Επείγουσες φοιτητικές ανάγκες',
  'Αθλητικά τραύματα',
  'Οικογενειακές επείγουσες ανάγκες',
  'Γειτονικές υπηρεσίες',
  'Μεταφορές σε ιδιωτικά ιατρεία',
  'Προγραμματισμένες εξετάσεις'
]

export default function AsthenоforoToumba() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */
      <section className="relative bg-gradient-to-r from-orange-900 via-orange-800 to-red-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-red-600 hover:bg-red-700">
              <Heart className="w-4 h-4 mr-2" />
              Κοινότητα & Πανεπιστήμιο
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Ασθενοφόρο<br />
              <span className="text-yellow-400">Τούμπα</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto">
              Εξυπηρετούμε την Τούμπα με ιδιαίτερη προσοχή στις ανάγκες φοιτητών και οικογενειών. Γειτονική φροντίδα 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Κλήση: 2310 123456
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-900 px-8 py-4 text-lg">
                <MapPin className="w-5 h-5 mr-2" />
                Εντοπισμός Θέσης
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-green-400" />
                <span>Άφιξη σε 4-10 λεπτά</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-blue-400" />
                <span>Κοινοτική φροντίδα</span>
              </div>
              <div className="flex items-center">
                <School className="w-4 h-4 mr-2 text-yellow-400" />
                <span>Φοιτητικές υπηρεσίες</span>
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

      {/* Community Features */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Εξυπηρέτηση Κοινότητας
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {communityFeatures.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                      <feature.icon className="w-8 h-8 text-orange-600" />
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

      {/* Special Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Ειδικές Υπηρεσίες Τούμπας
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                  Προσαρμοσμένες υπηρεσίες:
                </h3>
                <div className="space-y-3">
                  {specialServices.map((service, index) => (
                    <div key={index} className="flex items-center p-3 bg-orange-50 rounded-lg border border-orange-200">
                      <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-orange-200">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                  Χαρακτηριστικά Περιοχής
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <School className="w-6 h-6 text-orange-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Πανεπιστήμιο</h4>
                      <p className="text-gray-600">Εξειδίκευση στις ανάγκες φοιτητικού πληθυσμού</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Home className="w-6 h-6 text-green-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Γειτονιά</h4>
                      <p className="text-gray-600">Παραδοσιακή κοινότητα με οικογενειακό χαρακτήρα</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-6 h-6 text-purple-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Αθλητισμός</h4>
                      <p className="text-gray-600">Κοντά σε αθλητικές εγκαταστάσεις και στάδιο ΠΑΟΚ</p>
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
                  <CheckCircle className="w-4 h-4 text-orange-600 mr-2" />
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
              Κοντινά Νοσοκομεία
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {nearbyHospitals.map((hospital, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">{hospital.name}</CardTitle>
                        <CardDescription>{hospital.distance} από Τούμπα</CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-orange-100 text-orange-800">
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
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Εξυπηρετούμε την Τούμπα 24/7
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-orange-100">
            Γειτονική φροντίδα για φοιτητές και οικογένειες. Είμαστε εδώ για κάθε επείγουσα ανάγκη στην Τούμπα.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Κλήση Τώρα: 2310 123456
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg">
              Προγραμματισμός Μεταφοράς
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}