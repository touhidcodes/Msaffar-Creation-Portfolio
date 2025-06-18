"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { TProjectData } from "@/types";

const ProjectPage = () => {
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
    <div className="bg-white min-h-screen py-12 px-4 md:px-16">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-gray-900">
          All Branding Projects
        </h1>
        <p className="text-gray-700 mt-4">
          A complete list of all my branding, logo design, and creative
          projects, highlighting design excellence and brand identity.
        </p>
      </section>

      {loading ? (
        <div className="flex justify-center items-center h-[300px]">
          <Loader2 className="w-10 h-10 animate-spin" />
        </div>
      ) : projects.length === 0 ? (
        <p className="text-center text-red-600">Projects not found...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 relative group"
            >
              {/* Featured Badge */}
              {project.isFeatured && (
                <div className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full z-10 shadow-md">
                  Featured
                </div>
              )}

              {/* Swiper Images */}
              <div className="relative w-full h-64">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                  slidesPerView={1}
                  className="h-full"
                  pagination={{ clickable: true }}
                >
                  {project?.images.map((image: string, index: number) => (
                    <SwiperSlide key={index}>
                      <div className="relative w-full h-64">
                        <Image
                          src={image}
                          alt={`Slide ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Project Info */}
              <div className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">
                      {project.name}
                    </h2>
                    {project.client && (
                      <p className="text-sm text-gray-500 mt-1">
                        Client: {project.client}
                      </p>
                    )}
                    {project.projectDuration && (
                      <p className="text-sm text-gray-500">
                        Duration: {project.projectDuration} months
                      </p>
                    )}
                  </div>
                  <Link
                    href={`/projects/${project.id}`}
                    className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full transition"
                    title="View Details"
                  >
                    <ArrowUpRight className="w-5 h-5 text-black" />
                  </Link>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                {project.description && (
                  <p className="text-sm text-gray-700 line-clamp-2">
                    {project.description}
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
