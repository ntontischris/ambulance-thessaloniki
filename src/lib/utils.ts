import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhoneNumber(phone: string): string {
  // Remove all non-digits
  const digits = phone.replace(/\D/g, '');

  // Format Greek phone numbers
  if (digits.startsWith('30')) {
    return `+${digits.slice(0, 2)} ${digits.slice(2, 5)} ${digits.slice(5)}`;
  }

  if (digits.startsWith('2310')) {
    return `${digits.slice(0, 4)}-${digits.slice(4)}`;
  }

  if (digits.startsWith('69')) {
    return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`;
  }

  return phone;
}

export function calculateDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

export function formatPrice(price: number): string {
  return `€${price.toFixed(0)}`;
}

export function formatDateTime(date: Date): string {
  return new Intl.DateTimeFormat('el-GR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

export function isBusinessHours(): boolean {
  // Since we're 24/7, always return true
  return true;
}

export function getResponseTime(lat: number, lng: number): number {
  // Simple calculation based on distance from center
  const centerLat = 40.6401;
  const centerLng = 22.9444;
  const distance = calculateDistance(lat, lng, centerLat, centerLng);

  if (distance < 5) return 8; // Center - 8 minutes
  if (distance < 15) return 12; // Suburbs - 12 minutes
  return 15; // Outer areas - 15 minutes
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[άάαἀἁἂἃἄἅἆἇὰάᾀᾁᾂᾃᾄᾅᾆᾇᾰᾱᾲᾳᾴᾶᾷ]/g, 'α')
    .replace(/[έέεἐἑἒἓἔἕὲέ]/g, 'ε')
    .replace(/[ήήηἠἡἢἣἤἥἦἧὴήῂῃῄῆῇ]/g, 'η')
    .replace(/[ίίιἰἱἲἳἴἵἶἷὶίῒῖῗ]/g, 'ι')
    .replace(/[όόοὀὁὂὃὄὅὸό]/g, 'ο')
    .replace(/[ύύυὐὑὒὓὔὕὖὗὺύῠῡῢῦῧ]/g, 'υ')
    .replace(/[ώώωὠὡὢὣὤὥὦὧὼώῲῳῴῶῷ]/g, 'ω')
    .replace(/[ς]/g, 'σ')
    .replace(/[^a-z0-9αβγδεζηθικλμνξοπρστυφχψω]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}
