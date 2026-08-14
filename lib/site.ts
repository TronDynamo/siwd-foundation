/**
 * Single source of truth for the SIWD Foundation site.
 * Entity: Supporting Individuals with Disabilities Foundation Inc., a 501(c)(3) nonprofit.
 */

export const SITE = {
  legalName: 'Supporting Individuals with Disabilities Foundation Inc.',
  short: 'SIWD Foundation',
  status: '501(c)(3) Nonprofit',
  ein: 'EIN: pending', // matches siwdf-site, which renders an em dash until the EIN is issued
  foundedYear: 2020,
  founder: 'Mary Frances Vest',
  copyright: '© 2026 Supporting Individuals with Disabilities Foundation Inc. All rights reserved.',
  taxNote: 'Your donation is tax-deductible.',
  tagline:
    'Creating accessible opportunities, education, and community across Northeast Florida.',
  quote: '“Be the change that you wish to see in the world.”',
  quoteAuthor: '— Mahatma Gandhi',
  mission:
    'Founded in 2020, Supporting Individuals With Disabilities Foundation is a 501(c)(3) nonprofit dedicated to empowering individuals with disabilities through accessible education, resources, and community programs. Born from 10 years of advocacy by SIWD Inc founder Mary Frances Vest, SIWD Foundation extends the mission of inclusive design into daily life.',
  missionTwo:
    'Our work is rooted in a simple belief: every person deserves dignity, opportunity, inclusion, and a community willing to stand beside them. Individuals with disabilities should not simply live in their communities — they should have every opportunity to truly be part of them.',
  phone: '904-507-9976',
  phoneHref: 'tel:+19045079976',
  email: 'Jfreeman@siwdinc.net',
  address: {
    line1: '95129 Springhill Rd',
    city: 'Fernandina Beach',
    state: 'FL',
    zip: '32034',
    country: 'USA',
    full: '95129 Springhill Rd, Fernandina Beach, FL 32034',
  },
  social: {
    facebook: 'https://www.facebook.com/siwdfoundation',
    instagram: '#',
  },
  formspree: 'https://formspree.io/f/YOUR_ID', // replace YOUR_ID — one edit fixes every form
  map: { lat: 30.6316, lng: -81.6062, zoom: 13 },
} as const;

export type NavItem = { label: string; href: string };

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Volunteer', href: '/volunteer' },
  { label: 'Training', href: '/training' },
  { label: 'Programs', href: '/projects' },
  { label: 'Events', href: '/events' },
  { label: 'Contact', href: '/contact' },
];

/** Secondary routes that aren't in the primary nav but must stay reachable. */
export const FOOTER_EXTRA_LINKS: NavItem[] = [
  { label: 'Our Story', href: '/about/story' },
  { label: 'Employment', href: '/employment' },
  { label: 'Photo Gallery', href: '/gallery' },
  { label: 'Book a Course', href: '/training/book' },
];

export type ResourceLink = { label: string; href: string };

export const RESOURCE_LINKS: ResourceLink[] = [
  { label: 'APD', href: 'https://apd.myflorida.com' },
  { label: 'Disability Rights Florida', href: 'https://disabilityrightsflorida.org' },
  { label: 'AHCA', href: 'https://ahca.myflorida.com' },
  { label: 'CMS', href: 'https://cms.gov' },
  { label: 'Qlarant', href: 'https://florida.qlarant.com' },
  { label: 'Social Security', href: 'https://ssa.gov' },
];

export type Course = {
  slug: string;
  href: string;
  title: string;
  price: string;
  priceValue: number;
  blurb: string;
  description: string;
  image: string;
  alt: string;
  status: 'Ended';
  spotsLeft?: string;
};

