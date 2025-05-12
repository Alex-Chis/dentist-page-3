
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingCTA } from "@/components/floating-cta";
import { CookieConsent } from "@/components/cookie-consent";

// Import Sections
import { HeroSection } from "@/components/sections/hero-section";
import { FeatureSection } from "@/components/sections/feature-section";
import { TeamSection } from "@/components/sections/team-section";
import { TestimonialSection } from "@/components/sections/testimonial-section";
import { CtaSection } from "@/components/sections/cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import { ContactSection } from "@/components/sections/contact-section";
import { AppointmentFormSection } from "@/components/sections/appointment-form-section";


export default function Home() {
  return (
     <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeatureSection />
        <TeamSection />
        <TestimonialSection />
        <CtaSection />
        <FaqSection />
        <ContactSection />
        <AppointmentFormSection />
      </main>
      <Footer />
      <FloatingCTA />
      <CookieConsent />
    </div>
  );
}
