import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Phone, Users, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import RegistrationClosedAlert from '@/components/site/RegistrationClosedAlert';
import ResourceLinks from '@/components/site/ResourceLinks';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Annual Halloween Bash | SIWD Foundation - 501(c)(3) Nonprofit',
  description:
    'The Annual Halloween Bash from Supporting Individuals with Disabilities Foundation Inc. is a costume party for the special needs community and their families in Yulee, FL.',
};

export default function HalloweenBashPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-900 pt-[72px] lg:pt-20">
        <Image
          src="/images/photo-album-banner.jpg"
          alt="A wide view of an SIWD community event at the ballfield in the evening."
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-brand-900/78" />

        <div className="mx-auto max-w-content px-4 py-16 lg:px-8 lg:py-20">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/60">
            <Link href="/events" className="underline-offset-4 hover:text-white hover:underline">
              Events
            </Link>
            <span aria-hidden="true" className="mx-2">/</span>
            <span className="text-white/80">Annual Halloween Bash</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="warning">Ended</Badge>
            <Badge variant="onDark">50 spots left</Badge>
          </div>

          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-white lg:text-6xl">
            Annual Halloween Bash
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Our annual costume party for the special needs community and their families &mdash; games, music, food and
            prizes for best costume. Everyone is welcome, and every ability belongs.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-content grid-cols-1 gap-8 px-4 lg:grid-cols-3 lg:px-8">
          <div className="space-y-6 lg:col-span-2">
            <RegistrationClosedAlert />

            <div className="rounded-2xl bg-gray-50 p-8 shadow-sm">
              <h2 className="font-display text-2xl font-semibold text-brand-900">About the event</h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-brand-900/80">
                <p>
                  The Annual Halloween Bash is one of our favourite nights of the year. It is a sensory-friendly,
                  fully inclusive costume party built so that individuals with all abilities &mdash; and their families,
                  caregivers and support staff &mdash; can celebrate together without barriers.
                </p>
                <p>
                  The evening includes games, music, food, a costume contest with prizes, and plenty of quiet space for
                  anyone who needs a break from the noise. Volunteers from across Nassau County help run the night, and
                  our community partners donate the prizes and refreshments.
                </p>
                <p>
                  Attendance is free for consumers and their immediate family. Space is limited and first come, first
                  served, so we ask that you register ahead of the event.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-hairline">
              <h2 className="font-display text-2xl font-semibold text-brand-900">Want to help?</h2>
              <p className="mt-4 text-lg leading-relaxed text-brand-900/80">
                We rely on volunteers to set up, greet attendees, run games and clean up afterwards. If you would like to
                be part of the next Bash, we would love to hear from you.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="teal">
                  <Link href="/volunteer">
                    <Users className="h-4 w-4" aria-hidden="true" />
                    Volunteer Now
                  </Link>
                </Button>
                <Button asChild variant="donate">
                  <Link href="/projects#donate">
                    <Heart className="h-4 w-4" aria-hidden="true" />
                    Donate
                  </Link>
                </Button>
              </div>
              <p className="mt-3 text-sm text-brand-900/60">{SITE.taxNote}</p>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <Card className="sticky top-28">
              <CardHeader>
                <CardTitle>Event details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <ul className="space-y-3 text-[15px] text-brand-900/75">
                  <li className="flex items-start gap-2.5">
                    <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" aria-hidden="true" />
                    Next date to be announced
                  </li>
                  <li className="flex items-start gap-2.5">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" aria-hidden="true" />
                    <address className="not-italic">{SITE.address.full}</address>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Phone className="h-4 w-4 shrink-0 text-teal-600" aria-hidden="true" />
                    <a href={SITE.phoneHref} className="underline-offset-4 hover:underline">
                      {SITE.phone}
                    </a>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="warning">Ended</Badge>
                  <Badge variant="outline">50 spots left</Badge>
                </div>

                <Button asChild className="w-full">
                  <Link href="/contact">Contact us for next session</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/events">Back to all events</Link>
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>

      <ResourceLinks />
    </>
  );
}
