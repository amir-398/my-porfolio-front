import PageContainer from "@/app/components/ui/pageContainer/PageContainer";

import ProjectCard from "./components/projectCard/ProjectCard";
import style from "./myProjectsSection.module.css";
import { useAppSelector } from "@/app/redux/hooks";
export default function MyProjectsSection() {
  const lng = useAppSelector((state) => state.langageSlice.langage);
  const projectContent = require(`@/app/content/${lng}/projects/content.json`);
  const projetSectionContent = require(`@/app/content/${lng}/home/projectsSection/content.json`);
  interface contentCard {
    title: string;
    description: string;
    image: string;
    id: number;
  }
  return (
    <PageContainer>
      <div className={style.myProjectContainer}>
        <h3>{projetSectionContent.label}</h3>
        <h2>{projetSectionContent.title}</h2>
        <div>
          {projectContent.map((projectCard: contentCard, index: number) => (
            <ProjectCard key={index} {...projectCard} />
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
