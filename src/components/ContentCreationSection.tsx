import { motion } from "framer-motion";
import { Instagram, Youtube, Twitter, ExternalLink, Palette } from "lucide-react";

const channels = [
  {
    icon: Instagram,
    label: "Instagram",
    handle: "@_chamber_of_creativity_",
    url: "https://www.instagram.com/_chamber_of_creativity_/",
    description: "AI research visuals, creative experimentation, and tech insights",
    color: "hover:border-pink-500/40",
    glow: "hover:shadow-[0_0_15px_hsl(330_80%_55%/0.3)]",
  },
  {
    icon: Youtube,
    label: "YouTube",
    handle: "@Ashwin-o1g",
    url: "https://www.youtube.com/@Ashwin-o1g",
    description: "Technology tutorials, project walkthroughs, and AI demos",
    color: "hover:border-red-500/40",
    glow: "hover:shadow-[0_0_15px_hsl(0_80%_55%/0.3)]",
  },
  {
    icon: Twitter,
    label: "X (Twitter)",
    handle: "@Ashwin0602",
    url: "https://x.com/Ashwin0602",
    description: "Tech threads, DevOps insights, and industry commentary",
    color: "hover:border-primary/40",
    glow: "hover:neon-glow-cyan",
  },
];

const ContentCreationSection = () => (
  <section id="content" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <div className="text-center mb-12">
          <p className="font-mono text-xs text-primary/70 tracking-widest mb-2">// CONTENT_OPS</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gradient-multi">Content Creation</h2>
          <p className="text-muted-foreground text-sm mt-2">AI research · Technology insights · Creative experimentation</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {channels.map((ch, i) => (
            <motion.a
              key={ch.label}
              href={ch.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`glass-strong rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 group ${ch.color} ${ch.glow}`}
            >
              <ch.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors mb-4" />
              <h3 className="font-display font-bold text-foreground mb-1">{ch.label}</h3>
              <p className="text-xs font-mono text-primary/70 mb-3">{ch.handle}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">{ch.description}</p>
              <span className="flex items-center gap-1 text-xs text-primary font-medium">
                Visit <ExternalLink className="w-3 h-3" />
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContentCreationSection;
