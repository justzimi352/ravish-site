export type Partner = { name: string; note?: string };

export const labelStep = {
  name: 'Label STEP',
  country: 'Switzerland',
  what: 'fair-trade handmade carpets',
  story: [
    'Label STEP is a Swiss fair-trade organisation working with handmade carpet producers. It is the most significant partnership RAVISH holds, and the only international one.',
    'The relationship began informally in September 2024 with a single camp for carpet-weaving families. A formal Memorandum of Understanding followed in April 2025, and it was renewed at Label STEP’s annual conference in December 2025.',
    'Eight camps ran across three districts in 2025, focused on occupational health for weaving and labour communities — the specific injuries and chronic pain that come from a lifetime at a loom, and access to medicines for families whose work is piece-rate and whose time off is unpaid.',
  ],
  facts: [
    { label: 'First camp together', value: 'September 2024' },
    { label: 'Formal MoU signed', value: 'April 2025' },
    { label: 'MoU renewed', value: 'December 2025' },
    { label: 'Camps in 2025', value: '8, across 3 districts' },
  ],
};

export const partnerGroups: { heading: string; blurb: string; items: Partner[] }[] = [
  {
    heading: 'Health & NGO',
    blurb: 'Organisations that co-run camps, supply screening capacity or bring communities to the table.',
    items: [
      { name: 'VFAHT Pakistan', note: 'Hepatitis screening — the second most frequent partner' },
      { name: 'Democratic Commission for Human Development' },
      { name: 'Justajoo Foundation' },
      { name: 'Dilawar Welfare Foundation' },
      { name: 'Labour Education Foundation' },
      { name: 'Apportion Relief Foundation' },
      { name: 'Faizan-e-Alam' },
      { name: 'PKRC' },
      { name: 'HHRD' },
      { name: 'Pragmatic Youth' },
      { name: 'Agahi' },
      { name: 'Climate Action Now PK' },
      { name: 'Ilm Daan' },
      { name: 'RoamX' },
      { name: 'Infection Prevention & Control Foundation' },
      { name: 'Alkhidmat / Aghosh' },
      { name: 'SOS Children’s Villages' },
      { name: 'Edhi Foundation' },
      { name: 'Care Campaign PK', note: 'MoU signed 26 July 2026' },
    ],
  },
  {
    heading: 'Clinical',
    blurb: 'Hospitals and clinics that provide doctors, referral pathways or premises.',
    items: [
      { name: 'Yaseen Medical Centre' },
      { name: 'Health Plus Aesthetic Clinic' },
      { name: 'Ghurki Trust Teaching Hospital' },
      { name: 'Gulab Devi Hospital' },
      { name: 'Jinnah Hospital' },
      { name: 'DHQ Sargodha' },
      { name: 'Ali Fatima Hospital' },
    ],
  },
  {
    heading: 'Student organisations',
    blurb: 'Societies and student bodies that co-host camps and webinars.',
    items: [
      { name: 'CARDIG UCMD' },
      { name: 'LMDC Chess Club', note: 'A charity tournament funded a full camp in October 2024' },
      { name: 'IFMSA Pakistan' },
      { name: 'MSAP' },
      { name: 'MSCR' },
    ],
  },
  {
    heading: 'Cause marketing',
    blurb: 'Businesses that share a portion of sales when you use the RAVISH code.',
    items: [
      { name: 'Pappa’s Pizza', note: 'Code RPZ1' },
      { name: 'Lemon n Pepper', note: 'Code RAV10' },
    ],
  },
];

export const partnerTotal = 45;
