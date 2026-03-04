import Navbar from "@/components/Navbar";
import InfinityBackground from "@/components/InfinityBackground";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import DashboardSection from "@/components/DashboardSection";
import DevTerminal from "@/components/DevTerminal";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <div className="min-h-screen bg-background relative">
    <InfinityBackground />
    <Navbar />
    <HeroSection />
    <ProjectsSection />
    <DashboardSection />
    <DevTerminal />
    <CertificationsSection />
    <ContactSection />
    <footer className="py-8 text-center text-xs text-muted-foreground font-mono border-t border-border">
      <p>© 2026 Ashwin R — Cloud DevOps Command Center</p>
    </footer>
  </div>
);

export default Index;
