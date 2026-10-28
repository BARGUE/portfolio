import { PageEffects } from "@/components/PageEffects";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { JourneySection } from "@/components/JourneySection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { CVSection } from "@/components/CVSection";
import { Footer } from "@/components/Footer";

const Home = () => {
  return (
    <>
      <PageEffects />
      <Header />
      <main id="accueil" className="page">
        <HeroSection />
        <AboutSection />
        <JourneySection />
        <ProjectsSection />
        <SkillsSection />
        <CVSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
