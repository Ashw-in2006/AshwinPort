import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Instagram, Youtube, Twitter, FileText, Download, ExternalLink } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", url: "https://github.com/Ashw-in2006" },
  { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/ashwin-r-842aa9289" },
  { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/_chamber_of_creativity_/" },
  { icon: Youtube, label: "YouTube", url: "https://www.youtube.com/@Ashwin-o1g" },
  { icon: Twitter, label: "X / Twitter", url: "https://x.com/Ashwin0602" },
];

const ContactSection = () => (
  <section id="contact" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="font-display text-3xl font-bold mb-2 text-gradient-multi">Contact Hub</h2>
        <p className="text-muted-foreground mb-10 text-sm">All channels — one click away</p>

        {/* Direct contact */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <a
            href="mailto:rajaashwin2006@gmail.com?subject=Contact%20from%20Ashwin%20Portfolio&body=Hello%20Ashwin,"
            className="btn-neon rounded-lg px-5 py-3 flex items-center justify-center gap-2 text-sm"
          >
            <Mail className="w-4 h-4 text-primary" /> Send Email
          </a>
          <a
            href="tel:+919385615227"
            className="btn-neon rounded-lg px-5 py-3 flex items-center justify-center gap-2 text-sm"
          >
            <Phone className="w-4 h-4 text-primary" /> Call
          </a>
          <a
            href="/Ashwin_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon rounded-lg px-5 py-3 flex items-center justify-center gap-2 text-sm"
          >
            <FileText className="w-4 h-4 text-primary" /> View Resume
          </a>
          <a
            href="/Ashwin_Resume.pdf"
            download
            className="btn-neon-accent rounded-lg px-5 py-3 flex items-center justify-center gap-2 text-sm"
          >
            <Download className="w-4 h-4 text-accent" /> Download
          </a>
        </div>

        {/* Socials */}
        <div className="flex flex-wrap justify-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-lg px-4 py-3 flex items-center gap-2 text-sm hover:border-primary/40 transition-colors group"
            >
              <s.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">{s.label}</span>
              <ExternalLink className="w-3 h-3 text-muted-foreground/40" />
            </a>
          ))}
        </div>

        {/* Leadership */}
        <div className="mt-12 glass rounded-xl p-6 text-left">
          <h3 className="font-display font-semibold mb-4 text-primary text-sm">Community & Leadership</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>🏛️ Vice President — Unstop Igniters Club (led 10+ technical events)</li>
            <li>🎓 Campus Ambassador — BECON 26 (EDC IIT)</li>
            <li>🎤 Workshops: Prompt Engineering, Resume Building</li>
            <li>🏆 Recognitions: Young Turks, Google Developer Groups</li>
            <li>📸 Content Creator: AI research, tech insights on Instagram, YouTube & X</li>
          </ul>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
