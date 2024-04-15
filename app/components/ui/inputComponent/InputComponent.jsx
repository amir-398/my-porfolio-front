import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import style from "./inputComponent.module.css";
export default function InputComponent({
  placeholder,
  type,
  onChange,
  inputStyle,
  register,
  requiredText,
  labelText,
  registerText,
  errors,
  value,
  icon,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const handleStyle = icon
    ? {
        ...inputStyle,
        paddingLeft: "3rem",
      }
    : {
        ...inputStyle,
      };
  const handleType =
    type === "password" ? (showPassword ? "text" : "password") : type;
  return (
    <div className={style.InputComponentContainer}>
      {labelText && <label htmlFor={registerText}>{labelText}</label>}

      <div className={style.inputWrapper}>
        {icon && icon}
        {register ? (
          <input
            {...register(registerText, { required: requiredText })}
            type={handleType}
            placeholder={placeholder}
            className={`${style.inputComponent} ${
              errors[registerText] ? style.errorInput : ""
            }`}
            style={handleStyle}
            name={registerText}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        ) : (
          <input
            type={handleType}
            placeholder={placeholder}
            className={style.inputComponent}
            style={inputStyle}
            name={registerText}
            onChange={(e) => onChange(e.target.value)}
            value={value}
          />
        )}
        {type === "password" ? (
          showPassword ? (
            <FaRegEyeSlash
              size={20}
              color="#868582"
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <FaRegEye
              size={20}
              color="#868582"
              onClick={() => setShowPassword(!showPassword)}
            />
          )
        ) : null}
        {value?.length > 0 && (
          <IoIosClose size={35} onClick={() => onChange("")} />
        )}
      </div>

      {errors && <p>{errors[registerText]?.message} </p>}
    </div>
  );
}
