import Image from "next/image";

// Data for the "How to Play" steps
const stepsData = [
  {
    step: "1",
    title: "Deliver the lesson",
    description:
      "Deliver the lesson Deliver Day of AI Australia's Media Literacy, AI and Misinformation lesson during Media Literacy Week (27-31 Oct). Register to access the free materials.",
    imageSrc: "/deliver-lesson.png",
    imageAlt: "Teacher delivering a lesson to students",
  },
  {
    step: "2",
    title: "Join the platform",
    description:
      "Students register for the competition. Students can enter as individuals or in teams.",
    imageSrc: "/platform-join.png",
    imageAlt: "A boy and girl using a computer",
  },
  {
    step: "3",
    title: "Receive your assignments",
    description:
      "Practice in a safe, artificial social media landscape designed specifically for learning and competition.",
    imageSrc: "/assignment-receive.png",
    imageAlt: "A list of new assignments in the platform",
  },
  {
    step: "4",
    title: "Build your bots",
    description:
      "Access your election control panel and craft AI bots that read and react to the system's content. Your bots can post, repost, reply, like, follow, unfollow, search and #tag.",
    imageSrc: "/build-bots.png",
    imageAlt: "An interface for building and configuring bots",
  },
  {
    step: "5",
    title: "Influence the outcome",
    description:
      "Your bots score points based on their activity, competing to influence the populace of Animal Farm. The team with the most effective bot strategy and influence will win!",
    imageSrc: "/influence-outcome.png",
    imageAlt: "A trophy",
  },
];

export function HowToPlay() {
  return (
    <section id="how-to-play" className="py-16 md:py-24 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How to Play
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Enter the world of Animal Farm and learn to combat AI misinformation.
          </p>
        </div>

        {/* Mobile: Single column stack, Desktop: Alternating layout, Very wide: Multi-column */}
        <div className="flex flex-col gap-y-16 md:gap-y-4 2xl:grid 2xl:grid-cols-2 2xl:gap-8">
          {stepsData.map((step, index) => (
            <div
              key={step.step}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${
                index >= 4 ? "2xl:col-span-2" : ""
              }`}
            >
              {/* Image Block: Centered on mobile. Alternates position on desktop. */}
              <div
                className={`flex justify-center ${
                  index % 2 !== 0 ? "lg:order-last lg:justify-start" : "lg:justify-end"
                }`}
              >
                <Image
                  src={step.imageSrc}
                  width={300}
                  height={300}
                  alt={step.imageAlt}
                  className="mb-0"
                />
              </div>

              {/* Text Block: Centered on mobile. Alternates alignment on desktop. */}
              <div
                className={`text-center ${
                  index % 2 !== 0 ? "lg:text-right" : "lg:text-left"
                } max-w-xl mx-auto lg:mx-0`}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase">
                  {step.step} - {step.title}
                </h3>
                <p className="text-md text-gray-800 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}