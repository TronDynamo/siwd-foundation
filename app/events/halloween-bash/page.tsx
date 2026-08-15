"use client";
import { useState, useEffect } from "react";

export default function HalloweenBashPage() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white relative overflow-hidden">
      {/* Transparent pumpkins - NO background boxes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[
          { top: "10%", left: "8%", size: 80, delay: "0s" },
          { top: "60%", left: "5%", size: 100, delay: "0.5s" },
          { top: "20%", left: "85%", size: 90, delay: "1s" },
          { top: "75%", left: "80%", size: 110, delay: "1.5s" },
          { top: "45%", left: "92%", size: 70, delay: "0.2s" },
          { top: "5%", left: "50%", size: 60, delay: "0.8s" },
        ].map((p, i) => {
          // eye tracking
          const eyeX = (mouse.x / (typeof window !== 'undefined' ? window.innerWidth : 1000) - 0.5) * 4;
          const eyeY = (mouse.y / (typeof window !== 'undefined' ? window.innerHeight : 1000) - 0.5) * 3;
          return (
            <div
              key={i}
              className="absolute select-none"
              style={{
                top: p.top,
                left: p.left,
                fontSize: `${p.size}px`,
                animation: `float 3s ease-in-out infinite`,
                animationDelay: p.delay,
                filter: "drop-shadow(0 0 20px rgba(255,140,0,0.6))",
                lineHeight: 1,
                background: "transparent",
              }}
            >
              <div className="relative" style={{ background: "transparent" }}>
                <span style={{ background: "transparent" }}>🎃</span>
                {/* glowing eyes that follow mouse - overlayed on pumpkin */}
                <div 
                  className="absolute top-[42%] left-[50%] -translate-x-1/2 flex gap-[18%] pointer-events-none"
                  style={{ transform: `translate(-50%, -50%) translate(${eyeX}px, ${eyeY}px)` }}
                >
                  <div className="w-2 h-2 bg-yellow-300 rounded-full shadow-[0_0_8px_yellow] animate-pulse"></div>
                  <div className="w-2 h-2 bg-yellow-300 rounded-full shadow-[0_0_8px_yellow] animate-pulse"></div>
                </div>
                {/* inner candle glow */}
                <div className="absolute inset-0 bg-orange-500/20 blur-[12px] -z-10 rounded-full animate-pulse"></div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 pt-24 pb-20 px-6 max-w-4xl mx-auto">
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
            <button className="mt-4 w-full bg-black text-white font-black py-3 rounded-full border-2 border-black hover:bg-white hover:text-black transition-colors">RESERVE SPOT - FREE</button>
          </div>
        </div>

        <div className="mt-8 text-center text-[11px] opacity-60">🎃 The pumpkins are watching your mouse... move around!</div>
      </div>
    </div>
  );
}
