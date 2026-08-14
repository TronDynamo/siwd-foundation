import { ExternalLink } from 'lucide-react';
import { RESOURCE_LINKS } from '@/lib/site';

export default function ResourceLinks() {
  return (
    <section aria-labelledby="resource-links-heading" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-content px-4 lg:px-8">
        <h2
          id="resource-links-heading"
          className="text-center font-display text-sm font-semibold uppercase tracking-[0.18em] text-teal-700"
        >
          Resource Affiliation Links
        </h2>
        <ul className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-3">
          {RESOURCE_LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white px-6 py-3 font-display text-[15px] font-semibold text-blue-800 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-soft"
              >
                {l.label}
                <ExternalLink className="h-3.5 w-3.5 text-blue-300" aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
