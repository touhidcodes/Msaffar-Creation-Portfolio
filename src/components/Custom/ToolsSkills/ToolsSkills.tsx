import React from "react";
import Image from "next/image";

const ToolsSkills: React.FC = () => {
  return (
    <section className="py-12 relative">
      <div className="container mx-auto text-center">
        {/* Header Section */}
        <h2 className="text-4xl font-bold text-gray-900">
          Tools & Skills for Crafting Intuitive Designs
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          I specialize in creating user-centric solutions that align with
          business objectives, drawing from a decade of industry expertise
          across various sectors. I’m currently based in Bangladesh!
        </p>

        {/* Tools and Skills Layout */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-12 mt-10 relative">
          {/* Left: Tools List */}
          <div className="hidden md:block w-full md:w-1/3 text-right pr-6 self-end">
            <h3 className="text-lg font-semibold border-b-2 border-gray-800 inline-block">
              Tools
            </h3>
            <ul className="text-gray-700 space-y-2 mt-3">
              <li>Adobe Illustrator</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Dimension</li>
              <li>Adobe Xd</li>
              <li>Adobe Acrobat</li>
              <li>Figma</li>
              <li>.......... and more.</li>
            </ul>
          </div>

          {/* Center: Image (Slightly Higher) */}
          <div className="w-full md:w-1/3 flex justify-center relative -mt-6">
            <Image
              src="/assets/images/creative.png"
              alt="Tools and Skills"
              width={350}
              height={350}
              className="mx-auto"
            />
          </div>

          {/* Right: Skills List (Lower Position) */}
          <div className="hidden md:block w-full md:w-1/3 text-left pl-6 self-end">
            <h3 className="text-lg font-semibold border-b-2 border-gray-800 inline-block">
              Skills
            </h3>
            <ul className="text-gray-700 space-y-2 mt-3">
              <li>Mind Mapping</li>
              <li>Critical Thinking</li>
              <li>Problem Solving</li>
              <li>Connecting</li>
              <li>Progressing</li>
              <li>Executing</li>
              <li>.......... and more.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSkills;
