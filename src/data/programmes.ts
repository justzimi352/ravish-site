import type { IconName } from '@/components/icons';

export type Programme = {
  slug: string;
  title: string;
  icon: IconName;
  flagship?: boolean;
  href?: string;
  scale: string;
  summary: string;
  detail: string[];
};

export const programmes: Programme[] = [
  {
    slug: 'medical-camps',
    title: 'Free Medical Camps',
    icon: 'stethoscope',
    flagship: true,
    href: '/what-we-do/medical-camps',
    scale: '55+ camps · 150–500 patients each',
    summary:
      'The flagship. Consultations, free medicines, vitals screening and an on-site pharmacy, set up in whatever hall, school or courtyard a community can offer.',
    detail: [
      'Every camp runs under the supervision of qualified doctors, with student volunteers handling registration, triage and counselling.',
      'Blood pressure, blood glucose and BMI are recorded for every patient — which is how a one-day camp becomes the front door to longer-term care.',
      'Counselling pamphlets are written in Urdu so that what a patient is told is also something they can take home and read.',
    ],
  },
  {
    slug: 'clinic',
    title: 'RAVISH Clinic',
    icon: 'door',
    flagship: true,
    href: '/clinic',
    scale: 'Opened 14 Sep 2025 · weekly · Lahore',
    summary:
      'A permanent free clinic near Androon Lahore. It is the follow-up pathway for camp patients — the thing that turns a series of one-day camps into continuous care.',
    detail: [
      'Established with Tanveer Jahan, a human rights defender and social development professional.',
      'Open weekly for consultations, follow-ups and basic diagnostics, with Dr. Aashiq Hussain Wattoo attending since September 2025.',
      'A patient screened at a camp with high blood pressure or blood sugar now has somewhere to be sent.',
    ],
  },
  {
    slug: 'awareness',
    title: 'Awareness & Screening',
    icon: 'shield',
    href: '/what-we-do/awareness',
    scale: 'Hepatitis is the largest programme',
    summary:
      'Screening and public education on the conditions that quietly do the most damage in Pakistan — hepatitis B and C above all.',
    detail: [
      'Hepatitis B/C screening with VFAHT Pakistan is the most frequently repeated campaign in the archive. Pakistan carries close to a fifth of the world hepatitis C burden.',
      'Breast cancer through Pink October, HPV and cervical cancer, thalassemia, diabetes, hypertension, HIV and childhood cancer.',
      'Seasonal work on dengue, heatstroke, smog and the monsoon, plus menstrual health and obesity.',
    ],
  },
  {
    slug: 'education',
    title: 'Education & Webinars',
    icon: 'book',
    href: '/what-we-do/education',
    scale: '200–260 registrations per session',
    summary:
      'Free academic and career sessions for medical students nationwide, each one hosted by a different chapter.',
    detail: [
      'A ten-part free USMLE series, launched September 2024 and led by students who have sat the exam.',
      'The AMC and AHPRA pathway for Australia, research and meta-analysis methods, and trauma care.',
      'E-certificates for participants, and hundreds of students attending from colleges that have no cabinet of their own yet.',
    ],
  },
  {
    slug: 'welfare',
    title: 'Welfare Drives',
    icon: 'basket',
    href: '/what-we-do/welfare',
    scale: '30,000+ one-time meals distributed',
    summary:
      'Ramadan ration and iftar, orphanage and old-age home visits, food, winter clothing and clean water.',
    detail: [
      'The Ramadan Relief Campaign distributes ration bags and suhoor/iftar meals — over a thousand people were served at a single iftar in March 2025.',
      'Regular visits to Aghosh, SOS Children’s Villages, Edhi, Ghauri, Kafalat Ghar and Waduha.',
      'Old-age homes, special-needs centres, refugee camps, and winter clothing drives.',
    ],
  },
  {
    slug: 'disaster-relief',
    title: 'Disaster & Climate Relief',
    icon: 'waves',
    href: '/what-we-do/disaster-relief',
    scale: '20+ relief camps · 6,000+ patients in 3 days',
    summary:
      'The 2025 floods across KPK, Punjab and Gilgit-Baltistan were the largest mobilisation in RAVISH’s history.',
    detail: [
      'Led with Dr. Alia Haider. Mobile medical care, rations, hygiene kits and clothing, delivered on the ground.',
      'Between 13 and 15 September 2025, teams treated more than 6,000 patients across Chiniot, Bhawana and Jhang — some of it beside fields still under floodwater.',
      'A nine-day mission through Gilgit-Baltistan followed from 25 September.',
    ],
  },
  {
    slug: 'color-for-a-cause',
    title: 'Color for a Cause',
    icon: 'brush',
    scale: 'First run 28 Sep 2024',
    summary:
      'Repainting government school classrooms — murals, educational charts and colour, in buildings that had none.',
    detail: [
      'Volunteers spend a weekend turning bare classrooms into rooms children want to sit in.',
      'It began as a single renovation project in 2024 and has since been repeated by several cabinets.',
    ],
  },
  {
    slug: 'ambassadors',
    title: 'Ambassador Program',
    icon: 'users',
    href: '/get-involved/ambassadors',
    scale: '40+ ambassadors working',
    summary:
      'Campus representatives who carry RAVISH into colleges that do not yet have a cabinet of their own.',
    detail: [
      'Launched November 2024 and relaunched October 2025.',
      'Ambassadors run awareness activity locally, recruit volunteers and often become the founding president of a new local cabinet.',
    ],
  },
];

