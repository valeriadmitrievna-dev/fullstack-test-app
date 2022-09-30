import React from "react";
import s from "./index.module.scss";
import classNames from "classnames";

interface LoaderProps {
  small?: boolean;
  className?: string;
}

const Loader = ({ small, className }: LoaderProps) => {
  const container = classNames(s.container, className, {
    [s.small]: small,
  });

  return (
    <div className={container}>
      <span className={s.loader}></span>
    </div>
  );
};

export default Loader;
