import Link from "next/link";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-black text-center mb-4">🎃 EVENTS</h1>
        <p className="text-center text-zinc-400 mb-12">Join SIWD Foundation community events</p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* HALLOWEEN BASH - FEATURED */}
          <Link href="/events/halloween-bash" className="md:col-span-2 bg-gradient-to-br from-orange-600 to-zinc-900 border-2 border-orange-500 p-8 rounded-[2rem] hover:scale-[1.02] transition block group">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-5xl mb-3">🎃</div>
                <h2 className="text-3xl font-black group-hover:text-orange-300">HALLOWEEN BASH</h2>
                <p className="text-orange-200 mt-2">Oct 31st • 5PM-9PM • SIWD Foundation</p>
                <p className="text-zinc-300 text-sm mt-3 max-w-md">Costume contest with $100 prize, games, treats, and community fun. All proceeds support individuals with disabilities.</p>
                <span className="inline-block mt-4 bg-white text-black font-bold px-5 py-2 rounded-full text-sm">RESERVE FREE SPOT →</span>
              </div>
              <div className="hidden md:block text-6xl animate-bounce">💀</div>
            </div>
            <div className="mt-4 flex gap-2">
              <span className="bg-black/40 text-xs px-3 py-1 rounded-full">🦇 Flying Bats</span>
              <span className="bg-black/40 text-xs px-3 py-1 rounded-full">💀 Dancing Skeletons</span>
              <span className="bg-orange-500 text-black text-xs px-3 py-1 rounded-full font-bold">NEW</span>
            </div>
          </Link>

          {/* OTHER EVENTS - Placeholder for future */}
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl opacity-60">
            <div className="text-3xl mb-2">☀️</div>
            <h3 className="font-bold text-lg">Summer Community Day</h3>
            <p className="text-zinc-500 text-sm mt-1">Coming Summer 2026</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl opacity-60">
            <div className="text-3xl mb-2">❤️</div>
            <h3 className="font-bold text-lg">Fall Fundraiser</h3>
            <p className="text-zinc-500 text-sm mt-1">Coming Soon</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/events/halloween-bash" className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 rounded-full inline-block">
            GO TO HALLOWEEN BASH 🎃
          </Link>
        </div>
      </div>
    </div>
  );
}
