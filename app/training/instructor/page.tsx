import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import RegistrationClosedAlert from '@/components/site/RegistrationClosedAlert';
import ResourceLinks from '@/components/site/ResourceLinks';
import { COURSES, SITE } from '@/lib/site';

const course = COURSES.find((c) => c.slug === 'instructor')!;

export const metadata: Metadata = {
  title: 'CPR, First Aid, and AED Instructor | SIWD Foundation - 501(c)(3) Nonprofit',
  description:
    'Supporting Individuals with Disabilities Foundation Inc. offers the CPR, First Aid, and AED Instructor course for $1,000 in Yulee, FL. Become a Certified CPR, First Aid, and AED & BBP Instructor to train your own staff.',
};

export default function InstructorPage() {
  return (
    <>
      {/* Hero: fixed 400px so the image can never stretch to an unbounded box.
          Source is /public/training-hero.jpg (1920x1080). No scale/zoom transform. */}
      <section className="relative isolate h-[400px] overflow-hidden bg-brand-900">
        <Image
          src="/training-hero.jpg"
          alt=""
          fill
          priority
          quality={100}
          sizes="100vw"
          className="-z-20 object-cover object-top"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-900/85 to-blue-700/70" />
        <div className="mx-auto flex h-full max-w-content flex-col justify-center px-4 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/60">
            <Link href="/training" className="underline-offset-4 hover:text-white hover:underline">
              Training
            </Link>
            <span aria-hidden="true" className="mx-2">/</span>
            <span className="text-white/80">{course.title}</span>
          </nav>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="warning">{course.status}</Badge>
            <Badge variant="price" className="text-sm">{course.price}</Badge>
            {course.spotsLeft && <Badge variant="onDark">{course.spotsLeft}</Badge>}
          </div>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-white lg:text-5xl">
            {course.title}
          </h1>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-content grid-cols-1 gap-8 px-4 lg:grid-cols-3 lg:px-8">
          <div className="space-y-6 lg:col-span-2">
            <RegistrationClosedAlert />

            <div className="rounded-2xl bg-gray-50 p-8 shadow-sm">
              <h2 className="font-display text-2xl font-semibold text-brand-900">Service Description</h2>
              <p className="mt-4 text-lg leading-relaxed text-brand-900/80">{course.description}</p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-hairline">
              <h2 className="font-display text-2xl font-semibold text-brand-900">Who this is for</h2>
              <ul className="mt-5 space-y-3">
                {[
                  'Direct Care Staff meeting Qlarant required training hours',
                  'Caregivers supporting individuals with disabilities',
                  'Agency staff and professionals in the Med-Waiver system',
                  'Family members providing in-home support',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[16px] leading-relaxed text-brand-900/75">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <Card className="sticky top-28">
              <CardHeader>
                <CardTitle className="text-3xl text-accent-600">{course.price}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <ul className="space-y-3 text-[15px] text-brand-900/75">
                  <li className="flex items-start gap-2.5">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" aria-hidden="true" />
                    <address className="not-italic">{SITE.address.full}</address>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Clock className="h-4 w-4 shrink-0 text-teal-600" aria-hidden="true" />
                    Next session date to be announced
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Phone className="h-4 w-4 shrink-0 text-teal-600" aria-hidden="true" />
                    <a href={SITE.phoneHref} className="underline-offset-4 hover:underline">
                      {SITE.phone}
                    </a>
                  </li>
                </ul>

                <Button asChild className="w-full">
                  <Link href="/contact">Contact us for next session</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/training/book">See all courses</Link>
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
