import React from "react";
import Image from "next/image";

const GotIdea: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 flex flex-col items-center text-center">
      {/* Header Section */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        Got an idea?
      </h2>
      <p className="text-xl md:text-2xl text-gray-600 mt-2">
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
      <div className="mt-6">
        <a
          href="#contact"
          className="bg-gray-900 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-gray-700 transition"
        >
          Let’s Talk
        </a>
      </div>
    </section>
  );
};

export default GotIdea;
