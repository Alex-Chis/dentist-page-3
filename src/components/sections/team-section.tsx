
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Dr. Evelyn Reed",
    title: "Lead Dentist",
    avatar: "https://picsum.photos/120/120?random=1",
    bio: "Dr. Reed has over 15 years of experience in general and cosmetic dentistry, dedicated to providing personalized care.",
    data_ai_hint: "dentist portrait professional"
  },
  {
    name: "Dr. Samuel Chen",
    title: "Orthodontist",
    avatar: "https://picsum.photos/120/120?random=2",
    bio: "Specializing in braces and clear aligners, Dr. Chen creates beautiful, healthy smiles for patients of all ages.",
    data_ai_hint: "orthodontist portrait friendly"
  },
  {
    name: "Maria Garcia",
    title: "Hygienist",
    avatar: "https://picsum.photos/120/120?random=3",
    bio: "Maria is passionate about patient education and preventative care, ensuring optimal oral health.",
     data_ai_hint: "hygienist portrait smiling"
  },
  {
    name: "David Miller",
    title: "Office Manager",
    avatar: "https://picsum.photos/120/120?random=4",
    bio: "David keeps the clinic running smoothly, focusing on patient comfort and efficient scheduling.",
    data_ai_hint: "manager portrait welcoming"
  },
];

export function TeamSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meet Our Caring Team</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <Popover key={index}>
              <PopoverTrigger asChild>
                <Card className="group cursor-pointer overflow-hidden text-center transition-shadow hover:shadow-xl">
                  <CardContent className="p-6 flex flex-col items-center">
                    <Avatar className="h-32 w-32 mb-4 border-4 border-transparent group-hover:border-primary transition-colors duration-300">
                      <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.data_ai_hint} />
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <h4 className="text-xl font-semibold mb-1">{member.name}</h4>
                    <p className="text-sm text-primary font-medium">{member.title}</p>
                    <Button variant="link" size="sm" className="mt-2 text-muted-foreground group-hover:text-primary transition-colors">View Bio</Button>
                  </CardContent>
                </Card>
              </PopoverTrigger>
              <PopoverContent className="w-64 p-4" side="bottom" align="center">
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </PopoverContent>
            </Popover>
          ))}
        </div>
      </div>
    </section>
  );
}
