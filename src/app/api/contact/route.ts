import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Schema validation
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  subject: z.enum(['info', 'pricing', 'booking', 'complaint', 'other']),
  message: z.string().min(10),
  preferredContact: z.enum(['email', 'phone', 'both']),
  urgency: z.enum(['low', 'medium', 'high']),
});

type ContactData = z.infer<typeof contactSchema>;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the data
    const validatedData = contactSchema.parse(body);

    // Generate ticket ID
    const ticketId = `CT${Date.now()}`;

    // Log the contact request (in production, save to database)
    console.log('New contact request received:', {
      ticketId,
      ...validatedData,
      timestamp: new Date().toISOString(),
    });

    // Send confirmation to customer
    await sendCustomerConfirmation(validatedData, ticketId);

    // Send notification to support team
    await notifySupport(validatedData, ticketId);

    // Determine response time based on urgency
    const responseTime = getResponseTime(validatedData.urgency);

    return NextResponse.json({
      success: true,
      ticketId,
      message: 'Το μήνυμά σας στάλθηκε επιτυχώς',
      responseTime,
    });

  } catch (error) {
    console.error('Contact API error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        error: 'Λανθασμένα δεδομένα',
        details: error.errors,
      }, { status: 400 });
    }

    return NextResponse.json({
      success: false,
      error: 'Σφάλμα κατά την αποστολή του μηνύματος',
    }, { status: 500 });
  }
}

// Send confirmation email to customer
async function sendCustomerConfirmation(data: ContactData, ticketId: string) {
  console.log(`Sending confirmation email to ${data.email} for ticket ${ticketId}`);

  // In production, integrate with email service
  // Email content would include:
  // - Ticket ID for reference
  // - Confirmation of receipt
  // - Expected response time
  // - Contact information for urgent matters
}

// Notify support team
async function notifySupport(data: ContactData, ticketId: string) {
  console.log(`Notifying support team about new ${data.urgency} priority ticket ${ticketId}`);

  // In production:
  // 1. Create ticket in support system
  // 2. Send notification based on urgency level
  // 3. Assign to appropriate team member
  // 4. Set up automated follow-up

  // High priority tickets get immediate attention
  if (data.urgency === 'high') {
    console.log('HIGH PRIORITY: Immediate attention required');
    // Send SMS/push notification to on-duty support
    // Create urgent ticket in system
    // Set 1-hour response deadline
  }

  // Subject-specific routing
  switch (data.subject) {
    case 'complaint':
      console.log('Routing to customer service manager');
      break;
    case 'pricing':
      console.log('Routing to sales team');
      break;
    case 'booking':
      console.log('Routing to booking specialists');
      break;
    default:
      console.log('Routing to general support');
  }
}

// Get response time based on urgency
function getResponseTime(urgency: string): string {
  switch (urgency) {
    case 'high':
      return 'εντός 1 ώρας';
    case 'medium':
      return 'εντός 4 ωρών';
    case 'low':
      return 'εντός 24 ωρών';
    default:
      return 'εντός 24 ωρών';
  }
}