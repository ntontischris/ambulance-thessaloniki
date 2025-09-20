'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Phone,
  PhoneCall,
  X,
  Clock,
  CheckCircle,
  AlertCircle,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PhoneButtonProps {
  position?: 'bottom-left' | 'bottom-right';
  showOnMobile?: boolean;
}

export default function PhoneButton({
  position = 'bottom-left',
  showOnMobile = true
}: PhoneButtonProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [callsToday, setCallsToday] = useState(0);
  const [isBusinessHours, setIsBusinessHours] = useState(true);

  useEffect(() => {
    // Check business hours (for display purposes - service is 24/7)
    const now = new Date();
    const hour = now.getHours();
    setIsBusinessHours(hour >= 8 && hour <= 20);

    // Simulate call count
    setCallsToday(Math.floor(Math.random() * 50) + 15);

    // Auto-show notification after 30 seconds
    const timer = setTimeout(() => {
      if (!isExpanded) {
        setIsExpanded(true);
        setTimeout(() => setIsExpanded(false), 5000);
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, [isExpanded]);

  const positionClasses = {
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
  };

  const mobileClasses = showOnMobile ? 'block' : 'hidden sm:block';

  if (!isVisible) return null;

  return (
    <div className={`fixed ${positionClasses[position]} z-50 ${mobileClasses}`}>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="mb-3 bg-white rounded-xl shadow-2xl border-2 border-red-200 p-4 max-w-xs"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-semibold text-sm">Διαθέσιμοι Τώρα</span>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="bg-green-50 rounded-lg p-2 text-center">
                <div className="text-lg font-bold text-green-700">2</div>
                <div className="text-xs text-green-600">Διαθέσιμα</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-2 text-center">
                <div className="text-lg font-bold text-blue-700">8min</div>
                <div className="text-xs text-blue-600">Μέσος χρόνος</div>
              </div>
            </div>

            {/* Status Message */}
            <div className={`p-3 rounded-lg mb-4 ${
              isBusinessHours
                ? 'bg-green-50 border border-green-200'
                : 'bg-blue-50 border border-blue-200'
            }`}>
              <div className="flex items-center gap-2 mb-1">
                {isBusinessHours ? (
                  <CheckCircle className="w-4 h-4 text-green-600" />
                ) : (
                  <Clock className="w-4 h-4 text-blue-600" />
                )}
                <span className={`text-sm font-medium ${
                  isBusinessHours ? 'text-green-800' : 'text-blue-800'
                }`}>
                  {isBusinessHours ? 'Κανονικές Ώρες' : '24ωρη Κάλυψη'}
                </span>
              </div>
              <p className={`text-xs ${
                isBusinessHours ? 'text-green-700' : 'text-blue-700'
              }`}>
                {isBusinessHours
                  ? 'Άμεση ανταπόκριση με πλήρες προσωπικό'
                  : 'Νυχτερινή υπηρεσία με έμπειρους διασώστες'
                }
              </p>
            </div>

            {/* Today's Activity */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="flex items-center gap-2 mb-1">
                <Zap className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-medium">Σήμερα</span>
              </div>
              <div className="text-xs text-gray-600">
                {callsToday} επιτυχείς διακομιδές
              </div>
            </div>

            {/* Call Button */}
            <Button
              className="w-full bg-red-600 hover:bg-red-700 animate-pulse"
              asChild
            >
              <a href="tel:2310XXXXXX">
                <PhoneCall className="w-4 h-4 mr-2" />
                ΚΑΛΕΣΤΕ ΤΩΡΑ
              </a>
            </Button>

            {/* Alternative Contact */}
            <div className="mt-3 text-center">
              <button className="text-xs text-blue-600 hover:underline">
                Στείλτε SMS για κράτηση
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Phone Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          size="lg"
          className={`rounded-full w-16 h-16 shadow-2xl bg-red-600 hover:bg-red-700 relative ${
            !isExpanded ? 'animate-pulse' : ''
          }`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <Phone className="w-8 h-8" />

          {/* Notification Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2"
          >
            <Badge className="bg-green-500 text-white text-xs px-2 py-1">
              24/7
            </Badge>
          </motion.div>

          {/* Pulse Ring Animation */}
          <div className="absolute inset-0 rounded-full border-4 border-red-300 animate-ping opacity-20" />
        </Button>
      </motion.div>

      {/* Quick Access Number */}
      <motion.div
        initial={{ opacity: 0, x: position === 'bottom-left' ? -50 : 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className={`absolute top-1/2 -translate-y-1/2 ${
          position === 'bottom-left' ? 'left-20' : 'right-20'
        } hidden md:block`}
      >
        <div className="bg-white px-3 py-2 rounded-lg shadow-lg border border-gray-200">
          <div className="text-xs text-gray-600">Καλέστε άμεσα:</div>
          <div className="font-bold text-red-600">2310-XXXXXX</div>
        </div>
      </motion.div>
    </div>
  );
}

// Specialized Emergency Phone Button
export function EmergencyPhoneButton() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <Button
          size="lg"
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full shadow-2xl animate-pulse"
          asChild
        >
          <a href="tel:2310XXXXXX">
            <AlertCircle className="w-5 h-5 mr-2" />
            ΕΠΕΙΓΟΝ: 2310-XXXXXX
          </a>
        </Button>
      </motion.div>
    </div>
  );
}

// Quick Call Widget for specific pages
export function QuickCallWidget({ variant = 'default' }: { variant?: 'default' | 'emergency' | 'minimal' }) {
  if (variant === 'emergency') {
    return (
      <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse" />
          <span className="font-semibold text-red-800">Επείγουσα Κατάσταση</span>
        </div>
        <p className="text-sm text-red-700 mb-4">
          Για άμεση ιατρική βοήθεια καλέστε τώρα. Διαθέσιμοι 24/7.
        </p>
        <Button className="w-full bg-red-600 hover:bg-red-700 animate-pulse" asChild>
          <a href="tel:2310XXXXXX">
            <Phone className="w-4 h-4 mr-2" />
            ΚΑΛΕΣΤΕ ΤΩΡΑ: 2310-XXXXXX
          </a>
        </Button>
      </div>
    );
  }

  if (variant === 'minimal') {
    return (
      <Button
        variant="outline"
        className="border-primary text-primary hover:bg-primary hover:text-white"
        asChild
      >
        <a href="tel:2310XXXXXX">
          <Phone className="w-4 h-4 mr-2" />
          2310-XXXXXX
        </a>
      </Button>
    );
  }

  return (
    <div className="bg-gradient-to-r from-red-50 to-blue-50 border border-gray-200 rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="font-semibold">Χρειάζεστε Ασθενοφόρο;</div>
          <div className="text-sm text-gray-600">Διαθέσιμοι 24/7 για εσάς</div>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-500">Μέσος χρόνος άφιξης</div>
          <div className="font-bold text-primary">8-12 λεπτά</div>
        </div>
      </div>
      <Button className="w-full" asChild>
        <a href="tel:2310XXXXXX">
          <Phone className="w-4 h-4 mr-2" />
          Καλέστε: 2310-XXXXXX
        </a>
      </Button>
    </div>
  );
}