import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-display text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-blue-700 text-white',
        teal: 'border-transparent bg-teal-600 text-white',
        outline: 'border-hairline bg-white text-brand-800',
        warning: 'border-amber-300 bg-amber-100 text-amber-900',
        price: 'border-transparent bg-accent-500 text-white',
        onDark: 'border-white/25 bg-white/10 text-white',
      },
    },
    defaultVariants: { variant: 'default' },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
