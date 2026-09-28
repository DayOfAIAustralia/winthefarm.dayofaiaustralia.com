import { Credits } from "@/components/credits";
import { Logos } from "@/components/logos";

export default function AboutPage() {
  return (
    <div className="flex-1 bg-white">
      <main>
        <Credits />
        <Logos />
      </main>
    </div>
  );
}
