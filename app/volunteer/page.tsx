import type { Metadata } from 'next';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ResourceLinks from '@/components/site/ResourceLinks';
import { SITE, VOLUNTEER_INTERESTS } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Why Volunteer? | SIWD Foundation - 501(c)(3) Nonprofit',
  description:
    'Volunteering with Supporting Individuals with Disabilities Foundation Inc. is an opportunity to make a meaningful impact in the lives of individuals with disabilities and their families in Yulee, FL.',
};

export default function VolunteerPage() {
  return (
    <>
      <section className="bg-sand pt-[72px] lg:pt-20">
        <div className="mx-auto max-w-content px-4 py-16 lg:px-8 lg:py-20">
          <div className="rounded-2xl bg-white/70 p-8 shadow-sm lg:p-12">
            <h1 className="text-center font-display text-4xl font-semibold tracking-tight text-brand-900 lg:text-5xl">
              Why Volunteer?
            </h1>

            <div className="mx-auto mt-8 max-w-3xl space-y-6 text-center">
              <p className="text-lg leading-relaxed text-brand-900/80">
                Volunteering with SIWD Foundation is an opportunity to make a meaningful impact in the lives of
                individuals with disabilities and their families. Your time and skills can transform lives as you
                directly contribute to our efforts in providing essential support and services, turning dreams into
                reality for those in need. At SIWD Foundation, we believe in the power of community. By volunteering,
                you join a passionate team dedicated to creating inclusive and supportive environments, forming lasting
                connections with like-minded individuals who share your commitment to making a difference.
              </p>
              <p className="text-lg leading-relaxed text-brand-900/80">
                Volunteering with us also offers you the chance to develop new skills and gain valuable experience.
                Whether assisting with events, providing mentorship, or supporting administrative tasks, your
                contributions will enhance your personal and professional growth. We offer a variety of volunteer roles
                to suit your interests and availability, ensuring there&rsquo;s a place for everyone at SIWD Foundation.
              </p>
              <p className="text-lg leading-relaxed text-brand-900/80">
                By volunteering, you support our mission to provide advocacy, fundraising, and essential services for
                individuals with disabilities across Florida. Your efforts help us reach more people and make a lasting
                impact on our community. At SIWD Foundation, we treat our volunteers as part of our family. We value
                your contributions and celebrate the positive changes we make together. When you volunteer with us,
                you&rsquo;re not just giving your time&mdash;you&rsquo;re joining a caring, supportive family committed
                to making the impossible possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SIGNUP FORM ---------- */}
      <section aria-labelledby="signup-heading" className="relative isolate overflow-hidden py-20 lg:py-28">
        <Image
          src="/images/volunteer-hands-sunset.jpg"
          alt=""
          fill
          loading="lazy"
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-brand-900/55" />

        <div className="mx-auto max-w-2xl px-4 lg:px-8">
          <div className="rounded-2xl bg-white p-8 shadow-lift lg:p-10">
            <h2 id="signup-heading" className="text-center font-display text-4xl font-semibold tracking-tight text-brand-900">
              Volunteer Signup
            </h2>

            <form action={SITE.formspree} method="POST" className="mt-8 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name</Label>
                <Input id="firstName" name="firstName" type="text" autoComplete="given-name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" name="lastName" type="text" autoComplete="family-name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" name="address" type="text" autoComplete="street-address" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" autoComplete="tel" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" autoComplete="email" required />
              </div>

              <fieldset className="space-y-3">
                <legend className="font-display text-sm font-semibold text-brand-800">
                  Please select all items you are interested in :)
                </legend>
                {VOLUNTEER_INTERESTS.map((interest) => (
                  <div key={interest} className="flex items-start gap-3">
                    <input
                      id={interest}
                      name="interests"
                      value={interest}
                      type="checkbox"
                      className="mt-1 h-4 w-4 shrink-0 rounded border-hairline text-blue-700 focus:ring-2 focus:ring-blue-700/40"
                    />
                    <label htmlFor={interest} className="text-[15px] leading-relaxed text-brand-900/80">
                      {interest}
                    </label>
                  </div>
                ))}
              </fieldset>

              <Button type="submit" className="w-full" size="lg">
                <Heart className="h-4 w-4" aria-hidden="true" />
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>

      <ResourceLinks />
    </>
  );
}
