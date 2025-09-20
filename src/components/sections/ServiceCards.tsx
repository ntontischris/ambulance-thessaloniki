'use client';

import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, AlertCircle, Calendar, Plane, Heart } from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import { formatPrice } from '@/lib/utils';

const serviceIcons = {
  emergency: AlertCircle,
  scheduled: Calendar,
  international: Plane,
  special: Heart,
};

const serviceColors = {
  emergency: 'border-red-500 hover:border-red-600',
  scheduled: 'border-blue-500 hover:border-blue-600',
  international: 'border-green-500 hover:border-green-600',
  special: 'border-purple-500 hover:border-purple-600',
};

export default function ServiceCards() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Οι Υπηρεσίες Μας
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Παρέχουμε ολοκληρωμένες υπηρεσίες διακομιδής ασθενών με σύγχρονο
            εξοπλισμό, έμπειρο προσωπικό και απόλυτη ασφάλεια σε κάθε μεταφορά.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.values(SERVICES).map((service, index) => {
            const IconComponent = serviceIcons[service.id as keyof typeof serviceIcons];
            const colorClass = serviceColors[service.id as keyof typeof serviceColors];

            return (
              <Card
                key={service.id}
                className={`group hover:shadow-xl transition-all duration-300 border-t-4 ${colorClass} hover:-translate-y-1`}
              >
                <CardHeader className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{service.icon}</span>
                    <IconComponent className="w-8 h-8 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  </div>

                  <CardTitle className="text-xl mb-3 text-gray-900">
                    {service.title}
                  </CardTitle>

                  <CardDescription className="mb-4 text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>

                  <div className="mb-4">
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      από {formatPrice(service.basePrice)}
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <Button
                      className="w-full"
                      variant="outline"
                      asChild
                    >
                      <Link href={service.url}>
                        Μάθετε περισσότερα
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>

                    <Button
                      className="w-full bg-red-600 hover:bg-red-700"
                      size="sm"
                      asChild
                    >
                      <a href="tel:2310XXXXXX">
                        Άμεση Κλήση
                      </a>
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Δεν βλέπετε αυτό που χρειάζεστε; Επικοινωνήστε μαζί μας για εξατομικευμένη λύση.
          </p>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">
              Επικοινωνία για Ειδική Προσφορά
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}