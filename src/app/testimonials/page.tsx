
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from 'lucide-react';
import { CtaSection } from "@/components/sections/cta-section";

// Use the same testimonials data as the homepage section for consistency
const testimonials = [
 {
    quote: "The best dental experience I've ever had! The staff is incredibly friendly and professional. My smile has never looked better.",
    name: "Sarah Johnson",
    avatar: "https://picsum.photos/60/60?random=5",
    rating: 5,
    data_ai_hint: "woman smiling happy"
  },
  {
    quote: "Dr. Reed is fantastic. She explained everything clearly and made me feel completely at ease during my procedure.",
    name: "Michael Brown",
    avatar: "https://picsum.photos/60/60?random=6",
    rating: 5,
     data_ai_hint: "man portrait confident"
  },
  {
    quote: "I used to dread going to the dentist, but Smile Hub changed that. The atmosphere is so welcoming and the care is top-notch.",
    name: "Jessica Davis",
    avatar: "https://picsum.photos/60/60?random=7",
    rating: 5,
     data_ai_hint: "person professional casual"
  },
   {
    quote: "The results of my teeth whitening are amazing! Highly recommend their cosmetic services.",
    name: "David Wilson",
    avatar: "https://picsum.photos/60/60?random=8",
    rating: 5,
    data_ai_hint: "man friendly glasses"
  },
   {
    quote: "The orthodontic treatment for my son was seamless. Dr. Chen and his team were wonderful throughout the process.",
    name: "Emily White",
    avatar: "https://picsum.photos/60/60?random=10",
    rating: 5,
    data_ai_hint: "mother smiling friendly"
  },
   {
    quote: "Efficient, clean, and modern clinic. Booking appointments is easy, and they always run on time.",
    name: "Robert Garcia",
    avatar: "https://picsum.photos/60/60?random=11",
    rating: 4,
    data_ai_hint: "man business casual"
  },
];

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
         {/* Testimonials Hero Section */}
        <section className="bg-secondary py-16 md:py-24 text-center">
          <div className="container mx-auto max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Patient Stories</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Hear what our valued patients have to say about their experience at Smile Hub.
            </p>
          </div>
        </section>

        {/* Testimonials Grid Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                 <Card key={index} className="flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow h-full">
                    <CardContent className="flex flex-col items-center text-center p-6 flex-grow">
                       <div className="flex mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'text-accent fill-accent' : 'text-muted-foreground/30'}`} />
                          ))}
                        </div>
                      <p className="text-muted-foreground italic mb-6">"{testimonial.quote}"</p>
                       <div className="flex items-center mt-auto">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.data_ai_hint}/>
                          <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <span className="font-semibold text-foreground">{testimonial.name}</span>
                      </div>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Reuse CTA Section */}
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
