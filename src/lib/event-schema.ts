import { z } from "zod"

// Define the event schema with Zod for validation
export const eventSchema = z.object({
  title: z
    .string()
    .min(3, {
      message: "Title must be at least 3 characters.",
    })
    .max(100, {
      message: "Title must not exceed 100 characters.",
    }),
  date: z.date({
    required_error: "Event date is required.",
  }),
  location: z
    .string()
    .min(3, {
      message: "Location must be at least 3 characters.",
    })
    .max(100, {
      message: "Location must not exceed 100 characters.",
    }),
  privacy: z.enum(["public", "private"], {
    required_error: "Please select event privacy.",
  }),
  description: z
    .string()
    .min(10, {
      message: "Description must be at least 10 characters.",
    })
    .max(1000, {
      message: "Description must not exceed 1000 characters.",
    }),
  image: z.instanceof(File).optional(),
})

export type EventFormValues = z.infer<typeof eventSchema>
