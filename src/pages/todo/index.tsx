import React from "react";
import s from "./index.module.scss";
import classNames from "classnames";
import Page from "../../components/page";
import Header from "../../components/header";
import Input from "../../components/input";
import TaskCreate from "../../components/taskcreate";
import { ReactComponent as Search } from "../../assets/search.svg";
import { useAppSelector } from "../../redux/hooks";
import Task from "../../components/task";

const Todo = () => {
  const { tasks } = useAppSelector((state) => state.root);

  return (
    <Page className={s.page}>
      <div className={s.wrapper}>
        <Header />
        <TaskCreate />
        <div className={s.taskSearch}>
          <Input
            id="search"
            value=""
            onChange={() => {}}
            placeholder="search task"
            className={s.field}
            icon={<Search />}
          />
        </div>
        <div>
          {tasks.map((task) => (
            <Task data={task} />
          ))}
        </div>
      </div>
    </Page>
  );
};

export default Todo;
