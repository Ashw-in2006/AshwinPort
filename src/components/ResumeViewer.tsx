import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Download, Mail, Linkedin, Github, X } from "lucide-react";

const ResumeViewer = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger button in hero/contact can call this, but also standalone section */}
      <section id="resume" className="py-12">
        <div className="container mx-auto px-4">
          <div className="glass-strong rounded-xl p-6 max-w-3xl mx-auto text-center">
            <FileText className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-display text-xl font-bold text-foreground mb-2">Resume & Quick Links</h3>
            <p className="text-xs text-muted-foreground mb-5">View, download, or connect directly</p>

            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setOpen(true)}
                className="btn-neon rounded-lg px-4 py-2 text-sm flex items-center gap-2"
              >
                <FileText className="w-4 h-4" /> View Resume
              </button>
              <a
                href="/Ashwin_Resume.pdf"
                download
                className="btn-neon rounded-lg px-4 py-2 text-sm flex items-center gap-2"
              >
                <Download className="w-4 h-4" /> Download
              </a>
              <a
                href="mailto:rajaashwin2006@gmail.com"
                className="btn-neon rounded-lg px-4 py-2 text-sm flex items-center gap-2"
              >
                <Mail className="w-4 h-4" /> Email
              </a>
              <a
                href="https://www.linkedin.com/in/ashwin-r-842aa9289"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon rounded-lg px-4 py-2 text-sm flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href="https://github.com/Ashw-in2006"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon rounded-lg px-4 py-2 text-sm flex items-center gap-2"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong rounded-xl w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 relative"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 className="font-display text-2xl font-bold text-gradient-cyan mb-6">Ashwin R — Resume</h2>

              {/* Education */}
              <div className="mb-5">
                <h4 className="font-mono text-xs text-primary/70 tracking-widest mb-2">EDUCATION</h4>
                <p className="text-sm text-foreground font-medium">B.E. Computer Science Engineering</p>
                <p className="text-xs text-muted-foreground">Jai Shriram Engineering College | CGPA: 8.36 (Till 4th Semester)</p>
              </div>

              {/* Internships */}
              <div className="mb-5">
                <h4 className="font-mono text-xs text-primary/70 tracking-widest mb-2">INTERNSHIPS</h4>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm text-foreground">Fnext — Full Stack Development Intern</p>
                    <p className="text-xs text-muted-foreground">Jun – Jul 2025 | React, JavaScript, HTML/CSS</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground">Altalya — Full Stack Development Intern</p>
                    <p className="text-xs text-muted-foreground">Jan 2025 | React, JavaScript, HTML/CSS</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground">Octanet — Full Stack Development Intern</p>
                    <p className="text-xs text-muted-foreground">Mar – Apr 2024 | React, JavaScript, HTML/CSS</p>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-5">
                <h4 className="font-mono text-xs text-primary/70 tracking-widest mb-2">TECHNICAL SKILLS</h4>
                <div className="flex flex-wrap gap-1">
                  {["C", "Java", "Python", "JavaScript", "React", "Flutter", "Node.js", "Next.js", "Docker", "Kubernetes", "AWS", "MongoDB", "Git", "Prompt Engineering", "System Architecture"].map((s) => (
                    <span key={s} className="text-[10px] font-mono px-2 py-0.5 rounded bg-secondary text-secondary-foreground">{s}</span>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-mono text-xs text-primary/70 tracking-widest mb-2">CONTACT</h4>
                <p className="text-xs text-muted-foreground">📧 rajaashwin2006@gmail.com</p>
                <p className="text-xs text-muted-foreground">📞 +91 93856 15227</p>
                <p className="text-xs text-muted-foreground">🔗 github.com/Ashw-in2006</p>
                <p className="text-xs text-muted-foreground">🔗 linkedin.com/in/ashwin-r-842aa9289</p>
              </div>

              <div className="mt-6 flex gap-3">
                <a href="/Ashwin_Resume.pdf" download className="btn-neon rounded-lg px-4 py-2 text-sm flex items-center gap-2">
                  <Download className="w-4 h-4" /> Download PDF
                </a>
                <a href="/Ashwin_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-neon-accent rounded-lg px-4 py-2 text-sm flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Open PDF
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResumeViewer;
