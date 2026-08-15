import type { Metadata } from 'next';
import Image from 'next/image';
import { Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ResourceLinks from '@/components/site/ResourceLinks';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Application for Employment | SIWD Foundation - 501(c)(3) Nonprofit',
  description:
    'Join the Supporting Individuals with Disabilities Foundation Inc. team in Yulee, FL. We offer rewarding career opportunities in a supportive and inclusive environment.',
};

const POSITIONS = [
  'Direct Care Staff',
  'Life Skills Development Coach',
  'Supported Employment Coach',
  'Personal Supports',
  'Respite Care',
  'Companion Services',
  'Administrative / Office Support',
  'Other',
];

export default function EmploymentPage() {
  return (
    <>
      <section
        aria-labelledby="employment-heading"
        className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden py-16"
      >
        {/* Background: object-cover object-center at natural scale — no zoom. */}
        <Image
          src="/employment-bg.jpg"
          alt=""
          fill
          priority
          quality={100}
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        {/* Readability layer behind the form card */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-black/40 backdrop-blur-sm"
        />

        <div className="mx-auto w-full max-w-md px-4">
          <div className="rounded-2xl bg-white p-6 shadow-lift sm:p-8">
            <h1 id="employment-heading" className="text-center font-display text-3xl font-semibold tracking-tight text-brand-900 lg:text-4xl">
              Application for Employment
            </h1>
            <p className="mt-4 text-center leading-relaxed text-brand-900/70">
              Join the SIWD Foundation team and make a meaningful impact in the lives of individuals with disabilities.
              Explore careers that make a difference today!
            </p>

            <form action={SITE.formspree} method="POST" className="mt-8 space-y-6">
              <div className="grid grid-cols-1 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" name="firstName" type="text" autoComplete="given-name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" name="lastName" type="text" autoComplete="family-name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input id="dob" name="dateOfBirth" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email Address <span aria-hidden="true" className="text-accent-500">*</span>
                    <span className="sr-only">(required)</span>
                  </Label>
                  <Input id="email" name="email" type="email" autoComplete="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">
                    Phone <span aria-hidden="true" className="text-accent-500">*</span>
                    <span className="sr-only">(required)</span>
                  </Label>
                  <Input id="phone" name="phone" type="tel" autoComplete="tel" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Position Applying For</Label>
                  <select
                    id="position"
                    name="position"
                    className="flex h-12 w-full rounded-lg border border-hairline bg-white px-4 text-[15px] text-brand-900 focus-visible:border-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700/25"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a position
                    </option>
                    {POSITIONS.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="startDate">Available Start Date</Label>
                <Input id="startDate" name="availableStartDate" type="date" />
              </div>

              <Button type="submit" className="w-full" size="lg">
                <Briefcase className="h-4 w-4" aria-hidden="true" />
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
