import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

export default function RegistrationClosedAlert() {
  return (
    <Alert variant="warning">
      <AlertTriangle aria-hidden="true" />
      <AlertTitle>Ended</AlertTitle>
      <AlertDescription>
        Registration currently closed.{' '}
        <Link href="/contact" className="font-semibold underline underline-offset-4">
          Contact us
        </Link>{' '}
        for next session.
      </AlertDescription>
    </Alert>
  );
}
