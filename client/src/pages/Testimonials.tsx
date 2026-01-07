import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Gen Tech completely transformed how we present ourselves to the market. Our leads increased by 200% within the first month of launching the new site.",
    author: "Sarah Jenkins",
    role: "CEO, FinTech Sol",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
  },
  {
    quote: "They understood our vision better than we did. The brand identity they created perfectly captures our values while feeling modern and fresh.",
    author: "Michael Chen",
    role: "Founder, EcoHouse",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
  },
  {
    quote: "Professional, responsive, and incredibly talented. Working with Gen Tech felt like having a dedicated design team in-house.",
    author: "Elena Rodriguez",
    role: "Marketing Director, Lumina",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <Section className="pt-48 pb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl mb-6">Client Stories</h1>
          <p className="text-xl text-muted-foreground">
            Don't just take our word for it. Here's what our partners say.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <Card key={i} className="flex flex-col justify-between">
              <div>
                <Quote className="w-10 h-10 text-accent/20 mb-6" />
                <p className="text-lg italic text-muted-foreground mb-8">"{item.quote}"</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={item.avatar} alt={item.author} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold">{item.author}</h4>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  );
}
