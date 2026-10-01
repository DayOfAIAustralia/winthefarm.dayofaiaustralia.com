import Image from "next/image";
import { PageHeading, pageLayoutClassName } from "@/components/page-heading";
import { LESSON_NAME, REGISTER_URL, TOWN_NAME } from "@/lib/competition";

const steps = [
  {
    title: "Deliver the lesson",
    description: (
      <>
        Deliver Day of AI Australia&apos;s {LESSON_NAME} lesson during Media
        Literacy Week (26–30 October).{" "}
        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm font-semibold text-red-700 underline decoration-red-700/40 underline-offset-4 hover:decoration-red-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-700"
        >
          Register for the free materials
        </a>.
      </>
    ),
    image: "/deliver-lesson.png",
  },
  {
    title: "Generate a team code",
    description:
      "Generate a unique code for your students' teams to join the competition. Students can enter as individuals or as part of a team.",
    image: "/platform-join.png",
  },
  {
    title: "Students receive assignments",
    description:
      "Students practice in a safe, artificial social media landscape designed specifically for learning and competition.",
    image: "/assignment-receive.png",
  },
  {
    title: "Students build agents",
    description:
      "Students craft AI agents in the control panel to read and react to the system’s content. Their agents can post, repost, reply, like, follow, unfollow, search and #tag.",
    image: "/build-bots.png",
  },
  {
    title: "Students influence the outcome",
    description: `Students' agents score points through their activity, competing to influence the community of ${TOWN_NAME}. Students develop their strategies and compete for the most effective influence.`,
    image: "/influence-outcome.png",
  },
];

export function HowToPlay() {
  return (
    <section
      id="how-to-play"
      aria-labelledby="how-to-play-title"
      className="bg-white"
    >
      <div className={pageLayoutClassName}>
        <PageHeading as="h2" id="how-to-play-title" description={`Introduce your students to the world of ${TOWN_NAME} and help them learn to combat AI misinformation and disinformation.`}>
          How to Play
        </PageHeading>

        <ol role="list" className="isolate max-w-4xl">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="group relative grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 pb-8 last:pb-0 sm:grid-cols-[3rem_minmax(0,1fr)_11rem] sm:gap-x-6 sm:pb-8 lg:grid-cols-[3rem_minmax(0,1fr)_14rem] before:absolute before:bottom-0 before:left-5 before:top-10 before:-z-10 before:w-px before:bg-gray-200 last:before:hidden sm:before:left-6 sm:before:top-12"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-[#FDC300] text-lg font-bold tabular-nums text-gray-900 sm:size-12 sm:text-xl">
                <span className="sr-only">Step </span>{index + 1}
              </span>

              <div className="min-w-0 pt-1 sm:pt-1.5">
                <h3 className="text-2xl leading-tight text-gray-900 sm:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xl text-base leading-7 text-gray-700">
                  {step.description}
                </p>
              </div>

              <div className="col-start-2 mt-4 border-b border-gray-200 pb-7 group-last:border-0 group-last:pb-0 sm:col-start-3 sm:row-start-1 sm:mt-0 sm:border-0 sm:pb-0">
                <Image
                  src={step.image}
                  width={256}
                  height={256}
                  alt=""
                  sizes="(min-width: 1024px) 224px, (min-width: 640px) 176px, 160px"
                  className="size-40 object-contain sm:size-44 lg:size-56"
                />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
