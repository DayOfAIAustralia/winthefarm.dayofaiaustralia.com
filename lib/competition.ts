export const COMPETITION_NAME = "On the Fence";
export const LESSON_NAME = "Health Literacy and AI";
export const REGISTER_URL = "https://dayofaiaustralia.com/register-2026/";
// TODO: replace with the 2026 lesson page once Day of AI Australia publishes it.
export const LESSON_URL =
  "https://dayofaiaustralia.com/lessons/additional-lesson-media-literacy-week/";
export const TOWN_NAME = "Coolabah Creek";
export const PLATFORM_NAME = "GumDrop";

export const TEAMS = {
  newSolution: {
    name: "Team New Solution",
    shortName: "New Solution",
    slogan: "Better Results, Faster.",
    // TODO: swap for the sheep + supplement artwork when it arrives.
    imageSrc: "/team-new-solution.svg",
    imageAlt: "Team New Solution",
  },
  qualityFeed: {
    name: "Team Quality Feed",
    shortName: "Quality Feed",
    slogan: "Trusted Feed, Healthy Herd.",
    // TODO: swap for the wombat + feed artwork when it arrives.
    imageSrc: "/team-quality-feed.svg",
    imageAlt: "Team Quality Feed",
  },
} as const;
