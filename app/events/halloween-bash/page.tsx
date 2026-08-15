"use client";
import { useState, useRef } from "react";

export default function HalloweenBash() {
  const [form, setForm] = useState({ name: "", email: "", guests: "1", note: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mrpzkqjw", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          guests: form.guests,
          message: `Halloween Bash Reservation - ${form.guests} guests. Note: ${form.note}`,
          _subject: `NEW Halloween Bash RSVP: ${form.name} - ${form.guests} guests`,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", guests: "1", note: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white relative overflow-hidden">
      {/* FLYING BATS */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="bat bat1">🦇</div>
        <div className="bat bat2">🦇</div>
        <div className="bat bat3">🦇</div>
        <div className="bat bat4">🦇</div>
      </div>

      <style>{`
        .bat { position: absolute; font-size: 28px; animation: fly linear infinite; }
        .bat1 { top: 15%; animation-duration: 9s; animation-delay: 0s; }
        .bat2 { top: 35%; animation-duration: 12s; animation-delay: 2s; }
        .bat3 { top: 55%; animation-duration: 10s; animation-delay: 1s; }
        .bat4 { top: 75%; animation-duration: 14s; animation-delay: 3s; }
        @keyframes fly {
          0% { left: -10%; transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(10deg); }
          50% { transform: translateY(10px) rotate(-10deg); }
          75% { transform: translateY(-15px) rotate(5deg); }
          100% { left: 110%; transform: translateY(0px) rotate(0deg); }
        }
        .skeleton { display: inline-block; animation: dance 0.6s ease-in-out infinite alternate; }
        .skeleton:nth-child(2) { animation-delay: 0.1s; }
        .skeleton:nth-child(3) { animation-delay: 0.2s; }
        @keyframes dance {
          0% { transform: translateY(0) rotate(-5deg); }
          100% { transform: translateY(-12px) rotate(5deg); }
        }
        /* NO GLOW - clean pumpkin */
        .pumpkin-clean { filter: none !important; box-shadow: none !important; text-shadow: none !important; }
      `}</style>

      {/* HERO */}
      <section className="relative z-10 px-6 py-20 text-center">
        <div className="text-6xl mb-4">
          <span className="skeleton">💀</span> <span className="skeleton">💀</span> <span className="skeleton">💀</span>
        </div>

        {/* PUMPKINS - NO ORANGE GLOW CIRCLE */}
        <h1 className="text-5xl md:text-7xl font-black mb-6">
          <span className="pumpkin-clean">🎃</span> HALLOWEEN BASH <span className="pumpkin-clean">🎃</span>
        </h1>

        <p className="text-xl text-orange-300 mb-8 max-w-2xl mx-auto">
          SIWD Foundation&apos;s Spookiest Fundraiser of the Year! Costumes, Games, Prizes & Community Fun.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={scrollToForm}
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 rounded-full text-lg transition"
          >
            RESERVE YOUR SPOT 🎃
          </button>
          <div className="bg-black/50 border border-orange-900 rounded-full px-6 py-4">
            📅 Oct 31st • 5PM - 9PM • SIWD Foundation
          </div>
        </div>

        {/* DANCING SKELETONS ROW */}
        <div className="text-4xl space-x-4">
          <span className="skeleton">💀</span>
          <span className="skeleton">👻</span>
          <span className="skeleton">💀</span>
          <span className="skeleton">🧙</span>
          <span className="skeleton">💀</span>
        </div>
      </section>

      {/* GAME / INFO CARDS */}
      <section className="relative z-10 px-6 py-10 max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        <div className="bg-zinc-900/80 border border-orange-900/30 p-6 rounded-2xl">
          <div className="text-3xl mb-2">🎯</div>
          <h3 className="font-bold text-lg mb-2">Costume Contest</h3>
          <p className="text-zinc-400 text-sm">Best costume wins $100 prize! Judged by our community.</p>
        </div>
        <div className="bg-zinc-900/80 border border-orange-900/30 p-6 rounded-2xl">
          <div className="text-3xl mb-2">🍬</div>
          <h3 className="font-bold text-lg mb-2">Games & Treats</h3>
          <p className="text-zinc-400 text-sm">Pumpkin toss, candy hunt, and spooky snacks for all ages.</p>
        </div>
        <div className="bg-zinc-900/80 border border-orange-900/30 p-6 rounded-2xl">
          <div className="text-3xl mb-2">💜</div>
          <h3 className="font-bold text-lg mb-2">Support SIWD</h3>
          <p className="text-zinc-400 text-sm">All proceeds support individuals with disabilities.</p>
        </div>
      </section>

      {/* RESERVATION FORM - REAL FORMSPREE */}
      <section ref={formRef} className="relative z-10 px-6 py-16 max-w-2xl mx-auto">
        <div className="bg-white text-black rounded-[2rem] p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-center mb-2">RESERVE YOUR SPOT</h2>
          <p className="text-center text-zinc-600 mb-6">Sends directly to Jfreeman@siwdinc.net</p>

          {status === "sent" ? (
            <div className="bg-green-100 border border-green-300 text-green-800 p-6 rounded-xl text-center">
              <div className="text-4xl mb-2">🎃</div>
              <div className="font-bold text-xl">Reserved!</div>
              <div>Jfreeman has your spot - we&apos;ll see you there!</div>
              <button onClick={() => setStatus("idle")} className="mt-4 text-sm underline">Reserve another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your Full Name"
                className="w-full p-4 rounded-xl border border-zinc-300 focus:border-orange-500 outline-none"
              />
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Your Email"
                className="w-full p-4 rounded-xl border border-zinc-300 focus:border-orange-500 outline-none"
              />
              <select
                value={form.guests}
                onChange={(e) => setForm({ ...form, guests: e.target.value })}
                className="w-full p-4 rounded-xl border border-zinc-300 focus:border-orange-500 outline-none"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5+">5+ Guests</option>
              </select>
              <textarea
                value={form.note}
                onChange={(e) => setForm({ ...form, note: e.target.value })}
                placeholder="Costume idea or notes (optional)"
                rows={3}
                className="w-full p-4 rounded-xl border border-zinc-300 focus:border-orange-500 outline-none"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-zinc-800 disabled:opacity-50"
              >
                {status === "sending" ? "SENDING..." : "SEND RESERVATION 🎃"}
              </button>
              {status === "error" && <p className="text-red-600 text-sm text-center">Failed - try again or email Jfreeman@siwdinc.net</p>}
            </form>
          )}
        </div>
      </section>

      <footer className="relative z-10 text-center py-8 text-zinc-600 text-sm">
        SIWD Foundation Inc. • Supporting Individuals with Disabilities
      </footer>
    </div>
  );
}
