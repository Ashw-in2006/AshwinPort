import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Instagram, Youtube, Twitter, FileText, Download, ExternalLink, Shield, Cloud, Bot, GitBranch, Code, Award, Users, Mic, Trophy } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

/* ── data ── */
const commands = [
  { icon: Mail, label: "Email", tooltip: "Send Message", href: "mailto:rajaashwin2006@gmail.com?subject=Contact%20from%20Ashwin%20Portfolio&body=Hello%20Ashwin," },
  { icon: Phone, label: "Call", tooltip: "Direct Line", href: "tel:+919385615227" },
  { icon: FileText, label: "Resume", tooltip: "View Resume", href: "/Ashwin_Resume.pdf", target: "_blank" },
  { icon: Download, label: "Download", tooltip: "Download Resume", href: "/Ashwin_Resume.pdf", download: true },
];

const socials = [
  { icon: Github, label: "GitHub", url: "https://github.com/Ashw-in2006", angle: 180 },
  { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/ashwin-r-842aa9289", angle: 270 },
  { icon: Youtube, label: "YouTube", url: "https://www.youtube.com/@Ashwin-o1g", angle: 0 },
  { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/_chamber_of_creativity_/", angle: 90 },
  { icon: Twitter, label: "X", url: "https://x.com/Ashwin0602", angle: 135 },
];

const metrics = [
  { label: "Repositories", value: "6", color: "text-primary" },
  { label: "Commits", value: "150+", color: "text-neon-green" },
  { label: "Languages", value: "JS · Py · Java", color: "text-neon-blue" },
  { label: "Live Deploys", value: "2", color: "text-neon-purple" },
];

const leadership = [
  { icon: Users, title: "Vice President", desc: "Unstop Igniters Club — Led 10+ technical events" },
  { icon: Award, title: "Campus Ambassador", desc: "BECON 26 — EDC IIT" },
  { icon: Mic, title: "Workshops", desc: "Prompt Engineering · Resume Building" },
  { icon: Trophy, title: "Recognitions", desc: "Young Turks · Google Developer Groups" },
];

const statusItems = [
  { label: "DevOps Pipeline Active", delay: 0 },
  { label: "Cloud Deployments Online", delay: 0.4 },
  { label: "AI Assistant Running", delay: 0.8 },
];

/* ── Network Graph (canvas) ── */
const NetworkGraph = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [size, setSize] = useState({ w: 400, h: 300 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => {
      setSize({ w: e.contentRect.width, h: e.contentRect.height });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const cx = size.w / 2;
  const cy = size.h / 2;
  const r = Math.min(cx, cy) * 0.6;

  const nodePositions = socials.map((s) => {
    const a = (s.angle * Math.PI) / 180;
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
  });

  // draw connections
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = size.w * 2;
    canvas.height = size.h * 2;
    ctx.scale(2, 2);

    let frame: number;
    let t = 0;
    const draw = () => {
      t += 0.02;
      ctx.clearRect(0, 0, size.w, size.h);

      // lines from center to nodes
      nodePositions.forEach((p, i) => {
        const isHov = hovered === i;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(p.x, p.y);
        ctx.strokeStyle = isHov
          ? "hsla(185, 80%, 55%, 0.6)"
          : "hsla(215, 20%, 30%, 0.35)";
        ctx.lineWidth = isHov ? 2 : 1;
        ctx.stroke();

        // traveling dot
        const progress = ((t + i * 0.3) % 1);
        const dx = cx + (p.x - cx) * progress;
        const dy = cy + (p.y - cy) * progress;
        ctx.beginPath();
        ctx.arc(dx, dy, isHov ? 3 : 2, 0, Math.PI * 2);
        ctx.fillStyle = "hsla(185, 80%, 55%, 0.7)";
        ctx.fill();
      });

      // center glow
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 18);
      grad.addColorStop(0, "hsla(185, 80%, 55%, 0.25)");
      grad.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.arc(cx, cy, 18, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      frame = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(frame);
  }, [size, hovered, cx, cy, r, nodePositions]);

  return (
    <div ref={containerRef} className="relative w-full h-[280px] sm:h-[300px]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ width: size.w, height: size.h }} />
      {/* center node */}
      <div
        className="absolute w-10 h-10 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-[10px] font-mono text-primary font-bold"
        style={{ left: cx - 20, top: cy - 20 }}
      >
        AR
      </div>
      {/* social nodes */}
      {socials.map((s, i) => {
        const pos = nodePositions[i];
        if (!pos) return null;
        return (
          <TooltipProvider key={s.label} delayDuration={200}>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute w-10 h-10 rounded-full glass flex items-center justify-center transition-all duration-300 hover:neon-glow-cyan hover:border-primary/60 group"
                  style={{ left: pos.x - 20, top: pos.y - 20 }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <s.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </TooltipTrigger>
              <TooltipContent className="glass-strong text-xs font-mono">
                {s.label} <ExternalLink className="inline w-3 h-3 ml-1 opacity-50" />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </div>
  );
};

/* ── Main Section ── */
const ContactSection = () => (
  <section id="contact" className="py-20 relative">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        {/* header */}
        <div className="text-center mb-12">
          <p className="font-mono text-xs text-primary/70 tracking-widest mb-2">// OPERATIONS CENTER</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gradient-multi">Contact Hub</h2>
          <p className="text-muted-foreground text-sm mt-2">Command · Connect · Collaborate</p>
        </div>

        {/* ── COMMAND PANEL ── */}
        <div className="glass-strong rounded-xl p-6 mb-6 max-w-3xl mx-auto">
          <h3 className="font-mono text-xs text-primary/70 tracking-widest mb-4 flex items-center gap-2">
            <Code className="w-3 h-3" /> CONTACT COMMANDS
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {commands.map((c) => (
              <TooltipProvider key={c.label} delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={c.href}
                      target={c.download ? undefined : (c.target || undefined)}
                      rel={c.target ? "noopener noreferrer" : undefined}
                      download={c.download ? true : undefined}
                      className="glass rounded-lg px-4 py-4 flex flex-col items-center gap-2 text-sm font-mono transition-all duration-300 hover:neon-glow-cyan hover:border-primary/50 hover:-translate-y-0.5 group"
                    >
                      <c.icon className="w-5 h-5 text-primary group-hover:animate-pulse-glow" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors text-xs">{c.label}</span>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent className="glass-strong text-xs font-mono">{c.tooltip}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* ── NETWORK GRAPH ── */}
          <div className="glass-strong rounded-xl p-6">
            <h3 className="font-mono text-xs text-primary/70 tracking-widest mb-2 flex items-center gap-2">
              <GitBranch className="w-3 h-3" /> SOCIAL NETWORK
            </h3>
            <NetworkGraph />
          </div>

          {/* ── ACTIVITY DASHBOARD ── */}
          <div className="glass-strong rounded-xl p-6 flex flex-col">
            <h3 className="font-mono text-xs text-primary/70 tracking-widest mb-4 flex items-center gap-2">
              <Shield className="w-3 h-3" /> DEVELOPER ACTIVITY
            </h3>
            <div className="grid grid-cols-2 gap-3 flex-1">
              {metrics.map((m) => (
                <div key={m.label} className="glass rounded-lg p-4 flex flex-col justify-center">
                  <span className={`font-mono text-2xl font-bold ${m.color}`}>{m.value}</span>
                  <span className="text-muted-foreground text-xs mt-1">{m.label}</span>
                </div>
              ))}
            </div>

            {/* ── SYSTEM STATUS ── */}
            <div className="mt-4 glass rounded-lg p-4">
              <h4 className="font-mono text-[10px] text-muted-foreground tracking-widest mb-3">SYSTEM STATUS</h4>
              <div className="space-y-2">
                {statusItems.map((s) => (
                  <div key={s.label} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <motion.span
                      className="w-2 h-2 rounded-full bg-neon-green inline-block"
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity, delay: s.delay }}
                    />
                    {s.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── LEADERSHIP CARDS ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mt-6">
          {leadership.map((l) => (
            <motion.div
              key={l.title}
              whileHover={{ y: -4 }}
              className="glass rounded-xl p-5 transition-all duration-300 hover:neon-glow-cyan hover:border-primary/40 group"
            >
              <l.icon className="w-5 h-5 text-primary mb-3 group-hover:animate-pulse-glow" />
              <h4 className="font-display font-semibold text-sm text-foreground mb-1">{l.title}</h4>
              <p className="text-muted-foreground text-xs leading-relaxed">{l.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
