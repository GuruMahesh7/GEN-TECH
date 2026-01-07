import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    client: "PrintMaania",
    category: "E-Commerce & Printing Platform",
    image: "/printmannia.png",
    description: "Designed and developed a modern printing service website that allows users to explore products, understand services, and easily place inquiries with a clean and responsive UI.",
    tags: ["React", "Responsive Design", "UI/UX", "Vercel"],
    link: "https://printmaania-qhrl.vercel.app/"
  },
  {
    client: "Coupon Code Management System",
    category: "Frontend Web Application",
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=800&q=80",
    description: "Built a dynamic React-based application to strengthen component architecture, state management, and user interaction with a focus on clean code and performance.",
    tags: ["React", "JavaScript", "Component Architecture", "Frontend"],
    link: "https://react-kft3.vercel.app/"
  }
  ,
  {
    client: "AskAar Crop Care",
    category: "Agriculture Business Website",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80",
    description: "Developed a professional business website for an agricultural brand to showcase products, services, and company information with a strong focus on clarity and trust.",
    tags: ["HTML", "CSS", "JavaScript", "Business Website"],
    link: "https://www.askaarcropcare.in/"
  },
  {
    client: "Baby Imprints",
    category: "E-Commerce & Brand Website",
    image: "/babyimprints.png",
    description: "Created a responsive and visually engaging e-commerce website for a premium baby product brand, focused on clear product presentation, intuitive navigation, and seamless user experience to boost conversions and customer trust.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    link: "https://babyimprints.in/"
  },
  {
    client: "CyberGuard",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    description: "Enterprise threat detection system using machine learning to identify and neutralize zero-day vulnerabilities.",
    tags: ["Rust", "WASM", "Security", "AI"]
  },
  {
    client: "EduTech Global",
    category: "LMS Platform",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    description: "Scalable learning management system serving 500k+ students worldwide with interactive video courses.",
    tags: ["Angular", "GraphQL", "Cloudflare", "Video Streaming"]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <Section className="pt-48 pb-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl mb-6 font-display font-bold">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">Impact.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We don't just write code. We build digital ecosystems that power industries.
              Here is a selection of our recent technical achievements.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-x-12 gap-y-20"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={item}
              className={`group cursor-pointer ${i % 2 === 1 ? "md:mt-24" : ""}`}
            >
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-8 shadow-2xl shadow-black/5">
                <div className="absolute inset-0 bg-primary/10 z-10 group-hover:bg-primary/0 transition-colors duration-500" />
                <img
                  src={project.image}
                  alt={project.client}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Overlay Card */}
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <a
                      href={project.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-black mb-4 hover:bg-accent hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ArrowUpRight className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-4 px-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-3xl font-bold mb-2 group-hover:text-accent transition-colors">{project.client}</h3>
                    <p className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">{project.category}</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed border-l-2 border-accent/20 pl-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Footer />
    </div>
  );
}
