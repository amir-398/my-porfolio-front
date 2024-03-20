"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import style from "./page.module.css";

const schema = yup.object({
  identifiant: yup.string(),
  password: yup.string(),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const router = useRouter();

  const onSubmit = (data: Record<string, string>) => {
    console.log(data);
    axios
      .post("http://localhost:3001/login", data)
      .then((res) => {
        const token = res.data.token;
        console.log(token);
        localStorage.setItem("token", token);
        router.push("/dashboard");
      })
      .catch((err) => {
        console.log(err.request.response);
      });
  };

  return (
    <div className={style.loginContainer}>
      <div className={style.loginBox}>
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
