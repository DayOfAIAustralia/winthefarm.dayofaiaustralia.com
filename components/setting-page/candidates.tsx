import Image from "next/image";

const candidatesData = [
  {
    name: "Hetty",
    party: "Party: Animal Resistance",
    imageSrc: "/hetty-square.png",
    slogan: "Together, We Build a Better Farm.",
    background: [
      "Hetty is a laying hen best known for leading the great protest against Napoleon's demand that the hens surrender 400 eggs each week to be sold for grain. The demonstration came at a high cost—nine hens lost their lives in the struggle. Inspired by Snowball's ideals before his exile, Hetty fights for fairness, freedom, and the right of every animal to have a voice.",
      "Fiery and determined, she's unafraid to challenge Napoleon's tyranny and speak out against injustice. Though relatively inexperienced and not as polished a speaker as Snowball, Hetty's courage and conviction make her a powerful force for change. A passionate defender of animal rights, she's not afraid to ruffle feathers to bring democracy back to the farm."
    ],
    style: "Outspoken reformer",
    promises: [
      "Education for empowerment, including free reading lessons",
      "Four day work week",
      "Food security for farm animals",
      "Equality and fair distribution of resources",
      "Freedom and voice for every animal",
    ],
    persona: "A newcomer to politics, Hetty is a passionate voice for all animals.",
    colors: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-800",
      slogan: "text-blue-700",
    }
  },
  {
    name: "Napoleon",
    party: "Party: Pig Directorate",
    imageSrc: "/napoleon-square.png",
    slogan: "One Farm, One Vision, One Leader.",
    background: [
      "Napoleon the pig is a powerful and strategic leader who has guided Animal Farm through times of challenge and change. A master of organisation and control, he believes that strength, unity, and discipline are the keys to lasting success. Under his leadership, the farm has grown more structured and productive than ever before.",
      "Confident and commanding, Napoleon presents himself as the protector of progress and stability. He values order above all else and expects loyalty from every animal. Though his critics accuse him of tyranny, Napoleon insists that his firm rule is necessary to keep the farm safe, prosperous, and strong. To his supporters, he is not just a leader—but the very foundation of Animal Farm's future."
    ],
    style: "Hard-right firebrand",
    promises: [
      "Increased trade with humans to drive economic growth",
      "Ambitious public works projects to increase productivity",
      "Strong commitment to security and policing",
      "Control of information to protect the truth",
      "Reward through loyalty",
    ],
    persona: "A polished, confident, ruthless executive.",
    colors: {
      bg: "bg-red-50",
      border: "border-red-200",
      text: "text-red-800",
      slogan: "text-red-700",
    }
  }
];

export function Candidates() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center">Meet the Candidates</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {candidatesData.map((candidate) => (
          <div 
            key={candidate.name} 
            className={`p-6 md:p-8 rounded-lg shadow-sm border-2 ${candidate.colors.bg} ${candidate.colors.border}`}
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              <Image 
                src={candidate.imageSrc} 
                alt={candidate.name} 
                width={64} height={64} 
                className="rounded-full flex-shrink-0"
              />
              <div>
                <h3 className={`text-3xl font-bold ${candidate.colors.text}`}>{candidate.name}</h3>
                <p className="text-lg font-semibold text-gray-600">{candidate.party}</p>
              </div>
            </div>

            {/* Slogan */}
            <p className={`text-xl font-bold ${candidate.colors.slogan} mb-6`}>
              {candidate.slogan}
            </p>

            {/* Main */}
            <div className="space-y-4 text-gray-800">
              <div className="space-y-3">
                {candidate.background.map((paragraph, index) => (
                  <p key={index}>
                    {index === 0 && <span className="font-bold">Background: </span>}
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Style */}
              <p><span className="font-bold">Style: </span>{candidate.style}</p>
              
              {/* Promises */}
              <div>
                <p className="font-bold mb-1">Promises:</p>
                <ul className="list-none space-y-1 pl-4">
                  {candidate.promises.map((promise) => (
                    <li key={promise} className="relative before:content-['▸'] before:absolute before:left-[-1em] before:text-gray-400">
                      {promise}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Persona */}
              <p><span className="font-bold">Persona: </span>{candidate.persona}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}