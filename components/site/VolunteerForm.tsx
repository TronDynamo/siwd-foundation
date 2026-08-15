'use client';

import { useState } from 'react';
import { CheckCircle2, Heart, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { SITE, VOLUNTEER_INTERESTS } from '@/lib/site';

/*
  Volunteer signup — posts to Formspree via fetch so the visitor stays on the
  page and sees a success message instead of being bounced to formspree.io.

  Formspree delivers to whichever address owns the form. Point the form at
  JFreeman@siwdinc.net in the Formspree dashboard, or add a second recipient
  there — the endpoint below is all the site needs to know.

  If JavaScript is unavailable the <form action>/method still submits normally,
  so the form degrades rather than breaking.
*/

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function VolunteerForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // helps Formspree route + label the notification email
    data.append('_subject', 'New volunteer signup — SIWD Foundation');

    setStatus('submitting');
    try {
      const res = await fetch(SITE.formspree, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <Alert variant="success" className="p-8 text-center">
        <CheckCircle2 aria-hidden="true" className="mx-auto" />
        <AlertTitle className="mt-4 text-xl">Thank you for signing up!</AlertTitle>
        <AlertDescription className="mt-2">
          <p>
            Your details are on their way to Jessica Freeman, and someone from the Foundation will
            be in touch soon.
          </p>
          <p className="mt-4">
            Need something sooner? Call{' '}
            <a href={SITE.phoneHref} className="font-semibold underline underline-offset-4">
              {SITE.phone}
            </a>
            .
          </p>
          <Button
            type="button"
            variant="outline"
            className="mt-6"
            onClick={() => setStatus('idle')}
          >
            Submit another response
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <form
      action={SITE.formspree}
      method="POST"
      onSubmit={handleSubmit}
      className="mt-8 space-y-6"
      noValidate={false}
    >
      {status === 'error' && (
        <Alert variant="warning">
          <AlertTitle>That didn&rsquo;t go through</AlertTitle>
          <AlertDescription>
            Something went wrong sending your form. Please try again, or email{' '}
            <a href={SITE.emailHref} className="font-semibold underline underline-offset-4">
              {SITE.email}
            </a>{' '}
            directly.
          </AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label htmlFor="firstName">First name</Label>
        <Input id="firstName" name="firstName" type="text" autoComplete="given-name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="lastName">Last name</Label>
        <Input id="lastName" name="lastName" type="text" autoComplete="family-name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Input id="address" name="address" type="text" autoComplete="street-address" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" autoComplete="email" required />
      </div>

      <fieldset className="space-y-3">
        <legend className="font-display text-sm font-semibold text-brand-800">
          Please select all items you are interested in :)
        </legend>
        {VOLUNTEER_INTERESTS.map((interest) => (
          <div key={interest} className="flex items-start gap-3">
            <input
              id={interest}
              name="interests"
              value={interest}
              type="checkbox"
              className="mt-1 h-4 w-4 shrink-0 rounded border-hairline text-blue-700 focus:ring-2 focus:ring-blue-700/40"
            />
            <label htmlFor={interest} className="text-[15px] leading-relaxed text-brand-900/80">
              {interest}
            </label>
          </div>
        ))}
      </fieldset>

      <Button type="submit" className="w-full" size="lg" disabled={status === 'submitting'}>
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Heart className="h-4 w-4" aria-hidden="true" />
            Submit
          </>
        )}
      </Button>

      <p className="text-center text-xs text-brand-900/55">
        Your details go to Jessica Freeman at the Foundation. We never share them.
      </p>
    </form>
  );
}
