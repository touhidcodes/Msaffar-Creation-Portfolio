import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { recentWorks } from "@/data/Data";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const MyWork = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 md:px-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        My Recent Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentWorks.map((work) => (
          <Card key={work.id} className="bg-white shadow-lg rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-semibold">
                {work.name}
              </CardTitle>
            </CardHeader>
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

            <CardContent>
              <p className="text-gray-600">{work.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
