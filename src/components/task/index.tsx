import React from "react";
import s from "./index.module.scss";
import { Task as TaskType } from "../../types/task";
import { differenceInDays, format, isSameDay } from "date-fns";
import { ReactComponent as Clock } from "../../assets/clock.svg";
import { ReactComponent as Pencil } from "../../assets/pencil.svg";
import classNames from "classnames";

interface TaskProps {
  data: TaskType;
  className?: string;
}

const Task = ({ data, className }: TaskProps) => {
  const task = classNames(s.task, className);
  const deadline = classNames(s.deadline, {
    [s.today]: data.deadline && isSameDay(new Date(data.deadline), new Date()),
    [s.expired]:
      data.deadline &&
      differenceInDays(new Date(data.deadline), new Date()) < 0,
  });

  return (
    <div className={task}>
      <button className={s.edit}>
        <Pencil />
      </button>
      <h4 className={s.title}>{data.title}</h4>
      {data.description && <p className={s.description}>{data.description}</p>}
      {data.deadline && (
        <div className={s.footer}>
          <p className={deadline}>
            <Clock className={s.icon} />
            {format(new Date(data.deadline), "dd.MM.yyyy")}
          </p>
          {isSameDay(new Date(data.deadline), new Date()) && (
            <p className={s.warning}>Task dealine is today!</p>
          )}
          {differenceInDays(new Date(data.deadline), new Date()) < 0 && (
            <p className={s.error}>Task expired!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Task;
