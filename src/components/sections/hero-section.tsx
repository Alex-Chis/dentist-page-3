import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

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

      <div className="container mx-auto max-w-4xl px-4 z-10">
        {" "}
        {/* Changed max-w-3xl to max-w-4xl */}
        <h1
          className="text-5xl md:text-7xl font-bold mb-6 text-shadow animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          {" "}
          {/* Changed text size and mb */}
          Welcome to Smile Hub
        </h1>
        <p
          className="text-xl md:text-2xl mb-10 text-shadow animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          {" "}
          {/* Increased mb */}
          Your smile, our care. Providing exceptional dental services in a
          comfortable environment.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <Button
            size="lg"
            className="rounded-full px-8 py-3 text-lg transition-transform hover:scale-105"
            asChild
          >
            <Link href="/book-appointment">Book Appointment</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 py-3 text-lg border-white text-primary hover:bg-white hover:text-primary transition-colors hover:scale-105"
            asChild
          >
            <Link href="/services">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
