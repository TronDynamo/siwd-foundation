import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const alertVariants = cva(
  'relative w-full rounded-2xl border p-5 [&>svg]:absolute [&>svg]:left-5 [&>svg]:top-5 [&>svg]:h-5 [&>svg]:w-5 [&>svg~*]:pl-8',
  {
    variants: {
      variant: {
        default: 'border-hairline bg-gray-50 text-brand-900',
        warning: 'border-amber-300 bg-amber-50 text-amber-900 [&>svg]:text-amber-600',
        info: 'border-blue-200 bg-blue-50 text-blue-900 [&>svg]:text-blue-700',
        success: 'border-teal-200 bg-teal-50 text-teal-900 [&>svg]:text-teal-700',
      },
    },
    defaultVariants: { variant: 'default' },
  }
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
));
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn('mb-1 font-display font-semibold leading-none tracking-tight', className)} {...props} />
  )
);
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('text-[15px] leading-relaxed [&_p]:leading-relaxed', className)} {...props} />
));
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };
