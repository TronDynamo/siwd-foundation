/* ==================================================================
   Chat knowledge base — everything the SIWD Assistant knows.

   Every fact below is transcribed from a real page in this project.
   Where a value also lives in lib/site.ts it is imported rather than
   retyped, so the two can never drift apart.

   ⚠️ IMPORTANT: only add an entry here once the thing actually exists on
   the site. An assistant that confidently invents an event date is worse
   than one that says "I don't have that listed."
   ================================================================== */

import {
  SITE,
  COURSES,
  CAMPAIGNS,
  PROGRAM_CARDS,
  COMMUNITY_WORK,
  CORE_VALUES,
  RESOURCE_LINKS,
  STATS,
  IMPACT,
  SPONSORS,
  FOOD_RESOURCES,
} from '@/lib/site';

export const ORG = {
  name: 'SIWD Foundation Inc.',
  legalName: SITE.legalName,
  status: SITE.status,
  established: 'Est. 2020',
  founder: 'Mary Frances Vest — founded the Foundation in 2020',
  boss: 'Larry Vest',
  manager: 'Jessica Freeman — Manager and main contact',
  address: SITE.address.full,
  map: 'https://www.google.com/maps/search/?api=1&query=95129+Springhill+Rd+Fernandina+Beach+FL+32034',
  phone: SITE.phone,
  email: SITE.email,
  hours: 'By appointment. Online booking available.',
  facebook: SITE.social.facebook,
  serviceArea:
    'Fernandina Beach, Yulee, Bryceville, Jacksonville Beach and the Northeast Florida neighbours',
  trainingLocation: 'Yulee, FL',
  credentials:
    '501(c)(3) Nonprofit, licensed in the State of Florida, fully insured. © 2026.',
  tagline: SITE.tagline,
} as const;

/* ------------------------------------------------------------------ */
/*  Topics — anything a visitor might ask "what / where / when" about  */
/* ------------------------------------------------------------------ */

export type Topic = {
  /** canonical display name */
  name: string;
  /** words that should match this topic */
  keys: string[];
  what: string;
  where?: string;
  when?: string;
  details?: string;
  /** in-site destination for the red "Take me there" button */
  href?: string;
  linkLabel?: string;
};

