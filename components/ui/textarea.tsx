import * as React from 'react';
import { cn } from '@/lib/utils';

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      'flex min-h-[140px] w-full rounded-lg border border-hairline bg-white px-4 py-3 text-[15px] leading-relaxed text-brand-900 transition-colors placeholder:text-brand-900/40 focus-visible:border-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700/25 disabled:cursor-not-allowed disabled:opacity-50',
      className
    )}
    {...props}
  />
));
Textarea.displayName = 'Textarea';

export { Textarea };
