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
  const [searchQuery, setSearchQuery] = React.useState<string>("");

  const handleChangeSearchQuery = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Page className={s.page}>
      <div className={s.wrapper}>
        <Header />
        <TaskCreate />
        <div className={s.taskSearch}>
          <Input
            id="search"
            value={searchQuery}
            onChange={handleChangeSearchQuery}
            placeholder="search"
            className={s.field}
            icon={<Search />}
            help="You can search any task by title or by description"
          />
        </div>
        <div className={s.tasks}>
          {tasks
            .filter(
              (task) =>
                task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                task.description?.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((task) => (
              <Task key={`task-${task.id}`} data={task} />
            ))}
        </div>
      </div>
    </Page>
  );
};

export default Todo;
