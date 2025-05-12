
"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { CalendarPlus, ArrowUp } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // This code runs only on the client
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);


  return (
      <Link
        href="/book-appointment"
        aria-label="Book an appointment"
        className={cn(
          "fixed bottom-6 right-6 z-40 transition-opacity duration-300 ease-in-out",
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <Button
          size="icon"
          className="h-14 w-14 rounded-full shadow-lg hover:translate-y-[-2px] hover:shadow-xl transition-all"
        >
          <CalendarPlus className="h-6 w-6" />
        </Button>
      </Link>
  );
}
