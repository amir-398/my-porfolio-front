import PageContainer from "@/app/components/ui/pageContainer/PageContainer";

import ProjectCard from "./components/projectCard/ProjectCard";
import style from "./myProjectsSection.module.css";
export default function MyProjectsSection() {
  const lng = localStorage.getItem("langage");

  const projectContent = require(`@/app/content/${lng}/projects/content.json`);
  return (
    <PageContainer>
      <div className={style.myProjectContainer}>
        <h3>Mon protofio</h3>
        <h2>Mes projets réalisés</h2>
        <div>
          {projectContent.map((projectCard) => (
            <ProjectCard key={projectCard.id} {...projectCard} />
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
