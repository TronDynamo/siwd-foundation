import Link from 'next/link';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE } from '@/lib/site';

export default function DonateCta({ className = '' }: { className?: string }) {
  return (
    <div className={`rounded-2xl bg-teal-600 p-8 text-white shadow-sm ${className}`}>
      <h2 className="font-display text-2xl font-semibold">Support our mission</h2>
      <p className="mt-3 max-w-2xl leading-relaxed text-white/85">
        Every gift helps {SITE.legalName} provide services, training and advocacy for individuals
        with disabilities across Nassau County and Northeast Florida.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button asChild variant="white">
          <Link href="/projects#donate">
            <Heart className="h-4 w-4" aria-hidden="true" />
            Donate Now
          </Link>
        </Button>
        <p className="text-sm text-white/80">{SITE.taxNote}</p>
      </div>
    </div>
  );
}
