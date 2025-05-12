
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TeamSection } from "@/components/sections/team-section"; // Reuse team section
import { CtaSection } from "@/components/sections/cta-section"; // Reuse CTA section
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* About Hero Section */}
        <section className="bg-secondary py-16 md:py-24 text-center">
          <div className="container mx-auto max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">About Smile Hub</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Dedicated to providing exceptional dental care with a personal touch.
            </p>
          </div>
        </section>

        {/* Our Mission/Values Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-4xl px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-muted-foreground mb-4">
                  At Smile Hub, our mission is to provide comprehensive, high-quality dental care in a comfortable and welcoming environment. We are committed to helping our patients achieve and maintain optimal oral health and beautiful smiles for a lifetime.
                </p>
                <p className="text-muted-foreground">
                  We believe in patient education, preventative care, and utilizing the latest dental technologies to ensure the best possible outcomes. Your comfort and trust are our top priorities.
                </p>
             </div>
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="https://picsum.photos/600/400?random=9"
                    alt="Interior of the Smile Hub dental clinic"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 hover:scale-105"
                    data-ai-hint="dental clinic interior"
                  />
              </div>
          </div>
        </section>

        {/* Reuse Team Section */}
        <TeamSection />

        {/* Reuse CTA Section */}
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
