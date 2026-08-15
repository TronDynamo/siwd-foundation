import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, ArrowRight, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import DonateCta from '@/components/site/DonateCta';
import ResourceLinks from '@/components/site/ResourceLinks';
import PageHero from '@/components/site/PageHero';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Events | SIWD Foundation - 501(c)(3) Nonprofit',
  description:
    'Upcoming and past events from Supporting Individuals with Disabilities Foundation Inc., including the Annual Halloween Bash, in Yulee, FL.',
};

const EVENTS = [
  {
    title: 'Annual Halloween Bash',
    href: '/events/halloween-bash',
    status: 'Ended',
    spotsLeft: '50 spots left',
    blurb:
      'Our annual costume party for the special needs community and their families — games, music, food and prizes for best costume.',
    image: '/images/halloween-invite.jpg',
    alt: "You're invited to SIWD Foundation Halloween Bash — a carved jack-o'-lantern invitation.",
  },
  {
    title: 'Community Softball Night',
    href: '/gallery',
    status: 'Ended',
    spotsLeft: '20 spots left',
    blurb:
      'An evening at the ballfield with athletes, volunteers and families from across Nassau County.',
    image: '/images/event-softball-field.jpg',
    alt: 'Players and volunteers gathered along the outfield fence at a community softball night.',
  },
  {
    title: 'Zoo for All Day',
    href: '/projects',
    status: 'Ended',
    spotsLeft: null,
    blurb:
      'A day at the Jacksonville Zoo and Gardens for members of the special needs community, funded by our Zoo for All campaign.',
    image: '/images/zoo-membership-giraffe.jpg',
    alt: 'A giraffe on a Jacksonville Zoo and Gardens membership donation graphic.',
  },
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="SIWD Foundation Events"
        intro="Community events that bring people of all abilities together across Nassau County and Northeast Florida."
        image="/images/community-fair-friends.jpg"
        alt="Ben Lloyd and friends together at a local fair."
      />

      <section aria-labelledby="events-heading" className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-content px-4 lg:px-8">
          <h2 id="events-heading" className="sr-only">
            Event listings
          </h2>

          <Alert variant="info" className="mx-auto max-w-2xl">
            <Info aria-hidden="true" />
            <AlertTitle>Event dates</AlertTitle>
            <AlertDescription>
              Dates and times are subject to change. Call{' '}
              <a href={SITE.phoneHref} className="font-semibold underline underline-offset-4">
                {SITE.phone}
              </a>{' '}
              or{' '}
              <Link href="/contact" className="font-semibold underline underline-offset-4">
                contact us
              </Link>{' '}
              to confirm the next session.
            </AlertDescription>
          </Alert>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {EVENTS.map((e) => (
              <Card key={e.title} className="group flex flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-lift">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image src={e.image} alt={e.alt} fill loading="lazy" sizes="(max-width: 768px) 100vw, 380px" className="rounded-t-2xl object-contain bg-black p-2 transition-transform duration-700 group-hover:scale-105" />
                  <Badge variant="warning" className="absolute left-4 top-4">
                    {e.status}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle>{e.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <p className="text-[16px] leading-relaxed text-brand-900/70">{e.blurb}</p>
                  <ul className="mt-5 space-y-2 text-[15px] text-brand-900/65">
                    <li className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-teal-600" aria-hidden="true" />
                      Next date to be announced
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-teal-600" aria-hidden="true" />
                      {SITE.address.city}, {SITE.address.state}
                    </li>
                  </ul>
                  {e.spotsLeft && (
                    <div className="mt-4">
                      <Badge variant="outline">{e.spotsLeft}</Badge>
                    </div>
                  )}
                  <Button asChild className="mt-6 self-start">
                    <Link href={e.href}>
                      Read More
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <DonateCta />
          </div>
        </div>
      </section>

      <ResourceLinks />
    </>
  );
}
