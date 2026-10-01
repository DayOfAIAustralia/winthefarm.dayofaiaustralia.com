import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { TEAMS } from "@/lib/competition";

const debateCards = [
  {
    ...TEAMS.emuLabs,
    position:
      "Spend this season's resources on the new supplement, promising faster, bigger results.",
    theCase: [
      "Shinier feathers, more energy, fewer sick days",
      "Costs the same as the premium feed everyone was going to buy anyway",
      "Backed by results (though nobody's asked whose results)",
      "The old way is slow. Why wait?",
      "A smarter way to spend the same money",
    ],
    style: "Bold and fast-moving.",
  },
  {
    ...TEAMS.qualityFeed,
    position:
      "Spend this season's resources on premium, proven high quality feed for the whole community.",
    theCase: [
      "Reliable nutrition every animal can count on",
      "A track record that's proven and reliable",
      "No mystery ingredients, no fine print",
      "Full transparency on where the community's money goes",
      "Slow and steady wins the winter",
    ],
    style: "Steady and traditional.",
  },
];

export function Debate() {
  return (
    <section aria-labelledby="setting-debate-title" className="mt-10 sm:mt-12">
      <h2 id="setting-debate-title" className="text-2xl leading-tight text-gray-900 sm:text-3xl">
        Get across the debate
      </h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2 md:gap-x-8 md:gap-y-0">
        {debateCards.map((team) => (
          <Card
            key={team.name}
            className="gap-0 rounded-xl border-gray-200 bg-white p-6 shadow-none sm:p-8 md:row-span-4 md:grid md:grid-rows-subgrid"
          >
            <CardHeader className="block px-0 pb-6">
              <Image
                src={team.imageSrc}
                alt={team.imageAlt}
                width={640}
                height={360}
                sizes="(min-width: 1152px) 480px, (min-width: 768px) calc((100vw - 144px) / 2), calc(100vw - 96px)"
                className="mb-6 h-auto w-full rounded-lg"
              />
              <h3 className="text-2xl leading-tight text-gray-900 sm:text-3xl">
                {team.name}
              </h3>
              <p className="mt-3 text-base leading-7 text-gray-600">
                &ldquo;{team.slogan}&rdquo;
              </p>
            </CardHeader>

            <CardContent className="px-0 pb-6">
              <h4 className="mb-2 font-sans text-base font-semibold text-gray-900">Their proposal</h4>
              <p className="text-base leading-7 text-gray-700">{team.position}</p>
            </CardContent>

            <CardContent className="px-0 pb-6">
              <h4 className="mb-3 font-sans text-base font-semibold text-gray-900">Their case</h4>
              <ul className="list-disc space-y-2 pl-5 text-base leading-7 text-gray-700 marker:text-gray-400">
                {team.theCase.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </CardContent>

            <CardFooter className="block border-t border-gray-200 px-0 [.border-t]:pt-5">
              <h4 className="mb-1 font-sans text-base font-semibold text-gray-900">Their approach</h4>
              <p className="text-base leading-7 text-gray-600">{team.style}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
