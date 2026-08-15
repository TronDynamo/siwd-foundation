
"use client";
import { useEffect, useState } from "react";

export default function HalloweenBashPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(()=>setMounted(true),[]);

  return (
    <div className="min-h-screen bg-[#050508] text-white overflow-x-hidden relative">
      {/* Global styles for animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Creepster&family=Inter:wght@400;700;900&display=swap');
        @keyframes dance1 { 0%,100%{transform: translateY(0) rotate(-5deg) scale(1)} 25%{transform: translateY(-15px) rotate(5deg) scale(1.1)} 50%{transform: translateY(0) rotate(-8deg) scale(0.95)} 75%{transform: translateY(-10px) rotate(8deg) scale(1.05)} }
        @keyframes dance2 { 0%,100%{transform: translateY(0) rotate(5deg)} 25%{transform: translateY(-20px) rotate(-5deg)} 50%{transform: translateY(-5px) rotate(10deg)} 75%{transform: translateY(-12px) rotate(-10deg)} }
        @keyframes flicker { 0%,100%{opacity:1; filter: brightness(1) drop-shadow(0 0 20px #ff6a00)} 10%{opacity:0.85; filter: brightness(1.3) drop-shadow(0 0 30px #ff8c00)} 20%{opacity:1; filter: brightness(0.9)} 50%{opacity:0.9; filter: brightness(1.2)} }
        @keyframes faceMove { 0%,100%{transform: translateX(0) scaleY(1)} 25%{transform: translateX(-2px) scaleY(1.1)} 50%{transform: translateX(2px) scaleY(0.9)} 75%{transform: translateX(-1px) scaleY(1.05)} }
        @keyframes float { 0%,100%{transform: translateY(0)} 50%{transform: translateY(-20px)} }
        @keyframes glowPulse { 0%,100%{box-shadow: 0 0 40px rgba(255,106,0,0.6)} 50%{box-shadow: 0 0 80px rgba(255,106,0,0.9), 0 0 120px rgba(255,140,0,0.4)} }
        .creep { font-family: 'Creepster', cursive; }
      `}</style>

      {/* ORANGE SPOOKY HERO */}
      <div className="relative bg-gradient-to-b from-[#ff6a00] via-[#ff8c00] to-[#ff4500] min-h-[85vh] flex items-center overflow-hidden">
        {/* Candle glow overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.4)_100%)]"></div>
        
        {/* Floating fog */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-[600px] h-[600px] bg-black/20 rounded-full blur-[100px] top-20 left-10 animate-[float_6s_ease-in-out_infinite]"></div>
          <div className="absolute w-[500px] h-[500px] bg-black/20 rounded-full blur-[80px] bottom-10 right-10 animate-[float_8s_ease-in-out_infinite_reverse]"></div>
        </div>

        {/* DANCING SKELETONS */}
        <div className="absolute top-10 left-[5%] text-7xl animate-[dance1_1.2s_ease-in-out_infinite] select-none">💀</div>
        <div className="absolute top-16 right-[8%] text-6xl animate-[dance2_1s_ease-in-out_infinite] select-none">☠️</div>
        <div className="absolute bottom-20 left-[15%] text-5xl animate-[dance2_1.4s_ease-in-out_infinite] select-none hidden lg:block">💀</div>
        <div className="absolute bottom-32 right-[18%] text-6xl animate-[dance1_1.1s_ease-in-out_infinite] select-none hidden lg:block">🦴</div>

        {/* SPOOKY PUMPKINS WITH MOVING FACES */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-8 lg:gap-20">
          {/* Pumpkin 1 */}
          <div className="relative animate-[float_3s_ease-in-out_infinite]">
            <div className="text-[80px] lg:text-[110px] leading-none filter drop-shadow-[0_0_30px_rgba(255,106,0,1)] animate-[flicker_0.3s_ease-in-out_infinite]">🎃</div>
            <div className="absolute top-[32%] left-1/2 -translate-x-1/2 flex flex-col items-center animate-[faceMove_0.6s_ease-in-out_infinite]">
              <div className="flex gap-3">
                <div className="w-3 h-5 bg-black rounded-full shadow-[0_0_15px_rgba(255,200,0,0.8)] animate-[flicker_0.2s_infinite]"></div>
                <div className="w-3 h-5 bg-black rounded-full shadow-[0_0_15px_rgba(255,200,0,0.8)] animate-[flicker_0.25s_infinite]"></div>
              </div>
              <div className="w-8 h-4 bg-black mt-1 rounded-b-[100%] shadow-[inset_0_0_10px_rgba(255,100,0,0.8)]"></div>
            </div>
            <div className="absolute inset-0 bg-orange-400 blur-[40px] -z-10 opacity-60 animate-[flicker_0.15s_infinite]"></div>
          </div>
          {/* Pumpkin 2 */}
          <div className="relative animate-[float_3.5s_ease-in-out_infinite] hidden md:block">
            <div className="text-[90px] lg:text-[100px] leading-none filter drop-shadow-[0_0_25px_rgba(255,100,0,1)] animate-[flicker_0.35s_ease-in-out_infinite]">🎃</div>
            <div className="absolute top-[30%] left-1/2 -translate-x-1/2 flex flex-col items-center animate-[faceMove_0.7s_ease-in-out_infinite_0.2s]">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-black rotate-45 shadow-[0_0_10px_yellow]"></div>
                <div className="w-2 h-2 bg-black rotate-45 shadow-[0_0_10px_yellow]"></div>
              </div>
              <div className="w-7 h-3 bg-black mt-2 clip-path-[polygon(0_0,100%_0,80%_100%,20%_100%)]"></div>
            </div>
            <div className="absolute inset-0 bg-amber-400 blur-[35px] -z-10 opacity-50 animate-[flicker_0.18s_infinite]"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full z-10">
          <div className="mt-20 lg:mt-10">
            <div className="inline-flex bg-black text-orange-400 px-5 py-2 rounded-full font-black text-xs tracking-widest border-2 border-orange-400 animate-[glowPulse_2s_infinite]">
              🦇 SPOOKY SEASON • 50 SPOTS LEFT • SENSORY-FRIENDLY 🦇
            </div>
            
            <h1 className="creep text-[14vw] lg:text-[9rem] leading-[0.8] text-black mt-6 drop-shadow-[0_4px_0_white] tracking-tighter">
              HALLOWEEN<br/>
              <span className="text-white drop-shadow-[0_4px_0_black]">BASH</span>
            </h1>
            
            <p className="mt-6 text-black font-black text-xl lg:text-2xl max-w-2xl leading-tight bg-white/90 p-4 rounded-2xl border-4 border-black rotate-1 shadow-[8px_8px_0_black]">
              Costumes, games, music, food + prizes for best costume. Everyone welcome. Every ability belongs. <span className="bg-black text-orange-400 px-2">No jump scares.</span>
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-black text-white px-8 py-4 rounded-full font-black text-lg border-2 border-white shadow-[6px_6px_0_white]">⚠️ Registration Closed</div>
              <button className="bg-white text-black px-8 py-4 rounded-full font-black text-lg border-4 border-black hover:scale-105 transition-transform shadow-[6px_6px_0_black]">Contact Us 🎃</button>
            </div>
          </div>
        </div>

        {/* Dancing skeleton border bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-black flex items-center justify-around overflow-hidden border-t-4 border-orange-400">
          {Array.from({length: 12}).map((_,i)=>(
            <span key={i} className="text-3xl animate-[dance1_0.8s_ease-in-out_infinite]" style={{animationDelay: `${i*0.1}s`}}>
              {['💀','🦴','🎃','👻'][i%4]}
            </span>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="bg-[#0a0a0a] relative">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#ff4500] to-transparent opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-8 relative">
          <div className="lg:col-span-2">
            <div className="bg-[#1a1a1a] border-4 border-orange-500 rounded-[2rem] p-8 shadow-[0_0_50px_rgba(255,106,0,0.3)]">
              <h2 className="creep text-5xl text-orange-500 mb-6">About the Spook-tacular Night</h2>
              <p className="text-white/80 text-lg leading-relaxed font-bold">
                Our Annual Halloween Bash is THE night of the year. Sensory-friendly, fully inclusive, built for all abilities. We got dancing skeletons, glowing pumpkins with real candle flicker, games, music, food trucks and trophies for best costumes.
              </p>
              
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  {icon:'💀', label:'Skeleton Dance Off', color:'from-purple-600 to-orange-500'},
                  {icon:'🎃', label:'Glowing Pumpkins', color:'from-orange-500 to-amber-500'},
                  {icon:'🍬', label:'Trick or Treat', color:'from-black to-orange-600'},
                ].map((item,i)=>(
                  <div key={i} className={`bg-gradient-to-br ${item.color} rounded-2xl p-5 text-center border-4 border-black shadow-[4px_4px_0_black] hover:scale-105 transition-transform`}>
                    <div className="text-4xl mb-2 animate-[dance1_1s_infinite]" style={{animationDelay: `${i*0.2}s`}}>{item.icon}</div>
                    <div className="font-black text-black text-sm">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-black rounded-2xl p-4 border-2 border-orange-500/30 flex items-center gap-4">
                <div className="text-5xl animate-[flicker_0.2s_infinite]">🕯️</div>
                <div>
                  <div className="text-orange-400 font-black">Candle-lit pumpkin faces that actually move & watch you...</div>
                  <div className="text-white/50 text-xs font-bold">Hover over the pumpkins above if you dare 👀</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-[2rem] p-6 border-4 border-black shadow-[8px_8px_0_black] text-black">
            <h3 className="font-black text-2xl mb-4 creep tracking-wide">Event Details 🎃</h3>
            <div className="bg-white rounded-2xl p-4 font-black space-y-2 border-4 border-black">
              <p>📅 Date: TBA - Spooky Season</p>
              <p>📍 95128 Springhill Rd, Fernandina Beach</p>
              <p>🕖 6PM - 9PM • Sensory Friendly</p>
            </div>
            <div className="mt-6 text-center">
              <div className="inline-block bg-black text-orange-400 px-6 py-3 rounded-full font-black animate-[flicker_0.5s_infinite]">👻 50 SPOTS LEFT 👻</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
