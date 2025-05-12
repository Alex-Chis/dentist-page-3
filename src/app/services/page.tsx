
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, Tooth, Bone, TestTubeDiagonal } from 'lucide-react'; // Example icons
import { AppointmentFormSection } from "@/components/sections/appointment-form-section"; // Reuse form section

const services = [
  {
    id: 'cleaning',
    title: "Dental Cleaning & Checkups",
    description: "Routine cleanings and comprehensive exams to maintain oral health and prevent future issues.",
    icon: Tooth,
    points: ["Plaque & tartar removal", "Polishing", "Oral cancer screening", "Personalized hygiene advice"],
    data_ai_hint: "dental tools clean"
  },
  {
    id: 'whitening',
    title: "Teeth Whitening",
    description: "Brighten your smile with our professional in-office or convenient take-home whitening options.",
    icon: CheckCircle, // Using CheckCircle as a placeholder for sparkle/whitening
    points: ["Safe & effective treatments", "Noticeable results", "Customized trays (take-home)", "Boost confidence"],
    data_ai_hint: "bright smile teeth"
  },
  {
    id: 'implants',
    title: "Dental Implants",
    description: "A permanent solution for missing teeth, restoring function and appearance.",
    icon: Bone, // Represents implant integration
    points: ["Natural look and feel", "Durable & long-lasting", "Improved chewing ability", "Prevents bone loss"],
    data_ai_hint: "dental implant model"
  },
  {
    id: 'orthodontics',
    title: "Orthodontics",
    description: "Straighten teeth and correct bite issues with braces or clear aligners.",
    icon: TestTubeDiagonal, // Placeholder for alignment/braces concept
    points: ["Traditional braces", "Invisalign clear aligners", "Improved aesthetics & function", "Suitable for all ages"],
    data_ai_hint: "braces smile aligners"
  },
   {
    id: 'fillings',
    title: "Fillings & Restorations",
    description: "Repairing cavities and damaged teeth with durable, tooth-colored materials.",
    icon: Tooth, // Reusing Tooth
    points: ["Treats decay", "Restores tooth structure", "Composite (white) fillings", "Crowns & bridges"],
    data_ai_hint: "dental filling procedure"
  },
   {
    id: 'rootcanal',
    title: "Root Canal Therapy",
    description: "Saving infected or severely damaged teeth by treating the inner pulp.",
    icon: Tooth, // Reusing Tooth
    points: ["Relieves severe pain", "Saves natural teeth", "Prevents abscess formation", "Comfortable procedure"],
    data_ai_hint: "tooth root canal"
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
         {/* Services Hero Section */}
        <section className="bg-secondary py-16 md:py-24 text-center">
          <div className="container mx-auto max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Our Dental Services</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Comprehensive care for a healthy, beautiful smile.
            </p>
          </div>
        </section>

         {/* Services Grid Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto max-w-6xl px-4">
             <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card key={service.id} id={service.id} className="flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                     <div className="flex items-center gap-4 mb-3">
                         <div className="rounded-full bg-primary/10 p-3 text-primary">
                            <service.icon className="h-8 w-8" data-ai-hint={service.data_ai_hint}/>
                         </div>
                        <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                     </div>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {service.points.map((point, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Reuse Appointment Form Section */}
        <AppointmentFormSection />
      </main>
      <Footer />
    </div>
  );
}
