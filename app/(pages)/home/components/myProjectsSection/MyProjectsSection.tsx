import PageContainer from "@/app/components/ui/pageContainer/PageContainer";
import projectCardsContent from "@/app/content/projectCardsContent.json";
import ProjectCard from "./components/projectCard/ProjectCard";
import style from "./myProjectsSection.module.css";
export default function MyProjectsSection() {
  return (
    <PageContainer>
      <div className={style.myProjectContainer}>
        <h3>Mon protofio</h3>
        <h2>Mes projets réalisés</h2>
        <div>
          {projectCardsContent.map((projectCard) => (
            <ProjectCard key={projectCard.id} {...projectCard} />
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
