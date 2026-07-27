export type Milestone = {
  date: string;
  iso: string;
  title: string;
  note?: string;
  weight?: 'major' | 'normal';
};

export const timeline: Milestone[] = [
  { date: '7 Mar 2024', iso: '2024-03-07', title: 'RAVISH launches', note: 'Founded by final-year MBBS students at LMDC. Now celebrated annually as Ravish Day.', weight: 'major' },
  { date: '13 Mar 2024', iso: '2024-03-13', title: 'First medical camp', note: 'Over 200 patients seen, six days after launch.' },
  { date: '8 May 2024', iso: '2024-05-08', title: 'Second camp — 350+ patients' },
  { date: '15 Sep 2024', iso: '2024-09-15', title: 'First Label STEP camp', note: 'The beginning of the partnership with the Swiss fair-trade carpet organisation.' },
  { date: '17 Sep 2024', iso: '2024-09-17', title: 'Free USMLE series launches', note: 'A ten-part webinar series, each part hosted by a different chapter.' },
  { date: '28 Sep 2024', iso: '2024-09-28', title: 'Color for a Cause begins', note: 'Repainting government school classrooms.' },
  { date: '10 Oct 2024', iso: '2024-10-10', title: 'Kasur camp — 537 patients', note: 'The largest single-day camp to date.', weight: 'major' },
  { date: '17 Oct 2024', iso: '2024-10-17', title: 'Charity chess tournament funds a camp', note: 'Run with the LMDC Chess Club.' },
  { date: '31 Oct 2024', iso: '2024-10-31', title: 'First VFAHT hepatitis screening', note: 'The start of what becomes the largest awareness programme.' },
  { date: '15 Nov 2024', iso: '2024-11-15', title: 'Ambassador Program launches' },
  { date: '21 Dec 2024', iso: '2024-12-21', title: 'IMPACT 2024 published', note: 'The first annual log.' },

  { date: '7 Mar 2025', iso: '2025-03-07', title: 'First Ravish Day', note: 'One year.' },
  { date: '22 Mar 2025', iso: '2025-03-22', title: 'Iftar for 1,000+ people', note: 'The Ramadan Relief Campaign at scale.' },
  { date: '30 Apr 2025', iso: '2025-04-30', title: 'Label STEP MoU signed', note: 'The first formal international partnership.', weight: 'major' },
  { date: 'Aug 2025', iso: '2025-08-21', title: 'KPK flood relief begins', note: 'A GoFundMe opens as the monsoon crisis escalates.' },
  { date: '13–15 Sep 2025', iso: '2025-09-13', title: '6,000+ patients in three days', note: 'Chiniot, Bhawana and Jhang — treating people beside fields still under floodwater.', weight: 'major' },
  { date: '14 Sep 2025', iso: '2025-09-14', title: 'RAVISH Clinic opens', note: 'A permanent free clinic near Androon Lahore, established with Tanveer Jahan.', weight: 'major' },
  { date: '25 Sep 2025', iso: '2025-09-25', title: 'Gilgit-Baltistan mission', note: 'A nine-day relief and medical mission through the north.' },
  { date: '26 Oct 2025', iso: '2025-10-26', title: 'RAVISH × CARDIG camp', note: '300+ patients in Androon Lahore.' },
  { date: '27 Dec 2025', iso: '2025-12-27', title: 'Label STEP annual conference', note: 'The MoU is renewed for another year.' },

  { date: '18 Jan 2026', iso: '2026-01-18', title: 'IMPACT 2025 published', note: '15,000 patients, 55 camps, PKR 3 million raised.', weight: 'major' },
  { date: 'Feb 2026', iso: '2026-02-15', title: 'Ramadan 2026 appeal opens' },
  { date: '1 Jul 2026', iso: '2026-07-01', title: 'Regional Coordinator tier introduced', note: 'A new layer between the National Cabinet and 40+ local cabinets.' },
  { date: '26 Jul 2026', iso: '2026-07-26', title: 'MoU with Care Campaign PK' },
];

export const governance = {
  national: [
    'President and Senior Vice President',
    'Media · Marketing · Outreach · Database · Social Media',
    'Volunteer Coordinator · Ambassador Coordinator · Fundraising Ambassador',
  ],
  regional:
    'Regional Coordinators — introduced for the 2026–27 term. They mentor local cabinet presidents, oversee regional operations, audit activity and report to the National Cabinet.',
  local: [
    'President · Vice President · General Secretary',
    'Events · Media · Information · Academics · External Affairs · Finance · Logistics',
  ],
  term: 'Terms run July to June. Each cabinet publishes a "Meet the Team" carousel at the start and a signing-off post at the end.',
  eligibility:
    'Open to MBBS students. A BDS (dental) model was added on 8 July 2025, so dental students now hold cabinet roles too.',
};

export const people = [
  { name: 'Dr. Alia Haider', role: 'Leads flood and climate relief' },
  { name: 'Dr. Saad Javaid', role: 'Senior Vice President' },
  { name: 'Ahmad Sobaan', role: 'Media Head' },
  { name: 'Dr. Laiba Zahoor', role: 'Regional Coordinator, Lahore Suburban' },
  { name: 'Dr. Aashiq Hussain Wattoo', role: 'RAVISH Clinic, since September 2025' },
  { name: 'Tanveer Jahan', role: 'Clinic partner — human rights defender' },
  { name: 'Abdullah Farooq', role: 'Holds the national donation account' },
];
