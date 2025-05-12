"use client";

import { recentWorks } from "@/data/Data";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MyWork = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 md:px-16">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-gray-900">
          My Work: Highlighted Branding Projects
        </h1>
        <p className="text-gray-600 mt-4">
          Explore my top Logo & Branding projects highlighting innovative
          designs and intuitive solutions crafted for renowned brands
        </p>
      </section>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentWorks.map((work) => (
          <div
            key={work.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {work.name}
              </h3>
              <div>
                {" "}
                <Swiper
                  pagination={{
                    dynamicBullets: true,
                  }}
                  // modules={[Pagination]}
                  className="mySwiper"
                  modules={[Autoplay]}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  slidesPerView={1}
                >
                  <SwiperSlide>
                    <div className="relative w-full h-64">
                      <Image
                        src="https://images.unsplash.com/photo-1611443609367-15892f03e715"
                        alt="Slide Image"
                        fill // Makes the image fill the parent container
                        className="object-cover"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>Slide 2</SwiperSlide>
                </Swiper>
              </div>
              <p className="text-gray-600 mt-2">{work.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {work.tags.map((tech, index) => (
                  <span
                    key={index}
                    className="text-sm bg-blue-100 text-blue-800 py-1 px-2 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                // href={work.link}
                className="inline-block mt-6 bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded hover:bg-blue-700 transition-colors"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentWorks.map((work) => (
          <Card key={work.id} className="bg-white shadow-lg rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-800">
                {work.name}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <Swiper
                pagination={{ dynamicBullets: true }}
                modules={[Autoplay]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                slidesPerView={1}
                className="mySwiper"
              >
                {work?.images.map((image, index) => (
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
              <p className="text-gray-600 mt-2">{work.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {work.tags.map((tech, index) => (
                  <span
                    key={index}
                    className="text-sm bg-blue-100 text-blue-800 py-1 px-2 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="#"
                className="inline-block mt-6 bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded hover:bg-blue-700 transition-colors"
              >
                View Project
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
