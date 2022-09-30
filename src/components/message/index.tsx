import classNames from "classnames";
import React from "react";
import s from "./index.module.scss";
import { ReactComponent as Error } from "../../assets/error-circle.svg";
import { ReactComponent as Info } from "../../assets/info-circle.svg";
import { ReactComponent as Success } from "../../assets/success-circle.svg";
import { useAppDispatch } from "../../redux/hooks";
import { removeError } from "../../redux/slice";
import ReactPortal from "../portal";

interface MessageProps {
  children: React.ReactNode;
  type?: "error" | "success" | "info";
}

let unmountTimeout: ReturnType<typeof setTimeout>;
let animationTimeout: ReturnType<typeof setTimeout>;

const Message = ({ children, type = "info" }: MessageProps) => {
  const dispatch = useAppDispatch();
  const [isMessageClosing, setMessageClosing] = React.useState<boolean>(false);
  const message = classNames(s.message, s[type], {
    [s.closing]: isMessageClosing,
  });

  React.useEffect(() => {
    animationTimeout = setTimeout(() => {
      setMessageClosing(true);
    }, 2700);

    unmountTimeout = setTimeout(() => {
      dispatch(removeError());
    }, 3000);

    return () => {
      dispatch(removeError());
      clearTimeout(animationTimeout);
      clearTimeout(unmountTimeout);
    };
  }, []);

  return (
    <ReactPortal wrapperId="message-portal">
      <div className={message}>
        {type === "info" && <Info className={s.icon} />}
        {type === "success" && <Success className={s.icon} />}
        {type === "error" && <Error className={s.icon} />}
        {children}
      </div>
    </ReactPortal>
  );
};

export default Message;
