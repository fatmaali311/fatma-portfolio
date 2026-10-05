import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import BackToTop from "./components/BackToTop";
import { ThemeProvider } from "./components/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-[var(--bg-page)] text-[var(--text-body)] transition-colors duration-300">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ExperienceSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}
