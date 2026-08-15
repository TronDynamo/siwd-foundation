/*
  GlowingPumpkin — pure inline SVG. No image file, no emoji, no JS.
  Everything is CSS keyframes declared in tailwind.config.ts, so this stays a
  server component and costs zero client JS.

  - float      : gentle up/down, 10px, 3s ease-in-out infinite
  - pumpkin-glow (animate-pulse equivalent) : outer orange bloom breathes
  - flicker    : carved face opacity 0.8 -> 1, like candlelight
*/

type Props = {
  /** flips the stem so the pair isn't a mirror-perfect copy */
  flip?: boolean;
  /** stagger so the two pumpkins don't bob in lockstep */
  delay?: string;
  className?: string;
};

export default function GlowingPumpkin({ flip = false, delay = '0s', className = '' }: Props) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block h-[50px] w-[50px] shrink-0 animate-float md:h-20 md:w-20 ${className}`}
      style={{ animationDelay: delay }}
    >
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full animate-pumpkin-glow"
        style={{
          filter: 'drop-shadow(0 0 15px #ff6b00)',
          transform: flip ? 'scaleX(-1)' : undefined,
        }}
      >
        {/* stem */}
        <path d="M50 22c2-8 7-12 14-13-2 7-6 11-11 14" fill="#3f8f4a" />

        {/* body — three overlapping lobes */}
        <ellipse cx="50" cy="58" rx="34" ry="30" fill="#e8791f" />
        <ellipse cx="31" cy="58" rx="17" ry="29" fill="#d9700f" opacity="0.55" />
        <ellipse cx="69" cy="58" rx="17" ry="29" fill="#d9700f" opacity="0.55" />
        <ellipse cx="50" cy="58" rx="13" ry="30" fill="#f08a2c" opacity="0.5" />

        {/* inner candle glow behind the carving */}
        <ellipse cx="50" cy="60" rx="22" ry="18" fill="#ffb547" opacity="0.35" />

        {/* carved face — flickers like a candle */}
        <g className="animate-flicker" fill="#2b1a08">
          <path d="M33 48l13 8-13 8z" />
          <path d="M67 48l-13 8 13 8z" />
          <path d="M31 70c6 3 10 8 19 8s13-5 19-8c-4 10-11 15-19 15s-15-5-19-15z" />
        </g>

        {/* eye + mouth light spill */}
        <g className="animate-flicker" fill="#ffcf6b" opacity="0.9">
          <path d="M35 51l7 5-7 4z" />
          <path d="M65 51l-7 5 7 4z" />
        </g>
      </svg>
    </span>
  );
}
