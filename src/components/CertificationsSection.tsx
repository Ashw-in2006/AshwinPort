import { motion } from "framer-motion";
import { Award, ExternalLink, FileText } from "lucide-react";

interface Cert {
  title: string;
  issuer: string;
  certUrl?: string;
  verifyUrl?: string;
}

const certs: Cert[] = [
  {
    title: "Tata GenAI Data Analytics Simulation",
    issuer: "Forage",
    certUrl: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_691934eef6e23f7a00c06751_1766335516982_completion_certificate.pdf",
  },
  {
    title: "Cybersecurity Analyst Simulation",
    issuer: "Forage",
    certUrl: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_691934eef6e23f7a00c06751_1763916014304_completion_certificate.pdf",
  },
  {
    title: "Unstop Certificate",
    issuer: "Unstop",
    certUrl: "https://unstop.com/certificate-preview/50a1c054-a2e7-4897-ab82-9e8442f20ca7",
  },
  {
    title: "Unstop Leadership Certificate",
    issuer: "Unstop",
    certUrl: "https://unstop.com/certificate-preview/2f9133db-b26d-4afa-b439-f58f5bb9e287",
  },
  {
    title: "Unstop Event Certificate",
    issuer: "Unstop",
    certUrl: "https://unstop.com/certificate-preview/55f6f27f-a8ff-45e0-98a7-64d65ce41442",
  },
  { title: "AWS Cloud Practitioner Essentials", issuer: "AWS Training & Certification" },
  { title: "NPTEL Cloud Computing (Elite)", issuer: "IIT Kharagpur" },
  { title: "Infosys Springboard – Java", issuer: "Infosys" },
];

const CertificationsSection = () => (
  <section id="certifications" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <h2 className="font-display text-3xl font-bold mb-2">
          <span className="text-gradient-cyan">Certifications</span> & Achievements
        </h2>
        <p className="text-muted-foreground mb-10 text-sm">Verified credentials and professional development</p>

        <div className="grid md:grid-cols-2 gap-3">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-lg p-4 flex items-center justify-between gap-3 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <Award className="w-4 h-4 text-primary shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{c.title}</p>
                  <p className="text-xs text-muted-foreground">{c.issuer}</p>
                </div>
              </div>
              {c.certUrl && (
                <a
                  href={c.certUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon rounded-md px-2.5 py-1.5 text-xs flex items-center gap-1 shrink-0"
                >
                  <FileText className="w-3 h-3" /> View
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default CertificationsSection;
