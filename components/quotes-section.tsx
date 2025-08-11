import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function QuotesSection() {
  const quotes = [
    {
      text: "During a federal election in Australia, it is reasonable to expect that there could be AI used in election communication... to mislead voters.",
      author: "Australian Electoral Commission",
      title: "AI and Elections",
    },
    {
      text: "On X alone, 10,000 bot accounts rapidly posted tens of thousands of messages of pro-Kremlin content attributed to US and European celebrities.",
      author: "Dr Jake Renzella, Dr Vlada Rozova",
      title: "The Dead Internet Theory",
    },
    {
      text: "This scale of the influence is significant. Some reports have even found that nearly half of all internet traffic in 2022 was made by bots",
      author: "Imperva",
      title: "2023 Bad Bot Report",
    },
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 ">
        <div className="text-center mb-12 ">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-dm-serif">
            AI bots are being used to manipulate elections
          </h2>
          {/* <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            How AI can interfere with people and elections
          </p> */}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {quotes.map((quote, index) => (
            <Card
              key={index}
              className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow rounded-none"
            >
              <Quote className="w-8 h-8 text-red-600 mb-4" />
              <blockquote className="text-gray-700 mb-4 italic text-lg leading-6">
                "{quote.text}"
              </blockquote>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{quote.author}</p>
                <p className="text-sm text-gray-600">{quote.title}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
