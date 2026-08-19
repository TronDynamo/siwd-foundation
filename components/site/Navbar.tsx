"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Heart, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PRIMARY_NAV, MORE_ROUTES, ALL_ROUTES, SITE } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-blue-700 focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-hairline bg-white/95 backdrop-blur-md">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-20 max-w-section items-center justify-between gap-3 px-4 lg:px-8"
        >
          {/* Double-click the logo to reveal the SIWD Inc coin at the bottom of the page. */}
          <Link
            href="/"
            onDoubleClick={(e) => {
              e.preventDefault();
              setShowEasterEgg(true);
            }}
            className="flex min-w-0 select-none items-center gap-3"
          >
            <Image
              src="/images/logo-siwd.png"
              alt="SIWD Foundation logo"
              width={512}
              height={512}
              priority
              className="h-11 w-11 shrink-0 object-contain"
            />
            <span className="min-w-0 leading-tight">
              <span className="block truncate font-display text-base font-bold tracking-tight text-blue-800 sm:text-lg">
                SIWD Foundation
              </span>
              <span className="hidden text- font-semibold uppercase tracking-[0.09em] text-teal-600 sm:block">
                501(c)(3) Nonprofit
              </span>
            </span>
          </Link>

          {/* desktop */}
          <ul className="hidden items-center gap-0.5 xl:flex">
            {PRIMARY_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href)? 'page' : undefined}
                  className={cn(
                    'rounded-full px-3.5 py-2 text- transition-colors hover:bg-blue-50 hover:text-blue-800',
                    isActive(item.href)? 'font-semibold text-blue-800' : 'text-brand-900/75'
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* everything else */}
            <li
              className="relative"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <button
                type="button"
                onClick={() => setMoreOpen((v) =>!v)}
                aria-expanded={moreOpen}
                className="flex items-center gap-1 rounded-full px-3.5 py-2 text- text-brand-900/75 transition-colors hover:bg-blue-50 hover:text-blue-800"
              >
                More
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </button>

              {moreOpen && (
                <ul className="absolute right-0 top-full z-50 w-64 rounded-xl border border-hairline bg-white p-2 shadow-lift">
                  {MORE_ROUTES.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={isActive(item.href)? 'page' : undefined}
                        className={cn(
                          'block rounded-lg px-3.5 py-2.5 text- transition-colors hover:bg-blue-50 hover:text-blue-800',
                          isActive(item.href)? 'font-semibold text-blue-800' : 'text-brand-900/75'
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>

          <div className="flex shrink-0 items-center gap-2.5">
            {/* FIXED: RED DONATE - TOP RIGHT */}
            <Button asChild size="sm" className="inline-flex bg-red-600 text-white font-bold hover:bg-red-700 shadow-sm">
              <Link href="/contact">
                <Heart className="h-4 w-4" aria-hidden="true" />
                Donate
              </Link>
            </Button>

            <button
              type="button"
              onClick={() => setOpen((v) =>!v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open? 'Close menu' : 'Open menu'}
              className="grid h-11 w-11 place-items-center rounded-xl border border-hairline text-blue-800 transition-colors hover:bg-blue-50 xl:hidden"
            >
              {open? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </header>

      {/* mobile - every one of the 15 routes */}
      {open && (
        <div id="mobile-menu" className="fixed inset-0 z-40 flex flex-col bg-white pt-20 xl:hidden">
          <ul className="flex-1 overflow-y-auto px-4 py-4">
            {ALL_ROUTES.map((item) => (
              <li key={item.href} className="border-b border-hairline last:border-0">
                <Link
                  href={item.href}
                  aria-current={isActive(item.href)? 'page' : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block py-3.5 font-display text-lg font-semibold transition-colors hover:text-blue-700',
                    isActive(item.href)? 'text-blue-700' : 'text-brand-900'
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="space-y-3 border-t border-hairline px-4 py-5">
            {/* FIXED: RED DONATE - MOBILE BOTTOM */}
            <Button asChild className="w-full bg-red-600 text-white font-bold hover:bg-red-700">
              <Link href="/contact" onClick={() => setOpen(false)}>
                <Heart className="h-4 w-4" aria-hidden="true" />
                Donate
              </Link>
            </Button>
            <p className="text-center text-xs text-brand-900/55">{SITE.taxNote}</p>
            <a href={SITE.phoneHref} className="block text-center text- text-blue-700">
              {SITE.phone}
            </a>
          </div>
        </div>
      )}
    </>
  );
}