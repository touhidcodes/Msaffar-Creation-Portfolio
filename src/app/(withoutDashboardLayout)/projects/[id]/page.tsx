"use client";

import { useEffect, useState } from "react";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { LucideArrowLeft } from "lucide-react";
import { TProjectData } from "@/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ProjectDetailsPage = () => {
  const params = useParams();
  const slug = params.id;

  const [project, setProject] = useState<TProjectData | null>(null);
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`/api/projects/${slug}`, {
          cache: "force-cache",
          next: { revalidate: 300 },
        });
        const result = await res.json();
        if (result?.data) {
          setProject(result.data);
          setMainImage(result.data.images[0]);
        } else {
          notFound();
        }
      } catch (error) {
        notFound();
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchProject();
  }, [slug]);

  if (loading)
    return <div className="text-center mt-10 text-lg">Loading project...</div>;

  if (!project) return notFound();

  return (
    <div className="h-screen bg-gray-50 overflow-hidden">
      {/* Top Bar with Back Button */}
      <div className="flex items-center justify-between px-4 md:px-20 pt-6 pb-2">
        <Link
          href="/projects"
          className="flex items-center gap-2 hover:text-gray-800 font-medium"
        >
          <LucideArrowLeft className="w-5 h-5" />
          Back to Projects
        </Link>
      </div>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-2 gap-8 px-4 md:px-20 pb-8 h-[calc(100%-64px)]">
        {/* Left: Images */}
        <div className="flex flex-col h-full">
          {mainImage && (
            <div className="w-full h-[400px] relative rounded-xl overflow-hidden shadow-lg border">
              <Image
                src={mainImage}
                alt="Main Display"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          )}

          {/* Thumbnails */}
          <div className="mt-4 flex gap-2 flex-wrap overflow-y-auto max-h-[40%]">
            {project.images.map((img, i) => (
              <div
                key={i}
                onClick={() => setMainImage(img)}
                className={`relative w-14 h-14 rounded-md border-2 cursor-pointer ${
                  mainImage === img ? "border-blue-500" : "border-gray-200"
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Project Details */}
        <div className="h-full bg-white rounded-xl shadow-sm p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {project.name}
            </h1>
            <p className="text-gray-600 leading-relaxed">
              {project.description}
            </p>

            <div className="space-y-2 mt-4">
              {project.projectDuration && (
                <div>
                  <span className="font-semibold">Duration:</span>{" "}
                  {project.projectDuration} months
                </div>
              )}
              {project.client && (
                <div>
                  <span className="font-semibold">Client:</span>{" "}
                  {project.client}
                </div>
              )}
            </div>

            <Separator className="my-4" />

            {/* Tags */}
            <div className="mb-4">
              <p className="font-semibold mb-1">Tags:</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <Badge key={idx} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <p className="font-semibold mb-1">Tools Used:</p>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, idx) => (
                  <Badge key={idx} variant="outline">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* External Link Button */}
          {project.binanceProfileUrl && (
            <div className="pt-6">
              <Button>
                <Link
                  href={project.binanceProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Behance
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
