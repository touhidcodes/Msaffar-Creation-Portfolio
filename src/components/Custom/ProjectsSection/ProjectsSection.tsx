"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import Button from "@/components/ui/Button/Button";
import { recentProjects } from "@/data/demoData";
import Masonry from "react-masonry-css";

const ProjectsSection = () => {
  const columnBreakpoints = {
    default: 4,
    1024: 3,
    768: 2,
    500: 1,
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 md:px-16">
      <div className="px-6 py-6 lg:py-10 lg:px-0">
        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            My Works: Highlighted Branding Projects
          </h1>
          <p className="text-gray-800 mt-4">
            Explore my top Logo & Branding projects highlighting innovative
            designs and intuitive solutions crafted for renowned brands
          </p>
        </section>

        {/* Masonry Gallery */}
        <Masonry
          breakpointCols={columnBreakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {recentProjects.slice(0, 8).map((project, index) => {
            const isVertical = [1, 3, 4, 6].includes(index); // Choose which ones are vertical
            const aspectClass = isVertical ? "aspect-[3/4]" : "aspect-[4/3]";

            return (
              <div
                key={`${project._id}-${index}`}
                className={`group relative w-full ${aspectClass} overflow-hidden rounded-xl mb-4`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={project.images[0]}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4 rounded-xl">
                  <div className="text-white text-xl font-bold drop-shadow-md">
                    {project.name}
                  </div>
                  <div className="mt-3">
                    <Link href={`/projects/${project._id}`}>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 text-black rounded-full hover:bg-white transition-all shadow-md backdrop-blur-sm cursor-pointer">
                        <span className="text-sm font-medium">
                          View Details
                        </span>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </Masonry>

        {/* More Button */}
        <div className="mt-10 mb-5 lg:mb-0 flex justify-center">
          <Button
            text="Explore More"
            link="/projects"
            className="w-fit bg-black border-2 border-black text-white font-bold py-3 px-5 rounded-lg hover:border-2 hover:border-black hover:bg-white hover:text-black transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
