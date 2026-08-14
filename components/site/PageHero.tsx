import Image from 'next/image';

export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative isolate flex min-h-[46vh] items-center overflow-hidden bg-brand-900 pt-[72px] lg:min-h-[54vh] lg:pt-20">
      <Image src={image} alt={alt} fill priority sizes="100vw" className="-z-20 object-cover" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-900/88 via-brand-900/70 to-brand-900/92" />
      <div className="mx-auto w-full max-w-content px-4 py-16 lg:px-8 lg:py-20">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-teal-300">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-white lg:text-6xl">
          {title}
        </h1>
        {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">{intro}</p>}
      </div>
    </section>
  );
}
