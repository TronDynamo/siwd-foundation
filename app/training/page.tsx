import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import RegistrationClosedAlert from '@/components/site/RegistrationClosedAlert';
import ResourceLinks from '@/components/site/ResourceLinks';
import { COURSES } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Need Training? | SIWD Foundation - 501(c)(3) Nonprofit',
  description:
    'Supporting Individuals with Disabilities Foundation Inc. offers CPR, First Aid, AED and BBP-HIV certification courses, plus person-centered training for Direct Care Staff in Yulee, FL.',
};

export default function TrainingPage() {
  return (
    <>
      <section aria-labelledby="training-heading" className="relative isolate flex min-h-[46vh] items-center overflow-hidden bg-brand-900 pt-[72px] lg:min-h-[54vh] lg:pt-20">
        <Image
          src="/images/training-globe.jpg"
          alt="A globe covered in words such as training, knowledge, sessions, goals, instructions and activities."
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-brand-900/55" />
        <div className="mx-auto w-full max-w-content px-4 py-16 lg:px-8">
          <h1 id="training-heading" className="font-display text-4xl font-semibold tracking-tight text-white underline decoration-2 underline-offset-8 lg:text-6xl">
            Need Training?
          </h1>
          <Button asChild variant="white" className="mt-8">
            <Link href="/training/book">
              Click Here
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>

      <section aria-labelledby="services-heading" className="bg-gray-50 py-20 lg:py-24">
        <div className="mx-auto max-w-content px-4 lg:px-8">
          <h2 id="services-heading" className="text-center font-display text-3xl font-semibold tracking-tight text-brand-900 lg:text-4xl">
            Our Services
          </h2>

          <div className="mx-auto mt-8 max-w-2xl">
            <RegistrationClosedAlert />
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {COURSES.map((c) => (
              <Card key={c.slug} className="group flex flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-lift">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image src={c.image} alt={c.alt} fill loading="lazy" sizes="(max-width: 768px) 100vw, 380px" className="rounded-t-2xl object-cover transition-transform duration-700 group-hover:scale-105" />
                  <Badge variant="warning" className="absolute left-4 top-4">
                    {c.status}
                  </Badge>
                </div>
                <CardHeader>
                  <span className="mb-2 grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-700">
                    <GraduationCap className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <CardTitle>{c.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <CardDescription>{c.blurb}</CardDescription>
                  <div className="mt-6 flex items-center gap-3">
                    <Badge variant="price" className="text-sm">{c.price}</Badge>
                    {c.spotsLeft && <Badge variant="outline">{c.spotsLeft}</Badge>}
                  </div>
                  <Button asChild className="mt-6 self-start">
                    <Link href={c.href}>View Course</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ResourceLinks />
    </>
  );
}
