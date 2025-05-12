
"use client";

import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from '@/lib/utils';

// Inline SVG for Tooth icon
const ToothIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9.34 2.404a1.5 1.5 0 0 1 2.715.086l.513 2.563a1.5 1.5 0 0 0 1.414 1.13h0a1.5 1.5 0 0 1 1.492 1.85L14.5 12.5a1.5 1.5 0 0 1-1.492 1.85h0a1.5 1.5 0 0 0-1.414 1.13l-.513 2.563a1.5 1.5 0 0 1-2.715.086L7.16 14.53a1.5 1.5 0 0 0-1.414-1.13h0A1.5 1.5 0 0 1 4.254 11.55L5.22 7.03A1.5 1.5 0 0 1 6.712 5.18h0a1.5 1.5 0 0 0 1.414-1.13Z" />
    <path d="M16 4a1.5 1.5 0 0 1 1.512 1.845l-.589 3.517a1.5 1.5 0 0 0 0 1.276l.589 3.517A1.5 1.5 0 0 1 16 16" />
    <path d="M18 6a1.5 1.5 0 0 1 1.574 1.772l-.432 2.568a1.5 1.5 0 0 0 0 1.32l.432 2.568A1.5 1.5 0 0 1 18 14" />
  </svg>
);


const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLink = ({ href, label }: { href: string; label: string }) => (
     <SheetClose asChild>
       <Link
         href={href}
         className={cn(
           'relative text-foreground hover:text-primary transition-colors nav-link-underline py-2 text-base font-medium',
           pathname === href && 'active-link-underline text-primary'
         )}
       >
         {label}
       </Link>
     </SheetClose>
   );

  return (
    <header className="sticky top-0 z-50 w-full bg-background shadow-md">
      <div className="container mx-auto flex h-20 max-w-6xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
          <ToothIcon className="h-6 w-6" />
          <span>Smile Hub</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
             key={link.href}
             href={link.href}
             className={cn(
               'relative text-foreground hover:text-primary transition-colors nav-link-underline py-2 text-base font-medium',
               pathname === link.href && 'active-link-underline text-primary'
             )}
           >
             {link.label}
           </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href="tel:+1234567890" className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary">
            <Phone className="h-4 w-4" />
            <span>(123) 456-7890</span>
          </a>
          <Button size="lg" className="rounded-full" asChild>
            <Link href="/book-appointment">Book Appointment</Link>
          </Button>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
           <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
             <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
             </SheetTrigger>
             <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full p-6">
                   <div className="mb-8 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
                      <ToothIcon className="h-6 w-6" />
                      <span>Smile Hub</span>
                    </Link>
                     <SheetClose asChild>
                       <Button variant="ghost" size="icon">
                         <X className="h-6 w-6" />
                         <span className="sr-only">Close Menu</span>
                       </Button>
                     </SheetClose>
                   </div>
                  <nav className="flex flex-col gap-6 mb-8">
                    {navLinks.map((link) => (
                       <NavLink key={link.href} href={link.href} label={link.label} />
                    ))}
                  </nav>
                  <div className="mt-auto flex flex-col gap-4">
                     <a href="tel:+1234567890" className="flex items-center justify-center gap-2 text-sm font-medium text-foreground hover:text-primary">
                       <Phone className="h-4 w-4" />
                       <span>(123) 456-7890</span>
                     </a>
                     <SheetClose asChild>
                       <Button size="lg" className="rounded-full w-full" asChild>
                         <Link href="/book-appointment">Book Appointment</Link>
                       </Button>
                     </SheetClose>
                   </div>
                </div>
             </SheetContent>
           </Sheet>
        </div>
      </div>
    </header>
  );
}
