"use client";
import { useEffect, useState } from "react";

export default function HalloweenBash() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-400 via-orange-500 to-[#ff4500] relative overflow-hidden">
      {/* Floating skulls */}
      <div className="absolute top-20 left-[8%] text-3xl animate-bounce" style={{ animationDuration: "2s" }}>💀</div>
      <div className="absolute top-20 right-[8%] text-2xl animate-bounce" style={{ animationDuration: "2.5s" }}>☠️</div>
      <div className="absolute top-[65%] right-[12%] text-xl animate-bounce" style={{ animationDuration: "3s" }}>🦴</div>
      <div className="absolute bottom-[20%] left-[10%] text-2xl animate-bounce" style={{ animationDuration: "2.2s" }}>💀</div>

      {/* FIXED PUMPKINS - NO BOXES, JUST GLOW */}
      <div className="flex justify-center gap-16 pt-8">
        {/* Pumpkin 1 */}
        <div className="relative group cursor-pointer">
          <div className="absolute inset-0 blur-[25px] bg-yellow-300/50 rounded-full scale-110 animate-pulse"></div>
          <div className="relative text-[95px] leading-none filter drop-shadow-[0_0_15px_rgba(255,200,0,0.8)] animate-[flicker_0.15s_infinite_alternate] select-none">
            🎃
            {/* Eyes that follow mouse */}
            <div className="absolute top-[38%] left-[30%] flex gap-4">
              <div className="w-3 h-5 bg-black rounded-full relative overflow-hidden shadow-[0_0_8px_black]">
                <div 
                  className="w-1.5 h-1.5 bg-white rounded-full absolute"
                  style={{
                    left: `${50 + (mousePos.x / (typeof window !== 'undefined' ? window.innerWidth : 1920) * 30 - 15)}%`,
                    top: `${50 + (mousePos.y / (typeof window !== 'undefined' ? window.innerHeight : 1080) * 30 - 15)}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                />
              </div>
              <div className="w-3 h-5 bg-black rounded-full relative overflow-hidden shadow-[0_0_8px_black]">
                <div 
                  className="w-1.5 h-1.5 bg-white rounded-full absolute"
                  style={{
                    left: `${50 + (mousePos.x / (typeof window !== 'undefined' ? window.innerWidth : 1920) * 30 - 15)}%`,
                    top: `${50 + (mousePos.y / (typeof window !== 'undefined' ? window.innerHeight : 1080) * 30 - 15)}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                />
              </div>
            </div>
          </div>
          {/* Candle glow inside */}
          <div className="absolute top-[55%] left-1/2 -translate-x-1/2 w-8 h-8 bg-yellow-200 blur-[8px] rounded-full animate-[flicker_0.1s_infinite] -z-10"></div>
        </div>

        {/* Pumpkin 2 */}
        <div className="relative group cursor-pointer">
          <div className="absolute inset-0 blur-[25px] bg-orange-300/50 rounded-full scale-110 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
          <div className="relative text-[95px] leading-none filter drop-shadow-[0_0_15px_rgba(255,160,0,0.8)] animate-[flicker_0.18s_infinite_alternate] select-none" style={{ animationDelay: "0.2s" }}>
            🎃
            <div className="absolute top-[38%] left-[30%] flex gap-4">
              <div className="w-3 h-5 bg-black rounded-full relative overflow-hidden rotate-3">
                <div 
                  className="w-1.5 h-1.5 bg-yellow-100 rounded-full absolute"
                  style={{
                    left: `${50 + (mousePos.x / (typeof window !== 'undefined' ? window.innerWidth : 1920) * 30 - 15)}%`,
                    top: `${50 + (mousePos.y / (typeof window !== 'undefined' ? window.innerHeight : 1080) * 30 - 15)}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                />
              </div>
              <div className="w-3 h-5 bg-black rounded-full relative overflow-hidden -rotate-3">
                <div 
                  className="w-1.5 h-1.5 bg-yellow-100 rounded-full absolute"
                  style={{
                    left: `${50 + (mousePos.x / (typeof window !== 'undefined' ? window.innerWidth : 1920) * 30 - 15)}%`,
                    top: `${50 + (mousePos.y / (typeof window !== 'undefined' ? window.innerHeight : 1080) * 30 - 15)}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                />
              </div>
            </div>
          </div>
          <div className="absolute top-[55%] left-1/2 -translate-x-1/2 w-8 h-8 bg-yellow-200 blur-[8px] rounded-full animate-[flicker_0.12s_infinite] -z-10"></div>
        </div>
      </div>

      {/* Hero Text */}
      <div className="max-w-6xl mx-auto px-6 pt-6 pb-20">
        <div className="inline-flex items-center gap-2 bg-black text-orange-300 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest border border-orange-400/50 mb-4">
          🎃 SPOOKY SEASON • 50 SPOTS LEFT • SENSORY-FRIENDLY 👻
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter">
          <span className="block text-black" style={{ fontFamily: "'Creepster', cursive", textShadow: "3px 3px 0px white, 5px 5px 0px orange" }}>HALLOWEEN</span>
          <span className="block text-white" style={{ WebkitTextStroke: "2px black", textShadow: "4px 4px 0px black" }}>BASH</span>
        </h1>

        <div className="mt-6 max-w-[420px] bg-[#e0f7ff] border-[3px] border-black rounded-2xl p-4 shadow-[6px_6px_0px_black]">
          <p className="text-[15px] leading-tight font-medium text-black">
            Costumes, games, music, food + prizes for best costume. Everyone welcome. Every ability belongs.<br/>
            <span className="bg-black text-white px-2 py-0.5 rounded text-[13px] font-bold">No jump scares.</span>
          </p>
        </div>

        <div className="mt-4 flex gap-3">
          <div className="bg-black text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 border-2 border-black">
            ⚠️ Registration Closed
          </div>
          <a href="/contact" className="bg-[#e0f7ff] border-[2px] border-black px-4 py-2 rounded-full text-sm font-bold text-black shadow-[3px_3px_0px_black] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_black] transition-all">
            Contact Us 🎃
          </a>
        </div>
      </div>

      {/* Dancing border */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-black border-t-2 border-orange-400 flex items-center overflow-hidden">
        <div className="flex gap-8 animate-[marquee_15s_linear_infinite] whitespace-nowrap text-white text-sm">
          <span>💀</span><span>🦴</span><span>🎃</span><span>👻</span><span>🏚️</span><span>💀</span><span>🦴</span><span>🎃</span><span>👻</span><span>🏚️</span><span>💀</span><span>🦴</span><span>🎃</span><span>👻</span><span>🏚️</span><span>💀</span><span>🦴</span><span>🎃</span><span>👻</span><span>🏚️</span>
        </div>
      </div>

      {/* Lower sections - keep your existing content but with halloween theme */}
      <div className="bg-[#0f2430] pt-12 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-[#1a3444] border-2 border-orange-400/50 rounded-2xl p-6 shadow-[0_0_20px_rgba(255,100,0,0.2)]">
            <h2 className="text-orange-400 font-black text-xl tracking-wide mb-3">ABOUT THE SPOOK-TACULAR NIGHT</h2>
            <p className="text-white/90 text-sm leading-relaxed">
              Our Annual Halloween Bash is THE night of the year. Sensory-friendly, fully inclusive, built for all abilities. We got dancing skeletons, glowing pumpkins with real candle flicker, games, music, food trucks and trophies for best costumes.
            </p>
            <div className="grid grid-cols-3 gap-3 mt-5">
              <div className="bg-gradient-to-br from-purple-500 to-orange-400 rounded-xl p-3 text-center">
                <div className="text-2xl">💀</div>
                <div className="text-[11px] font-bold mt-1">Skeleton Dance Off</div>
              </div>
              <div className="bg-gradient-to-br from-orange-400 to-yellow-300 rounded-xl p-3 text-center">
                <div className="text-2xl">🎃</div>
                <div className="text-[11px] font-bold mt-1">Glowing Pumpkins</div>
              </div>
              <div className="bg-gradient-to-br from-black to-orange-700 rounded-xl p-3 text-center text-white">
                <div className="text-2xl">🍬</div>
                <div className="text-[11px] font-bold mt-1">Trick or Treat</div>
              </div>
            </div>
            <div className="mt-4 bg-black rounded-xl p-3 flex gap-3 items-center border border-white/10">
              <div className="text-xl">🕯️</div>
              <div className="text-[11px] text-white/80">
                <span className="text-white font-bold">Candle-lit pumpkin faces that actually move & watch you...</span><br/>Hover over the pumpkins above if you dare 👀
              </div>
            </div>
          </div>

          <div className="bg-[#ff8c5a] rounded-2xl p-5 border-2 border-black shadow-[4px_4px_0px_black]">
            <div className="font-black text-sm mb-3 flex items-center gap-2">EVENT DETAILS 👻</div>
            <div className="bg-[#e0f7ff] rounded-xl p-3 text-[12px] leading-relaxed border-2 border-black">
              <div>📅 Date: TBA - Spooky Season</div>
              <div>📍 95128 Springhill Rd, Fernandina Beach</div>
              <div>🕕 6PM - 9PM • Sensory Friendly</div>
            </div>
            <div className="mt-3 bg-black text-white text-[11px] font-bold px-3 py-1.5 rounded-full inline-flex">🎃 50 SPOTS LEFT</div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Creepster&display=swap');
        @keyframes flicker {
          0% { opacity: 1; filter: brightness(1) drop-shadow(0 0 15px rgba(255,200,0,0.8)); }
          100% { opacity: 0.85; filter: brightness(1.2) drop-shadow(0 0 20px rgba(255,200,0,1)); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
