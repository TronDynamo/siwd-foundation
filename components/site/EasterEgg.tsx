'use client';

import Image from 'next/image';
import { createContext, useCallback, useContext, useState } from 'react';

/* ==================================================================
   Logo easter egg
   Double-click the SIWD logo in the header → a hidden SIWD Inc coin
   slides up from the bottom of the page. Click the coin → it spins a
   full 360°, then opens https://www.siwdinc.info in a new tab.
   ================================================================== */

type EasterEggContextValue = {
  showEasterEgg: boolean;
  setShowEasterEgg: (value: boolean) => void;
};

const EasterEggContext = createContext<EasterEggContextValue>({
  showEasterEgg: false,
  setShowEasterEgg: () => {},
});

export function useEasterEgg() {
  return useContext(EasterEggContext);
}

export function EasterEggProvider({ children }: { children: React.ReactNode }) {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  return (
    <EasterEggContext.Provider value={{ showEasterEgg, setShowEasterEgg }}>
      {children}
      <EasterEggCoin />
    </EasterEggContext.Provider>
  );
}

function EasterEggCoin() {
  const { showEasterEgg, setShowEasterEgg } = useEasterEgg();
  const [spinning, setSpinning] = useState(false);

  const handleClick = useCallback(() => {
    if (spinning) return;
    setSpinning(true);
    // let the 360° spin finish, then hand off to SIWD Inc
    window.setTimeout(() => {
      window.open('https://www.siwdinc.info', '_blank', 'noopener,noreferrer');
      setSpinning(false);
    }, 700);
  }, [spinning]);

  return (
    <div
      aria-hidden={!showEasterEgg}
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[60] flex justify-center"
    >
      <div
        className="pointer-events-auto mb-0 transition-transform duration-700 ease-out"
        style={{ transform: showEasterEgg ? 'translateY(0)' : 'translateY(140px)' }}
      >
        <div className="flex flex-col items-center gap-2 pb-5">
          <a
            href="https://www.siwdinc.info"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              handleClick();
            }}
            aria-label="Visit SIWD Inc (opens in a new tab)"
            tabIndex={showEasterEgg ? 0 : -1}
            className="block rounded-full shadow-lift outline-offset-4 focus-visible:outline-2 focus-visible:outline-blue-700"
          >
            <Image
              src="/images/siwd-inc-coin.png"
              alt="SIWD Inc logo"
              width={512}
              height={512}
              className={[
                'h-20 w-20 rounded-full bg-white object-contain transition-transform',
                spinning ? 'animate-egg-spin' : 'hover:scale-105',
              ].join(' ')}
            />
          </a>

          <button
            type="button"
            onClick={() => setShowEasterEgg(false)}
            tabIndex={showEasterEgg ? 0 : -1}
            className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-brand-800 shadow-soft backdrop-blur-sm transition hover:bg-white"
          >
            Visit SIWD Inc &middot; hide
          </button>
        </div>
      </div>
    </div>
  );
}
