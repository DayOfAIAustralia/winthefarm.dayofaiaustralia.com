import { BookOpen, Scale, Landmark, Users, Rss, HardHat, Drama, Shield, Sun } from "lucide-react";

const aboutData = [
    { icon: Landmark, title: "Government & Politics", description: "Animal Farm operates as a presidential republic with two main parties: the Pig Directorate and the Animal Resistance. Elections are held every four years, and polling is conducted by a non-partisan association." },
    { icon: Users, title: "Demographics", description: "Pigs form the ruling class, horses are the main labour force, and sheep are the largest voting bloc. Hens, cows, and dogs also play crucial roles in a rigid but uneasy social hierarchy." },
    { icon: Scale, title: "Economy", description: "A centrally managed agricultural economy based on grain, milk, and eggs. Public works like the windmill drive growth, but resources are strained and unevenly distributed." },
    { icon: Rss, title: "Media", description: "The media is politically divided. The 'Daily Squealer' is the state-run paper supporting Napoleon, while 'The Farmyard Voice' champions reformist ideals and opposition viewpoints." },
    { icon: HardHat, title: "Infrastructure", description: "Centered around the main barn, with a windmill for power and dirt tracks for transport. Communication relies on the 'Barn Wall' social media platform." },
    { icon: BookOpen, title: "Education", description: "Overseen by the pigs, education focuses on obedience and state-approved principles. While literacy programs exist, knowledge access is unequal, reinforcing the social hierarchy." },
    { icon: Drama, title: "Culture", description: "Culture is built on labour, loyalty, and collective identity, expressed through songs, ceremonies, and storytelling. Art and slogans serve as both propaganda and sources of pride." },
    { icon: Sun, title: "Environment", description: "Management focuses on crop yields and grazing land. However, soil depletion and overwork are ongoing concerns, reflecting the strain on the farm's natural resources." },
    { icon: Shield, title: "Social Media", description: "A majority of the population uses 'Barn Wall', a Twitter-style platform for news, entertainment, and public discourse, making it the key battleground for influence." },
]

export function AboutSection() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center">About Animal Farm</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {aboutData.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <item.icon className="w-6 h-6 text-gray-700 flex-shrink-0" />
              <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}