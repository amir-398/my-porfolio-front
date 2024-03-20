"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import isAuth from "../../components/isAuth/isAuth";
const getInfo = async () => {
  try {
    const dataRender = await axios.get("http://localhost:3001/infos/getInfo");
    const { data } = dataRender;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
const Dashboard = () => {
  const { data } = useQuery({
    queryKey: "getInfo",
    queryFn: getInfo,
  });
  console.log(data);
  return <div>pages</div>;
};

export default isAuth(Dashboard);
