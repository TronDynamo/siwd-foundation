'use client'

import { useState, useEffect } from 'react'

/* ==================================================================
   Duplicate-side gold coin popup.

   Listens for the global 'open-siwd-coin' event (dispatched by the
   header logo on double-click). Click the coin → it spins two full
   turns, then hands off to SIWD Inc in a new tab.

   Self-contained: fixed overlay at z-[9999], its own local state.
   Adds nothing to the page until the event fires.
   ================================================================== */

export function SiwdCoinPopup() {
  const [show, setShow] = useState(false)
  const [flip, setFlip] = useState(false)

  useEffect(() => {
    const h = () => setShow(true)
    window.addEventListener('open-siwd-coin', h)
    return () => window.removeEventListener('open-siwd-coin', h)
  }, [])

  // Escape closes the overlay
  useEffect(() => {
    if (!show) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShow(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [show])

  const go = () => {
    if (flip) return
    setFlip(true)
    setTimeout(() => {
      window.open('https://siwdinc.net', '_blank', 'noopener,noreferrer')
      setShow(false)
      setFlip(false)
    }, 800)
  }

  if (!show) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => setShow(false)}
      />
      <button
        type="button"
        onClick={() => setShow(false)}
        aria-label="Close"
        className="absolute top-6 right-6 text-white text-3xl z-10"
      >
        ✕
      </button>
      <div className="relative" style={{ perspective: '1200px' }}>
        <div
          onClick={go}
          className="relative w-[340px] h-[340px] cursor-pointer transition-transform duration-[800ms]"
          style={{
            transformStyle: 'preserve-3d',
            transform: flip ? 'rotateY(720deg) scale(1.15)' : 'rotateY(0deg) scale(1)',
          }}
        >
          <div
            className="absolute inset-0 rounded-full overflow-hidden border-[6px] border-[#d4af37] shadow-[0_0_60px_rgba(212,175,55,0.6)]"
            style={{ backfaceVisibility: 'hidden' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/siwd-coin.png"
              alt="coin"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div
            className="absolute inset-0 rounded-full overflow-hidden border-[6px] border-[#d4af37]"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/siwd-coin.png"
              alt="coin back"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        <p className="text-center text-amber-300 mt-6 text-sm">
          CLICK COIN TO FLIP → SIWDINC.NET
        </p>
      </div>
    </div>
  )
}
