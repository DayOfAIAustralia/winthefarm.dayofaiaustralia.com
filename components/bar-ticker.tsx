"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export const BarTicker = () => {
  const [hettyPercentage, setHettyPercentage] = useState(50);
  const velocityRef = useRef(0);

  useEffect(() => {
    const CENTER = 50;
    const PULL = 0.18;
    const DAMP = 0.82;
    const NOISE_RANGE = 1.8;
    const MIN = 42;
    const MAX = 58;

    const interval = setInterval(() => {
      setHettyPercentage((prev) => {
        const force = PULL * (CENTER - prev);
        const noise = (Math.random() - 0.5) * 2 * NOISE_RANGE;

        velocityRef.current = DAMP * velocityRef.current + force + noise;
        let next = prev + velocityRef.current;
        if (next < MIN) {
          next = MIN + (MIN - next) * 0.25;
          velocityRef.current *= -0.35;
        } else if (next > MAX) {
          next = MAX - (next - MAX) * 0.25;
          velocityRef.current *= -0.35;
        }

        return next;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const napoleonPercentage = 100 - hettyPercentage;

  return (
    <div className="w-full max-w-4xl relative">
      <div className="flex h-14 w-full overflow-hidden rounded-none border-black border-2 relative">
        {/* Hetty's Bar */}
        <div
          className="flex items-center justify-start p-2 bg-[#3571C0] transition-all duration-1000 ease-out"
          style={{ width: `${hettyPercentage}%` }}
        >
          {/* Mobile Hetty Info */}
          <div className="flex items-center gap-1 rounded-full bg-black/30 pl-1 pr-3 py-1 md:hidden">
            <Image
              src="/hetty-square.png"
              alt="Hetty"
              width={100}
              height={100}
              className="rounded-full w-10 h-10"
            />
            <div className="text-white font-black leading-tight">
              <span className="hidden sm:inline text-sm">HETTY </span>
              <span className="text-lg">{Math.round(hettyPercentage)}%</span>
            </div>
          </div>
        </div>

        {/* Napoleon's Bar */}
        <div className="flex-1 flex items-center justify-end p-2 bg-[#FE5F40] transition-all duration-1000 ease-out">
          {/* Mobile Napoleon Info */}
          <div className="flex items-center gap-1 rounded-full bg-black/30 pr-1 pl-3 py-1 md:hidden">
            <div className="text-white font-black leading-tight text-right">
              <span className="text-lg">{Math.round(napoleonPercentage)}% </span>
              <span className="hidden sm:inline text-sm">NAPOLEON </span>
            </div>
            <Image
              src="/napoleon-square.png"
              alt="Napoleon"
              width={100}
              height={100}
              className="rounded-full w-10 h-10"
            />
          </div>
        </div>

        {/* Center win line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none"
          style={{ left: "50%", transform: "translateX(-50%)" }}
        />
      </div>

      {/* Mobile names below bar */}
      <div className="flex justify-between items-center mt-2 px-1 sm:hidden">
        <span className="text-blue-900 font-black uppercase text-sm">
          Hetty
        </span>
        <span className="text-red-900 font-black uppercase text-sm">
          Napoleon
        </span>
      </div>

      {/* Desktop Labels */}
      <div className="hidden mb-2 md:flex justify-between items-center text-lg font-semibold uppercase">
        <div className="text-blue-900 font-black flex items-center gap-2">
          <Image
            src="/hetty-square.png"
            alt="Hetty"
            width={100}
            height={100}
            className="rounded"
          />
          <span className="text-md md:text-xl">Hetty</span>
          <span className="text-lg md:text-2xl">
            {Math.round(hettyPercentage)}%
          </span>
        </div>

        <div className="text-red-900 font-black flex items-center gap-2">
          <span className="text-lg md:text-2xl">
            {Math.round(napoleonPercentage)}%
          </span>
          <span className="text-md md:text-xl">Napoleon</span>
          <Image
            src="/napoleon-square.png"
            alt="Napoleon"
            width={100}
            height={100}
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
};