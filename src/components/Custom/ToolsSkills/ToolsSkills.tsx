import React from "react";
import Image from "next/image";

const ToolsSkills: React.FC = () => {
  return (
    <section className="py-12 relative">
      <div className="container mx-auto text-center">
        {/* Header Section */}
        <h2 className="text-3xl font-bold text-gray-800">
          Tools & Skills for crafting intuitive designs
        </h2>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          I specialize in creating user-centric solutions that align with
          business objectives, drawing from a decade of industry expertise
          across various sectors. I’m currently based in Dubai!
        </p>

        {/* Tools and Face Image */}
        <div className="flex justify-center mt-10">
          <Image
            src="/assets/images/creative.png"
            alt="Tools and Skills"
            width={400}
            height={400}
            className="mx-auto"
          />
        </div>

        {/* Tools and Skills Section */}
        <div className="relative mt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Tools Section */}
            <div className="text-left md:text-right md:pr-12">
              <h3 className="text-lg font-semibold mb-4 border-b-2 border-gray-800 inline-block">
                Tools
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>Adobe Illustrator</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Dimension</li>
                <li>Adobe Xd</li>
                <li>Adobe Acrobat</li>
                <li>Figma</li>
                <li>.......... and more.</li>
              </ul>
            </div>

            {/* Skills Section */}
            <div className="text-left md:pl-12">
              <h3 className="text-lg font-semibold mb-4 border-b-2 border-gray-800 inline-block">
                Skills
              </h3>
              <ul className="text-gray-600 space-y-2">
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
      </div>
    </section>
  );
};

export default ToolsSkills;
