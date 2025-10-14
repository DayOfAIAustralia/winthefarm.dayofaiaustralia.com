import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SettingHeader } from "@/components/setting-page/setting-header";
import { Overview } from "@/components/setting-page/overview";
import { Candidates } from "@/components/setting-page/candidates";
import { StoryCarousel } from "@/components/setting-page/story-carousel";
import { AboutSection } from "@/components/setting-page/about";

export default function SettingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
          <SettingHeader />
          <Overview />
          <StoryCarousel />
          <Candidates />
          <AboutSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}