export const COMPANY_INFO = {
  name: process.env.NEXT_PUBLIC_COMPANY_NAME || 'Ασθενοφόρα Θεσσαλονίκη',
  phone: process.env.NEXT_PUBLIC_PHONE_PRIMARY || '2310XXXXXX',
  emergencyPhone: process.env.NEXT_PUBLIC_PHONE_EMERGENCY || '6970XXXXXX',
  email: process.env.NEXT_PUBLIC_EMAIL || 'info@ambulance-thessaloniki.gr',
  address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS || 'Στρατιά 123, Θεσσαλονίκη 54XXX',
  coordinates: {
    lat: Number(process.env.NEXT_PUBLIC_COMPANY_COORDINATES_LAT) || 40.6401,
    lng: Number(process.env.NEXT_PUBLIC_COMPANY_COORDINATES_LNG) || 22.9444,
  },
  businessHours: {
    open: process.env.NEXT_PUBLIC_BUSINESS_HOURS_OPEN || '00:00',
    close: process.env.NEXT_PUBLIC_BUSINESS_HOURS_CLOSE || '23:59',
  },
  responseTime: {
    center: Number(process.env.NEXT_PUBLIC_RESPONSE_TIME_CENTER) || 8,
    suburbs: Number(process.env.NEXT_PUBLIC_RESPONSE_TIME_SUBURBS) || 12,
  },
};

export const SERVICES = {
  emergency: {
    id: 'emergency',
    title: 'Επείγουσες Διακομιδές',
    description: '24/7 άμεση ανταπόκριση για επείγοντα περιστατικά',
    icon: '🚨',
    basePrice: 50,
    url: '/emergency',
    features: [
      'Άμεση ανταπόκριση 24/7',
      'Πιστοποιημένο προσωπικό ΕΚΑΒ',
      'Πλήρης ιατρικός εξοπλισμός',
      'Όλες οι ασφάλειες',
    ],
  },
  scheduled: {
    id: 'scheduled',
    title: 'Προγραμματισμένες Μεταφορές',
    description: 'Για διάλυση, εξετάσεις και τακτικές μεταφορές',
    icon: '📅',
    basePrice: 40,
    url: '/scheduled',
    features: [
      'Προγραμματισμένες ώρες',
      'Μηνιαία πακέτα διαθέσιμα',
      'Ειδικές τιμές για τακτικές μεταφορές',
      'Online κράτηση',
    ],
  },
  international: {
    id: 'international',
    title: 'Διεθνείς Μεταφορές',
    description: 'Επαναπατρισμός και διακομιδές εξωτερικού',
    icon: '✈️',
    basePrice: 200,
    url: '/international',
    features: [
      'Επαναπατρισμός ασθενών',
      'Διακομιδές σε κλινικές εξωτερικού',
      'Συνεργασία με ασφαλιστικές',
      'Διεθνή πρωτόκολλα',
    ],
  },
  special: {
    id: 'special',
    title: 'Ειδικές Ανάγκες',
    description: 'Βαριατρική, παιδιατρική και ειδικές μεταφορές',
    icon: '👴',
    basePrice: 60,
    url: '/special-needs',
    features: [
      'Βαριατρικές μεταφορές',
      'Παιδιατρικές διακομιδές',
      'Ψυχιατρικές μεταφορές',
      'Εξειδικευμένο προσωπικό',
    ],
  },
};

