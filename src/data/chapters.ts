/**
 * The complete local cabinet roster, transcribed from RAVISH's own
 * "Local Cabinet Presidents 2025–2026" tables.
 *
 * Instagram handles use at least six different naming patterns and two
 * colleges changed handle between terms, so every handle here is the one
 * actually published — none are inferred. `@amc.ravishingo` (Ayub) really
 * does carry that extra "i".
 */

export type Chapter = {
  institution: string;
  short: string;
  city: string;
  presidents: { name: string; year: string }[];
  instagram: string | null;
  founding?: boolean;
  dormant?: boolean;
};

export const chapters: Chapter[] = [
  { institution: 'Lahore Medical & Dental College', short: 'LMDC', city: 'Lahore', founding: true, presidents: [{ name: 'Talha Attiq', year: '5' }, { name: 'Zoha Marriyam', year: '5' }], instagram: 'lmdc.ravishngo' },
  { institution: 'Allama Iqbal Medical College', short: 'AIMC', city: 'Lahore', presidents: [{ name: 'Menahil Fazal Maan', year: '3' }], instagram: 'aimc.ravish' },
  { institution: 'Al-Aleem Medical College', short: 'AAMC', city: 'Lahore', presidents: [{ name: 'Ghania Menail', year: '5' }], instagram: 'aamc.ravishngo' },
  { institution: 'Ameer-ud-Din Medical College', short: 'AMC Lahore', city: 'Lahore', presidents: [{ name: 'Muhammad Talha Ghaffar', year: '4' }, { name: 'Abu Hurairah', year: '5' }], instagram: 'amc.ravishngo' },
  { institution: 'Amna Inayat Medical College', short: 'AIMEC', city: 'Lahore', presidents: [{ name: 'Laiba Zahoor', year: '5' }], instagram: 'aimec.ravish.ngo' },
  { institution: 'Avicenna Medical & Dental College', short: 'Avicenna', city: 'Lahore', presidents: [{ name: 'Mahnoor Waqar', year: '3' }], instagram: 'avicennamc.ravishngo' },
  { institution: 'Abu Umara Medical & Dental College', short: 'AUMDC', city: 'Lahore', presidents: [{ name: 'Inam Ullah Lashari', year: '4' }], instagram: 'aumdc.ravishngo' },
  { institution: 'Azra Naheed Medical College', short: 'ANMC', city: 'Lahore', presidents: [{ name: 'Muhammad Adil Ali Abid', year: '4' }], instagram: 'anmc1.ravishngo' },
  { institution: 'Central Park Medical College', short: 'CPMC', city: 'Lahore', presidents: [{ name: 'Areej Cheema', year: '4' }], instagram: 'ravish.cpmc' },
  { institution: 'Continental Medical College', short: 'CMC', city: 'Lahore', presidents: [{ name: 'Unsa Arif', year: '4' }], instagram: null },
  { institution: 'Fatima Jinnah Medical University', short: 'FJMU', city: 'Lahore', presidents: [{ name: 'Amna Yasin', year: '4' }], instagram: 'fjmu.ravishngo' },
  { institution: 'Fatima Memorial Hospital', short: 'FMH', city: 'Lahore', presidents: [{ name: 'Ayesha Awan', year: 'Graduate' }], instagram: 'fmh.ravishngo' },
  { institution: 'Rashid Latif Medical College', short: 'RLMC', city: 'Lahore', presidents: [{ name: 'Abdul Mutaal', year: '5' }], instagram: 'rlmc.ravishngo' },
  { institution: 'Services Institute of Medical Sciences', short: 'SIMS', city: 'Lahore', presidents: [{ name: 'Muhammad Hamza Sarwar', year: '2' }], instagram: 'simsravish' },
  { institution: 'Shalamar Medical & Dental College', short: 'SMDC', city: 'Lahore', presidents: [{ name: 'Abdul Hanan Hameed', year: '4' }], instagram: 'ravish.smdc' },
  { institution: 'University College of Medicine & Dentistry', short: 'UCMD', city: 'Lahore', presidents: [{ name: 'Mohammad Anas', year: '4' }], instagram: 'ucmd.ravish' },
  { institution: 'King Edward Medical University', short: 'KEMU', city: 'Lahore', presidents: [], instagram: 'kemu.ravishngo', dormant: true },
  { institution: 'Aziz Fatima Medical & Dental College', short: 'AFMDC', city: 'Faisalabad', presidents: [{ name: 'Muhammad Saqlain', year: '4' }], instagram: 'afmdc.ravishngo' },
  { institution: 'University Medical & Dental College', short: 'UMDC', city: 'Faisalabad', presidents: [{ name: 'Ayesha Javaid', year: '4' }], instagram: 'umdc.ravishngo' },
  { institution: 'Sargodha Medical College', short: 'SMC', city: 'Sargodha', presidents: [{ name: 'Rida Eman', year: '5' }], instagram: 'smc.ravishngo' },
  { institution: 'Nawaz Sharif Medical College', short: 'NSMC', city: 'Gujrat', presidents: [{ name: 'Ahsan Ullah Khan', year: '2' }], instagram: 'nsmc.ravishngo' },
  { institution: 'CMH Kharian Medical College', short: 'CKMC', city: 'Kharian', presidents: [{ name: 'Muhammad Faheem Akhtar', year: '4' }], instagram: 'ckmc.ravish' },
  { institution: 'Quaid-e-Azam Medical College', short: 'QAMC', city: 'Bahawalpur', presidents: [{ name: 'Wafa Fatima', year: '3' }, { name: 'Yusra Tehreem', year: '4' }], instagram: 'qamc.ravishngo' },
  { institution: 'Rawalpindi Medical University', short: 'RMU', city: 'Rawalpindi', presidents: [{ name: 'Muhammad Haroon', year: '2' }], instagram: null },
  { institution: 'Islamic International Medical College', short: 'IIMC', city: 'Rawalpindi', presidents: [{ name: 'Zainab Shafeeque', year: '4' }], instagram: 'iimc.ravishngo' },
  { institution: 'Federal Medical & Dental College', short: 'FMC', city: 'Islamabad', presidents: [{ name: 'Amna Khalid', year: '3' }], instagram: 'ravish_fmc' },
  { institution: 'Foundation University Medical College', short: 'FUMC', city: 'Islamabad', presidents: [{ name: 'Asma Noor', year: '5' }], instagram: null },
  { institution: 'Islamabad Medical & Dental College', short: 'IMDC', city: 'Islamabad', presidents: [{ name: 'Muhammad Iftikhar Khan', year: '5' }], instagram: null },
  { institution: 'Rawal Institute of Health Sciences', short: 'RIHS', city: 'Islamabad', presidents: [{ name: 'Ali Asad Ullah', year: '4' }], instagram: null },
  { institution: 'Fazaia Medical College', short: 'FzMC', city: 'Islamabad', presidents: [{ name: 'Rameen Jalal', year: '2' }], instagram: null },
  { institution: 'National University of Sciences & Technology', short: 'NUST', city: 'Islamabad', presidents: [{ name: 'Uzair Ijaz Kalair', year: '2' }, { name: 'Fatima Irfan', year: '2' }], instagram: null },
  { institution: 'Ayub Medical College', short: 'AMC Abbottabad', city: 'Abbottabad', presidents: [{ name: 'Faheem Khalid', year: '2' }], instagram: 'amc.ravishingo' },
  { institution: 'Khyber Medical College', short: 'KMC', city: 'Peshawar', presidents: [{ name: 'Abdul Wahab', year: '3' }], instagram: null },
  { institution: 'Khyber Girls Medical College', short: 'KGMC', city: 'Peshawar', presidents: [{ name: 'Javeria', year: '2' }], instagram: null },
  { institution: 'KMU Institute of Medical Sciences', short: 'KIMS', city: 'Kohat', presidents: [{ name: 'Ayesha Tariq', year: '3' }], instagram: 'kims.ravishngo' },
  { institution: 'Saidu Medical College', short: 'SMCS', city: 'Saidu Sharif', presidents: [{ name: 'Hafiz Abdullah Khan', year: '2' }], instagram: 'smcs.ravishngo' },
  { institution: 'Dow Medical College / DUHS', short: 'DMC', city: 'Karachi', presidents: [{ name: 'Areeb Javaid', year: 'Graduate' }, { name: 'Syed Muhammad Ismail', year: '5' }], instagram: 'ravish.dmclc' },
  { institution: 'Karachi Medical & Dental College', short: 'KMDC', city: 'Karachi', presidents: [{ name: 'Hamad Ul Hassan', year: '2' }], instagram: null },
  { institution: 'SMBB Medical College, Lyari', short: 'SMBBMC', city: 'Karachi', presidents: [{ name: 'Rumaisa Imtiaz Sheikh', year: '2' }], instagram: 'smbbmc.ravishngo' },
  { institution: 'Liaquat University of Medical & Health Sciences', short: 'LUMHS', city: 'Jamshoro', presidents: [{ name: 'Aisha Panhwar', year: '4' }], instagram: null },
  { institution: 'Quetta Institute of Medical Sciences', short: 'QIMS', city: 'Quetta', presidents: [{ name: 'Samawia Kousar', year: '2' }], instagram: null },
];

