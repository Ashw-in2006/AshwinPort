import { motion } from "framer-motion";
import { ExternalLink, Code, Award } from "lucide-react";

import imgBarani from "@/assets/project-barani.jpg";
import imgBrainBreak from "@/assets/project-brainbreak.jpg";
import imgNeuroLens from "@/assets/project-neurolens.jpg";
import imgInsat from "@/assets/project-insat.jpg";
import imgCargo from "@/assets/project-cargo.jpg";
import imgDevops from "@/assets/project-devops.jpg";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  award?: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Barani Hydraulics Industrial System",
    description: "Industrial machine monitoring system for Barani Hydraulics India Pvt Ltd.",
    tech: ["React", "Node.js", "MongoDB", "AWS IoT"],
    github: "https://github.com/Ashw-in2006/BaraniFinal",
    live: "https://barani-final.vercel.app/",
    award: "Best Industrial Project Award",
    image: imgBarani,
  },
  {
    title: "Brain Break Buddy",
    description: "Productivity app from Zoho Creator Cliqtrix competition.",
    tech: ["Flutter", "Firebase", "OpenAI API"],
    github: "https://github.com/Ashw-in2006/Brain-BreakBuddy",
    live: "https://brain-break-buddy-mozy.vercel.app/",
    image: imgBrainBreak,
  },
  {
    title: "NeuroLens – Eye Tracking AI",
    description: "AI-powered eye tracking system for accessibility and behavior analysis.",
    tech: ["Python", "TensorFlow", "OpenCV", "React"],
    github: "https://github.com/Ashw-in2006/NeuroLens",
    image: imgNeuroLens,
  },
  {
    title: "INSAT Cloud Visions",
    description: "Satellite image processing with AI for cloud pattern recognition.",
    tech: ["Python", "TensorFlow", "FastAPI", "React"],
    github: "https://github.com/Ashw-in2006/insat-cloud-visions",
    image: imgInsat,
  },
  {
    title: "Cargo Flow Orchestrator Nexus",
    description: "Supply chain optimization with real-time tracking and route optimization.",
    tech: ["Java", "Spring Boot", "Kafka", "MongoDB"],
    github: "https://github.com/Ashw-in2006/cargo-flow-orchestrator-nexus",
    image: imgCargo,
  },
  {
    title: "DevOps Automation",
    description: "DevOps automation toolkit with CI/CD pipelines and infrastructure as code.",
    tech: ["Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    github: "https://github.com/Ashw-in2006/DevOps",
    image: imgDevops,
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <h2 className="font-display text-3xl font-bold mb-2">
          <span className="text-gradient-cyan">Live Deployments</span> & Projects
        </h2>
        <p className="text-muted-foreground mb-10 text-sm">Explore repositories, live demos, and architecture</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass rounded-xl overflow-hidden flex flex-col hover:border-primary/30 transition-colors group"
            >
              <div className="relative h-36 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                {p.award && (
                  <span className="absolute top-2 right-2 flex items-center gap-1 text-[10px] text-neon-green font-mono bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Award className="w-3 h-3" /> {p.award}
                  </span>
                )}
              </div>

              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-display font-semibold text-sm text-foreground group-hover:text-primary transition-colors mb-2">
                  {p.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-3 flex-1 line-clamp-2">{p.description}</p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-secondary text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                      className="btn-neon rounded-md px-2.5 py-1 text-[11px] flex items-center gap-1">
                      <ExternalLink className="w-3 h-3" /> Live
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      className="btn-neon rounded-md px-2.5 py-1 text-[11px] flex items-center gap-1">
                      <Code className="w-3 h-3" /> Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
