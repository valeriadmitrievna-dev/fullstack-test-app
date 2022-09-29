import React from "react";
import s from "./index.module.scss";
import { ReactComponent as Calendar } from "../../assets/calendar.svg";
import { format } from "date-fns";
import classNames from "classnames";
import Picker from "./picker";
import useOnClickOutside from "../../hooks/useOnClickOutside";

interface DatePickerProps {
  onChange: (date: Date) => void;
  value?: Date;
  className?: string;
}

const DatePicker = ({ onChange, value, className }: DatePickerProps) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const wrapper = classNames(s.wrapper, className);
  const [isPickerOpened, setPickerOpened] = React.useState<boolean>(false);

  const togglePicker = () => {
    setPickerOpened((pre) => !pre);
  };

  const closePicker = () => {
    setPickerOpened(false);
  };

  useOnClickOutside(wrapperRef, closePicker);

  return (
    <div ref={wrapperRef} className={wrapper}>
      <div className={s.output} onClick={togglePicker}>
        <Calendar className={s.icon} />
        <span className={s.date}>
          {!!value ? format(new Date(value), "dd.MM.yyyy") : "DD.MM.YYYY"}
        </span>
      </div>
      <Picker
        opened={isPickerOpened}
        value={value}
        position={{
          x: wrapperRef?.current?.getBoundingClientRect().x || 0,
          y:
            (wrapperRef?.current?.getBoundingClientRect().y || 0) +
            (wrapperRef?.current?.getBoundingClientRect().height || 0) +
            4,
        }}
        onChange={onChange}
      />
    </div>
  );
};

export default DatePicker;
