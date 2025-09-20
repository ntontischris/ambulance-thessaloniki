'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import {
  Calculator,
  MapPin,
  Clock,
  Info,
  Phone,
  AlertCircle,
  CheckCircle,
  Euro,
  Route
} from 'lucide-react';
import { motion } from 'framer-motion';

interface PricingResult {
  basePrice: number;
  distancePrice: number;
  timePrice: number;
  equipmentPrice: number;
  insuranceDiscount: number;
  totalPrice: number;
  estimatedTime: number;
  distance: number;
}

const serviceTypes = [
  {
    value: 'emergency',
    label: 'Επείγουσα Διακομιδή',
    basePrice: 120,
    description: 'Άμεση ανταπόκριση 24/7',
    multiplier: 1.5,
  },
  {
    value: 'scheduled',
    label: 'Προγραμματισμένη',
    basePrice: 80,
    description: 'Διάλυση, εξετάσεις, επισκέψεις',
    multiplier: 1.0,
  },
  {
    value: 'international',
    label: 'Διεθνής Μεταφορά',
    basePrice: 200,
    description: 'Επαναπατρισμός, διασυνοριακή',
    multiplier: 2.0,
  },
  {
    value: 'special',
    label: 'Ειδικές Ανάγκες',
    basePrice: 100,
    description: 'Βαριατρική, παιδιατρική',
    multiplier: 1.3,
  },
];

const mobilityTypes = [
  { value: 'walking', label: 'Περπάτημα', price: 0 },
  { value: 'wheelchair', label: 'Αναπηρικό Καροτσάκι', price: 15 },
  { value: 'stretcher', label: 'Φορείο', price: 25 },
  { value: 'icu', label: 'ΜΕΘ/Εντατική', price: 50 },
];

const insuranceProviders = [
  { value: 'none', label: 'Χωρίς Ασφάλεια', discount: 0 },
  { value: 'eopyy', label: 'ΕΟΠΥΥ', discount: 0.3 },
  { value: 'oaee', label: 'ΟΑΕΕ', discount: 0.25 },
  { value: 'private', label: 'Ιδιωτική Ασφάλεια', discount: 0.4 },
  { value: 'european', label: 'Ευρωπαϊκή Κάρτα', discount: 0.35 },
];

const popularRoutes = [
  { from: 'Κέντρο Θεσσαλονίκης', to: 'ΑΧΕΠΑ', distance: 3.2, time: 12 },
  { from: 'Καλαμαριά', to: 'Ιπποκράτειο', distance: 8.5, time: 18 },
  { from: 'Πυλαία', to: 'Άγιος Δημήτριος', distance: 12.3, time: 22 },
  { from: 'Θέρμη', to: 'Παπανικολάου', distance: 15.8, time: 28 },
];

