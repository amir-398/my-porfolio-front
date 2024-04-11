"use client";
import PageContainer from "@/app/components/ui/pageContainer/PageContainer";
import { setActiveSection } from "@/app/redux/Slices/activeSectionSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { useEffect, useRef } from "react";
import AnimatedTitle from "../../../components/ui/animatedTitle/AnimatedTitle";
import ContactSection from "./contactSection/ContactSection";
import LandingSection from "./landingSection/LandingSection";
import MyProjectsSection from "./myProjectsSection/MyProjectsSection";
import PresentationSection from "./presentationSection/PresentationSection";
import SkillsSection from "./skillsSection/SkillsSection";
export default function Home() {
  const dispatch = useAppDispatch();
  const lng = useAppSelector((state) => state.langageSlice.langage);
  const animatedContentTitle = require(`@/app/content/${lng}/animatedTitles/content.json`);

  const observer = useRef<any>(null);
  const landingSectionRef = useRef<HTMLDivElement>(null);
  const presentationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find(
          (entry) => entry.isIntersecting
        )?.target;
        //Update state with the visible section ID
        if (visibleSection) {
          dispatch(setActiveSection(visibleSection.id));
        }
      },
      {
        threshold: 0.7,
      }
    );
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.current.observe(section);
    });
    //Cleanup function to remove observer
    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, []);
  return (
    <div>
      <section
        className="landing-section"
        id="landing-section"
        ref={landingSectionRef}
      >
        <LandingSection />
      </section>
      <section className="presentation" id="presentation" ref={presentationRef}>
        <PageContainer>
          <AnimatedTitle title={animatedContentTitle[0]} />
        </PageContainer>
        <PresentationSection />
      </section>

      <section className="projects" id="projects">
        <MyProjectsSection />
      </section>
      <PageContainer>
        <AnimatedTitle title={animatedContentTitle[1]} />
      </PageContainer>
      <section className="skills" id="skills">
        <SkillsSection />
      </section>
      <section className="contact" id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
