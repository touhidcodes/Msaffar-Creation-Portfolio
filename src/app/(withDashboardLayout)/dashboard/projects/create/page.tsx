"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
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
import FormSelect from "@/components/Forms/FormSelect";
import FormTextarea from "@/components/Forms/FormTextarea";

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
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
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
            <div className="space-y-4 max-w-xs">
              <FormInput
                label="Project Name"
                name="name"
                placeholder="Awesome Project"
                required
              />
              <FormTextarea
                name="description"
                label="Project Description"
                placeholder="Write a detailed description..."
                required
              />
              <FormInput
                label="Binance Profile URL"
                name="binanceProfileUrl"
                placeholder="https://..."
              />
            </div>

            {/* Right Column */}
            <div className="space-y-4 max-w-xs">
              <UserIcon size={16} className="mr-1" />
              <FormInput
                label="Client"
                name="client"
                placeholder="Client Name"
              />
              <FormInput
                label="Project Duration"
                name="projectDuration"
                placeholder="e.g. 3 months"
              />
              <div className="flex items-center gap-2 mt-6">
                <FormSelect
                  name="isFeatured"
                  label="Project Type"
                  required
                  options={[
                    { label: "Yes", value: true },
                    { label: "No", value: false },
                  ]}
                />
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
