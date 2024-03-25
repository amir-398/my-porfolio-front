import AnimatedTitle from "./animatedTitle/AnimatedTitle";
import ContactSection from "./contactSection/ContactSection";
import LandingSection from "./landingSection/LandingSection";
import MyProjectsSection from "./myProjectsSection/MyProjectsSection";
import PresentationSection from "./presentationSection/PresentationSection";
import SkillsSection from "./skillsSection/SkillsSection";

export default function Home() {
  const animatedTitles = [
    {
      id: 1,
      title: "Qui suis je ?",
    },
    {
      id: 2,
      title: "Développeur web Junior créatif",
    },
  ];
  return (
    <div>
      <section className="landing-section" id="landing-section">
        <LandingSection />
      </section>
      <section className="animated-title">
        <AnimatedTitle title={animatedTitles[0]} />
      </section>
      <section className="presentation" id="presentation">
        <PresentationSection />
      </section>

      <section className="projects" id="projects">
        <MyProjectsSection />
      </section>
      <AnimatedTitle title={animatedTitles[1]} />
      <section className="skills" id="skills">
        <SkillsSection />
      </section>
      <section className="contact" id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
