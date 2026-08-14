import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-display text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-blue-700 text-white shadow-soft hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-lift focus-visible:ring-blue-700',
        teal: 'bg-teal-600 text-white shadow-soft hover:-translate-y-0.5 hover:bg-teal-700 hover:shadow-lift focus-visible:ring-teal-600',
        donate:
          'bg-accent-500 text-white shadow-soft hover:-translate-y-0.5 hover:bg-accent-600 hover:shadow-lift focus-visible:ring-accent-600',
        outline:
          'border border-hairline bg-white text-blue-800 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-soft focus-visible:ring-blue-700',
        ghost: 'text-blue-800 hover:bg-blue-50 focus-visible:ring-blue-700',
        onDark:
          'border border-white/35 bg-white/10 text-white backdrop-blur-md hover:-translate-y-0.5 hover:bg-white/20 focus-visible:ring-white',
        white:
          'bg-white text-blue-800 shadow-soft hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-lift focus-visible:ring-white',
      },
      size: {
        default: 'h-12 px-7 text-[15px]',
        sm: 'h-10 px-5 text-sm',
        lg: 'h-14 px-9 text-base',
        icon: 'h-11 w-11',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
