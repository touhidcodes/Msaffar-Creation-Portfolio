"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { recentProjects } from "@/data/demoData";

const ProjectPage = () => {
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

      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {recentProjects.map((project) => (
          <Card
            key={project.id}
            className="bg-white rounded-2xl overflow-hidden p-4 shadow-lg relative"
          >
            <div className="relative w-full h-64 rounded-xl overflow-hidden">
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
              <button className="absolute top-3 right-3 bg-white/70 rounded-full p-2"></button>
            </div>
            <div className="flex justify-between items-center mt-4 px-1">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {project.name}
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="text-sm bg-blue-50 text-blue-800 py-1 px-2 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href={`/projects/${project._id}`}
                className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
              >
                <ArrowUpRight className="w-5 h-5 text-black" />
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
