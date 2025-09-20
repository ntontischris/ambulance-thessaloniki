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
import { Badge } from '@/components/ui/badge';
import {
  Phone,
  AlertCircle,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Zap,
  User
} from 'lucide-react';
import { toast } from 'sonner';

const quickCallSchema = z.object({
  name: z.string().min(2, 'Παρακαλώ εισάγετε όνομα'),
  phone: z.string().min(10, 'Παρακαλώ εισάγετε έγκυρο τηλέφωνο'),
  address: z.string().min(5, 'Παρακαλώ εισάγετε πλήρη διεύθυνση'),
  emergencyType: z.enum(['medical', 'injury', 'breathing', 'cardiac', 'other'], {
    required_error: 'Παρακαλώ επιλέξτε τύπο επείγοντος',
  }),
  description: z.string().min(5, 'Παρακαλώ περιγράψτε την κατάσταση'),
  patientAge: z.string().optional(),
  conscious: z.enum(['yes', 'no', 'unknown']),
});

type QuickCallFormData = z.infer<typeof quickCallSchema>;

const emergencyTypes = [
  {
    value: 'medical',
    label: 'Ιατρική Κατάσταση',
    description: 'Γενική ιατρική επείγουσα κατάσταση',
    color: 'bg-blue-100 text-blue-800 border-blue-300',
    icon: AlertCircle,
  },
  {
    value: 'injury',
    label: 'Τραυματισμός',
    description: 'Ατύχημα, πτώση, τραύμα',
    color: 'bg-orange-100 text-orange-800 border-orange-300',
    icon: Zap,
  },
  {
    value: 'breathing',
    label: 'Αναπνευστικό Πρόβλημα',
    description: 'Δυσκολία αναπνοής, άσθμα',
    color: 'bg-purple-100 text-purple-800 border-purple-300',
    icon: AlertCircle,
  },
  {
    value: 'cardiac',
    label: 'Καρδιακό Επεισόδιο',
    description: 'Πόνος στο στήθος, καρδιακή προσβολή',
    color: 'bg-red-100 text-red-800 border-red-300',
    icon: AlertCircle,
  },
  {
    value: 'other',
    label: 'Άλλο',
    description: 'Άλλη επείγουσα κατάσταση',
    color: 'bg-gray-100 text-gray-800 border-gray-300',
    icon: AlertCircle,
  },
];

