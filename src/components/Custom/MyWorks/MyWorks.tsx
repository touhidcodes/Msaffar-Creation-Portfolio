import { demoWorkData } from "@/data/Data";
import React from "react";

const MyWork = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 md:px-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        My Recent Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {demoWorkData.map((work) => (
          <div
            key={work.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {work.title}
              </h3>
              <p className="text-gray-600 mt-2">{work.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {work.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-sm bg-blue-100 text-blue-800 py-1 px-2 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={work.link}
                className="inline-block mt-6 bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded hover:bg-blue-700 transition-colors"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
