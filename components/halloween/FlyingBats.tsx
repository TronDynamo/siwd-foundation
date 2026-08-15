/*
  FlyingBats — 5 SVG bats crossing the section left to right.

  Pure CSS keyframes (declared in tailwind.config.ts), so this is a server
  component with zero client JS and nothing to hydrate. No framer-motion,
  no images, no emoji.

  - bat-fly   : translateX(-100px) -> translateX(110vw), linear, infinite
  - wing-flap : scaleY 0.5 -> 1, 0.2s infinite, origin at the bat's spine

  The wrapper is absolutely positioned over the section only, pointer-events-none,
  and overflow-hidden on the parent keeps the bats from causing sideways scroll.
  globals.css already neutralises all animation under prefers-reduced-motion.
*/

type Bat = { top: string; delay: string; duration: string; scale: number };

const BATS: Bat[] = [
  { top: '8%', delay: '0s', duration: '17s', scale: 1 },
  { top: '26%', delay: '3.5s', duration: '22s', scale: 0.7 },
  { top: '48%', delay: '7s', duration: '19s', scale: 0.85 },
  { top: '64%', delay: '11s', duration: '25s', scale: 0.6 },
  { top: '82%', delay: '14.5s', duration: '20s', scale: 0.75 },
];

export default function FlyingBats() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 top-0 z-0 overflow-hidden"
    >
      {BATS.map((bat, i) => (
        <span
          key={i}
          className="absolute left-0 animate-bat-fly opacity-70 will-change-transform"
          style={{
            top: bat.top,
            animationDelay: bat.delay,
            animationDuration: bat.duration,
          }}
        >
          <svg
            width={34 * bat.scale}
            height={20 * bat.scale}
            viewBox="0 0 34 20"
            fill="#2b1a08"
          >
            {/* body */}
            <ellipse cx="17" cy="11" rx="3" ry="4.5" />
            {/* ears */}
            <path d="M15 7l-1-4 2.5 2.2zM19 7l1-4-2.5 2.2z" />
            {/* wings flap around the spine */}
            <g className="origin-center animate-wing-flap">
              <path d="M14.5 10C11 5 6 4 1 6c3 1 4 3.5 3.5 6C7 10 11 10.5 14.5 13z" />
              <path d="M19.5 10C23 5 28 4 33 6c-3 1-4 3.5-3.5 6C27 10 23 10.5 19.5 13z" />
            </g>
          </svg>
        </span>
      ))}
    </div>
  );
}
