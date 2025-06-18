import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const images = [
  { src: "/assets/brands/odesk.png", alt: "Odesk Solutions" },
  { src: "/assets/brands/orizin.png", alt: "Orizin IT Solutions" },
  { src: "/assets/brands/dhi.png", alt: "Darul Hunafa Institute" },
  { src: "/assets/brands/fineapple.png", alt: "FineApple" },
  { src: "/assets/brands/biogen.png", alt: "BioGen Researchers" },
  { src: "/assets/brands/touhidcodes.png", alt: "Touhid Codes" },
  { src: "/assets/brands/omey.png", alt: "Omey Systems" },
];

const FeaturedBrands: React.FC = () => {
  return (
    <section className="bg-gray-100">
      <div className="py-6 lg:py-10">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-gray-800">
            Featured Clients and Brands
          </h2>
          <p className="text-gray-600 mt-2">
            Highlighting collaborations in building effective digital designs &
            product materials for renowned brands
          </p>
        </div>

        {/* Marquee for logos */}
        <Marquee speed={50} gradient={false}>
          <div className="flex items-center gap-16">
            {images.map((brand, idx) => (
              <div key={idx} className="h-20 flex items-center relative w-36">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default FeaturedBrands;
