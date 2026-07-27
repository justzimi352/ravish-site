/**
 * Every figure here comes from RAVISH's own IMPACT 2025 report,
 * published 18 January 2026. Cumulative since March 2024.
 * Do not adjust these without a newer published source.
 */

export const source = {
  label: 'IMPACT 2025',
  published: '18 January 2026',
  publishedISO: '2026-01-18',
};

export type Counter = {
  value: number;
  suffix: string;
  label: string;
  note?: string;
};

/** The four for the homepage strip. */
export const headline: Counter[] = [
  { value: 15000, suffix: '+', label: 'Patients cared for', note: 'free consultations and medicines' },
  { value: 55, suffix: '+', label: 'Medical camps', note: '150–500 patients each' },
  { value: 40, suffix: '+', label: 'Local cabinets', note: 'one per medical college' },
  { value: 25, suffix: '+', label: 'Cities covered', note: 'across all four provinces' },
];

/** The full published table. */
export const allStats: Counter[] = [
  { value: 15000, suffix: '+', label: 'Patients given medical care' },
  { value: 30000, suffix: '+', label: 'One-time meals distributed' },
  { value: 55, suffix: '+', label: 'Medical camps organised' },
  { value: 3, suffix: 'M+', label: 'PKR raised' },
  { value: 150, suffix: '+', label: 'Activities conducted' },
  { value: 25, suffix: '+', label: 'Major cities covered' },
  { value: 5000, suffix: '+', label: 'Volunteers registered' },
  { value: 300, suffix: '+', label: 'Team members active' },
  { value: 40, suffix: '+', label: 'Local cabinets established' },
  { value: 40, suffix: '+', label: 'Ambassadors working' },
  { value: 45, suffix: '+', label: 'Partnerships enacted' },
];

/** Two years. Six-fold funding growth. The strongest asset on the site. */
export type GrowthRow = {
  metric: string;
  y2024: string;
  y2025: string;
  multiple: number;
  multipleLabel: string;
};

export const growth: GrowthRow[] = [
  { metric: 'Funds raised', y2024: 'PKR 0.5M+', y2025: 'PKR 3M+', multiple: 6, multipleLabel: '×6' },
  { metric: 'Activities', y2024: '35+', y2025: '150+', multiple: 4.3, multipleLabel: '×4.3' },
  { metric: 'Patients', y2024: '5,000+', y2025: '15,000+', multiple: 3, multipleLabel: '×3' },
  { metric: 'Volunteers', y2024: '1,800+', y2025: '5,000+', multiple: 2.8, multipleLabel: '×2.8' },
  { metric: 'Local cabinets', y2024: '17', y2025: '40+', multiple: 2.4, multipleLabel: '×2.4' },
  { metric: 'Ambassadors', y2024: '20+', y2025: '40+', multiple: 2, multipleLabel: '×2' },
  { metric: 'Team members', y2024: '200+', y2025: '300+', multiple: 1.5, multipleLabel: '×1.5' },
];

/** 2025 programme breakdown, IMPACT 2025. */
export const programmeBreakdown = [
  { count: '35+', label: 'general medical camps', note: '200–300 patients each' },
  { count: '20+', label: 'flood relief camps', note: 'Punjab & KPK, including hard-to-reach areas' },
  { count: '8', label: 'Label STEP camps', note: 'weaving and labour communities' },
  { count: '—', label: 'dental, blood and screening camps', note: 'BP, glucose, BMI' },
];

export const reports = [
  {
    year: 2025,
    title: 'IMPACT 2025',
    published: '18 January 2026',
    slides: 17,
    dir: '/impact/2025',
    blurb:
      'Navigating the flood crisis in Pakistan to establishing its first welfare clinic — the year RAVISH was the front page of student-led initiatives.',
  },
  {
    year: 2024,
    title: 'IMPACT 2024',
    published: '21 December 2024',
    slides: 20,
    dir: '/impact/2024',
    blurb:
      'The first annual log. Ten months, 20 medical camps, 5,000 registered patients and a network of 17 local cabinets.',
  },
] as const;