export default function PriceCalculator() {
  const [serviceType, setServiceType] = useState('');
  const [fromAddress, setFromAddress] = useState('');
  const [toAddress, setToAddress] = useState('');
  const [mobilityType, setMobilityType] = useState('walking');
  const [insurance, setInsurance] = useState('none');
  const [isUrgent, setIsUrgent] = useState(false);
  const [pricingResult, setPricingResult] = useState<PricingResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculatePrice = async () => {
    if (!serviceType || !fromAddress || !toAddress) {
      return;
    }

    setIsCalculating(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Mock distance calculation (in real app, use Google Maps API)
    const mockDistance = Math.random() * 20 + 2; // 2-22 km
    const mockTime = Math.round(mockDistance * 2.5 + Math.random() * 10); // minutes

    const selectedService = serviceTypes.find(s => s.value === serviceType)!;
    const selectedMobility = mobilityTypes.find(m => m.value === mobilityType)!;
    const selectedInsurance = insuranceProviders.find(i => i.value === insurance)!;

    const basePrice = selectedService.basePrice;
    const distancePrice = mockDistance * 3.5; // €3.5 per km
    const timePrice = isUrgent ? 30 : 0; // Urgency fee
    const equipmentPrice = selectedMobility.price;

    const subtotal = basePrice + distancePrice + timePrice + equipmentPrice;
    const insuranceDiscount = subtotal * selectedInsurance.discount;
    const totalPrice = subtotal - insuranceDiscount;

    setPricingResult({
      basePrice,
      distancePrice,
      timePrice,
      equipmentPrice,
      insuranceDiscount,
      totalPrice,
      estimatedTime: mockTime,
      distance: mockDistance,
    });

    setIsCalculating(false);
  };

  const selectPopularRoute = (route: typeof popularRoutes[0]) => {
    setFromAddress(route.from);
    setToAddress(route.to);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Calculator className="w-6 h-6" />
          Υπολογιστής Κόστους
        </CardTitle>
        <p className="text-gray-600">
          Υπολογίστε το κόστος της διακομιδής σας άμεσα και δωρεάν
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Service Type Selection */}
        <div>
          <Label className="text-base font-medium">Τύπος Υπηρεσίας *</Label>
          <div className="grid gap-3 mt-2">
            {serviceTypes.map((service) => (
              <div
                key={service.value}
                className={`p-4 border rounded-lg cursor-pointer transition-all ${
                  serviceType === service.value
                    ? 'border-primary bg-primary/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setServiceType(service.value)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{service.label}</div>
                    <div className="text-sm text-gray-600">{service.description}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-primary">από €{service.basePrice}</div>
                    <div className="text-xs text-gray-500">βασικό κόστος</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Routes */}
        <div>
          <Label className="text-base font-medium">Δημοφιλείς Διαδρομές</Label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {popularRoutes.map((route, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="h-auto p-2 text-left justify-start"
                onClick={() => selectPopularRoute(route)}
              >
                <div>
                  <div className="text-xs font-medium">{route.from}</div>
                  <div className="text-xs text-gray-600">→ {route.to}</div>
                </div>
              </Button>
            ))}
          </div>
        </div>

        {/* Addresses */}
        <div className="grid gap-4">
          <div>
            <Label htmlFor="from">Από *</Label>
            <Input
              id="from"
              value={fromAddress}
              onChange={(e) => setFromAddress(e.target.value)}
              placeholder="Διεύθυνση παραλαβής"
            />
          </div>
          <div>
            <Label htmlFor="to">Προς *</Label>
            <Input
              id="to"
              value={toAddress}
              onChange={(e) => setToAddress(e.target.value)}
              placeholder="Προορισμός"
            />
          </div>
        </div>

        {/* Mobility Type */}
        <div>
          <Label>Κατάσταση Κινητικότητας</Label>
          <Select value={mobilityType} onValueChange={setMobilityType}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {mobilityTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  <div className="flex items-center justify-between w-full">
                    <span>{type.label}</span>
                    {type.price > 0 && (
                      <span className="text-sm text-gray-500 ml-2">+€{type.price}</span>
                    )}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Insurance */}
        <div>
          <Label>Ασφαλιστικός Φορέας</Label>
          <Select value={insurance} onValueChange={setInsurance}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {insuranceProviders.map((provider) => (
                <SelectItem key={provider.value} value={provider.value}>
                  <div className="flex items-center justify-between w-full">
                    <span>{provider.label}</span>
                    {provider.discount > 0 && (
                      <span className="text-sm text-green-600 ml-2">
                        -{(provider.discount * 100)}%
                      </span>
                    )}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Urgency Option */}
        {serviceType === 'scheduled' && (
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="urgent"
              checked={isUrgent}
              onChange={(e) => setIsUrgent(e.target.checked)}
              className="w-4 h-4"
            />
            <Label htmlFor="urgent" className="text-sm">
              Επείγουσα εντός ημέρας (+€30)
            </Label>
          </div>
        )}

        {/* Calculate Button */}
        <Button
          onClick={calculatePrice}
          disabled={!serviceType || !fromAddress || !toAddress || isCalculating}
          className="w-full"
          size="lg"
        >
          {isCalculating ? (
            <>
              <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2" />
              Υπολογισμός...
            </>
          ) : (
            <>
              <Calculator className="w-4 h-4 mr-2" />
              Υπολογισμός Κόστους
            </>
          )}
        </Button>

        {/* Results */}
        {pricingResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Summary Card */}
            <Card className="border-2 border-primary">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-primary">
                    €{pricingResult.totalPrice.toFixed(2)}
                  </div>
                  <div className="text-sm text-gray-600">Συνολικό Κόστος</div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Route className="w-4 h-4 text-gray-500" />
                    <span>{pricingResult.distance.toFixed(1)} km</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span>{pricingResult.estimatedTime} λεπτά</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ανάλυση Κόστους</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Βασικό κόστος</span>
                  <span>€{pricingResult.basePrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Κόστος διαδρομής ({pricingResult.distance.toFixed(1)} km)</span>
                  <span>€{pricingResult.distancePrice.toFixed(2)}</span>
                </div>
                {pricingResult.equipmentPrice > 0 && (
                  <div className="flex justify-between">
                    <span>Ειδικός εξοπλισμός</span>
                    <span>€{pricingResult.equipmentPrice.toFixed(2)}</span>
                  </div>
                )}
                {pricingResult.timePrice > 0 && (
                  <div className="flex justify-between">
                    <span>Επείγουσα εξυπηρέτηση</span>
                    <span>€{pricingResult.timePrice.toFixed(2)}</span>
                  </div>
                )}
                {pricingResult.insuranceDiscount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Ασφαλιστική κάλυψη</span>
                    <span>-€{pricingResult.insuranceDiscount.toFixed(2)}</span>
                  </div>
                )}
                <hr />
                <div className="flex justify-between font-bold text-lg">
                  <span>Σύνολο</span>
                  <span>€{pricingResult.totalPrice.toFixed(2)}</span>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="w-full">
                <CheckCircle className="w-4 h-4 mr-2" />
                Κράτηση Online
              </Button>
              <Button className="w-full" asChild>
                <a href="tel:2310XXXXXX">
                  <Phone className="w-4 h-4 mr-2" />
                  Καλέστε Τώρα
                </a>
              </Button>
            </div>

            {/* Disclaimer */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <Info className="w-4 h-4 text-blue-600 mt-0.5" />
                <div className="text-sm text-blue-800">
                  <div className="font-medium mb-1">Σημαντικές Πληροφορίες:</div>
                  <ul className="text-xs space-y-1">
                    <li>• Οι τιμές είναι ενδεικτικές και μπορεί να διαφέρουν</li>
                    <li>• Τελική τιμολόγηση κατά την κράτηση</li>
                    <li>• Νυχτερινό/εορταστικό προσαύξημα 25%</li>
                    <li>• Δωρεάν ακύρωση μέχρι 2 ώρες πριν</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
}