import { motion } from "framer-motion";
import { Bot, Rocket, TerminalSquare, Cloud } from "lucide-react";
import ParticleField from "./ParticleField";
import profileImg from "@/assets/ashwin-profile.png";

const actions = [
  { icon: Bot, label: "Launch AI Assistant", href: "#terminal", color: "neon-glow-cyan" },
  { icon: Rocket, label: "Explore Projects", href: "#projects", color: "neon-glow-purple" },
  { icon: TerminalSquare, label: "Open Terminal", href: "#terminal", color: "neon-glow-cyan" },
  { icon: Cloud, label: "Cloud Architecture", href: "#dashboard", color: "neon-glow-purple" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <ParticleField />
      <div className="scanline absolute inset-0 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 pt-20 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xs font-mono text-primary/70 tracking-widest uppercase mb-6"
          >
            Welcome to my Cloud DevOps Command Center
          </motion.p>

          {/* Profile Photo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="mb-8 relative"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-primary/40 neon-glow-cyan">
              <img src={profileImg} alt="Ashwin R" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-neon-green flex items-center justify-center">
              <span className="text-xs font-bold text-background">✓</span>
            </div>
          </motion.div>

          {/* Name */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            Hi, I'm <span className="text-gradient-cyan">Ashwin</span>
          </h1>

          <p className="font-display text-lg md:text-xl text-muted-foreground mb-2">
            DevOps Engineer • Cloud Explorer • AI Builder
          </p>
          <p className="text-sm text-muted-foreground/70 font-mono mb-10 max-w-lg">
            Interact with my AI to explore my infrastructure
          </p>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full max-w-2xl">
            {actions.map((action, i) => (
              <motion.a
                key={action.label}
                href={action.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="btn-neon rounded-lg px-4 py-3 flex flex-col items-center gap-2 text-center group cursor-pointer"
              >
                <action.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium text-foreground">{action.label}</span>
              </motion.a>
            ))}
          </div>

          {/* Cloud Nodes */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 flex flex-wrap justify-center gap-3"
          >
            {["React", "Node.js", "Python", "PostgreSQL", "GitHub Actions", "AWS/Vercel"].map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono text-muted-foreground/60 px-3 py-1 rounded-full border border-border/50"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
