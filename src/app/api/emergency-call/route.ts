import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Schema validation
const emergencyCallSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  address: z.string().min(5),
  emergencyType: z.enum(['medical', 'injury', 'breathing', 'cardiac', 'other']),
  description: z.string().min(5),
  patientAge: z.string().optional(),
  conscious: z.enum(['yes', 'no', 'unknown']),
});

type EmergencyCallData = z.infer<typeof emergencyCallSchema>;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the data
    const validatedData = emergencyCallSchema.parse(body);

    // Generate emergency call ID
    const emergencyId = `EM${Date.now()}`;

    // Log the emergency call (in production, save to high-priority database)
    console.log('EMERGENCY CALL RECEIVED:', {
      emergencyId,
      ...validatedData,
      timestamp: new Date().toISOString(),
      priority: 'CRITICAL',
    });

    // Immediate dispatch protocol
    await initiateEmergencyDispatch(validatedData, emergencyId);

    // Send confirmation call back to caller
    await scheduleConfirmationCall(validatedData, emergencyId);

    // Notify all relevant parties
    await notifyEmergencyTeam(validatedData, emergencyId);

    return NextResponse.json({
      success: true,
      emergencyId,
      message: 'Η επείγουσα κλήση σας καταχωρήθηκε',
      status: 'DISPATCHING',
      estimatedArrival: '8-12 λεπτά',
      callbackTime: '2-3 λεπτά',
    });

  } catch (error) {
    console.error('Emergency API error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        error: 'Λανθασμένα δεδομένα',
        details: error.errors,
      }, { status: 400 });
    }

    return NextResponse.json({
      success: false,
      error: 'Σφάλμα κατά την επεξεργασία της επείγουσας κλήσης',
    }, { status: 500 });
  }
}

// Initiate emergency dispatch
async function initiateEmergencyDispatch(data: EmergencyCallData, emergencyId: string) {
  console.log(`🚨 EMERGENCY DISPATCH INITIATED - ID: ${emergencyId}`);

  // In production:
  // 1. Find nearest available ambulance
  // 2. Calculate optimal route
  // 3. Send dispatch order to crew
  // 4. Update real-time tracking system
  // 5. Notify hospital if needed

  // Priority calculation based on emergency type
  const priority = calculatePriority(data);
  console.log(`Priority level: ${priority}`);

  // Simulate dispatch process
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log(`Ambulance dispatched to: ${data.address}`);
}

// Schedule confirmation call
async function scheduleConfirmationCall(data: EmergencyCallData, emergencyId: string) {
  console.log(`Scheduling confirmation call to ${data.phone} in 2-3 minutes`);

  // In production:
  // 1. Add to call queue system
  // 2. Set priority flag
  // 3. Include emergency details
  // 4. Set maximum wait time

  setTimeout(() => {
    console.log(`Making confirmation call to ${data.phone} for emergency ${emergencyId}`);
    // Integrate with VoIP system or calling service
  }, 120000); // 2 minutes delay
}

// Notify emergency team
async function notifyEmergencyTeam(data: EmergencyCallData, emergencyId: string) {
  console.log(`Notifying emergency team about ${data.emergencyType} case ${emergencyId}`);

  // In production:
  // 1. Send SMS to on-duty medical director
  // 2. Update emergency dashboard
  // 3. Alert nearby hospitals if critical
  // 4. Notify backup crews if needed

  // Special protocols for critical cases
  if (data.emergencyType === 'cardiac' || data.conscious === 'no') {
    console.log('CRITICAL CASE: Alerting advanced life support team');
    await alertCriticalCareTeam(data, emergencyId);
  }

  // Hospital pre-notification for certain cases
  if (['cardiac', 'breathing'].includes(data.emergencyType)) {
    await preNotifyHospitals(data, emergencyId);
  }
}

// Calculate priority based on emergency type and patient condition
function calculatePriority(data: EmergencyCallData): 'CRITICAL' | 'HIGH' | 'MEDIUM' {
  if (data.conscious === 'no' || data.emergencyType === 'cardiac') {
    return 'CRITICAL';
  }

  if (data.emergencyType === 'breathing' || data.emergencyType === 'injury') {
    return 'HIGH';
  }

  return 'MEDIUM';
}

// Alert critical care team for highest priority cases
async function alertCriticalCareTeam(data: EmergencyCallData, emergencyId: string) {
  console.log(`🚨 CRITICAL CARE ALERT - Emergency ID: ${emergencyId}`);

  // In production:
  // 1. Send immediate SMS to cardiac arrest team
  // 2. Prepare ACLS equipment
  // 3. Contact receiving hospital
  // 4. Alert medical director
}

// Pre-notify hospitals for certain emergency types
async function preNotifyHospitals(data: EmergencyCallData, emergencyId: string) {
  console.log(`Pre-notifying hospitals for ${data.emergencyType} case ${emergencyId}`);

  // In production:
  // 1. Contact nearest appropriate hospital
  // 2. Provide preliminary patient info
  // 3. Estimate arrival time
  // 4. Request bed availability
}