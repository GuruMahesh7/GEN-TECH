import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Check, X } from "lucide-react";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <Section className="pt-48 pb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl mb-6">Simple Pricing</h1>
          <p className="text-xl text-muted-foreground">
            Transparent packages for every stage of business.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter */}
          <Card>
            <h3 className="text-xl font-medium text-muted-foreground mb-4">Starter</h3>
            <div className="text-4xl font-bold mb-6">₹5,000</div>
            <p className="text-muted-foreground mb-8">Ideal for startups launching their MVP.</p>

            <Link href="/contact" className="block w-full py-3 rounded-xl border border-primary text-center font-semibold hover:bg-muted transition-colors">
              Get Started
            </Link>

            <div className="mt-8 space-y-4">
              {["Tech Consultation", "Basic Web Presence", "Domain & Hosting Setup", "Email Configuration", "2 Rounds of Revisions"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-green-500" /> {item}
                </div>
              ))}
              {["Custom Software Dev", "Data Analytics"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-muted-foreground/50">
                  <X className="w-4 h-4" /> {item}
                </div>
              ))}
            </div>
          </Card>

          {/* Growth */}
          <Card className="border-primary shadow-xl ring-2 ring-primary/5 scale-105 z-10">
            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
              MOST POPULAR
            </div>
            <h3 className="text-xl font-medium text-accent mb-4">Growth</h3>
            <div className="text-4xl font-bold mb-6">₹12,000</div>
            <p className="text-muted-foreground mb-8">Scalable infrastructure for growing tech companies.</p>

            <Link href="/contact" className="block w-full py-3 rounded-xl bg-primary text-primary-foreground text-center font-semibold hover:bg-primary/90 transition-colors">
              Get Started
            </Link>

            <div className="mt-8 space-y-4">
              {["Everything in Starter", "Custom Web Application", "Database Integration", "API Development", "SEO & Performance", "Unlimited Revisions"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-medium">
                  <Check className="w-4 h-4 text-accent" /> {item}
                </div>
              ))}
            </div>
          </Card>

          {/* Premium */}
          <Card>
            <h3 className="text-xl font-medium text-muted-foreground mb-4">Enterprise</h3>
            <div className="text-4xl font-bold mb-6">Custom</div>
            <p className="text-muted-foreground mb-8">Full digital transformation for established organizations.</p>

            <Link href="/contact" className="block w-full py-3 rounded-xl border border-primary text-center font-semibold hover:bg-muted transition-colors">
              Contact Sales
            </Link>

            <div className="mt-8 space-y-4">
              {["Everything in Growth", "Legacy System Migration", "Microservices Architecture", "24/7 SLA Support", "Dedicated DevOps Team"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-green-500" /> {item}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
