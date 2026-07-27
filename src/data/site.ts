export const site = {
  name: 'RAVISH',
  publicName: 'RAVISH NGO',
  urdu: 'روش',
  meaning: 'A path, a pavement',
  tagline: 'روشِ صحت، حق سب کا',
  taglineRoman: 'Ravish-e-Sehat, haq sab ka',
  taglineEnglish: 'The path of health — a right for all',
  founded: '7 March 2024',
  foundedYear: 2024,
  ravishDay: '7 March',
  college: 'Lahore Medical & Dental College',
  collegeShort: 'LMDC',
  hq: 'Lahore, Punjab, Pakistan',
  email: 'ravishngo@gmail.com',
  phone: '+92 322 478 1092',
  phoneHref: '+923224781092',
  instagram: 'https://instagram.com/ravishngo',
  instagramHandle: '@ravishngo',
  linkedin: 'https://www.linkedin.com/company/ravishngo/',
  description:
    'RAVISH is a student-led healthcare organisation founded in 2024 by students of Lahore Medical & Dental College. Through free medical camps, a permanent clinic and nationwide relief work, RAVISH delivers free and quality healthcare to underserved communities across Pakistan.',
} as const;

export const clinic = {
  name: 'RAVISH Clinic',
  opened: '14 September 2025',
  openedISO: '2025-09-14',
  address: 'House #171, DAV Hostel #2, Dev Samaj Road, near Androon Lahore',
  city: 'Lahore',
  cadence: 'Runs weekly',
  partner: 'Tanveer Jahan',
  partnerRole: 'human rights defender and social development professional',
  doctor: 'Dr. Aashiq Hussain Wattoo',
  doctorSince: 'September 2025',
  services: [
    'Free consultations with qualified doctors',
    'Follow-up appointments for camp patients',
    'Basic diagnostics and chronic-disease monitoring',
    'Free medicines, subject to availability',
  ],
} as const;

export const donation = {
  accountName: 'Abdullah Farooq',
  accountNumber: '0457278535019',
  iban: 'PK49UNIL0109000278535019',
  bank: 'United Bank Limited (UBL)',
  bankShort: 'UBL',
  ramadan: [
    { label: 'Ration Bag', amount: 'Rs 7,000', note: 'Feeds 6 people for 15 days' },
    { label: 'Food Pack', amount: 'Rs 300', note: 'One hot meal, suhoor or iftar' },
  ],
} as const;

/** Not a registered NGO. This wording appears wherever the site asks for money. */
export const statusDisclosure = {
  short:
    'RAVISH is a student-led organisation, not a registered NGO or Section 42 not-for-profit company.',
  full: [
    'RAVISH is a **student-led organisation**. It is **not** a registered NGO and **not** a Section 42 not-for-profit company. It was formed by medical students for the purpose of spreading health awareness and helping the less fortunate.',
    'Donations are received into the account listed above, which is held in the name of a member of the RAVISH National Cabinet, and are used solely to fund the medical camps, the RAVISH Clinic, relief work and welfare drives described on this site. Funds are tracked on an activity-wise basis.',
    'Because RAVISH is not a registered charity, **we cannot issue tax-exempt receipts**. If you would like to know how your contribution was used, write to **ravishngo@gmail.com** and we will tell you.',
  ],
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; note?: string }[];
};

export const nav: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'The Clinic', href: '/clinic' },
  {
    label: 'What we do',
    href: '/what-we-do',
    children: [
      { label: 'Free Medical Camps', href: '/what-we-do/medical-camps', note: '55+ camps since 2024' },
      { label: 'Awareness & Screening', href: '/what-we-do/awareness', note: 'Hepatitis, cancers, NCDs' },
      { label: 'Education & Webinars', href: '/what-we-do/education', note: 'USMLE, AMC, research' },
      { label: 'Welfare Drives', href: '/what-we-do/welfare', note: 'Ramadan, orphanages, food' },
      { label: 'Disaster & Climate Relief', href: '/what-we-do/disaster-relief', note: 'The 2025 floods' },
    ],
  },
  { label: 'Chapters', href: '/chapters' },
  { label: 'Impact', href: '/impact' },
  {
    label: 'Get involved',
    href: '/get-involved',
    children: [
      { label: 'Volunteer', href: '/get-involved/volunteer', note: 'Open to everyone' },
      { label: 'Join a Cabinet', href: '/get-involved/cabinets', note: 'For medical students' },
      { label: 'Ambassadors', href: '/get-involved/ambassadors', note: 'Campus representatives' },
      { label: 'Partner with us', href: '/get-involved/partner', note: 'NGOs, hospitals, brands' },
    ],
  },
  { label: 'Stories', href: '/stories' },
];

export const footerNav = [
  {
    heading: 'The work',
    links: [
      { label: 'Free Medical Camps', href: '/what-we-do/medical-camps' },
      { label: 'RAVISH Clinic', href: '/clinic' },
      { label: 'Awareness & Screening', href: '/what-we-do/awareness' },
      { label: 'Education & Webinars', href: '/what-we-do/education' },
      { label: 'Welfare Drives', href: '/what-we-do/welfare' },
      { label: 'Disaster & Climate Relief', href: '/what-we-do/disaster-relief' },
    ],
  },
  {
    heading: 'The organisation',
    links: [
      { label: 'About RAVISH', href: '/about' },
      { label: 'Chapters & cabinets', href: '/chapters' },
      { label: 'Impact reports', href: '/impact' },
      { label: 'News', href: '/news' },
      { label: 'Stories', href: '/stories' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    heading: 'Take part',
    links: [
      { label: 'Volunteer', href: '/get-involved/volunteer' },
      { label: 'Join a cabinet', href: '/get-involved/cabinets' },
      { label: 'Become an ambassador', href: '/get-involved/ambassadors' },
      { label: 'Partner with us', href: '/get-involved/partner' },
      { label: 'Donate', href: '/donate' },
    ],
  },
];
