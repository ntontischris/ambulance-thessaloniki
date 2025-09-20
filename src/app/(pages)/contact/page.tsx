import ContactClient from './contact-client';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Επικοινωνία - Ιδιωτικό Ασθενοφόρο Θεσσαλονίκη',
  description: 'Επικοινωνήστε μαζί μας για επείγουσες διακομιδές ή προγραμματισμένες μεταφορές. 24ωρη κάλυψη, άμεση ανταπόκριση.',
  keywords: 'επικοινωνία ασθενοφόρο, τηλέφωνο διακομιδής, contact ambulance thessaloniki',
};

export default function ContactPage() {
  return <ContactClient />;
}