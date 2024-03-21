import ContactSection from "./contactSection/ContactSection";
import LandingSection from "./landingSection/LandingSection";
import MyProjectsSection from "./myProjectsSection/MyProjectsSection";
import PresentationSection from "./presentationSection/PresentationSection";
import SkillsSection from "./skillsSection/SkillsSection";

export default function Home() {
  return (
    <div>
      <section className="landing-section">
        <LandingSection />
      </section>
      {/* <AnimatedTitle title="Qui suis je ?" /> */}
      <section className="presentation">
        <PresentationSection />
      </section>
      {/* <AnimatedTitle title="Développeur web Junior créatif" /> */}
      <section className="projects">
        <MyProjectsSection />
      </section>
      <section className="skills">
        <SkillsSection />
      </section>
      <section className="contact">
        <ContactSection />
      </section>
    </div>
  );
}
