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
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const MyProjects = () => {
  // Helper to randomly assign vertical or horizontal layout
  const getRandomAspectClass = () => {
    const isVertical = Math.random() > 0.5;
    return isVertical ? "aspect-[3/4]" : "aspect-[4/3]";
  };

  const aspectRatioClasses = [
    "aspect-[4/3]", // horizontal
    "aspect-[3/4]", // vertical
    "aspect-[16/9]", // wide horizontal
    "aspect-[9/16]", // tall vertical
  ];

  // Fixed aspect layout: mix of horizontal and vertical
  const layoutClasses = [
    "aspect-[4/3]",
    "aspect-[3/4]",
    "aspect-[4/3]",
    "aspect-[3/4]",
    "aspect-[4/3]",
    "aspect-[4/3]",
    "aspect-[3/4]",
    "aspect-[4/3]",
    "aspect-[3/4]",
    "aspect-[4/3]",
  ];

  const staticLayout = [0, 1, 2, 3, 1, 0, 3, 2, 2, 3];

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
        <ResponsiveMasonry
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

                    {/* Hover Overlay */}
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
        </ResponsiveMasonry>

        {/* Static Grid Gallery */}
        <section className="mt-14 max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-4 gap-4">
            {recentProjects.slice(0, 10).map((project, pIndex) =>
              project.images.map((img, index) => {
                const layoutIndex = pIndex % staticLayout.length;
                // const aspectClass =
                //   aspectRatioClasses[staticLayout[layoutIndex]];

                const isVertical = [1, 4, 7].includes(index); // Chosen static indices for vertical layout
                // const aspectClass = isVertical
                //   ? "aspect-[3/4]"
                //   : "aspect-[4/3]";

                const aspectClass = layoutClasses[index % layoutClasses.length];

                return (
                  <div
                    key={`${project._id}-${index}`}
                    className={`group relative rounded-xl overflow-hidden w-full ${aspectClass}`}
                    style={{ maxWidth: "100%" }}
                  >
                    <Image
                      src={img}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl"
                    />

                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-3 rounded-xl">
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
          </div>
        </section>

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

export default MyProjects;
