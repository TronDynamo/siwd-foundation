import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

/* ================================================================== */
/*  Brand tokens                                                      */
/* ================================================================== */

const BLUE_CARD = '#2c6aa0'; // program cards, contact card
const BLUE_FOOTER = '#1e4a8a'; // footer
const NAVY = '#1C2D5A'; // theme colour / headings
const RED = '#c8102e'; // Donate + primary CTAs

/* ================================================================== */
/*  Types                                                             */
/* ================================================================== */

type NavLink = { label: string; href: string };
type Value = { title: string; body: string };
type Program = { title: string; body: string; icon: React.ReactNode };
type CommunityItem = { title: string; body: string };
type Partner = { name: string; role: string };
type FooterLink = { label: string; href: string; external?: boolean };

/* ================================================================== */
/*  Content                                                           */
/* ================================================================== */

const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#contact' },
];

const VALUES: Value[] = [
  {
    title: 'Dignity',
    body: 'Every person is met as a whole person first — never as a diagnosis, a case number, or a limitation.',
  },
  {
    title: 'Inclusion',
    body: 'Programs are designed from the start so that nobody has to ask to be accommodated after the fact.',
  },
  {
    title: 'Compassion',
    body: 'We meet families where they are, at the pace they need, without judgment about how they got there.',
  },
  {
    title: 'Collaboration',
    body: 'We work alongside local partners, churches and businesses because no one organization can do this alone.',
  },
];

