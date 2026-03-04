import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

interface Line {
  type: "input" | "output";
  text: string;
}

const COMMANDS: Record<string, string> = {
  help: `Available commands:
  whois ashwin     — About Ashwin
  show projects    — List projects
  list certs       — Certifications
  show skills      — Technical skills
  open github      — GitHub profile
  open linkedin    — LinkedIn profile
  contact ashwin   — Contact info
  clear            — Clear terminal`,

  "whois ashwin": `┌─────────────────────────────────────┐
│  ASHWIN R                           │
│  DevOps Engineer | Cloud & AI       │
│  Location: Tiruppur, Tamil Nadu     │
│  Education: B.E CSE (CGPA: 8.36)   │
│  Jai Shriram Engineering College    │
└─────────────────────────────────────┘
Aspiring software developer with hands-on 
experience in React, Supabase, REST APIs, 
and deployment workflows.`,

  "show projects": `Projects Found:
├── 🏭 Barani Hydraulics Industrial System
│   └── Best Industrial Project Award
├── 🧠 NeuroLens – Eye Tracking System
│   └── Python, MediaPipe, OpenCV
├── 📦 Cargo Flow Orchestrator Nexus
├── ☁️  INSAT Cloud Visions
└── 🎮 Brain Break Buddy
    └── Zoho Creator Cliqtrix Competition

Total: 5 projects | 2 live deployments`,

  "list certs": `Certifications: 8+
├── AWS Cloud Practitioner Essentials
├── NPTEL Cloud Computing (IIT Kharagpur) – Elite
├── Infosys Springboard – Java
├── Tata GenAI Data Analytics Simulation
├── Cybersecurity Analyst Simulation
├── Google Developer Groups – Gen AI Jams
├── Build with India Hackathon (Top 5k)
└── ISRO Bharatiya Antariksh Hackathon`,

  "show skills": `Skills Matrix:
┌──────────────┬──────────────────────────┐
│ Frontend     │ React, HTML, CSS, JS     │
│ Backend      │ Java, Python, Node.js    │
│ Database     │ PostgreSQL, MySQL, Mongo │
│ DevOps       │ Git, GitHub, CI/CD       │
│ Cloud        │ AWS, Vercel, REST APIs   │
│ Testing      │ SDLC, STLC, Manual QA   │
│ Tools        │ VS Code, IntelliJ, Canva │
└──────────────┴──────────────────────────┘`,

  "open github": `Opening GitHub → github.com/Ashw-in2006
[REDIRECT]`,

  "open linkedin": `Opening LinkedIn → linkedin.com/in/ashwin-r-842aa9289
[REDIRECT]`,

  "contact ashwin": `Contact Information:
📧 rajaashwin2006@gmail.com
📞 +91 93856 15227
🔗 github.com/Ashw-in2006
🔗 linkedin.com/in/ashwin-r-842aa9289
🐦 x.com/Ashwin0602`,
};

const DevTerminal = () => {
  const [lines, setLines] = useState<Line[]>([
    { type: "output", text: "ASHWIN DevOps Terminal v1.0.0" },
    { type: "output", text: 'Type "help" for available commands.\n' },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const execute = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLines: Line[] = [{ type: "input", text: `$ ${cmd}` }];

    if (trimmed === "clear") {
      setLines([]);
      setInput("");
      return;
    }

    if (trimmed === "open github") {
      window.open("https://github.com/Ashw-in2006", "_blank", "noopener,noreferrer");
    } else if (trimmed === "open linkedin") {
      window.open("https://www.linkedin.com/in/ashwin-r-842aa9289", "_blank", "noopener,noreferrer");
    }

    const output = COMMANDS[trimmed];
    if (output) {
      newLines.push({ type: "output", text: output });
    } else {
      newLines.push({ type: "output", text: `Command not found: "${cmd}". Type "help" for available commands.` });
    }

    setLines((prev) => [...prev, ...newLines]);
    setInput("");
  };

  return (
    <section id="terminal" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-2 mb-6">
            <Terminal className="w-5 h-5 text-primary" />
            <h2 className="font-display text-2xl font-bold">DevOps Command Terminal</h2>
          </div>

          <div className="glass rounded-xl overflow-hidden neon-glow-cyan">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-secondary/30">
              <div className="w-3 h-3 rounded-full bg-destructive/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-neon-green/80" />
              <span className="text-xs font-mono text-muted-foreground ml-2">ashwin@cloud-cmd ~ </span>
            </div>

            {/* Terminal body */}
            <div className="p-4 h-80 overflow-y-auto font-mono text-sm">
              {lines.map((line, i) => (
                <div key={i} className={`whitespace-pre-wrap mb-1 ${line.type === "input" ? "text-neon-green" : "text-foreground/80"}`}>
                  {line.text}
                </div>
              ))}
              <div className="flex items-center gap-1">
                <span className="text-neon-green">$</span>
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && input.trim() && execute(input)}
                  className="flex-1 bg-transparent outline-none text-foreground caret-primary"
                  autoFocus
                  placeholder="Type a command..."
                />
                <span className="animate-terminal-blink text-primary">▌</span>
              </div>
              <div ref={endRef} />
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {["whois ashwin", "show projects", "list certs", "show skills"].map((cmd) => (
              <button
                key={cmd}
                onClick={() => execute(cmd)}
                className="text-xs font-mono px-3 py-1.5 rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              >
                {cmd}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DevTerminal;
