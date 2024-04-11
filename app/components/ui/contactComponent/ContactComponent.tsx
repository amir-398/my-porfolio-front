"use client";
import { setIsModalVisible } from "@/app/redux/Slices/modalIsVisibleSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Image from "next/image";
import { useRef, useState } from "react";
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
  const dispatch = useAppDispatch();
  const lng = useAppSelector((state) => state.langageSlice.langage);
  const content = require(`@/app/content/${lng}/home/contactSection/content.json`);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const componentRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const onSubmit = (values: ContactFormFields) => {
    setLoading(true);
    const { name, email, message } = values;
    axios
      .post("https://sendemail-zycn5dhvma-uc.a.run.app", {
        name: name,
        email: email,
        message: message,
      })
      .then((response) => {
        setLoading(false);
        if (response.data == "Email sent successfully") {
          dispatch(setIsModalVisible(true));
        }
      })
      .catch((error) => {
        setLoading(false);
        alert(
          "oops, une erreur s'est porduite lors de l'envoie du fomulaire. Veuillez réessayer !"
        );
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
          <h3>{content.label} </h3>
          <h2>{content.title}</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputComponent
            placeholderText={content.formLabel_1}
            register={register}
            registerText="name"
            type="text"
            errors={errors}
          />
          <InputComponent
            placeholderText={content.formLabel_2}
            register={register}
            registerText="email"
            type="text"
            errors={errors}
          />
          <InputComponent
            placeholderText={content.formLabel_3}
            register={register}
            registerText="message"
            type="textarea"
            errors={errors}
          />
          <div className={style.btnContainer}>
            <Btn title={content.btnText} loading={loading} />
          </div>
        </form>
      </div>
    </div>
  );
}
