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
  AlertCircle,
  Calendar,
  Phone,
  MapPin,
  User,
  Clock,
  ChevronRight,
  ChevronLeft,
  CheckCircle
} from 'lucide-react';
import { toast } from 'sonner';

const bookingSchema = z.object({
  serviceType: z.enum(['emergency', 'scheduled', 'international', 'special'], {
    required_error: 'Παρακαλώ επιλέξτε τύπο υπηρεσίας',
  }),
  patientName: z.string().min(2, 'Το όνομα πρέπει να έχει τουλάχιστον 2 χαρακτήρες'),
  phone: z.string().min(10, 'Παρακαλώ εισάγετε έγκυρο τηλέφωνο'),
  pickupAddress: z.string().min(5, 'Παρακαλώ εισάγετε πλήρη διεύθυνση'),
  destinationAddress: z.string().min(5, 'Παρακαλώ εισάγετε προορισμό'),
  date: z.string().optional(),
  time: z.string().optional(),
  mobilityStatus: z.enum(['walking', 'wheelchair', 'stretcher'], {
    required_error: 'Παρακαλώ επιλέξτε κατάσταση κινητικότητας',
  }),
  specialRequirements: z.string().optional(),
  insurance: z.string().optional(),
  emergencyContact: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const serviceTypes = [
  {
    id: 'emergency',
    title: 'Επείγουσα Διακομιδή',
    description: 'Άμεση ανταπόκριση σε επείγον περιστατικό',
    badge: 'ΕΠΕΙΓΟΝ',
    badgeColor: 'destructive' as const,
    icon: AlertCircle,
  },
  {
    id: 'scheduled',
    title: 'Προγραμματισμένη',
    description: 'Διάλυση, εξετάσεις, ιατρικές επισκέψεις',
    badge: 'ΠΡΟΓΡΑΜΜΑΤΙΣΜΕΝΗ',
    badgeColor: 'default' as const,
    icon: Calendar,
  },
  {
    id: 'international',
    title: 'Διεθνής Μεταφορά',
    description: 'Επαναπατρισμός ή μεταφορά στο εξωτερικό',
    badge: 'ΔΙΕΘΝΗΣ',
    badgeColor: 'secondary' as const,
    icon: MapPin,
  },
  {
    id: 'special',
    title: 'Ειδικές Ανάγκες',
    description: 'Βαριατρική, παιδιατρική, ψυχιατρική',
    badge: 'ΕΙΔΙΚΗ',
    badgeColor: 'outline' as const,
    icon: User,
  },
];

const mobilityOptions = [
  { value: 'walking', label: 'Περπάτημα', description: 'Ο ασθενής μπορεί να περπατήσει' },
  { value: 'wheelchair', label: 'Αναπηρικό Καροτσάκι', description: 'Χρειάζεται αναπηρικό καροτσάκι' },
  { value: 'stretcher', label: 'Φορείο', description: 'Χρειάζεται φορείο και ιατρική παρακολούθηση' },
];

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const totalSteps = 4;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    trigger,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const watchedServiceType = watch('serviceType');
  const isEmergency = watchedServiceType === 'emergency';

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Η κράτηση σας καταχωρήθηκε επιτυχώς!', {
          description: 'Θα επικοινωνήσουμε μαζί σας εντός 5 λεπτών.',
        });
        // Reset form or redirect
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

  const nextStep = async () => {
    const fieldsToValidate = getFieldsForStep(step);
    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const getFieldsForStep = (currentStep: number): (keyof BookingFormData)[] => {
    switch (currentStep) {
      case 1:
        return ['serviceType'];
      case 2:
        return ['patientName', 'phone', 'emergencyContact'];
      case 3:
        return ['pickupAddress', 'destinationAddress'];
      case 4:
        return ['mobilityStatus'];
      default:
        return [];
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Calendar className="w-6 h-6" />
          Κράτηση Ασθενοφόρου
        </CardTitle>

        {/* Progress Bar */}
        <div className="flex items-center gap-2 mt-4">
          {Array.from({ length: totalSteps }, (_, i) => (
            <div
              key={i}
              className={`flex-1 h-2 rounded-full ${
                i + 1 <= step ? 'bg-primary' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Βήμα {step} από {totalSteps}
        </p>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Step 1: Service Type */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Επιλέξτε Τύπο Υπηρεσίας</h3>
              <div className="grid gap-4">
                {serviceTypes.map((service) => (
                  <div
                    key={service.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      watchedServiceType === service.id
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setValue('serviceType', service.id as any)}
                  >
                    <div className="flex items-start gap-3">
                      <service.icon className="w-6 h-6 mt-1 text-primary" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">{service.title}</h4>
                          <Badge variant={service.badgeColor}>{service.badge}</Badge>
                        </div>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {errors.serviceType && (
                <p className="text-red-500 text-sm">{errors.serviceType.message}</p>
              )}
            </div>
          )}

          {/* Step 2: Patient Information */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Στοιχεία Ασθενή</h3>

              <div>
                <Label htmlFor="patientName">Όνομα Ασθενή *</Label>
                <Input
                  id="patientName"
                  {...register('patientName')}
                  placeholder="Εισάγετε το πλήρες όνομα"
                />
                {errors.patientName && (
                  <p className="text-red-500 text-sm mt-1">{errors.patientName.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone">Τηλέφωνο Επικοινωνίας *</Label>
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

              <div>
                <Label htmlFor="emergencyContact">Τηλέφωνο Έκτακτης Ανάγκης</Label>
                <Input
                  id="emergencyContact"
                  type="tel"
                  {...register('emergencyContact')}
                  placeholder="Τηλέφωνο συγγενούς ή φίλου"
                />
              </div>
            </div>
          )}

          {/* Step 3: Addresses */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Διευθύνσεις</h3>

              <div>
                <Label htmlFor="pickupAddress">Διεύθυνση Παραλαβής *</Label>
                <Input
                  id="pickupAddress"
                  {...register('pickupAddress')}
                  placeholder="π.χ. Τσιμισκή 123, Θεσσαλονίκη"
                />
                {errors.pickupAddress && (
                  <p className="text-red-500 text-sm mt-1">{errors.pickupAddress.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="destinationAddress">Προορισμός *</Label>
                <Input
                  id="destinationAddress"
                  {...register('destinationAddress')}
                  placeholder="π.χ. ΑΧΕΠΑ, Θεσσαλονίκη"
                />
                {errors.destinationAddress && (
                  <p className="text-red-500 text-sm mt-1">{errors.destinationAddress.message}</p>
                )}
              </div>

              {!isEmergency && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date">Ημερομηνία</Label>
                      <Input
                        id="date"
                        type="date"
                        {...register('date')}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div>
                      <Label htmlFor="time">Ώρα</Label>
                      <Input
                        id="time"
                        type="time"
                        {...register('time')}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Step 4: Additional Information */}
          {step === 4 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Πρόσθετες Πληροφορίες</h3>

              <div>
                <Label>Κατάσταση Κινητικότητας *</Label>
                <div className="grid gap-3 mt-2">
                  {mobilityOptions.map((option) => (
                    <div
                      key={option.value}
                      className={`p-3 border rounded-lg cursor-pointer transition-all ${
                        watch('mobilityStatus') === option.value
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setValue('mobilityStatus', option.value as any)}
                    >
                      <div className="font-medium">{option.label}</div>
                      <div className="text-sm text-gray-600">{option.description}</div>
                    </div>
                  ))}
                </div>
                {errors.mobilityStatus && (
                  <p className="text-red-500 text-sm mt-1">{errors.mobilityStatus.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="insurance">Ασφαλιστικός Φορέας</Label>
                <Input
                  id="insurance"
                  {...register('insurance')}
                  placeholder="π.χ. ΕΟΠΥΥ, ΟΑΕΕ, Ιδιωτική Ασφάλεια"
                />
              </div>

              <div>
                <Label htmlFor="specialRequirements">Ειδικές Απαιτήσεις</Label>
                <Textarea
                  id="specialRequirements"
                  {...register('specialRequirements')}
                  placeholder="Αναφέρετε οποιεσδήποτε ειδικές ανάγκες ή οδηγίες"
                  rows={3}
                />
              </div>

              {isEmergency && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-red-800 font-medium mb-2">
                    <AlertCircle className="w-4 h-4" />
                    Επείγουσα Κατάσταση
                  </div>
                  <p className="text-sm text-red-700">
                    Για επείγοντα περιστατικά, συνιστούμε να καλέσετε άμεσα στο{' '}
                    <a href="tel:2310XXXXXX" className="font-semibold underline">
                      2310-XXXXXX
                    </a>{' '}
                    για ταχύτερη εξυπηρέτηση.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <Button type="button" variant="outline" onClick={prevStep}>
                <ChevronLeft className="w-4 h-4 mr-2" />
                Προηγούμενο
              </Button>
            )}

            <div className="ml-auto">
              {step < totalSteps ? (
                <Button type="button" onClick={nextStep}>
                  Επόμενο
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary/90"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2" />
                      Αποστολή...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Καταχώρηση Κράτησης
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}