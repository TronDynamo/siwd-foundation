import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { SPONSORS } from '@/lib/site';

/*
  Replace images in /public/images/sponsors/ with real sponsor logos - user will provide files

  Files currently in that folder (600px wide PNG, flattened onto white so dark
  logos still read inside the Card):
    house-of-grace.png   apd-cares.png    be-the-change.png   arc-nassau.png
    buzztown.png         community-press.png                  special-touch.png

  To swap one out, drop a file with the same name into the folder — no code
  change needed. To add or remove a sponsor, edit SPONSORS in lib/site.ts.
*/

export default function Sponsors() {
  return (
    <section aria-labelledby="sponsors-heading" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-content px-4 lg:px-8">
        <div className="text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
            Together
          </p>
          <h2
            id="sponsors-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-brand-900 lg:text-4xl"
          >
            Our Sponsors
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-brand-900/65">
            Thank you to these organizations supporting our mission
          </p>
        </div>

        <ul className="mt-14 grid auto-rows-fr grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {SPONSORS.map((sponsor) => {
            const external = sponsor.href.startsWith('http');
            const Inner = (
              <Card className="flex h-full flex-col items-center justify-center gap-4 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="relative h-20 w-full">
                  <Image
                    src={sponsor.file}
                    alt={sponsor.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 240px"
                    className="object-contain grayscale transition duration-300 group-hover:grayscale-0"
                  />
                </div>
                <p className="text-center font-display text-[13px] font-semibold leading-snug text-brand-800">
                  {sponsor.name}
                </p>
              </Card>
            );

            return (
              <li key={sponsor.name} className="h-full">
                {external ? (
                  <a
                    href={sponsor.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full rounded-2xl outline-offset-4 focus-visible:outline-2 focus-visible:outline-blue-700"
                  >
                    {Inner}
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                ) : (
                  <div className="group h-full">{Inner}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
