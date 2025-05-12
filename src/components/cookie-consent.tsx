
"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Cookie } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const COOKIE_CONSENT_KEY = 'cookie_consent_accepted';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // This check runs only on the client side after hydration
    const consentAccepted = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (consentAccepted !== 'true') {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
       <Card className="container mx-auto max-w-4xl shadow-lg border-border/50">
           <CardContent className="p-4 flex flex-col md:flex-row md:items-center md:gap-4">
             <Cookie className="hidden md:block h-8 w-8 text-primary flex-shrink-0 mb-2 md:mb-0" />
             <p className="text-sm text-muted-foreground flex-grow">
               We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
               <a href="/privacy-policy#cookies" className="underline text-primary hover:text-primary/80 ml-1">Learn more</a>.
             </p>
             <Button onClick={handleAccept} size="sm" className="mt-2 md:mt-0 md:ml-auto">
               Accept
             </Button>
           </CardContent>
       </Card>
    </div>
  );
}
