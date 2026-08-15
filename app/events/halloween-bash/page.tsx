"use client";
import { useState, useRef } from "react";

export default function HalloweenBashPage() {
  const reserveRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", guests: "1", message: "" });
  const [status, setStatus] = useState<"idle"|"sending"|"success"|"error">("idle");

  const scrollToReserve = () => reserveRef.current?.scrollIntoView({ behavior: "smooth" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mrpzkqjw", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          _subject: `🎃 Halloween Bash Reservation - ${form.name} (${form.guests} guests)`,
          name: form.name,
          email: form.email,
          phone: form.phone,
          guests: form.guests,
          message: form.message,
          event: "Halloween Bash - All Abilities Welcome",
          to: "Jfreeman@siwdinc.net"
        })
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", guests: "1", message: "" });
      } else { setStatus("error"); }
    } catch { setStatus("error"); }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white relative overflow-hidden">
      {/* CLEAN TRANSPARENT PUMPKINS - NO GLOW */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[
          { top: "12%", left: "7%", size: 60 },
          { top: "65%", left: "4%", size: 70 },
          { top: "22%", left: "88%", size: 55 },
          { top: "78%", left: "82%", size: 65 },
          { top: "48%", left: "93%", size: 50 },
        ].map((p, i) => (
          <div key={`p-${i}`} className="absolute" style={{ top: p.top, left: p.left, fontSize: `${p.size}px`, animation: `float ${3+i*0.3}s ease-in-out infinite`, lineHeight: 1 }}>
            🎃
          </div>
        ))}
        {/* DANCING SKELETONS */}
        {[
          { top: "30%", left: "10%", size: 40, delay: "0s" },
          { top: "70%", left: "15%", size: 50, delay: "0.3s" },
          { top: "15%", left: "75%", size: 45, delay: "0.6s" },
          { top: "80%", left: "70%", size: 50, delay: "0.9s" },
        ].map((s, i) => (
          <div key={`s-${i}`} className="absolute" style={{ top: s.top, left: s.left, fontSize: `${s.size}px`, animation: `dance 0.8s ease-in-out infinite`, animationDelay: s.delay }}>
            💀
          </div>
        ))}
        {/* FLYING BATS */}
        {[
          { top: "8%", delay: "0s", duration: "12s" },
          { top: "35%", delay: "3s", duration: "15s" },
          { top: "60%", delay: "6s", duration: "11s" },
          { top: "25%", delay: "9s", duration: "14s" },
        ].map((b, i) => (
          <div key={`b-${i}`} className="absolute" style={{ top: b.top, left: "-10%", fontSize: "32px", animation: `fly ${b.duration} linear infinite`, animationDelay: b.delay }}>
            🦇
          </div>
        ))}
      </div>

      <style>{`
        @keyframes float {0%,100%{transform:translateY(0px) rotate(-2deg);}50%{transform:translateY(-10px) rotate(2deg);}}
        @keyframes dance {0%,100%{transform:translateY(0px) rotate(-10deg) scale(1);}25%{transform:translateY(-8px) rotate(10deg) scale(1.1);}50%{transform:translateY(0px) rotate(-10deg) scale(1);}75%{transform:translateY(-4px) rotate(10deg) scale(1.05);}}
        @keyframes fly {0%{transform:translateX(0vw) translateY(0px) rotate(0deg);}25%{transform:translateX(25vw) translateY(-20px) rotate(10deg);}50%{transform:translateX(50vw) translateY(10px) rotate(-5deg);}75%{transform:translateX(75vw) translateY(-15px) rotate(8deg);}100%{transform:translateX(110vw) translateY(0px) rotate(0deg);}}
      `}</style>

      <div className="relative z-10 pt-24 pb-10 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-orange-500 text-black font-black px-4 py-1 rounded-full text-sm mb-4 border-2 border-black">ALL ABILITIES WELCOME</div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4">HALLOWEEN<br/>BASH</h1>
          <p className="text-xl text-orange-200">Costumes • Games • Music • Food • No jump scares • Just fun</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white text-black rounded-[20px] border-[3px] border-black p-6 shadow-[6px_6px_0px_black]">
            <h3 className="font-black text-xl mb-2">👻 What to Expect</h3>
            <ul className="text-sm font-medium space-y-1">
              <li>• Best costume contest with prizes</li>
              <li>• Sensory-friendly games</li>
              <li>• Food, drinks, music</li>
              <li>• Safe space, no scary stuff</li>
            </ul>
          </div>
          <div className="bg-orange-400 text-black rounded-[20px] border-[3px] border-black p-6 shadow-[6px_6px_0px_black]">
            <h3 className="font-black text-xl mb-2">📅 Details</h3>
            <p className="text-sm font-bold">Date: TBA - Spooky Season<br/>Time: TBA<br/>Location: TBA<br/>50 Spots Available</p>
            <button onClick={scrollToReserve} className="mt-4 w-full bg-black text-white font-black py-3 rounded-full border-2 border-black hover:bg-white hover:text-black transition-colors">RESERVE SPOT - FREE</button>
          </div>
        </div>

        <div ref={reserveRef} className="mt-20 scroll-mt-24">
          <div className="bg-white text-black rounded-[24px] border-[4px] border-black shadow-[8px_8px_0px_black] p-8 md:p-10">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-black tracking-tighter">RESERVE YOUR SPOT</h2>
              <p className="font-bold mt-2 opacity-70">Free • 50 spots • All abilities welcome</p>
              <p className="text-xs mt-2 font-medium bg-black text-white inline-block px-3 py-1 rounded-full">→ Jfreeman@siwdinc.net via Formspree</p>
            </div>

            {status === "success" && (
              <div className="bg-green-400 border-[3px] border-black rounded-xl p-4 mb-6 text-center font-black text-lg">
                🎃✅ Reserved! Jfreeman@siwdinc.net has your spot! We'll email you!
              </div>
            )}
            {status === "error" && (
              <div className="bg-red-400 border-[3px] border-black rounded-xl p-4 mb-6 text-center font-black">
                ❌ Oops! Try again or email directly to Jfreeman@siwdinc.net
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="font-black text-sm">FULL NAME *</label>
                  <input required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className="w-full mt-1 border-[3px] border-black rounded-xl px-4 py-3 font-medium focus:outline-none focus:bg-orange-50" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="font-black text-sm">EMAIL *</label>
                  <input required type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} className="w-full mt-1 border-[3px] border-black rounded-xl px-4 py-3 font-medium focus:outline-none focus:bg-orange-50" placeholder="jane@email.com" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="font-black text-sm">PHONE</label>
                  <input value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} className="w-full mt-1 border-[3px] border-black rounded-xl px-4 py-3 font-medium focus:outline-none focus:bg-orange-50" placeholder="(904) 555-..." />
                </div>
                <div>
                  <label className="font-black text-sm">GUESTS *</label>
                  <select required value={form.guests} onChange={e=>setForm({...form, guests:e.target.value})} className="w-full mt-1 border-[3px] border-black rounded-xl px-4 py-3 font-black bg-white">
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5+ Guests</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="font-black text-sm">MESSAGE / ACCESSIBILITY NEEDS</label>
                <textarea value={form.message} onChange={e=>setForm({...form, message:e.target.value})} rows={3} className="w-full mt-1 border-[3px] border-black rounded-xl px-4 py-3 font-medium focus:outline-none focus:bg-orange-50" placeholder="Anything we should know?"></textarea>
              </div>
              <button type="submit" disabled={status==="sending"} className="w-full bg-black text-white font-black text-lg py-4 rounded-full border-[3px] border-black hover:bg-orange-500 hover:text-black transition-colors shadow-[4px_4px_0px_black] disabled:opacity-50">
                {status==="sending" ? "SENDING..." : "SEND RESERVATION → Jfreeman@siwdinc.net"}
              </button>
              <p className="text-[11px] text-center font-medium opacity-60">Powered by Formspree - secure, sends straight to SIWD Foundation</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
