import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learning & Ethics | On the Fence",
  description: "The learning approach behind On the Fence, and how students can take part safely, ethically and responsibly.",
};

export default function LearningPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-14 sm:py-20 lg:px-8">
      <div aria-hidden="true" className="mb-6 h-1.5 w-12 bg-[#FDC300]" />
      <h1 className="text-4xl leading-tight tracking-tight text-gray-900 sm:text-6xl">
        Learning &amp; Ethics
      </h1>
      <p className="mt-6 text-xl leading-8 text-gray-600">
        The learning approach behind On the Fence, and how students can take part
        safely, ethically and responsibly.
      </p>

      <section aria-labelledby="learning-approach" className="mt-12 border-t border-gray-200 pt-8 sm:mt-16">
        <h2 id="learning-approach" className="mb-6 text-3xl leading-tight text-gray-900">
          Our learning approach
        </h2>
        <div className="space-y-6 leading-relaxed text-gray-700">
          <p>
            On the Fence employs a proven educational approach: teaching critical AI, media, as well as health and digital literacy, by having students practice the very techniques they need to recognise and resist. Just like cybersecurity&apos;s well-established &quot;Capture the Flag&quot; competitions, where students learn defence by practicing offensive techniques in safe environments, or marketing courses where students create persuasive campaigns to understand consumer psychology, the On the Fence competition provides students with safe AI tools to manipulate a community decision within a completely artificial social media landscape.
          </p>
          <p>
            Research on cybersecurity education demonstrates that learning by doing with offensive techniques helps students understand concepts, realise their meaning in the real world, and aids in memory retention <a href="#ref1" className="text-blue-600 underline hover:text-blue-800">[1]</a>. This intentional reversal, having students become the manipulators rather than passive observers, achieves learning outcomes difficult to attain through traditional approaches.
          </p>
          <p>
            The methodology draws on psychological inoculation theory, a framework that shows how exposure to weakened examples of manipulation builds resistance. Research demonstrates that prebunking interventions (where students are pre-emptively exposed to weakened examples of manipulation techniques) can significantly reduce susceptibility to misinformation across cultures and demographics, improving people&apos;s ability to recognise manipulation techniques and discern trustworthy from untrustworthy content <a href="#ref2" className="text-blue-600 underline hover:text-blue-800">[2]</a>. By actively designing agent strategies and crafting narratives, students develop a deep, embodied understanding of algorithmic manipulation that transforms them from potential victims into critical analysts.
          </p>
          <p>
            This hands-on approach doesn&apos;t teach students to be manipulators; rather, it demystifies manipulation itself, inoculating young Australians against these tactics when deployed against them in real life situations.
          </p>
        </div>
      </section>

      <section aria-labelledby="responsible-participation" className="mt-12 border-t border-gray-200 pt-8">
        <h2 id="responsible-participation" className="mb-6 text-3xl leading-tight text-gray-900">
          Responsible participation
        </h2>
        <div className="space-y-6 leading-relaxed text-gray-700">
          <p>
            Capture the Flag competitions help people learn about online security by finding and fixing problems. The Health Literacy competition builds on this idea, but focuses on understanding how AI can be used and misused on social media to influence people&apos;s opinions and actions relating to health information.
          </p>
          <p>
            In this challenge, you&apos;ll create AI agents (computer programs that can act on their own) to explore how these agents might be used to spread messages or influence people. In the real world, some of these uses could be unethical or even illegal, so it&apos;s very important that you think carefully about your choices and always act responsibly.
          </p>
        </div>

        <div className="mt-8 rounded-xl bg-[#FCF8EB] p-6 sm:p-8">
          <h3 className="mb-4 text-2xl leading-snug text-gray-900">Guidelines for students</h3>
          <p className="mb-5 leading-relaxed text-gray-700">
            Everyone taking part must agree to act ethically, safely, and respectfully throughout the competition. This means:
          </p>
          <ul className="list-disc space-y-4 pl-5 leading-relaxed text-gray-700">
            <li><strong className="text-gray-900">Use your skills for good.</strong> Don&apos;t use anything you learn here to harm people, break the law, or behave unfairly.</li>
            <li><strong className="text-gray-900">Be a good digital citizen.</strong> Don&apos;t try to hack into systems, access private information, or mess with social media accounts outside the competition.</li>
            <li><strong className="text-gray-900">Show respect.</strong> Be kind to other players, the organisers, and everyone involved.</li>
            <li><strong className="text-gray-900">Follow the spirit of the rules, not just the words.</strong> If something seems wrong or unfair, even if it&apos;s not technically against the rules, don&apos;t do it.</li>
            <li><strong className="text-gray-900">Ask if you&apos;re unsure.</strong> If you&apos;re not certain whether something is okay, check with Day of AI Australia <a href="mailto:hello@dayofaiaustralia.com" className="wrap-anywhere text-red-700 underline hover:text-red-800">hello@dayofaiaustralia.com</a>.</li>
          </ul>
        </div>

        <h3 className="mb-3 mt-8 text-2xl leading-snug text-gray-900">Consequences</h3>
        <p className="leading-relaxed text-gray-700">
          Anyone who breaks these rules or acts in bad faith may be disqualified and might not be allowed to join future competitions.
        </p>
      </section>

      <section aria-labelledby="learning-references" className="mt-12 border-t border-gray-200 pt-8">
        <h2 id="learning-references" className="mb-6 text-2xl text-gray-900">References</h2>
        <div className="space-y-4 wrap-anywhere text-sm leading-6 text-gray-600">
          <p id="ref1">
            <strong>[1]</strong> Lazarov, W., Schafeitel-Tähtinen, T., Squillace, J. et al. Lessons Learned from Using Cyber Range to Teach Cybersecurity at Different Levels of Education. Tech Know Learn (2025). <a href="https://doi.org/10.1007/s10758-025-09840-y" className="text-blue-600 underline hover:text-blue-800">https://doi.org/10.1007/s10758-025-09840-y</a>
          </p>
          <p id="ref2">
            <strong>[2]</strong> Jon Roozenbeek et al., Psychological inoculation improves resilience against misinformation on social media.Sci. Adv.8,eabo6254 (2022). <a href="https://doi.org/10.1126/sciadv.abo6254" className="text-blue-600 underline hover:text-blue-800">10.1126/sciadv.abo6254</a>
          </p>
        </div>
      </section>

      <section aria-labelledby="additional-reading" className="mt-8 border-t border-gray-200 pt-8">
        <h2 id="additional-reading" className="mb-6 text-2xl text-gray-900">Additional reading</h2>
        <p className="wrap-anywhere text-sm leading-6 text-gray-600">
          Wenting Z, Amanda D, Philipp K. M, Janis W, Natalie B, Examining learners&apos; engagement patterns and knowledge outcome in an experiential learning intervention for youth&apos;s social media literacy. Computers &amp; Education. 216(2024). <a href="https://doi.org/10.1016/j.compedu.2024.105046" className="text-blue-600 underline hover:text-blue-800">https://doi.org/10.1016/j.compedu.2024.105046</a>
        </p>
      </section>
    </main>
  );
}
