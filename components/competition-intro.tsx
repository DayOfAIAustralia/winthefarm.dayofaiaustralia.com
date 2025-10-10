"use client";

import { Button } from "@/components/ui/button"
import { BarTicker } from "./bar-ticker";
import { useEffect, useState } from "react";

export function CompetitionIntro() {
  const [daysRemaining, setDaysRemaining] = useState<number | null>(null);

  useEffect(() => {
    const calculateDays = () => {
      const launchDate = new Date('2025-10-13T00:00:00+11:00'); // Sydney time
      const now = new Date();
      const diff = launchDate.getTime() - now.getTime();
      const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
      setDaysRemaining(days > 0 ? days : 0);
    };

    calculateDays();
    const interval = setInterval(calculateDays, 86400000); // Update daily
    return () => clearInterval(interval);
  }, [])

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          The ultimate
          <span className="text-red-700"> election</span> challenge
        </h2>
        <div className="pb-6">
          <span className="text-gray-600 text-sm ">
            <span className="block">Lesson available to registered teachers Monday 13 October, 2025</span>
            <span className="block">Teach the lesson during Media Literacy Week, 27-31 October, 2025</span>
            {daysRemaining !== null && daysRemaining > 0 && (
              <span className="block mt-1 font-semibold text-red-600">
                {daysRemaining} {daysRemaining === 1 ? 'day' : 'days'} to go
              </span>
            )}
          </span>
        </div>
        <div className="flex justify-center">
          <BarTicker />
        </div>

        <p className="text-base leading-6 text-center max-w-3xl mx-auto my-8 text-balance">
          Can your students tell what&apos;s real in an era of deepfakes and viral misinformation? Join Win the Farm, a national competition exploring the intersection of AI, media literacy, and elections. In this hands-on challenge, student teams create and deploy their own AI agents in a simulated election, learning to combat disinformation, analyse media bias, and strategically shape public opinion.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-[#FDC300] hover:bg-yellow-500 text-black rounded-none text-lg px-8 py-3"
          >
            JOIN THE COMPETITION
          </Button>
        </div>
      </div>
    </section>
  );
}
