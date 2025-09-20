'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Phone,
  MessageSquare,
  Send,
  CheckCircle,
  AlertCircle,
  Clock,
  MapPin,
  Calendar
} from 'lucide-react';
import { toast } from 'sonner';

const contactSchema = z.object({
  name: z.string().min(2, 'Το όνομα πρέπει να έχει τουλάχιστον 2 χαρακτήρες'),
  email: z.string().email('Παρακαλώ εισάγετε έγκυρο email'),
  phone: z.string().min(10, 'Παρακαλώ εισάγετε έγκυρο τηλέφωνο'),
  subject: z.enum(['info', 'pricing', 'booking', 'complaint', 'other'], {
    required_error: 'Παρακαλώ επιλέξτε θέμα',
  }),
  message: z.string().min(10, 'Το μήνυμα πρέπει να έχει τουλάχιστον 10 χαρακτήρες'),
  preferredContact: z.enum(['email', 'phone', 'both']),
  urgency: z.enum(['low', 'medium', 'high']),
});

type ContactFormData = z.infer<typeof contactSchema>;

const subjectOptions = [
  {
    value: 'info',
    label: 'Γενικές Πληροφορίες',
    description: 'Ερωτήσεις για τις υπηρεσίες μας',
    icon: MessageSquare,
  },
  {
    value: 'pricing',
    label: 'Τιμολόγιο',
    description: 'Ερωτήσεις για κόστος υπηρεσιών',
    icon: Badge,
  },
  {
    value: 'booking',
    label: 'Κράτηση',
    description: 'Βοήθεια με κράτηση ή αλλαγές',
    icon: Calendar,
  },
  {
    value: 'complaint',
    label: 'Παράπονο',
    description: 'Αναφορά προβλήματος ή δυσαρέσκειας',
    icon: AlertCircle,
  },
  {
    value: 'other',
    label: 'Άλλο',
    description: 'Οτιδήποτε άλλο θέλετε να μας πείτε',
    icon: MessageSquare,
  },
];

const urgencyLevels = [
  {
    value: 'low',
    label: 'Χαμηλή',
    color: 'bg-gray-100 text-gray-800',
    responseTime: '24 ώρες',
  },
  {
    value: 'medium',
    label: 'Μεσαία',
    color: 'bg-yellow-100 text-yellow-800',
    responseTime: '4 ώρες',
  },
  {
    value: 'high',
    label: 'Υψηλή',
    color: 'bg-red-100 text-red-800',
    responseTime: '1 ώρα',
  },
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      preferredContact: 'both',
      urgency: 'medium',
    },
  });

  const watchedSubject = watch('subject');
  const watchedUrgency = watch('urgency');

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        toast.success('Το μήνυμά σας στάλθηκε επιτυχώς!', {
          description: 'Θα επικοινωνήσουμε μαζί σας σύντομα.',
        });
        reset();
      } else {
        throw new Error('Αποτυχία αποστολής');
      }
    } catch (error) {
      toast.error('Σφάλμα κατά την αποστολή', {
        description: 'Παρακαλώ δοκιμάστε ξανά ή καλέστε μας άμεσα.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold">Το μήνυμά σας στάλθηκε!</h3>
            <p className="text-gray-600">
              Ευχαριστούμε για την επικοινωνία σας. Θα επικοινωνήσουμε μαζί σας
              {watchedUrgency === 'high' ? ' εντός 1 ώρας' :
               watchedUrgency === 'medium' ? ' εντός 4 ωρών' : ' εντός 24 ωρών'}.
            </p>
            <Button
              onClick={() => setSubmitted(false)}
              variant="outline"
            >
              Στείλτε άλλο μήνυμα
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Mail className="w-6 h-6" />
          Επικοινωνία
        </CardTitle>
        <p className="text-gray-600">
          Στείλτε μας το μήνυμά σας και θα επικοινωνήσουμε μαζί σας άμεσα.
          Για επείγοντα περιστατικά καλέστε{' '}
          <a href="tel:2310XXXXXX" className="text-primary font-semibold">
            2310-XXXXXX
          </a>
        </p>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Όνομα *</Label>
              <Input
                id="name"
                {...register('name')}
                placeholder="Το όνομά σας"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="phone">Τηλέφωνο *</Label>
              <Input
                id="phone"
                type="tel"
                {...register('phone')}
                placeholder="69xxxxxxxx"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              {...register('email')}
              placeholder="email@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Subject Selection */}
          <div>
            <Label>Θέμα *</Label>
            <div className="grid gap-3 mt-2">
              {subjectOptions.map((option) => (
                <div
                  key={option.value}
                  className={`p-3 border rounded-lg cursor-pointer transition-all ${
                    watchedSubject === option.value
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setValue('subject', option.value as any)}
                >
                  <div className="flex items-start gap-3">
                    <option.icon className="w-5 h-5 mt-0.5 text-primary" />
                    <div>
                      <div className="font-medium">{option.label}</div>
                      <div className="text-sm text-gray-600">{option.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
            )}
          </div>

          {/* Urgency Level */}
          <div>
            <Label>Επείγον *</Label>
            <div className="grid grid-cols-3 gap-3 mt-2">
              {urgencyLevels.map((level) => (
                <div
                  key={level.value}
                  className={`p-3 border rounded-lg cursor-pointer transition-all text-center ${
                    watchedUrgency === level.value
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setValue('urgency', level.value as any)}
                >
                  <div className={`inline-block px-2 py-1 rounded text-xs font-medium ${level.color}`}>
                    {level.label}
                  </div>
                  <div className="text-xs text-gray-600 mt-1 flex items-center justify-center gap-1">
                    <Clock className="w-3 h-3" />
                    {level.responseTime}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <Label htmlFor="message">Μήνυμα *</Label>
            <Textarea
              id="message"
              {...register('message')}
              placeholder="Περιγράψτε το αίτημά σας ή την ερώτησή σας..."
              rows={5}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Preferred Contact Method */}
          <div>
            <Label>Προτιμώμενος τρόπος επικοινωνίας</Label>
            <div className="grid grid-cols-3 gap-3 mt-2">
              {[
                { value: 'email', label: 'Email', icon: Mail },
                { value: 'phone', label: 'Τηλέφωνο', icon: Phone },
                { value: 'both', label: 'Και τα δύο', icon: MessageSquare },
              ].map((method) => (
                <div
                  key={method.value}
                  className={`p-3 border rounded-lg cursor-pointer transition-all text-center ${
                    watch('preferredContact') === method.value
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setValue('preferredContact', method.value as any)}
                >
                  <method.icon className="w-5 h-5 mx-auto mb-1 text-primary" />
                  <div className="text-sm font-medium">{method.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Notice */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
              <div>
                <div className="font-medium text-red-800 mb-1">
                  Για Επείγοντα Περιστατικά
                </div>
                <div className="text-sm text-red-700">
                  Μην χρησιμοποιείτε αυτή τη φόρμα για επείγουσες ιατρικές ανάγκες.
                  Καλέστε άμεσα στο{' '}
                  <a href="tel:2310XXXXXX" className="font-semibold underline">
                    2310-XXXXXX
                  </a>{' '}
                  για άμεση εξυπηρέτηση.
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full"
            size="lg"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2" />
                Αποστολή...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Αποστολή Μηνύματος
              </>
            )}
          </Button>
        </form>

        {/* Contact Info */}
        <div className="mt-8 pt-6 border-t grid md:grid-cols-2 gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>24ωρη Γραμμή: 2310-XXXXXX</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>info@ambulance-thessaloniki.gr</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Θεσσαλονίκη & Περιφέρεια</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>24/7 Διαθεσιμότητα</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}