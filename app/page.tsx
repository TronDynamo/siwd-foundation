import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Heart, MapPin, Phone, Users, GraduationCap, HandHeart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ResourceLinks from '@/components/site/ResourceLinks';
import Sponsors from '@/components/site/Sponsors';
import { SITE, FOOD_RESOURCES, PARTNER_ROWS } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Home | SIWD Foundation - 501(c)(3) Nonprofit',
  description:
    'Supporting Individuals with Disabilities Foundation Inc. provides APD Waiver services in Yulee, FL. We empower people with disabilities by fostering independence, enhancing quality of life, and creating opportunities for community integration.',
};

const OFFERS = [
  {
    Icon: GraduationCap,
    title: 'Training',
    body: 'SIWD Foundation offers comprehensive training courses including CPR, CPR Instructor certification, CEU training. These programs are designed to equip caregivers and professionals with the essential skills and knowledge needed to provide safe, responsive, and compassionate care to individuals with disabilities.',
    cta: 'Click here to sign up for one of our trainings',
    href: '/training',
    image: '/images/training-globe.jpg',
    alt: 'A globe covered in words such as training, knowledge, sessions and goals.',
  },
  {
    Icon: Users,
    title: 'Careers',
    body: 'Join the SIWD Foundation team and make a meaningful impact in the lives of individuals with disabilities. We offer rewarding career opportunities in a supportive and inclusive environment, where your skills and passion for helping others can thrive. Explore careers that make a difference today!',
    cta: 'Click here to join our growing team',
    href: '/employment',
    image: '/images/employment-dream-sign.jpg',
    alt: 'A wooden signpost reading Dream against a bright blue sky.',
  },
  {
    Icon: HandHeart,
    title: 'SIWD Foundation',
    body: 'The SIWD Foundation is dedicated to empowering individuals with disabilities by providing resources, and services tailored to their unique needs. We focus on enhancing the quality of life for our clients through personalized care, advocacy, and community integration, striving to create a more inclusive society where everyone can thrive.',
    cta: 'Click here to find out more about our Foundation Page',
    href: '/projects',
    image: '/images/foundation-canopy.jpg',
    alt: 'Sunlight breaking through a green forest canopy.',
  },
];

const FACTS = [
  { label: 'No residency requirements', sub: '(unless noted)' },
  { label: 'First come, first served', sub: null },
  { label: 'Dates & times', sub: 'subject to change' },
  { label: 'Drive-thru & walk-up', sub: 'options available' },
];

