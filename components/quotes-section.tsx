import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function QuotesSection() {
  const quotes = [
    {
      text: "45% of medical advice found on TikTok was identified as false or misleading - rising to 67% for alternative medicine content.",
      author: "The Intake (Tebra)",
      title: "2026",
    },
    {
      text: "Nearly two-thirds (63%) of teens get health information from social media.",
      author: "Royal Children's Hospital",
      title: "National Child Health Poll, 2025",
    },
    {
      text: "Scammers have created deepfake videos of some of Australia's most trusted doctors to sell fraudulent products online.",
      author: "Medical Republic",
      title: "2026",
    },
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 ">
        <div className="text-center mb-12 ">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-dm-serif">
            AI agents are being used to manipulate young people
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {quotes.map((quote, index) => (
            <Card
              key={index}
              className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow rounded-none"
            >
              <Quote className="w-8 h-8 text-red-600 mb-4" />
              <blockquote className="text-gray-700 mb-4 italic text-lg leading-6">
                &quot;{quote.text}&quot;
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
