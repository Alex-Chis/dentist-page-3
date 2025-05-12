
'use server';

import * as z from "zod";

// Define the schema and type here as well, so it's self-contained
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


// Define a server action placeholder (replace with actual logic)
export async function submitAppointmentRequest(data: AppointmentFormValues): Promise<{ success: boolean; message: string }> {
  console.log("Simulating appointment request submission:", data);
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Simulate success/failure
  // const success = Math.random() > 0.2; // 80% success rate
  const success = true; // Always succeed for demo

  if (success) {
    return { success: true, message: "Appointment request submitted successfully! We will contact you shortly." };
  } else {
    return { success: false, message: "Failed to submit request. Please try again later or call us." };
  }
}
