import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Calendar } from "lucide-react";

const posts = [
  {
    title: "Why Minimalist Design Converts Better",
    excerpt: "Stripping away the noise allows your customer to focus on the value proposition. Here's the data behind clean interfaces.",
    date: "Oct 12, 2024",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&q=80",
    tag: "Design Theory"
  },
  {
    title: "The Future of Brand Strategy",
    excerpt: "As AI floods the market with content, authentic human connection becomes the ultimate premium. How to position your brand in 2025.",
    date: "Sep 28, 2024",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    tag: "Strategy"
  },
  {
    title: "Building a Design System from Scratch",
    excerpt: "A step-by-step guide to creating scalable design systems that maintain consistency across all product touchpoints.",
    date: "Sep 15, 2024",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?w=800&q=80",
    tag: "Development"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <Section className="pt-48 pb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl mb-6">Insights</h1>
          <p className="text-xl text-muted-foreground">
            Thoughts on design, strategy, and business growth.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Card key={i} className="p-0 overflow-hidden border-none hover:-translate-y-2 transition-transform duration-300">
              <div className="aspect-[16/10] bg-muted relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {post.tag}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" /> {post.date}
                </div>
                <h3 className="text-xl font-bold mb-3 hover:text-accent transition-colors cursor-pointer">{post.title}</h3>
                <p className="text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Section>
      
      <Footer />
    </div>
  );
}
