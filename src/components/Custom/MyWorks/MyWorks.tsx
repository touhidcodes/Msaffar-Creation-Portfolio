"use client";

import { recentWorks } from "@/data/Data";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const MyWork = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 md:px-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        My Recent Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <SwiperSlide>Slide 3</SwiperSlide>
                  <SwiperSlide>Slide 4</SwiperSlide>
                  <SwiperSlide>Slide 5</SwiperSlide>
                  <SwiperSlide>Slide 6</SwiperSlide>
                  <SwiperSlide>Slide 7</SwiperSlide>
                  <SwiperSlide>Slide 8</SwiperSlide>
                  <SwiperSlide>Slide 9</SwiperSlide>
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
      </div>
    </div>
  );
};

export default MyWork;
