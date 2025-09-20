export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price: number;
  url: string;
  features: string[];
  category: 'emergency' | 'scheduled' | 'international' | 'special';
}

export interface Area {
  id: string;
  name: string;
  slug: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  responseTime: number;
  hospitals: Hospital[];
  streets: string[];
  postalCodes: string[];
}

export interface Hospital {
  name: string;
  distance: number;
  address: string;
  phone?: string;
  type: 'public' | 'private' | 'clinic';
}

export interface Booking {
  id?: string;
  serviceType: 'emergency' | 'scheduled' | 'international' | 'special';
  patientName: string;
  phone: string;
  email?: string;
  pickupAddress: string;
  destinationAddress: string;
  date?: Date;
  time?: string;
  mobilityStatus: 'walking' | 'wheelchair' | 'stretcher';
  specialRequirements?: string;
  insurance?: string;
  estimatedPrice?: number;
  status: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled';
  createdAt: Date;
  updatedAt?: Date;
}

export interface Testimonial {
  id: string;
  name: string;
  area: string;
  rating: number;
  text: string;
  date: string;
  serviceType?: string;
  verified: boolean;
}

export interface ContactForm {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  preferredContact: 'phone' | 'email';
  urgency: 'low' | 'medium' | 'high';
}

export interface PriceCalculation {
  basePrice: number;
  distancePrice: number;
  timeModifier: number;
  serviceModifier: number;
  insuranceDiscount: number;
  totalPrice: number;
  estimatedDuration: number;
}

export interface AvailabilityStatus {
  available: number;
  total: number;
  averageResponseTime: number;
  lastUpdated: Date;
}

// SEO Types
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogImage?: string;
  structuredData?: any;
}

// Blog Types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: Date;
  updatedAt?: Date;
  tags: string[];
  category: string;
  featured: boolean;
  readingTime: number;
  seoData: SEOData;
}