export const COURSES: Course[] = [
  {
    slug: 'cpr-aed-first-aid',
    href: '/training/cpr-aed-first-aid',
    title: 'CPR / AED & First Aid Certification',
    price: '$60',
    priceValue: 60,
    blurb: 'CPR, AED and First Aid certification for caregivers and direct care staff.',
    description:
      'A full certification course covering adult, child and infant CPR, AED operation, and First Aid response. Designed for caregivers, direct care staff and professionals who support individuals with disabilities, and counts toward Qlarant required training hours.',
    image: '/images/course-cpr-classroom.jpg',
    alt: 'An instructor leading a CPR and First Aid certification class in a training room.',
    status: 'Ended',
    spotsLeft: '50 spots left',
  },
  {
    slug: 'instructor',
    href: '/training/instructor',
    title: 'CPR, First Aid, and AED Instructor',
    price: '$1,000',
    priceValue: 1000,
    blurb: 'Become a Certified CPR, First Aid, and AED & BBP Instructor to train your own staff.',
    description:
      'Become a Certified CPR, First Aid, and AED & BBP Instructor to train your own staff. This instructor-level course qualifies you to deliver certification training in-house, which is a significant long-term saving for agencies that need to keep direct care staff current.',
    image: '/images/course-cpr-handson.jpg',
    alt: 'An instructor demonstrating chest compressions on a CPR training manikin.',
    status: 'Ended',
    spotsLeft: '20 spots left',
  },
  {
    slug: 'hiv-bbp',
    href: '/training/hiv-bbp',
    title: 'HIV / BBP Course',
    price: '$35',
    priceValue: 35,
    blurb: 'Empower Yourself: Master HIV and Bloodborne Pathogen Safety',
    description:
      'Empower Yourself: Master HIV and Bloodborne Pathogen Safety. This course covers exposure control, transmission prevention, personal protective equipment and post-exposure procedures, meeting the BBP-HIV certification requirement for direct care staff.',
    image: '/images/course-bbp-hiv.jpg',
    alt: 'Course card for the Bloodborne Pathogens (BBP) certification programme.',
    status: 'Ended',
  },
];

export type Campaign = {
  title: string;
  body: string;
  cta: string;
  image: string;
  alt: string;
};

export const CAMPAIGNS: Campaign[] = [
  {
    title: 'Zoo for All — Bringing Joy to Jacksonville’s Special Needs Community',
    body: 'Support our annual Zoo for All campaign and help us raise funds to provide 50 members of the special needs community with annual passes to the Jacksonville Zoo. Your donation will make community inclusion a reality, turning what is often just a future wish into a joyful experience they can cherish now. Together, we can bring smiles, create lasting memories, and foster a sense of belonging for everyone.',
    cta: 'Donate Now',
    image: '/images/zoo-membership-giraffe.jpg',
    alt: 'A giraffe on a Jacksonville Zoo and Gardens membership donation graphic.',
  },
  {
    title: 'Turn your Trash into Treasure',
    body: "Turn Your Trash into Treasure: Donate to 'Clear Out for a Cause' and Help Fund a Wheelchair-Accessible Van! Your unwanted items can become priceless treasures, providing vital transportation for those in need. Together, we can transform clutter into a vehicle for freedom and mobility.",
    cta: 'Schedule Pick up or Drop off',
    image: '/images/donation-drive-goods.jpg',
    alt: 'Household goods, instruments and furniture laid out at a garage sale on a lawn.',
  },
  {
    title: 'Change Makers: Empowering Special Needs Families',
    body: 'Join the Change Makers movement to support families and individuals with special needs. Your donations will help provide essential services and support hours for those on the APD Waitlist and those needing assistance with APD Waiver applications. Together, we can turn waiting and wishing into real-life assistance and opportunities. Be a part of the change and make a difference in our community today.',
    cta: 'Learn How You Can Make A Difference',
    image: '/images/make-change-happen.jpg',
    alt: 'Yellow street signs reading Make Change Happen against a blue sky.',
  },
  {
    title: 'Volunteer',
    body: "Join SIWD Foundation in making the impossible possible for people with disabilities. As a volunteer, you'll make a real difference, support inclusive communities, and gain valuable experience. Whether helping at events, providing mentorship, or assisting with administrative tasks, your contributions will be impactful.",
    cta: 'Sign Up Today',
    image: '/images/volunteers-group.jpg',
    alt: 'A group of SIWD volunteers in matching shirts, arm in arm.',
  },
];

