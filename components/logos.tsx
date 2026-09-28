import Image from "next/image";

type PartnerLogo = {
  alt: string;
  src?: string;
  width: number;
  height: number;
};

// Add src paths for the placeholders when the remaining logos are supplied.
const partnerLogoRows: PartnerLogo[][] = [
  [
    {
      src: "/logos/doai-logo-colour.png",
      alt: "Day of AI Australia",
      width: 90,
      height: 112,
    },
    {
      src: "/logos/new-UNSW-logo-png-vertical-crest.png",
      alt: "UNSW Sydney",
      width: 100,
      height: 100,
    },
    { alt: "SHLL", width: 200, height: 100 },
    { alt: "DLCLF", width: 200, height: 100 },
  ],
  [
    { alt: "Sydney Uni", width: 200, height: 100 },
    {
      src: "/logos/unsw-ai-institute.jpg",
      alt: "UNSW AI Institute",
      width: 220,
      height: 100,
    },
    {
      src: "/logos/Logo__IFCYBER_Landscape_Colour Positive (2).png",
      alt: "UNSW Institute for Cyber Security",
      width: 200,
      height: 100,
    },
  ],
];

export const Logos = () => (
  <section className="bg-white py-12 border-t">
    <div className="mx-auto max-w-5xl space-y-6 px-4 sm:space-y-10">
      {partnerLogoRows.map((row, index) => (
        <div
          key={index}
          className={`mx-auto grid items-center gap-3 sm:gap-12 ${
            index === 0 ? "grid-cols-4" : "max-w-3xl grid-cols-3"
          }`}
        >
          {row.map((logo) => (
            <div key={logo.alt} className="flex h-24 min-w-0 items-center justify-center sm:h-32">
              {logo.src ? (
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="h-auto max-h-full w-auto max-w-full object-contain"
                />
              ) : (
                <div className="flex h-20 w-full max-w-[200px] flex-col items-center justify-center gap-1 border border-dashed border-gray-300 bg-gray-50 px-1 text-center sm:h-24 sm:px-3">
                  <span className="text-sm font-semibold text-gray-700 sm:text-base">{logo.alt}</span>
                  <span className="text-[10px] text-gray-500 sm:text-xs">Logo placeholder</span>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  </section>
);
