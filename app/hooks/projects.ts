import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getProjectsCardContent = async (lng: string) => {
  const pathname = window.location.href;
  //get url path for http://localhost:3000
  try {
    const response = await axios.get(`${pathname}/api/projects/${lng}`);
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
