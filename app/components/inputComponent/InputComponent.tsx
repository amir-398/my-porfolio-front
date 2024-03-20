import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import style from "./inputComponent.module.css";

interface InputComponentProps {
  type: string;
  registerText: string;
  placeholderText: string;
  register: UseFormRegisterReturn;
}

const InputComponent: React.FC<InputComponentProps> = ({
  type,
  registerText,
  register,
  placeholderText,
}) => {
  return (
    <div className={style.inputContainer}>
      <input
        {...register}
        type={type}
        name={registerText}
        placeholder={"loooooool"}
      />
    </div>
  );
};

export default InputComponent;
