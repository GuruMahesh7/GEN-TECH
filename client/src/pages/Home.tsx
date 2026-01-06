import { Link } from "wouter";
import { ArrowRight, CheckCircle2, TrendingUp, Users, Zap } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-display text-5xl sm:text-7xl font-bold tracking-tight text-primary mb-8 leading-[1.1]">
              We build brands that <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">
                don't be ignored.
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Strategist is a digital branding agency that helps ambitious companies transform their positioning, clarify their message, and scale with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 hover:-translate-y-1 transition-all duration-200 shadow-xl shadow-primary/20"
              >
                Start Your Project
              </Link>
              <Link
                href="/projects"
                className="px-8 py-4 rounded-full bg-white text-primary border border-border font-semibold text-lg hover:bg-muted/50 transition-all duration-200"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Background Blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      </section>

      {/* Trust Signals */}
      <div className="py-12 border-y border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Using Lucide icons as placeholders for logos */}
            <div className="flex items-center gap-2 font-display font-bold text-xl"><Zap className="w-6 h-6" /> Acme Corp</div>
            <div className="flex items-center gap-2 font-display font-bold text-xl"><TrendingUp className="w-6 h-6" /> Growth.io</div>
            <div className="flex items-center gap-2 font-display font-bold text-xl"><Users className="w-6 h-6" /> TeamSync</div>
            <div className="flex items-center gap-2 font-display font-bold text-xl"><CheckCircle2 className="w-6 h-6" /> Verify</div>
          </div>
        </div>
      </div>

      {/* Value Prop */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">Design isn't just art. <br />It's a business tool.</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Most brands fail because they focus on looking good instead of communicating clearly. We bridge the gap between aesthetics and strategy to create systems that drive real growth.
            </p>
            <ul className="space-y-4">
              {[
                "Clarify your market positioning",
                "Design a visual identity that scales",
                "Build high-conversion digital experiences",
                "Create a cohesive brand narrative"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg font-medium">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            {/* abstract visual */}
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden relative">
               {/* unsplash minimalist architecture */}
               <img 
                 src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" 
                 alt="Minimalist office"
                 className="w-full h-full object-cover mix-blend-multiply opacity-80"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            <Card className="absolute -bottom-10 -left-10 w-64 p-6 animate-in slide-in-from-bottom-10 fade-in duration-1000 delay-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Conversion Rate</p>
                  <p className="text-2xl font-bold">+145%</p>
                </div>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-[80%]" />
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Services Preview */}
      <Section className="bg-muted/30">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Expertise</h2>
          <p className="text-lg text-muted-foreground">
            We focus on three core pillars to build comprehensive brand experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Brand Strategy",
              desc: "Positioning, messaging, and market analysis to define your competitive edge.",
              icon: Users
            },
            {
              title: "Visual Identity",
              desc: "Logo design, typography, and color systems that make you unforgettable.",
              icon: Zap
            },
            {
              title: "Digital Experience",
              desc: "Web design and development focused on user experience and conversion.",
              icon: TrendingUp
            }
          ].map((service, i) => (
            <Card key={i} className="h-full">
              <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.desc}
              </p>
              <Link href="/services" className="inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors">
                Learn more <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="py-32 bg-primary text-primary-foreground text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to transform your brand?</h2>
          <p className="text-xl text-primary-foreground/60 mb-10 max-w-2xl mx-auto">
            Book a discovery call today and let's discuss how we can help you reach your goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 rounded-full bg-accent text-white font-semibold text-lg hover:bg-accent/90 transition-colors shadow-lg shadow-accent/25"
          >
            Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
        
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </section>

      <Footer />
    </div>
  );
}
