import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const getProjectContentById = async (projectId: string, lng: string) => {
  const url = new URL(window.location.href);
  const pathname = url.origin;
  try {
    const response = await axios.get(
      `http://localhost:3000/api/project/${projectId}/${lng}`
    );
    console.log(response.data);
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
