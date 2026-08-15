import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Annual Halloween Bash | SIWD Foundation - 501(c)(3) Nonprofit',
  description:
    "Ghouls, giggles & good times for everyone! SIWD Foundation's FREE sensory-friendly Halloween Bash — October 31st, 4PM-9PM at the Callahan Fairgrounds Multipurpose Building.",
};

/* Palette lifted from the old Wix page so this reads as the same event. */
const CREAM = '#F7E7C8';
const ORANGE = '#E8791F';
const DEEP_ORANGE = '#C2560F';
const INK = '#2B1A08';

const HIGHLIGHTS = [
  'Candy & Treats',
  'Sensory-Friendly Activities',
  'Costume Contests & Games',
  'Prizes',
  'Music',
  'Surprises',
];

const VOLUNTEER_ROLES = [
  { title: 'Game Hosts', body: 'Run a station, keep it welcoming, help players who need a hand.' },
  { title: 'Treat Table', body: 'Keep the trick-or-treat stations stocked and greet every family.' },
  { title: 'Set-Up Crew', body: 'Arrive early to build the space, or stay late to pack it down.' },
  { title: 'Costume Judges', body: 'Score the contests and make sure every entrant is celebrated.' },
];

const TIERS = [
  { amount: '$25', body: 'Stocks a trick-or-treat station for the evening.' },
  { amount: '$50', body: 'Supplies prizes for a costume contest category.' },
  { amount: '$100', body: 'Funds a full activity station, start to finish.' },
  { amount: '$250', body: 'Underwrites the sensory-friendly quiet space.' },
];

