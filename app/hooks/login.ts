import { useMutation } from "@tanstack/react-query";
import axios from "axios";
const postLogin = async (data: FormData) => {
  try {
    const reponse = await axios.post("http://localhost:3000/api/login", data);
    return reponse.data;
  } catch (error) {
    throw error;
  }
};

// Hook pour utiliser la mutation de login
export function usePostLogin() {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: postLogin,
    onError: (error) => {
      console.error("Error logging in:", error);
    },
    onSuccess: (data) => {
      const token = data.message;
      console.log(token);
    },
  });
}
