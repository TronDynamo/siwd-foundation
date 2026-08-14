import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import DonateCta from '@/components/site/DonateCta';
import ResourceLinks from '@/components/site/ResourceLinks';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About | SIWD Foundation - 501(c)(3) Nonprofit',
  description:
    'Supporting Individuals with Disabilities Foundation Inc. is your trusted partner in providing comprehensive services and support for people with special needs across Nassau County and Northeast Florida.',
};

const WHAT_WE_DO = [
  { title: 'APD Waiver Services', body: 'Comprehensive support for individuals with special needs.' },
  {
    title: 'Training Courses',
    body: 'We offer various training courses such as CPR, First Aid, AED, BBP-HIV certification courses, and specialized person-centered training for Direct Care Staff to assist in meeting Qlarant required training hours. More information can be found on our Training Page.',
  },
  {
    title: 'Employment and Volunteer Opportunities',
    body: 'Explore fulfilling career and volunteer opportunities with SIWD Foundation.',
  },
  {
    title: 'Business Consulting',
    body: 'Renowned for our organizational skills, we provide business consulting services, including Med-Waiver business startups, and have received praise from APD, ACHA, Qlarant, and CMS.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-[72px] lg:pt-20">
        <div className="mx-auto max-w-content px-4 py-16 text-center lg:px-8 lg:py-20">
          <Image
            src="/images/logo-siwd.png"
            alt="The SIWD Foundation logo: a blue tree formed from open hands, scattered with red stars."
            width={684}
            height={632}
            priority
            className="mx-auto h-28 w-28 object-contain"
          />
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-brand-900 lg:text-5xl">
            Supporting Individuals With Disabilities Foundation Inc.
          </h1>
          <Badge variant="teal" className="mt-5 px-4 py-1.5 text-sm">
            <HeartHandshake className="h-4 w-4" aria-hidden="true" />
            {SITE.status}
          </Badge>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-content space-y-6 px-4 lg:px-8">
          <p className="text-lg leading-relaxed text-brand-900/80">
            Welcome to Supporting Individuals with Disabilities Foundation Inc. (SIWD Foundation), your trusted partner
            in providing comprehensive services and support for people with special needs. Founded in 2010 by Mary
            Frances Vest, SIWD began as a small agency with less than four people and has grown to serve over half of
            Nassau County. Our vision extends beyond Nassau County, aiming to reach all of Northeast Florida&mdash;and we
            don&rsquo;t plan to stop there!
          </p>

          <div className="rounded-2xl bg-gray-50 p-8 shadow-sm">
            <h2 className="font-display text-3xl font-semibold text-accent-600">Who We Are</h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-900/80">
              SIWD Foundation is dedicated to offering essential services to individuals on the APD Waiver, as well as
              private pay and CDC clients. We are also in the process of expanding our services to include Medicaid and
              Medicare. Our family-oriented approach ensures that each consumer receives personalized, person-centered
              care, making our services more personable and effective. When you sign up with us, you&rsquo;re not just a
              client&mdash;you&rsquo;re family.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-hairline">
            <h2 className="font-display text-3xl font-semibold text-blue-700">What We Do</h2>
            <dl className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {WHAT_WE_DO.map((s) => (
                <div key={s.title} className="border-l-2 border-teal-500 pl-4">
                  <dt className="font-display text-[17px] font-semibold text-brand-800">{s.title}</dt>
                  <dd className="mt-1.5 leading-relaxed text-brand-900/70">{s.body}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-2xl bg-gray-50 p-8 shadow-sm">
            <h2 className="font-display text-3xl font-semibold text-accent-600">SIWD Foundation</h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-900/80">
              In addition to our direct services, we established the SIWD Foundation, a 501(c)(3) nonprofit organization
              providing advocacy and a fundraising platform to help those in need, both on and off the APD Waiver. Our
              goal is to grow and offer support across Florida, turning dreams into reality for individuals with
              disabilities.
            </p>
            <Button asChild variant="teal" className="mt-6">
              <Link href="/about/story">
                Read our full story
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-hairline">
            <h2 className="font-display text-3xl font-semibold text-blue-700">Our Philosophy</h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-900/80">
              At SIWD Foundation, we believe in a family-oriented approach, not a facility-oriented one. This philosophy
              ensures that our consumer services are more personalized and heartfelt. We treat everyone as part of our
              family, which is the cornerstone of our person-centered care.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-brand-900/80">
              Thank you for visiting our website. We invite you to explore our services, training programs, employment
              opportunities, and more. Join us in making a difference in the lives of those with special needs. Welcome
              to the SIWD family!
            </p>
          </div>
        </div>
      </section>

      <section aria-label="SIWD community photo" className="relative">
        <div className="relative aspect-[21/9] w-full overflow-hidden">
          <Image
            src="/images/community-fair-friends.jpg"
            alt="Ben Lloyd and friends together at a local fair, smiling in front of a fairground ride."
            fill
            loading="lazy"
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-content px-4 py-6 text-center lg:px-8">
          <Link href="/gallery" className="font-display font-semibold text-blue-700 underline-offset-4 hover:underline">
            Explore Our Photo Gallery
          </Link>
        </div>
      </section>

      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="mx-auto grid max-w-content grid-cols-1 gap-8 px-4 lg:grid-cols-2 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-brand-900/75">
                Our mission is to empower and support individuals with all abilities by fostering strong relationships in
                the community to build resources, employment opportunities and community inclusion.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Vision</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg leading-relaxed text-brand-900/75">
                Our vision is a society where individuals with ALL ABILITIES have equal access to opportunities, are
                valued for their unique abilities, and are supported in achieving their fullest potential.
              </p>
              <p className="text-lg leading-relaxed text-brand-900/75">
                Through our network, resources, we aim to break down barriers and create an inclusive and supportive
                community for people with <strong className="font-semibold italic">ALL ABILITIES</strong>.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mx-auto mt-8 max-w-content px-4 lg:px-8">
          <DonateCta />
        </div>
      </section>

      <ResourceLinks />
    </>
  );
}
