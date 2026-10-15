import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-background pt-10 pb-5">
      <div className="container px-5 xl:px-10 flex flex-col md:flex-row items-center justify-between gap-6 border-t pt-8">
        <div className="flex flex-col items-start gap-4">
          <a href="#">
            <img 
              alt="logo" 
              width="140" 
              height="40" 
              className="block" 
              src="https://digital-arc.vercel.app/images/logos/white-logo.svg"
            />
          </a>
          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} DigitalArc. All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center gap-8 text-sm font-mono uppercase font-medium">
          <a href="#" className="hover:text-primary/70 transition-colors">Twitter</a>
          <a href="#" className="hover:text-primary/70 transition-colors">Dribbble</a>
          <a href="#" className="hover:text-primary/70 transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
}