import { z } from "zod";

export const createMessageSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Invalid email format"),
  subject: z
    .string()
    .min(1, "Subject is required")
    .max(150, "Subject is too long"),
  message: z
    .string()
    .min(10, "Message should be at least 10 characters long")
    .max(2000, "Message is too long"),
});
