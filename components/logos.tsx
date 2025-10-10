import Image from "next/image";

export const Logos = () => (
  <section className="bg-white py-12 border-t">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center justify-center gap-8">
        {/* Top row - UNSW logos */}
        <div className="flex items-center justify-center gap-12 flex-wrap">
          <Image
            src="/logos/new-UNSW-logo-png-vertical-crest.png"
            alt="UNSW Sydney"
            width={100}
            height={100}
            className="object-contain"
          />
          <Image
            src="/logos/unsw-ai-institute.jpg"
            alt="UNSW AI Institute"
            width={220}
            height={100}
            className="object-contain"
          />
          <Image
            src="/logos/Logo__IFCYBER_Landscape_Colour Positive (2).png"
            alt="UNSW Institute for Cyber Security"
            width={200}
            height={100}
            className="object-contain"
          />
        </div>

        <div className="flex items-center justify-center gap-12 flex-wrap">
          <div className="text-center">
            <div className="flex items-center justify-center gap-12 flex-wrap mb-4">
              <Image
                src="/logos/TDMFOUNDATION_PRIMARYLOGO.png"
                alt="TDM Foundation"
                width={120}
                height={80}
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <p className="text-gray-700 text-sm">
          together with <span className="font-bold">ABC Education</span> and{" "}
          <span className="font-bold">Australian Media Literacy Alliance</span>
        </p>
      </div>
    </div>
  </section>
);
