import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Schema validation
const bookingSchema = z.object({
  serviceType: z.enum(['emergency', 'scheduled', 'international', 'special']),
  patientName: z.string().min(2),
  phone: z.string().min(10),
  pickupAddress: z.string().min(5),
  destinationAddress: z.string().min(5),
  date: z.string().optional(),
  time: z.string().optional(),
  mobilityStatus: z.enum(['walking', 'wheelchair', 'stretcher']),
  specialRequirements: z.string().optional(),
  insurance: z.string().optional(),
  emergencyContact: z.string().optional(),
});

type BookingData = z.infer<typeof bookingSchema>;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the data
    const validatedData = bookingSchema.parse(body);

    // Here you would typically:
    // 1. Save to database
    // 2. Send emails/notifications
    // 3. Create internal booking record
    // 4. Integrate with booking system

    // For now, we'll simulate the process
    const bookingId = `BK${Date.now()}`;

    // Log the booking (in production, save to database)
    console.log('New booking received:', {
      bookingId,
      ...validatedData,
      timestamp: new Date().toISOString(),
    });

    // Send confirmation email (simulate)
    await sendBookingConfirmation(validatedData, bookingId);

    // Send internal notification (simulate)
    await notifyOperators(validatedData, bookingId);

    return NextResponse.json({
      success: true,
      bookingId,
      message: 'Η κράτηση σας καταχωρήθηκε επιτυχώς',
      estimatedResponseTime: validatedData.serviceType === 'emergency' ? '8-12 λεπτά' : '15-30 λεπτά',
    });

  } catch (error) {
    console.error('Booking API error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        error: 'Λανθασμένα δεδομένα',
        details: error.errors,
      }, { status: 400 });
    }

    return NextResponse.json({
      success: false,
      error: 'Σφάλμα κατά την επεξεργασία της κράτησης',
    }, { status: 500 });
  }
}

// Simulate sending confirmation email
async function sendBookingConfirmation(data: BookingData, bookingId: string) {
  // In production, integrate with email service (SendGrid, AWS SES, etc.)
  console.log(`Sending confirmation email for booking ${bookingId} to patient:`, data.patientName);

  // Email content would include:
  // - Booking ID
  // - Service details
  // - Pickup/destination
  // - Contact information
  // - Next steps
}

// Simulate notifying operators
async function notifyOperators(data: BookingData, bookingId: string) {
  // In production, this would:
  // 1. Send SMS to on-duty operators
  // 2. Create task in operator dashboard
  // 3. Update availability system
  // 4. Log in operations database

  console.log(`Notifying operators about new ${data.serviceType} booking ${bookingId}`);

  // Priority handling for emergency bookings
  if (data.serviceType === 'emergency') {
    console.log('HIGH PRIORITY: Emergency booking - immediate dispatch required');
    // Send immediate SMS/push notifications
    // Update real-time dashboard
    // Trigger automatic dispatch system
  }
}