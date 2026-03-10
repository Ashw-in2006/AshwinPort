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
  show internships — Internship history
  show academics   — Academic background
  show cgpa        — CGPA details
  show skills      — Technical skills
  list skills      — Skill matrix
  list certs       — Certifications
  analyze neurolens— NeuroLens architecture
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
│  Pre-Final Year (2023–2027)         │
└─────────────────────────────────────┘
Aspiring software developer with hands-on
experience in React, Supabase, REST APIs,
Docker, Kubernetes, and deployment workflows.
Passionate about cloud infrastructure and AI.`,

  "show projects": `Projects Found: 6
├── 🏭 Barani Hydraulics Industrial System
│   └── Best Industrial Project Award ⭐
├── 🧠 NeuroLens – Eye Tracking AI
│   └── Python, TensorFlow, OpenCV
├── 📦 Cargo Flow Orchestrator Nexus
├── ☁️  INSAT Cloud Visions
├── 🎮 Brain Break Buddy
│   └── Zoho Creator Cliqtrix Competition
└── ⚙️  DevOps Automation
    └── Docker, K8s, Terraform, CI/CD

Total: 6 projects | 2 live deployments`,

  "show internships": `INTERNSHIPS:
┌──────────┬───────────────────────┬──────────────────┐
│ Company  │ Role                  │ Period           │
├──────────┼───────────────────────┼──────────────────┤
│ Fnext    │ Full Stack Dev Intern │ Jun-Jul 2025     │
│ Altalya  │ Full Stack Dev Intern │ Jan 2025         │
│ Octanet  │ Full Stack Dev Intern │ Mar-Apr 2024     │
└──────────┴───────────────────────┴──────────────────┘
Stack: React, JavaScript, HTML/CSS
Total: 3 internships`,

  "list certs": `Certifications: 9
├── Tata GenAI Data Analytics (Forage)
├── Cybersecurity Analyst Simulation (Forage)
├── AWS Cloud Practitioner Essentials ⏳
├── NPTEL Cloud Computing (IIT Kharagpur) ⏳
├── HP Data Science & Analytics
├── Infosys Springboard – Java
├── Unstop Certificate
├── Unstop Leadership Certificate
└── Unstop Event Certificate

✅ Completed: 7 | ⏳ In Progress: 2`,

  "show skills": `Skills Matrix:
┌──────────────┬────────────────────────────┐
│ Languages    │ C, Java, Python, JS        │
│ Frontend     │ React, Flutter, Next.js    │
│ Backend      │ Node.js, FastAPI, Spring   │
│ Database     │ PostgreSQL, MongoDB, MySQL │
│ DevOps       │ Docker, K8s, Terraform     │
│ Cloud        │ AWS, Vercel, CI/CD         │
│ AI/ML        │ PyTorch, TensorFlow, LLMs  │
│ Tools        │ Git, VS Code, IntelliJ     │
│ Special      │ Prompt Engineering, SysArch│
└──────────────┴────────────────────────────┘`,

  "list skills": `Skills Matrix:
┌──────────────┬────────────────────────────┐
│ Languages    │ C, Java, Python, JS        │
│ Frontend     │ React, Flutter, Next.js    │
│ Backend      │ Node.js, FastAPI, Spring   │
│ Database     │ PostgreSQL, MongoDB, MySQL │
│ DevOps       │ Docker, K8s, Terraform     │
│ Cloud        │ AWS, Vercel, CI/CD         │
│ AI/ML        │ PyTorch, TensorFlow, LLMs  │
│ Tools        │ Git, VS Code, IntelliJ     │
│ Special      │ Prompt Engineering, SysArch│
└──────────────┴────────────────────────────┘`,

  "show academics": `┌─────────────────────────────────────────┐
│  ACADEMIC RECORD                        │
├─────────────────────────────────────────┤
│  🎓 B.E. Computer Science Engineering  │
│     Jai Shriram Engineering College     │
│     (Autonomous) – Anna University      │
│     2023 – 2027                         │
│     CGPA: 8.36 (Till 4th Semester)      │
│     Focus: Cloud Computing & AI         │
├─────────────────────────────────────────┤
│  📚 HSC (2023) — 75%                   │
│     Nyurthi Vidhya Bhavan MHSS          │
│     Major: Computer Science             │
├─────────────────────────────────────────┤
│  📖 SSLC (2021) — 89%                  │
│     Nyurthi Vidhya Bhavan MHSS          │
│     Top Performer: Math & Science       │
└─────────────────────────────────────────┘`,

  "show cgpa": `Current CGPA: 8.36 / 10.0
Institution: Jai Shriram Engineering College
Program: B.E. Computer Science Engineering
Semester: 4th (Pre-Final Year)
Specialization: Cloud Computing & AI Systems
Status: ████████░░ 83.6%`,

  "analyze neurolens": `┌─ NeuroLens Architecture ────────────────┐
│                                          │
│  [Camera Feed] → [OpenCV Preprocessing]  │
│        ↓                                 │
│  [TensorFlow Model] → [Eye Detection]   │
│        ↓                                 │
│  [Gaze Tracking Engine]                  │
│        ↓                                 │
│  [React Dashboard] ← [FastAPI Backend]   │
│                                          │
│  Tech: Python, TensorFlow, OpenCV, React │
│  Status: Research & Development          │
└──────────────────────────────────────────┘`,

  "open github": `Opening GitHub → github.com/Ashw-in2006
[REDIRECT]`,

  "open linkedin": `Opening LinkedIn → linkedin.com/in/ashwin-r-842aa9289
[REDIRECT]`,

  "contact ashwin": `Contact Information:
📧 rajaashwin2006@gmail.com
📞 +91 93856 15227
🔗 github.com/Ashw-in2006
🔗 linkedin.com/in/ashwin-r-842aa9289
🐦 x.com/Ashwin0602
📸 instagram.com/_chamber_of_creativity_
🎥 youtube.com/@Ashwin-o1g`,
};

const DevTerminal = () => {
  const [lines, setLines] = useState<Line[]>([
    { type: "output", text: "ASHWIN DevOps Terminal v2.0.0" },
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
            <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-secondary/30">
              <div className="w-3 h-3 rounded-full bg-destructive/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-neon-green/80" />
              <span className="text-xs font-mono text-muted-foreground ml-2">ashwin@cloud-cmd ~ </span>
            </div>

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
            {["whois ashwin", "show projects", "show internships", "list certs", "show skills", "show academics"].map((cmd) => (
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
