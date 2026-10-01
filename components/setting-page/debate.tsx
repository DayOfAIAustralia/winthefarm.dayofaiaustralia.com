import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArtworkViewer } from "@/components/setting-page/artwork-viewer";
import { TEAMS } from "@/lib/competition";

const debateCards = [
  {
    ...TEAMS.emuLabs,
    id: "emulabs",
    thumbnail: "/story/emulabs-thumb.webp",
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
    id: "quality-feed",
    thumbnail: "/story/quality-feed-thumb.webp",
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
    <section id="setting-debate" aria-labelledby="setting-debate-title" className="mt-16 border-t border-gray-200 pt-12 sm:mt-20 sm:pt-16">
      <h2 id="setting-debate-title" tabIndex={-1} className="scroll-mt-28 text-3xl leading-tight tracking-tight text-gray-900 outline-none sm:text-4xl">
        Two sides. One decision.
      </h2>
      <Tabs defaultValue="emulabs" className="mt-8 gap-8">
        <TabsList aria-label="Explore the two sides" variant="line" className="grid w-full grid-cols-2 gap-3 border-b border-gray-200 p-0 group-data-[orientation=horizontal]/tabs:h-auto sm:gap-6">
          {debateCards.map((team) => (
            <TabsTrigger key={team.id} value={team.id} className="min-h-20 justify-start gap-3 rounded-none px-1 py-3 text-left whitespace-normal after:bottom-0 after:bg-[#B08700] sm:gap-4 sm:text-base">
              <Image src={team.thumbnail} alt="" width={96} height={54} className="h-auto w-12 rounded-sm sm:w-24" />
              {team.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {debateCards.map((team) => (
          <TabsContent key={team.id} value={team.id} className="data-[state=active]:animate-in data-[state=active]:fade-in-0 motion-reduce:animate-none">
            <div className="grid items-start gap-7 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
              <div>
                <Image
                  src={team.imageSrc}
                  alt={team.imageAlt}
                  width={2400}
                  height={1350}
                  sizes="(min-width: 1280px) 637px, (min-width: 1024px) 567px, calc(100vw - 48px)"
                  className="aspect-video h-auto w-full rounded-xl"
                />
                <div className="mt-2 flex justify-end">
                  <ArtworkViewer image={team.imageSrc} alt={team.imageAlt} title={team.name} />
                </div>
                <p className="mt-3 text-lg font-medium text-gray-700">&ldquo;{team.slogan}&rdquo;</p>
                <p className="mt-1 text-sm text-gray-500">{team.style}</p>
              </div>
              <div>
                <h3 className="text-2xl leading-tight text-gray-900 sm:text-3xl">{team.name}</h3>
                <p className="mt-4 text-base leading-7 text-gray-700">{team.position}</p>
                <h4 className="mt-7 text-xl text-gray-900">Their case</h4>
                <ul className="mt-3 space-y-3 text-base leading-7 text-gray-700">
                  {team.theCase.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-3 size-1.5 shrink-0 rounded-full bg-gray-400" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 pt-8">
        <p className="text-lg text-gray-700">Now it&apos;s your turn to shape the vote.</p>
        <Button asChild className="min-h-11 bg-[#FFC600] text-gray-950 hover:bg-[#FFD43B]">
          <Link href="/how-to-play">See how to play <ArrowRight aria-hidden="true" /></Link>
        </Button>
      </div>
    </section>
  );
}
