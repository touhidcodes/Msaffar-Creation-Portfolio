// components/HeroSection.js

import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/path/to/your/image.jpg" // Replace with your image path
            alt="Hero Image"
            width={600}
            height={400}
            className="rounded-lg shadow-2xl"
          />
        </div>

        {/* Left Side - Text */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-5xl font-bold">Bring Your Vision to Life</h1>
          <p className="py-6">
            We create stunning digital experiences that help you connect with
            your audience, grow your brand, and make a lasting impact. Let’s
            build something great together.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
