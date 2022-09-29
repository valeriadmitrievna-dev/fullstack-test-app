import React from "react";
import s from "./index.module.scss";
import {
  addMonths,
  differenceInDays,
  eachDayOfInterval,
  endOfMonth,
  endOfISOWeek,
  format,
  getISODay,
  isSameDay,
  isToday,
  startOfMonth,
  startOfISOWeek,
  subMonths,
} from "date-fns";
import classNames from "classnames";
import ReactPortal from "../portal";
import { ReactComponent as Chevron } from "../../assets/chevron-down.svg";

interface PickerProps {
  opened: boolean;
  position: {
    x: number;
    y: number;
  };
  onChange: (date: Date) => void;
  value: Date | null;
}

const Picker = ({ opened, value, onChange, position }: PickerProps) => {
  const picker = classNames(s.picker, {
    [s.opened]: opened,
  });
  const [currentMonth, setCurrentMonth] = React.useState<Date>(new Date());

  const nextMonth = () => {
    setCurrentMonth((pre) => addMonths(pre, 1));
  };

  const prevMonth = () => {
    setCurrentMonth((pre) => subMonths(pre, 1));
  };

  return (
    <ReactPortal wrapperId="picker-portal">
      <div
        className={picker}
        style={{ left: position.x + "px", top: position.y + "px" }}
      >
        <div className={s.header}>
          <button className={classNames(s.chevron, s.prev)} onClick={prevMonth}>
            <Chevron />
          </button>
          <span className={s.month}>{format(currentMonth, "MMMM, yyyy")}</span>
          <button className={classNames(s.chevron, s.next)} onClick={nextMonth}>
            <Chevron />
          </button>
        </div>
        <div className={s.weekdays}>
          {eachDayOfInterval({
            start: startOfISOWeek(currentMonth),
            end: endOfISOWeek(currentMonth),
          }).map((weekday) => (
            <span key={weekday.toDateString()} className={s.weekday}>
              {format(weekday, "EEE")}
            </span>
          ))}
        </div>
        <div className={s.body}>
          {eachDayOfInterval({
            start: startOfMonth(currentMonth),
            end: endOfMonth(currentMonth),
          }).map((day) => (
            <button
              key={day.toDateString()}
              className={classNames(s.day, {
                [s.today]: isToday(day),
                [s.active]: value && isSameDay(day, value),
              })}
              disabled={differenceInDays(day, new Date()) < 0}
              onClick={() => onChange(day)}
              style={{
                gridColumn: getISODay(day),
              }}
            >
              {format(day, "d")}
            </button>
          ))}
        </div>
      </div>
    </ReactPortal>
  );
};

export default Picker;
