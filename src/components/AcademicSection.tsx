import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Code2, Cloud, Brain, Cpu, Database, GitBranch, Layers, Palette, Rocket, Terminal, Smartphone, Globe, Lock, Zap } from "lucide-react";

const techStack = [
  { category: "Languages", items: [
    { name: "C", icon: Terminal, desc: "Systems Programming" },
    { name: "Java", icon: Code2, desc: "Enterprise Solutions" },
    { name: "Python", icon: Brain, desc: "AI/ML & Automation" },
    { name: "JavaScript", icon: Globe, desc: "Full Stack" },
  ]},
  { category: "Frameworks & Tools", items: [
    { name: "React", icon: Layers, desc: "Frontend Architecture" },
    { name: "Flutter", icon: Smartphone, desc: "Cross-Platform Mobile" },
    { name: "Node.js", icon: Cpu, desc: "Backend Services" },
    { name: "Next.js", icon: Rocket, desc: "Full Stack" },
  ]},
  { category: "DevOps & Cloud", items: [
    { name: "Git & GitHub", icon: GitBranch, desc: "Version Control" },
    { name: "Docker", icon: Database, desc: "Containerization" },
    { name: "Kubernetes", icon: Cloud, desc: "Orchestration" },
    { name: "AWS", icon: Cloud, desc: "Cloud Infrastructure" },
  ]},
  { category: "Specialized", items: [
    { name: "Prompt Engineering", icon: Brain, desc: "AI Integration" },
    { name: "System Architecture", icon: Layers, desc: "Design" },
    { name: "Responsive Design", icon: Palette, desc: "Web Design" },
    { name: "Performance", icon: Zap, desc: "Optimization" },
  ]},
];

const education = [
  {
    icon: GraduationCap,
    degree: "B.E. Computer Science Engineering",
    year: "2023 – 2027",
    institution: "Jai Shriram Engineering College (Autonomous)",
    affiliate: "Affiliated to Anna University",
    score: "CGPA: 8.36",
    scoreNote: "Till 4th Semester",
    specialization: "Cloud Computing & AI Systems",
    color: "primary",
  },
  {
    icon: BookOpen,
    degree: "Higher Secondary Education (HSC)",
    year: "2023",
    institution: "Nyurthi Vidhya Bhavan Matriculation HSS",
    score: "Percentage: 75%",
    scoreNote: "Major: Computer Science",
    color: "neon-purple",
  },
  {
    icon: BookOpen,
    degree: "Secondary Education (SSLC)",
    year: "2021",
    institution: "Nyurthi Vidhya Bhavan Matriculation HSS",
    score: "Percentage: 89%",
    scoreNote: "Top Performer in Mathematics & Science",
    color: "neon-green",
  },
];

const AcademicSection = () => (
  <section id="academics" className="py-20 relative">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-mono text-xs text-primary/70 tracking-widest mb-2">// ACADEMIC_JOURNEY</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gradient-multi">Academic Journey</h2>
          <p className="text-muted-foreground text-sm mt-2 max-w-xl mx-auto">
            Architecting the future at the intersection of cloud infrastructure and artificial intelligence
          </p>
        </div>

        {/* Passion Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-xl p-6 sm:p-8 max-w-3xl mx-auto mb-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="relative">
            <h3 className="font-display text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <Rocket className="w-4 h-4 text-primary" /> Passion & Purpose
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              I'm a pre-final year Computer Science Engineering student at Jai Shriram Engineering College, where I'm not just learning code—I'm architecting the future. My passion lies at the intersection of cloud infrastructure and artificial intelligence, building systems that don't just work, but <span className="text-primary font-medium">think</span>.
            </p>
            <p className="text-muted-foreground/80 text-sm leading-relaxed italic font-mono">
              "I believe infrastructure is poetry in motion, and AI is the pen that writes it."
            </p>
          </div>
        </motion.div>

        {/* Technical Arsenal */}
        <div className="mb-14">
          <h3 className="font-mono text-xs text-primary/70 tracking-widest mb-6 text-center flex items-center justify-center gap-2">
            <Lock className="w-3 h-3" /> TECHNICAL ARSENAL
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {techStack.map((cat, ci) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.1 }}
                className="glass rounded-xl p-5"
              >
                <h4 className="font-mono text-[10px] tracking-widest text-muted-foreground mb-4 uppercase">{cat.category}</h4>
                <div className="space-y-3">
                  {cat.items.map((item) => (
                    <div key={item.name} className="flex items-center gap-3 group">
                      <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{item.name}</p>
                        <p className="text-[10px] text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div>
          <h3 className="font-mono text-xs text-primary/70 tracking-widest mb-6 text-center flex items-center justify-center gap-2">
            <GraduationCap className="w-3 h-3" /> EDUCATION TIMELINE
          </h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass rounded-xl p-5 sm:p-6 relative overflow-hidden group hover:border-primary/30 transition-colors"
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-${edu.color}`} />
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full bg-${edu.color}/10 border border-${edu.color}/30 flex items-center justify-center shrink-0`}>
                    <edu.icon className={`w-5 h-5 text-${edu.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 flex-wrap">
                      <h4 className="font-display font-semibold text-foreground">{edu.degree}</h4>
                      <span className="font-mono text-xs text-primary/70 shrink-0">{edu.year}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{edu.institution}</p>
                    {edu.affiliate && <p className="text-xs text-muted-foreground/60 italic">{edu.affiliate}</p>}
                    <div className="flex items-center gap-3 mt-2 flex-wrap">
                      <span className="font-mono text-sm font-bold text-neon-green">{edu.score}</span>
                      <span className="text-xs text-muted-foreground">({edu.scoreNote})</span>
                    </div>
                    {edu.specialization && (
                      <span className="inline-block mt-2 text-xs font-mono px-2 py-0.5 rounded bg-secondary text-secondary-foreground">
                        {edu.specialization}
                      </span>
                    )}
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

export default AcademicSection;
