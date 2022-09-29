import classNames from "classnames";
import React from "react";
import s from "./index.module.scss";
import Input from "../../components/input";
import TextArea from "../../components/textarea";
import { ReactComponent as Chevron } from "../../assets/chevron-down.svg";
import DatePicker from "../../components/datepicker";

const TaskCreate = () => {
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

  const header = classNames(s.header, {
    [s.active]: isTaskCreateOpened,
  });
  const chevron = classNames(s.chevron, {
    [s.active]: isTaskCreateOpened,
  });

  return (
    <div className={s.taskCreate}>
      <div className={header}>
        <h3>Create new task</h3>
        <button className={chevron} onClick={toggleTaskCreated}>
          <Chevron />
        </button>
      </div>
      <div
        className={s.body}
        style={{
          height: isTaskCreateOpened
            ? taskCreateContent.current?.getBoundingClientRect().height + "px"
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
            <DatePicker value={newTaskDate} onChange={handleSetNewTaskDate} />
            <button className={s.button}>create</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCreate;
