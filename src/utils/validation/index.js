import { z } from 'zod';

// Zod validation schema for home form data
export const homeFormSchema = z.object({
  url: z
    .string()
    .min(1, "URL is required")
    .regex(/^https?:\/\/.+/i, "URL must start with http:// or https://")
    .url("Please enter a valid URL"),
  
  type: z
    .enum(["manual", "auto"], {
      errorMap: () => ({ message: "Test type must be either 'manual' or 'auto'" })
    }),
  
  description: z
    .string()
    .max(500, "Description must not exceed 500 characters")
    .optional()
    .or(z.literal(""))
});