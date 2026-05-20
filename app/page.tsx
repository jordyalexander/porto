import { ParticleBackground } from "@/components/particle-background"
import { Navbar } from "@/components/navbar"
import { ScrollProgress } from "@/components/scroll-progress"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { OrganizationsSection } from "@/components/sections/organizations-section"
import { CertificationsSection } from "@/components/sections/certifications-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Background effects */}
      <ParticleBackground />
      <div className="fixed inset-0 grid-pattern pointer-events-none opacity-30 z-0" />
      
      {/* Scroll progress indicator */}
      <ScrollProgress />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <OrganizationsSection />
        <CertificationsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
