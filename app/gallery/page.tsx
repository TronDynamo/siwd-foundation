import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ResourceLinks from '@/components/site/ResourceLinks';

export const metadata: Metadata = {
  title: 'Our SIWD Family & Events | SIWD Foundation - 501(c)(3) Nonprofit',
  description:
    'An inside look at the Supporting Individuals with Disabilities Foundation Inc. family and the community events we host across Nassau County, Florida.',
};

const GALLERY = [
  {
    src: '/images/community-fair-friends.jpg',
    alt: 'Ben Lloyd and friends together at a local fair, smiling in front of a fairground ride.',
    caption: 'Ben Lloyd & Friends',
    span: 'sm:col-span-2',
  },
  {
    src: '/images/event-softball-batter.jpg',
    alt: 'An SIWD athlete at bat under the floodlights during an evening softball game.',
    caption: 'Softball night',
    span: '',
  },
  {
    src: '/images/event-softball-field.jpg',
    alt: 'Players and volunteers gathered along the outfield fence at a community softball night.',
    caption: 'On the field',
    span: '',
  },
  {
    src: '/images/volunteers-group.jpg',
    alt: 'A group of SIWD volunteers in matching shirts, arm in arm and cheering.',
    caption: 'Our volunteers',
    span: '',
  },
  {
    src: '/images/family-vest-founders.jpg',
    alt: 'Mary Frances Vest with her son Christopher Vest and family at a community charity run.',
    caption: 'The Vest family',
    span: '',
  },
  {
    src: '/images/photo-album-banner.jpg',
    alt: 'A wide view of an SIWD community event at the ballfield in the evening.',
    caption: 'Community events',
    span: 'sm:col-span-2',
  },
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-white pt-[72px] lg:pt-20">
        <div className="mx-auto max-w-content px-4 py-14 text-center lg:px-8 lg:py-16">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-brand-900 lg:text-6xl">
            Our SIWD Family &amp; Events
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-brand-900/70">
            Welcome to an INSIDE look of our Family and Events :) Click the image below to see more.
          </p>
        </div>
      </section>

      <section aria-label="Photo gallery" className="bg-gray-50 pb-20">
        <div className="mx-auto max-w-content px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY.map((g) => (
              <figure key={g.src} className={`group overflow-hidden rounded-2xl bg-white shadow-sm ${g.span}`}>
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                    className="rounded-t-2xl object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-5 font-display text-[15px] font-semibold text-brand-800">{g.caption}</figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild>
              <Link href="/events">See upcoming events</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/volunteer">Volunteer with us</Link>
            </Button>
          </div>
        </div>
      </section>

      <ResourceLinks />
    </>
  );
}