export const TOPICS: Topic[] = [
  /* ============================ EVENTS ============================ */
  {
    name: 'Annual Halloween Bash',
    keys: ['halloween', 'halloween bash', 'bash', 'trick or treat', 'costume'],
    what:
      'Our Annual Halloween Bash — a FREE, sensory-friendly Halloween celebration for the whole community. Candy and treats, sensory-friendly activities, costume contests and games, prizes, music and surprises. A quiet space is open all evening for anyone who needs a break from the noise.',
    where: 'Callahan Fairgrounds — Multipurpose Building',
    when: 'October 31st, 4PM to 9PM',
    details:
      'Free to attend, all ages and abilities. Volunteer roles: Game Hosts, Treat Table, Set-Up Crew and Costume Judges. Donation tiers are $25, $50, $100 and $250.',
    href: '/events/halloween-bash',
    linkLabel: 'Take me to the Halloween Bash',
  },
  {
    name: 'Community Softball Night',
    keys: ['softball', 'softball night', 'ballfield', 'baseball'],
    what:
      'An evening at the ballfield with athletes, volunteers and families from across Nassau County.',
    where: 'Nassau County — venue announced with each date.',
    when: 'Next date to be announced. Dates are posted on Facebook first.',
    href: '/events',
    linkLabel: 'Take me to Events',
  },
  {
    name: 'Zoo for All Day',
    keys: ['zoo', 'zoo for all', 'jacksonville zoo', 'giraffe'],
    what:
      'A day at the Jacksonville Zoo and Gardens for members of the special needs community, funded by our Zoo for All campaign. The campaign raises funds to provide 50 annual passes.',
    where: 'Jacksonville Zoo and Gardens',
    when: 'Next date to be announced.',
    href: '/projects',
    linkLabel: 'Take me to Programs',
  },
  {
    name: 'Holiday Outreach',
    keys: ['holiday', 'holiday outreach', 'christmas', 'stockings', 'december'],
    what:
      'Christmas stockings and holiday support that have reached more than 200 families across Nassau County.',
    when: 'Each December.',
    href: '/events',
    linkLabel: 'Take me to Events',
  },
  {
    name: 'Community Workdays',
    keys: ['workday', 'workdays', 'community workday'],
    what:
      'Hands-on community workdays — garden builds, clean-ups and project days that anyone can join.',
    when: 'Announced on Facebook first.',
    href: '/events',
    linkLabel: 'Take me to Events',
  },

  /* =========================== PROGRAMS =========================== */
  ...PROGRAM_CARDS.map((p) => ({
    name: p.title,
    keys: [p.title.toLowerCase(), ...p.title.toLowerCase().split(' ')],
    what: p.body,
    where:
      p.title === 'Online Classes'
        ? 'Online — join from home on any device.'
        : p.title === 'In-Person Classes'
          ? 'Community workshops in Fernandina Beach and Yulee.'
          : ORG.address,
    when: 'Schedules vary. Call or email us for the current timetable.',
    href: p.href,
    linkLabel: 'Take me to Programs',
  })),

  /* =========================== TRAINING =========================== */
  ...COURSES.map((c) => ({
    name: c.title,
    keys: [c.title.toLowerCase(), c.slug, ...c.title.toLowerCase().split(/[\s/&,]+/)],
    what: `${c.blurb} ${c.description}`,
    where: 'Training is held in Yulee, FL.',
    when: 'Registration is currently closed - contact us for the next session.',
    details: `Price ${c.price}.${c.spotsLeft ? ` ${c.spotsLeft}.` : ''}`,
    href: c.href,
    linkLabel: `Take me to ${c.title}`,
  })),

  /* ========================== CAMPAIGNS =========================== */
  ...CAMPAIGNS.map((c) => ({
    name: c.title,
    keys: [c.title.toLowerCase(), ...c.title.toLowerCase().split(' ')],
    what: c.body,
    href: '/projects',
    linkLabel: 'Take me to Programs',
  })),

  /* ======================= COMMUNITY WORK ========================= */
  ...COMMUNITY_WORK.map((c) => ({
    name: c.title,
    keys: [c.title.toLowerCase(), ...c.title.toLowerCase().split(' ')],
    what: c.body,
    href: '/projects',
    linkLabel: 'Take me to Programs',
  })),

  /* ============================ PAGES ============================= */
  {
    name: 'About SIWD Foundation',
    keys: ['about', 'who are you', 'story', 'mission', 'history'],
    what: `${ORG.legalName} is a ${ORG.status} founded in 2020, dedicated to empowering individuals with disabilities through accessible education, resources and community programs. Born from 10 years of advocacy by SIWD Inc founder Mary Frances Vest.`,
    details: `Our values: ${CORE_VALUES.map((v) => v.title).join(', ')}. ${STATS.map((s) => `${s.value} ${s.label}`).join(' · ')}.`,
    href: '/about',
    linkLabel: 'Take me to About',
  },
  {
    name: 'Volunteering',
    keys: ['volunteer', 'volunteering', 'help out', 'sign up'],
    what:
      'Volunteering with SIWD Foundation means real impact — assisting at events, providing mentorship, or supporting administrative tasks. We treat volunteers as part of the family.',
    where: ORG.address,
    when: 'Roles available year-round.',
    details: 'Fill in the Volunteer Signup form and Jessica Freeman will be in touch.',
    href: '/volunteer',
    linkLabel: 'Take me to Volunteer',
  },
  {
    name: 'Employment',
    keys: ['employment', 'job', 'jobs', 'hiring', 'career', 'careers', 'apply'],
    what:
      'We offer rewarding career opportunities in a supportive and inclusive environment. Apply through the Application for Employment form.',
    where: ORG.address,
    href: '/employment',
    linkLabel: 'Take me to Employment',
  },
  {
    name: 'Photo Gallery',
    keys: ['gallery', 'photos', 'pictures', 'album'],
    what: 'An inside look at our family and the community events we host across Nassau County.',
    href: '/gallery',
    linkLabel: 'Take me to the Gallery',
  },
  {
    name: 'Community Resources',
    keys: ['resource', 'resources', 'food', 'pantry', 'hungry', 'food bank'],
    what: `We connect people to free food resources across Nassau County and surrounding areas — ${FOOD_RESOURCES.length} cities covered, including ${FOOD_RESOURCES.map((g) => g.city).join(', ')}. We also link to official agencies: ${RESOURCE_LINKS.map((r) => r.label).join(', ')}.`,
    href: '/',
    linkLabel: 'Take me to Community Resources',
  },
  {
    name: 'Contact',
    keys: ['contact', 'reach', 'get in touch', 'talk to someone'],
    what: `Call ${ORG.phone}, email ${ORG.email}, or use the contact form. ${ORG.manager} is your main contact.`,
    where: ORG.address,
    when: ORG.hours,
    href: '/contact',
    linkLabel: 'Take me to Contact',
  },
  {
    name: 'Donating',
    keys: ['donate', 'donation', 'give', 'tax deductible', 'support'],
    what: `Donations are tax-deductible. ${ORG.credentials}`,
    details: 'All Donate buttons take you to the Contact page so we can help directly.',
    href: '/contact',
    linkLabel: 'Take me to Donate',
  },
  {
    name: 'Our Sponsors and Partners',
    keys: ['sponsor', 'sponsors', 'partner', 'partners'],
    what: `Thank you to the organizations supporting our mission: ${SPONSORS.map((s) => s.name).join(', ')}.`,
    href: '/about',
    linkLabel: 'Take me to Sponsors',
  },
  {
    name: 'Our Impact',
    keys: ['impact', 'how many', 'statistics', 'stats', 'numbers'],
    what: IMPACT.map((s) => `${s.value} ${s.label}`).join(' · '),
    href: '/about',
    linkLabel: 'Take me to About',
  },
];


