"use client";

import { Button } from "@/components/ui/button";
import { BarTicker } from "./bar-ticker";
import { COMPETITION_NAME, REGISTER_URL } from "@/lib/competition";

export function CompetitionIntro() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          The ultimate
          <span className="text-red-700"> health information</span> challenge
        </h2>
        <dl className="mx-auto my-8 grid max-w-6xl divide-y divide-amber-200 border-y border-amber-200 bg-amber-50 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          <div className="px-4 py-5 sm:px-6 sm:py-6">
            <dt className="text-base font-extrabold uppercase tracking-wide text-gray-700 sm:text-lg">
              Lesson available
            </dt>
            <dd className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
              <time dateTime="2026-10-05">Monday 5 October, 2026</time>
            </dd>
            <dd className="mt-2 text-lg text-gray-600">For registered teachers</dd>
          </div>
          <div className="px-4 py-5 sm:px-6 sm:py-6">
            <dt className="text-base font-extrabold uppercase tracking-wide text-gray-700 sm:text-lg">
              Teach the lesson
            </dt>
            <dd className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
              <time dateTime="2026-10-26">26</time>–<time dateTime="2026-10-30">30 October, 2026</time>
            </dd>
            <dd className="mt-2 text-lg text-gray-600">During Media Literacy Week</dd>
          </div>
          <div className="px-4 py-5 sm:px-6 sm:py-6">
            <dt className="text-base font-extrabold uppercase tracking-wide text-gray-700 sm:text-lg">
              Competition runs
            </dt>
            <dd className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
              <time dateTime="2026-11-02">2</time>–<time dateTime="2026-11-13">13 November, 2026</time>
            </dd>
          </div>
        </dl>
        <div className="flex justify-center">
          <BarTicker />
        </div>

        <p className="text-base leading-6 text-center max-w-3xl mx-auto my-8 text-balance">
          <span className="block">Can your students tell what&apos;s real in an era of deepfakes and viral disinformation?</span>
          <span className="block">Join {COMPETITION_NAME}, a national competition for students in Years&nbsp;7&#8209;10, exploring media and health literacy, and the impact of AI.</span>
          <span className="block">In this hands-on challenge, student teams create and deploy their own AI agents in a simulated debate about health literacy, learning to combat dis- and misinformation, analyse information and sources, and understand what shapes public opinion.</span>
        </p>
        <div className="flex justify-center">
          <Button
            asChild
            size="lg"
            className="bg-[#FDC300] hover:bg-yellow-500 text-black rounded-none text-lg px-8 py-3"
          >
            <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
              JOIN THE COMPETITION
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
