import React from "react";
import Marquee from "react-fast-marquee";

const FeaturedBrands: React.FC = () => {
  return (
    <div className="px-3 py-6 lg:py-10 bg-gray-100">
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
          {/* Replace these logos with actual images */}
          <div className="h-20 flex items-center">
            <img
              src="/assets/brands/odesk.png"
              alt="Odesk Solutions"
              className="h-full object-contain"
            />
          </div>
          <div className="h-20 flex items-center">
            <img
              src="/assets/brands/orizin.png"
              alt="Orizin IT Solutions"
              className="h-full object-contain"
            />
          </div>
          <div className="h-20 flex items-center">
            <img
              src="/assets/brands/dhi.png"
              alt="Darul Hunafa Institute"
              className="h-full object-contain"
            />
          </div>
          <div className="h-20 flex items-center">
            <img
              src="/assets/brands/fineapple.png"
              alt="FineApple"
              className="h-full object-contain"
            />
          </div>
          <div className="h-20 flex items-center">
            <img
              src="/assets/brands/biogen.png"
              alt="BioGen Researchers"
              className="h-full object-contain"
            />
          </div>
          <div className="h-20 flex items-center">
            <img
              src="/assets/brands/touhidcodes.png"
              alt="Touhid Codes"
              className="h-full object-contain"
            />
          </div>
          <div className="h-20 flex items-center">
            <img
              src="/assets/brands/omey.png"
              alt="Omey Systems"
              className="h-full object-contain"
            />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default FeaturedBrands;
