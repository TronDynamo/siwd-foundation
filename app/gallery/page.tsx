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
    src: '/gallery/outing-05.png',
    alt: 'Two staff members smiling together outdoors during a community outing.',
    caption: 'Smiles on a community outing',
    span: '',
  },
  {
    src: '/gallery/outing-06.png',
    alt: 'A colorful scarlet macaw perched in palm trees at the zoo.',
    caption: 'A feathered friend at the zoo',
    span: '',
  },
  {
    src: '/gallery/outing-07.png',
    alt: 'A staff member kneeling beside an alligator at a wildlife park.',
    caption: 'Up close with an alligator',
    span: '',
  },
  {
    src: '/gallery/outing-08.png',
    alt: 'A young couple walking the red carpet at a community gala.',
    caption: 'Walking the red carpet',
    span: '',
  },
  {
    src: '/gallery/outing-09.png',
    alt: 'A man waving on the red carpet beneath a purple and gold balloon arch.',
    caption: 'All smiles on the red carpet',
    span: '',
  },
  {
    src: '/gallery/outing-10.png',
    alt: 'An individual in a wheelchair playing a racing game at the arcade.',
    caption: 'Racing games at the arcade',
    span: '',
  },
  {
    src: '/gallery/outing-11.png',
    alt: 'An individual in a wheelchair enjoying a gaming station at the arcade.',
    caption: 'Gaming station fun',
    span: '',
  },
  {
    src: '/gallery/outing-12.png',
    alt: 'A staff member behind the wheel of an arcade racing simulator.',
    caption: 'Behind the wheel at the arcade',
    span: '',
  },
  {
    src: '/gallery/outing-13.png',
    alt: 'Two individuals racing side by side on arcade driving simulators.',
    caption: 'Friendly competition on the simulators',
    span: '',
  },
  {
    src: '/gallery/outing-14.png',
    alt: 'A staff member and volunteer smiling for a photo at the arcade.',
    caption: 'A fun stop at the arcade',
    span: '',
  },
  {
    src: '/gallery/outing-15.png',
    alt: 'A volunteer lining up a shot during pool night.',
    caption: 'Lining up a shot at pool night',
    span: '',
  },
  {
    src: '/gallery/outing-16.png',
    alt: 'An individual in a wheelchair reaching for a table game.',
    caption: 'Trying his hand at a table game',
    span: '',
  },
  {
    src: '/gallery/outing-17.png',
    alt: 'A staff member enjoying a racing game at the arcade.',
    caption: 'More racing fun',
    span: '',
  },
  {
    src: '/gallery/outing-18.png',
    alt: 'Two individuals smiling together during a day out.',
    caption: 'All smiles during a day out',
    span: '',
  },
  {
    src: '/gallery/outing-19.png',
    alt: 'An individual in a wheelchair playing a ring toss game.',
    caption: 'Ring toss fun at game night',
    span: '',
  },
  {
    src: '/gallery/outing-20.png',
    alt: 'A volunteer focused on his shot at the pool table.',
    caption: 'Focused on the pool table',
    span: '',
  },
  {
    src: '/gallery/outing-21.png',
    alt: 'A staff member exploring a tiki-style pavilion on a group outing.',
    caption: 'Exploring the tiki hut',
    span: '',
  },
  {
    src: '/gallery/outing-22.png',
    alt: 'A staff member standing inside a tiki-style pavilion during an outing.',
    caption: 'A moment at the tiki hut',
    span: '',
  },
  {
    src: '/gallery/outing-23.png',
    alt: 'A couple smiling together during a community outing.',
    caption: 'A warm smile on an outing',
    span: '',
  },
  {
    src: '/gallery/outing-24.png',
    alt: 'An individual making her way down the red carpet at the gala.',
    caption: 'Making her way down the red carpet',
    span: '',
  },
  {
    src: '/gallery/outing-25.png',
    alt: 'A young couple dressed up for the community gala.',
    caption: 'Dressed up for the gala',
    span: '',
  },
  {
    src: '/gallery/outing-26.png',
    alt: 'A couple walking arm in arm at the community gala.',
    caption: 'Arm in arm at the gala',
    span: '',
  },
  {
    src: '/gallery/outing-27.png',
    alt: 'A man in a suit and hat walking the red carpet with a companion.',
    caption: 'Stepping out in style',
    span: '',
  },
  {
    src: '/gallery/outing-28.png',
    alt: 'A couple dressed up for a night at the gala.',
    caption: 'A dapper night at the gala',
    span: '',
  },
  {
    src: '/gallery/outing-29.png',
    alt: 'Guests gathered around round tables for a holiday dinner.',
    caption: 'Gathered for a holiday dinner',
    span: '',
  },
  {
    src: '/gallery/outing-30.png',
    alt: 'An individual enjoying his moment on the red carpet.',
    caption: 'Enjoying the red carpet',
    span: '',
  },
  {
    src: '/gallery/outing-31.png',
    alt: 'An individual in a wheelchair cheered on down the red carpet.',
    caption: 'Cheered on down the red carpet',
    span: '',
  },
  {
    src: '/gallery/outing-32.png',
    alt: 'A full room of guests at the holiday celebration.',
    caption: 'A full house at the holiday party',
    span: '',
  },
  {
    src: '/gallery/outing-33.png',
    alt: 'An individual in a wheelchair settling in for the holiday get-together.',
    caption: 'Settling in for the holidays',
    span: '',
  },
  {
    src: '/gallery/outing-34.png',
    alt: 'An individual making a grand entrance at the gala with cheering volunteers.',
    caption: 'A grand entrance at the gala',
    span: '',
  },
  {
    src: '/gallery/outing-35.png',
    alt: 'An individual in a wheelchair rolling down the red carpet at the gala.',
    caption: 'Rolling out for the red carpet',
    span: '',
  },
  {
    src: '/gallery/outing-36.png',
    alt: 'A small group enjoying good company at the holiday party.',
    caption: 'Good company at the holiday party',
    span: '',
  },
  {
    src: '/gallery/outing-37.png',
    alt: 'An individual in a wheelchair with a medal, proud on the red carpet.',
    caption: 'A proud moment on the red carpet',
    span: '',
  },
  {
    src: '/gallery/outing-38.png',
    alt: 'An individual in a wheelchair with all eyes on him at the gala.',
    caption: 'All eyes on the red carpet',
    span: '',
  },
  {
    src: '/gallery/outing-39.png',
    alt: 'A young couple dressed up in gala attire, top hat and all.',
    caption: 'A stylish pair at the gala',
    span: '',
  },
  {
    src: '/gallery/outing-40.png',
    alt: 'An individual waving to the crowd on the red carpet.',
    caption: 'Waving to the crowd',
    span: '',
  },
  {
    src: '/gallery/outing-41.png',
    alt: 'Staff and individuals lined up together for a group portrait.',
    caption: 'Staff and individuals together',
    span: '',
  },
  {
    src: '/gallery/outing-42.png',
    alt: 'A couple making their entrance at the community gala.',
    caption: 'Making an entrance at the gala',
    span: '',
  },
  {
    src: '/gallery/outing-43.png',
    alt: 'Guests enjoying a holiday feast together at long dinner tables.',
    caption: 'Enjoying the holiday feast',
    span: '',
  },
  {
    src: '/gallery/outing-44.png',
    alt: 'An older couple sharing a joyful walk down the red carpet.',
    caption: 'A joyful walk down the red carpet',
    span: '',
  },
  {
    src: '/gallery/outing-45.png',
    alt: 'Volunteers setting up tables for a community craft event.',
    caption: 'Setting up for a craft event',
    span: '',
  },
  {
    src: '/gallery/outing-46.png',
    alt: 'A volunteer digging in to a meal at the holiday party.',
    caption: 'Digging in at the holiday party',
    span: '',
  },
  {
    src: '/gallery/outing-47.png',
    alt: 'Staff volunteering at the Be The Change NE FL community outreach tent.',
    caption: 'Volunteering at the outreach tent',
    span: '',
  },
  {
    src: '/gallery/outing-48.png',
    alt: 'Staff posing with Roy the Rooster and a friend in chicken costumes at a farm event.',
    caption: 'Getting silly with Roy the Rooster',
    span: '',
  },
  {
    src: '/gallery/outing-49.png',
    alt: 'Volunteers serving a community meal along a buffet table.',
    caption: 'Serving up a community meal',
    span: '',
  },
  {
    src: '/gallery/outing-50.png',
    alt: 'An individual all smiles at the holiday gathering.',
    caption: 'All smiles at the holiday gathering',
    span: '',
  },
  {
    src: '/gallery/outing-51.png',
    alt: 'Two staff members catching up at a community event.',
    caption: 'Catching up at a community event',
    span: '',
  },
  {
    src: '/gallery/outing-52.png',
    alt: 'Kettle corn and bagged treats for sale at a community fair.',
    caption: 'Kettle corn at the community fair',
    span: '',
  },
  {
    src: '/gallery/outing-53.png',
    alt: 'A staff member sharing a gentle moment with a dog outdoors.',
    caption: 'A gentle moment with a furry friend',
    span: '',
  },
  {
    src: '/gallery/outing-54.png',
    alt: 'A couple shopping together for community supplies.',
    caption: 'A shopping trip for supplies',
    span: '',
  },
  {
    src: '/gallery/outing-55.png',
    alt: 'Volunteers handing out holiday gift baskets under a pavilion.',
    caption: 'Handing out holiday gift baskets',
    span: '',
  },
  {
    src: '/gallery/outing-56.png',
    alt: 'Two staff members at the Be The Change NE FL outreach table.',
    caption: 'Manning the outreach table',
    span: '',
  },
  {
    src: '/gallery/outing-57.png',
    alt: 'A patriotic-themed craft booth at a community market.',
    caption: 'A patriotic craft booth',
    span: '',
  },
  {
    src: '/gallery/outing-58.png',
    alt: 'A group photo in festive sweaters during a holiday outing.',
    caption: 'A festive group photo',
    span: '',
  },
  {
    src: '/gallery/outing-59.png',
    alt: 'Handmade wood ornaments and crafts on display at a market table.',
    caption: 'Handmade crafts on display',
    span: '',
  },
  {
    src: '/gallery/outing-60.png',
    alt: 'Two staff members sharing a laugh during a fun outing.',
    caption: 'Laughs during a fun outing',
    span: '',
  },
  {
    src: '/gallery/outing-61.png',
    alt: 'A busy room full of volunteers at a community craft workshop.',
    caption: 'A busy day at the craft workshop',
    span: '',
  },
  {
    src: '/gallery/outing-62.png',
    alt: 'An individual in a wheelchair lending a hand at a holiday gift-wrapping event.',
    caption: 'Lending a hand at gift-wrapping',
    span: '',
  },
  {
    src: '/gallery/outing-63.png',
    alt: 'The Nassau County Sheriff’s Office booth at a community event.',
    caption: 'Visiting the Sheriff’s Office booth',
    span: '',
  },
  {
    src: '/gallery/outing-64.png',
    alt: 'A volunteer with painted ceramic pumpkins at the Halloween craft market.',
    caption: 'Painted pumpkins for the market',
    span: '',
  },
  {
    src: '/gallery/outing-65.png',
    alt: 'A child in costume collecting candy at the Halloween market.',
    caption: 'Trick-or-treating at the market',
    span: '',
  },
  {
    src: '/gallery/outing-66.png',
    alt: 'A child getting into the spooky spirit at a Halloween photo booth prop.',
    caption: 'Spooky fun at the photo booth',
    span: '',
  },
  {
    src: '/gallery/outing-67.png',
    alt: 'Guests browsing tables at the Halloween craft market.',
    caption: 'Browsing the Halloween market',
    span: '',
  },
  {
    src: '/gallery/outing-68.png',
    alt: 'Two people in costume posing at the Halloween photo booth.',
    caption: 'Costumes at the photo booth',
    span: '',
  },
  {
    src: '/gallery/outing-69.png',
    alt: 'A family trick-or-treating through the vendor booths.',
    caption: 'Trick-or-treating through the booths',
    span: '',
  },
  {
    src: '/gallery/outing-70.png',
    alt: 'A group in costume gathered at the Halloween celebration photo booth.',
    caption: 'Group costume photo',
    span: '',
  },
  {
    src: '/gallery/outing-71.png',
    alt: 'The Nassau Angel Tree and Be The Change NE FL outreach table.',
    caption: 'The Nassau Angel Tree table',
    span: '',
  },
  {
    src: '/gallery/outing-72.png',
    alt: 'A volunteer serving cupcakes at the Halloween market.',
    caption: 'Serving treats at the market',
    span: '',
  },
  {
    src: '/gallery/outing-73.png',
    alt: 'Guests browsing a holiday market with festive decorations.',
    caption: 'Browsing the holiday market',
    span: '',
  },
  {
    src: '/gallery/outing-74.png',
    alt: 'A full house of guests at the Halloween craft market.',
    caption: 'A full house at the market',
    span: '',
  },
  {
    src: '/gallery/outing-75.png',
    alt: 'Guests sharing a meal at the community dinner.',
    caption: 'Sharing a meal together',
    span: '',
  },
  {
    src: '/gallery/outing-76.png',
    alt: 'A large group in costume for the Halloween Bash.',
    caption: 'The whole crew for the Halloween Bash',
    span: '',
  },
  {
    src: '/gallery/outing-77.png',
    alt: 'Guests enjoying good company at the community dinner.',
    caption: 'Good company at dinner',
    span: '',
  },
  {
    src: '/gallery/outing-78.png',
    alt: 'A promotional graphic announcing the SIWD Foundation Halloween Bash in Nassau County, Florida.',
    caption: 'Tonight’s the night: Halloween Bash',
    span: '',
  },
  {
    src: '/gallery/outing-79.png',
    alt: 'A child playing along at the Halloween photo booth prop.',
    caption: 'Playing along at the photo booth',
    span: '',
  },
  {
    src: '/gallery/outing-80.png',
    alt: 'A staff member in an astronaut costume at the Halloween Bash.',
    caption: 'A stellar costume at the Bash',
    span: '',
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
