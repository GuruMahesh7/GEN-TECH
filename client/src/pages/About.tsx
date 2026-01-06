import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <Section className="pt-48 pb-24">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h1 className="text-5xl md:text-7xl mb-8">More than just a<br/> design agency.</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We are strategic partners for brands that want to lead their industry. 
            We don't just make things look pretty; we solve complex business problems through design thinking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative">
             {/* unsplash team working */}
             <img 
               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
               alt="Team collaborating" 
               className="rounded-3xl shadow-2xl"
             />
             <div className="absolute inset-0 rounded-3xl bg-primary/10 mix-blend-multiply" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Philosophy</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Strategy First</h3>
                <p className="text-muted-foreground">Before we draw a single pixel, we dive deep into your business goals, audience, and market landscape.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Simplicity Wins</h3>
                <p className="text-muted-foreground">In a noisy world, clarity is power. We strip away the non-essential to reveal your core message.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Long-term Partnership</h3>
                <p className="text-muted-foreground">We don't just deliver files and disappear. We act as your ongoing brand guardians as you scale.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-muted/30">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How We Work</h2>
          <p className="text-muted-foreground text-lg">Our proven process for delivering exceptional results.</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Discovery", desc: "Workshops to uncover your goals and user needs." },
            { step: "02", title: "Strategy", desc: "Defining the roadmap and creative direction." },
            { step: "03", title: "Execution", desc: "Crafting the visual assets and digital products." },
            { step: "04", title: "Launch", desc: "Deploying to market and measuring impact." },
          ].map((item, i) => (
            <Card key={i} className="relative overflow-hidden">
              <span className="text-8xl font-display font-bold text-black/5 absolute -right-4 -top-8 select-none">
                {item.step}
              </span>
              <h3 className="text-xl font-bold mb-3 relative z-10">{item.title}</h3>
              <p className="text-muted-foreground relative z-10">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  );
}
