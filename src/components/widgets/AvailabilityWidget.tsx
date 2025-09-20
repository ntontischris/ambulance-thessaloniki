'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Phone,
  MapPin,
  Clock,
  Truck,
  Users,
  CheckCircle,
  AlertCircle,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AmbulanceStatus {
  id: string;
  area: string;
  status: 'available' | 'dispatched' | 'busy';
  estimatedTime: number; // minutes
  equipment: string[];
}

export default function AvailabilityWidget() {
  const [ambulances, setAmbulances] = useState<AmbulanceStatus[]>([]);
  const [isVisible, setIsVisible] = useState(true);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  // Simulate real-time ambulance data
  useEffect(() => {
    const updateAmbulances = () => {
      const areas = [
        'Κέντρο', 'Καλαμαριά', 'Πυλαία', 'Τούμπα',
        'Εύοσμο', 'Νεάπολη', 'Πανόραμα', 'Θέρμη'
      ];

      const equipment = [
        ['Βασικός Εξοπλισμός', 'Οξυγόνο'],
        ['Απινιδωτής', 'Monitor', 'Οξυγόνο'],
        ['Πλήρης ICU', 'Αναπνευστήρας', 'Απινιδωτής'],
        ['Βασικός Εξοπλισμός', 'Φορείο'],
      ];

      const newAmbulances: AmbulanceStatus[] = areas.slice(0, Math.floor(Math.random() * 4) + 2).map((area, index) => ({
        id: `AMB-${index + 1}`,
        area,
        status: Math.random() > 0.7 ? 'busy' : 'available',
        estimatedTime: Math.floor(Math.random() * 15) + 5,
        equipment: equipment[Math.floor(Math.random() * equipment.length)],
      }));

      setAmbulances(newAmbulances);
      setLastUpdate(new Date());
    };

    // Initial load
    updateAmbulances();

    // Update every 30 seconds
    const interval = setInterval(updateAmbulances, 30000);

    return () => clearInterval(interval);
  }, []);

  const availableCount = ambulances.filter(amb => amb.status === 'available').length;
  const busyCount = ambulances.filter(amb => amb.status === 'busy').length;

  if (!isVisible) {
    return (
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <Button
          onClick={() => setIsVisible(true)}
          className="rounded-full w-14 h-14 shadow-lg"
          size="sm"
        >
          <Truck className="w-6 h-6" />
        </Button>
      </motion.div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 100, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: 100 }}
        className="fixed bottom-4 right-4 z-50 w-80 hidden lg:block"
      >
        <Card className="bg-white shadow-xl border-2">
          <div className="p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75" />
                </div>
                <h3 className="font-semibold text-lg">Διαθεσιμότητα Live</h3>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsVisible(false)}
                className="h-8 w-8 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-green-700">{availableCount}</div>
                <div className="text-sm text-green-600">Διαθέσιμα</div>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-orange-700">{busyCount}</div>
                <div className="text-sm text-orange-600">Απασχολημένα</div>
              </div>
            </div>

            {/* Ambulance List */}
            <div className="space-y-2 mb-4 max-h-48 overflow-y-auto">
              {ambulances.map((ambulance) => (
                <motion.div
                  key={ambulance.id}
                  layout
                  className={`p-3 rounded-lg border ${
                    ambulance.status === 'available'
                      ? 'bg-green-50 border-green-200'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Truck className={`w-4 h-4 ${
                        ambulance.status === 'available' ? 'text-green-600' : 'text-gray-500'
                      }`} />
                      <span className="font-medium text-sm">{ambulance.id}</span>
                      <Badge
                        variant={ambulance.status === 'available' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {ambulance.status === 'available' ? 'Διαθέσιμο' : 'Απασχολημένο'}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
                    <MapPin className="w-3 h-3" />
                    <span>{ambulance.area}</span>
                    {ambulance.status === 'available' && (
                      <>
                        <Clock className="w-3 h-3 ml-2" />
                        <span>{ambulance.estimatedTime} λεπτά</span>
                      </>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {ambulance.equipment.map((item, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <Button
                className="w-full bg-red-600 hover:bg-red-700 animate-pulse"
                asChild
              >
                <a href="tel:2310XXXXXX">
                  <Phone className="w-4 h-4 mr-2" />
                  ΕΠΕΙΓΟΝ: 2310-XXXXXX
                </a>
              </Button>

              <Button
                variant="outline"
                className="w-full"
                size="sm"
              >
                <Users className="w-4 h-4 mr-2" />
                Προγραμματισμένη Κράτηση
              </Button>
            </div>

            {/* Status Footer */}
            <div className="mt-3 pt-3 border-t text-xs text-gray-500 flex items-center justify-between">
              <div className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3" />
                <span>Ενημέρωση: {lastUpdate.toLocaleTimeString('el-GR')}</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Live</span>
              </div>
            </div>

            {/* Quick Info */}
            <div className="mt-2 bg-blue-50 border border-blue-200 rounded-lg p-2">
              <div className="text-xs text-blue-800 font-medium mb-1">
                Μέσος Χρόνος Άφιξης
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-blue-700">
                <div>Κέντρο: 8 λεπτά</div>
                <div>Προάστια: 12 λεπτά</div>
              </div>
            </div>

            {/* Emergency Notice */}
            {availableCount === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 bg-red-50 border border-red-200 rounded-lg p-2"
              >
                <div className="flex items-center gap-2 text-red-800">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-xs font-medium">
                    Όλα τα ασθενοφόρα απασχολημένα
                  </span>
                </div>
                <div className="text-xs text-red-700 mt-1">
                  Καλέστε για εκτίμηση χρόνου αναμονής
                </div>
              </motion.div>
            )}
          </div>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}