/* ------------------------------------------------------------------ */
/*  Things people ask about that are NOT on this site                 */
/*                                                                    */
/*  Checked BEFORE topic matching so the assistant never implies an   */
/*  event exists. If one of these becomes real, delete it here and    */
/*  add a proper entry to TOPICS above.                               */
/* ------------------------------------------------------------------ */

export const NOT_ON_SITE: { keys: string[]; name: string }[] = [
  { keys: ['summer camp', 'summercamp', 'day camp'], name: 'a summer camp' },
  { keys: ['christmas party', 'xmas party', 'holiday party'], name: 'a Christmas party' },
  { keys: ['easter', 'egg hunt'], name: 'an Easter event' },
  { keys: ['gala', 'auction', 'banquet'], name: 'a gala or auction' },
  { keys: ['thanksgiving'], name: 'a Thanksgiving event' },
];

/** Returns an honest "not listed" reply, or null if we do cover it. */
export function checkNotOnSite(question: string): string | null {
  const lower = question.toLowerCase();
  for (const item of NOT_ON_SITE) {
    if (item.keys.some((k) => lower.includes(k))) {
      return `I don't have ${item.name} listed on our site, so I don't want to guess at details. What we do run is the Annual Halloween Bash, Holiday Outreach each December, and Community Workdays. New dates go on Facebook first — or call ${ORG.phone} and we'll tell you what's coming up.`;
    }
  }
  return null;
}

/* ------------------------------------------------------------------ */
/*  Navigation shortcuts — "take me to ..."                           */
/* ------------------------------------------------------------------ */

