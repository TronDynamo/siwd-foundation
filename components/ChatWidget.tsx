'use client';

import { useEffect, useRef, useState } from 'react';

/* ==================================================================
   SIWD Assistant — floating chat widget.

   Self-contained and isolated: fixed bottom-6 right-6, z-[9999], its own
   <style> block. Nothing here touches page layout, spacing or colours.
   ================================================================== */

const SITE_KNOWLEDGE = {
  address: '95129 Springhill Rd, Fernandina Beach, FL 32034',
  map: 'https://www.google.com/maps/search/?api=1&query=95129+Springhill+Rd+Fernandina+Beach+FL+32034',
  phone: '(904) 507-9976',
  email: 'Jfreeman@siwdinc.net',
  boss: 'Larry Vest - The Boss',
  manager: 'Jessica Freeman - Manager, main contact Jfreeman@siwdinc.net',
  founder: 'Mary Frances Vest - Founded 2020',
  programs: [
    'Online Classes',
    'In-Person Classes',
    'Resource Navigation',
    'Community Events',
    'Accessible Community Garden with LJ Farms',
  ],
  training: ['CPR/AED & First Aid', 'Instructor Course', 'HIV/BBP Course', 'Book Online'],
  events: ['Halloween Bash', 'Holiday Outreach (200 families)', 'Community Workdays'],
  resources: [
    'APD',
    'Disability Rights Florida',
    'AHCA',
    'CMS',
    'Qlarant',
    'Social Security',
    'The Arc Nassau',
  ],
  nonprofit: '501(c)(3) Nonprofit, Licensed State of Florida, Insured Fully covered, © 2026',
};

type Message = { role: 'bot' | 'user'; text: string };

const QUICK_REPLIES = [
  'Where are you located?',
  'What time is it?',
  'Who is the boss?',
  'What programs do you offer?',
];

export default function ChatWidget() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      text: "Hi! I'm SIWD Assistant. I know everything about our site and I can chat about anything. Ask me where we are, our programs, the time, or just say hi!",
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

  const answer = async (q: string): Promise<string> => {
    const lower = q.toLowerCase();

    if (lower.includes('time'))
      return `It's ${getTime()} in Fernandina Beach, FL right now.`;
    if (lower.includes('boss') || lower.includes('larry'))
      return `${SITE_KNOWLEDGE.boss} is the boss at SIWD Foundation Inc.`;
    if (lower.includes('jessica') || lower.includes('manager'))
      return `${SITE_KNOWLEDGE.manager}. Phone ${SITE_KNOWLEDGE.phone}`;
    if (lower.includes('where') || lower.includes('address') || lower.includes('located'))
      return `We are at ${SITE_KNOWLEDGE.address}. Map: ${SITE_KNOWLEDGE.map}`;
    if (lower.includes('phone') || lower.includes('call'))
      return `Call us at ${SITE_KNOWLEDGE.phone}`;
    if (lower.includes('email') || lower.includes('contact'))
      return `Email ${SITE_KNOWLEDGE.email} — that's Jessica Freeman, our manager.`;
    if (lower.includes('program'))
      return `Programs: ${SITE_KNOWLEDGE.programs.join(', ')}`;
    if (lower.includes('training') || lower.includes('cpr'))
      return `Training: ${SITE_KNOWLEDGE.training.join(', ')}. Book online on our Training page.`;
    if (lower.includes('event') || lower.includes('halloween') || lower.includes('holiday'))
      return `Events: ${SITE_KNOWLEDGE.events.join(', ')}`;
    if (lower.includes('resource'))
      return `Resources: ${SITE_KNOWLEDGE.resources.join(', ')} — see our Community Resources grid.`;
    if (lower.includes('founder') || lower.includes('mary'))
      return `${SITE_KNOWLEDGE.founder}`;
    if (lower.includes('nonprofit') || lower.includes('501') || lower.includes('ein'))
      return `${SITE_KNOWLEDGE.nonprofit}`;
    if (lower.includes('volunteer'))
      return `We would love the help. Head to our Volunteer page to sign up, or email ${SITE_KNOWLEDGE.email}`;
    if (lower.includes('donate'))
      return `Thank you! Our Donate buttons go to the Contact page. Donations are tax-deductible — ${SITE_KNOWLEDGE.nonprofit}`;
    if (lower.includes('joke'))
      return 'Why did the tree go to the support group? It needed to branch out. Want to hear about our programs?';

    // fall through to the API route for general conversation
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: q, time: getTime(), site: SITE_KNOWLEDGE }),
      });
      const data = await res.json();
      return data.reply as string;
    } catch {
      return `I'm here to help! For SIWD info: ${SITE_KNOWLEDGE.address}, ${SITE_KNOWLEDGE.phone}, ${SITE_KNOWLEDGE.email}. For general chat, ask me anything!`;
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
    setMessages((m) => [...m, { role: 'bot', text: reply }]);
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
