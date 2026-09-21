import Image from "next/image";

// Lockup order per the 2026 brief: DOAI, UNSW, USYD, SHLL, DLCLF, UNSW AI, UNSW IFCYBER.
// TODO: add the University of Sydney, SHLL and DLCLF logos to /public/logos and
// uncomment their entries once the files are supplied.
const partnerLogos = [
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
  // { src: "/logos/usyd.png", alt: "The University of Sydney", width: 200, height: 100 },
  // { src: "/logos/shll.png", alt: "SHLL", width: 200, height: 100 },
  // { src: "/logos/dlclf.png", alt: "DLCLF", width: 200, height: 100 },
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
];

export const Logos = () => (
  <section className="bg-white py-12 border-t">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-center gap-12 flex-wrap">
        {partnerLogos.map((logo) => (
          <Image
            key={logo.src}
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="object-contain"
          />
        ))}
      </div>
    </div>
  </section>
);
