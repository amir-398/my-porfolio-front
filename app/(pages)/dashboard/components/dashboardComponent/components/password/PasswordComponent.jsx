import Btn from "@/app/components/ui/btn/Btn";
import InputComponent from "@/app/components/ui/inputComponent/InputComponent";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import style from "./passwordComponent.module.css";
const schema = yup.object({
  oldPassword: yup.string().required("Champ obligatoire !"),
  newPassword: yup
    .string()
    .min(8, "Le mot de passe doit contenir au moins 8 caractères")
    .matches(
      /[a-z]/,
      "Le mot de passe doit avoir au moins une lettre minuscule"
    )
    .matches(
      /[A-Z]/,
      "Le mot de passe doit avoir au moins une lettre majuscule"
    )
    .matches(
      /[^a-zA-Z0-9]/,
      "Le mot de passe doit avoir au moins un caractère spécial"
    ),
  confirmNewPassword: yup
    .string()
    .oneOf(
      [yup.ref("newPassword"), null],
      "Les mots de passe doivent correspondre"
    ),
});
export default function PasswordComponent() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const formSubmit = async (values) => {
    const { oldPassword, newPassword } = values;
    await UPDATE_password(oldPassword, newPassword, dispatch);
  };

  return (
    <div className={style.passwordComponentContainer}>
      <div className={style.passwordContainer}>
        <h3>Mot de passe</h3>
        <form onSubmit={handleSubmit(formSubmit)}>
          <InputComponent
            register={register}
            registerText="oldPassword"
            errors={errors}
            placeholder="Entrez votre ancien mot de passe"
            type="password"
            labelText="Ancien mot de passe"
          />
          <InputComponent
            register={register}
            registerText="newPassword"
            errors={errors}
            placeholder="Entrez votre Nouveau mot de passe "
            type="password"
            labelText="Nouveau mot de passe"
          />
          <InputComponent
            register={register}
            registerText="confirmNewPassword"
            errors={errors}
            placeholder="Confirmez votre Nouveau mot de passe "
            type="password"
            labelText="Confirmez votre nouveau mot de passe"
          />
          <Btn title="Enregistrer" isInput />
        </form>
      </div>
    </div>
  );
}
