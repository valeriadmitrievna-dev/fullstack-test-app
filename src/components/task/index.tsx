import React from "react";
import s from "./index.module.scss";
import { Task as TaskType } from "../../types/task";
import { differenceInDays, format, isSameDay } from "date-fns";
import { ReactComponent as Clock } from "../../assets/clock.svg";
import { ReactComponent as Pencil } from "../../assets/pencil.svg";
import { ReactComponent as Trash } from "../../assets/trash.svg";
import { ReactComponent as Eye } from "../../assets/eye.svg";
import classNames from "classnames";
import Modal from "../modal";
import Input from "../input";
import TextArea from "../textarea";
import DatePicker from "../datepicker";
import { useAppDispatch } from "../../redux/hooks";
import { deleteTaskThunk, editTaskThunk } from "../../redux/thunks";

interface TaskProps {
  data: TaskType;
  className?: string;
}

const Task = ({ data, className }: TaskProps) => {
  const dispatch = useAppDispatch();
  const task = classNames(s.task, className);
  const deadlineStyle = classNames(s.deadline, {
    [s.today]: data.deadline && isSameDay(new Date(data.deadline), new Date()),
    [s.expired]:
      data.deadline &&
      differenceInDays(new Date(data.deadline), new Date()) < 0,
  });

  const [isModalOpened, setModalOpened] = React.useState<boolean>(false);

  const openModal = () => {
    setModalOpened(true);
  };
  const closeModal = () => {
    setModalOpened(false);
  };

  const [title, setTitle] = React.useState<string>(data.title);
  const [description, setDescription] = React.useState<string>(
    data.description || ""
  );
  const [deadline, setDeadline] = React.useState<Date | null>(data.deadline);

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleChangeDescription = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };
  const handleChangeDeadline = (date: Date) => {
    setDeadline(date);
  };

  const handleEditTask = () => {
    dispatch(
      editTaskThunk({
        id: data.id,
        body: {
          title,
          description,
          deadline,
        },
      })
    ).then(closeModal);
  };

  const handleDeleteTask = () => {
    dispatch(deleteTaskThunk(data.id));
  };

  const [isInfoModalOpened, setInfoModalOpened] =
    React.useState<boolean>(false);

  const openInfoModal = () => {
    setInfoModalOpened(true);
  };
  const closeInfoModal = () => {
    setInfoModalOpened(false);
  };

  return (
    <>
      {isInfoModalOpened && (
        <Modal
          opened={isInfoModalOpened}
          close={closeInfoModal}
          title={data.title}
        >
          {data.description && (
            <>
              <p className={s.subtitle}>Description:</p>
              <p>{data.description}</p>
            </>
          )}
          {data.deadline && (
            <>
              <p className={s.subtitle}>Deadline:</p>
              <p>{format(new Date(data.deadline), 'dd MMMM, yyyy')}</p>
            </>
          )}
        </Modal>
      )}
      {isModalOpened && (
        <Modal title="Edit task" opened={isModalOpened} close={closeModal}>
          <Input
            id="editTitle"
            value={title}
            onChange={handleChangeTitle}
            label="title"
            className={s.field}
          />
          <TextArea
            id="editDescription"
            value={description}
            onChange={handleChangeDescription}
            label="description"
            className={s.field}
          />
          <div className={s.row}>
            <DatePicker value={deadline} onChange={handleChangeDeadline} />
            <button
              disabled={
                title === data.title &&
                (!data.description || description == data.description) &&
                isSameDay(
                  data.deadline ? new Date(data.deadline) : new Date(),
                  deadline ? new Date(deadline) : new Date()
                )
              }
              onClick={handleEditTask}
              className={s.save}
            >
              save
            </button>
          </div>
        </Modal>
      )}
      <div className={task}>
        <div className={s.manage}>
          <button
            className={classNames(s.button, s.check)}
            onClick={openInfoModal}
          >
            <Eye />
          </button>
          <button className={classNames(s.button, s.edit)} onClick={openModal}>
            <Pencil />
          </button>
          <button
            className={classNames(s.button, s.delete)}
            onClick={handleDeleteTask}
          >
            <Trash />
          </button>
        </div>
        <h4 className={s.title}>{data.title}</h4>
        {data.description && (
          <p className={s.description}>{data.description}</p>
        )}
        {data.deadline && (
          <div className={s.footer}>
            <p className={deadlineStyle}>
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
    </>
  );
};

export default Task;
