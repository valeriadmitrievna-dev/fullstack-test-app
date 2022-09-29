import React from "react";
import Header from "../../components/header";
import Input from "../../components/input";
import Page from "../../components/page";
import TextArea from "../../components/textarea";
import s from "./index.module.scss";
import { ReactComponent as Chevron } from "../../assets/chevron-down.svg";
import classNames from "classnames";
import DatePicker from "../../components/datepicker";

const Todo = () => {
  const taskCreateContent = React.useRef<HTMLDivElement>(null);
  const [isTaskCreateOpened, setTaskCreateOpened] =
    React.useState<boolean>(true);

  const toggleTaskCreated = () => {
    setTaskCreateOpened((pre) => !pre);
  };

  const [newTaskDate, setNewTaskDate] = React.useState<Date>();

  const handleSetNewTaskDate = (date: Date) => {
    setNewTaskDate(date);
  };

  return (
    <Page className={s.page}>
      <div className={s.wrapper}>
        <Header />
        <div className={s.taskSearch}>
          <Input
            id="search"
            value=""
            onChange={() => {}}
            label="search task"
            className={s.field}
          />
        </div>
        <div className={s.taskCreate}>
          <div
            className={classNames(s.header, {
              [s.active]: isTaskCreateOpened,
            })}
          >
            <h3>Create new task</h3>
            <button
              className={classNames(s.chevron, {
                [s.rotated]: isTaskCreateOpened,
              })}
              onClick={toggleTaskCreated}
            >
              <Chevron />
            </button>
          </div>
          <div
            className={s.body}
            style={{
              height: isTaskCreateOpened
                ? taskCreateContent.current?.getBoundingClientRect().height +
                  "px"
                : 0,
            }}
          >
            <div ref={taskCreateContent} className={s.content}>
              <Input
                id="newTaskTitle"
                value=""
                onChange={() => {}}
                placeholder="new task title"
                className={s.field}
              />
              <TextArea
                id="newTaskDescription"
                value=""
                onChange={() => {}}
                placeholder="new task description"
                className={s.field}
              />
              <div className={s.footer}>
                <DatePicker
                  value={newTaskDate}
                  onChange={handleSetNewTaskDate}
                />
                <button className={s.button}>create</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Todo;
