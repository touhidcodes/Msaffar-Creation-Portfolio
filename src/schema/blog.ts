import { z } from "zod";

export const createBlogSchema = z.object({
  title: z.string().min(1, "Project name is required"),
  description: z.string().min(1, "Description is required"),
  image: z.string().url("Valid image URL is required"),
  isFeatured: z.boolean().optional(),
  content: z.string().min(1, "Content URL is required"),
});
