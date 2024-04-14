import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const getProjectContentById = async (projectId: string, lng: string) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/api/project/${projectId}/${lng}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export function useGetProjectContentById(projectId: string, lng: string) {
  return useQuery({
    queryKey: ["projectById"],
    queryFn: () => getProjectContentById(projectId, lng),
  });
}
