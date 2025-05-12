
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Map Embed */}
          <div className="h-[300px] md:h-[400px] lg:h-full w-full rounded-lg overflow-hidden shadow-md">
             {/* Replace with your actual map embed code */}
             <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.710707684949!2d-118.3940196847807!3d34.05190498060587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b9a4e3c7c6a9%3A0x1a0a0b3c0b3a0a0b!2sBeverly%20Hills%20City%20Hall!5e0!3m2!1sen!2sus!4v1678886400000!5m2!1sen!2sus"
               width="100%"
               height="100%"
               style={{ border: 0 }}
               allowFullScreen={true}
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
               title="Smile Hub Location"
               aria-label="Map showing Smile Hub location"
             ></iframe>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <ul className="space-y-5 text-lg">
              <li className="flex items-start gap-4">
                <MapPin className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                <div>
                   <span className="font-medium">Address</span><br/>
                   <span className="text-muted-foreground">123 Dental St, Smileville, CA 90210</span>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="h-6 w-6 flex-shrink-0 text-primary" />
                 <div>
                   <span className="font-medium">Phone</span><br/>
                   <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">(123) 456-7890</a>
                 </div>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-6 w-6 flex-shrink-0 text-primary" />
                 <div>
                    <span className="font-medium">Email</span><br/>
                    <a href="mailto:info@smilehub.com" className="text-muted-foreground hover:text-primary">info@smilehub.com</a>
                 </div>
              </li>
               <li className="flex items-start gap-4">
                <Clock className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                 <div>
                    <span className="font-medium">Hours</span><br/>
                    <span className="text-muted-foreground">Mon - Fri: 9:00 AM - 5:00 PM</span><br/>
                    <span className="text-muted-foreground">Sat: 10:00 AM - 2:00 PM (By appointment)</span><br/>
                    <span className="text-muted-foreground">Sun: Closed</span>
                 </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
