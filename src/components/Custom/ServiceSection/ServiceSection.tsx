"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { servicesData } from "@/data/serviceData";

export default function ServiceSection() {
  return (
    <div className="min-h-screen py-12 px-6 lg:px-16">
      <div className="px-6 py-6 lg:py-10 lg:px-20">
        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            Comprehensive Services You Will Get
          </h1>
          <p className="text-gray-600 mt-4">
            Explore a range of services tailored to elevate your project. From
            Logo Design to Branding and research to information.
          </p>
        </section>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="bg-white rounded-2xl shadow-sm p-6 text-center hover:shadow-md transition"
              >
                <div className="flex justify-center items-center w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-full">
                  <Icon className="text-green-600 w-6 h-6" />
                </div>
                <CardHeader className="p-0 mb-2">
                  <CardTitle className="text-lg font-semibold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 text-sm text-gray-600">
                  {service.description}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
