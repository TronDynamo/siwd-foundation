import { NextRequest, NextResponse } from 'next/server';

/*
  General-conversation fallback for the ChatWidget.
  No external API and no key required — swap the body of this handler for an
  OpenAI/Anthropic call later and the widget needs no changes.
*/

type SiteKnowledge = {
  address: string;
  phone: string;
  email: string;
  boss: string;
  manager: string;
  [key: string]: unknown;
};

export async function POST(req: NextRequest) {
  let message = '';
  let time = '';
  let site: SiteKnowledge | null = null;

  try {
    const body = await req.json();
    message = String(body?.message ?? '');
    time = String(body?.time ?? '');
    site = body?.site ?? null;
  } catch {
    return NextResponse.json({ reply: 'Sorry, I did not catch that. Could you try again?' });
  }

  if (!site) {
    return NextResponse.json({
      reply: 'I can help with SIWD Foundation — ask me about programs, training, events or how to reach us.',
    });
  }

  const lower = message.toLowerCase();
  let reply: string;

  if (lower.includes('how are you')) {
    reply = `I'm doing great, thanks for asking! Ready to help with SIWD Foundation. It's ${time} here. How can I help you today?`;
  } else if (lower.includes('weather')) {
    reply = `I don't have live weather, but we're in Fernandina Beach, FL — usually sunny. For site info: ${site.address}`;
  } else if (lower.includes('thank')) {
    reply = `You're very welcome! Anything else about SIWD? Reach us at ${site.email} or ${site.phone}`;
  } else if (lower.includes('hi') || lower.includes('hello') || lower.includes('hey')) {
    reply = `Hello! Good to meet you. It's ${time}. Ask me about our programs, training courses, events, or how to get in touch.`;
  } else if (lower.includes('bye')) {
    reply = `Take care! If you need anything, we're at ${site.phone} or ${site.email}`;
  } else {
    reply = `I can help with SIWD Foundation. We're at ${site.address}. ${site.boss}. ${site.manager}. Ask me about programs, training, events, or just chat. Current time: ${time}`;
  }

  return NextResponse.json({ reply });
}