/** Awareness campaign topics, for the /what-we-do/awareness page. */
export const awarenessTopics = [
  { name: 'Hepatitis B & C', note: 'The largest programme. With VFAHT Pakistan.', scale: 'largest' },
  { name: 'Breast cancer', note: 'Pink October screening and education drives.' },
  { name: 'HPV & cervical cancer', note: 'Vaccination awareness and screening.' },
  { name: 'Dengue', note: 'Seasonal prevention, standing water, symptoms.' },
  { name: 'Thalassemia', note: 'Carrier screening and blood donation.' },
  { name: 'Diabetes', note: 'Blood glucose screening at every camp.' },
  { name: 'Hypertension', note: 'Blood pressure recorded for every patient.' },
  { name: 'HIV', note: 'Testing awareness and stigma reduction.' },
  { name: 'Childhood cancer', note: 'Early-warning signs for parents.' },
  { name: 'Obesity', note: 'BMI screening and nutrition counselling.' },
  { name: 'Tuberculosis', note: 'Symptom awareness and referral.' },
  { name: 'Menstrual health', note: 'Hygiene education in schools and communities.' },
  { name: 'Heatstroke', note: 'Summer campaigns and water distribution.' },
  { name: 'Smog', note: 'Mask distribution and respiratory advice, Lahore winters.' },
  { name: 'Monsoon illness', note: 'Water-borne disease prevention.' },
];

export const webinarSeries = [
  {
    title: 'Free USMLE Series',
    parts: '10 parts',
    since: 'September 2024',
    note: 'Step 1 and Step 2 CK preparation, taught by students who have sat the exam. Each part hosted by a different chapter.',
  },
  {
    title: 'AMC & AHPRA Pathway',
    parts: 'Australia',
    since: '2025',
    note: 'Registration, exams and the practical route to practising medicine in Australia.',
  },
  {
    title: 'Research & Meta-analysis',
    parts: 'Methods',
    since: '2025',
    note: 'How to find a question, run a systematic review and get published as an undergraduate.',
  },
  {
    title: 'Trauma & Emergency Care',
    parts: 'Clinical',
    since: '2026',
    note: 'Diagnostic approach to the road-traffic-accident patient, from door to diagnosis.',
  },
];
