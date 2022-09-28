import classNames from "classnames";
import React from "react";
import s from "./index.module.scss";

interface PageProps {
  children: React.ReactNode;
  className?: string;
}

const Page = ({ children, className }: PageProps) => {
  const page = classNames(s.wrapper, className);

  return <div className={page}>{children}</div>;
};

export default Page;
