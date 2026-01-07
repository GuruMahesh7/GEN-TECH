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
          <h1 className="text-5xl md:text-7xl mb-8">More than just a<br /> tech company.</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We are strategic partners for brands that want to lead their industry.
            We don't just write code; we solve complex business problems through technology and innovation.
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
                <h3 className="text-xl font-bold mb-2">Engineering Excellence</h3>
                <p className="text-muted-foreground">We write clean, documented, and testable code. Every system is built to last and designed to scale.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Scalable Solutions</h3>
                <p className="text-muted-foreground">We build with the future in mind. Your technology should grow with your business, not hold it back.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Security First</h3>
                <p className="text-muted-foreground">We prioritize security at every layer of the stack, ensuring your data and your customers remain protected.</p>
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

      <Section>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Core Team</h2>
          <p className="text-muted-foreground text-lg">The minds behind the technology.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Mahesh",
              role: "Founder & CTO",
              image: "/mahesh (2).png",
              bio: "work with startups and businesses to create fast, modern websites that users trust and businesses grow with."
            },
            {
              name: "Pranav",
              role: "Head of Product",
              image: "/pranav.png",
              bio: "Product strategist with a passion for user-centric design and agile development methodologies."
            },
            {
              name: "Praneeth",
              role: "Lead Architect",
              image: "/pranneth.jpeg",
              bio: "Cloud infrastructure expert specializing in scalable microservices and high-performance systems."
            }
          ].map((member, i) => (
            <div key={i} className="group text-center">
              <div className="relative w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href="#" className="p-2 bg-white rounded-full text-primary hover:text-accent transition-colors" aria-label="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 bg-white rounded-full text-primary hover:text-accent transition-colors" aria-label="Twitter">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
              <p className="text-primary font-medium mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm max-w-sm mx-auto leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </Section>


      <Footer />
    </div>
  );
}
