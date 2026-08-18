'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import {
  ORG,
  findTopic,
  describeTopic,
  findNavTarget,
  checkNotOnSite,
} from '@/lib/chat-knowledge';

/* ==================================================================
   SIWD Assistant — floating chat widget.

   Self-contained and isolated: fixed bottom-6 right-6, z-[9999], its own
   <style> block. Nothing here touches page layout, spacing or colours.
   ================================================================== */

/* Kept for the /api/chat payload. Detail lives in lib/chat-knowledge.ts,
   which is generated from the real page content. */
const SITE_KNOWLEDGE = {
  address: ORG.address,
  map: ORG.map,
  phone: ORG.phone,
  email: ORG.email,
  boss: ORG.boss,
  manager: ORG.manager,
  founder: ORG.founder,
  hours: ORG.hours,
  serviceArea: ORG.serviceArea,
  nonprofit: ORG.credentials,
};

type Message = {
  role: 'bot' | 'user';
  text: string;
  link?: { label: string; href: string };
};

const QUICK_REPLIES = [
  'What is the Halloween Bash?',
  'When is the Halloween Bash?',
  'Where are you located?',
  'What programs do you offer?',
  'Take me to Training',
];

export default function ChatWidget() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      text: "Hi! I'm SIWD Assistant. I know every event, program and course on this site. Ask me what something is, where it is, or when it runs — or say \"take me to Programs\" and I'll get you there.",
    },
  ]);
  const [input, setInput] = useState('');

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // keep the newest message in view
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isThinking]);

  // focus the field when the panel opens
  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  // Escape closes the panel
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const handleFlip = () => {
    setIsFlipped(true);
    window.setTimeout(() => {
      setIsOpen(true);
      setIsFlipped(false);
    }, 700);
  };

  const getTime = () =>
    new Date().toLocaleString('en-US', {
      timeZone: 'America/New_York',
      weekday: 'long',
      hour: 'numeric',
      minute: '2-digit',
      timeZoneName: 'short',
    });

  const answer = async (
    q: string
  ): Promise<{ text: string; link?: { label: string; href: string } }> => {
    const lower = q.toLowerCase();

    /* 1 — explicit navigation: "take me to programs" */
    const nav = findNavTarget(q);
    if (nav) {
      return {
        text: `Sure — here's ${nav.label}. Tap the button below and I'll take you straight there.`,
        link: { label: `Take me to ${nav.label}`, href: nav.href },
      };
    }

    /* 2 — people and org facts */
    if (lower.includes('what time') || /\btime\b/.test(lower))
      return { text: `It's ${getTime()} in Fernandina Beach, FL right now.` };
    if (lower.includes('boss') || lower.includes('larry'))
      return { text: `${ORG.boss} is the boss at ${ORG.name}` };
    if (lower.includes('jessica') || lower.includes('manager'))
      return {
        text: `${ORG.manager}. Email ${ORG.email} or call ${ORG.phone}`,
        link: { label: 'Take me to Contact', href: '/contact' },
      };
    if (lower.includes('founder') || lower.includes('mary') || lower.includes('frances'))
      return { text: ORG.founder };
    if (lower.includes('hour') || lower.includes('open'))
      return { text: `${ORG.hours} Call ${ORG.phone} to arrange a time.` };
    if (lower.includes('phone') || lower.includes('call'))
      return { text: `Call us at ${ORG.phone}` };
    if (lower.includes('email'))
      return { text: `Email ${ORG.email} — that's Jessica Freeman, our manager.` };

    /* 3 — decline honestly for events we do not actually run */
    const notHere = checkNotOnSite(q);
    if (notHere) {
      return { text: notHere, link: { label: 'Take me to Events', href: '/events' } };
    }

    /* 4 — anything on the site: what / where / when */
    const topic = findTopic(q);
    if (topic) {
      return {
        text: describeTopic(topic, q),
        link: topic.href ? { label: topic.linkLabel ?? 'Take me there', href: topic.href } : undefined,
      };
    }

    /* 5 — bare address questions with no topic attached */
    if (lower.includes('where') || lower.includes('address') || lower.includes('located'))
      return {
        text: `We are at ${ORG.address}. We serve ${ORG.serviceArea}.\nMap: ${ORG.map}`,
        link: { label: 'Take me to Contact', href: '/contact' },
      };

    if (lower.includes('joke'))
      return { text: 'Why did the tree go to the support group? It needed to branch out. Want to hear about our programs?' };

    /* 6 — general conversation via the API route */
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: q, time: getTime(), site: SITE_KNOWLEDGE }),
      });
      const data = await res.json();
      return { text: data.reply as string };
    } catch {
      return {
        text: `I'm here to help! For SIWD info: ${ORG.address}, ${ORG.phone}, ${ORG.email}. Ask me about any event, program or course on the site.`,
      };
    }
  };

  const send = async (preset?: string) => {
    const userMsg = (preset ?? input).trim();
    if (!userMsg || isThinking) return;

    setMessages((m) => [...m, { role: 'user', text: userMsg }]);
    setInput('');
    setIsThinking(true);

    const reply = await answer(userMsg);

    setIsThinking(false);
    setMessages((m) => [...m, { role: 'bot', text: reply.text, link: reply.link }]);
  };

  return (
    <div className="siwd-chat fixed bottom-6 right-6 z-[9999]">
      {!isOpen ? (
        <div className="siwd-perspective">
          <button
            type="button"
            onClick={handleFlip}
            aria-label="Open the SIWD Assistant chat"
            className={`siwd-coin relative h-[72px] w-[72px] cursor-pointer rounded-full border-2 border-blue-100 bg-white shadow-2xl transition-shadow hover:shadow-blue-200 ${
              isFlipped ? 'siwd-flip' : 'siwd-idle'
            }`}
          >
            <span className="siwd-face absolute inset-0 overflow-hidden rounded-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-siwd-chatbot.png"
                alt="SIWD Foundation"
                className="h-full w-full rounded-full object-cover"
              />
            </span>
            <span className="siwd-face siwd-back absolute inset-0 overflow-hidden rounded-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-siwd-chatbot.png"
                alt=""
                className="h-full w-full rounded-full object-cover brightness-110"
              />
            </span>
          </button>
        </div>
      ) : (
        <div
          role="dialog"
          aria-label="SIWD Assistant"
          className="siwd-panel absolute bottom-[90px] right-0 flex h-[500px] max-h-[70vh] w-[380px] max-w-[90vw] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl"
        >
          <div className="flex items-center justify-between bg-[#1e4a8a] p-4 text-white">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-siwd-chatbot.png"
                alt=""
                className="h-8 w-8 rounded-full bg-white"
              />
              <div>
                <div className="text-sm font-bold">SIWD Assistant</div>
                <div className="text-xs opacity-80">Supporting Individuals With Disabilities</div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="grid h-8 w-8 place-items-center rounded-full text-xl leading-none text-white transition hover:bg-white/15"
            >
              &times;
            </button>
          </div>

          <div
            ref={scrollRef}
            role="log"
            aria-live="polite"
            className="flex-1 space-y-3 overflow-y-auto bg-[#f8fafc] p-4"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`${
                  m.role === 'user'
                    ? 'ml-auto bg-blue-600 text-white'
                    : 'mr-auto border bg-white text-gray-800'
                } max-w-[80%] whitespace-pre-wrap break-words rounded-2xl p-3 text-sm shadow-sm`}
              >
                {m.text}
                {m.link && (
                  <Link
                    href={m.link.href}
                    onClick={() => setIsOpen(false)}
                    className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#dc2626] px-4 py-2 text-xs font-semibold text-white transition hover:opacity-90"
                  >
                    {m.link.label}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                )}
              </div>
            ))}

            {isThinking && (
              <div className="mr-auto flex max-w-[80%] gap-1 rounded-2xl border bg-white p-3 shadow-sm">
                <span className="siwd-dot h-2 w-2 rounded-full bg-gray-400" />
                <span className="siwd-dot h-2 w-2 rounded-full bg-gray-400" />
                <span className="siwd-dot h-2 w-2 rounded-full bg-gray-400" />
                <span className="sr-only">Assistant is typing</span>
              </div>
            )}

            <div className="flex flex-wrap gap-2 pt-2">
              {QUICK_REPLIES.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => send(q)}
                  className="rounded-full border bg-white px-3 py-1 text-xs text-gray-700 transition hover:bg-gray-50"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-2 border-t p-3">
            <label htmlFor="siwd-chat-input" className="sr-only">
              Ask about SIWD Foundation
            </label>
            <input
              id="siwd-chat-input"
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') send();
              }}
              placeholder="Ask about SIWD or chat..."
              className="flex-1 rounded-full border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => send()}
              disabled={isThinking || !input.trim()}
              aria-label="Send message"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#dc2626] text-white transition disabled:cursor-not-allowed disabled:opacity-50"
            >
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
                <path
                  d="M3 10h12m0 0-5-5m5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      <style>{`
        .siwd-perspective { perspective: 1000px; }
        .siwd-coin { transform-style: preserve-3d; transition: transform .7s; }
        .siwd-face { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
        .siwd-back { transform: rotateY(180deg); }
        .siwd-flip { transform: rotateY(720deg); }
        .siwd-idle { animation: siwd-float 3s ease-in-out infinite, siwd-glow 3s ease-in-out infinite; }
        @keyframes siwd-float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-4px) } }
        @keyframes siwd-glow {
          0%,100% { box-shadow: 0 0 15px rgba(30,74,138,.2) }
          50%     { box-shadow: 0 0 25px rgba(30,74,138,.35) }
        }
        .siwd-panel { animation: siwd-slide-up .3s ease-out; }
        @keyframes siwd-slide-up { from { transform: translateY(20px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
        .siwd-dot { animation: siwd-bounce 1.2s ease-in-out infinite; }
        .siwd-dot:nth-child(2) { animation-delay: .15s }
        .siwd-dot:nth-child(3) { animation-delay: .3s }
        @keyframes siwd-bounce { 0%,60%,100% { transform: translateY(0); opacity:.5 } 30% { transform: translateY(-4px); opacity:1 } }
        @media (prefers-reduced-motion: reduce) {
          .siwd-idle, .siwd-panel, .siwd-dot { animation: none !important }
          .siwd-coin { transition: none !important }
        }
      `}</style>
    </div>
  );
}
