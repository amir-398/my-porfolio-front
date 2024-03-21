import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import style from "./inputComponent.module.css";
interface InputComponentProps {
  type: string;
  registerText: string;
  placeholderText: string;
  register: any;
  errors: FieldErrors;
}

const InputComponent: React.FC<InputComponentProps> = ({
  type,
  registerText,
  register,
  placeholderText,
  errors,
}) => {
  const errorMessage = errors[registerText]?.message || null;
  return (
    <>
      {type != "textarea" ? (
        <input
          className={style.inputComponent}
          {...register(registerText, { required: true })}
          type={type}
          name={registerText}
        />
      ) : (
        <textarea
          {...register(registerText, { required: true })}
          className={style.inputComponentTextArea}
          name={registerText}
          cols={30}
          rows={10}
          placeholder={placeholderText}
        />
      )}
      {errors[registerText] && (
        <p className={style.error}>
          {errors[registerText]?.message?.toString() || ""}
        </p>
      )}
    </>
  );
};

export default InputComponent;
