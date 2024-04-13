import PageContainer from "@/app/components/ui/pageContainer/PageContainer";
import { useAppSelector } from "@/app/redux/hooks";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
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
  const getProjectContent = async () => {
    try {
      const response = await axios.get("http://localhost:3001/projects");
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const {
    data: projectContent,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjectContent,
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) console.log(error);

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
