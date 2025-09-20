'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Shield } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Τι Λένε οι Πελάτες Μας
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Η εμπιστοσύνη και η ικανοποίησή σας είναι η καλύτερη επιβράβευση
            για τη δουλειά μας.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card key={testimonial.id} className="p-6 hover:shadow-lg transition-shadow">
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex mr-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                {testimonial.verified && (
                  <Badge variant="secondary" className="text-xs">
                    <Shield className="w-3 h-3 mr-1" />
                    Επαληθευμένο
                  </Badge>
                )}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* User Info */}
              <div className="border-t pt-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-3 h-3 mr-1" />
                    {testimonial.area}
                  </div>
                </div>
                {testimonial.serviceType && (
                  <Badge variant="outline" className="text-xs">
                    {testimonial.serviceType === 'emergency' && 'Επείγον'}
                    {testimonial.serviceType === 'scheduled' && 'Προγραμματισμένη'}
                    {testimonial.serviceType === 'international' && 'Διεθνής'}
                    {testimonial.serviceType === 'special' && 'Ειδική'}
                  </Badge>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Metrics */}
        <div className="bg-gray-50 rounded-2xl p-8 grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Μέση Βαθμολογία</div>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-yellow-400 fill-current"
                />
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">127+</div>
            <div className="text-gray-600">Αξιολογήσεις</div>
            <div className="text-sm text-gray-500 mt-1">Google & Facebook</div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">98%</div>
            <div className="text-gray-600">Ικανοποίηση</div>
            <div className="text-sm text-gray-500 mt-1">Πελατών</div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">5000+</div>
            <div className="text-gray-600">Επιτυχημένες</div>
            <div className="text-sm text-gray-500 mt-1">Διακομιδές</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            Θέλετε να μοιραστείτε την εμπειρία σας μαζί μας;
          </p>
          <a
            href="https://g.co/kgs/review-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            Αφήστε μια αξιολόγηση στο Google
            <Star className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}