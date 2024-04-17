import Btn from "@/app/components/ui/btn/Btn";
import InputComponent from "@/app/components/ui/inputComponent/InputComponent";
import {
  useGetUserInfo,
  usePostUserInfo,
  usePutUserInfo,
} from "@/app/hooks/userInfo";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { CiWarning } from "react-icons/ci";
import { FaPen } from "react-icons/fa6";
import * as yup from "yup";
import style from "./personalInfoComponent.module.css";
type FormProps = {
  email: string;
  name: string;
};

interface DescriptionFormProps {
  description: string;
}
const identitySchema = yup.object({
  email: yup.string().email().required("Champ obligatoire !"),
  name: yup.string().required("Champ obligatoire !"),
});

const descriptionSchema = yup.object({
  description: yup.string().required("Champ obligatoire !"),
});

export default function PersonalInfoComponent() {
  const { data: userData } = useGetUserInfo();

  const {
    register: Identityregister,
    handleSubmit: identityFormSubmit,
    setValue: identitySetValue,
    watch: identityFormWatch,
    formState: { errors: identityFromErrors },
  } = useForm<FormProps>({
    resolver: yupResolver(identitySchema),
  });
  const {
    register: descriptionRegister,
    handleSubmit: descriptionFormSubmit,
    setValue: descriptionSetValue,
    watch: descriptionFormWatch,
    formState: { errors: descriptionFromErrors },
  } = useForm<DescriptionFormProps>({
    resolver: yupResolver(descriptionSchema),
  });

  const [uploadImageError, setUploadImageError] = useState(null);
  const [file, setFile] = useState(null);
  const uploadImageInputRef = useRef(null);
  const inputEmail = identityFormWatch("email");
  const inputName = identityFormWatch("name");

  const handleChangeImage = () => {};

  const handleSubmitImage = () => {};
  const { mutate: userPostUserInfo } = usePostUserInfo();
  const { mutate: userPutUserInfo } = usePutUserInfo();

  //submit identity form
  const onSubmit = (data: FormProps) => {
    const sendedData = [
      {
        title: "email",
        value: data.email,
        id: userData?.find(
          (item: Record<string, string>) => item?.title == "email"
        )?._id,
      },
      {
        title: "name",
        value: data.name,
        id: userData?.find(
          (item: Record<string, string>) => item?.title == "name"
        )?._id,
      },
    ];
    sendedData.forEach((item: Record<string, string>) => {
      userPutUserInfo(item as any);
    });
  };

  // submit description form
  const onSubmitDescriptionForm = (data: DescriptionFormProps) => {};

  useEffect(() => {
    if (userData) {
      const email = userData?.find(
        (item: Record<string, string>) => item?.title == "email"
      )?.value;
      const name = userData?.find(
        (item: Record<string, string>) => item?.title == "name"
      )?.value;

      identitySetValue("email", email);
      identitySetValue("name", name);
    }
  }, [userData, identitySetValue]);
  return (
    <div className={style.personalInfoContainer}>
      <div className={style.myPhotoContainer}>
        <input
          ref={uploadImageInputRef}
          type="file"
          style={{ display: "none" }}
          onChange={handleChangeImage}
          accept="image/*"
        />
        <FaPen
          size={25}
          onClick={handleChangeImage}
          className={style.pen}
          color="#fff"
        />
        <h3>Ma photo</h3>

        <div className={style.profilImage} onClick={handleChangeImage}>
          <p>Ma</p>
        </div>

        <div className={style.warningContainer}>
          {uploadImageError && <CiWarning color="red" size={20} />}
          <p>{uploadImageError}</p>
        </div>

        {file && <Btn title="Enregistrer" onClick={handleSubmitImage} />}
      </div>

      <div className={style.infoContainer}>
        <h3>Identité</h3>
        <form onSubmit={identityFormSubmit(onSubmit)}>
          <label htmlFor="Nom">Email</label>
          <InputComponent
            register={Identityregister}
            registerText="email"
            errors={identityFromErrors}
            placeholderText="Email"
            type="text"
            value={inputEmail}
          />
          <label htmlFor="Nom">Nom et prénom</label>
          <InputComponent
            register={Identityregister}
            registerText="name"
            errors={identityFromErrors}
            placeholderText="Nom et prénom"
            type="text"
            value={inputName}
          />
          <Btn title="Enregistrer" />
        </form>
      </div>
      <div className={style.infoContainer}>
        <h3>Description</h3>
        <form onSubmit={descriptionFormSubmit(onSubmitDescriptionForm)}>
          <label htmlFor="Nom">Description</label>
          <InputComponent
            register={descriptionRegister}
            registerText="email"
            errors={descriptionFromErrors}
            placeholderText="Email"
            type="textarea"
            value={inputEmail}
          />
          <Btn title="Enregistrer" />
        </form>
      </div>
    </div>
  );
}
