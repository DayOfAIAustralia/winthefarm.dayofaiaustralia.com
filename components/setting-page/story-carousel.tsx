"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { CarouselApi } from "@/components/ui/carousel";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const storyData = [
  {
    type: 'intro',
    description: "You may be familiar with the story of Animal Farm. It's a famous allegory by George Orwell, where the characters and events are symbols for real people and historical moments. The farm represents Russia during the Russian Revolution of 1917.",
  },
  {
    imageSrc: "/story/1-majors-speech.png",
    imageAlt: "Major's Vision",
    title: "Major's Vision",
    description: "The story begins on Manor Farm, a neglected place run by Mr. Jones, where the animals are overworked and miserable until an old pig, Major, inspires a dream of rebellion.",
  },
  {
    imageSrc: "/story/2-animals-revolt.png",
    imageAlt: "The Animals Revolt",
    title: "The Animals Revolt",
    description: "That dream catches fire. Fed up with neglect, the animals successfully revolt, kicking Mr. Jones off the property for good. They rename it \"Animal Farm\" and establish their core principles: the Seven Commandments, with the most important being, \"All animals are equal.\" In our world, they add a crucial eighth commandment: \"The leader of Animal Farm must be elected by the animals,\" to safeguard their future.",
  },
  {
    imageSrc: "/story/3-snowball.png",
    imageAlt: "A Farm Divided",
    title: "A Farm Divided",
    description: "Now Snowball is a charismatic visionary with innovative ideas, like a windmill to modernize the farm. Napoleon is a quiet schemer, building his power behind the scenes and arguing for a focus on immediate needs. The farm becomes split between two camps.",
  },
  {
    imageSrc: "/story/4-napoleon.png",
    imageAlt: "Napoleon Seizes Power",
    title: "Napoleon Seizes Power",
    description: "Their rivalry comes to a head during the vote on the windmill. Just as Snowball wins the debate, Napoleon unleashes nine vicious dogs that chase Snowball off the farm forever. Napoleon immediately seizes control and uses his slick-talking PR pig, Squealer, to convince everyone that Snowball was a traitor from the start.",
  },
  {
    imageSrc: "/story/6-battle.png",
    imageAlt: "Hetty the hen stands against Napoleon",
    title: "A Surprising Challenger",
    description: "And this is where our story begins. The idealist has been violently chased away, and Napoleon intends to rule as a dictator. But he didn't count on the eighth commandment. As the time for the first election approaches, a courageous hen, Hetty, stands against him as a candidate for leader.",
  },
  {
    type: 'outro',
    description: "That's where you come in. Can you sway the story? Supporting either Hetty or Napoleon, you'll create an AI bot to engage in this Animal Farm world and have its citizens vote for your candidate... The fate of the revolution rests on your strategy. Can you Win the Farm?",
  }
];

export function StoryCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
    return () => { api.off("select", () => {}); };
  }, [api]);

  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center">The Story of Animal Farm</h2>
      <div className="relative">
        <Carousel setApi={setApi} className="w-full max-w-5xl mx-auto" opts={{ loop: true }}>
          <CarouselContent className="h-[500px] md:h-[450px]">
            {storyData.map((slide, index) => (
                <CarouselItem key={index} className="h-full">
                    <div className="p-1 h-full flex flex-col">
                    {/* Text Only Slides */}
                    {slide.type && (
                        <div className={`h-full flex flex-col flex-grow items-center justify-center text-center p-8 md:p-12 rounded-lg shadow-md border ${
                        slide.type === 'intro' ? 'bg-white border-gray-200' : 'bg-red-50 border-red-200'
                        }`}>
                        <h3 className={`text-2xl font-bold mb-4 ${slide.type === 'outro' && 'text-red-800'}`}>
                            {slide.type === 'intro' ? "It Started with a Dream..." : "Now, It's Your Turn"}
                        </h3>
                        <p className={`text-lg leading-relaxed max-w-2xl ${slide.type === 'intro' ? 'text-gray-700' : 'text-gray-800'}`}>{slide.description}</p>
                        </div>
                    )}

                    {/* Image Slides */}
                    {!slide.type && (
                        <div className="bg-white h-full flex flex-col md:flex-row rounded-lg shadow-md border border-gray-200 overflow-hidden">
                            <div className="w-full md:w-1/2 flex-shrink-0 bg-white flex items-center justify-center rounded-lg">
                            <Image 
                                src={slide.imageSrc!} 
                                alt={slide.imageAlt!} 
                                width={500} 
                                height={450}
                                className="w-full h-full object-contain"
                            />
                            </div>
                            <div className="p-6 flex flex-col justify-center flex-grow md:w-1/2">
                            <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                            <p className="text-base md:text-lg leading-relaxed text-gray-700">
                                {slide.description}
                            </p>
                            </div>
                        </div>
                    )}
                    </div>
                </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex h-14 w-14 -left-4 md:-left-16 bg-black/30 hover:bg-black/50 text-white border-none" />
          <CarouselNext className="hidden sm:flex h-14 w-14 -right-4 md:-right-16 bg-black/30 hover:bg-black/50 text-white border-none" />
        </Carousel>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${current === index ? 'w-6 bg-gray-900' : 'bg-gray-400'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}