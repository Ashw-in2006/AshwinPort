import Navbar from "@/components/Navbar";
import InfinityBackground from "@/components/InfinityBackground";
import HeroSection from "@/components/HeroSection";
import AcademicSection from "@/components/AcademicSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import GalleryScroller from "@/components/GalleryScroller";
import CommunitySection from "@/components/CommunitySection";
import ContentCreationSection from "@/components/ContentCreationSection";
import ContactSection from "@/components/ContactSection";
import DashboardSection from "@/components/DashboardSection";
import DevTerminal from "@/components/DevTerminal";
import ResumeViewer from "@/components/ResumeViewer";

const Index = () => (
  <div className="min-h-screen bg-background relative">
    <InfinityBackground />
    <Navbar />
    <HeroSection />
    <AcademicSection />
    <ExperienceSection />
    <ProjectsSection />
    <DashboardSection />
    <CertificationsSection />
    <GalleryScroller />
    <CommunitySection />
    <ContentCreationSection />
    <ContactSection />
    <DevTerminal />
    <ResumeViewer />
    <footer className="py-8 text-center text-xs text-muted-foreground font-mono border-t border-border">
      <p>© 2026 Ashwin R — Cloud DevOps Command Center</p>
    </footer>
  </div>
);

export default Index;
