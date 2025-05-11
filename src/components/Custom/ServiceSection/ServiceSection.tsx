"use client";

import Button from "@/components/ui/Button/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { servicesData } from "@/data/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

export default function ServiceSection() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 lg:px-16">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-gray-900">My Services</h1>
        <p className="text-gray-600 mt-4">
          We provide top-notch services to help you build, grow, and optimize
          your online presence.
        </p>
      </section>

      {/* Service List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <Card key={index} className="bg-white shadow-lg rounded-2xl p-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-semibold">
                {service.title}
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
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>

            <CardContent>
              <p className="text-gray-600">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call-to-Action */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Ready to get started?
        </h2>
        <p className="text-gray-600 mt-2">
          Let’s discuss how we can help you achieve your goals.
        </p>
        <Button className="mt-4 px-6 py-3 text-lg" text="Contact Us" link="/" />
      </div>
    </div>
  );
}
