export const COMPETITION_NAME = "On the Fence";
export const LESSON_NAME = "Health Literacy and AI";
export const REGISTER_URL = "https://dayofaiaustralia.com/register-2026/";
// TODO: replace with the 2026 lesson page once Day of AI Australia publishes it.
export const LESSON_URL =
  "https://dayofaiaustralia.com/lessons/additional-lesson-media-literacy-week/";
export const TOWN_NAME = "Coolabah Creek";
export const PLATFORM_NAME = "GumDrop";

export const TEAMS = {
  emuLabs: {
    name: "EmuLabs SuperHealth",
    shortName: "EmuLabs SuperHealth",
    slogan: "Better Results, Faster.",
    imageSrc: "/story/emulabs.webp",
    imageAlt: "EmuLabs SuperHealth: a sheep, snake and emu",
    colors: {
      bar: "bg-[#E74043]",
      bg: "bg-[#E74043]/5",
      border: "border-[#E74043]/30",
      text: "text-[#A51D20]",
    },
  },
  qualityFeed: {
    name: "Team Quality Feed",
    shortName: "Quality Feed",
    slogan: "Trusted Feed, Healthy Herd.",
    imageSrc: "/story/quality-feed.webp",
    imageAlt: "Team Quality Feed: a wombat, cow and kookaburra",
    colors: {
      bar: "bg-[#8CD5EC]",
      bg: "bg-[#8CD5EC]/10",
      border: "border-[#8CD5EC]",
      text: "text-[#21647A]",
    },
  },
} as const;
