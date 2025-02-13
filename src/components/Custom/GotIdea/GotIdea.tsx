import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button/Button";

const GotIdea = () => {
  return (
    <section className="py-6 px-6 md:py-10 bg-gray-50 flex flex-col items-center text-center">
      {/* Header Section */}
      <h2 className="text-3xl md:text-6xl font-bold text-gray-800">
        Got an idea?
      </h2>
      <p className="text-xl md:text-3xl font-bold text-gray-800 mt-2">
        Let’s bring it to life!
      </p>

      {/* Image Section */}
      <div className="my-8">
        <Image
          src="/assets/images/idea.png"
          alt="Got an idea"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      {/* Supporting Text */}
      <p className="text-gray-500 max-w-md mx-auto">
        Let’s collaborate and bring your ideas to life! I’ll transform concepts
        into tangible success.
      </p>

      {/* CTA Button */}
      <div className="mt-6 mb-5 lg:mb-0">
        <Button
          text="Let's Talk"
          link="/contact"
          className="w-fit bg-black border-2 border-black text-white font-bold py-3 px-5 rounded-lg hover:border-2 hover:border-black hover:bg-white hover:text-black transition-all duration-300"
        />
      </div>
    </section>
  );
};

export default GotIdea;
