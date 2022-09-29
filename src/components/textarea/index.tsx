import React from "react";
import s from "./index.module.scss";
import classNames from "classnames";

interface TextAreaProps {
  id: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  label?: string;
  className?: string;
}

const TextArea = ({
  id,
  value,
  onChange,
  placeholder,
  label,
  className,
}: TextAreaProps) => {
  const textarea = classNames(s.textarea, className);
  
  return (
    <>
      {label && (
        <label className={s.label} htmlFor={id}>
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={textarea}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default TextArea;
