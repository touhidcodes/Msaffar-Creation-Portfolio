import { z, ZodObject } from "zod";

export const loginValidationSchema: ZodObject<{
  email: z.ZodString;
  password: z.ZodString;
}> = z.object({
  email: z.string({
    required_error: "Please enter a valid email address!",
  }),
  password: z.string().min(6, "Must be at least 6 characters"),
});
