"use client";
import { yupResolver } from "@hookform/resolvers/yup";
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
  firstname: yup.string().required("Champ obligatoire !"),
  email: yup.string().email().required("Champ obligatoire !"),
  message: yup.string().required("Champ obligatoire !"),
});

interface ContactFormFields {
  firstname: string;
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
    console.log(values);
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputComponent
            placeholderText="Nom"
            register={register}
            registerText="firstname"
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

          <Btn title="Contact" onClick={() => console.log("")} />
        </form>
      </div>
    </div>
  );
}
