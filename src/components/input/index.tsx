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
  icon?: React.ReactNode;
  className?: string;
}

const Input = ({
  id,
  value,
  onChange,
  placeholder,
  label,
  type = "text",
  icon,
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
      <div className={input}>
        {!!icon && <div className={s.icon}>{icon}</div>}
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default Input;
