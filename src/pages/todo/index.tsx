import React from "react";
import Header from "../../components/header";
import Page from "../../components/page";
import s from "./index.module.scss";

const Todo = () => {
  return (
    <Page className={s.page}>
      <div className={s.wrapper}>
        <Header />
        
      </div>
    </Page>
  );
};

export default Todo;
