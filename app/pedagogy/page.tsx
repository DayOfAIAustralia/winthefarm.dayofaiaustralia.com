import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Pedagogy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Pedagogy</h1>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Win the Farm employs a proven educational approach: teaching critical AI, media, and digital literacy by having students practice the very techniques they need to recognise and resist. Just like cybersecurity's well-established "Capture the Flag" competitions, where students learn defence by practicing offensive techniques in safe environments, or marketing courses where students create persuasive campaigns to understand consumer psychology, the Win the Farm competition provides students with safe AI tools to manipulate a fictional election within a completely artificial social media landscape.
            </p>
            
            <p>
              Research on cybersecurity education demonstrates that learning by doing with offensive techniques helps students understand concepts, realise their meaning in the real world, and aids in memory retention <a href="#ref1" className="text-blue-600 hover:text-blue-800 underline">[1]</a>. This intentional reversal, having students become the manipulators rather than passive observers, achieves learning outcomes difficult to attain through traditional approaches.
            </p>
            
            <p>
              The methodology draws on psychological inoculation theory, a framework that shows how exposure to weakened examples of manipulation builds resistance. Research demonstrates that prebunking interventions (where students are pre-emptively exposed to weakened examples of manipulation techniques) can significantly reduce susceptibility to misinformation across cultures and demographics, improving people's ability to recognise manipulation techniques and discern trustworthy from untrustworthy content <a href="#ref2" className="text-blue-600 hover:text-blue-800 underline">[2]</a>. By actively designing bot strategies and crafting narratives, students develop a deep, embodied understanding of algorithmic manipulation that transforms them from potential victims into critical analysts.
            </p>
            
            <p>
              This hands-on approach doesn't teach students to be manipulators; rather, it demystifies manipulation itself, inoculating young Australians against these tactics when deployed against them in real democratic processes.
            </p>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">References</h2>
            <div className="space-y-4 text-sm text-gray-600">
              <p id="ref1">
                <strong>[1]</strong> Lazarov, W., Schafeitel-Tähtinen, T., Squillace, J. et al. Lessons Learned from Using Cyber Range to Teach Cybersecurity at Different Levels of Education. Tech Know Learn (2025). <a href="https://doi.org/10.1007/s10758-025-09840-y" className="text-blue-600 hover:text-blue-800 underline">https://doi.org/10.1007/s10758-025-09840-y</a>
              </p>
              <p id="ref2">
                <strong>[2]</strong> Jon Roozenbeek et al., Psychological inoculation improves resilience against misinformation on social media.Sci. Adv.8,eabo6254 (2022). <a href="https://doi.org/10.1126/sciadv.abo6254" className="text-blue-600 hover:text-blue-800 underline">10.1126/sciadv.abo6254</a>
              </p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Reading</h2>
            <div className="text-sm text-gray-600">
              <p>
                Wenting Z, Amanda D, Philipp K. M, Janis W, Natalie B, Examining learners' engagement patterns and knowledge outcome in an experiential learning intervention for youth's social media literacy. Computers & Education. 216(2024). <a href="https://doi.org/10.1016/j.compedu.2024.105046" className="text-blue-600 hover:text-blue-800 underline">https://doi.org/10.1016/j.compedu.2024.105046</a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