/**
 * Cities, with real coordinates. Plotted as a constellation rather than
 * traced over a national outline — accurate where it matters, and it makes
 * no claim about any border.
 */
export type City = {
  name: string;
  lat: number;
  lon: number;
  /** cabinet = a chapter is based here; operations = camps run here */
  kind: 'cabinet' | 'operations';
  province: string;
  /**
   * Label nudges in pixels, for the places real geography puts almost on top
   * of each other — Islamabad and Rawalpindi are 13km apart, Gujrat and
   * Kharian 25km. `anchor: 'end'` flips a label to the left of its pin.
   */
  labelDx?: number;
  labelDy?: number;
  labelAnchor?: 'start' | 'end';
};

export const cities: City[] = [
  { name: 'Lahore', lat: 31.5497, lon: 74.3436, kind: 'cabinet', province: 'Punjab', labelDy: 12 },
  { name: 'Islamabad', lat: 33.6844, lon: 73.0479, kind: 'cabinet', province: 'Islamabad CT', labelDy: 8 },
  { name: 'Rawalpindi', lat: 33.5651, lon: 73.0169, kind: 'cabinet', province: 'Punjab', labelDy: 24 },
  { name: 'Karachi', lat: 24.8607, lon: 67.0011, kind: 'cabinet', province: 'Sindh', labelDy: 8 },
  { name: 'Peshawar', lat: 34.0151, lon: 71.5249, kind: 'cabinet', province: 'KPK', labelAnchor: 'end' },
  { name: 'Faisalabad', lat: 31.418, lon: 73.079, kind: 'cabinet', province: 'Punjab', labelAnchor: 'end' },
  { name: 'Sargodha', lat: 32.0836, lon: 72.6711, kind: 'cabinet', province: 'Punjab', labelAnchor: 'end' },
  { name: 'Gujrat', lat: 32.5731, lon: 74.0789, kind: 'cabinet', province: 'Punjab', labelDy: 32 },
  { name: 'Kharian', lat: 32.8127, lon: 73.8656, kind: 'cabinet', province: 'Punjab', labelDy: 16 },
  { name: 'Bahawalpur', lat: 29.3956, lon: 71.6836, kind: 'cabinet', province: 'Punjab' },
  { name: 'Abbottabad', lat: 34.1688, lon: 73.2215, kind: 'cabinet', province: 'KPK' },
  { name: 'Kohat', lat: 33.5869, lon: 71.4414, kind: 'cabinet', province: 'KPK', labelAnchor: 'end' },
  { name: 'Saidu Sharif', lat: 34.75, lon: 72.356, kind: 'cabinet', province: 'KPK' },
  { name: 'Jamshoro', lat: 25.43, lon: 68.28, kind: 'cabinet', province: 'Sindh' },
  { name: 'Quetta', lat: 30.1798, lon: 66.975, kind: 'cabinet', province: 'Balochistan' },

  { name: 'Gujranwala', lat: 32.1877, lon: 74.1945, kind: 'operations', province: 'Punjab' },
  { name: 'Sialkot', lat: 32.4927, lon: 74.5313, kind: 'operations', province: 'Punjab' },
  { name: 'Sheikhupura', lat: 31.7167, lon: 73.985, kind: 'operations', province: 'Punjab' },
  { name: 'Jhang', lat: 31.2781, lon: 72.3317, kind: 'operations', province: 'Punjab' },
  { name: 'Kasur', lat: 31.1187, lon: 74.45, kind: 'operations', province: 'Punjab' },
  { name: 'Chiniot', lat: 31.72, lon: 72.9789, kind: 'operations', province: 'Punjab' },
  { name: 'Nankana Sahib', lat: 31.4492, lon: 73.7042, kind: 'operations', province: 'Punjab' },
  { name: 'Jaranwala', lat: 31.3333, lon: 73.4167, kind: 'operations', province: 'Punjab' },
  { name: 'Toba Tek Singh', lat: 30.9709, lon: 72.4826, kind: 'operations', province: 'Punjab' },
  { name: 'Gilgit', lat: 35.92, lon: 74.308, kind: 'operations', province: 'Gilgit-Baltistan' },
  { name: 'Buner', lat: 34.45, lon: 72.4, kind: 'operations', province: 'KPK' },
  { name: 'Shangla', lat: 34.8, lon: 72.7, kind: 'operations', province: 'KPK' },
];

export const cabinetCount = chapters.filter((c) => !c.dormant).length;
export const cabinetCities = [...new Set(chapters.filter((c) => !c.dormant).map((c) => c.city))];
export const linkedChapters = chapters.filter((c) => c.instagram);

/**
 * Grouped for the directory. Every chapter is listed, including dormant ones,
 * but `active` is the number to display — the map sizes its pins on the same
 * count, and the two must never disagree.
 */
export function chaptersByCity() {
  const map = new Map<string, Chapter[]>();
  for (const c of chapters) {
    const list = map.get(c.city) ?? [];
    list.push(c);
    map.set(c.city, list);
  }
  return [...map.entries()]
    .map(([city, list]) => [city, list, list.filter((c) => !c.dormant).length] as const)
    .sort((a, b) => b[2] - a[2] || a[0].localeCompare(b[0]));
}
