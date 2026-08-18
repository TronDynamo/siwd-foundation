'use client';

import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { SITE } from '@/lib/site';

/*
  Contact form — posts to our own /api/contact route (Resend) via fetch
  instead of Formspree, so the visitor stays on the page. Markup and
  styling are unchanged from the previous Formspree version; only the
  submit mechanism moved from a plain <form action> to this handler.
*/

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // /api/contact reads name / email / phone / message.
    // First and last name are combined into one `name`, and the typed
    // subject is folded into the message body so it isn't lost.
    const firstName = String(data.get('firstName') ?? '').trim();
    const lastName = String(data.get('lastName') ?? '').trim();
    const subject = String(data.get('subject') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    const payload = {
      name: `${firstName} ${lastName}`.trim(),
      email: data.get('email'),
      phone: data.get('phone') ?? '',
      message: subject ? `Subject: ${subject}\n\n${message}` : message,
    };

    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
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
        <AlertTitle className="text-xl">Thank you for reaching out!</AlertTitle>
        <AlertDescription className="mt-2">
          <p>Your message is on its way to Jessica Freeman, and someone from the Foundation will be in touch soon.</p>
          <p className="mt-4">
            Need something sooner? Call{' '}
            <a href={SITE.phoneHref} className="font-semibold underline underline-offset-4">
              {SITE.phone}
            </a>
            .
          </p>
          <Button type="button" variant="outline" className="mt-6" onClick={() => setStatus('idle')}>
            Send another message
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      {status === 'error' && (
        <Alert variant="warning">
          <AlertTitle>That didn&rsquo;t go through</AlertTitle>
          <AlertDescription>
            Something went wrong sending your message. Please try again, or email{' '}
            <a href={`mailto:${SITE.email}`} className="font-semibold underline underline-offset-4">
              {SITE.email}
            </a>{' '}
            directly.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" name="firstName" type="text" autoComplete="given-name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" name="lastName" type="text" autoComplete="family-name" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">
          Email <span aria-hidden="true" className="text-accent-500">*</span>
          <span className="sr-only">(required)</span>
        </Label>
        <Input id="email" name="email" type="email" autoComplete="email" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">
          Phone Number <span aria-hidden="true" className="text-accent-500">*</span>
          <span className="sr-only">(required)</span>
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="Phone Number"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" name="subject" type="text" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Type your message here...</Label>
        <Textarea id="message" name="message" placeholder="Type your message here..." required />
      </div>

      <Button type="submit" size="lg" disabled={status === 'submitting'}>
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" />
            Submit
          </>
        )}
      </Button>
    </form>
  );
}
