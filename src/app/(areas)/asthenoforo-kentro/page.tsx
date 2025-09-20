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
  Award
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ασθενοφόρο Κέντρο Θεσσαλονίκης | 24/7 Υπηρεσίες Ασθενοφόρου',
  description: 'Άμεση εξυπηρέτηση με ασθενοφόρο στο κέντρο Θεσσαλονίκης. Διαθέσιμοι 24/7 για επείγοντα περιστατικά και προγραμματισμένες μεταφορές. Κλήση: 2310 123456',
  keywords: 'ασθενοφόρο κέντρο θεσσαλονίκης, επείγον περιστατικό, μεταφορά ασθενούς, 24ωρη εξυπηρέτηση',
  openGraph: {
    title: 'Ασθενοφόρο Κέντρο Θεσσαλονίκης | 24/7 Υπηρεσίες',
    description: 'Άμεση εξυπηρέτηση με ασθενοφόρο στο κέντρο Θεσσαλονίκης. Διαθέσιμοι 24/7.',
    url: 'https://asthenoforo-thessaloniki.gr/asthenoforo-kentro',
    type: 'website',
  },
}

const nearbyHospitals = [
  { name: 'Ιπποκράτειο Νοσοκομείο', distance: '2.5 km', time: '8 λεπτά' },
  { name: 'ΑΧΕΠΑ Νοσοκομείο', distance: '3.2 km', time: '12 λεπτά' },
  { name: 'Παπαγεωργίου Νοσοκομείο', distance: '4.1 km', time: '15 λεπτά' },
  { name: 'Γ.Ν. Θεσσαλονίκης Γ. Παπανικολάου', distance: '5.8 km', time: '18 λεπτά' },
]

const coverageAreas = [
  'Λαδάδικα', 'Αριστοτέλους', 'Τσιμισκή', 'Εγνατία', 'Βαρδάρη',
  'Καμάρα', 'Παναγούδα', 'Τούμπα Κέντρο', 'Αγ. Σοφία', 'Ναυαρίνου'
]

const stats = [
  { icon: Clock, value: '3-8', label: 'Λεπτά άφιξης', color: 'text-green-600' },
  { icon: Users, value: '1200+', label: 'Εξυπηρετήσεις/μήνα', color: 'text-blue-600' },
  { icon: Star, value: '4.9/5', label: 'Αξιολόγηση', color: 'text-yellow-600' },
  { icon: Award, value: '24/7', label: 'Διαθεσιμότητα', color: 'text-purple-600' },
]

export default function AsthenоforoKentro() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-red-600 hover:bg-red-700">
              <Heart className="w-4 h-4 mr-2" />
              Επείγοντα Περιστατικά
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Ασθενοφόρο<br />
              <span className="text-yellow-400">Κέντρο Θεσσαλονίκης</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Άμεση εξυπηρέτηση 24/7 στο κέντρο της πόλης. Ειδικευμένο προσωπικό και σύγχρονος εξοπλισμός για την ασφάλειά σας.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Κλήση: 2310 123456
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                <MapPin className="w-5 h-5 mr-2" />
                Εντοπισμός Θέσης
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-green-400" />
                <span>Άφιξη σε 3-8 λεπτά</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-blue-400" />
                <span>Πιστοποιημένο προσωπικό</span>
              </div>
              <div className="flex items-center">
                <Ambulance className="w-4 h-4 mr-2 text-yellow-400" />
                <span>Σύγχρονος εξοπλισμός</span>
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

      {/* Coverage Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Περιοχές Εξυπηρέτησης στο Κέντρο
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                  Καλύπτουμε όλες τις κεντρικές περιοχές:
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {coverageAreas.map((area, index) => (
                    <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm border">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <span className="text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                  Γιατί να μας επιλέξετε;
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Ταχύτητα</h4>
                      <p className="text-gray-600">Άφιξη σε 3-8 λεπτά στο κέντρο της πόλης</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-6 h-6 text-green-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Εμπειρία</h4>
                      <p className="text-gray-600">Ειδικευμένο προσωπικό με πιστοποιήσεις</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-purple-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Ασφάλεια</h4>
                      <p className="text-gray-600">Πλήρης ασφάλιση και σύγχρονος εξοπλισμός</p>
                    </div>
                  </div>
                </div>
              </div>
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
                        <CardDescription>{hospital.distance} από το κέντρο</CardDescription>
                      </div>
                      <Badge variant="secondary">{hospital.time}</Badge>
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
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Χρειάζεστε άμεση βοήθεια;
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-red-100">
            Είμαστε διαθέσιμοι 24 ώρες το 24ωρο, 7 ημέρες την εβδομάδα για να σας εξυπηρετήσουμε στο κέντρο Θεσσαλονίκης.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Κλήση Τώρα: 2310 123456
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg">
              Προγραμματισμός Μεταφοράς
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}