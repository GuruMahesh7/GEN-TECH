import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Calendar, ArrowRight, Lightbulb, ShieldCheck, Cpu } from "lucide-react";
import { Link } from "wouter";

const posts = [
  {
    title: "Why Your Custom Software Project Failed (And How to Fix It)",
    problem: "70% of digital transformation projects fall short of their goals due to poor alignment and scope creep.",
    solution: "We implement rigorous discovery phases and agile feedback loops to ensure engineering matches business intent.",
    takeaway: "Don't write a line of code until you've validated the user journey.",
    date: "Jan 15, 2025",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    tag: "Project Strategy",
    icon: ShieldCheck
  },
  {
    title: "Buy vs. Build: When to Choose Custom Over SaaS",
    problem: "Businesses often trap themselves in rigid SaaS contracts that stifle innovation, or overbuild custom tools they don't need.",
    solution: "A simple decision matrix: If it's your core competitive advantage, build it. If it's a utility, buy it.",
    takeaway: "Own your IP where it matters most to your bottom line.",
    date: "Jan 03, 2025",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tag: "Business Intelligence",
    icon: Lightbulb
  },
  {
    title: "The Hidden ROI of Code Quality",
    problem: "Technical debt is silent killer of velocity. 'Quick and dirty' features today become unmaintainable legacy code tomorrow.",
    solution: "We enforce strict TDD (Test Driven Development) and CI/CD protocols to keep velocity high year after year.",
    takeaway: "Clean code isn't a luxury; it's an asset that lowers long-term OpEx.",
    date: "Dec 20, 2024",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
    tag: "Engineering",
    icon: Cpu
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <Section className="pt-48 pb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl mb-6">Expert Insights</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Unpacking the complexity of enterprise technology. <br />
            No jargon. Just actionable strategies for business leaders.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Card key={i} className="flex flex-col h-full overflow-hidden border-border/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 group">
              <div className="aspect-[16/9] overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 md:saturate-0 group-hover:saturate-100"
                />
                <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                  <post.icon className="w-3 h-3" />
                  {post.tag}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4 text-accent" /> {post.date}
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors leading-tight">
                  {post.title}
                </h3>

                <div className="space-y-4 mb-8 flex-grow">
                  <div>
                    <span className="text-xs font-semibold text-destructive uppercase tracking-wide">The Problem</span>
                    <p className="text-sm text-muted-foreground mt-1">{post.problem}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-green-600 uppercase tracking-wide">The Solution</span>
                    <p className="text-sm text-muted-foreground mt-1">{post.solution}</p>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-border">
                  <div className="bg-muted/50 p-4 rounded-xl">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-primary uppercase block mb-1">Key Takeaway</span>
                        <p className="text-sm font-medium italic text-muted-foreground">"{post.takeaway}"</p>
                      </div>
                    </div>
                  </div>

                  <Link href="/contact" className="flex items-center gap-2 text-sm font-bold text-primary mt-6 hover:translate-x-1 transition-transform cursor-pointer">
                    Read Full Article <ArrowRight className="w-4 h-4 text-accent" />
                  </Link>
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
