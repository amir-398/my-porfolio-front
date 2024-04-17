import { FieldErrors } from "react-hook-form";
import { IoWarningOutline } from "react-icons/io5";
import style from "./inputComponent.module.css";
interface InputComponentProps {
  type: string;
  registerText: string;
  placeholderText: string;
  register: any;
  errors: FieldErrors;
  value?: string;
}

const InputComponent: React.FC<InputComponentProps> = ({
  type,
  registerText,
  register,
  placeholderText,
  errors,
  value,
}) => {
  const errorMessage = errors[registerText]?.message || null;
  return (
    <div className={style.inputContainer}>
      {type != "textarea" ? (
        <input
          className={[
            style.inputComponent,
            errorMessage && style.errorInput,
          ].join(" ")}
          {...register(registerText, { required: true })}
          type={type}
          name={registerText}
          placeholder={placeholderText}
          value={value}
        />
      ) : (
        <textarea
          {...register(registerText, { required: true })}
          className={[
            style.inputComponentTextArea,
            errorMessage && style.errorInput,
          ].join(" ")}
          name={registerText}
          cols={30}
          rows={10}
          placeholder={placeholderText}
        />
      )}
      <div className={style.textErrorContainer}>
        {errors[registerText] && (
          <>
            <IoWarningOutline color="red" />
            <p className={style.error}>
              {errors[registerText]?.message?.toString() || ""}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default InputComponent;
