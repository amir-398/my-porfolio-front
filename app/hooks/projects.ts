import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getProjectsCardContent = async (lng: string) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/api/projects/${lng}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export function useGetProjectCardContent(lng: string) {
  return useQuery({
    queryKey: ["projects"],
    queryFn: () => getProjectsCardContent(lng),
  });
}
