import React from "react";
import s from "./index.module.scss";
import classNames from "classnames";

interface InputProps {
  id: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
  type?: "text" | "password";
  className?: string;
}

const Input = ({
  id,
  value,
  onChange,
  placeholder,
  label,
  type = "text",
  className,
}: InputProps) => {
  const input = classNames(s.input, className);
  return (
    <>
      {label && (
        <label className={s.label} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={input}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
