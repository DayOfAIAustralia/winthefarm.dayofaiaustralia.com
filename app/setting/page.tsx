import { SettingHeader } from "@/components/setting-page/setting-header";
import { StoryWalkthrough } from "@/components/setting-page/story-walkthrough";
import { Debate } from "@/components/setting-page/debate";

export default function SettingPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-8 sm:py-10 lg:px-8">
      <SettingHeader />
      <StoryWalkthrough />
      <Debate />
    </main>
  );
}
