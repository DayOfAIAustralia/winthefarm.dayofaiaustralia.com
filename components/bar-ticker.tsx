"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TEAMS } from "@/lib/competition";

const left = TEAMS.newSolution;
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
    <div className="w-full max-w-4xl relative">
      <div className="flex h-14 w-full overflow-hidden rounded-none border-black border-2 relative">
        {/* Left bar: Team New Solution */}
        <div
          className="flex items-center justify-start p-2 bg-teal-600 transition-all duration-1000 ease-out"
          style={{ width: `${leftPercentage}%` }}
        >
          <div className="flex items-center gap-1 rounded-full bg-black/30 pl-1 pr-3 py-1 md:hidden">
            <Image
              src={left.imageSrc}
              alt={left.imageAlt}
              width={100}
              height={100}
              className="rounded-full w-10 h-10"
            />
            <div className="text-white font-black leading-tight">
              <span className="hidden sm:inline text-sm uppercase">{left.shortName} </span>
              <span className="text-lg">{Math.round(leftPercentage)}%</span>
            </div>
          </div>
        </div>

        {/* Right bar: Team Quality Feed */}
        <div className="flex-1 flex items-center justify-end p-2 bg-purple-600 transition-all duration-1000 ease-out">
          <div className="flex items-center gap-1 rounded-full bg-black/30 pr-1 pl-3 py-1 md:hidden">
            <div className="text-white font-black leading-tight text-right">
              <span className="text-lg">{Math.round(rightPercentage)}% </span>
              <span className="hidden sm:inline text-sm uppercase">{right.shortName} </span>
            </div>
            <Image
              src={right.imageSrc}
              alt={right.imageAlt}
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
        <span className="text-teal-900 font-black uppercase text-sm">
          {left.shortName}
        </span>
        <span className="text-purple-900 font-black uppercase text-sm">
          {right.shortName}
        </span>
      </div>

      {/* Desktop Labels */}
      <div className="hidden mb-2 md:flex justify-between items-center text-lg font-semibold uppercase">
        <div className="text-teal-900 font-black flex items-center gap-2">
          <Image
            src={left.imageSrc}
            alt={left.imageAlt}
            width={100}
            height={100}
            className="rounded"
          />
          <span className="text-md md:text-xl">{left.shortName}</span>
          <span className="text-lg md:text-2xl">
            {Math.round(leftPercentage)}%
          </span>
        </div>

        <div className="text-purple-900 font-black flex items-center gap-2">
          <span className="text-lg md:text-2xl">
            {Math.round(rightPercentage)}%
          </span>
          <span className="text-md md:text-xl">{right.shortName}</span>
          <Image
            src={right.imageSrc}
            alt={right.imageAlt}
            width={100}
            height={100}
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
};
