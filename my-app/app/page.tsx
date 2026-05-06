
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [entered, setEntered] = useState(false);

  const handleEnter = () => {
    if (entered) return;
    setEntered(true);
    setTimeout(() => router.push('/about'), 1000);
  };

  return (
    <div
      className="flex flex-1 items-center justify-center bg-[#1a1a2e] min-h-screen cursor-pointer"
      onClick={handleEnter}
    >
      {/* Rings + button */}
      <div className={`flex flex-col items-center gap-5 transition-all duration-700 ${entered ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        <button
          aria-label="Enter"
          className="relative flex items-center justify-center w-16 h-16"
          onClick={(e) => { e.stopPropagation(); handleEnter(); }}
        >
          {/* Pulsing rings */}
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="absolute rounded-full border border-white/20 animate-ping"
              style={{
                width: `${64 + i * 32}px`,
                height: `${64 + i * 32}px`,
                animationDelay: `${i * 0.55}s`,
                animationDuration: '2.2s',
              }}
            />
          ))}
          {/* Core circle */}
          <span className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full border border-white/30 bg-white/5 hover:bg-white/10 transition-colors">
            <span
              className="border-t-[7px] border-b-[7px] border-l-[12px] border-transparent border-l-white/80 ml-1"
            />
          </span>
        </button>

        <span className="text-xs tracking-[0.18em] uppercase text-white/50 font-light animate-pulse">
          Interact
        </span>
      </div>

      {/* "Entering" message after click */}
      {entered && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs tracking-[0.2em] uppercase text-white/40 font-light">
            entering world…
          </span>
        </div>
      )}
    </div>
  );
}