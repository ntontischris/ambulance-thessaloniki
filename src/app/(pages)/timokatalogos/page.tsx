'use client'

import { useState } from 'react'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Phone,
  Clock,
  MapPin,
  Shield,
  Star,
  CheckCircle,
  Calculator,
  Users,
  Heart,
  Award,
  Zap,
  CreditCard,
  Euro,
  Route
} from 'lucide-react'

const pricingPlans = [
  {
    name: 'Επείγον Περιστατικό',
    description: 'Άμεση ανταπόκριση για επείγουσες ανάγκες',
    basePrice: 80,
    pricePerKm: 2.5,
    features: [
      'Άμεση άφιξη σε 3-8 λεπτά',
      'Πλήρης ιατρικός εξοπλισμός',
      'Πιστοποιημένο προσωπικό',
      'Συνοδεία μέχρι νοσοκομείο',
      '24/7 διαθεσιμότητα'
    ],
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200'
  },
  {
    name: 'Προγραμματισμένη Μεταφορά',
    description: 'Προγραμματισμένες υπηρεσίες με εκπτώσεις',
    basePrice: 60,
    pricePerKm: 2.0,
    features: [
      'Προγραμματισμός 24ωρες νωρίτερα',
      'Εκπτώσεις για πολλαπλές μεταφορές',
      'Ειδική φροντίδα ηλικιωμένων',
      'Μεταφορά σε ιδιωτικές κλινικές',
      'Επιλογή χρόνου'
    ],
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    name: 'Διεθνής Μεταφορά',
    description: 'Μεταφορές εκτός Ελλάδας',
    basePrice: 200,
    pricePerKm: 1.8,
    features: [
      'Διεθνείς μεταφορές',
      'Επαναπατρισμός ασθενών',
      'Συνοδεία νοσηλευτή',
      'Διεκπεραίωση εγγράφων',
      'Ειδικός εξοπλισμός'
    ],
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  {
    name: 'Ειδικές Ανάγκες',
    description: 'Εξειδικευμένες υπηρεσίες μεταφοράς',
    basePrice: 100,
    pricePerKm: 3.0,
    features: [
      'Βαριατρικές μεταφορές',
      'Παιδιατρικές υπηρεσίες',
      'Ψυχιατρικές μεταφορές',
      'Ειδικός εξοπλισμός',
      'Εκπαιδευμένο προσωπικό'
    ],
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200'
  }
]

const areas = [
  { name: 'Κέντρο Θεσσαλονίκης', distance: 0 },
  { name: 'Καλαμαριά', distance: 8 },
  { name: 'Ευκαρπία', distance: 12 },
  { name: 'Νεάπολη', distance: 6 },
  { name: 'Πυλαία', distance: 15 },
  { name: 'Τούμπα', distance: 5 },
  { name: 'Συκέες', distance: 10 },
  { name: 'Αμπελόκηποι', distance: 7 },
  { name: 'Χαριλάου', distance: 4 },
  { name: 'Κορδελιό', distance: 14 }
]

const hospitals = [
  'Ιπποκράτειο Νοσοκομείο',
  'ΑΧΕΠΑ Νοσοκομείο',
  'Παπαγεωργίου Νοσοκομείο',
  'Γ.Ν. Θεσσαλονίκης Γ. Παπανικολάου',
  'Ιατρικό Κέντρο Καλαμαριάς',
  'Άλλο'
]

export default function TimokatalogosPage() {
  const [selectedService, setSelectedService] = useState('')
  const [fromArea, setFromArea] = useState('')
  const [toArea, setToArea] = useState('')
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null)

  const calculatePrice = () => {
    if (!selectedService || !fromArea || !toArea) return

    const service = pricingPlans.find(p => p.name === selectedService)
    const fromLocation = areas.find(a => a.name === fromArea)
    const toLocation = areas.find(a => a.name === toArea)

    if (!service || !fromLocation) return

    let distance = Math.abs((toLocation?.distance || 0) - fromLocation.distance)
    if (distance === 0) distance = 3 // Minimum distance within same area

    const totalPrice = service.basePrice + (distance * service.pricePerKm)
    setCalculatedPrice(totalPrice)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-green-600 hover:bg-green-700">
              <Euro className="w-4 h-4 mr-2" />
              Διαφανής Τιμολόγηση
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Τιμοκατάλογος<br />
              <span className="text-yellow-400">Ασθενοφόρου</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Διαφανείς τιμές για όλες τις υπηρεσίες μας. Υπολογίστε το κόστος της μεταφοράς σας με τον online υπολογιστή.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Κλήση: 2310 123456
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                <Calculator className="w-5 h-5 mr-2" />
                Υπολογιστής Κόστους
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Price Calculator */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Υπολογιστής Κόστους Μεταφοράς
            </h2>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="w-6 h-6 mr-2 text-blue-600" />
                  Υπολογίστε το Κόστος
                </CardTitle>
                <CardDescription>
                  Επιλέξτε τον τύπο υπηρεσίας και τις περιοχές για να δείτε την τιμή
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="service">Τύπος Υπηρεσίας</Label>
                    <Select value={selectedService} onValueChange={setSelectedService}>
                      <SelectTrigger>
                        <SelectValue placeholder="Επιλέξτε υπηρεσία" />
                      </SelectTrigger>
                      <SelectContent>
                        {pricingPlans.map((plan) => (
                          <SelectItem key={plan.name} value={plan.name}>
                            {plan.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="from">Από περιοχή</Label>
                    <Select value={fromArea} onValueChange={setFromArea}>
                      <SelectTrigger>
                        <SelectValue placeholder="Επιλέξτε περιοχή" />
                      </SelectTrigger>
                      <SelectContent>
                        {areas.map((area) => (
                          <SelectItem key={area.name} value={area.name}>
                            {area.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="to">Προς (Νοσοκομείο/Περιοχή)</Label>
                    <Select value={toArea} onValueChange={setToArea}>
                      <SelectTrigger>
                        <SelectValue placeholder="Επιλέξτε προορισμό" />
                      </SelectTrigger>
                      <SelectContent>
                        {[...hospitals, ...areas.map(a => a.name)].map((destination) => (
                          <SelectItem key={destination} value={destination}>
                            {destination}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button onClick={calculatePrice} size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Calculator className="w-5 h-5 mr-2" />
                    Υπολογισμός Κόστους
                  </Button>
                </div>

                {calculatedPrice && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <h3 className="text-2xl font-bold text-green-800 mb-2">
                      Εκτιμώμενο Κόστος: €{calculatedPrice}
                    </h3>
                    <p className="text-green-600">
                      Η τελική τιμή μπορεί να διαφέρει ανάλογα με τις ειδικές ανάγκες
                    </p>
                    <Button className="mt-4 bg-green-600 hover:bg-green-700">
                      <Phone className="w-4 h-4 mr-2" />
                      Κλήση για Κράτηση
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Πλάνα Υπηρεσιών & Τιμές
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingPlans.map((plan, index) => (
                <Card key={index} className={`${plan.bgColor} ${plan.borderColor} border-2 hover:shadow-lg transition-shadow`}>
                  <CardHeader>
                    <div className="text-center">
                      <CardTitle className={`text-2xl ${plan.color}`}>{plan.name}</CardTitle>
                      <CardDescription className="mt-2">{plan.description}</CardDescription>
                      <div className="mt-4">
                        <div className={`text-3xl font-bold ${plan.color}`}>
                          €{plan.basePrice}
                        </div>
                        <div className="text-sm text-gray-600">
                          + €{plan.pricePerKm}/km
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-4" variant="outline">
                      Επιλογή Πλάνου
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Payment & Additional Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Τρόποι Πληρωμής & Επιπλέον Πληροφορίες
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="w-6 h-6 mr-2 text-blue-600" />
                    Τρόποι Πληρωμής
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <span>Μετρητά</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <span>Κάρτα (Visa, Mastercard)</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <span>Τραπεζική μεταφορά</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <span>Ασφαλιστικός φορέας</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Route className="w-6 h-6 mr-2 text-purple-600" />
                    Επιπλέον Χρεώσεις
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span>Νυχτερινή μεταφορά (22:00-06:00)</span>
                      <span className="font-semibold">+20%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Αργίες & Κυριακές</span>
                      <span className="font-semibold">+15%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Αναμονή (ανά 15λεπτο)</span>
                      <span className="font-semibold">€10</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Ακύρωση {'<'} 2 ώρες</span>
                      <span className="font-semibold">€25</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Χρειάζεστε άμεση εξυπηρέτηση;
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Καλέστε μας τώρα για άμεση κράτηση ή για περισσότερες πληροφορίες σχετικά με τις τιμές μας.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Κλήση Τώρα: 2310 123456
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
              <Calculator className="w-5 h-5 mr-2" />
              Υπολογιστής Κόστους
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}