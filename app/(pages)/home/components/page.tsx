import LandingSection from "./landingSection/LandingSection";
import MyProjectsSection from "./myProjectsSection/MyProjectsSection";
import PresentationSection from "./presentationSection/PresentationSection";

export default function Home() {
  return (
    <div>
      <LandingSection />
      {/* <AnimatedTitle title="Qui suis je ?" /> */}
      <PresentationSection />
      {/* <AnimatedTitle title="Développeur web Junior créatif" /> */}
      <MyProjectsSection />
    </div>
  );
}
