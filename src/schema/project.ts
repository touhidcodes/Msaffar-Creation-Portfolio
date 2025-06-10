import { z } from "zod";

export const createProjectSchema = z.object({
  name: z.string().min(1, "Project name is required"),
  description: z.string().min(1, "Description is required"),
  images: z.string().array().min(1, "At least one image URL is required"),
  tags: z.string().array().min(1, "At least one tag is required"),
  tools: z.string().array().min(1, "At least one tools name is required"),
  isFeatured: z.boolean().optional(),
  binanceProfileUrl: z.string().url().optional(),
  client: z.string().optional(),
  projectDuration: z.string().optional(),
});
