import React from "react";
import s from "./index.module.scss";
import classNames from "classnames";

interface LoaderProps {
  className?: string;
}

const Loader = ({ className }: LoaderProps) => {
  const container = classNames(s.container, className);

  return (
    <div className={container}>
      <span className={s.loader}></span>
    </div>
  );
};

export default Loader;
