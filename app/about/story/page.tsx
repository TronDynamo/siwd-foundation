import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import DonateCta from '@/components/site/DonateCta';
import ResourceLinks from '@/components/site/ResourceLinks';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About SIWD Foundation | SIWD Foundation - 501(c)(3) Nonprofit',
  description:
    'Supporting Individuals with Disabilities Foundation Inc. was born out of its sister company, founded by Mary Frances Vest and inspired by her son Christopher Vest and his own journey with disabilities.',
};

export default function AboutStoryPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100 to-white pt-[72px] lg:pt-20">
        <div className="mx-auto max-w-content px-4 py-14 lg:px-8 lg:py-16">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl shadow-lift">
            <Image
              src="/images/family-vest-founders.jpg"
              alt="Mary Frances Vest with her son Christopher Vest and family at a community charity run in Fernandina Beach."
              fill
              priority
              sizes="(max-width: 768px) 100vw, 576px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-content px-4 lg:px-8">
          <div className="text-center">
            <h1 className="font-display text-4xl font-semibold tracking-tight text-brand-900 lg:text-5xl">
              About SIWD Foundation
            </h1>
            <Badge variant="teal" className="mt-5 px-4 py-1.5 text-sm">
              <HeartHandshake className="h-4 w-4" aria-hidden="true" />
              {SITE.status}
            </Badge>
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-6 rounded-2xl bg-white p-8 shadow-sm">
            <p className="text-lg leading-relaxed text-brand-900/80">
              Supporting Individuals with Disabilities Foundation Inc. is a remarkable organization that was born out of
              a sister company, Supporting Individuals with Disabilities, founded by Mary Frances Vest. Inspired by her
              son Christopher Vest, and his own journey with disabilities, Frances recognized the pressing need for
              comprehensive support services in the community that went beyond what any single agency could provide.
            </p>

            <p className="text-lg leading-relaxed text-brand-900/80">
              What began as a small agency of fewer than four people has grown to serve over half of Nassau County. The
              Foundation was established as a 501(c)(3) nonprofit to provide advocacy and a fundraising platform for
              those in need &mdash; both on and off the APD Waiver &mdash; so that families who fall outside the reach of
              state funding still have somewhere to turn.
            </p>

            <p className="text-lg leading-relaxed text-brand-900/80">
              Today the Foundation funds programs such as Zoo for All, Change Makers, and Clear Out for a Cause, each
              built around a simple belief: that people with all abilities deserve equal access to opportunity, to be
              valued for their unique abilities, and to be supported in achieving their fullest potential. Our goal is to
              grow and offer support across Florida, turning dreams into reality for individuals with disabilities.
            </p>

            <p className="text-lg leading-relaxed text-brand-900/80">
              We believe in a family-oriented approach, not a facility-oriented one. We treat everyone as part of our
              family, which is the cornerstone of our person-centered care. When you sign up with us, you&rsquo;re not
              just a client &mdash; you&rsquo;re family.
            </p>
          </div>

          <div className="mx-auto mt-8 flex max-w-3xl flex-col gap-3 sm:flex-row">
            <Button asChild variant="default">
              <Link href="/about">
                Back to About
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/projects">See our programs</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/volunteer">Volunteer with us</Link>
            </Button>
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <DonateCta />
          </div>
        </div>
      </section>

      <ResourceLinks />
    </>
  );
}
