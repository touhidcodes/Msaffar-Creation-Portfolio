import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "Building fast, responsive, and scalable websites with modern technologies.",
  },
  {
    title: "UI/UX Design",
    description:
      "Creating stunning and user-friendly interfaces for web and mobile applications.",
  },
  {
    title: "SEO Optimization",
    description:
      "Improving website visibility and ranking to drive more traffic.",
  },
];

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 lg:px-16">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
        <p className="text-gray-600 mt-4">
          We provide top-notch services to help you build, grow, and optimize
          your online presence.
        </p>
      </section>

      {/* Service List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="bg-white shadow-lg rounded-2xl p-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-semibold">
                <CheckCircle className="text-blue-600" /> {service.title}
              </CardTitle>
            </CardHeader>
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
        <Button className="mt-4 px-6 py-3 text-lg">Contact Us</Button>
      </div>
    </div>
  );
}
