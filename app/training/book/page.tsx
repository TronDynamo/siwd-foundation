import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import RegistrationClosedAlert from '@/components/site/RegistrationClosedAlert';
import ResourceLinks from '@/components/site/ResourceLinks';
import PageHero from '@/components/site/PageHero';
import { COURSES, SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Book Online | SIWD Foundation - 501(c)(3) Nonprofit',
  description:
    'Book a training course with Supporting Individuals with Disabilities Foundation Inc. CPR/AED & First Aid $60, Instructor certification $1,000, and HIV/BBP $35 in Yulee, FL.',
};

export default function BookOnlinePage() {
  return (
    <>
      <PageHero
        eyebrow="Book Online"
        title="Course Listings"
        intro="Certification training for caregivers, direct care staff and professionals supporting individuals with disabilities."
        image="/images/training-globe.jpg"
        alt="A globe covered in words such as training, knowledge, sessions and goals."
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-content px-4 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <RegistrationClosedAlert />
          </div>

          <div className="mt-12 space-y-8">
            {COURSES.map((c) => (
              <Card key={c.slug} className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-5">
                  {/* aspect-[16/9] + object-contain: wide course graphics keep their
                      full width, so the BBP wordmark can't be cropped on the left. */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-100 md:col-span-2">
                    <Image
                      src={c.image}
                      alt={c.alt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-contain object-center p-2"
                    />
                  </div>
                  <div className="md:col-span-3">
                    <CardHeader>
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="warning">{c.status}</Badge>
                        <Badge variant="price">{c.price}</Badge>
                        {c.spotsLeft && <Badge variant="outline">{c.spotsLeft}</Badge>}
                      </div>
                      <CardTitle className="mt-3 text-2xl">{c.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-5">
                      <CardDescription>{c.description}</CardDescription>
                      <ul className="space-y-2 text-[15px] text-brand-900/70">
                        <li className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-teal-600" aria-hidden="true" />
                          {SITE.address.full}
                        </li>
                        <li className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-teal-600" aria-hidden="true" />
                          Next session date to be announced
                        </li>
                      </ul>
                      <div className="flex flex-col gap-3 sm:flex-row">
                        <Button asChild>
                          <Link href={c.href}>View Course</Link>
                        </Button>
                        <Button asChild variant="outline">
                          <Link href="/contact">Contact us for next session</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ResourceLinks />
    </>
  );
}
