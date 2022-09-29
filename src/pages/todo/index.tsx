import React from "react";
import s from "./index.module.scss";
import classNames from "classnames";
import Page from "../../components/page";
import Header from "../../components/header";
import Input from "../../components/input";
import TaskCreate from "../../components/taskcreate";

const Todo = () => {
  return (
    <Page className={s.page}>
      <div className={s.wrapper}>
        <Header />
        <TaskCreate />
        <div className={s.taskSearch}>
          <Input
            id="search"
            value="fd"
            onChange={() => {}}
            placeholder="search task"
            className={s.field}
          />
        </div>
      </div>
    </Page>
  );
};

export default Todo;