/** Volunteer interest checkboxes — exactly as they appear on the current form. */
export const VOLUNTEER_INTERESTS: string[] = [
  'Help people with Special Needs have a Natural Support',
  'Event Planning & Coordination',
  'Registration and Greeting Attendees',
  'Hosting Events',
  'Fundraising and Donation Collection',
  'Providing support and mentorship to Special Needs Consumers',
  'Advocacy Services',
  'Grant Writing',
  'Communication Outreach',
  'Office Task ( Filing, data entry, etc.)',
  'Photography and Videography',
  'Other',
];

export type PartnerRow = { image: string; alt: string; names: string[] };

export const PARTNER_ROWS: PartnerRow[] = [
  {
    image: '/images/partners-logos-row1.jpg',
    alt: 'Community partner logos: The House of Grace, Be The Change, Community Press Foundation, and Buzztown Media Group.',
    names: ['The House of Grace', 'Be The Change', 'Community Press Foundation', 'Buzztown Media Group'],
  },
  {
    image: '/images/partners-logos-row2.jpg',
    alt: 'Community partner logos: Special Touch Ministry Inc., The Arc Nassau, and APD Cares.',
    names: ['Special Touch Ministry, Inc.', 'The Arc Nassau', 'APD Cares'],
  },
];

export type FoodResourceGroup = {
  city: string;
  items: { name: string; detail: string; phone?: string }[];
};

