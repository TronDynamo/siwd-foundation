import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, message, phone } = body

  // Constructed per-request, not at module scope: `next build` imports this
  // file to collect route data, and the Resend constructor throws if the key
  // isn't present at that moment.
  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    await resend.emails.send({
      from: 'SIWD Foundation <noreply@siwdf.org>',
      to: 'Jfreeman@siwdinc.net',
      subject: `New Contact from ${name} - siwdf.org`,
      html: `<h3>New Contact from siwdf.org</h3><p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Phone:</b> ${phone || 'N/A'}</p><p><b>Message:</b> ${message}</p>`,
      replyTo: email
    })
    return NextResponse.json({ success: true })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'Failed' }, { status: 500 })
  }
}
