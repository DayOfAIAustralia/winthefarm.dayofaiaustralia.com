import { pageLayoutClassName } from "@/components/page-heading";
import { SettingHeader } from "@/components/setting-page/setting-header";
import { Overview } from "@/components/setting-page/overview";
import { Debate } from "@/components/setting-page/debate";

export default function SettingPage() {
  return (
    <main className={pageLayoutClassName}>
      <SettingHeader />
      <Overview />
      <Debate />
    </main>
  );
}
