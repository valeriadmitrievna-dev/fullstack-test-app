import React from "react";
import s from "./index.module.scss";
import { ReactComponent as Calendar } from "../../assets/calendar.svg";
import { format } from "date-fns";
import classNames from "classnames";
import Picker from "./picker";

interface DatePickerProps {
  onChange: (date: Date) => void;
  value: Date | null;
  className?: string;
}

const DatePicker = ({ onChange, value, className }: DatePickerProps) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const wrapper = classNames(s.wrapper, className);
  const dateValue = classNames(s.date, {
    [s.empty]: !value,
  });
  const [isPickerOpened, setPickerOpened] = React.useState<boolean>(false);

  const togglePicker = () => {
    setPickerOpened((pre) => !pre);
  };

  const closePicker = () => {
    setPickerOpened(false);
  };

  return (
    <div ref={wrapperRef} className={wrapper}>
      <div className={s.output} onClick={togglePicker}>
        <Calendar className={s.icon} />
        <span className={dateValue}>
          {!!value ? format(new Date(value), "dd.MM.yyyy") : "DD.MM.YYYY"}
        </span>
      </div>
      {isPickerOpened && (
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
      )}
    </div>
  );
};

export default DatePicker;
