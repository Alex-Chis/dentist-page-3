
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AppointmentFormSection } from "@/components/sections/appointment-form-section"; // Reuse form section
import { Phone, Clock } from "lucide-react";

export default function BookAppointmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
         {/* Booking Hero Section */}
        <section className="bg-secondary py-16 md:py-24 text-center">
          <div className="container mx-auto max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Book Your Appointment</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              Use the form below to request an appointment, or call us directly for immediate assistance.
            </p>
             <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-foreground">
                <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="h-5 w-5" />
                  <span>(123) 456-7890</span>
                </a>
                <div className="flex items-center gap-2">
                   <Clock className="h-5 w-5" />
                   <span>Mon-Fri: 9am - 5pm</span>
                </div>
             </div>
          </div>
        </section>

        {/* Reuse Appointment Form Section */}
        {/* The form already has its own padding/background, so no extra section needed */}
        <AppointmentFormSection />

         {/* Optional: Add info about what to expect */}
         <section className="py-16 bg-background">
             <div className="container mx-auto max-w-3xl px-4 text-center">
                 <h2 className="text-2xl font-semibold mb-4">What Happens Next?</h2>
                 <p className="text-muted-foreground">
                     After submitting the form, our scheduling coordinator will contact you within one business day via your preferred method (email or phone) to confirm your appointment time and gather any additional necessary information. We look forward to seeing you!
                 </p>
             </div>
         </section>

      </main>
      <Footer />
    </div>
  );
}
