import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    client: "FinTech Sol",
    category: "Branding & Web",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    description: "Complete rebrand for a Series B fintech startup looking to move upmarket.",
  },
  {
    client: "EcoHouse",
    category: "Visual Identity",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80",
    description: "Sustainable housing manufacturer identity system inspired by nature.",
  },
  {
    client: "Lumina",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    description: "Dashboard interface design for a SaaS analytics platform.",
  },
  {
    client: "North",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
    description: "Positioning strategy for an outdoor apparel brand expanding to Europe.",
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <Section className="pt-48 pb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl mb-6">Selected Work</h1>
          <p className="text-xl text-muted-foreground">
            A showcase of our most impactful collaborations.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6">
                <img 
                  src={project.image} 
                  alt={project.client} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary">
                    <ArrowUpRight className="w-8 h-8" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{project.client}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <span className="px-3 py-1 rounded-full border border-border text-xs font-medium uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>
      
      <Footer />
    </div>
  );
}
