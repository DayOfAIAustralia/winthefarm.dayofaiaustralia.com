"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TEAMS } from "@/lib/competition";

const left = TEAMS.emuLabs;
const right = TEAMS.qualityFeed;

export const BarTicker = () => {
  const [leftPercentage, setLeftPercentage] = useState(50);
  const velocityRef = useRef(0);

  useEffect(() => {
    const CENTER = 50;
    const PULL = 0.18;
    const DAMP = 0.82;
    const NOISE_RANGE = 1.8;
    const MIN = 42;
    const MAX = 58;

    const interval = setInterval(() => {
      setLeftPercentage((prev) => {
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

  const rightPercentage = 100 - leftPercentage;

  return (
    <div className="w-full max-w-4xl">
      <div
        aria-hidden="true"
        className="relative flex h-5 w-full overflow-hidden sm:h-6"
      >
        {/* Left bar: EmuLabs SuperHealth */}
        <div
          className={`${left.colors.bar} transition-[width] duration-1000 ease-out motion-reduce:transition-none`}
          style={{ width: `${leftPercentage}%` }}
        />

        {/* Right bar: Team Quality Feed */}
        <div className={`flex-1 ${right.colors.bar}`} />

        {/* Center win line */}
        <div
          className="pointer-events-none absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-white"
        />
      </div>

      {/* Keep both teams separate from the bar, with the artwork facing inward. */}
      <div className="mt-5 grid grid-cols-2 gap-6 border-b border-gray-200 pb-6 sm:mt-6 sm:gap-10 sm:pb-8">
        <div className="flex min-w-0 flex-col items-start gap-3 text-left sm:flex-row sm:items-center sm:gap-4">
          <Image
            src={left.imageSrc}
            alt={left.imageAlt}
            width={160}
            height={90}
            className="h-auto w-28 flex-none rounded-sm sm:w-32 md:w-40"
          />
          <div className={left.colors.text}>
            <p className="text-xs font-extrabold uppercase tracking-wide sm:text-sm">
              {left.shortName}
            </p>
            <p className="mt-1 text-4xl font-black leading-none tracking-tight tabular-nums md:text-5xl">
              {Math.round(leftPercentage)}<span className="ml-0.5 text-2xl md:text-3xl">%</span>
            </p>
          </div>
        </div>

        <div className="flex min-w-0 flex-col items-end gap-3 text-right sm:flex-row-reverse sm:items-center sm:gap-4">
          <Image
            src={right.imageSrc}
            alt={right.imageAlt}
            width={160}
            height={90}
            className="h-auto w-28 flex-none rounded-sm sm:w-32 md:w-40"
          />
          <div className={right.colors.text}>
            <p className="text-xs font-extrabold uppercase tracking-wide sm:text-sm">
              {right.shortName}
            </p>
            <p className="mt-1 text-4xl font-black leading-none tracking-tight tabular-nums md:text-5xl">
              {Math.round(rightPercentage)}<span className="ml-0.5 text-2xl md:text-3xl">%</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
