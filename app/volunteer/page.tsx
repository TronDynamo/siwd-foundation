import type { Metadata } from 'next';
import Link from 'next/link';
import { LifeBuoy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import VolunteerForm from '@/components/site/VolunteerForm';
import ResourceLinks from '@/components/site/ResourceLinks';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Why Volunteer? | SIWD Foundation - 501(c)(3) Nonprofit',
  description:
    'Volunteering with Supporting Individuals with Disabilities Foundation Inc. is an opportunity to make a meaningful impact in the lives of individuals with disabilities and their families in Yulee, FL.',
};

export default function VolunteerPage() {
  return (
    <>
      {/* ====================== WHY VOLUNTEER ====================== */}
      <section className="bg-brand-50">
        <div className="mx-auto max-w-content px-4 py-16 lg:px-8 lg:py-20">
          <h1 className="text-center font-display text-4xl font-semibold tracking-tight text-brand-900 lg:text-5xl">
            Why Volunteer?
          </h1>

          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-center">
            <p className="text-lg leading-relaxed text-brand-900/80">
              Volunteering with SIWD Foundation is an opportunity to make a meaningful impact in the
              lives of individuals with disabilities and their families. Your time and skills can
              transform lives as you directly contribute to our efforts in providing essential
              support and services, turning dreams into reality for those in need. At SIWD
              Foundation, we believe in the power of community. By volunteering, you join a
              passionate team dedicated to creating inclusive and supportive environments, forming
              lasting connections with like-minded individuals who share your commitment to making a
              difference.
            </p>
            <p className="text-lg leading-relaxed text-brand-900/80">
              Volunteering with us also offers you the chance to develop new skills and gain
              valuable experience. Whether assisting with events, providing mentorship, or
              supporting administrative tasks, your contributions will enhance your personal and
              professional growth. We offer a variety of volunteer roles to suit your interests and
              availability, ensuring there&rsquo;s a place for everyone at SIWD Foundation.
            </p>
            <p className="text-lg leading-relaxed text-brand-900/80">
              By volunteering, you support our mission to provide advocacy, fundraising, and
              essential services for individuals with disabilities across Florida. Your efforts help
              us reach more people and make a lasting impact on our community. At SIWD Foundation,
              we treat our volunteers as part of our family. We value your contributions and
              celebrate the positive changes we make together. When you volunteer with us,
              you&rsquo;re not just giving your time&mdash;you&rsquo;re joining a caring, supportive
              family committed to making the impossible possible.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== NEED HELP BANNER ==================== */}
      <section aria-labelledby="need-help-heading" className="bg-blue-800">
        <div className="mx-auto max-w-content px-4 py-12 lg:px-8">
          <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white/15 text-white">
              <LifeBuoy className="h-7 w-7" aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1">
              <h2
                id="need-help-heading"
                className="font-display text-2xl font-semibold text-white lg:text-3xl"
              >
                Need Help?
              </h2>
              <p className="mt-1.5 text-[17px] leading-relaxed text-white/85">
                Let us connect you with community resources near you!
              </p>
            </div>
            <Button asChild variant="white" className="shrink-0">
              <Link href="/contact">Get Connected</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ======================= SIGNUP FORM ======================= */}
      {/*
        Backdrop: solid theme blue with a soft radial wash — no photo, so no
        boxy compression artefacts. To use a photo instead, uncomment the
        <Image> block below and drop your file at
        /public/images/volunteer-backdrop.jpg
      */}
      <section
        aria-labelledby="signup-heading"
        className="relative isolate overflow-hidden bg-brand-900 py-20 lg:py-28"
      >
        {/*
        <Image
          src="/images/volunteer-backdrop.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-brand-900/80" />
        */}

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 50% 0%, rgba(43,104,147,0.55) 0%, rgba(11,47,74,0) 70%)',
          }}
        />

        <div className="mx-auto max-w-2xl px-4 lg:px-8">
          <div className="rounded-2xl bg-white p-8 shadow-lift lg:p-10">
            <h2
              id="signup-heading"
              className="text-center font-display text-3xl font-semibold tracking-tight text-brand-900 lg:text-4xl"
            >
              Volunteer Signup
            </h2>
            <p className="mt-3 text-center text-[15px] leading-relaxed text-brand-900/65">
              Tell us a little about yourself and we&rsquo;ll be in touch. Questions? Call{' '}
              <a href={SITE.phoneHref} className="font-semibold text-blue-700 underline-offset-4 hover:underline">
                {SITE.phone}
              </a>
              .
            </p>

            <VolunteerForm />
          </div>
        </div>
      </section>

      <ResourceLinks />
    </>
  );
}