const PROGRAMS: Program[] = [
  {
    title: 'Online Classes',
    body: 'Live and self-paced classes you can join from home — life skills, technology, health and independent living.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-7 w-7">
        <rect x="2.5" y="4" width="19" height="13" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M8 20.5h8M12 17v3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'In-Person Classes',
    body: 'Small-group sessions in accessible spaces across Nassau County, built around real hands-on practice.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-7 w-7">
        <circle cx="9" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="17" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M3 19.5c0-3 2.7-5 6-5s6 2 6 5M16 14.8c2.7.2 5 1.9 5 4.7"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Resource Navigation',
    body: 'One-on-one help understanding benefits, applications and waivers — so paperwork stops being the barrier.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-7 w-7">
        <path
          d="M12 21s7-5.9 7-11a7 7 0 1 0-14 0c0 5.1 7 11 7 11Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="9.6" r="2.4" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
  {
    title: 'Community Events',
    body: 'Gatherings where ability never decides who gets an invitation — from holiday outreach to the Halloween Bash.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-7 w-7">
        <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
];

const COMMUNITY: CommunityItem[] = [
  {
    title: 'Accessible Community Garden',
    body: 'In partnership with LJ Farms, we are building raised, wheelchair-height beds so that gardening is something our community does, not something it watches.',
  },
  {
    title: 'Fighting Hunger',
    body: 'Connecting families to free food resources across Nassau County and surrounding areas, and helping move food to the people who need it.',
  },
  {
    title: 'Supporting First Responders',
    body: 'Recognizing the local crews who show up for our neighbors on their hardest days, and helping them understand how to support residents with disabilities.',
  },
  {
    title: 'Holiday Outreach',
    body: 'Each year we work to reach 200 families with holiday support, so that a tight season still ends with something to open.',
  },
];

const PARTNERS: Partner[] = [
  { name: 'SIWD Inc', role: 'Founding Partner' },
  { name: 'BuzzTown Media Group', role: 'Media Partner' },
  { name: 'LJ Farms', role: 'Community Garden' },
  { name: 'The House of Grace', role: 'Community Pantry' },
  { name: 'Be The Change', role: 'Community Outreach' },
  { name: 'Community Press Foundation', role: 'Media Partner' },
];

const EXPLORE_LINKS: FooterLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#contact' },
];

const CONNECT_LINKS: FooterLink[] = [
  { label: 'Facebook', href: 'https://www.facebook.com/share/g/1CzShrkikQ/', external: true },
  { label: 'jfreeman@siwdinc.net', href: 'mailto:jfreeman@siwdinc.net' },
  { label: '(904) 507-9976', href: 'tel:+19045079976' },
];

const HELP_OPTIONS: string[] = [
  'I need support or services',
  'I want to volunteer',
  'I want to partner with you',
  'I want to donate',
  'I have a question about a class',
  'Something else',
];

const ADDRESS_LINE = '95129 Springhill Rd, Fernandina Beach, FL 32034';
const MAP_QUERY = '95129+Springhill+Rd+Fernandina+Beach+FL+32034';
const FORMSPREE = 'https://formspree.io/f/mrpzkqgw';

/* ================================================================== */
/*  Metadata                                                          */
/* ================================================================== */

export const metadata: Metadata = {
  title:
    'Supporting Individuals With Disabilities Foundation | 501(c)(3) Nonprofit | Fernandina Beach FL',
  description:
    'A 501(c)(3) nonprofit creating accessible opportunities, education, and community for individuals with disabilities across Northeast Florida. Founded 2020 in Fernandina Beach.',
};

/* ================================================================== */
/*  Page                                                              */
/* ================================================================== */

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* ========================= HEADER ========================= */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
          <Link href="#home" className="flex items-center gap-3">
            <Image
              src="/images/logo-siwd.png"
              alt="SIWD Foundation logo"
              width={512}
              height={512}
              priority
              className="h-11 w-11 object-contain"
            />
            <span className="leading-tight">
              <span className="block text-xl font-bold tracking-tight" style={{ color: NAVY }}>
                SIWD
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.09em] text-slate-500">
                Supporting Individuals With Disabilities
              </span>
            </span>
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[15px] font-medium text-slate-700 transition-colors hover:text-slate-950"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full px-7 py-3 text-[15px] font-semibold text-white transition duration-200 hover:opacity-90"
              style={{ backgroundColor: RED }}
            >
              Donate
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-white lg:hidden"
            style={{ backgroundColor: RED }}
          >
            Donate
          </a>
        </div>
      </header>

      <main id="home">
        {/* ========================== HERO ========================== */}
        <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden">
          <Image
            src="/images/idf-community.jpg"
            alt="Members, families and staff of the Supporting Individuals With Disabilities Foundation gathered together on a porch."
            fill
            priority
            quality={90}
            sizes="100vw"
            className="-z-20 object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage:
                'linear-gradient(100deg, rgba(20,38,72,0.88) 0%, rgba(20,38,72,0.66) 45%, rgba(20,38,72,0.40) 100%)',
            }}
          />

          <div className="mx-auto w-full max-w-7xl px-4 py-24">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full border border-white/40 px-5 py-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-white">
                501(c)(3) Nonprofit Since 2020
              </span>

              <h1 className="mt-8 text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
                Supporting Individuals
                <br />
                With Disabilities
              </h1>

              <blockquote className="mt-8 border-l-4 pl-5" style={{ borderColor: RED }}>
                <p className="text-xl font-medium italic text-white sm:text-2xl">
                  &ldquo;Be the change that you wish to see in the world.&rdquo;
                </p>
                <footer className="mt-2 text-sm text-white/80">&mdash; Mahatma Gandhi</footer>
              </blockquote>

              <p className="mt-8 max-w-md text-lg leading-relaxed text-white/90">
                Creating accessible opportunities, education, and community across Northeast
                Florida.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#programs"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white transition duration-200 hover:opacity-90"
                  style={{ backgroundColor: RED }}
                >
                  Our Programs
                  <span aria-hidden="true">&rarr;</span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-full border-2 border-white/70 px-8 py-4 text-base font-semibold text-white transition duration-200 hover:bg-white/10"
                >
                  Get Support
                </a>
              </div>

              <hr className="mt-14 border-white/25" />

              <div className="mt-6 space-y-4 text-white/85">
                <p className="text-sm font-semibold">Founded by Mary Frances Vest</p>
                <p className="flex items-center gap-3 text-sm">
                  <Image
                    src="/images/logo-siwd.png"
                    alt=""
                    width={512}
                    height={512}
                    className="h-7 w-7 shrink-0 rounded-full bg-white/90 object-contain p-0.5"
                  />
                  Founding partner: SIWD Inc, licensed remodeling contractor since 2010
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== PROGRAMS + VALUES ==================== */}
        <section id="programs" className="mx-auto max-w-7xl px-4 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em]" style={{ color: RED }}>
              Programs
            </p>
            <h2
              className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl"
              style={{ color: NAVY }}
            >
              How We Help
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Education, resources, and community &mdash; built so that ability, income, or
              circumstance never decides whether someone gets to take part.
            </p>
          </div>

          {/* values — 4 cards */}
          <div id="about" className="mt-14 grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="flex h-full flex-col border-l-4 bg-slate-50 py-5 pl-6 pr-5"
                style={{ borderColor: BLUE_CARD }}
              >
                <h3 className="text-xl font-bold" style={{ color: NAVY }}>
                  {value.title}
                </h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-slate-600">
                  {value.body}
                </p>
              </div>
            ))}
          </div>

          {/* program cards — 4 cards */}
          <div className="mt-10 grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROGRAMS.map((program) => (
              <article
                key={program.title}
                className="flex h-full flex-col rounded-xl p-7 text-white"
                style={{ backgroundColor: BLUE_CARD }}
              >
                <span className="text-white/90">{program.icon}</span>
                <h3 className="mt-5 text-lg font-bold">{program.title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-white/85">
                  {program.body}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex w-fit items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold transition duration-200 hover:bg-slate-100"
                  style={{ color: BLUE_CARD }}
                >
                  Learn More
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* ======================== COMMUNITY ======================== */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-20">
            <h2
              className="text-3xl font-extrabold tracking-tight sm:text-4xl"
              style={{ color: NAVY }}
            >
              Also underway in our community
            </h2>

            {/* 4 cards */}
            <div className="mt-12 grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2">
              {COMMUNITY.map((item) => (
                <article
                  key={item.title}
                  className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <h3 className="text-xl font-bold" style={{ color: NAVY }}>
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-600">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ======================== PARTNERS ========================= */}
        <section className="mx-auto max-w-7xl px-4 py-20">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em]" style={{ color: RED }}>
              Together
            </p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight" style={{ color: NAVY }}>
              Our Partners &amp; Sponsors
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Thank you to these organizations supporting our mission
            </p>
          </div>

          {/* 6 cards on a 3-up grid = two full rows, no orphans */}
          <div className="mt-14 grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PARTNERS.map((partner) => (
              <article
                key={partner.name}
                className="flex h-full flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-7 text-center shadow-sm transition duration-200 hover:shadow-md"
              >
                <p className="text-base font-bold leading-snug" style={{ color: NAVY }}>
                  {partner.name}
                </p>
                <p className="mt-2 text-sm text-slate-500">{partner.role}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ========================= EVENTS ========================== */}
        <section id="events" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-20">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.16em]" style={{ color: RED }}>
                What&rsquo;s Next
              </p>
              <h2 className="mt-3 text-4xl font-extrabold tracking-tight" style={{ color: NAVY }}>
                Upcoming Events
              </h2>
            </div>

            <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">
              <span
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-full text-white"
                style={{ backgroundColor: BLUE_CARD }}
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-7 w-7">
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="16"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <path
                    d="M3 10h18M8 3v4M16 3v4"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
              </span>

              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Events are announced on Facebook first &mdash; including our annual Halloween Bash,
                holiday outreach, and community workdays. Follow along there so you don&rsquo;t miss
                a date, or call us at{' '}
                <a
                  href="tel:+19045079976"
                  className="font-semibold underline underline-offset-4"
                  style={{ color: NAVY }}
                >
                  (904) 507-9976
                </a>{' '}
                and we&rsquo;ll tell you what&rsquo;s coming up.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="https://www.facebook.com/share/g/1CzShrkikQ/"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold text-white transition duration-200 hover:opacity-90"
                  style={{ backgroundColor: RED }}
                >
                  Check Our Facebook for Events
                  <span aria-hidden="true">&rarr;</span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-full border-2 px-7 py-3.5 text-[15px] font-semibold transition duration-200 hover:bg-slate-50"
                  style={{ borderColor: NAVY, color: NAVY }}
                >
                  Ask About an Event
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================= CONTACT ========================= */}
        <section id="contact" className="mx-auto max-w-7xl px-4 py-20">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold tracking-tight" style={{ color: NAVY }}>
              Get In Touch
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
              Whether you need support, want to volunteer, or hope to partner with us &mdash; tell us
              how we can help.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* form */}
            <form
              action={FORMSPREE}
              method="POST"
              className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="mt-2 h-12 w-full rounded-lg border border-slate-300 px-4 text-[15px] outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="mt-2 h-12 w-full rounded-lg border border-slate-300 px-4 text-[15px] outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="mt-2 h-12 w-full rounded-lg border border-slate-300 px-4 text-[15px] outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                  />
                </div>

                <div>
                  <label htmlFor="topic" className="block text-sm font-semibold text-slate-700">
                    How can we help?
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    defaultValue=""
                    className="mt-2 h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-[15px] outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    {HELP_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-[15px] leading-relaxed outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-7 w-full rounded-full py-4 text-base font-semibold text-white transition duration-200 hover:opacity-90"
                style={{ backgroundColor: RED }}
              >
                Submit
              </button>
            </form>

            {/* info card */}
            <div
              className="flex h-full flex-col rounded-xl p-8 text-white"
              style={{ backgroundColor: BLUE_CARD }}
            >
              <h3 className="text-2xl font-bold leading-snug">
                Supporting Individuals With Disabilities Foundation
              </h3>
              <p className="mt-2 text-[15px] text-white/80">501(c)(3) Nonprofit &bull; Est. 2020</p>

              <ul className="mt-8 space-y-5 text-[15px]">
                <li className="flex gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0"
                  >
                    <path
                      d="M12 21s7-5.9 7-11a7 7 0 1 0-14 0c0 5.1 7 11 7 11Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="9.6" r="2.4" stroke="currentColor" strokeWidth="1.7" />
                  </svg>
                  <address className="not-italic leading-relaxed">{ADDRESS_LINE}</address>
                </li>

                <li className="flex gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0"
                  >
                    <path
                      d="M4 5.8c0-1 .8-1.8 1.8-1.8h2.4c.8 0 1.5.5 1.7 1.3l.8 3c.2.7-.1 1.4-.7 1.7l-1.6 1a13.5 13.5 0 0 0 5.9 5.9l1-1.6c.4-.6 1-.9 1.7-.7l3 .8c.8.2 1.3.9 1.3 1.7v2.4c0 1-.8 1.8-1.8 1.8C10.6 21.3 4 14.7 4 5.8Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <a href="tel:+19045079976" className="underline-offset-4 hover:underline">
                    (904) 507-9976
                  </a>
                </li>

                <li className="flex gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0"
                  >
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                    <path
                      d="m3.5 7 8.5 6 8.5-6"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <a
                    href="mailto:jfreeman@siwdinc.net"
                    className="break-all underline-offset-4 hover:underline"
                  >
                    jfreeman@siwdinc.net
                  </a>
                </li>

                <li className="flex gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0"
                  >
                    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
                    <path
                      d="M12 7.5V12l3 2"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span>By appointment. Online booking available.</span>
                </li>
              </ul>

              <div className="mt-auto pt-8">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
                  target="_blank"
                  rel="noopener"
                  className="block rounded-xl border-2 border-dashed border-white/45 p-6 text-center transition duration-200 hover:bg-white/10"
                >
                  <p className="font-semibold">View us on the map</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    Fernandina Beach &bull; Yulee &bull; Bryceville &bull; Jacksonville Beach &bull;
                    Northeast Neighbors
                  </p>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============ MAP — full width, auto-marked pin ============ */}
        <section aria-labelledby="map-heading" className="mx-auto max-w-7xl px-4 pb-20">
          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 id="map-heading" className="text-2xl font-bold" style={{ color: NAVY }}>
              Our Location
            </h2>
            <p className="mt-2 text-[15px] text-slate-600">{ADDRESS_LINE}</p>
            <p className="mt-1 text-[15px]">
              <a
                href="tel:+19045079976"
                className="font-semibold underline underline-offset-4"
                style={{ color: NAVY }}
              >
                (904) 507-9976
              </a>
            </p>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
              target="_blank"
              rel="noopener"
              className="mt-5 block"
            >
              <iframe
                title={`Google Map showing ${ADDRESS_LINE}`}
                src={`https://www.google.com/maps?q=${MAP_QUERY}&z=16&output=embed`}
                width="100%"
                height={400}
                style={{ border: 0, borderRadius: 12 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <span className="sr-only">
                Open {ADDRESS_LINE} in Google Maps (opens in a new tab)
              </span>
            </a>
          </div>
        </section>
      </main>

      {/* ========================== FOOTER ========================== */}
      <footer style={{ backgroundColor: BLUE_FOOTER }} className="text-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* identity */}
            <div>
              <div className="flex items-center gap-3">
                <Image
                  src="/images/logo-siwd.png"
                  alt=""
                  width={512}
                  height={512}
                  className="h-11 w-11 rounded-full bg-white object-contain p-1"
                />
                <span className="text-lg font-bold">SIWD</span>
              </div>
              <p className="mt-5 text-[15px] font-semibold leading-snug">
                Supporting Individuals With Disabilities Foundation
              </p>
              <p className="mt-2 text-sm text-white/70">501(c)(3) Nonprofit | Est. 2020</p>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Supporting Individuals. Strengthening Families. Building Community.
              </p>
            </div>

            {/* explore */}
            <nav aria-label="Footer navigation">
              <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-white/60">
                Explore
              </h2>
              <ul className="mt-5 space-y-3">
                {EXPLORE_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[15px] text-white/85 underline-offset-4 transition-colors hover:text-white hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* connect */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-white/60">
                Connect
              </h2>
              <ul className="mt-5 space-y-3">
                {CONNECT_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external ? { target: '_blank', rel: 'noopener' } : {})}
                      className="break-words text-[15px] text-white/85 underline-offset-4 transition-colors hover:text-white hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <address className="not-italic text-[15px] leading-relaxed text-white/85">
                    95129 Springhill Rd
                    <br />
                    Fernandina Beach, FL 32034
                  </address>
                </li>
              </ul>
            </div>

            {/* partners */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-white/60">
                Partners
              </h2>
              <div className="mt-5 rounded-xl border border-white/20 bg-white/10 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white/60">
                  Founding Partner
                </p>
                <p className="mt-2 text-base font-bold">SIWD Inc</p>
                <p className="mt-1 text-sm leading-relaxed text-white/70">
                  Licensed remodeling contractor since 2010
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/20 pt-8 text-sm text-white/65 sm:flex-row">
            <p>&copy; 2026 Supporting Individuals With Disabilities Foundation</p>
            <p>
              Website by{' '}
              <a
                href="#"
                className="underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                Zacharee J. Burchfield | RaptorZax
              </a>{' '}
              &mdash;{' '}
              <a
                href="tel:+19045839741"
                className="underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                904-583-9741
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
