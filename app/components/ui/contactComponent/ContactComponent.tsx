"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Image from "next/image";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import astroContact from "../../../assets/img/astroContact.png";
import planet01 from "../../../assets/img/planet01.png";
import planet02 from "../../../assets/img/planet02.png";
import planet03 from "../../../assets/img/planet03.png";
import planet04 from "../../../assets/img/planet05.png";
import planet05 from "../../../assets/img/planet06.png";
import planet06 from "../../../assets/img/planet07.png";
import Btn from "../btn/Btn";
import InputComponent from "../inputComponent/InputComponent";
import style from "./contactComponent.module.css";
const schema = yup.object({
  name: yup.string().required("Champ obligatoire !"),
  email: yup.string().email().required("Champ obligatoire !"),
  message: yup.string().required("Champ obligatoire !"),
});

interface ContactFormFields {
  name: string;
  email: string;
  message: string;
}
export default function ContactComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const componentRef = useRef(null);

  const onSubmit = (values: ContactFormFields) => {
    // const { name, email, message } = values;
    const { name, email, message } = values;

    axios
      .post("https://sendemail-zycn5dhvma-uc.a.run.app", {
        name: name,
        email: email,
        message: message,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        if (error.response) {
          // La requête a été faite et le serveur a répondu avec un statut hors de la plage 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // La requête a été faite mais aucune réponse n'a été reçue
          console.log(error.request);
        } else {
          // Quelque chose s'est mal passé lors de la création de la requête
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  };

  return (
    <div ref={componentRef} id="contact" className={style.contactContainer}>
      <div className={style.astroContainer}>
        <Image className={style.planet01} src={planet01} alt="planéte" />
        <Image className={style.planet02} src={planet02} alt="planéte" />
        <Image className={style.planet03} src={planet03} alt="planéte" />
        <Image className={style.planet04} src={planet04} alt="planéte" />
        <Image className={style.planet05} src={planet05} alt="planéte" />
        <Image className={style.planet06} src={planet06} alt="planéte" />
        <Image className={style.astroImg} src={astroContact} alt="astronaute" />
      </div>
      <div className={style.formContainer}>
        <div>
          <h3>Contact</h3>
          <h2>Une question ? Un projet ?</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <InputComponent
            placeholderText="Nom"
            register={register}
            registerText="name"
            type="text"
            errors={errors}
          />
          <InputComponent
            placeholderText="Email"
            register={register}
            registerText="email"
            type="text"
            errors={errors}
          />
          <InputComponent
            placeholderText="Message"
            register={register}
            registerText="message"
            type="textarea"
            errors={errors}
          />
          <div className={style.btnContainer}>
            <Btn title="Terminer la mission" />
          </div>
        </form>
      </div>
    </div>
  );
}
