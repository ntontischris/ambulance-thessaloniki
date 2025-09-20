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
  TreePine,
  Home
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ασθενοφόρο Ευκαρπία | 24/7 Υπηρεσίες Ασθενοφόρου Θεσσαλονίκη',
  description: 'Άμεση εξυπηρέτηση με ασθενοφόρο στην Ευκαρπία Θεσσαλονίκης. Εξειδικευμένες υπηρεσίες για κατοικημένες περιοχές. Διαθέσιμοι 24/7. Κλήση: 2310 123456',
  keywords: 'ασθενοφόρο ευκαρπία, επείγον περιστατικό ευκαρπία, μεταφορά ασθενούς θεσσαλονίκη, υγεία κοινότητας',
  openGraph: {
    title: 'Ασθενοφόρο Ευκαρπία | 24/7 Υπηρεσίες',
    description: 'Άμεση εξυπηρέτηση με ασθενοφόρο στην Ευκαρπία. Διαθέσιμοι 24/7.',
    url: 'https://asthenoforo-thessaloniki.gr/asthenoforo-eukarpia',
    type: 'website',
  },
}

const nearbyHospitals = [
  { name: 'Γ.Ν. Θεσσαλονίκης Γ. Παπανικολάου', distance: '2.8 km', time: '8 λεπτά' },
  { name: 'Ιπποκράτειο Νοσοκομείο', distance: '5.5 km', time: '18 λεπτά' },
  { name: 'ΑΧΕΠΑ Νοσοκομείο', distance: '6.2 km', time: '20 λεπτά' },
  { name: 'Παπαγεωργίου Νοσοκομείο', distance: '7.8 km', time: '25 λεπτά' },
]

const coverageAreas = [
  'Ευκαρπία Κέντρο', 'Νέα Ευκαρπία', 'Νεάπολη', 'Ίλιον', 'Συκέες',
  'Αμπελόκηποι', 'Άνω Τούμπα', 'Σταυρούπολη', 'Μεσημβρία', 'Κορδελιό'
]

const residentialFeatures = [
  {
    title: 'Οικογενειακή Φροντίδα',
    description: 'Εξειδικευμένες υπηρεσίες για οικογένειες και παιδιά',
    icon: Home
  },
  {
    title: 'Ήσυχη Περιοχή',
    description: 'Προσαρμοσμένες υπηρεσίες για κατοικημένες ζώνες',
    icon: TreePine
  },
  {
    title: 'Τοπική Κοινότητα',
    description: 'Μέλος της κοινότητας της Ευκαρπίας για 20+ χρόνια',
    icon: Users
  }
]

const stats = [
  { icon: Clock, value: '5-12', label: 'Λεπτά άφιξης', color: 'text-green-600' },
  { icon: Users, value: '600+', label: 'Εξυπηρετήσεις/μήνα', color: 'text-blue-600' },
  { icon: Star, value: '4.9/5', label: 'Αξιολόγηση', color: 'text-yellow-600' },
  { icon: Award, value: '24/7', label: 'Διαθεσιμότητα', color: 'text-purple-600' },
]

const services = [
  'Επείγοντα περιστατικά',
  'Προγραμματισμένες μεταφορές',
  'Μεταφορά ηλικιωμένων',
  'Παιδιατρικές μεταφορές',
  'Μεταφορές από/προς νοσοκομεία',
  'Ιατρικές εξετάσεις'
]

export default function AsthenоforoEukarpia() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-900 via-emerald-800 to-green-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-red-600 hover:bg-red-700">
              <Heart className="w-4 h-4 mr-2" />
              Φροντίδα Κοινότητας
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Ασθενοφόρο<br />
              <span className="text-yellow-400">Ευκαρπία</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-emerald-100 max-w-3xl mx-auto">
              Εξυπηρετούμε την κοινότητα της Ευκαρπίας με αφοσίωση και προσοχή. Οικογενειακές υπηρεσίες υγείας 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Κλήση: 2310 123456
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-900 px-8 py-4 text-lg">
                <MapPin className="w-5 h-5 mr-2" />
                Εντοπισμός Θέσης
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-green-400" />
                <span>Άφιξη σε 5-12 λεπτά</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-blue-400" />
                <span>Εξειδικευμένο προσωπικό</span>
              </div>
              <div className="flex items-center">
                <Home className="w-4 h-4 mr-2 text-yellow-400" />
                <span>Οικογενειακή φροντίδα</span>
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

      {/* Services Section */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Υπηρεσίες για την Κοινότητα
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                  Πλήρες φάσμα υπηρεσιών:
                </h3>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm border">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-3" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                {residentialFeatures.map((feature, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                          <feature.icon className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{feature.title}</CardTitle>
                          <CardDescription className="mt-1">{feature.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Περιοχές που Εξυπηρετούμε
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                  Βόρεια Θεσσαλονίκη:
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {coverageAreas.map((area, index) => (
                    <div key={index} className="flex items-center p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-3" />
                      <span className="text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-emerald-200">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                  Εξειδικευμένη Φροντίδα
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Home className="w-6 h-6 text-emerald-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Οικογενειακές Υπηρεσίες</h4>
                      <p className="text-gray-600">Ειδική φροντίδα για παιδιά και ηλικιωμένους</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <TreePine className="w-6 h-6 text-green-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Περιβάλλον</h4>
                      <p className="text-gray-600">Προσαρμογή στις ήσυχες κατοικημένες περιοχές</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-6 h-6 text-purple-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Κοινότητα</h4>
                      <p className="text-gray-600">Μέρος της τοπικής κοινότητας εδώ και δεκαετίες</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Hospitals */}
      <section className="py-16 bg-gray-50">
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
                        <CardDescription>{hospital.distance} από Ευκαρπία</CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
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
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Φροντίζουμε την Ευκαρπία 24/7
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-emerald-100">
            Είμαστε εδώ για τις οικογένειες της Ευκαρπίας. Επικοινωνήστε μαζί μας για άμεση βοήθεια ή προγραμματισμένες υπηρεσίες.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Κλήση Τώρα: 2310 123456
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg">
              Προγραμματισμός Μεταφοράς
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}