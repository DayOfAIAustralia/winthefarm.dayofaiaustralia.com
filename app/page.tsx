import { CompetitionIntro } from "@/components/competition-intro";
import { QuotesSection } from "@/components/quotes-section";
import { HowToPlay } from "@/components/how-to-play";
import { TheChallengeSection } from "@/components/the-challenge";
import { ReadySection } from "@/components/ready";
import { Timeline } from "@/components/timeline";
import { Logos } from "@/components/logos";

export default function Home() {
  return (
    <div className="flex-1 bg-white">
      <main>
        <CompetitionIntro />
        <QuotesSection />
        <TheChallengeSection />
        <HowToPlay />
        <Timeline />
        <ReadySection />
      </main>
      <Logos />
    </div>
  );
}