export const NAV_TARGETS: { keys: string[]; label: string; href: string }[] = [
  { keys: ['home', 'homepage', 'front page'], label: 'Home', href: '/' },
  { keys: ['about', 'story'], label: 'About', href: '/about' },
  { keys: ['program', 'programs', 'project', 'projects'], label: 'Programs', href: '/projects' },
  { keys: ['training', 'course', 'courses', 'class', 'classes'], label: 'Training', href: '/training' },
  { keys: ['book', 'booking', 'book online'], label: 'Book Online', href: '/training/book' },
  { keys: ['event', 'events'], label: 'Events', href: '/events' },
  { keys: ['halloween'], label: 'Halloween Bash', href: '/events/halloween-bash' },
  { keys: ['gallery', 'photos'], label: 'Gallery', href: '/gallery' },
  { keys: ['volunteer'], label: 'Volunteer', href: '/volunteer' },
  { keys: ['employment', 'job', 'jobs', 'careers'], label: 'Employment', href: '/employment' },
  { keys: ['contact', 'donate'], label: 'Contact', href: '/contact' },
];

/* ------------------------------------------------------------------ */
/*  Lookup                                                            */
/* ------------------------------------------------------------------ */

const STOP_WORDS = new Set([
  'what', 'is', 'the', 'a', 'an', 'when', 'where', 'who', 'how', 'do', 'does',
  'you', 'your', 'me', 'to', 'take', 'go', 'about', 'tell', 'and', 'of', 'for',
  'on', 'at', 'it', 'i', 'can', 'my', 'in', 'there', 'have', 'are',
]);

/** Scores every topic against the question and returns the best match. */
export function findTopic(question: string): Topic | null {
  const lower = question.toLowerCase();
  const words = lower
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP_WORDS.has(w));

  let best: Topic | null = null;
  let bestScore = 0;

  for (const topic of TOPICS) {
    let score = 0;
    for (const key of topic.keys) {
      if (key.length < 3) continue;
      // whole phrase present in the question is the strongest signal
      if (lower.includes(key)) score += key.includes(' ') ? 6 : 3;
      // otherwise match individual meaningful words
      else if (words.includes(key)) score += 2;
    }
    if (score > bestScore) {
      bestScore = score;
      best = topic;
    }
  }

  return bestScore >= 3 ? best : null;
}

/** Builds the answer, shaped by whether they asked what / where / when. */
export function describeTopic(topic: Topic, question: string): string {
  const lower = question.toLowerCase();
  const askedWhere = /\bwhere\b|location|address|directions/.test(lower);
  const askedWhen = /\bwhen\b|what time|date|schedule|hours/.test(lower);

  const lines: string[] = [];

  if (askedWhere && !askedWhen) {
    lines.push(`${topic.name}: ${topic.where ?? ORG.address}`);
    if (topic.where) lines.push(`Our office is ${ORG.address}.`);
    lines.push(`Map: ${ORG.map}`);
    return lines.join('\n');
  }

  if (askedWhen && !askedWhere) {
    lines.push(`${topic.name}: ${topic.when ?? 'Dates are announced on Facebook first.'}`);
    if (topic.where) lines.push(`Location: ${topic.where}`);
    return lines.join('\n');
  }

  // full explanation
  lines.push(`${topic.name} — ${topic.what}`);
  if (topic.when) lines.push(`When: ${topic.when}`);
  if (topic.where) lines.push(`Where: ${topic.where}`);
  if (topic.details) lines.push(topic.details);
  return lines.join('\n');
}

/** "take me to programs" -> the matching route, or null. */
export function findNavTarget(question: string): { label: string; href: string } | null {
  const lower = question.toLowerCase();
  if (!/take me|go to|show me|open|navigate|bring me|where can i/.test(lower)) return null;
  for (const t of NAV_TARGETS) {
    if (t.keys.some((k) => lower.includes(k))) return { label: t.label, href: t.href };
  }
  return null;
}
