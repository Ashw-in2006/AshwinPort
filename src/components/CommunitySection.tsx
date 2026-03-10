import { motion } from "framer-motion";
import { Users, Award, Mic, Trophy, Star, Gift, Calendar, Target } from "lucide-react";

const leadership = [
  {
    icon: Users,
    title: "Vice President",
    org: "Unstop Igniters Club",
    desc: "Led a team of 25+ members, organized 10+ events, managed campus outreach programs.",
    duration: "2024 – Present",
  },
  {
    icon: Target,
    title: "Campus Ambassador",
    org: "BECON 26 — EDC IIT",
    desc: "Represented college at IIT's flagship business and entrepreneurship conference.",
    duration: "2024",
  },
];

const workshops = [
  {
    icon: Mic,
    title: "Prompt Engineering Workshop",
    desc: "Conducted for 100+ students on AI prompt optimization and LLM integration.",
    date: "March 2024",
  },
  {
    icon: Calendar,
    title: "Resume Building Workshop",
    desc: "Guided 50+ students on crafting industry-standard tech resumes.",
    date: "January 2024",
  },
];

const recognitions = [
  { icon: Star, title: "Young Turks Recognition", desc: "Exceptional performance in technology innovation" },
  { icon: Trophy, title: "Google Developer Groups", desc: "Active member, participated in tech talks and hackathons" },
  { icon: Gift, title: "Community Swags", desc: "Exclusive goodies from GDG and Unstop Igniters Club" },
  { icon: Award, title: "Nova ZK24 Innovation Award", desc: "Guardian Vision project at tech innovation showcase" },
];

const CommunitySection = () => (
  <section id="community" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <div className="text-center mb-12">
          <p className="font-mono text-xs text-primary/70 tracking-widest mb-2">// COMMUNITY_OPS</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gradient-multi">Community & Leadership</h2>
          <p className="text-muted-foreground text-sm mt-2">Building communities, leading innovation</p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Leadership Positions */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {leadership.map((l, i) => (
              <motion.div
                key={l.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-strong rounded-xl p-6 relative overflow-hidden group hover:border-primary/40 transition-all duration-300 hover:neon-glow-cyan"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-8 translate-x-8" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <l.icon className="w-6 h-6 text-primary group-hover:animate-pulse-glow" />
                    <span className="font-mono text-[10px] text-muted-foreground">{l.duration}</span>
                  </div>
                  <h4 className="font-display font-bold text-lg text-foreground">{l.title}</h4>
                  <p className="text-sm text-primary font-medium mb-2">{l.org}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{l.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Workshops */}
          <h3 className="font-mono text-xs text-primary/70 tracking-widest mb-4 flex items-center gap-2">
            <Mic className="w-3 h-3" /> WORKSHOPS CONDUCTED
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {workshops.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-5 hover:border-primary/30 transition-colors group"
              >
                <div className="flex items-start gap-3">
                  <w.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-semibold text-sm text-foreground">{w.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{w.desc}</p>
                    <span className="text-[10px] font-mono text-primary/60 mt-2 inline-block">{w.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Recognitions */}
          <h3 className="font-mono text-xs text-primary/70 tracking-widest mb-4 flex items-center gap-2">
            <Trophy className="w-3 h-3" /> RECOGNITIONS & ACHIEVEMENTS
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {recognitions.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="glass rounded-xl p-4 text-center hover:neon-glow-cyan hover:border-primary/40 transition-all duration-300 group"
              >
                <r.icon className="w-5 h-5 text-primary mx-auto mb-3 group-hover:animate-pulse-glow" />
                <h4 className="font-display font-semibold text-sm text-foreground mb-1">{r.title}</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CommunitySection;
