
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Your Best Smile?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Schedule your appointment today and experience the difference compassionate, expert dental care can make.
        </p>
        <Button size="lg" className="rounded-full px-10 py-3 text-lg transition-transform hover:scale-105" asChild>
          <Link href="/book-appointment">Schedule Now</Link>
        </Button>
      </div>
    </section>
  );
}
