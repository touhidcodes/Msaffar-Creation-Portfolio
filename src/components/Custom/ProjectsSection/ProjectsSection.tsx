"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Loader2 } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import { recentProjects } from "@/data/demoData";
import Masonry from "react-masonry-css";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { TProjectData } from "@/types";
import { truncateText } from "@/lib/utils";

const columnBreakpoints = {
  default: 4,
  1024: 3,
  768: 2,
  500: 1,
};

const ProjectsSection = () => {
  const [projects, setProjects] = useState<TProjectData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects", {
          cache: "force-cache",
          next: { revalidate: 300 },
        });
        const result = await res.json();
        setProjects(result.data);
      } catch (err: any) {
        console.log(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section
      className="bg-gray-100 min-h-screen py-8 px-4 md:px-16"
      id="projects"
    >
      <div className="px-6 lg:py-10 lg:px-0">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            My Works: Highlighted Branding Projects
          </h1>
          <p className="text-gray-800 mt-4">
            Explore my top Logo & Branding projects highlighting innovative
            designs and intuitive solutions crafted for renowned brands
          </p>
        </div>

        {/* Loading/Error */}
        {loading ? (
          <div className="flex justify-center items-center h-[300px]">
            <Loader2 className="w-10 h-10 animate-spin" />
          </div>
        ) : projects.length === 0 ? (
          <p className="text-center text-red-600">Projects not found...</p>
        ) : (
          <>
            <Masonry
              breakpointCols={columnBreakpoints}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {projects.slice(0, 8).map((project, index) => {
                const isVertical = [1, 3, 4, 6].includes(index);
                const aspectClass = isVertical
                  ? "aspect-[3/4]"
                  : "aspect-[4/3]";

                return (
                  <div
                    key={`${project.id}-${index}`}
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

                      {/* Description */}
                      {project.description && (
                        <p className="text-sm text-white/90 mt-1 line-clamp-2">
                          {truncateText(project.description, 70)}
                        </p>
                      )}

                      {/* Tags */}
                      {project.tags && project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {project.tags.slice(0, 3).map((tag, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Meta Info */}
                      <div className="text-xs text-white/70 mt-2">
                        {project.client && (
                          <span>Client: {project.client}</span>
                        )}
                        {project.projectDuration && (
                          <span className="ml-2">
                            Duration: {project.projectDuration}
                          </span>
                        )}
                      </div>

                      {/* Button */}
                      <div className="mt-3">
                        <Link href={`/projects/${project.id}`}>
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
              <Button>
                <Link href="/projects">Explore More</Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