export default function HalloweenBashPage() {
  return (
    <div style={{ backgroundColor: CREAM, color: INK }} className="overflow-x-hidden">
      {/* ===================== HEADER STRIP ===================== */}
      <section className="mx-auto w-full max-w-6xl px-4 pt-12 sm:pt-16">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          {/* TRICK OR TREAT badge, top left */}
          <div
            className="shrink-0 rounded-full border-4 px-6 py-4 text-center"
            style={{ borderColor: DEEP_ORANGE, backgroundColor: ORANGE }}
          >
            <p className="font-display text-xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-2xl">
              Trick
              <br />
              or Treat
            </p>
          </div>

          <div className="min-w-0">
            <h1
              className="break-words font-display text-3xl font-extrabold uppercase leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl"
              style={{ color: DEEP_ORANGE }}
            >
              Ghouls, Giggles &amp; Good Times for Everyone!
            </h1>
          </div>
        </div>

        <p className="mt-8 max-w-3xl text-lg leading-relaxed sm:text-xl">
          Join {SITE.legalName} for our{' '}
          <strong className="font-bold">FREE sensory-friendly Halloween Bash</strong> — a night built
          so that every child and adult, of every ability, gets to take part. No cost, no barriers,
          and a quiet space available all evening for anyone who needs a break from the noise.
        </p>

        {/* details bar */}
        <div
          className="mt-8 flex flex-col gap-2 rounded-xl px-6 py-5 text-center font-display text-lg font-bold text-white sm:flex-row sm:items-center sm:justify-center sm:gap-4 sm:text-xl"
          style={{ backgroundColor: DEEP_ORANGE }}
        >
          <span>October 31st</span>
          <span aria-hidden="true" className="hidden sm:inline">
            |
          </span>
          <span>4PM &ndash; 9PM</span>
          <span aria-hidden="true" className="hidden sm:inline">
            |
          </span>
          <span>Callahan Fairgrounds &mdash; Multipurpose Building</span>
        </div>

        {/* highlights */}
        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-lg bg-white/70 px-5 py-3.5 font-display text-[17px] font-bold"
            >
              <span
                aria-hidden="true"
                className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-white"
                style={{ backgroundColor: ORANGE }}
              >
                ★
              </span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* ================= CENTER BLACK BANNER ================= */}
      <section className="mx-auto mt-14 w-full max-w-6xl px-4">
        <div className="overflow-hidden rounded-2xl bg-black">
          <div className="relative aspect-[980/733] w-full">
            <Image
              src="/images/halloween-banner.jpg"
              alt="You're invited to SIWD Foundation Halloween Bash — a carved jack-o'-lantern with glowing green lettering."
              fill
              priority
              sizes="(max-width: 1152px) 100vw, 1152px"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* ============ VOLUNTEER (left) + DONATE (right) ============ */}
      <section className="mx-auto mt-14 w-full max-w-6xl px-4 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* ---- volunteer ---- */}
          <div className="flex h-full flex-col rounded-2xl bg-white/70 p-7 sm:p-8">
            <h2
              className="break-words font-display text-2xl font-extrabold uppercase leading-tight tracking-tight sm:text-3xl"
              style={{ color: DEEP_ORANGE }}
            >
              Be Part of the Magic &amp; Volunteer!
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed">
              The Bash runs on volunteers. Pick whichever role fits you — no experience needed, and
              we will walk you through everything on the day.
            </p>

            {/* volunteer photo — REPLACE WITH NEW IMAGE HERE if you have the Wix signup graphics */}
            <div className="relative mt-6 aspect-[3/2] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/volunteers-group.jpg"
                alt="A group of SIWD volunteers in matching shirts, arm in arm and smiling."
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover"
              />
            </div>

            <ul className="mt-6 flex-1 space-y-3">
              {VOLUNTEER_ROLES.map((role) => (
                <li
                  key={role.title}
                  className="rounded-lg border-l-4 bg-white px-5 py-3.5"
                  style={{ borderColor: ORANGE }}
                >
                  <p className="font-display text-[17px] font-bold">{role.title}</p>
                  <p className="mt-1 text-[15px] leading-relaxed opacity-80">{role.body}</p>
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className="mt-7 w-full text-white hover:opacity-90"
              style={{ backgroundColor: DEEP_ORANGE }}
            >
              <Link href="/volunteer">Sign Up to Volunteer</Link>
            </Button>
          </div>

          {/* ---- donate ---- */}
          <div className="flex h-full flex-col rounded-2xl bg-white/70 p-7 sm:p-8">
            <h2
              className="break-words font-display text-2xl font-extrabold uppercase leading-tight tracking-tight sm:text-3xl"
              style={{ color: DEEP_ORANGE }}
            >
              Help Us Keep This Event FREE for Everyone!
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed">
              Every family walks in free, which is only possible because of donors. Any amount helps
              — here is what each level covers.
            </p>

            <ul className="mt-6 flex-1 space-y-3">
              {TIERS.map((tier) => (
                <li
                  key={tier.amount}
                  className="flex items-center gap-4 rounded-lg bg-white px-5 py-4"
                >
                  <span
                    className="grid h-14 w-14 shrink-0 place-items-center rounded-full font-display text-lg font-extrabold text-white"
                    style={{ backgroundColor: ORANGE }}
                  >
                    {tier.amount}
                  </span>
                  <span className="text-[15px] leading-relaxed">{tier.body}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className="mt-7 w-full text-white hover:opacity-90"
              style={{ backgroundColor: DEEP_ORANGE }}
            >
              <Link href="/projects#donate">Donate to Our Cause</Link>
            </Button>
            <p className="mt-3 text-center text-sm opacity-75">{SITE.taxNote}</p>
          </div>
        </div>

        <p className="mt-10 text-center text-[17px]">
          Questions? Call{' '}
          <a href={SITE.phoneHref} className="font-bold underline underline-offset-4">
            {SITE.phone}
          </a>{' '}
          or email{' '}
          <a href={`mailto:${SITE.email}`} className="font-bold underline underline-offset-4">
            {SITE.email}
          </a>
        </p>
      </section>
    </div>
  );
}
