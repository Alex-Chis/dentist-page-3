
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: '#', icon: Facebook, label: 'Facebook' },
    { href: '#', icon: Twitter, label: 'Twitter' },
    { href: '#', icon: Instagram, label: 'Instagram' },
    { href: '#', icon: Linkedin, label: 'LinkedIn' },
  ];

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  const serviceLinks = [
    { href: '/services#cleaning', label: 'Dental Cleaning' },
    { href: '/services#whitening', label: 'Teeth Whitening' },
    { href: '/services#implants', label: 'Implants' },
    { href: '/services#orthodontics', label: 'Orthodontics' },
  ];

  const resourceLinks = [
    { href: '/blog', label: 'Blog' },
    { href: '/faq', label: 'FAQs' },
    { href: '/patient-forms', label: 'Patient Forms' },
  ];

  const LinkItem = ({ href, label }: { href: string; label: string }) => (
    <li>
      <Link href={href} className="relative text-primary-foreground/80 hover:text-primary-foreground transition-colors nav-link-underline">
        {label}
      </Link>
    </li>
  );

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-6xl px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => <LinkItem key={link.href} {...link} />)}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map(link => <LinkItem key={link.href} {...link} />)}
               <li><Link href="/services" className="relative text-primary-foreground/80 hover:text-primary-foreground transition-colors nav-link-underline font-medium">View All</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Resources</h4>
            <ul className="space-y-2">
              {resourceLinks.map(link => <LinkItem key={link.href} {...link} />)}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0" />
                <span>123 Dental St, Smileville, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-primary-foreground">(123) 456-7890</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@smilehub.com" className="hover:text-primary-foreground">info@smilehub.com</a>
              </li>
            </ul>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map(link => (
                <Link key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <link.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-primary-foreground/80 text-center md:text-left">
            © {currentYear} Smile Hub. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm">
            <Link href="/privacy-policy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Privacy Policy</Link>
            <span className="text-primary-foreground/50">|</span>
            <Link href="/terms-of-service" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
