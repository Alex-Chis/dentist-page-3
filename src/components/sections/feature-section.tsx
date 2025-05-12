
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Stethoscope, HeartPulse, SmilePlus, Users } from 'lucide-react'; // Example icons

const features = [
  {
    icon: Stethoscope,
    title: "Expert Checkups",
    description: "Comprehensive dental examinations using the latest technology.",
    data_ai_hint: "dental checkup"
  },
  {
    icon: HeartPulse,
    title: "Painless Procedures",
    description: "Advanced techniques for comfortable and stress-free treatments.",
    data_ai_hint: "dental comfort"
  },
  {
    icon: SmilePlus,
    title: "Cosmetic Dentistry",
    description: "Enhance your smile with whitening, veneers, and more.",
    data_ai_hint: "cosmetic dentistry"
  },
   {
    icon: Users,
    title: "Family Care",
    description: "Dental services for all ages, from children to seniors.",
    data_ai_hint: "family dental"
  },
];

export function FeatureSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Smile Hub?</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="text-center transition-all duration-300 hover:shadow-lg hover:border-primary hover:-translate-y-2 flex flex-col">
              <CardHeader className="items-center pb-4">
                <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
                   <feature.icon className="h-10 w-10" data-ai-hint={feature.data_ai_hint} />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
