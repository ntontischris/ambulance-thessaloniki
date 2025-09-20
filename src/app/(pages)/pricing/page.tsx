import PricingClient from './pricing-client';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Τιμές & Πακέτα Υπηρεσιών - Ιδιωτικό Ασθενοφόρο Θεσσαλονίκη',
  description: 'Διαφανείς τιμές για όλες τις υπηρεσίες ιδιωτικού ασθενοφόρου. Πακέτα emergency, προγραμματισμένων διακομιδών και διεθνών μεταφορών.',
  keywords: 'τιμές ασθενοφόρου, κόστος διακομιδής, πακέτα υπηρεσιών, ιδιωτικό ασθενοφόρο τιμοκατάλογος',
};

export default function PricingPage() {
  return <PricingClient />;
}