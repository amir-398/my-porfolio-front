import PageContainer from "@/app/components/ui/pageContainer/PageContainer";
import {
  FaCss3Alt,
  FaDocker,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { IoLogoFigma, IoLogoJavascript } from "react-icons/io5";

import {
  SiAdobe,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import SkillCard from "./components/skillCard/SkillCard";
import style from "./skillsSection.module.css";
export default function SkillsSection() {
  const content = require(`@/app/content/${localStorage.getItem(
    "langage"
  )}/home/skillsSection/content.json`);
  const skills = [
    {
      icon: <FaHtml5 color="#FF5723" />,
      title: "HTML",
      borderColor: "#FF5723",
    },
    {
      icon: <FaCss3Alt color="#2965f1" />,
      title: "CSS",
      borderColor: "#2965f1",
    },
    {
      icon: <FaSass color="#c69" />,
      title: "Sass",
      borderColor: "#c69",
    },
    {
      icon: <IoLogoJavascript color="#f7df1e" />,
      title: "JavaScript",
      borderColor: "#f7df1e",
    },
    {
      icon: <SiTypescript color="#007acc" />,
      title: "TypeScript",
      borderColor: "#007acc",
    },
    {
      icon: <FaReact color="#61DBFB" />,
      title: "React js",
      borderColor: "#61DBFB",
    },
    {
      icon: <TbBrandReactNative color="#61DBFB" />,
      title: "React Native",
      borderColor: "#61DBFB",
    },
    {
      icon: <SiNextdotjs color="#000" />,
      title: "Next js",
      borderColor: "#000",
    },
    {
      icon: <FaNodeJs color="#8CC84B" />,
      title: "Node js",
      borderColor: "#8CC84B",
    },
    {
      icon: <FaPhp color="#8892BF" />,
      title: "PHP",
      borderColor: "#8892BF",
    },
    {
      icon: <SiMysql color="#00758F" />,
      title: "MySQL",
      borderColor: "#00758F",
    },
    {
      icon: <FaDocker color="#0db7ed" />,
      title: "Docker",
      borderColor: "#0db7ed",
    },
    {
      icon: <SiTailwindcss color="#06B6D4" />,
      title: "Tailwind CSS",
      borderColor: "#06B6D4",
    },
    {
      icon: <FaGithub color="#F05033" />,
      title: "Git",
      borderColor: "#F05033",
    },
    {
      icon: <IoLogoFigma color="#f24e1e" />,
      title: "Figma",
      borderColor: "#f24e1e",
    },
    {
      icon: <SiAdobe color="#ff0000" />,
      title: "Adobe Suite",
      borderColor: "#ff0000",
    },
  ];
  return (
    <PageContainer>
      <div className={style.skillsSectionContainer}>
        <div className={style.titleContainer}>
          <h3>{content.label} </h3>
          <h2>{content.title}</h2>
        </div>
        <div className={style.skillsContainer}>
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              borderColor={skill.borderColor}
            />
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
