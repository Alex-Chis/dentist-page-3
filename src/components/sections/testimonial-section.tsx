
"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from 'lucide-react';

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
];

export function TestimonialSection() {
  const plugin = React.useRef(
      Autoplay({ delay: 5000, stopOnInteraction: true })
    )

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Patients Say</h2>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
           onMouseEnter={plugin.current.stop}
           onMouseLeave={plugin.current.reset}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/1"> {/* Show 1 on smaller, 2 on medium */}
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
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
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex"/>
        </Carousel>
      </div>
    </section>
  );
}
