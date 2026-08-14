import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, ShieldCheck, BadgeCheck, HeartHandshake, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE, ALL_ROUTES, RESOURCE_LINKS } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white">
      <div className="mx-auto max-w-section px-4 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* identity */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-white">
                <Image src="/images/logo-siwd.png" alt="" width={684} height={632} className="h-9 w-9 object-contain" />
              </span>
              <span className="font-display text-lg font-semibold leading-tight">SIWD Foundation</span>
            </Link>

            <p className="mt-5 max-w-xs text-[15.5px] leading-relaxed text-white/60">{SITE.tagline}</p>

            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-3.5 py-1.5 font-display text-[13px] font-semibold text-teal-200">
              <HeartHandshake className="h-4 w-4" aria-hidden="true" />
              {SITE.status}
            </p>

            <p className="mt-4 text-[14px] text-white/45">
              Founded in {SITE.foundedYear} by {SITE.founder}
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener"
                aria-label="SIWD Foundation on Facebook (opens in a new tab)"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/80 transition hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10 hover:text-white"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px]">
                  <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1Z" fill="currentColor" />
                </svg>
              </a>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener"
                aria-label="SIWD Foundation on Instagram (opens in a new tab)"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/80 transition hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10 hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-[18px] w-[18px]">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.7" />
                  <circle cx="12" cy="12" r="3.8" stroke="currentColor" strokeWidth="1.7" />
                  <circle cx="17.2" cy="6.9" r="1.1" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* explore */}
          <nav aria-label="Footer navigation">
            <h2 className="font-display text-[13px] font-semibold uppercase tracking-[0.16em] text-white/45">Explore</h2>
            <ul className="mt-5 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2 lg:grid-cols-1">
              {ALL_ROUTES.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[15.5px] text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* resource affiliation links */}
          <div>
            <h2 className="font-display text-[13px] font-semibold uppercase tracking-[0.16em] text-white/45">
              Resource Affiliation Links
            </h2>
            <ul className="mt-5 space-y-3">
              {RESOURCE_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-1.5 text-[15.5px] text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
                  >
                    {l.label}
                    <ExternalLink className="h-3.5 w-3.5 text-white/35" aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h2 className="font-display text-[13px] font-semibold uppercase tracking-[0.16em] text-white/45">Get in touch</h2>
            <ul className="mt-5 space-y-4 text-[15.5px]">
              <li className="flex gap-2.5 text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/40" aria-hidden="true" />
                <address className="not-italic">{SITE.address.full}</address>
              </li>
              <li className="flex gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white/40" aria-hidden="true" />
                <a href={SITE.phoneHref} className="text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white/40" aria-hidden="true" />
                <a href={`mailto:${SITE.email}`} className="break-all text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline">
                  {SITE.email}
                </a>
              </li>
            </ul>

            <Button asChild variant="white" size="sm" className="mt-6">
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
        </div>

        {/* credentials */}
        <ul className="mt-14 grid grid-cols-1 gap-3 border-t border-white/12 pt-10 sm:grid-cols-3">
          {[
            { Icon: ShieldCheck, label: 'Licensed', sub: 'State of Florida' },
            { Icon: BadgeCheck, label: 'Insured', sub: 'Fully covered' },
            { Icon: HeartHandshake, label: '501(c)(3) Nonprofit', sub: SITE.ein },
          ].map(({ Icon, label, sub }) => (
            <li key={label} className="flex items-center gap-3.5 rounded-2xl border border-white/12 bg-white/[0.05] px-5 py-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-teal-500/15 text-teal-300">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-display text-[15px] font-semibold text-white">{label}</span>
                <span className="block text-[13px] text-white/50">{sub}</span>
              </span>
            </li>
          ))}
        </ul>

        {/* copyright */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/12 pt-8 sm:flex-row">
          <p className="text-center text-[14px] text-white/45 sm:text-left">{SITE.copyright}</p>
          <p className="text-[14px] text-white/45">{SITE.ein}</p>
        </div>

        <p className="mt-6 text-center text-xs text-neutral-400">
          Website by{' '}
          <a href="#" className="underline-offset-4 transition-colors duration-300 hover:text-neutral-200 hover:underline">
            Zacharee J. Burchfield
          </a>{' '}
          &mdash;{' '}
          <a href="tel:+19045839741" className="underline-offset-4 transition-colors duration-300 hover:text-neutral-200 hover:underline">
            904-583-9741
          </a>
        </p>
      </div>
    </footer>
  );
}
