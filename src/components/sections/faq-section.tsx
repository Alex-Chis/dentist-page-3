
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DentalFaqAi } from "@/components/dental-faq-ai"; // Import the AI component

const faqs = [
  {
    question: "How often should I visit the dentist?",
    answer: "We recommend visiting the dentist for a check-up and cleaning every six months. Regular visits help prevent dental problems and maintain optimal oral health."
  },
  {
    question: "What should I do in a dental emergency?",
    answer: "If you have a dental emergency, such as severe pain, swelling, or a knocked-out tooth, please contact our office immediately at (123) 456-7890. We offer emergency appointments."
  },
  {
    question: "Do you accept dental insurance?",
    answer: "Yes, we accept most major dental insurance plans. Please contact our office with your insurance information, and we'll be happy to verify your coverage."
  },
  {
    question: "What teeth whitening options do you offer?",
    answer: "We offer both in-office professional teeth whitening for immediate results and take-home whitening kits for convenience. Schedule a consultation to discuss the best option for you."
  },
];

export function FaqSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
           {/* Static FAQs */}
           <div>
            <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">Common Questions</h3>
             <Accordion type="single" collapsible className="w-full space-y-4">
               {faqs.map((faq, index) => (
                 <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg overflow-hidden shadow-sm bg-card">
                   <AccordionTrigger className="px-6 py-4 text-left hover:no-underline font-medium">
                     {faq.question}
                   </AccordionTrigger>
                   <AccordionContent className="px-6 pb-4 pt-0 bg-secondary/50">
                     <p className="text-muted-foreground">{faq.answer}</p>
                   </AccordionContent>
                 </AccordionItem>
               ))}
             </Accordion>
           </div>

            {/* AI Powered FAQ */}
            <div>
               <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">Ask Our AI Assistant</h3>
               <DentalFaqAi />
            </div>
        </div>
      </div>
    </section>
  );
}