export const FOOD_RESOURCES: FoodResourceGroup[] = [
  {
    city: 'Hilliard',
    items: [
      {
        name: 'Buford Grove Baptist Church',
        detail:
          '553274 U.S. 1 · Thursday mornings, 6 to 8:45 a.m. (except any fifth Thursday). Those in need are invited to visit once per month.',
        phone: '845-3656',
      },
    ],
  },
  {
    city: 'Callahan',
    items: [
      {
        name: 'Barnabas Center',
        detail:
          'In partnership with Feeding Northeast Florida and Hilliard, Bryceville and River Road Baptist churches, hosts a food distribution Jan. 24, Feb. 21 and March 21 from 12:30 to 2 p.m. at the Northeast Florida Fairgrounds.',
      },
      {
        name: 'Callahan Community Dinners',
        detail:
          'Available for free every Wednesday, 5–6 p.m. at First United Methodist Church of Callahan, 449648 U.S. 301. Meals prepared by Callahan Barbecue are given out, first come, first served, until all dinners are distributed.',
      },
      {
        name: 'Our Lady of Consolation Catholic Church',
        detail:
          '541668 U.S. 1, Callahan · Food pantry open Tuesday through Friday, 10 a.m. to 3 p.m. Call to ensure staff is available.',
        phone: '879-3662',
      },
      {
        name: 'Callahan First Baptist Church',
        detail:
          '45090 Green Ave. · Drive-thru giveaways are held the first Thursday of each month from 10 a.m. to noon and third Thursday of each month, 4:30 to 6:30 p.m.',
        phone: '879-2172',
      },
      {
        name: 'First Baptist Church of Gray Gables',
        detail:
          '54031 Church Rd. · Food pantry open Mondays, 9:30 a.m. to 2:30 p.m. Call first to ensure someone is available to assist you.',
        phone: '879-2986',
      },
      {
        name: 'First United Methodist Church of Callahan',
        detail:
          '449648 U.S. 301 · Monday through Thursday, 9 a.m. to 1 p.m. by appointment only. Schedule a visit by phone.',
        phone: '879-3877',
      },
    ],
  },
  {
    city: 'Fernandina Beach',
    items: [
      {
        name: 'Good News Partnership at New Life Baptist Church',
        detail:
          '464069 S.R. 200/A1A · Third Saturday of each month, begins at 10 a.m. The event uses a drive-thru format and continues until all food is gone. Those without transportation can email goodnewspartnership@gmail.com.',
        phone: '904-491-0363',
      },
      {
        name: 'Journey Church Food Ministry',
        detail: '95707 Amelia Concourse · Pantry open Tuesdays, 9 a.m. to 1 p.m. and 5–7 p.m.',
        phone: '904-261-8310',
      },
      {
        name: 'Yulee United Methodist Church',
        detail:
          '86003 Christian Way · Wednesdays, 10 a.m. to noon. Open to Nassau residents with ID.',
        phone: '904-225-5381',
      },
      {
        name: 'Yulee Baptist Church',
        detail: '85971 Harts Rd. · Food pantry open Mondays, 1–4 p.m.',
        phone: '904-225-5128',
      },
    ],
  },
  {
    city: 'Fernandina Beach',
    items: [
      {
        name: 'Barnabas Center Food Giveaway',
        detail:
          'In partnership with Feeding Northeast Florida, Elm Street Sportsman Association, Elm St. Church of God, First Missionary Baptist Church, Third Mt. Zion Church, and Trinity United Methodist Church, hosts a food giveaway Feb. 12 and March 12, from 8–10 a.m. at the Martin Luther King Center, 1200 Elm St. Also Feb. 14 and March 14 from 9:30 to 11:30 a.m. at Springhill Baptist Church, 941017 Old Nassauville Rd.',
      },
      {
        name: 'Salvation Army Hope House',
        detail: '410 S. Ninth St. · Assistance available Monday and Friday, 1:30 to 3:30 p.m.',
        phone: '904-321-0435',
      },
      {
        name: 'First Baptist Church of Fernandina Beach',
        detail:
          '1600 S. Eighth St. · Hot meals to go are available on the second Saturday of each month, 4 to 5:30 p.m.',
        phone: '904-420-9555',
      },
      {
        name: 'Barnabas Center',
        detail:
          '1303 Jasmine St., Suite 101 · The food pantry is open to low- and moderate-income Nassau residents Tuesday through Friday, 10 a.m. to noon. Learn more at www.barnabasnassau.org.',
        phone: '904-261-7000',
      },
      {
        name: 'Fernandina Beach Church of Christ',
        detail:
          '1005 S. 14th St. · Day drop-in and food pantry. The food pantry operates from 10 a.m. to noon on the fourth Saturday of each month. The Coalition for the Homeless provides a bagged breakfast and lunch at the Day Drop-In Center 9–11 a.m. Monday through Friday as well as the first, second and third Saturday of each month. Bags will be provided. No residency or income limits.',
        phone: '904-277-2517',
      },
    ],
  },
  {
    city: 'Folkston, GA',
    items: [
      {
        name: 'The House of Grace',
        detail:
          'Located off 811 S Third St, Folkston, GA. Corner of Eunice and Third, first drive on left. Community Pantry 24/7.',
      },
    ],
  },
  {
    city: 'Jacksonville',
    items: [
      {
        name: 'First Fruits Outreach',
        detail:
          'A Christian non-profit, offers a free food and clothing giveaway the second Saturday of each month, beginning at 8 a.m., first come first served until supplies run out at 8625 New Kings Rd., Jacksonville, just south of the I-295 interchange. First-time attendees fill out a short form for the outreach to track the amount of people served. No restrictions.',
      },
    ],
  },
];

/* ==================================================================
   Content below is transcribed from the approved siwdf-site build.
   ================================================================== */

/** All 15 routes — used by the Navbar and the Footer. */
export const ALL_ROUTES: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Our Story', href: '/about/story' },
  { label: 'Volunteer', href: '/volunteer' },
  { label: 'Employment', href: '/employment' },
  { label: 'Training', href: '/training' },
  { label: 'Programs', href: '/projects' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
  { label: 'Events', href: '/events' },
  { label: 'Halloween Bash', href: '/events/halloween-bash' },
  { label: 'Book Online', href: '/training/book' },
  { label: 'CPR / AED & First Aid', href: '/training/cpr-aed-first-aid' },
  { label: 'Instructor Course', href: '/training/instructor' },
  { label: 'HIV / BBP Course', href: '/training/hiv-bbp' },
];

