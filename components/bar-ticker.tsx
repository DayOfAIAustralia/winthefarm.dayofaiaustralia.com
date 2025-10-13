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
      <div className="flex h-12 w-full overflow-hidden rounded-none border-black border-2 relative">
        {/* Hetty */}
        <div
          className="flex items-center justify-center bg-[#3571C0] transition-all duration-1000 ease-out"
          style={{ width: `${hettyPercentage}%` }}
        />
        {/* Napoleon fills remainder */}
        <div className="flex-1 flex items-center justify-center bg-[#FE5F40] transition-all duration-1000 ease-out" />

        {/* Center win line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </div>

      <div className="mb-2 flex justify-between items-center text-lg font-semibold uppercase">
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
