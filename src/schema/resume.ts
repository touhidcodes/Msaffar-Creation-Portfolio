import { z } from "zod";

export const createResumeSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Resume title is required" })
    .max(100, { message: "Title must be under 100 characters" }),

  url: z
    .string()
    .url({ message: "Must be a valid view URL" })
    .includes("drive.google.com", { message: "Must be a Google Drive link" }),

  downloadUrl: z
    .string()
    .url({ message: "Must be a valid download URL" })
    .includes("drive.google.com", { message: "Must be a Google Drive link" }),
});
