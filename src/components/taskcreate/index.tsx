import classNames from "classnames";
import React from "react";
import s from "./index.module.scss";
import Input from "../../components/input";
import TextArea from "../../components/textarea";
import { ReactComponent as Chevron } from "../../assets/chevron-down.svg";
import DatePicker from "../../components/datepicker";
import { isSameDay } from "date-fns";
import { getStringWithNormalSpaces } from "../../utils/helpers";
import { useAppDispatch } from "../../redux/hooks";
import { createTaskThunk } from "../../redux/thunks";
import Loader from "../loader";
import { validateTaskTitle } from "../../utils/validation";
import { createError } from "../../redux/slice";

const TaskCreate = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = React.useState<boolean>(false);
  const taskCreateContent = React.useRef<HTMLDivElement>(null);
  const [isTaskCreateOpened, setTaskCreateOpened] =
    React.useState<boolean>(false);

  const toggleTaskCreated = () => {
    setTaskCreateOpened((pre) => !pre);
  };

  const [newTaskTitle, setNewTaskTitle] = React.useState<string>("");
  const [newTaskDescription, setNewTaskDescription] =
    React.useState<string>("");
  const [newTaskDeadline, setNewTaskDeadline] = React.useState<Date | null>(
    null
  );

  const handleSetNewTaskTitle = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewTaskTitle(event.target.value);
  };
  const handleSetNewTaskDescription = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNewTaskDescription(event.target.value);
  };
  const handleSetNewTaskDeadline = (date: Date) => {
    if (newTaskDeadline && isSameDay(date, newTaskDeadline)) {
      setNewTaskDeadline(null);
    } else {
      setNewTaskDeadline(date);
    }
  };

  const handleCreateTask = () => {
    const normalizedTitle = getStringWithNormalSpaces(newTaskTitle);
    const normalizedDescription = getStringWithNormalSpaces(newTaskDescription);
    const titleError = validateTaskTitle(normalizedTitle);
    if (titleError) {
      dispatch(createError(titleError));
    } else {
      setLoading(true);
      dispatch(
        createTaskThunk({
          title: normalizedTitle,
          description: normalizedDescription.length
            ? normalizedDescription
            : null,
          deadline: newTaskDeadline,
        })
      ).then(() => {
        setNewTaskTitle("");
        setNewTaskDescription("");
        setNewTaskDeadline(null);
        setLoading(false);
      });
    }
  };

  const header = classNames(s.header, {
    [s.active]: isTaskCreateOpened,
  });
  const chevron = classNames(s.chevron, {
    [s.active]: isTaskCreateOpened,
  });

  return (
    <div className={s.taskCreate}>
      {loading ? (
        <Loader className={s.loader} />
      ) : (
        <>
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
                ? taskCreateContent?.current?.getBoundingClientRect().height +
                  "px"
                : 0,
            }}
          >
            <div ref={taskCreateContent} className={s.content}>
              <Input
                id="newTaskTitle"
                value={newTaskTitle}
                onChange={handleSetNewTaskTitle}
                placeholder="new task title"
                className={s.field}
              />
              <TextArea
                id="newTaskDescription"
                value={newTaskDescription}
                onChange={handleSetNewTaskDescription}
                placeholder="new task description"
                className={s.field}
              />
              <div className={s.footer}>
                <DatePicker
                  value={newTaskDeadline}
                  onChange={handleSetNewTaskDeadline}
                />
                <button className={s.button} onClick={handleCreateTask}>
                  create
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskCreate;
