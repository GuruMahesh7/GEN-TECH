import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { CheckCircle2, Linkedin, Twitter, Github } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <Section className="pt-48 pb-24">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h1 className="text-5xl md:text-7xl mb-8">More than just a<br /> developer.</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            I am a strategic partner for brands that want to lead their industry.
            I don't just write code; I solve complex business problems through technology and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative">
            {/* unsplash workspace */}
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
              alt="Developer workspace"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 rounded-3xl bg-primary/10 mix-blend-multiply" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">My Philosophy</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Engineering Excellence</h3>
                <p className="text-muted-foreground">I write clean, documented, and testable code. Every system is built to last and designed to scale.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Scalable Solutions</h3>
                <p className="text-muted-foreground">I build with the future in mind. Your technology should grow with your business, not hold it back.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Security First</h3>
                <p className="text-muted-foreground">I prioritize security at every layer of the stack, ensuring your data and your customers remain protected.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-muted/30">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How I Work</h2>
          <p className="text-muted-foreground text-lg">My proven process for delivering exceptional results.</p>
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

      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-center">
            {/* Image Side */}
            <div className="relative group mx-auto w-full max-w-[280px] lg:max-w-[340px]">
              <div className="relative aspect-square rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-xl ring-1 ring-border/50">
                <img
                  src="/mahesh (2).png"
                  alt="Mahesh"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply transition-colors duration-500 group-hover:bg-primary/0" />
              </div>
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full -z-10 blur-2xl opacity-40 transition-opacity duration-500 group-hover:opacity-80" />
            </div>

            {/* Content Side */}
            <div className="space-y-6 text-center md:text-left">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-2">Hi, I'm Mahesh</h2>
                <p className="text-xl font-medium text-accent mb-6">Full Stack Developer</p>
                <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed text-left">
                  <p>
                    I work with startups and businesses to create fast, modern websites that users trust and businesses grow with.
                  </p>
                  <p>
                    My approach bridges the gap between complex engineering and business value. I don't just write code; I design scalable architectures, intuitive user interfaces, and robust backend systems tailored to solve unique challenges.
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Connect With Me</h3>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                  <a 
                    href="#" 
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all duration-300 font-semibold"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all duration-300 font-semibold"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                    Twitter
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all duration-300 font-semibold"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>


      <Footer />
    </div>
  );
}
