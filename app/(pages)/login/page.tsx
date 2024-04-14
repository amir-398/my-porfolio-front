"use client";
import { usePostLogin } from "@/app/hooks/login";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import style from "./page.module.css";

const schema = yup.object({
  identifiant: yup.string(),
  password: yup.string(),
});
type FormData = {
  identifiant: string;
  password: string;
};
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { mutate: userPostLogin } = usePostLogin();

  const onSubmit = (data: any) => {
    userPostLogin(data);
  };

  const getToken = async () => {
    const reponse = await axios.get("http://localhost:3001/verifyToken");
    console.log(reponse);
  };

  return (
    <div className={style.loginContainer}>
      <div className={style.loginBox}>
        <button onClick={getToken}>lol</button>
        <h2>Connexion</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={style.userBox}>
            <input
              {...register("identifiant")}
              type="text"
              name="identifiant"
              required
            />
            <label>Identifiant</label>
            {errors && <p>{errors?.identifiant?.message}</p>}
          </div>
          <div className={style.userBox}>
            <input
              {...register("password")}
              type="password"
              name="password"
              required
            />
            <label>Mot de passe</label>
            {errors && <p>{errors?.password?.message}</p>}
          </div>
          <button>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