/** Condensed nav for the sticky header on wide screens. */
export const PRIMARY_NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/projects' },
  { label: 'Training', href: '/training' },
  { label: 'Events', href: '/events' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export type Stat = { value: string; label: string };

export const STATS: Stat[] = [
  { value: '6+', label: 'Years Serving' },
  { value: '200+', label: 'Families Helped' },
  { value: 'Online & In-Person', label: 'Classes Offered' },
];

export const IMPACT: Stat[] = [
  { value: '200+', label: 'Individuals Supported' },
  { value: '50+', label: 'Classes Hosted Annually' },
  { value: '5', label: 'Cities Served in Nassau County' },
];

export type CoreValue = { title: string; body: string };

export const CORE_VALUES: CoreValue[] = [
  { title: 'Dignity', body: 'Every person deserves respect regardless of disability, income, or circumstance.' },
  { title: 'Inclusion', body: 'Meaningful participation in every part of community life.' },
  { title: 'Compassion', body: 'Help offered without humiliation or unnecessary judgment.' },
  { title: 'Collaboration', body: 'Nonprofits, businesses, providers, and families working together.' },
];

export type ProgramCard = { title: string; body: string; href: string };

export const PROGRAM_CARDS: ProgramCard[] = [
  { title: 'Online Classes', body: 'Accessible skill-building from home. Free for members.', href: '/projects' },
  { title: 'In-Person Classes', body: 'Community workshops in Fernandina Beach & Yulee.', href: '/projects' },
  { title: 'Resource Navigation', body: 'Help accessing benefits, equipment, and services.', href: '/projects' },
  { title: 'Community Events', body: 'Inclusive gatherings, fundraisers, and advocacy.', href: '/events' },
];

export type CommunityWork = { title: string; body: string };

export const COMMUNITY_WORK: CommunityWork[] = [
  {
    title: 'Accessible Community Garden',
    body: 'Built with partners including LJ Farms — accessible pathways, hands-on agriculture, life skills, and fresh food shared back with families who need it.',
  },
  {
    title: 'Fighting Hunger',
    body: 'Food, meals, and household necessities for families in hardship, offered with dignity rather than judgment.',
  },
  {
    title: 'Supporting First Responders',
    body: 'Community-donated water, supplies, and support delivered to firefighters, law enforcement, and EMS during wildfire and storm response.',
  },
  {
    title: 'Holiday Outreach',
    body: 'Christmas stockings and holiday support that have reached more than 200 families across Nassau County.',
  },
];

/* ------------------------------------------------------------------
   SPONSORS
   Replace images in /public/images/sponsors/ with real sponsor logos -
   user will provide files
   ------------------------------------------------------------------ */

export type Sponsor = { name: string; file: string; alt: string; href: string };

export const SPONSORS: Sponsor[] = [
  {
    name: 'The House of Grace',
    file: '/images/sponsors/house-of-grace.png',
    alt: 'The House of Grace logo — a community pantry at the corner of Eunice and Third Street, all items free, donations only.',
    href: '#',
  },
  {
    name: 'APD Cares',
    file: '/images/sponsors/apd-cares.png',
    alt: 'APD Cares logo — the Florida Agency for Persons with Disabilities community initiative.',
    href: 'https://apd.myflorida.com/',
  },
  {
    name: 'Be The Change',
    file: '/images/sponsors/be-the-change.png',
    alt: 'Be The Change logo — figures of many colours joining hands around a globe.',
    href: '#',
  },
  {
    name: 'The Arc Nassau',
    file: '/images/sponsors/arc-nassau.png',
    alt: 'The Arc Nassau logo — advocacy for people with intellectual and developmental disabilities.',
    href: '#',
  },
  {
    name: 'BuzzTown Media Group',
    file: '/images/sponsors/buzztown.png',
    alt: 'BuzzTown Media Group logo.',
    href: '#',
  },
  {
    name: 'Community Press Foundation',
    file: '/images/sponsors/community-press.png',
    alt: 'Community Press Foundation logo — a tree with roots inside a hexagon.',
    href: '#',
  },
  {
    name: 'Special Touch Ministry, Inc.',
    file: '/images/sponsors/special-touch.png',
    alt: 'Special Touch Ministry, Inc. logo.',
    href: '#',
  },
];

export const HELP_OPTIONS_SIWDF: string[] = [
  'Need Support',
  'Volunteer',
  'Donate',
  'Partner',
  'Other',
];
