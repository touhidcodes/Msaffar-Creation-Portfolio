"use client";

import { recentWorks } from "@/data/Data";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, Heart } from "lucide-react";
import Link from "next/link";

const MyWork = () => {
  return (
    <div className="bg-[#c7c0a4] min-h-screen py-8 px-4 md:px-16">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-gray-900">
          My Work: Highlighted Branding Projects
        </h1>
        <p className="text-gray-800 mt-4">
          Explore my top Logo & Branding projects highlighting innovative
          designs and intuitive solutions crafted for renowned brands
        </p>
      </section>

      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {recentWorks.map((work) => (
          <Card
            key={work.id}
            className="bg-white rounded-2xl overflow-hidden p-4 shadow-lg relative"
          >
            <div className="relative w-full h-64 rounded-xl overflow-hidden">
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                slidesPerView={1}
                className="h-full"
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
              <button className="absolute top-3 right-3 bg-white/70 rounded-full p-2">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="flex justify-between items-center mt-4 px-1">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {work.name}
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {work.tags.map((tag, index) => (
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
                href={`/projects/${work.id}`}
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

export default MyWork;
