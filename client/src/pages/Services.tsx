import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Check, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Digital Transformation",
    description: "Modernize your business operations with cutting-edge technology solutions that drive efficiency and growth.",
    deliverables: ["Tech Consultation", "Cloud Migration", "Process Automation", "System Integration", "Data Analytics"],
    price: "Custom Quote",
  },
  {
    title: "Custom Software",
    description: "Scalable, high-performance web and mobile applications tailored to your specific business needs.",
    deliverables: ["Web App Development", "Mobile App Development", "API Design", "Database Architecture", "QA Testing"],
    price: "Starting at ₹10k",
  },
  {
    title: "Strategic Innovation",
    description: "Future-proof your business with data-driven insights and emerging technology strategies.",
    deliverables: ["Market Analysis", "Tech Roadmap", "Product Strategy", "Growth Hacking", "Performance Metrics"],
    price: "Starting at ₹5k/mo",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <Section className="pt-48 pb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive design and strategy solutions tailored for growth-focused companies.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12">
          {services.map((service, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-12 items-center p-8 rounded-3xl bg-muted/20 border border-border">
              <div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="mb-8">
                  <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Deliverables</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.deliverables.map((item, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-accent" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center font-semibold text-primary hover:text-accent transition-colors"
                >
                  Book this service <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
              <div className="h-full min-h-[300px] rounded-2xl bg-white border border-border p-8 flex items-center justify-center relative overflow-hidden group">
                {/* Visual placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-50" />
                <div className="text-center relative z-10">
                  <span className="block text-sm text-muted-foreground mb-2">Investment</span>
                  <span className="text-3xl font-bold text-primary">{service.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  );
}
