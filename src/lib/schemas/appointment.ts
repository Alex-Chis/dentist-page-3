
import * as z from "zod";

// Define the schema and type for the appointment form
export const appointmentFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }).regex(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/, { message: "Invalid phone number format."}), // Basic US phone format
  preferredDate: z.string().optional(), // Optional: Could use date picker and refine validation
  message: z.string().max(500, { message: "Message cannot exceed 500 characters." }).optional(),
});

export type AppointmentFormValues = z.infer<typeof appointmentFormSchema>;
