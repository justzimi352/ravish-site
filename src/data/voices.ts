/**
 * All of these are RAVISH's own published words, taken from the post archive.
 * Voice note from the brief: reflective rather than triumphal. Keep it.
 */

export type Voice = {
  quote: string;
  attribution: string;
  context: string;
  date?: string;
  urdu?: string;
  featured?: boolean;
};

export const voices: Voice[] = [
  {
    quote: 'We came to make a difference, they ended up changing us.',
    attribution: 'A volunteer',
    context: 'After a medical camp',
    featured: true,
  },
  {
    quote:
      'There’s something deeply humbling about being surrounded by so much light in a place that has seen its share of struggle. These children taught us more than we could ever teach them about hope, resilience, and the beauty of simple kindness. We came to give, but left feeling incredibly full.',
    attribution: 'RAVISH volunteers',
    context: 'Orphanage visit',
    featured: true,
  },
  {
    quote:
      'A humbling experience at the medical camp. So grateful to be part of something that makes a difference. Honestly, learned more in one day of real service than a week of lectures.',
    attribution: 'A student volunteer',
    context: 'Free medical camp',
    featured: true,
  },
  {
    quote:
      'It wasn’t about the number of patients — it was about the 180+ smiles that reminded us why we serve.',
    attribution: 'RAVISH',
    context: 'Camp recap',
  },
  {
    quote:
      'We were welcomed with open arms by the residents, each of them sharing their life stories, wisdom, and kindness. Our team conducted medical check-ups to ensure their health was in good hands, but what we gained in return was so much more.',
    attribution: 'RAVISH FJMU',
    context: 'Old-age home visit',
  },
  {
    quote: 'Team Ravish went to SOS to share an iftar, but we came back with hearts fuller than our plates.',
    attribution: 'RAVISH',
    context: 'Ramadan Relief Campaign',
  },
  {
    quote:
      'We were treating patients right beside fields still submerged under floodwater — a sight that was both humbling and heartbreaking.',
    attribution: 'RAVISH relief team',
    context: 'Day 3, flood relief near Jhang',
    date: 'September 2025',
    featured: true,
  },
  {
    quote:
      'Spending it with these beautiful souls reminded us that happiness isn’t in what we have, but in what we share.',
    attribution: 'RAVISH',
    context: 'Eid at an orphanage',
  },
  {
    quote: 'We visited Waduha Orphanage, and it reminded us how little acts of kindness can make the biggest difference.',
    attribution: 'RAVISH',
    context: 'Welfare drive',
  },
  {
    quote: 'Every smile reminded us why we do what we do.',
    attribution: 'RAVISH',
    context: 'Camp recap',
  },
  {
    quote:
      'In the midst of scorching heat, even the smallest act of kindness can bring comfort, relief, and hope. Every bottle shared is a reminder that compassion is found in the simplest acts.',
    attribution: 'RAVISH IIMC',
    context: 'Water distribution drive',
    date: 'July 2026',
  },
  {
    quote:
      'Behind every masterpiece of craft lies the silent strength of these communities, and it was our privilege to extend care, compassion, and support to them.',
    attribution: 'RAVISH',
    context: 'Label STEP camp for carpet-weaving families',
  },
  {
    quote:
      'The conversation reminded us that climate change is not tomorrow’s threat — it’s today’s reality. Families are displaced, communities need urgent medical care.',
    attribution: 'RAVISH',
    context: 'Climate and health discussion',
  },
  {
    quote: 'These camps humbled us in many ways.',
    attribution: 'RAVISH',
    context: 'Flood relief',
  },
  {
    quote:
      'One year ago, Ravish started as a small idea with a big heart. From humble beginnings to touching countless lives, this journey has been nothing short of incredible.',
    attribution: 'RAVISH',
    context: 'First Ravish Day',
    date: '7 March 2025',
  },
];

/** Faith-inflected lines that run through the archive. Never sectarian. */
export const sayings: { urdu: string; english: string; attribution?: string }[] = [
  {
    urdu: 'خَیرُ النّاسِ أَنفَعُهُم لِلنّاسِ',
    english: 'The best of people are those who are most beneficial to others.',
  },
  {
    urdu: 'جہاں درد بانٹے گئے، وہاں مسکراہٹیں واپس لوٹیں',
    english: 'Where pain was shared, smiles returned.',
  },
  {
    urdu: 'یہ بچے ہمارے سہارے کے نہیں، ہماری دعاؤں کے قابل ہیں۔',
    english: 'These children do not need our pity — they deserve our prayers.',
  },
];