export default function HomePage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section aria-labelledby="hero-heading" className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-brand-900">
        <Image
          src="/images/family-vest-founders.jpg"
          alt="Founder Mary Frances Vest with her son Christopher and family at a community run in Fernandina Beach."
          fill
          priority
          quality={90}
          sizes="100vw"
          className="-z-20 object-cover object-[center_28%]"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-900/85 via-brand-900/62 to-brand-900/92" />

        <div className="mx-auto w-full max-w-content px-4 py-28 text-center lg:px-8 lg:py-32">
          <Badge variant="onDark" className="mb-8 px-4 py-2 uppercase tracking-[0.14em]">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent-400" />
            Family Owned Since 2010
          </Badge>

          <h1 id="hero-heading" className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
            Welcome to
            <span className="mt-2 block text-brand-200">Supporting Individuals with Disabilities Foundation Inc.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">{SITE.tagline}</p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row sm:gap-4">
            <Button asChild variant="white" size="lg">
              <Link href="/about">
                Read More
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="donate" size="lg">
              <Link href="/projects#donate">
                <Heart className="h-4 w-4" aria-hidden="true" />
                Donate
              </Link>
            </Button>
            <Button asChild variant="onDark" size="lg">
              <Link href="/contact">Apply for APD Services</Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-white/60">{SITE.taxNote}</p>

          <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-white/15 bg-black/30 p-8 text-left backdrop-blur-md">
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-brand-200">Our Mission</h2>
            <p className="mt-3.5 text-base leading-relaxed text-white/85 sm:text-lg">{SITE.mission}</p>
          </div>
        </div>
      </section>

      {/* ---------- WHAT WE OFFER ---------- */}
      <section id="offers" aria-labelledby="offers-heading" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-content px-4 lg:px-8">
          <h2 id="offers-heading" className="text-center font-display text-3xl font-semibold tracking-tight text-brand-900 lg:text-5xl">
            Learn more about what we offer below.
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            {OFFERS.map(({ Icon, title, body, cta, href, image, alt }) => (
              <Card key={title} className="group flex flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-lift">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image src={image} alt={alt} fill sizes="(max-width: 768px) 100vw, 380px" className="rounded-t-2xl object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <CardHeader>
                  <span className="mb-2 grid h-11 w-11 place-items-center rounded-xl bg-teal-50 text-teal-700">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <CardTitle>
                    <Link href={href} className="hover:text-blue-700">
                      {title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <CardDescription>{body}</CardDescription>
                  <Button asChild variant="ghost" size="sm" className="mt-6 self-start px-0 hover:bg-transparent hover:text-teal-700">
                    <Link href={href}>
                      {cta}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- NEED HELP / COMMUNITY RESOURCES ---------- */}
      <section id="community-resources" aria-labelledby="resources-heading" className="bg-brand-900 py-20 lg:py-28">
        <div className="mx-auto max-w-content px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="resources-heading" className="font-display text-3xl font-semibold tracking-tight text-white lg:text-5xl">
              Need Help? Let us connect you with community resources near you!
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Need food? We&rsquo;re here to help. Free food resources in Nassau County &amp; surrounding areas. If you or
              someone you know needs food assistance, please reach out to one of these local resources.
            </p>
          </div>

          <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {FACTS.map((f) => (
              <li key={f.label} className="rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-3.5 text-center backdrop-blur-md">
                <p className="font-display text-[13px] font-semibold leading-snug text-white">{f.label}</p>
                {f.sub && <p className="mt-0.5 text-[12px] text-white/55">{f.sub}</p>}
              </li>
            ))}
          </ul>

          <div className="mt-12 space-y-10">
            {FOOD_RESOURCES.map((group) => (
              <div key={group.city}>
                <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-white">
                  <MapPin className="h-5 w-5 text-teal-300" aria-hidden="true" />
                  {group.city}
                </h3>
                <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((it) => (
                    <article key={it.name} className="rounded-2xl border border-white/12 bg-white/[0.06] p-6 backdrop-blur-md transition hover:-translate-y-1 hover:border-white/25">
                      <h4 className="font-display text-[17px] font-semibold leading-snug text-white">{it.name}</h4>
                      <p className="mt-2.5 text-[15px] leading-relaxed text-white/65">{it.detail}</p>
                      {it.phone && (
                        <a
                          href={`tel:${it.phone.replace(/[^0-9]/g, '')}`}
                          className="mt-4 inline-flex items-center gap-2 font-display text-[15px] font-semibold text-brand-200 transition-colors hover:text-white"
                        >
                          <Phone className="h-4 w-4" aria-hidden="true" />
                          {it.phone}
                        </a>
                      )}
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-white/12 bg-white/[0.06] p-8 text-center backdrop-blur-md">
            <h3 className="font-display text-xl font-semibold text-white">Together, we can make a difference.</h3>
            <p className="mt-3 leading-relaxed text-white/70">
              If you or someone you know needs food assistance, please reach out to one of these local resources.
            </p>
          </div>

          <p className="mt-8 text-center font-display text-[15px] font-semibold text-white/55">
            Neighbors helping neighbors. No one should go hungry.
          </p>
        </div>
      </section>

      {/* ---------- COMMUNITY PARTNERS ---------- */}
      <section aria-labelledby="partners-heading" className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-content px-4 lg:px-8">
          <h2 id="partners-heading" className="text-center font-display text-3xl font-semibold tracking-tight text-brand-900 lg:text-4xl">
            Community Partners
          </h2>

          <div className="mt-12 space-y-4">
            {PARTNER_ROWS.map((row) => (
              <div key={row.image} className="relative mx-auto aspect-[1600/304] w-full max-w-4xl overflow-hidden rounded-2xl border border-hairline bg-white p-2 shadow-sm">
                <Image src={row.image} alt={row.alt} fill loading="lazy" sizes="(max-width: 1024px) 100vw, 900px" className="rounded-lg object-contain p-3" />
              </div>
            ))}
          </div>

          <ul className="mt-8 flex flex-wrap justify-center gap-2">
            {PARTNER_ROWS.flatMap((r) => r.names).map((n) => (
              <li key={n}>
                <Badge variant="outline">{n}</Badge>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Our Sponsors — sits directly above the footer */}
      <Sponsors />

      <ResourceLinks />
    </>
  );
}
