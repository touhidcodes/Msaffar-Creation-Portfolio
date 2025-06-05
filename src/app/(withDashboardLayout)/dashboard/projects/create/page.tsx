"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Grid,
  ImageIcon,
  TagsIcon,
  UserIcon,
  TimerIcon,
  LinkIcon,
  WrenchIcon,
  StarIcon,
} from "lucide-react";
import FormInput from "@/components/Forms/FormInput";
import FormContainer from "@/components/Forms/FormContainer";

const projectSchema = z.object({
  name: z.string().min(1, "Project name is required"),
  description: z.string().min(1, "Description is required"),
  images: z.string().array().min(1, "At least one image URL is required"),
  tags: z.string().array().optional(),
  tools: z.string().array().optional(),
  isFeatured: z.boolean().default(false),
  binanceProfileUrl: z.string().url().optional(),
  client: z.string().optional(),
  projectDuration: z.string().optional(),
});

export default function CreateProjectPage() {
  const handleSubmit = async (values: any) => {
    console.log("Form submitted:", values);
    // send to API here
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gray-50">
      <div className="w-full max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          🚀 Create New Project
        </h2>

        <FormContainer
          onSubmit={handleSubmit}
          resolver={zodResolver(projectSchema)}
          defaultValues={{
            name: "",
            description: "",
            images: [],
            tags: [],
            tools: [],
            isFeatured: false,
            binanceProfileUrl: "",
            client: "",
            projectDuration: "",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <FormInput
                label="Project Name"
                name="name"
                placeholder="Awesome Project"
                required
                icon={<Grid size={16} className="mr-1" />}
              />
              <div>
                <label className="block mb-1 font-medium flex items-center">
                  <ImageIcon size={16} className="mr-1" /> Description
                </label>
                <Textarea
                  name="description"
                  placeholder="Project description..."
                />
              </div>
              <FormInput
                label="Binance Profile URL"
                name="binanceProfileUrl"
                placeholder="https://..."
                icon={<LinkIcon size={16} className="mr-1" />}
              />
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <FormInput
                label="Client"
                name="client"
                placeholder="Client Name"
                icon={<UserIcon size={16} className="mr-1" />}
              />
              <FormInput
                label="Project Duration"
                name="projectDuration"
                placeholder="e.g. 3 months"
                icon={<TimerIcon size={16} className="mr-1" />}
              />
              <div className="flex items-center gap-2 mt-6">
                <Checkbox id="isFeatured" name="isFeatured" />
                <label
                  htmlFor="isFeatured"
                  className="flex items-center font-medium"
                >
                  <StarIcon size={16} className="mr-1" /> Feature on Homepage
                </label>
              </div>
            </div>

            {/* Full Width Fields */}
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInput
                label="Image URLs (comma separated)"
                name="images"
                placeholder="https://img1, https://img2"
                transform={(val: string) => val.split(",").map((v) => v.trim())}
                icon={<ImageIcon size={16} className="mr-1" />}
              />
              <FormInput
                label="Tags (comma separated)"
                name="tags"
                placeholder="SaaS, AI, Web3"
                transform={(val: string) => val.split(",").map((v) => v.trim())}
                icon={<TagsIcon size={16} className="mr-1" />}
              />
            </div>

            <div className="md:col-span-2">
              <FormInput
                label="Tools Used (comma separated)"
                name="tools"
                placeholder="Next.js, Prisma, Tailwind"
                transform={(val: string) => val.split(",").map((v) => v.trim())}
                icon={<WrenchIcon size={16} className="mr-1" />}
              />
            </div>

            <div className="md:col-span-2">
              <Button type="submit" className="w-full">
                Create Project
              </Button>
            </div>
          </div>
        </FormContainer>
      </div>
    </div>
  );
}
