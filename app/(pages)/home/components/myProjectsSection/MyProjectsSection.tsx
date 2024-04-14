import PageContainer from "@/app/components/ui/pageContainer/PageContainer";
import { useGetProjectCardContent } from "@/app/hooks/projects";
import { useAppSelector } from "@/app/redux/hooks";
import ProjectCard from "./components/projectCard/ProjectCard";
import style from "./myProjectsSection.module.css";
export default function MyProjectsSection() {
  const lng = useAppSelector((state) => state.langageSlice.langage);
  const projetSectionContent = require(`@/app/content/${lng}/home/projectsSection/content.json`);
  interface contentCard {
    title: string;
    description: string;
    image: string;
    id: number;
  }

  const {
    data: projectContent,
    isLoading,
    error,
  } = useGetProjectCardContent(lng);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error...</div>;
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
