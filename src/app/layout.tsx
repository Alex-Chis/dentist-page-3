import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { cn } from '@/lib/utils';


export const metadata: Metadata = {
  title: 'Smile Hub - Your Dental Care Partner',
  description: 'Providing comprehensive dental services in a comfortable and welcoming environment. Book your appointment today!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(GeistSans.variable)}>
       <head />
      <body className="min-h-screen bg-background font-sans antialiased">
          {children}
         <Toaster />
      </body>
    </html>
  );
}
