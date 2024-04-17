import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
//GETtype
type FormProps = {
  email: string;
  name: string;
  id: string;
};
const getUserInfo = async () => {
  try {
    const reponse = await axios.get("http://localhost:3000/api/persoInfo/get");
    return reponse.data;
  } catch (error) {
    throw error;
  }
};

export function useGetUserInfo() {
  return useQuery({
    queryKey: ["userInfo"],
    queryFn: getUserInfo,
  });
}

//POST
const postUserInfo = async (data: any) => {
  try {
    const reponse = await axios.post(
      "http://localhost:3000/api/persoInfo",
      JSON.stringify(data)
    );
    return reponse.data;
  } catch (error) {
    throw error;
  }
};

export function usePostUserInfo() {
  return useMutation({
    mutationKey: ["postUserInfo"],
    mutationFn: postUserInfo,
    onError: (error) => {
      console.log("Error logging in:", error);
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });
}

//PUT
const putUserInfo = async (data: FormProps) => {
  console.log(data);

  try {
    const reponse = await axios.put(
      `http://localhost:3000/api/persoInfo/${data.id}`,
      JSON.stringify(data)
    );
    return reponse.data;
  } catch (error) {
    throw error;
  }
};

export function usePutUserInfo() {
  return useMutation({
    mutationKey: ["putUserInfo"],
    mutationFn: putUserInfo,
    onError: (error) => {
      console.log("Error logging in:", error);
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });
}
