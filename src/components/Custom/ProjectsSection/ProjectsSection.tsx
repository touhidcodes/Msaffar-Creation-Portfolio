"use client";

import { Card } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";
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

        {/* Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {recentProjects.slice(0, 3).map((project) => (
            <Card
              key={project._id}
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
                  {project?.images.map((image, index) => (
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
                    {project.tags.map((tag, index) => (
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

        {/* <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}
        >
          <Masonry gutter="16px">
            {recentProjects.map((project) =>
              project.images.map((img, index) => {
                const aspectClass = getRandomAspectClass();
                return (
                  <div
                    key={`${project._id}-${index}`}
                    className={`group rounded-xl overflow-hidden relative w-full ${aspectClass} max-w-[260px] mx-auto`}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={img}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl"
                      />
                    </div>
                    // Hover Overlay
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-3">
                      <div className="text-white text-sm font-semibold">
                        {project.name}
                      </div>
                      <Link
                        href={`/projects/${project._id}`}
                        className="mt-2 w-fit bg-white text-black p-1 rounded-full hover:bg-gray-200"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                );
              })
            )}
          </Masonry>
        </ResponsiveMasonry> */}

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
