import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function EthicsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Competition Ethics</h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Our Commitment to AI Safety and Responsible Use</h2>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Ethical Guidelines for Students</h2>
              <h3 className="text-xl font-bold mb-3">Health Literacy – Competition Rules and Expectations</h3>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">About the competition:</h4>
                <p className="mb-4 leading-relaxed">
                  Capture the Flag competitions help people learn about online security by finding and fixing problems. The Health Literacy competition builds on this idea, but focuses on understanding how AI can be used and misused on social media to influence people&apos;s opinions and actions relating to health information.
                </p>
                <p className="mb-4 leading-relaxed">
                  In this challenge, you&apos;ll create AI agents (computer programs that can act on their own) to explore how these agents might be used to spread messages or influence people. In the real world, some of these uses could be unethical or even illegal, so it&apos;s very important that you think carefully about your choices and always act responsibly.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Acting Ethically and Responsibly</h4>
                <p className="mb-3">Everyone taking part must agree to act ethically, safely, and respectfully throughout the competition. This means:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Use your skills for good.</strong> Don&apos;t use anything you learn here to harm people, break the law, or behave unfairly.</li>
                  <li><strong>Be a good digital citizen.</strong> Don&apos;t try to hack into systems, access private information, or mess with social media accounts outside the competition.</li>
                  <li><strong>Show respect.</strong> Be kind to other players, the organisers, and everyone involved.</li>
                  <li><strong>Follow the spirit of the rules, not just the words.</strong> If something seems wrong or unfair, even if it&apos;s not technically against the rules, don&apos;t do it.</li>
                  <li><strong>Ask if you&apos;re unsure.</strong> If you&apos;re not certain whether something is okay, check with Day of AI Australia <a href="mailto:hello@dayofaiaustralia.com" className="text-red-600 hover:text-red-700 underline">hello@dayofaiaustralia.com</a>.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3">Consequences</h4>
                <p className="leading-relaxed">
                  Anyone who breaks these rules or acts in bad faith may be disqualified and might not be allowed to join future competitions.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