export default function QuickCallForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm<QuickCallFormData>({
    resolver: zodResolver(quickCallSchema),
    defaultValues: {
      conscious: 'unknown',
    },
  });

  const watchedEmergencyType = watch('emergencyType');

  const onSubmit = async (data: QuickCallFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/emergency-call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        toast.success('Η κλήση σας καταχωρήθηκε!', {
          description: 'Θα σας καλέσουμε άμεσα.',
        });
      } else {
        throw new Error('Αποτυχία αποστολής');
      }
    } catch (error) {
      toast.error('Σφάλμα κατά την αποστολή', {
        description: 'Καλέστε άμεσα στο 2310-XXXXXX',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <Card className="w-full max-w-lg mx-auto border-red-300 bg-red-50">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-red-800">Κλήση Καταχωρήθηκε!</h3>
            <p className="text-red-700">
              Θα επικοινωνήσουμε μαζί σας άμεσα στο τηλέφωνο που δηλώσατε.
              Το ασθενοφόρο θα φτάσει σε 8-12 λεπτά.
            </p>
            <div className="bg-white border border-red-300 rounded-lg p-3">
              <p className="text-sm text-red-800 font-medium">
                Αν χρειάζεστε άμεση βοήθεια τώρα:
              </p>
              <Button
                className="w-full mt-2 bg-red-600 hover:bg-red-700"
                asChild
              >
                <a href="tel:2310XXXXXX">
                  <Phone className="w-4 h-4 mr-2" />
                  ΚΑΛΕΣΤΕ: 2310-XXXXXX
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-lg mx-auto border-red-300">
      <CardHeader className="bg-red-50">
        <CardTitle className="flex items-center gap-2 text-xl text-red-800">
          <AlertCircle className="w-6 h-6" />
          Επείγουσα Κλήση
        </CardTitle>
        <p className="text-red-700 text-sm">
          Συμπληρώστε γρήγορα τα στοιχεία και θα σας καλέσουμε άμεσα.
        </p>
      </CardHeader>

      <CardContent className="pt-6">
        {/* Emergency Notice */}
        <div className="bg-red-100 border border-red-300 rounded-lg p-3 mb-6">
          <div className="flex items-start gap-2">
            <Phone className="w-5 h-5 text-red-600 mt-0.5" />
            <div>
              <p className="text-sm text-red-800 font-medium">
                Για άμεση βοήθεια καλέστε τώρα:
              </p>
              <Button
                className="mt-2 w-full bg-red-600 hover:bg-red-700 animate-pulse"
                size="sm"
                asChild
              >
                <a href="tel:2310XXXXXX">
                  <Phone className="w-4 h-4 mr-2" />
                  2310-XXXXXX
                </a>
              </Button>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Basic Information */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="name" className="text-sm font-medium">
                Όνομα *
              </Label>
              <Input
                id="name"
                {...register('name')}
                placeholder="Το όνομά σας"
                size="sm"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="phone" className="text-sm font-medium">
                Τηλέφωνο *
              </Label>
              <Input
                id="phone"
                type="tel"
                {...register('phone')}
                placeholder="69xxxxxxxx"
                size="sm"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
              )}
            </div>
          </div>

          {/* Address */}
          <div>
            <Label htmlFor="address" className="text-sm font-medium">
              Διεύθυνση *
            </Label>
            <Input
              id="address"
              {...register('address')}
              placeholder="Ακριβής διεύθυνση (οδός, αριθμός, όροφος)"
              size="sm"
            />
            {errors.address && (
              <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>
            )}
          </div>

          {/* Emergency Type */}
          <div>
            <Label className="text-sm font-medium">Τύπος Επείγοντος *</Label>
            <div className="grid gap-2 mt-2">
              {emergencyTypes.map((type) => (
                <div
                  key={type.value}
                  className={`p-2 border rounded-lg cursor-pointer transition-all ${
                    watchedEmergencyType === type.value
                      ? `border-red-400 ${type.color}`
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setValue('emergencyType', type.value as any)}
                >
                  <div className="flex items-center gap-2">
                    <type.icon className="w-4 h-4" />
                    <div>
                      <div className="text-sm font-medium">{type.label}</div>
                      <div className="text-xs text-gray-600">{type.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {errors.emergencyType && (
              <p className="text-red-500 text-xs mt-1">{errors.emergencyType.message}</p>
            )}
          </div>

          {/* Patient Details */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="patientAge" className="text-sm font-medium">
                Ηλικία Ασθενή
              </Label>
              <Input
                id="patientAge"
                {...register('patientAge')}
                placeholder="π.χ. 65"
                size="sm"
              />
            </div>

            <div>
              <Label className="text-sm font-medium">Συνείδηση</Label>
              <div className="grid grid-cols-3 gap-1 mt-1">
                {[
                  { value: 'yes', label: 'Ναι', color: 'bg-green-100 text-green-800' },
                  { value: 'no', label: 'Όχι', color: 'bg-red-100 text-red-800' },
                  { value: 'unknown', label: '?', color: 'bg-gray-100 text-gray-800' },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`p-1 text-xs rounded transition-all ${
                      watch('conscious') === option.value
                        ? option.color
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                    onClick={() => setValue('conscious', option.value as any)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <Label htmlFor="description" className="text-sm font-medium">
              Περιγραφή Κατάστασης *
            </Label>
            <Textarea
              id="description"
              {...register('description')}
              placeholder="Περιγράψτε σύντομα τι συνέβη..."
              rows={3}
              className="text-sm"
            />
            {errors.description && (
              <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>
            )}
          </div>

          {/* Response Time Estimate */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <div className="flex items-center gap-2 text-blue-800 text-sm">
              <Clock className="w-4 h-4" />
              <span className="font-medium">Εκτιμώμενος Χρόνος Άφιξης:</span>
            </div>
            <div className="text-blue-700 text-sm mt-1">
              8-12 λεπτά (ανάλογα με την περιοχή)
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-red-600 hover:bg-red-700"
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
                Στείλτε Επείγουσα Κλήση
              </>
            )}
          </Button>

          <p className="text-xs text-gray-600 text-center">
            Θα επικοινωνήσουμε μαζί σας άμεσα για επιβεβαίωση
          </p>
        </form>
      </CardContent>
    </Card>
  );
}