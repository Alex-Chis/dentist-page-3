import {
  type AppointmentFormValues,
  appointmentFormSchema,
} from "@/lib/schemas/appointment";

// Define a function that returns a text message (no server-side logic)
export function submitAppointmentRequest(data: AppointmentFormValues): string {
  // Validate data against the schema on the client-side
  const validation = appointmentFormSchema.safeParse(data);
  if (!validation.success) {
    return "Invalid data submitted.";
  }

  console.log("Simulating appointment request submission:", validation.data);
  // Simulate network delay
  // Note: In a static context, you cannot use async/await or setTimeout directly
  // Instead, you can handle this with client-side logic
  // Simulate success/failure
  // const success = Math.random() > 0.2; // 80% success rate
  const success = true; // Always succeed for demo

  if (success) {
    return "Appointment request submitted successfully! We will contact you shortly.";
  } else {
    return "Failed to submit request. Please try again later or call us.";
  }
}
