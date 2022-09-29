import React from "react";
import s from "./index.module.scss";
import { Task as TaskType } from "../../types/task";

interface TaskProps {
  data: TaskType;
}

const Task = ({ data }: TaskProps) => {
  return (
    <div className={s.task}>
      <h4 className={s.title}>{data.title}</h4>
    </div>
  );
};

export default Task;
