import { motion } from "framer-motion";
import { ExternalLink, Code, Cloud, Award } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  award?: string;
}

const projects: Project[] = [
  {
    title: "Barani Hydraulics Industrial System",
    description: "Industrial machine monitoring system for Barani Hydraulics India Pvt Ltd. Received Best Industrial Project Award.",
    tech: ["TSX", "JavaScript", "LaTeX", "Industrial IoT"],
    github: "https://github.com/Ashw-in2006/BaraniFinal",
    live: "https://barani-final.vercel.app/",
    award: "Best Industrial Project Award",
  },
  {
    title: "Brain Break Buddy",
    description: "Productivity app built for Zoho Creator Cliqtrix competition with Supabase backend.",
    tech: ["TypeScript", "Supabase", "Postman API", "Vercel"],
    github: "https://github.com/Ashw-in2006/Brain-BreakBuddy",
    live: "https://brain-break-buddy-mozy.vercel.app/",
  },
  {
    title: "NeuroLens – Eye Tracking",
    description: "Vision tracking system using Python, MediaPipe, and OpenCV algorithms.",
    tech: ["Python", "MediaPipe", "OpenCV"],
    github: "https://github.com/Ashw-in2006/NeuroLens",
  },
  {
    title: "INSAT Cloud Visions",
    description: "Cloud infrastructure visualization project.",
    tech: ["Cloud", "Visualization"],
    github: "https://github.com/Ashw-in2006/insat-cloud-visions",
  },
  {
    title: "Cargo Flow Orchestrator Nexus",
    description: "Logistics and cargo flow management system.",
    tech: ["Orchestration", "Flow Management"],
    github: "https://github.com/Ashw-in2006/cargo-flow-orchestrator-nexus",
  },
  {
    title: "DevOps Automation",
    description: "CI/CD pipeline automation and DevOps tooling.",
    tech: ["GitHub Actions", "CI/CD", "Automation"],
    github: "https://github.com/Ashw-in2006/DevOps",
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
              transition={{ delay: i * 0.08 }}
              className="glass rounded-xl p-5 flex flex-col hover:border-primary/30 transition-colors group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                {p.award && (
                  <span className="flex items-center gap-1 text-xs text-neon-green font-mono shrink-0 ml-2">
                    <Award className="w-3 h-3" /> Award
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{p.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs font-mono px-2 py-0.5 rounded bg-secondary text-secondary-foreground">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-neon rounded-md px-3 py-1.5 text-xs flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3 h-3" /> Live Demo
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-neon rounded-md px-3 py-1.5 text-xs flex items-center gap-1.5"
                  >
                    <Code className="w-3 h-3" /> View Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
