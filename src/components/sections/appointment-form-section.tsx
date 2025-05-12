
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useState } from "react";

// Define a server action placeholder (replace with actual logic)
async function submitAppointmentRequest(data: AppointmentFormValues): Promise<{ success: boolean; message: string }> {
  "use server";
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


const appointmentFormSchema = z.object({
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

type AppointmentFormValues = z.infer<typeof appointmentFormSchema>;

// Default values
const defaultValues: Partial<AppointmentFormValues> = {
  name: "",
  email: "",
  phone: "",
  preferredDate: "",
  message: "",
};

export function AppointmentFormSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues,
    mode: "onChange",
  });

  async function onSubmit(data: AppointmentFormValues) {
    setIsSubmitting(true);
    try {
      const result = await submitAppointmentRequest(data);
      if (result.success) {
         toast({
           title: "Success!",
           description: result.message,
         });
         form.reset(); // Reset form on success
      } else {
         toast({
           title: "Error",
           description: result.message,
           variant: "destructive",
         });
      }
    } catch (error) {
       console.error("Form submission error:", error);
        toast({
          title: "Error",
          description: "An unexpected error occurred. Please try again.",
          variant: "destructive",
        });
    } finally {
       setIsSubmitting(false);
    }
  }

  return (
    <section className="py-16 md:py-24 bg-secondary border-t">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Request an Appointment</h2>
        <p className="text-center text-muted-foreground mb-10">
          Fill out the form below, and our team will contact you to confirm your appointment details.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-card p-6 md:p-8 rounded-lg shadow-md">
             <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} disabled={isSubmitting}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john.doe@example.com" {...field} disabled={isSubmitting}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="(123) 456-7890" {...field} disabled={isSubmitting}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="preferredDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Date (Optional)</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="e.g., Next Tuesday afternoon" {...field} disabled={isSubmitting}/>
                         {/* Consider replacing with ShadCN DatePicker for better UX */}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
            </div>
             <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us briefly why you'd like an appointment..."
                        className="resize-none"
                        rows={4}
                        {...field}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

            <Button type="submit" size="lg" className="w-full rounded-full" disabled={isSubmitting}>
              {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Request Appointment'}
            </Button>
             <p className="text-xs text-center text-muted-foreground pt-2">
               We'll contact you within 1 business day to confirm availability. For emergencies, please call us directly.
             </p>
          </form>
        </Form>
      </div>
    </section>
  );
}
