import { motion } from "framer-motion";
import { Briefcase, Calendar, ExternalLink } from "lucide-react";

const internships = [
  {
    company: "Fnext",
    role: "Full Stack Development Intern",
    period: "Jun 10 – Jul 9, 2025",
    description: "Worked on full stack development using React, JavaScript, and HTML/CSS. Built and debugged responsive frontend modules for client-facing applications.",
    tech: ["React", "JavaScript", "HTML/CSS"],
  },
  {
    company: "Altalya",
    role: "Full Stack Development Intern",
    period: "Jan 9 – Jan 18, 2025",
    description: "Worked on full stack development using React, JavaScript, and HTML/CSS. Gained hands-on experience in real-world project deployment and team collaboration.",
    tech: ["React", "JavaScript", "HTML/CSS"],
  },
  {
    company: "Octanet",
    role: "Full Stack Development Intern",
    period: "Mar 1 – Apr 1, 2024",
    description: "Worked on full stack development using React, JavaScript, and HTML/CSS. Built and debugged responsive frontend modules for client-facing applications.",
    tech: ["React", "JavaScript", "HTML/CSS"],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <div className="mb-10">
          <p className="font-mono text-xs text-primary/70 tracking-widest mb-2">// WORK_EXPERIENCE</p>
          <h2 className="font-display text-3xl font-bold">
            <span className="text-gradient-cyan">Experience</span> & Internships
          </h2>
          <p className="text-muted-foreground text-sm mt-2">Professional development journey</p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-6">
            {internships.map((intern, i) => (
              <motion.div
                key={intern.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-4 top-6 w-5 h-5 rounded-full bg-card border-2 border-primary items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="glass-strong rounded-xl p-6 hover:border-primary/40 transition-all duration-300 hover:neon-glow-cyan group">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-primary" />
                      <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                        {intern.company}
                      </h3>
                    </div>
                    <span className="flex items-center gap-1 text-xs font-mono text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {intern.period}
                    </span>
                  </div>

                  <p className="text-sm text-primary font-medium mb-2">{intern.role}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">{intern.description}</p>

                  <div className="flex flex-wrap gap-1">
                    {intern.tech.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-secondary text-secondary-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
