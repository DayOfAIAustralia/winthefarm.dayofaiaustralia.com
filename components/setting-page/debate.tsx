import Image from "next/image";
import { TEAMS } from "@/lib/competition";

const debateCards = [
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
    colors: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      text: "text-purple-800",
      slogan: "text-purple-700",
    },
  },
  {
    ...TEAMS.newSolution,
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
    colors: {
      bg: "bg-teal-50",
      border: "border-teal-200",
      text: "text-teal-800",
      slogan: "text-teal-700",
    },
  },
];

export function Debate() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center">Get Across the Debate</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {debateCards.map((team) => (
          <div
            key={team.name}
            className={`p-6 md:p-8 rounded-lg shadow-sm border-2 ${team.colors.bg} ${team.colors.border}`}
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={team.imageSrc}
                alt={team.imageAlt}
                width={64}
                height={64}
                className="rounded-full flex-shrink-0"
              />
              <h3 className={`text-3xl font-bold ${team.colors.text}`}>{team.name}</h3>
            </div>

            {/* Slogan */}
            <p className={`text-xl font-bold ${team.colors.slogan} mb-6`}>
              &quot;{team.slogan}&quot;
            </p>

            <div className="space-y-4 text-gray-800">
              <p>
                <span className="font-bold">Position: </span>
                {team.position}
              </p>

              <div>
                <p className="font-bold mb-1">The Case:</p>
                <ul className="list-none space-y-1 pl-4">
                  {team.theCase.map((point) => (
                    <li
                      key={point}
                      className="relative before:content-['▸'] before:absolute before:left-[-1em] before:text-gray-400"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <p>
                <span className="font-bold">Style: </span>
                {team.style}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
