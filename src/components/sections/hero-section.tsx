
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative w-full h-[calc(100vh-80px)] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
       {/* Background Image */}
      <Image
        src="https://picsum.photos/1600/900"
        alt="Smiling patient at dental clinic"
        layout="fill"
        objectFit="cover"
        quality={80}
        priority
        className="-z-20"
        data-ai-hint="dentist patient smile"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 -z-10" />

      <div className="container mx-auto max-w-3xl px-4 z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Welcome to Smile Hub
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-shadow animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Your smile, our care. Providing exceptional dental services in a comfortable environment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button size="lg" className="rounded-full px-8 py-3 text-lg transition-transform hover:scale-105" asChild>
            <Link href="/book-appointment">Book Appointment</Link>
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-primary transition-colors hover:scale-105" asChild>
             <Link href="/services">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

// Add basic keyframes for animations if not using a library
const animationStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
    opacity: 0; /* Start hidden */
  }
`;

// Inject styles (consider placing in globals.css or layout if preferred)
if (typeof window !== 'undefined') {
  const styleSheet = document.createElement("style")
  styleSheet.type = "text/css"
  styleSheet.innerText = animationStyles
  document.head.appendChild(styleSheet)
}