export const AREAS = {
  'kentro': {
    name: 'Κέντρο Θεσσαλονίκης',
    slug: 'asthenoforo-kentro',
    responseTime: 8,
    streets: ['Τσιμισκή', 'Αριστοτέλους', 'Εγνατία', 'Βενιζέλου', 'Μητροπόλεως'],
    postalCodes: ['54621', '54622', '54623', '54624', '54625'],
    coordinates: { lat: 40.6401, lng: 22.9444 },
    hospitals: [
      { name: 'ΑΧΕΠΑ', distance: 2.5, address: 'Στ. Κυριακίδη 1', type: 'public' as const },
      { name: 'Ιπποκράτειο', distance: 3.2, address: 'Κωνσταντινουπόλεως 49', type: 'public' as const },
      { name: 'Άγιος Δημήτριος', distance: 1.8, address: 'Αγίου Δημητρίου 2', type: 'public' as const },
    ],
  },
  'kalamaria': {
    name: 'Καλαμαριά',
    slug: 'asthenoforo-kalamaria',
    responseTime: 10,
    streets: ['Κυπρίων Αγωνιστών', 'Παλαιολόγου', 'Αγγέλων', 'Πλαστήρα'],
    postalCodes: ['55131', '55132', '55133', '55134'],
    coordinates: { lat: 40.5892, lng: 22.9475 },
    hospitals: [
      { name: 'Ευρωκλινική', distance: 1.5, address: 'Ιατρού Μελά 9', type: 'private' as const },
      { name: 'Κλινική Καλαμαριάς', distance: 0.8, address: 'Κύπρου 20', type: 'private' as const },
    ],
  },
  'pylaia': {
    name: 'Πυλαία-Πανόραμα',
    slug: 'asthenoforo-pylaia',
    responseTime: 12,
    streets: ['Αναγεννήσεως', 'Κομνηνών', 'Παναγίας Φανερωμένης'],
    postalCodes: ['55535', '55236'],
    coordinates: { lat: 40.6126, lng: 23.0017 },
    hospitals: [
      { name: 'Interbalkan', distance: 2.0, address: 'Ασκληπιού 10', type: 'private' as const },
    ],
  },
  // Add more areas as needed
};

export const PRICING_CONFIG = {
  baseRates: {
    emergency: 50,
    scheduled: 40,
    international: 200,
    special: 60,
  },
  distanceRates: {
    '0-10km': 0,
    '10-30km': 1.5,
    '30km+': 1.2,
  },
  timeModifiers: {
    night: 10, // 22:00-06:00
    weekend: 10,
    holiday: 15,
  },
  insuranceDiscounts: {
    public: 0.3, // 30% discount
    private: 0.2, // 20% discount
    none: 0,
  },
};

export const CONTACT_HOURS = {
  monday: { open: '00:00', close: '23:59' },
  tuesday: { open: '00:00', close: '23:59' },
  wednesday: { open: '00:00', close: '23:59' },
  thursday: { open: '00:00', close: '23:59' },
  friday: { open: '00:00', close: '23:59' },
  saturday: { open: '00:00', close: '23:59' },
  sunday: { open: '00:00', close: '23:59' },
};

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Μαρία Π.',
    area: 'Καλαμαριά',
    rating: 5,
    text: 'Εξαιρετική εξυπηρέτηση! Ήρθαν σε 10 λεπτά και το προσωπικό ήταν άψογο. Μετέφεραν τη μητέρα μου με απόλυτη ασφάλεια.',
    date: '2024-01-15',
    serviceType: 'emergency',
    verified: true,
  },
  {
    id: '2',
    name: 'Γιώργος Κ.',
    area: 'Κέντρο',
    rating: 5,
    text: 'Χρησιμοποιώ τις υπηρεσίες τους για τις διαλύσεις 3 φορές την εβδομάδα. Πάντα στην ώρα τους και πολύ προσεκτικοί.',
    date: '2024-02-03',
    serviceType: 'scheduled',
    verified: true,
  },
  {
    id: '3',
    name: 'Ελένη Μ.',
    area: 'Πυλαία',
    rating: 5,
    text: 'Άμεση ανταπόκριση σε επείγον περιστατικό. Επαγγελματίες με ανθρώπινη προσέγγιση. Τους ευχαριστώ πολύ!',
    date: '2024-01-28',
    serviceType: 'emergency',
    verified: true,
  },
];

export const SEO_DEFAULTS = {
  title: 'Ιδιωτικό Ασθενοφόρο Θεσσαλονίκη | 24ωρη Διακομιδή Ασθενών',
  description: '24ωρο ιδιωτικό ασθενοφόρο στη Θεσσαλονίκη. Άμεση ανταπόκριση, πιστοποιημένο προσωπικό ΕΚΑΒ. Καλέστε: 2310-XXXXXX',
  keywords: [
    'ιδιωτικό ασθενοφόρο',
    'ασθενοφόρο θεσσαλονίκη',
    '24ωρο ασθενοφόρο',
    'διακομιδή ασθενών',
    'επείγον ασθενοφόρο',
    'προγραμματισμένη διακομιδή',
    'μεταφορά ασθενών',
    'ΕΚΑΒ πιστοποίηση',
  ],
  ogImage: '/images/og-ambulance.jpg',
};