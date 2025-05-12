
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactSection } from "@/components/sections/contact-section"; // Reuse contact section
import { AppointmentFormSection } from "@/components/sections/appointment-form-section"; // Reuse form section

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
         {/* Contact Hero Section */}
        <section className="bg-secondary py-16 md:py-24 text-center">
          <div className="container mx-auto max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Contact Us</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              We're here to help! Reach out to us with any questions or to schedule your visit.
            </p>
          </div>
        </section>

        {/* Reuse Contact Section (Map & Details) */}
        <ContactSection />

        {/* Reuse Appointment Form Section */}
        <AppointmentFormSection />

      </main>
      <Footer />
    </div>
  );
}
