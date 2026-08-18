import type { Metadata } from 'next';
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';
import ResourceLinks from '@/components/site/ResourceLinks';
import ContactForm from '@/components/site/ContactForm';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact Us | SIWD Foundation - 501(c)(3) Nonprofit',
  description:
    'Contact Supporting Individuals with Disabilities Foundation Inc. at 95129 Springhill Rd, Fernandina Beach, FL. Call 904-507-9976 or email Jfreeman@siwdinc.net.',
};

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(SITE.address.full)}&output=embed`;

  return (
    <>
      <section className="bg-white pt-[72px] lg:pt-20">
        <div className="mx-auto max-w-content px-4 py-14 lg:px-8 lg:py-16">
          <div className="flex items-center justify-center gap-6 sm:gap-12">
            <Image
              src="/images/logo-siwd.png"
              alt=""
              width={684}
              height={632}
              priority
              className="hidden h-24 w-24 object-contain sm:block"
            />
            <h1 className="text-center font-display text-5xl font-semibold tracking-tight text-brand-900 lg:text-7xl">
              Contact Us
            </h1>
            <Image
              src="/images/logo-siwd.png"
              alt="The SIWD Foundation logo: a blue tree formed from open hands, scattered with red stars."
              width={684}
              height={632}
              priority
              className="hidden h-24 w-24 object-contain sm:block"
            />
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-brand-900/75">
            Thank you for visiting our website! At SIWD Foundation, we are always available to assist you. If you have
            any comments, or need more information, please don&rsquo;t hesitate to contact us. Your feedback is valuable
            to us.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="mx-auto grid max-w-content grid-cols-1 gap-8 px-4 lg:grid-cols-3 lg:px-8">
          {/* details */}
          <div className="space-y-6 lg:col-span-1">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="font-display text-xl font-semibold text-brand-900">Get in touch</h2>
              <ul className="mt-6 space-y-5 text-[16px]">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" aria-hidden="true" />
                  <address className="not-italic leading-relaxed text-brand-900/80">{SITE.address.full}</address>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" aria-hidden="true" />
                  <a href={SITE.phoneHref} className="text-blue-700 underline-offset-4 hover:underline">
                    {SITE.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" aria-hidden="true" />
                  <a href={`mailto:${SITE.email}`} className="break-all text-blue-700 underline-offset-4 hover:underline">
                    {SITE.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="font-display text-xl font-semibold text-brand-900">Follow us</h2>
              <div className="mt-5 flex gap-4">
                <a
                  href={SITE.social.facebook}
                  target="_blank"
                  rel="noopener"
                  className="font-display font-semibold text-blue-700 underline underline-offset-4"
                >
                  Facebook
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener"
                  className="font-display font-semibold text-blue-700 underline underline-offset-4"
                >
                  Instagram
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>
            </div>
          </div>

          {/* form */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-white p-8 shadow-sm lg:p-10">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-blue-700">
                Leave us a message and we&rsquo;ll get back to you.
              </h2>

              <ContactForm />
            </div>
          </div>
        </div>

        {/* map */}
        <div className="mx-auto mt-8 max-w-content px-4 lg:px-8">
          <div className="overflow-hidden rounded-2xl shadow-sm ring-1 ring-hairline">
            <iframe
              title={`Map showing ${SITE.legalName} at ${SITE.address.full}`}
              src={mapSrc}
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <ResourceLinks />
    </>
  );
}
