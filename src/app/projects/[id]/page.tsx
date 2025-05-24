"use client";

import { notFound, useParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { LucideCheckCircle, LucideLoader, LucideCircle } from "lucide-react";
import { recentProjects } from "@/data/demoData";

const ProjectDetailsPage = () => {
  const params = useParams();
  const slug = params.id;

  const project = recentProjects.find((p) => p._id === slug);

  if (!project) return notFound();

  const statusIcons = {
    Completed: <LucideCheckCircle className="text-green-600" />,
    Ongoing: <LucideLoader className="animate-spin text-yellow-600" />,
    "In Development": <LucideCircle className="text-blue-600" />,
  };
  return (
    <div className="grid md:grid-cols-2 gap-6 p-6">
      <div>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          className="rounded-2xl shadow-lg overflow-hidden"
        >
          {project.images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={project.name}
                className="w-full h-[400px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Card className="p-4">
        <CardContent>
          <h1 className="text-2xl font-bold mb-2">{project.name}</h1>
          <p className="mb-4 text-muted-foreground">{project.description}</p>

          <div className="mb-3">
            <span className="font-semibold">Timeline:</span> {project.timeline}
          </div>

          <div className="mb-3">
            <span className="font-semibold">Client:</span> {project.client}
          </div>

          <div className="mb-3">
            <span className="font-semibold">Category:</span> {project.category}
          </div>

          <div className="mb-3">
            <span className="font-semibold">Status:</span>{" "}
            <span className="inline-flex items-center gap-1">
              {statusIcons[project.status]} {project.status}
            </span>
          </div>

          <Separator className="my-4" />

          <div className="mb-3">
            <span className="font-semibold">Tags:</span>
            <div className="flex gap-2 mt-1 flex-wrap">
              {project.tags.map((tag, idx) => (
                <Badge key={idx} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mb-3">
            <span className="font-semibold">Tools:</span>
            <div className="flex gap-2 mt-1 flex-wrap">
              {project.tools.map((tool, idx) => (
                <Badge key={idx}>{tool}</Badge>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <a
              href={project.binanceProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View on Behance
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectDetailsPage;
