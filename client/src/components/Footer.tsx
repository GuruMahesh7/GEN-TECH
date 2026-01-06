import { Link } from "wouter";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="font-display text-2xl font-bold tracking-tight block">
              STRATEGIST<span className="text-accent">.</span>
            </Link>
            <p className="text-primary-foreground/60 max-w-xs leading-relaxed">
              We build brands that don't just look good—they convert. Strategic design for ambitious companies.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-primary-foreground/60 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-primary-foreground/60 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/projects" className="text-primary-foreground/60 hover:text-white transition-colors">Our Work</Link></li>
              <li><Link href="/careers" className="text-primary-foreground/60 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="/blog" className="text-primary-foreground/60 hover:text-white transition-colors">Insights</Link></li>
              <li><Link href="/pricing" className="text-primary-foreground/60 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/faq" className="text-primary-foreground/60 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-primary-foreground/60 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/40">
          <p>© {new Date().getFullYear()} Strategist Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
