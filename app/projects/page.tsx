import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ResourceLinks from '@/components/site/ResourceLinks';
import { CAMPAIGNS, SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'SIWD Foundation Programs | SIWD Foundation - 501(c)(3) Nonprofit',
  description:
    'Supporting Individuals with Disabilities Foundation Inc. runs Zoo for All, Clear Out for a Cause and Change Makers, breaking barriers and nurturing potential for people with disabilities.',
};

export default function ProjectsPage() {
  return (
    <>
      {/* ===================== HERO =====================
          Background image lives at /public/tree-hero-new.jpg
          To swap it, drop a new file at that exact path — no code change needed.
          bg-cover + bg-center keeps it filling the box at every screen size;
          the bg-black/40 layer is what makes the white text pop. */}
      <section
        aria-labelledby="projects-heading"
        className="relative isolate flex min-h-[56vh] items-center justify-center overflow-hidden bg-brand-900 bg-[url('/tree-hero-new.jpg')] bg-cover bg-center"
      >
        {/* darkening overlay */}
        <div aria-hidden="true" className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 mx-auto w-full max-w-content px-4 py-20 text-center lg:px-8">
          <h1
            id="projects-heading"
            className="font-display text-4xl font-semibold tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl"
          >
            SIWD Foundation
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-white drop-shadow-sm sm:text-xl">
            Together we can break the barriers, nurture potential, and create a world where no dream
            is out of reach. Your support helps us make the impossible possible, one life at a time
          </p>

          <Button asChild variant="teal" className="mt-8">
            <Link href="/about">
              About Us
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>

      <section id="donate" aria-labelledby="campaigns-heading" className="bg-green-800 py-20 lg:py-24">
        <div className="mx-auto max-w-content px-4 lg:px-8">
          <h2 id="campaigns-heading" className="sr-only">
            Our campaigns
          </h2>

          <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-md">
            <p className="font-display text-lg font-semibold text-white">{SITE.taxNote}</p>
            <p className="mt-1 text-sm text-white/70">
              {SITE.legalName} &mdash; {SITE.status} &middot; {SITE.ein}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {CAMPAIGNS.map((c) => (
              <Card key={c.title} className="flex flex-col overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-xl">{c.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <CardDescription>{c.body}</CardDescription>
                  <Link
                    href="/contact"
                    className="mt-5 font-display text-lg font-semibold text-blue-800 underline-offset-4 hover:underline"
                  >
                    {c.cta}
                  </Link>
                  <div className="relative mt-5 aspect-[4/3] w-full overflow-hidden rounded-lg">
                    <Image src={c.image} alt={c.alt} fill loading="lazy" sizes="(max-width: 768px) 100vw, 460px" className="object-cover" />
                  </div>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Button asChild variant="donate">
                      <Link href="/contact">
                        <Heart className="h-4 w-4" aria-hidden="true" />
                        Donate
                      </Link>
                    </Button>
                    <p className="text-sm text-brand-900/60">{SITE.taxNote}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Badge variant="onDark" className="px-4 py-2 text-sm">
              {SITE.status}
            </Badge>
            <Badge variant="onDark" className="px-4 py-2 text-sm">
              {SITE.ein}
            </Badge>
          </div>
        </div>
      </section>

      <ResourceLinks />
    </>
  );
}
